"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: " MOJITO-Cocktail",
    desc: "An eye-catching and interactive landing page built with GSAP (GreenSock Animation Platform) to deliver a smooth, modern, and lively user experience. ",
    img: "/s2.png",
    link: "https://mojito-cocktail-landing-page.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Zentry-Game",
    desc: "An immersive Zentry game landing page with dynamic GSAP animations, bold visuals, and smooth interactions that capture the thrill of gaming",
    img: "/s1.png",
    link: "https://next-js-zentry-landpage.vercel.app/",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "MyBlog",
    desc: "A modern and responsive blog page featuring clean design, smooth navigation, and an elegant layout for sharing ideas, stories, and insights.",
    img: "/s3.png",
    link: "https://my-blog-beta-six-17.vercel.app/",
  },

];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center gap-2 text-white max-w-xl px-6 text-center">
                  {/* Title */}
                  <h1 className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                    {item.title}
                  </h1>

                  {/* Image */}
                  <div className="relative w-70 h-36 md:w-76 md:h-54 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[320px]">
                    <Image src={item.img} alt={item.title} fill className="object-contain" />
                  </div>

                  {/* Description */}
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>

                  {/* Button */}
                  {item.link && (
                    <Link href={item.link} target="_blank">
                      <button className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                        See Demo
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}

          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center font-bold hover:bg-gray-200 hover:text-black transition hover:text-2xl"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;