// src/components/sections/pricing/PricingHero.jsx

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingHero() {
  const smoothEase = [0.16, 1, 0.3, 1];

  const trustPills = [
    "Transparent Pricing",
    "No Hidden Costs",
    "Built For Growth",
  ];

  return (
    <section
      className="relative isolate overflow-hidden min-h-[70vh] flex items-center justify-center px-6 pt-16 pb-16 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[10%] w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-300/30 dark:bg-indigo-900/20 blur-[80px] sm:blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[10%] w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px] rounded-full bg-cyan-200/40 dark:bg-cyan-900/15 blur-[90px] sm:blur-[130px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-200/30 dark:bg-violet-900/15 blur-[100px] sm:blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-black/5 dark:border-white/10"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300">
            Investment
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: smoothEase }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]"
        >
          Investment In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Long-Term Growth.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
          className="mt-5 max-w-2xl mx-auto text-[14px] sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          Every engagement is thoughtfully tailored to the goals, challenges, and ambitions of your business.
        </motion.p>

        {/* Trust Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: smoothEase }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {trustPills.map((pill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm border border-black/5 dark:border-white/10 text-[10px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300"
            >
              <Check size={12} className="text-blue-600 dark:text-blue-400" />
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Bottom Mini Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: smoothEase }}
          className="mt-8 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-500 max-w-md mx-auto"
        >
          Every project begins with a conversation, not a sales pitch.
        </motion.p>
      </div>
    </section>
  );
}