"use client"
import React, { use } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const NavLink = ({link}) => {
    const pathName=usePathname()
  return (
    <Link className={`rounded p-1 ${pathName===link.url && "bg-black text-white"}`} href={link.url}>{link.name}</Link>
  )
}

export default NavLink
