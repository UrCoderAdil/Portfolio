"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const isActive = pathName === link.url;

  return (
    <Link
      className={`nav-link-hover text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5 ${
        isActive
          ? "text-[#6366F1] active"
          : "text-[#64748B] hover:text-[#0F172A]"
      }`}
      href={link.url}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
