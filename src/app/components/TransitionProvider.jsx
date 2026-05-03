"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <motion.div
          className="h-screen w-screen fixed rounded-b-[80px] z-40"
          style={{ backgroundColor: "var(--text-1)" }}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 z-50 w-fit h-fit pointer-events-none select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            className="text-7xl font-extrabold tracking-tight"
            style={{
              color: "var(--bg)",
              fontFamily: "var(--font-jakarta)",
            }}
          >
            {pathName.substring(1) === ""
              ? "HOME"
              : pathName.substring(1).toUpperCase()}
          </span>
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed rounded-t-[80px] bottom-0 z-30"
          style={{ backgroundColor: "var(--text-1)" }}
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
          exit={{ opacity: 0 }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
