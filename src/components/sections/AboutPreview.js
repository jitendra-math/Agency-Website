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
      {/* AMBIENT GLOW (Synced with Hero) */}
      {/* ===================================== */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div
          className="
          w-[100vw] h-[50vh] sm:w-[800px] sm:h-[400px]
          bg-blue-500/5 dark:bg-blue-500/10
          blur-[100px] rounded-full
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
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-400 dark:from-neutral-300 dark:to-neutral-600">
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
                bg-white/60 dark:bg-white/[0.02]
                border border-black/[0.04] dark:border-white/[0.05]
                backdrop-blur-2xl
                transition-all duration-500 ease-out
                hover:-translate-y-1.5
                hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]
                dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.02)]
                hover:bg-white/80 dark:hover:bg-white/[0.04]
              "
              >
                {/* Icon Wrapper - Premium Gradient Touch */}
                <div
                  className="
                  mb-8
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br from-neutral-100 to-neutral-200
                  dark:from-neutral-800 dark:to-neutral-900
                  border border-black/[0.05] dark:border-white/[0.05]
                  shadow-inner
                  group-hover:scale-110 transition-transform duration-500 ease-out
                "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-neutral-800 dark:text-neutral-200 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
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
                  text-neutral-500 dark:text-neutral-400
                "
                >
                  {item.description}
                </p>

                {/* Subtle bottom highlight on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-t-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
