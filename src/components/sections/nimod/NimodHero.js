// src/components/sections/nimod/NimodHero.js

"use client";

import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function NimodHero() {
  return (
    <section
      className="
      relative isolate overflow-hidden
      px-4 pt-36 pb-24
      text-center
      bg-gradient-to-b
      from-white via-neutral-50 to-neutral-100
      dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900
      "
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="
          absolute -top-40 -left-40
          w-[420px] h-[420px]
          rounded-full
          bg-emerald-400/20
          blur-3xl
          "
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
          className="
          absolute -bottom-40 -right-40
          w-[420px] h-[420px]
          rounded-full
          bg-cyan-400/20
          blur-3xl
          "
        />

      </div>

      {/* grid texture */}
      <div
        className="
        absolute inset-0
        opacity-[0.035]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:42px_42px]
        dark:opacity-[0.05]
        "
      />

      <div className="relative z-10 mx-auto max-w-3xl">

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          {/* badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span
              className="
              px-4 py-1.5
              rounded-full
              border border-neutral-200 dark:border-neutral-800
              bg-white/60 dark:bg-white/5
              backdrop-blur
              text-[11px] md:text-xs
              font-semibold
              tracking-[0.18em]
              uppercase
              text-neutral-600 dark:text-neutral-400
              "
            >
              {nimodProject.badge}
            </span>
          </motion.div>

          {/* title */}
          <motion.h1
            variants={fadeUp}
            className="
            text-3xl sm:text-4xl md:text-6xl
            font-semibold
            tracking-tight
            leading-[1.15]
            text-neutral-900 dark:text-neutral-100
            "
          >
            {nimodProject.name}
          </motion.h1>

          {/* description */}
          <motion.p
            variants={fadeUp}
            className="
            mt-6
            text-base sm:text-lg
            leading-relaxed
            text-neutral-600 dark:text-neutral-400
            max-w-2xl mx-auto
            "
          >
            {nimodProject.description}
          </motion.p>

          {/* built by */}
          <motion.div variants={fadeUp} className="flex justify-center mt-8">
            <span
              className="
              px-3 py-1
              rounded-full
              bg-emerald-500/10
              border border-emerald-500/20
              text-emerald-600 dark:text-emerald-400
              text-[11px] md:text-xs
              font-semibold
              tracking-wide
              "
            >
              Built by {nimodProject.builtBy}
            </span>
          </motion.div>

        </motion.div>

      </div>

      {/* bottom fade */}
      <div
        className="
        absolute bottom-0 left-0 right-0
        h-24
        bg-gradient-to-b
        from-transparent
        to-white
        dark:to-neutral-950
        "
      />

    </section>
  );
}