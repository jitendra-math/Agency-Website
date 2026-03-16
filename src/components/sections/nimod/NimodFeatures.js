// src/components/sections/nimod/NimodFeatures.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

export default function NimodFeatures() {

  const highlights = nimodProject?.highlights || [];

  return (
    <section className="relative px-6 py-28 bg-[#fafafa] dark:bg-[#050505] transition-colors overflow-hidden">

      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vw] max-w-[520px] rounded-full bg-emerald-300/20 dark:bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* grid texture */}
      <div className="absolute inset-0 -z-20 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="max-w-6xl mx-auto">

        {/* header */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-4 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 mb-6">
            Key Features
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            What Makes This Platform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300">
              Powerful
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400">
            Built for clarity, accessibility, and performance while keeping
            the experience simple for rural communities.
          </p>

        </div>


        {/* feature cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {highlights.map((feature, index) => (

            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
              group relative
              rounded-[1.8rem]
              bg-white/70 dark:bg-white/[0.03]
              backdrop-blur-xl
              ring-1 ring-black/5 dark:ring-white/10
              p-8
              transition-all duration-500
              hover:-translate-y-2
              hover:bg-white dark:hover:bg-white/[0.05]
              hover:shadow-[0_30px_60px_-10px_rgba(16,185,129,0.15)]
              dark:hover:shadow-[0_30px_60px_-10px_rgba(16,185,129,0.08)]
              "
            >

              {/* number */}
              <div className="flex items-center justify-between mb-6">

                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />

                <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-600">
                  0{index + 1}
                </span>

              </div>


              {/* feature text */}
              <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">
                {feature}
              </p>


              {/* bottom glow */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full" />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}