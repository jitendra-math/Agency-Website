// src/components/sections/about/ClosingStatement.js

"use client";

import { motion } from "framer-motion";

export default function ClosingStatement() {
  // Ultra-smooth cinematic Apple-style easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 py-32 sm:py-40
      bg-[#fafafa] dark:bg-[#050505]
      text-center
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* CENTRAL AMBIENT SPOTLIGHT */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="
            w-[100vw] sm:w-[800px] h-[50vh] sm:h-[400px]
            bg-blue-500/5 dark:bg-cyan-500/10
            blur-[100px] sm:blur-[120px] rounded-full
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      <div className="mx-auto max-w-4xl relative z-10">

        {/* ===================================== */}
        {/* ELEGANT ANIMATED DIVIDER */}
        {/* ===================================== */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 sm:mb-20 h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
        />

        {/* ===================================== */}
        {/* THE CLOSING LINE */}
        {/* ===================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.1, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          text-4xl sm:text-5xl md:text-7xl
          font-extrabold
          tracking-tighter
          leading-[1.1]
          text-neutral-900 dark:text-white
          drop-shadow-sm
        "
        >
          The web is still <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            being written.
          </span>
        </motion.h2>

        {/* ===================================== */}
        {/* SUB-STATEMENT */}
        {/* ===================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          mt-8 sm:mt-10
          text-lg sm:text-2xl
          font-medium
          leading-relaxed
          text-neutral-500
          dark:text-neutral-400
          max-w-2xl mx-auto
        "
        >
          JSS Originals is simply one place where new chapters begin.
        </motion.p>

      </div>
    </section>
  );
}
