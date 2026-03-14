// src/components/sections/AboutPreview.js

"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Sparkles } from "lucide-react";

export default function AboutPreview() {
  // Syncing the easing with Hero Section
  const smoothEase = [0.16, 1, 0.3, 1];

  const items = [
    {
      icon: Globe,
      title: "Web Platforms",
      description:
        "Modern websites and digital platforms designed for performance, scalability, and an unshakeable online presence.",
    },
    {
      icon: Layers,
      title: "SEO Identity Systems",
      description:
        "Structured digital identity systems that strengthen search visibility and dominate long-term web presence.",
    },
    {
      icon: Sparkles,
      title: "Experimental Projects",
      description:
        "Independent digital experiments exploring open knowledge systems and shaping next-generation web ideas.",
    },
  ];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 pt-24 pb-32
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (Synced with Hero) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Blue/Indigo */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[10%]
            w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-blue-300/30 dark:bg-indigo-900/20
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />

        {/* Glow 2 - Cyan/Teal */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[10%]
            w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px]
            rounded-full
            bg-cyan-200/40 dark:bg-cyan-900/15
            blur-[90px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />

        {/* Glow 3 - Subtle Purple Center */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[70vw] h-[70vw] sm:w-[400px] sm:h-[400px]
            rounded-full
            bg-purple-200/30 dark:bg-violet-900/15
            blur-[100px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* ===================================== */}
      {/* SUBTLE GRID DEPTH */}
      {/* ===================================== */}
      <div
        className="
        absolute inset-0 -z-20
        opacity-[0.03] dark:opacity-[0.05]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:48px_48px] sm:bg-[size:64px_64px]
        [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]
      "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* ===================================== */}
        {/* BRAND INTRO */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6">
            The Foundation
          </p>

          <h2
            className="
            text-4xl sm:text-5xl md:text-6xl 
            font-bold tracking-tighter
            text-neutral-900 dark:text-white
            leading-[1.1]
          "
          >
            Building systems that shape <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              digital identity.
            </span>
          </h2>

          <p
            className="
            mt-8 text-base sm:text-lg md:text-xl leading-relaxed
            text-neutral-600 dark:text-neutral-400
            font-medium max-w-2xl mx-auto
          "
          >
            JSS Originals develops scalable web platforms, experimental knowledge systems, and SEO architectures designed for a lasting internet presence.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* BENTO BOX FEATURE CARDS */}
        {/* ===================================== */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: smoothEase,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="
                group relative
                flex flex-col
                rounded-3xl
                p-8 sm:p-10
                bg-white/40 dark:bg-neutral-900/20
                border border-black/[0.04] dark:border-white/[0.05]
                backdrop-blur-2xl
                transition-all duration-500 ease-out
                hover:-translate-y-1.5
                hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]
                dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.02)]
                hover:bg-white/60 dark:hover:bg-neutral-900/40
              "
              >
                {/* Icon Wrapper - Premium Gradient Touch */}
                <div
                  className="
                  mb-8
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br from-white to-blue-50/50
                  dark:from-neutral-800 dark:to-neutral-900/50
                  border border-black/[0.05] dark:border-white/[0.05]
                  shadow-inner
                  group-hover:scale-110 group-hover:shadow-blue-500/10 transition-all duration-500 ease-out
                "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-blue-600 dark:text-blue-400 transition-colors duration-300"
                  />
                </div>

                <h3
                  className="
                  text-xl font-semibold tracking-tight
                  text-neutral-900 dark:text-neutral-100
                  mb-3
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  text-sm sm:text-base leading-relaxed
                  text-neutral-600 dark:text-neutral-400
                "
                >
                  {item.description}
                </p>

                {/* Subtle bottom highlight on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-t-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
