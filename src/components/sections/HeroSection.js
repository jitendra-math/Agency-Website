// src/components/sections/HeroSection.js (Optimized)

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  // Ultra-smooth cinematic Apple-style easing (only for content animations)
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      min-h-[95vh] px-4 pt-28 pb-20
      text-center
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* OPTIMIZED RICH GRADIENTS (GPU Accelerated) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Violet / Indigo (CSS animated) */}
        <div
          className="
            absolute top-[-10%] left-[-10%] sm:top-0 sm:left-1/4
            w-[120vw] h-[120vw] sm:w-[600px] sm:h-[600px]
            rounded-full
            bg-purple-300/40 dark:bg-violet-900/30
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
            animate-float-slow
            will-change-transform
          "
        />

        {/* Glow 2 - Cyan / Sky Blue (CSS animated) */}
        <div
          className="
            absolute bottom-[-10%] right-[-10%] sm:bottom-0 sm:right-1/4
            w-[100vw] h-[100vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-blue-200/50 dark:bg-cyan-900/20
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
            animate-float-slower
            will-change-transform
          "
        />
        
        {/* Glow 3 removed – same visual impact with 2 glows only */}
        {/* Extra warmth added via radial gradient in the grid texture */}
      </div>

      {/* ===================================== */}
      {/* LUXURY GRID TEXTURE WITH RADIAL MASK + WARM CENTER */}
      {/* ===================================== */}
      <div
        className="
        absolute inset-0 -z-20
        opacity-[0.04] dark:opacity-[0.06]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:48px_48px] sm:bg-[size:64px_64px]
        [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]
      "
      >
        {/* Added subtle warm center via pseudo-element (no extra div) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.1)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* ===================================== */}
      {/* HERO CONTENT (SAME PREMIUM, LIGHTWEIGHT) */}
      {/* ===================================== */}

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
        
        {/* Glassmorphic Announcement Pill (keep as is) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          className="
            mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 
            rounded-full 
            border border-black/[0.08] dark:border-white/[0.08]
            bg-white/40 dark:bg-black/40 
            backdrop-blur-xl shadow-sm
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200 uppercase">
            Introducing the new standard
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.1, ease: smoothEase }}
          className="
          text-5xl sm:text-7xl md:text-[5.5rem]
          font-extrabold
          tracking-tighter
          leading-[1.1] md:leading-[1.05]
          text-neutral-900 dark:text-white
          drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]
          py-2
        "
        >
          Crafting What the <br className="hidden sm:block" /> 
          <span className="text-transparent font-oatmeal tracking-normal bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Web Deserves.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.25, ease: smoothEase }}
          className="
          mt-8
          max-w-2xl
          text-lg sm:text-xl md:text-2xl
          font-medium
          tracking-tight
          text-neutral-600
          dark:text-neutral-300
        "
        >
          Meaningful projects, thoughtfully built. <br className="hidden sm:block" />
          <span className="text-neutral-500 dark:text-neutral-500 font-normal">
            Exploring ideas and shaping digital spaces.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: smoothEase }}
          className="
          mt-12
          flex flex-col sm:flex-row items-center gap-4
          w-full sm:w-auto px-4 sm:px-0
        "
        >
          <div className="w-full sm:w-auto">
             <ShineButton size="lg" className="w-full sm:w-auto">
              View Projects
            </ShineButton>
          </div>

          <div className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800">
              Join Us
            </Button>
          </div>
        </motion.div>

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
