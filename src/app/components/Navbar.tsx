"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import NavLink from './NavLink';
import { motion, stagger } from 'framer-motion';
import { div } from 'framer-motion/client';
const links = [
  { url: '/', name: 'Home' },
  { url: '/portfolio', name: 'Portfolio' },
  { url: '/contact', name: 'Contact' },
  { url: '/about', name: 'About' },

];
const Navbar = () => {
  const topVariants = {
    closed: { rotate: 0, },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  }
  const centerVariants = {
    closed: { opacity: 1, },
    opened: { opacity: 0, },
  }
  const bottomVariants = {
    closed: { rotate: 0, },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  }
const listVariants={
  closed:{x:"100vw"},
  opened:{x:0
    , transition:{
      when:"beforeChildren",
    staggerChildren:0.4,
  }
  }
 
}
const listItemsVariants={
  closed:{opacity:0,x:-10},
  opened:{opacity:1,x:0}
}



  const [open, setOpen] = React.useState(false);
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      <div className="hidden md:flex gap-4 text-md  text-black w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}

        {/*Logo*/}
      </div>
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center relative z-50'>
        <Link href="https://github.com/UrCoderAdil">
          <Image src={!open ? "/logoblack.png" : "/logo.png"} alt="logo" width={50} height={50} className={`hover:opacity-20 transition duration-200 rounded-2xl `} />
        </Link>
      </div>
      {/*Social*/}
      <div className='hidden md:flex gap-10 w-1/3'>
        <Link href="https://github.com/UrCoderAdil">
          <Image src="/github.png" alt="github" width={30} height={30} className='hover:opacity-20 transition duration-200' />
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-adil-818a13319/">
          <Image src="/linkedin.png" alt="linkedin" width={30} height={30} className='hover:opacity-20 transition duration-200' />
        </Link>
        <Link href="https://www.instagram.com">
          <Image src="/instagram.png" alt="instagram" width={30} height={30} className='hover:opacity-20 transition duration-200' />
        </Link>
        <Link href="https://www.facebook.com/">
          <Image src="/facebook.png" alt="facebook" width={30} height={30} className='hover:opacity-20 transition duration-200' />
        </Link>
      </div>
      {/*Menu*/}
      <div className='md:hidden'>

        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}>
          <motion.div variants={topVariants} animate={open ? "opened":"closed"} className={`w-10 h-1 bg-black rounded origin-left`}></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened":"closed"} className={`w-10 h-1 bg-black rounded`}></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened":"closed"} className={`w-10 h-1 bg-black rounded origin-left`}></motion.div>

        </button>
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center gap-16 text-4xl font-semibold z-40">
            {links.map((link) => (
              <motion.div key={link.name} variants={listItemsVariants}>
              <Link key={link.name} href={link.url} className='px-3 hover:opacity-20 transition duration-200'>{link.name}
              </Link>
              </motion.div>
            ))}


          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar