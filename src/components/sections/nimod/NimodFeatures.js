// src/components/sections/nimod/NimodFeatures.js
"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import nimodProject from "@/data/nimodProject";

export default function NimodFeatures() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { highlights } = nimodProject;

  // Optimized variants
  const fadeUpVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 1.0 : 1.2,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 1.0 : 1.2,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  // Glow animations – simplified on mobile
  const glow1Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.03, 1] : [1, 1.05, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

  const glow2Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

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
      {/* AMBIENT GLOWS – Optimized */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={glow1Animation}
          transition={{
            duration: isMobile ? 20 : 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform, opacity" }}
          className="
            absolute top-[10%] left-[-10%] sm:left-[10%]
            w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px]
            rounded-full
            bg-emerald-400/10 dark:bg-emerald-600/10
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={glow2Animation}
          transition={{
            duration: isMobile ? 24 : 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform, opacity" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:right-[10%]
            w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px]
            rounded-full
            bg-cyan-300/10 dark:bg-teal-700/10
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Luxury Grid Texture – unchanged */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* ===================================== */}
        {/* HEADER SECTION */}
        {/* ===================================== */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Glassmorphic Pill */}
          <div className="mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Key Features
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
            What Makes This <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 drop-shadow-sm">
              Platform Work.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
            The platform was designed to balance clarity, performance,
            and accessibility while keeping the experience simple for
            rural users.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* FEATURES BENTO GRID – Optimized */}
        {/* ===================================== */}
        <div className="mt-16 sm:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }} // delay only, duration from variant
              className="
                group relative flex flex-col justify-start
                rounded-[2rem] sm:rounded-[2.5rem]
                bg-white/40 dark:bg-white/[0.02]
                ring-1 ring-inset ring-black/5 dark:ring-white/10
                backdrop-blur-2xl
                p-8 sm:p-10
                transition-all duration-700 ease-out
                hover:-translate-y-2
                hover:bg-white/60 dark:hover:bg-white/[0.04]
                hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.08)]
                dark:hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.04)]
                overflow-hidden
              "
            >
              {/* Subtle top light highlight */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* The "Tech Dot" Indicator */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                  <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-600">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {feature}
                </p>
              </div>

              {/* Glowing bottom line on hover – CSS transform */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 dark:via-emerald-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}