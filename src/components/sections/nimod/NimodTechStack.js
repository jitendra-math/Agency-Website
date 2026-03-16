// src/components/sections/nimod/NimodTechStack.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

export default function NimodTechStack() {

  const techStack = nimodProject?.techStack || [];

  return (
    <section className="relative px-6 py-28 sm:py-36 bg-[#fafafa] dark:bg-[#050505] transition-colors overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none">

        <div
          className="
          absolute left-[10%] top-[20%]
          w-[80vw] sm:w-[520px]
          h-[80vw] sm:h-[520px]
          rounded-full
          bg-cyan-400/20 dark:bg-cyan-500/10
          blur-[110px]
          "
        />

        <div
          className="
          absolute right-[10%] bottom-[10%]
          w-[70vw] sm:w-[480px]
          h-[70vw] sm:h-[480px]
          rounded-full
          bg-emerald-300/20 dark:bg-emerald-500/10
          blur-[110px]
          "
        />

      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 -z-20 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="mx-auto max-w-5xl flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl flex flex-col items-center"
        >

          <div className="mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Technology
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            The Engineering
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300">
              Tech Stack
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-2xl">
            Built using modern web technologies focused on performance,
            scalability, and long-term maintainability.
          </p>

        </motion.div>

        {/* Tech chips */}
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl">

          {techStack.map((tech, index) => (

            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="
              group relative overflow-hidden
              flex items-center justify-center
              px-6 py-3 sm:px-8 sm:py-4
              rounded-2xl sm:rounded-3xl
              bg-white/70 dark:bg-white/[0.03]
              backdrop-blur-xl
              ring-1 ring-black/5 dark:ring-white/10
              transition-all duration-500
              hover:-translate-y-1.5
              hover:bg-white dark:hover:bg-white/[0.05]
              hover:shadow-[0_20px_40px_-8px_rgba(16,185,129,0.15)]
              dark:hover:shadow-[0_20px_40px_-8px_rgba(16,185,129,0.08)]
              "
            >

              {/* hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-colors duration-500" />

              <span className="relative z-10 text-base sm:text-lg font-bold tracking-tight text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                {tech}
              </span>

              {/* bottom glow */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 dark:via-emerald-400/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full" />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}