"use client";
import Brain from "../components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { certifications } from "../data/certifications";

const skills = [
  { label: "Python",       category: "lang" },
  { label: "Java",         category: "lang" },
  { label: "JavaScript",   category: "lang" },
  { label: "TypeScript",   category: "lang" },
  { label: "C / C++",      category: "lang" },
  { label: "Next.js",      category: "frame" },
  { label: "React.js",     category: "frame" },
  { label: "Node.js",      category: "frame" },
  { label: "Express",      category: "frame" },
  { label: "MongoDB",      category: "db" },
  { label: "Firebase",     category: "db" },
  { label: "Tailwind CSS", category: "design" },
  { label: "Bootstrap",    category: "design" },
  { label: "Android Dev",  category: "mobile" },
  { label: "DSA",          category: "cs" },
  { label: "Copywriting",  category: "other" },
  { label: "Video Editing",category: "other" },
  { label: "Deep Learning",category: "ai" },
  { label: "OpenCV",       category: "ai" },
];

const categoryColor = {
  lang:   "bg-sky-50 border-sky-200 text-sky-700 dark:bg-sky-900/20 dark:border-sky-700 dark:text-sky-400",
  frame:  "bg-violet-50 border-violet-200 text-violet-700 dark:bg-violet-900/20 dark:border-violet-700 dark:text-violet-400",
  db:     "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-700 dark:text-emerald-400",
  design: "bg-pink-50 border-pink-200 text-pink-700 dark:bg-pink-900/20 dark:border-pink-700 dark:text-pink-400",
  mobile: "bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-400",
  cs:     "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/20 dark:border-indigo-700 dark:text-indigo-400",
  ai:     "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-400",
  other:  "bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-800/40 dark:border-slate-700 dark:text-slate-400",
};

const experiences = [
  {
    side: "left",
    title: "AI & Computer Vision Projects",
    desc: "Recommendation engines, sign recognition, and camera-driven interactions using Python, OpenCV, and MediaPipe.",
    date: "2026",
    company: "Independent Projects",
  },
  {
    side: "right",
    title: "Full-Stack & Backend Projects",
    desc: "Multi-tenant business assistants and pipeline dashboards connecting Next.js interfaces with Python and NestJS services.",
    date: "2026",
    company: "Independent Projects",
  },
  {
    side: "left",
    title: "Interactive Web Projects",
    desc: "Responsive web interfaces and scroll-driven animation experiments with Next.js, React, and GSAP.",
    date: "2024 – Present",
    company: "Independent Projects",
  },
];

const stats = [
  { value: "8", label: "Selected Projects" },
  { value: "5", label: "Engineering Projects" },
  { value: "19+", label: "Technologies" },
];

