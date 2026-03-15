// src/components/sections/contact/ContactIntro.js

"use client";

import { motion } from "framer-motion";
import { contactIntro } from "@/data/contact";

export default function ContactIntro() {
  // Ultra-smooth cinematic Apple-style easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 py-24 sm:py-32
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* CENTRAL AMBIENT GLOW (Lightweight) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="
            w-[100vw] sm:w-[600px] h-[40vh] sm:h-[400px]
            bg-blue-400/10 dark:bg-cyan-500/10
            blur-[100px] sm:blur-[120px] rounded-full
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl text-center relative z-10">

        {/* ===================================== */}
        {/* GLASSMORPHIC LABEL PILL */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm mb-6 sm:mb-8"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            {contactIntro?.label || "Contact"}
          </span>
        </motion.div>

        {/* ===================================== */}
        {/* CINEMATIC HEADING */}
        {/* ===================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          text-4xl sm:text-5xl md:text-6xl
          font-bold
          tracking-tighter
          leading-[1.1]
          text-neutral-900
          dark:text-white
        "
        >
          Start a <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
            Conversation.
          </span>
        </motion.h2>

        {/* ===================================== */}
        {/* PARAGRAPH TEXT */}
        {/* ===================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          mt-8 sm:mt-10
          max-w-2xl mx-auto
          text-lg sm:text-xl md:text-2xl
          font-medium
          leading-relaxed
          text-neutral-500
          dark:text-neutral-400
        "
        >
          {contactIntro?.description || "Let's collaborate and turn your ideas into meaningful digital experiences."}
        </motion.p>

      </div>
    </section>
  );
}
