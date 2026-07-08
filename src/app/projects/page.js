// src/app/projects/page.js (Optimized)

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import { MessageCircle } from "lucide-react";

export default function ProjectsPage() {
  // Ultra-smooth cinematic Apple-style easing (only for content)
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="relative isolate overflow-hidden flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500"
    >
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (GPU Accelerated) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Indigo (CSS animated) */}
        <div
          className="absolute top-[10%] left-[10%] sm:top-0 sm:left-1/4 w-[100vw] sm:w-[500px] h-[100vw] sm:h-[500px] rounded-full bg-indigo-300/20 dark:bg-indigo-900/15 blur-[100px] sm:blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float-slow-xy will-change-transform"
        />

        {/* Glow 2 - Cyan Sweep (CSS animated) */}
        <div
          className="absolute bottom-[-10%] right-[-10%] sm:bottom-0 sm:right-1/4 w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px] rounded-full bg-cyan-200/20 dark:bg-cyan-900/15 blur-[100px] sm:blur-[130px] mix-blend-multiply dark:mix-blend-screen animate-float-slower-xy will-change-transform"
        />

        {/* Glow 3 - The Soft Violet Core (CSS animated) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] sm:w-[400px] h-[70vw] sm:h-[400px] rounded-full bg-violet-300/15 dark:bg-purple-900/10 blur-[120px] sm:blur-[140px] mix-blend-multiply dark:mix-blend-screen animate-pulse-center will-change-transform"
        />
      </div>

      {/* ===================================== */}
      {/* LUXURY GRID TEXTURE WITH RADIAL MASK */}
      {/* ===================================== */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]"
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
        
        {/* ===================================== */}
        {/* GLASSMORPHIC PILL */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          className="mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl shadow-sm"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 uppercase">
            Work in Progress
          </span>
        </motion.div>

        {/* ===================================== */}
        {/* HEADING (With 3-Stop Rich Gradient) */}
        {/* ===================================== */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.1, ease: smoothEase }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-neutral-900 dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          Projects Are <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-300">
            Coming Soon.
          </span>
        </motion.h1>

        {/* ===================================== */}
        {/* DESCRIPTION */}
        {/* ===================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: smoothEase }}
          className="mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400"
        >
          The projects section is currently under development. Soon you’ll be able to explore platforms, experiments, and digital initiatives built as part of JSS Originals.
        </motion.p>

        {/* ===================================== */}
        {/* CTA BUTTON */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: smoothEase }}
          className="mt-10 sm:mt-12"
        >
          <a
            href="https://wa.me/919549626202"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <ShineButton size="lg" className="flex items-center gap-2 shadow-xl shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-shadow duration-500">
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform duration-300" />
              Discuss a Project
            </ShineButton>
          </a>
        </motion.div>

      </div>

    </section>
  );
}