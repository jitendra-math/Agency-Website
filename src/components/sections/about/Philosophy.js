// src/components/sections/about/Philosophy.js (Optimized)

"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  // Ultra-smooth cinematic Apple-style easing (only for content)
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
      {/* CENTRAL AMBIENT GLOW (GPU Accelerated) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="
            w-[100vw] sm:w-[600px] h-[50vh] sm:h-[600px]
            bg-blue-400/10 dark:bg-cyan-500/10
            blur-[100px] sm:blur-[140px] rounded-full
            mix-blend-multiply dark:mix-blend-screen
            animate-pulse-slow
            will-change-transform
          "
        />
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-3xl text-center relative z-10">

        {/* ===================================== */}
        {/* HEADER SECTION */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm mb-6"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Philosophy
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
          How We Think <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
            About the Web.
          </span>
        </motion.h2>

        {/* ===================================== */}
        {/* MANIFESTO CONTENT */}
        {/* ===================================== */}
        <div className="mt-16 sm:mt-20 space-y-10 sm:space-y-12 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-neutral-800 dark:text-neutral-200"
          >
            The internet is more than a collection of websites. It is a{" "}
            <strong className="font-bold text-neutral-900 dark:text-white">living space</strong>{" "}
            where ideas, people, and communities connect. Every project built for the web becomes a small part of that larger ecosystem.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
          >
            At JSS Originals, the goal is not simply to build more things, but to build the{" "}
            <strong className="font-bold text-neutral-900 dark:text-white">right things</strong>.{" "}
            Projects are designed to be clear, useful, and thoughtfully crafted so they can remain valuable over time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Simplicity plays a central role in this philosophy. The best digital experiences are often the ones that feel effortless to use. When{" "}
            <strong className="font-bold text-neutral-900 dark:text-white">technology becomes invisible</strong>,{" "}
            ideas are allowed to shine.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
          >
            This approach guides every project developed within JSS Originals — focusing on meaningful ideas, careful execution, and a genuine respect for the{" "}
            <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              open web.
            </strong>
          </motion.p>

        </div>

      </div>
    </section>
  );
}