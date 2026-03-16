// src/components/sections/nimod/NimodScreenshots.js
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import lightMode from "@/assets/images/projects/nimod/light-mode.jpg";
import darkMode from "@/assets/images/projects/nimod/dark-mode.jpg";

export default function NimodScreenshots() {
  return (
    <section className="relative px-6 py-28 bg-[#fafafa] dark:bg-[#050505] overflow-hidden transition-colors">

      {/* soft ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vw] max-w-[520px] rounded-full bg-emerald-300/20 dark:bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* header */}
        <div className="text-center max-w-2xl">

          <div className="inline-flex px-4 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 mb-6">
            Interface
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            Seamless Interface
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300">
              Design
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400">
            A mobile-first interface built for clarity, accessibility,
            and smooth user experience for rural communities.
          </p>

        </div>

        {/* overlapped mobile screenshots */}
        <div className="relative mt-20 w-full flex justify-center items-center">

          {/* DARK MODE */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
            relative
            w-[220px] sm:w-[260px]
            rounded-[2.2rem]
            bg-white dark:bg-neutral-900
            p-3
            shadow-2xl
            ring-1 ring-black/5 dark:ring-white/10
            "
            style={{ transform: "translateX(-30px)" }}
          >

            <div className="relative w-full aspect-[9/19] rounded-[1.6rem] overflow-hidden">
              <Image
                src={darkMode}
                alt="Dark Mode"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>

            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              Dark Mode
            </span>

          </motion.div>


          {/* LIGHT MODE */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
            relative
            w-[220px] sm:w-[260px]
            rounded-[2.2rem]
            bg-white dark:bg-neutral-900
            p-3
            shadow-2xl
            ring-1 ring-black/5 dark:ring-white/10
            "
            style={{ transform: "translateX(30px)" }}
          >

            <div className="relative w-full aspect-[9/19] rounded-[1.6rem] overflow-hidden">
              <Image
                src={lightMode}
                alt="Light Mode"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>

            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              Light Mode
            </span>

          </motion.div>

        </div>

      </div>

    </section>
  );
}