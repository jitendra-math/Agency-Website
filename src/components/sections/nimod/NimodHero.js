// src/components/sections/nimod/NimodHero.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import nimodProject from "@/data/nimodProject";

const smoothEase = "easeOut";

const useStagger = () =>
  useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.1,
        },
      },
    }),
    []
  );

const useFadeUp = () =>
  useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: smoothEase,
        },
      },
    }),
    []
  );

export default function NimodHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const stagger = useStagger();
  const fadeUp = useFadeUp();

  const blob1Animation = useMemo(
    () =>
      isMobile
        ? { x: [0, 20, 0], y: [0, -15, 0] }
        : { x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.05, 1] },
    [isMobile]
  );

  const blob2Animation = useMemo(
    () =>
      isMobile
        ? { x: [0, -20, 0], y: [0, 20, 0] }
        : { x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.07, 1] },
    [isMobile]
  );

  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      min-h-[80vh] px-6 pt-24 pb-20 sm:pt-28 sm:pb-24
      text-center
      bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#ececec]
      dark:from-[#050505] dark:via-[#080808] dark:to-[#0c0c0c]
      transition-colors duration-500
      "
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={blob1Animation}
          transition={{
            duration: isMobile ? 18 : 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-5%] left-[5%] w-[100vw] sm:w-[600px] h-[100vw] sm:h-[600px] rounded-full bg-emerald-400/15 dark:bg-emerald-900/20 blur-[120px]"
        />

        <motion.div
          animate={blob2Animation}
          transition={{
            duration: isMobile ? 22 : 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-5%] right-[-5%] w-[90vw] sm:w-[700px] h-[90vw] sm:h-[700px] rounded-full bg-cyan-300/15 dark:bg-teal-900/15 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase">
                {nimodProject.badge || "Case Study"}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1] text-neutral-900 dark:text-white"
          >
            Nimod{" "}
            <span
              className="
              font-[Oatmeal Sans]
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-emerald-600
              via-teal-500
              to-cyan-500
              dark:from-emerald-400
              dark:via-teal-300
              dark:to-cyan-300
              "
            >
              Cooperative
            </span>{" "}
            Society
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400"
          >
            {nimodProject.description}
          </motion.p>

          {/* Built By */}
          <motion.div variants={fadeUp} className="mt-10 sm:mt-12">
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/50 dark:bg-emerald-500/5 border border-black/5 dark:border-emerald-500/10 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base font-semibold backdrop-blur-md">
              Built by
              <span className="ml-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                {nimodProject.builtBy || "JSS Originals"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-[#fafafa] dark:from-[#050505] to-transparent" />
    </section>
  );
}