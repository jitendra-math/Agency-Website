// src/components/sections/about/FutureVision.js

"use client";

import { motion } from "framer-motion";

export default function FutureVision() {
  // Ultra-smooth cinematic Apple-style easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 py-32 sm:py-40
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (Cinematic Slow) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Blue/Indigo */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-0 right-[-10%] sm:right-[10%]
            w-[80vw] sm:w-[600px] h-[80vw] sm:h-[600px]
            rounded-full
            bg-blue-300/20 dark:bg-indigo-900/20
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />

        {/* Glow 2 - Cyan/Teal */}
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] left-[-10%] sm:left-[10%]
            w-[90vw] sm:w-[500px] h-[90vw] sm:h-[500px]
            rounded-full
            bg-cyan-200/20 dark:bg-cyan-900/15
            blur-[100px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* ===================================== */}
      {/* SUBTLE GRID DEPTH */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl relative z-10">

        {/* ===================================== */}
        {/* HEADER */}
        {/* ===================================== */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm mb-6"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Looking Ahead
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="
            text-4xl sm:text-5xl md:text-6xl
            font-bold tracking-tighter
            text-neutral-900 dark:text-white
            leading-[1.1]
          "
          >
            The Future of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              JSS Originals.
            </span>
          </motion.h2>
        </div>

        {/* ===================================== */}
        {/* THE GLASS CANVAS (Content) */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="
            relative p-8 sm:p-12 md:p-16
            rounded-[2.5rem] sm:rounded-[3rem]
            bg-white/40 dark:bg-white/[0.02]
            ring-1 ring-inset ring-black/5 dark:ring-white/10
            backdrop-blur-2xl
            shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)]
            dark:shadow-[0_24px_48px_-12px_rgba(255,255,255,0.02)]
            overflow-hidden
          "
        >
          {/* Inner ambient light for the glass */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-8 sm:space-y-10 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-neutral-600 dark:text-neutral-400">
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true }}
              className="text-neutral-800 dark:text-neutral-200"
            >
              The internet continues to evolve every day, bringing new
              ideas, technologies, and opportunities. JSS Originals aims
              to remain a space where thoughtful digital projects can
              grow and meaningful experiments can take shape.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true }}
            >
              Future work will continue exploring areas such as digital
              identity systems, modern web platforms, and creative
              internet experiments that challenge traditional ways of
              building online experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true }}
            >
              Rather than focusing on building many things, the goal is to
              build the <strong className="font-bold text-neutral-900 dark:text-white">right things</strong> — projects that remain useful,
              simple, and valuable for the people who use them.
            </motion.p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
