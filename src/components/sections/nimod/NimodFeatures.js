// src/components/sections/nimod/NimodFeatures.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import nimodProject from "@/data/nimodProject";

export default function NimodFeatures() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const highlights = nimodProject?.highlights || [];

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

  const card = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 0.8 : 1,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const glow1 = useMemo(
    () => ({
      scale: isMobile ? [1, 1.03, 1] : [1, 1.06, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.2, 0.3, 0.2],
    }),
    [isMobile]
  );

  const glow2 = useMemo(
    () => ({
      scale: isMobile ? [1, 1.04, 1] : [1, 1.08, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.2, 0.28, 0.2],
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
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="
          absolute left-[10%] top-[20%]
          w-[80vw] sm:w-[520px]
          h-[80vw] sm:h-[520px]
          rounded-full
          bg-emerald-400/20
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
          bg-cyan-300/20
          blur-[110px]
          "
        />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 -z-20 opacity-[0.04] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 uppercase">
              Key Features
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
            What Makes This Platform
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">
              Powerful.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-neutral-500">
            Built for clarity, accessibility, and performance while keeping
            the experience simple for rural communities.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {highlights.map((feature, index) => (
            <motion.div
              key={feature}
              variants={card}
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.12 }}
              className="
              group relative
              rounded-[2rem]
              bg-white/60
              backdrop-blur-xl
              ring-1 ring-black/5
              p-8
              transition-all duration-500
              hover:-translate-y-2
              hover:bg-white
              hover:shadow-[0_30px_60px_-10px_rgba(16,185,129,0.15)]
              "
            >
              {/* top highlight */}
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/40 to-transparent rounded-t-[2rem]" />

              {/* number badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />

                <span className="text-xs font-bold tracking-widest text-neutral-400">
                  0{index + 1}
                </span>
              </div>

              <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-700">
                {feature}
              </p>

              {/* glowing bottom line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}