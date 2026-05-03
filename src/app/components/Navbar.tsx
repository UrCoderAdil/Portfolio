"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { url: "/", name: "Home" },
  { url: "/portfolio", name: "Work" },
  { url: "/about", name: "About" },
  { url: "/contact", name: "Contact" },
];

const socials = [
  { href: "https://github.com/UrCoderAdil", src: "/github.png", alt: "github" },
  {
    href: "https://www.linkedin.com/in/muhammad-adil-818a13319/",
    src: "/linkedin.png",
    alt: "linkedin",
  },
  { href: "https://www.instagram.com", src: "/instagram.png", alt: "instagram" },
  { href: "https://www.facebook.com/", src: "/facebook.png", alt: "facebook" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuVars = {
    closed: { opacity: 0, y: -8, pointerEvents: "none" as const },
    opened: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: { staggerChildren: 0.06, when: "beforeChildren" },
    },
  };
  const itemVars = {
    closed: { opacity: 0, y: 16 },
    opened: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`h-full flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 xl:px-48 transition-all duration-300 ${
        scrolled ? "navbar-blur" : ""
      }`}
    >
      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-7">
        {links.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center relative z-50">
        <Link href="https://github.com/UrCoderAdil" target="_blank">
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-[var(--border)] hover:ring-[var(--accent)] transition-all duration-200 hover:scale-105">
            <Image
              src={open ? "/logo.png" : "/logoblack.png"}
              alt="Adil"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>

      {/* Desktop right */}
      <div className="hidden md:flex items-center gap-3">
        {socials.map(({ href, src, alt }) => (
          <Link key={alt} href={href} target="_blank">
            <Image
              src={src}
              alt={alt}
              width={18}
              height={18}
              className="opacity-35 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-200"
            />
          </Link>
        ))}

        <div className="w-px h-4 bg-[var(--border)] mx-1" />

        <ThemeToggle />

        <Link href="/contact">
          <button className="ml-1 text-xs font-semibold px-4 py-2 bg-[var(--text-1)] text-[var(--bg)] rounded-lg hover:bg-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20">
            Hire Me
          </button>
        </Link>
      </div>

      {/* Mobile controls */}
      <div className="md:hidden flex items-center gap-3">
        <ThemeToggle />
        <button
          className="w-9 h-7 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
            className="block w-full h-0.5 rounded origin-left"
            style={{ background: "var(--text-1)" }}
          />
          <motion.span
            animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
            className="block w-full h-0.5 rounded"
            style={{ background: "var(--text-1)" }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
            className="block w-full h-0.5 rounded origin-left"
            style={{ background: "var(--text-1)" }}
          />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 flex flex-col items-center justify-center gap-8 z-40"
            style={{ background: "var(--bg)" }}
          >
            {links.map((link) => (
              <motion.div key={link.name} variants={itemVars}>
                <Link
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className="text-5xl font-bold hover:text-[var(--accent)] transition-colors duration-200 tracking-tight"
                  style={{
                    color: "var(--text-1)",
                    fontFamily: "var(--font-jakarta)",
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVars} className="flex gap-5 mt-4">
              {socials.map(({ href, src, alt }) => (
                <Link key={alt} href={href} target="_blank">
                  <Image
                    src={src}
                    alt={alt}
                    width={22}
                    height={22}
                    className="opacity-50 hover:opacity-100 transition"
                  />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
