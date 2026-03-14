// src/components/sections/about/AboutHero.js

"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      px-4 pt-32 pb-24
      text-center
      bg-gradient-to-b
      from-white via-neutral-50 to-neutral-100
      dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900
    "
    >
      {/* ===================================== */}
      {/* BACKGROUND GLOW */}
      {/* ===================================== */}

      <div className="absolute inset-0 -z-10 pointer-events-none">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="
          absolute -top-36 -left-36
          h-[380px] w-[380px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="
          absolute -bottom-36 -right-36
          h-[380px] w-[380px]
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
        />

      </div>

      {/* ===================================== */}
      {/* GRID TEXTURE */}
      {/* ===================================== */}

      <div
        className="
        absolute inset-0
        opacity-[0.035]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:42px_42px]
        dark:opacity-[0.05]
      "
      />

      {/* ===================================== */}
      {/* HERO CONTENT */}
      {/* ===================================== */}

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
        relative z-10
        max-w-3xl
        text-4xl
        sm:text-5xl
        font-semibold
        leading-tight
        tracking-tight
        text-neutral-900
        dark:text-neutral-100
      "
      >
        About JSS Originals
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="
        mt-6
        text-xl
        sm:text-2xl
        font-medium
        text-neutral-800
        dark:text-neutral-200
      "
      >
        A digital space for thoughtful web projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="
        mt-6
        max-w-xl
        text-base
        leading-relaxed
        text-neutral-600
        dark:text-neutral-400
      "
      >
        JSS Originals is an independent digital projects lab exploring
        meaningful ideas for the modern web. From experimental platforms
        to carefully crafted online systems, the goal is to create
        digital experiences that feel simple, useful, and original.
      </motion.p>

    </section>
  );
}