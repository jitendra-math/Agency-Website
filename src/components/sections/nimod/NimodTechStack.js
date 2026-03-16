// src/components/sections/nimod/NimodTechStack.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import nimodProject from "@/data/nimodProject";

export default function NimodTechStack() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const techStack = nimodProject?.techStack || [];

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 0.9 : 1.1,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const chip = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.9, y: 20 },
      show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: isMobile ? 0.7 : 0.9,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const glow1 = useMemo(
    () => ({
      scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.2, 0.28, 0.2],
    }),
    [isMobile]
  );

  const glow2 = useMemo(
    () => ({
      scale: isMobile ? [1, 1.04, 1] : [1, 1.08, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.2, 0.25, 0.2],
    }),
    [isMobile]
  );

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 py-28 sm:py-36
      bg-[#fafafa]
      transition-colors duration-500
      "
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none">

        <motion.div
          animate={glow1}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="
          absolute left-[10%] top-[20%]
          w-[80vw] sm:w-[520px]
          h-[80vw] sm:h-[520px]
          rounded-full
          bg-cyan-400/20
          blur-[110px]
          "
        />

        <motion.div
          animate={glow2}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="
          absolute right-[10%] bottom-[10%]
          w-[70vw] sm:w-[480px]
          h-[70vw] sm:h-[480px]
          rounded-full
          bg-emerald-300/20
          blur-[110px]
          "
        />

      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 -z-20 opacity-[0.04] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl flex flex-col items-center"
        >
          <div className="mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 uppercase">
              Technology
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
            The Engineering
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">
              Tech Stack.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 max-w-2xl">
            Built using modern web technologies focused on performance,
            scalability, and long-term maintainability.
          </p>
        </motion.div>

        {/* Tech chips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              variants={chip}
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.08 }}
              className="
              group relative overflow-hidden
              flex items-center justify-center
              px-6 py-3 sm:px-8 sm:py-4
              rounded-2xl sm:rounded-3xl
              bg-white/70
              backdrop-blur-xl
              ring-1 ring-black/5
              transition-all duration-500
              hover:-translate-y-1.5
              hover:bg-white
              hover:shadow-[0_20px_40px_-8px_rgba(16,185,129,0.15)]
              "
            >

              {/* glow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-colors duration-500" />

              <span className="relative z-10 text-base sm:text-lg font-bold tracking-tight text-neutral-800 group-hover:text-black transition-colors duration-300">
                {tech}
              </span>

              {/* bottom glow line */}
              <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full" />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}