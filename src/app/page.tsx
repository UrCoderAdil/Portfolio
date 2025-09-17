"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   
  return (
    // Main container
    <motion.div className="h-full" initial={{ y:"-200vh" }} animate={{ y:"0%" }} transition={{duration:1}}>
    <div className="h-full flex flex-col sm:flex-row md:flex-row lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 sm:h-auto md:h-5/6 sm:w-1/2 md:w-1/2 lg:w-1/2 relative">
        <Image
          src="/hero1.png"
          alt="Picture of the author"
          fill
          className="object-contain"
        />
      </div>
      
      {/* TEXT CONTAINER */}
      <div className="sm:h-full sm:w-1/2 md:h-full md:w-1/2 lg:h-full lg:w-1/2 relative flex flex-col gap-8 items-center justify-center text-center sm:text-left">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold leading-snug px-2 sm:px-0">
          UrCoderAdil | Full-Stack Developer & UI Enthusiast
        </h1>
        
        <p className="text-black max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          I’m a curious and detail-oriented developer who enjoys turning ideas into fast, 
          reliable, and user-friendly applications. Skilled in Next.js, React, Node.js, Python, 
          Java, and Android development, with a strong grip on data structures and algorithms, 
          I focus on building solutions that balance performance with design. Whether it’s 
          crafting a sleek UI, architecting scalable backends, or diving deep into 
          problem-solving, I thrive on challenges that push me to grow and innovate.
        </p>
        
        <div className="flex gap-4 justify-center sm:justify-start">
          <div className="bg-white hover:opacity-20 transition duration-200 text-black font-bold py-2 px-4 rounded">
            <Link  href='/portfolio' className='px-3 hover:opacity-20 transition duration-200'>See My Work
              </Link>
          </div>
          <div className="bg-black hover:opacity-20 transition duration-200 text-white font-bold py-2 px-4 rounded">
            <Link  href="/contact" className='px-3 hover:opacity-20 transition duration-200'>Contact Me
              </Link>
          </div>
        </div>
      </div>

    </div>
    </motion.div>
  );
}
