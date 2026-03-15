// src/components/sections/contact/CollaborationNote.js

"use client";

import { motion } from "framer-motion";
import { collaborationNote } from "@/data/contact";

export default function CollaborationNote() {
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
      {/* AMBIENT GLOW (Subtle Purple/Indigo Fade) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Slightly different color (purple) to give a 'closing' mood before footer */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="
            w-[100vw] sm:w-[600px] h-[30vh] sm:h-[300px]
            bg-purple-400/10 dark:bg-purple-500/10
            blur-[100px] sm:blur-[120px] rounded-full
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl relative z-10 flex flex-col items-center">

        {/* ===================================== */}
        {/* GLASSMORPHIC PILL LABEL */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm mb-8 sm:mb-10"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            {collaborationNote?.label || "Collaboration"}
          </span>
        </motion.div>

        {/* ===================================== */}
        {/* CINEMATIC HEADING (Smart Highlight) */}
        {/* ===================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          text-4xl sm:text-5xl md:text-6xl
          font-extrabold
          tracking-tighter
          leading-[1.1]
          text-neutral-900
          dark:text-white
        "
        >
          {collaborationNote?.highlightText ? (
            <>
              {collaborationNote.title.replace(collaborationNote.highlightText, "")}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
                {collaborationNote.highlightText}
              </span>
            </>
          ) : (
            collaborationNote?.title || "Let's build something great."
          )}
        </motion.h2>

        {/* ===================================== */}
        {/* EDITORIAL DESCRIPTION */}
        {/* ===================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          mt-8 sm:mt-10
          text-lg sm:text-xl md:text-2xl
          font-medium
          leading-relaxed
          text-neutral-500
          dark:text-neutral-400
          max-w-2xl
        "
        >
          {collaborationNote?.description}
        </motion.p>

      </div>
    </section>
  );
}
