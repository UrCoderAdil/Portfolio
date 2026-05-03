"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

const ThreeBackground = dynamic(
  () => import("./components/ThreeBackground"),
  { ssr: false }
);

export default function Home() {
  const greetRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(greetRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(nameRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.2")
      .fromTo(roleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(bioRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.25")
      .fromTo(statsRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
      .fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
      .fromTo(imgRef.current, { opacity: 0, scale: 0.88 }, { opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.4)" }, "-=0.8");
  }, []);

  const stats = [
    { value: "3+", label: "Projects" },
    { value: "2+", label: "Years Exp" },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <div className="relative h-full overflow-hidden">
      <ThreeBackground />

      <motion.div
        className="relative z-10 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-12 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-48">

          {/* ── LEFT: text ────────────────────────────── */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6 pb-4 sm:pb-0">

            <span
              ref={greetRef}
              className="text-xs font-semibold tracking-[0.22em] text-[var(--text-2)] uppercase opacity-0"
            >
              Hey there — I&apos;m
            </span>

            <h1
              ref={nameRef}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-[var(--text-1)] opacity-0"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Muhammad
              <br />
              <span className="text-gradient">Adil.</span>
            </h1>

            <p
              ref={roleRef}
              className="text-base sm:text-lg font-medium text-[var(--text-2)] opacity-0 flex flex-wrap items-center gap-x-3 gap-y-1"
            >
              <span>Full-Stack Developer</span>
              <span className="text-[var(--border)]">·</span>
              <span className="text-gradient font-semibold">AI / CV Solutions</span>
            </p>

            <p
              ref={bioRef}
              className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed max-w-md opacity-0"
            >
              I architect scalable web applications and AI-powered solutions —
              blending clean engineering with computer vision, deep learning,
              and pixel-perfect interfaces that users love to interact with.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="flex gap-8 py-2 opacity-0">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`flex flex-col ${i > 0 ? "pl-8 border-l border-[var(--border)]" : ""}`}
                >
                  <span className="text-2xl font-bold text-[var(--text-1)]" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {value}
                  </span>
                  <span className="text-xs text-[var(--text-3)] font-medium mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 opacity-0">
              <Link href="/portfolio">
                <button className="group relative overflow-hidden bg-[var(--text-1)] text-[var(--bg)] text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-0.5">
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="text-sm font-semibold px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-2)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5">
                  Get in Touch
                </button>
              </Link>

              <a
                href="https://github.com/UrCoderAdil"
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-[var(--text-3)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-adil-818a13319/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-3)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: circular photo ────────────────── */}
          <div
            ref={imgRef}
            className="flex-shrink-0 flex items-center justify-center opacity-0"
          >
            <div className="relative flex items-center justify-center w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px]">

              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-indigo-400/10 dark:bg-indigo-400/5 blur-3xl scale-110" />

              {/* Outer rotating dashed ring */}
              <div className="spin-slow absolute inset-[-18px] sm:inset-[-22px] rounded-full border border-dashed border-indigo-300/40 dark:border-indigo-500/20" />

              {/* Inner static ring */}
              <div className="absolute inset-[-8px] sm:inset-[-10px] rounded-full border border-[var(--border)]" />

              {/* Photo circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[var(--surface)] shadow-2xl shadow-indigo-100/50 dark:shadow-indigo-900/30">
                <Image
                  src="/h1.png"
                  alt="Muhammad Adil"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Available badge */}
              <div className="absolute bottom-3 -right-2 sm:bottom-5 sm:-right-4 bg-[var(--surface)] rounded-full px-3 py-1.5 shadow-xl border border-[var(--border)] flex items-center gap-1.5 z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[11px] font-semibold text-[var(--text-1)] whitespace-nowrap">
                  Available
                </span>
              </div>

              {/* Code badge */}
              <div className="absolute top-4 -left-3 sm:top-6 sm:-left-6 bg-[var(--surface)] rounded-xl px-3 py-2 shadow-xl border border-[var(--border)] z-10">
                <p className="text-[10px] font-mono text-[var(--text-2)]">
                  <span className="text-[var(--accent)]">const</span> dev ={" "}
                  <span className="text-emerald-500">&quot;Adil&quot;</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
