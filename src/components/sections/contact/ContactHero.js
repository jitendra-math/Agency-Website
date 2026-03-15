// src/components/sections/contact/ContactHero.js

"use client";

import { motion } from "framer-motion";
import { contactHero } from "@/data/contact";

export default function ContactHero() {
  // Ultra-smooth cinematic Apple-style easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      min-h-[70vh] px-6 pt-36 pb-24
      text-center
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (Cinematic Slow) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Indigo */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[-10%] left-[10%] sm:top-0 sm:left-1/4
            w-[100vw] sm:w-[500px] h-[100vw] sm:h-[500px]
            rounded-full
            bg-indigo-300/20 dark:bg-indigo-900/20
            blur-[100px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />

        {/* Glow 2 - Cyan Sweep */}
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:bottom-0 sm:right-1/4
            w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px]
            rounded-full
            bg-cyan-200/30 dark:bg-cyan-900/15
            blur-[100px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* ===================================== */}
      {/* LUXURY GRID TEXTURE WITH RADIAL MASK */}
      {/* ===================================== */}
      <div
        className="
        absolute inset-0 -z-20
        opacity-[0.03] dark:opacity-[0.05]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:48px_48px] sm:bg-[size:64px_64px]
        [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]
      "
      />

      {/* ===================================== */}
      {/* HERO CONTENT */}
      {/* ===================================== */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
        
        {/* Glassmorphic Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          className="
            mb-8 inline-flex items-center px-4 py-1.5 
            rounded-full 
            border border-black/[0.08] dark:border-white/[0.08]
            bg-white/40 dark:bg-black/40 
            backdrop-blur-xl shadow-sm
          "
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            {contactHero.label || "Get In Touch"}
          </span>
        </motion.div>

        {/* Main Heading with Smart Rich Gradient Logic */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.1, ease: smoothEase }}
          className="
          text-5xl sm:text-6xl md:text-7xl
          font-extrabold
          tracking-tighter
          leading-[1.1]
          text-neutral-900 dark:text-white
          drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]
        "
        >
          {contactHero.highlightText ? (
            <>
              {contactHero.title.replace(contactHero.highlightText, "")}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                {contactHero.highlightText}
              </span>
            </>
          ) : (
            contactHero.title
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: smoothEase }}
          className="
          mt-8
          text-xl sm:text-2xl md:text-3xl
          font-semibold
          tracking-tight
          text-neutral-700
          dark:text-neutral-300
        "
        >
          {contactHero.subtitle}
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: smoothEase }}
          className="
          mt-6
          max-w-2xl
          text-lg sm:text-xl
          font-medium
          leading-relaxed
          text-neutral-500
          dark:text-neutral-400
        "
        >
          {contactHero.description}
        </motion.p>
      </div>

      {/* ===================================== */}
      {/* BOTTOM SEAMLESS FADE */}
      {/* ===================================== */}
      <div
        className="
        pointer-events-none
        absolute bottom-0 left-0 right-0
        h-32 md:h-48
        bg-gradient-to-t
        from-[#fafafa] dark:from-[#050505]
        to-transparent
      "
      />
    </section>
  );
}
