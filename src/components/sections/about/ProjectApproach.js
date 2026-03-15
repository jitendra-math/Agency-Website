// src/components/sections/about/ProjectApproach.js

"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Curiosity First",
    description:
      "Every project begins with a question. What problem does this idea solve, and why should it exist on the internet?",
  },
  {
    title: "Thoughtful Exploration",
    description:
      "Ideas are explored through small experiments, sketches, and prototypes before turning into real platforms.",
  },
  {
    title: "Careful Building",
    description:
      "Once the direction becomes clear, the project is developed with attention to performance, simplicity, and long-term usefulness.",
  },
  {
    title: "Meaningful Outcome",
    description:
      "The final goal is always the same — creating digital experiences that feel simple, useful, and meaningful for people using them.",
  },
];

export default function ProjectApproach() {
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
      {/* AMBIENT GLOW (Lightweight Anchor) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            w-[100vw] sm:w-[600px] h-[50vh] sm:h-[400px]
            bg-blue-400/10 dark:bg-indigo-500/10
            blur-[100px] sm:blur-[140px] rounded-full
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-5xl relative z-10">

        {/* ===================================== */}
        {/* HEADER */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          {/* Glass Pill */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm mb-6">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Methodology
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
            How Projects <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              Take Shape.
            </span>
          </h2>
        </motion.div>

        {/* ===================================== */}
        {/* THE GLASS STEPS GRID */}
        {/* ===================================== */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true, margin: "-50px" }}
              className="
                group relative overflow-hidden flex flex-col
                rounded-[2rem] sm:rounded-[2.5rem]
                bg-white/30 dark:bg-white/[0.02]
                ring-1 ring-inset ring-black/5 dark:ring-white/10
                backdrop-blur-2xl
                p-8 sm:p-10
                transition-all duration-700 ease-out
                hover:-translate-y-2
                hover:bg-white/50 dark:hover:bg-white/[0.04]
                hover:shadow-[0_24px_48px_-12px_rgba(37,99,235,0.08)]
                dark:hover:shadow-[0_24px_48px_-12px_rgba(59,130,246,0.04)]
              "
            >
              {/* Massive Watermark Number */}
              <div className="absolute -top-6 -right-4 text-[8rem] font-black leading-none text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-x-4">
                0{index + 1}
              </div>

              {/* Step Badge */}
              <div
                className="
                mb-8
                flex h-12 w-12 items-center justify-center
                rounded-2xl
                bg-white/60 dark:bg-neutral-800/60
                ring-1 ring-inset ring-black/5 dark:ring-white/10
                text-base font-bold
                text-blue-600 dark:text-blue-400
                transition-transform duration-700 ease-out
                group-hover:scale-110 group-hover:shadow-sm
              "
              >
                0{index + 1}
              </div>

              {/* Title */}
              <h3
                className="
                text-xl sm:text-2xl font-bold tracking-tight
                text-neutral-900 dark:text-white
                mb-4 relative z-10
              "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                text-base sm:text-lg leading-relaxed
                text-neutral-600 dark:text-neutral-400
                relative z-10
              "
              >
                {step.description}
              </p>

              {/* Glowing Bottom Accent */}
              <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
