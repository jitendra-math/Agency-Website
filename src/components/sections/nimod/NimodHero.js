// src/components/sections/nimod/NimodHero.js

"use client";

import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

// Apple-style silky smooth easing
const smoothEase = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: smoothEase,
    },
  },
};

export default function NimodHero() {
  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      min-h-[85vh] px-6 pt-36 pb-24
      text-center
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
      "
    >
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (Emerald & Cyan Theme) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Emerald (Represents Growth/Agriculture) */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
          absolute top-[10%] left-[10%] sm:top-0 sm:left-1/4
          w-[100vw] sm:w-[500px] h-[100vw] sm:h-[500px]
          rounded-full
          bg-emerald-300/20 dark:bg-emerald-900/20
          blur-[100px] sm:blur-[120px]
          mix-blend-multiply dark:mix-blend-screen
          "
        />

        {/* Glow 2 - Cyan Sweep (Represents Tech/Digital) */}
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="
          absolute bottom-[-10%] right-[-10%] sm:bottom-0 sm:right-1/4
          w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px]
          rounded-full
          bg-cyan-200/25 dark:bg-cyan-900/15
          blur-[100px] sm:blur-[130px]
          mix-blend-multiply dark:mix-blend-screen
          "
        />

        {/* Glow 3 - Soft Center Light */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[70vw] sm:w-[400px] h-[70vw] sm:h-[400px]
            rounded-full
            bg-teal-200/20 dark:bg-teal-900/10
            blur-[120px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* ===================================== */}
      {/* LUXURY GRID TEXTURE */}
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

      <div className="relative z-10 mx-auto max-w-4xl">

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >

          {/* ===================================== */}
          {/* TOP BADGE (Glassmorphic) */}
          {/* ===================================== */}
          <motion.div variants={fadeUp} className="mb-8">
            <div
              className="
              inline-flex items-center px-4 py-1.5 
              rounded-full 
              border border-black/[0.08] dark:border-white/[0.08]
              bg-white/40 dark:bg-black/40 
              backdrop-blur-xl shadow-sm
              "
            >
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                {nimodProject.badge || "Case Study"}
              </span>
            </div>
          </motion.div>

          {/* ===================================== */}
          {/* MASSIVE CINEMATIC TITLE */}
          {/* ===================================== */}
          <motion.h1
            variants={fadeUp}
            className="
            text-5xl sm:text-6xl md:text-7xl
            font-extrabold
            tracking-tighter
            leading-[1.1]
            text-neutral-900 dark:text-white
            drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]
            "
          >
            {nimodProject.highlightText ? (
              <>
                {nimodProject.name.replace(nimodProject.highlightText, "")}
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300">
                  {nimodProject.highlightText}
                </span>
              </>
            ) : (
              nimodProject.name
            )}
          </motion.h1>

          {/* ===================================== */}
          {/* EDITORIAL DESCRIPTION */}
          {/* ===================================== */}
          <motion.p
            variants={fadeUp}
            className="
            mt-8
            max-w-2xl
            text-lg sm:text-xl
            font-medium
            leading-relaxed
            text-neutral-500 dark:text-neutral-400
            "
          >
            {nimodProject.description}
          </motion.p>

          {/* ===================================== */}
          {/* 'BUILT BY' PILL (Subtle Glow) */}
          {/* ===================================== */}
          <motion.div variants={fadeUp} className="mt-10 sm:mt-12">
            <span
              className="
              inline-flex items-center px-5 py-2
              rounded-full
              bg-emerald-500/10 dark:bg-emerald-500/10
              border border-emerald-500/20 dark:border-emerald-500/20
              text-emerald-700 dark:text-emerald-300
              text-sm sm:text-base
              font-semibold
              tracking-wide
              backdrop-blur-md
              "
            >
              Built by <span className="ml-1 text-emerald-900 dark:text-white font-bold">{nimodProject.builtBy || "JSS Originals"}</span>
            </span>
          </motion.div>

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
