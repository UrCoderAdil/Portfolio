import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter — resets per serverless cold-start, good enough for a portfolio
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3;              // max 3 submissions per IP per hour

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count++;
  return { allowed: true };
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  // ── Rate limit ────────────────────────────────────────────────────────────
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: `Too many requests. Please try again in ${retryAfter} seconds.` },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  // ── Parse body ────────────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  // ── Validate ──────────────────────────────────────────────────────────────
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "Input exceeds the maximum allowed length." },
      { status: 400 }
    );
  }

  // ── Guard: API key ────────────────────────────────────────────────────────
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  // ── Send via Resend ───────────────────────────────────────────────────────
  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

  const { data: resendData, error: resendError } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "adilumer2005@gmail.com",
    replyTo: email.trim(),
    subject: `New message from ${name.trim()}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:28px;background:#f8fafc;border-radius:14px;">
        <h2 style="color:#0f172a;margin:0 0 20px;">📬 New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.06);">
          <tr style="background:#f1f5f9;">
            <td style="padding:12px 16px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;width:90px;">Name</td>
            <td style="padding:12px 16px;color:#0f172a;font-weight:600;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;">Email</td>
            <td style="padding:12px 16px;"><a href="mailto:${safeEmail}" style="color:#6366f1;font-weight:600;">${safeEmail}</a></td>
          </tr>
          <tr style="background:#f1f5f9;">
            <td style="padding:12px 16px;color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;vertical-align:top;">Message</td>
            <td style="padding:12px 16px;color:#0f172a;line-height:1.65;">${safeMessage}</td>
          </tr>
        </table>
        <p style="margin:20px 0 0;color:#94a3b8;font-size:12px;">Sent from your portfolio contact form.</p>
      </div>
    `,
  });

  if (resendError) {
    console.error("[contact] Resend error:", JSON.stringify(resendError));
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }

  console.log("[contact] Email sent, id:", resendData?.id);
  return NextResponse.json({ success: true });
}
