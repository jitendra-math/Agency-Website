// src/components/sections/nimod/NimodOverview.js

"use client";

import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

export default function NimodOverview() {
  const { client, details } = nimodProject;

  // Formatting data for the Bento Grid mapping
  const overviewStats = [
    { label: "Client", value: client?.name || "Nimod Society" },
    { label: "Project Type", value: details?.projectType || "Web Platform" },
    { label: "Role", value: details?.role || "Development" },
    { label: "Year", value: details?.year || "2024" },
  ];

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
      {/* SUBTLE AMBIENT GLOW (Lightweight Core) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            w-[100vw] sm:w-[600px] h-[30vh] sm:h-[400px]
            bg-emerald-400/10 dark:bg-cyan-500/10
            blur-[100px] sm:blur-[120px] rounded-full
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Luxury Grid Texture */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center">

        {/* ===================================== */}
        {/* HEADER CONTENT */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center flex flex-col items-center max-w-3xl"
        >
          {/* Glassmorphic Pill */}
          <div className="mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Project Overview
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
            A Digital Platform for a <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-500 dark:from-emerald-400 dark:to-cyan-300 drop-shadow-sm">
              Rural Cooperative.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
            This project focused on building a modern digital presence
            for a cooperative society serving local farmers and rural
            families. The goal was to present services, initiatives,
            and financial support programs in a simple and accessible
            format for the community.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* THE BENTO STATS GRID */}
        {/* ===================================== */}
        <div className="mt-16 sm:mt-24 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {overviewStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true, margin: "-50px" }}
              className="
                group relative flex flex-col justify-center
                rounded-3xl sm:rounded-[2rem]
                bg-white/40 dark:bg-white/[0.02]
                ring-1 ring-inset ring-black/5 dark:ring-white/10
                backdrop-blur-2xl
                p-6 sm:p-8
                transition-all duration-500 ease-out
                hover:-translate-y-1
                hover:bg-white/60 dark:hover:bg-white/[0.04]
                hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.08)]
                dark:hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.04)]
                overflow-hidden
              "
            >
              {/* Subtle top light highlight inside the card */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2 sm:mb-3">
                  {stat.label}
                </p>
                <p className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {stat.value}
                </p>
              </div>

              {/* Glowing bottom line on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 dark:via-emerald-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