const ScrollCue = () => (
  <motion.div
    initial={{ opacity: 0.3, y: 0 }}
    animate={{ opacity: 0.6, y: 8 }}
    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 24 24" fill="none" width={28} height={28} style={{ color: "var(--text-3)" }}>
      <path d="M5 15C5 16.86 5.74 18.64 7.05 19.95C8.36 21.26 10.14 22 12 22s3.64-.74 4.95-2.05C18.26 18.64 19 16.86 19 15V9c0-1.86-.74-3.64-2.05-4.95C15.64 2.74 13.86 2 12 2s-3.64.74-4.95 2.05C5.74 5.36 5 7.14 5 9v6Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 6v8M15 11l-3 3-3-3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  </motion.div>
);

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef(null);
  const isSkillInView = useInView(skillRef, { margin: "-80px" });

  const expRef = useRef(null);
  const isExpInView = useInView(expRef, { margin: "-80px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>

        {/* ── Content column ─────────────────────── */}
        <div className="p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 flex flex-col gap-20 lg:gap-24 lg:w-[65%] xl:w-[60%]">

          {/* ─── Biography ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-7"
          >
            {/* Author card */}
            <div
              className="flex items-center gap-4 rounded-2xl border p-4 shadow-sm w-fit"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-[var(--border)]">
                <Image src="/e2.png" alt="Adil" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-[var(--text-1)] text-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Muhammad Adil
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--accent)" }}>
                  Full-Stack Dev · AI / CV Solutions
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-medium" style={{ color: "var(--text-3)" }}>
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* Section label */}
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--accent)" }}>
                About Me
              </span>
              <h1
                className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
                style={{ color: "var(--text-1)", fontFamily: "var(--font-jakarta)" }}
              >
                Biography
              </h1>
            </div>

            {/* Stats row */}
            <div className="flex gap-8">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`flex flex-col ${i > 0 ? "pl-8 border-l" : ""}`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "var(--text-1)", fontFamily: "var(--font-jakarta)" }}
                  >
                    {value}
                  </span>
                  <span className="text-xs font-medium mt-0.5" style={{ color: "var(--text-3)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bio text */}
            <div className="flex flex-col gap-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
              <p>
                I build software at the intersection of applied AI and full-stack engineering.
                My projects connect conversational agents, recommendation models, and computer vision
                with the APIs and interfaces that make them usable.
              </p>
              <p>
                I work with Python, FastAPI, Next.js, React, and tools such as OpenCV and MediaPipe.
                I learn by building the system, understanding its limits, and improving how the pieces
                work together — from data and model behavior to the user experience.
              </p>
            </div>

            {/* Quote */}
            <blockquote
              className="border-l-2 pl-5 text-sm leading-relaxed italic"
              style={{ borderColor: "var(--accent)", color: "var(--text-2)" }}
            >
              &ldquo;I don&apos;t just want to learn how things work — I want to build what matters,
              connect logic with creativity, and leave behind something that speaks for itself.&rdquo;
            </blockquote>

            <div className="opacity-40 self-end">
              <img className="h-12" src="/sign1.png" alt="signature" />
            </div>

            <ScrollCue />
          </motion.div>

          {/* ─── Skills ─── */}
          <div className="flex flex-col gap-7" ref={skillRef}>
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--accent)" }}>
                Expertise
              </span>
              <motion.h2
                initial={{ x: -40, opacity: 0 }}
                animate={isSkillInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mt-2 text-4xl font-bold tracking-tight"
                style={{ color: "var(--text-1)", fontFamily: "var(--font-jakarta)" }}
              >
                Skills
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isSkillInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((s) => (
                <span
                  key={s.label}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${categoryColor[s.category]}`}
                >
                  {s.label}
                </span>
              ))}
            </motion.div>

            <ScrollCue />
          </div>

          <section aria-labelledby="certifications-heading" className="flex flex-col gap-7">
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--accent)]">Continued Learning</span>
              <h2 id="certifications-heading" className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-1)]" style={{ fontFamily: "var(--font-jakarta)" }}>Certifications</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">Selected credentials in applied AI, machine learning, and the mathematics behind it.</p>
            </div>
            <div className="grid gap-4">
              {certifications.map((cert) => (
                <article key={cert.url} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col gap-3 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[var(--accent)]">{cert.issuer}</span>
                    <time dateTime={cert.datetime} className="text-xs text-[var(--text-3)]">{cert.date}</time>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-[var(--text-1)]">{cert.title}</h3>
                  <p className="text-xs font-medium text-[var(--text-3)]">{cert.kind}</p>
                  <p className="text-sm leading-relaxed text-[var(--text-2)]">{cert.desc}</p>
                  <div className="flex flex-wrap gap-4 pt-2 text-sm font-semibold text-[var(--accent)]">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-4" aria-label={`Verify ${cert.title}`}>Verify credential <span aria-hidden="true">↗</span></a>
                    <a href={`/certifications/${cert.pdf}`} target="_blank" rel="noopener noreferrer" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-4" aria-label={`View ${cert.title} certificate PDF`}>View certificate (PDF)</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ─── Experience ─── */}
          <div className="flex flex-col gap-7 pb-24" ref={expRef}>
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--accent)" }}>
                Background
              </span>
              <motion.h2
                initial={{ x: -40, opacity: 0 }}
                animate={isExpInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mt-2 text-4xl font-bold tracking-tight"
                style={{ color: "var(--text-1)", fontFamily: "var(--font-jakarta)" }}
              >
                Project Experience
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isExpInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative"
            >
              {/* Timeline spine */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{ background: "var(--border)" }}
              />

              {experiences.map((exp, i) => (
                <div key={i} className="flex justify-between h-44 relative">
                  {/* LEFT slot */}
                  <div className="w-[43%]">
                    {exp.side === "left" && (
                      <div
                        className="rounded-xl border p-4 shadow-sm h-fit"
                        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                      >
                        <p className="font-semibold text-sm" style={{ color: "var(--text-1)" }}>
                          {exp.title}
                        </p>
                        <p className="text-xs mt-1 italic leading-relaxed" style={{ color: "var(--text-2)" }}>
                          {exp.desc}
                        </p>
                        <p className="text-xs font-semibold mt-2" style={{ color: "var(--accent)" }}>
                          {exp.date}
                        </p>
                        <span
                          className="mt-1.5 inline-block text-[11px] font-semibold rounded-full px-2.5 py-0.5"
                          style={{ background: "var(--surface-2)", color: "var(--accent)" }}
                        >
                          {exp.company}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="w-[14%] flex justify-center z-10">
                    <div className="relative w-px">
                      <div
                        className="absolute top-6 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2"
                        style={{
                          background: "var(--surface)",
                          borderColor: "var(--accent)",
                          boxShadow: "0 0 0 3px color-mix(in srgb, var(--accent) 14%, transparent)",
                        }}
                      />
                    </div>
                  </div>

                  {/* RIGHT slot */}
                  <div className="w-[43%]">
                    {exp.side === "right" && (
                      <div
                        className="rounded-xl border p-4 shadow-sm h-fit"
                        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                      >
                        <p className="font-semibold text-sm" style={{ color: "var(--text-1)" }}>
                          {exp.title}
                        </p>
                        <p className="text-xs mt-1 italic leading-relaxed" style={{ color: "var(--text-2)" }}>
                          {exp.desc}
                        </p>
                        <p className="text-xs font-semibold mt-2" style={{ color: "var(--accent)" }}>
                          {exp.date}
                        </p>
                        <span
                          className="mt-1.5 inline-block text-[11px] font-semibold rounded-full px-2.5 py-0.5"
                          style={{ background: "var(--surface-2)", color: "var(--accent)" }}
                        >
                          {exp.company}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* ── Brain column ─── */}
        <div
          className="hidden lg:flex lg:w-[35%] xl:w-[40%] sticky top-0 h-screen flex-col items-center justify-center gap-3"
          style={{ borderLeft: "1px solid var(--border)" }}
        >
          {/* Scale the brain down uniformly — no clipping */}
          <div
            className="w-full h-[85%] flex items-center justify-center"
            style={{ transform: "scale(0.72)", transformOrigin: "center center" }}
          >
            <Brain scrollYProgress={scrollYProgress} />
          </div>

          {/* Label */}
          <div className="flex flex-col items-center gap-0.5 text-center mt-auto mb-6">
            <p
              className="text-[11px] font-semibold tracking-widest uppercase"
              style={{ color: "var(--text-3)" }}
            >
              Neural Map
            </p>
            <p className="text-[10px]" style={{ color: "var(--text-3)" }}>
              Scroll to animate
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
