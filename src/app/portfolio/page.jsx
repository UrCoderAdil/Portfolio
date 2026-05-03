"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "MOJITO — Cocktail",
    category: "Landing Page",
    year: "2024",
    desc: "An eye-catching interactive landing page built with GSAP delivering smooth, modern animations and a lively user experience that converts visitors.",
    img: "/s2.png",
    link: "https://mojito-cocktail-landing-page.vercel.app/",
    tech: ["GSAP", "HTML/CSS", "JavaScript"],
    featured: true,
  },
  {
    id: 2,
    title: "Zentry — Game",
    category: "Web App",
    year: "2024",
    desc: "An immersive game landing page with dynamic GSAP animations, bold visuals, and silky-smooth interactions that capture the thrill of gaming.",
    img: "/s1.png",
    link: "https://next-js-zentry-landpage.vercel.app/",
    tech: ["Next.js", "GSAP", "Tailwind"],
    featured: false,
  },
  {
    id: 3,
    title: "MyBlog",
    category: "Full-Stack App",
    year: "2025",
    desc: "A modern responsive blog platform with clean design, smooth navigation, and an elegant layout for sharing ideas and insights.",
    img: "/s3.png",
    link: "https://my-blog-beta-six-17.vercel.app/",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  if (project.featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="group relative bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative w-full lg:w-3/5 aspect-video lg:aspect-auto lg:min-h-[360px] overflow-hidden bg-[var(--surface-2)]">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--surface)]/0 lg:to-[var(--surface)]/60" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[var(--surface)]/90 backdrop-blur-sm text-[var(--text-2)] text-[11px] font-semibold rounded-full px-3 py-1 border border-[var(--border)]">
                {project.category}
              </span>
              <span className="bg-indigo-500/10 text-[var(--accent)] text-[11px] font-semibold rounded-full px-3 py-1">
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between p-8 lg:p-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-3)]">01 / {String(projects.length).padStart(2, "0")}</span>
                <span className="text-xs text-[var(--text-3)]">{project.year}</span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[var(--text-1)] tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {project.title}
              </h2>
              <p className="text-[var(--text-2)] text-sm leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-[var(--text-2)] bg-[var(--surface-2)] border border-[var(--border)] rounded-full px-3 py-1 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <Link href={project.link} target="_blank" className="mt-8 self-start">
                <button className="group/btn flex items-center gap-2 bg-[var(--text-1)] text-[var(--bg)] text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-[var(--accent)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20">
                  View Live
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1.5"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[var(--surface-2)]">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--text-1)]/0 group-hover:bg-[var(--text-1)]/40 transition-all duration-400 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            {project.link && (
              <Link href={project.link} target="_blank">
                <span className="bg-[var(--surface)] text-[var(--text-1)] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[var(--accent)] hover:text-white transition-colors duration-200 flex items-center gap-2">
                  View Live
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-[var(--surface)]/90 backdrop-blur-sm text-[var(--text-2)] text-[11px] font-semibold rounded-full px-3 py-1 border border-[var(--border)]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <h3
            className="text-xl font-bold text-[var(--text-1)] tracking-tight"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {project.title}
          </h3>
          <span className="text-xs text-[var(--text-3)] font-medium flex-shrink-0 ml-2 mt-1">
            {project.year}
          </span>
        </div>
        <p className="text-[var(--text-2)] text-sm leading-relaxed line-clamp-2">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="text-xs text-[var(--text-3)] bg-[var(--surface-2)] rounded-full px-2.5 py-0.5 font-medium border border-[var(--border)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioPage = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <motion.div
      className="min-h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 xl:px-48 py-16 flex flex-col gap-16">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col gap-4 opacity-0">
          <span className="text-xs font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
            Selected Work
          </span>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--text-1)] tracking-tight leading-none"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            My Work
          </h1>
          <p className="text-[var(--text-2)] text-base max-w-xl leading-relaxed">
            A curated selection of projects I&apos;ve designed and engineered —
            spanning interactive web apps, AI-powered tools, and full-stack platforms.
          </p>
          {/* Quick stats */}
          <div className="flex gap-6 pt-2">
            {[
              { v: "3+", l: "Live Projects" },
              { v: "2+", l: "Years Experience" },
              { v: "100%", l: "Client Satisfaction" },
            ].map(({ v, l }, i) => (
              <div
                key={l}
                className={`flex flex-col ${i > 0 ? "pl-6 border-l border-[var(--border)]" : ""}`}
              >
                <span className="text-xl font-bold text-[var(--text-1)]" style={{ fontFamily: "var(--font-jakarta)" }}>{v}</span>
                <span className="text-xs text-[var(--text-3)] font-medium mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured project */}
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} index={0} />
        ))}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 1} />
          ))}

          {/* "More coming" placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[var(--surface-2)] rounded-2xl border border-dashed border-[var(--border)] flex flex-col items-center justify-center p-10 gap-3 group hover:border-[var(--accent)]/50 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--border)] flex items-center justify-center text-[var(--text-3)] group-hover:bg-[var(--accent)]/10 group-hover:text-[var(--accent)] transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[var(--text-3)] text-center">
              More projects coming soon
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-8 sm:p-10 relative overflow-hidden"
        >
          {/* bg decoration */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="flex flex-col gap-2 relative z-10">
            <h3
              className="text-2xl sm:text-3xl font-bold text-[var(--text-1)] tracking-tight"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Have a project in mind?
            </h3>
            <p className="text-[var(--text-2)] text-sm">
              I&apos;m open to freelance, collaborations & full-time opportunities.
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10 flex-shrink-0">
            <div className="relative flex items-center justify-center">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 16, ease: "linear", repeat: Infinity }}
                viewBox="0 0 300 300"
                className="w-24 h-24 opacity-50"
              >
                <defs>
                  <path id="cp2" d="M 150,150 m -60,0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0" />
                </defs>
                <text fill="currentColor" fontSize="13" className="text-[var(--accent)]" letterSpacing="2">
                  <textPath xlinkHref="#cp2">Open to work · Hire Me ·</textPath>
                </text>
              </motion.svg>
              <Link
                href="/contact"
                className="absolute w-10 h-10 bg-[var(--text-1)] text-[var(--bg)] rounded-full flex items-center justify-center text-xs font-bold hover:bg-[var(--accent)] transition-all duration-200 hover:scale-110"
              >
                →
              </Link>
            </div>

            <Link href="/contact">
              <button className="group relative overflow-hidden bg-[var(--text-1)] text-[var(--bg)] text-sm font-semibold px-7 py-3.5 rounded-xl hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300">
                <span className="relative z-10">Let&apos;s Talk</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default PortfolioPage;
