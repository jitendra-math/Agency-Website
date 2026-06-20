// src/components/sections/contact/AvailabilityNotice.jsx

"use client";

import { motion } from "framer-motion";

export default function AvailabilityNotice() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
        relative isolate overflow-hidden
        px-4 py-16 sm:py-20
        bg-[#fafafa] dark:bg-[#050505]
        transition-colors duration-500
      "
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
          className="
            absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[10%]
            w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-blue-300/30 dark:bg-indigo-900/20
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[10%]
            w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px]
            rounded-full
            bg-cyan-200/40 dark:bg-cyan-900/15
            blur-[90px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Subtle Grid Depth */}
      <div
        className="
          absolute inset-0 -z-20
          opacity-[0.03] dark:opacity-[0.05]
          bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
          bg-[size:48px_48px] sm:bg-[size:64px_64px]
          [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative p-8 sm:p-12 rounded-2xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm border border-black/5 dark:border-white/10 text-center shadow-sm"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full mb-4">
            Limited Availability
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
            We Currently Accept A Limited Number Of Projects Each Month
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            To maintain quality, communication standards and delivery timelines, project slots are allocated on a first-come, first-served basis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}