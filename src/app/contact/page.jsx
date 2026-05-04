"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/UrCoderAdil",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-adil-818a13319/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -36 }, { opacity: 1, x: 0, duration: 0.85, ease: "power3.out", delay: 0.3 });
      gsap.fromTo(rightRef.current, { opacity: 0, x: 36 }, { opacity: 1, x: 0, duration: 0.85, ease: "power3.out", delay: 0.5 });
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to send. Please try again.");
      } else {
        setSuccess(true);
        setFields({ name: "", email: "", message: "" });
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "border rounded-xl outline-none p-4 text-sm placeholder:text-[var(--text-3)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition-all duration-200 w-full";
  const inputStyle = {
    background: "var(--surface-2)",
    borderColor: "var(--border)",
    color: "var(--text-1)",
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-48 overflow-y-auto lg:overflow-hidden py-8 lg:py-0">

        {/* LEFT */}
        <div ref={leftRef} className="w-full lg:h-full lg:w-1/2 flex flex-col justify-center gap-8 opacity-0">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
              Contact
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] text-[var(--text-1)]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Let&apos;s build
              <br />
              <span className="text-gradient">something great</span>
              <br />
              together.
            </h1>
            <p className="text-[var(--text-2)] text-sm leading-relaxed max-w-sm mt-1">
              Whether you have a project, a question, or just want to say hello
              — my inbox is always open and I reply promptly.
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold text-[var(--text-3)] uppercase tracking-wider">
              Direct email
            </span>
            <a
              href="mailto:adilumer2005@gmail.com"
              className="group text-[var(--text-1)] font-semibold text-base hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-2"
            >
              adilumer2005@gmail.com
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-semibold text-[var(--text-3)] uppercase tracking-wider">
              Find me on
            </span>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  className="flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-2 text-[var(--text-2)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium shadow-sm"
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3 bg-[var(--surface)] rounded-xl border border-[var(--border)] px-4 py-3 w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-xs font-medium text-[var(--text-2)]">
              Currently available for new projects
            </span>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div ref={rightRef} className="w-full lg:h-full lg:w-1/2 flex items-center opacity-0">
          <form
            onSubmit={sendEmail}
            className="w-full bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-sm p-7 sm:p-8 flex flex-col gap-5"
          >
            <div>
              <h2
                className="text-lg font-bold text-[var(--text-1)]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Send a message
              </h2>
              <p className="text-xs text-[var(--text-3)] mt-0.5">
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[var(--text-3)] uppercase tracking-wider">
                Your name
              </label>
              <input
                name="name"
                type="text"
                value={fields.name}
                onChange={handleChange}
                placeholder="Muhammad Adil"
                required
                style={inputStyle}
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[var(--text-3)] uppercase tracking-wider">
                Your email
              </label>
              <input
                name="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                style={inputStyle}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[var(--text-3)] uppercase tracking-wider">
                Your message
              </label>
              <textarea
                rows={5}
                name="message"
                value={fields.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                required
                style={inputStyle}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group relative overflow-hidden bg-[var(--text-1)] text-[var(--bg)] font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                {sending ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </button>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                  Message sent! I&apos;ll be in touch soon.
                </span>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4"
              >
                <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-600 dark:text-red-400 text-sm font-medium">
                  {error}
                </span>
              </motion.div>
            )}
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default ContactPage;
