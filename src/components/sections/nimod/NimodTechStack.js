// src/components/sections/nimod/NimodTechStack.js

"use client";

import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

export default function NimodTechStack() {
  const { techStack } = nimodProject;

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
      {/* AMBIENT GLOWS (Subtle Tech Aura) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Glow 1 - Cyan/Teal */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[20%] left-[-10%] sm:left-[10%]
            w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px]
            rounded-full
            bg-cyan-400/20 dark:bg-teal-700/20
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        {/* Glow 2 - Emerald */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:right-[10%]
            w-[70vw] sm:w-[400px] h-[70vw] sm:h-[400px]
            rounded-full
            bg-emerald-300/20 dark:bg-emerald-800/15
            blur-[100px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Luxury Grid Texture */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center">

        {/* ===================================== */}
        {/* HEADER SECTION */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl flex flex-col items-center"
        >
          {/* Glassmorphic Pill */}
          <div className="mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Technology
            </span>
          </div>

          {/* Cinematic Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
            The Engineering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 drop-shadow-sm">
              Tech Stack.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-2xl">
            The platform was built using modern web technologies
            focused on performance, scalability, and maintainability to serve the rural community flawlessly.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* FLOATING GLASS CHIPS (Tech Stack) */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 1, ease: smoothEase }}
              viewport={{ once: true }}
              className="
                group relative overflow-hidden flex items-center justify-center
                px-6 py-3 sm:px-8 sm:py-4
                rounded-2xl sm:rounded-3xl
                bg-white/40 dark:bg-white/[0.02]
                ring-1 ring-inset ring-black/5 dark:ring-white/10
                backdrop-blur-2xl
                transition-all duration-500 ease-out
                hover:-translate-y-1.5
                hover:bg-white/60 dark:hover:bg-white/[0.05]
                hover:shadow-[0_16px_32px_-8px_rgba(16,185,129,0.15)]
                dark:hover:shadow-[0_16px_32px_-8px_rgba(16,185,129,0.08)]
              "
            >
              {/* Inner subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-colors duration-500" />
              
              <span className="relative z-10 text-base sm:text-lg font-bold tracking-tight text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                {tech}
              </span>

              {/* Magical glowing bottom line */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 dark:via-emerald-400/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-full" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
