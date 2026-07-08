// src/components/sections/about/FounderSection.js

"use client";

import { motion } from "framer-motion";

export default function FounderSection() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="relative isolate overflow-hidden px-6 pt-16 pb-16 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[-5%] sm:top-[25%] sm:left-[5%] w-[70vw] h-[70vw] sm:w-[450px] sm:h-[450px] rounded-full bg-indigo-200/25 dark:bg-indigo-800/15 blur-[100px] sm:blur-[130px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-5%] sm:bottom-[30%] sm:right-[10%] w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] rounded-full bg-cyan-200/30 dark:bg-cyan-800/12 blur-[100px] sm:blur-[130px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div
              className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neutral-200/80 to-neutral-300/40 dark:from-neutral-800/60 dark:to-neutral-900/40 ring-1 ring-inset ring-black/5 dark:ring-white/10 backdrop-blur-sm overflow-hidden"
            >
              {/* Subtle inner glow instead of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 dark:from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:pl-4"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-4">
              The Founder
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.2]"
            >
              Meet Jitendra Singh
            </h2>
            <div className="mt-6 space-y-5">
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                JSS Originals was founded with a simple belief: Businesses deserve digital experiences that reflect the quality of the work they provide.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                That philosophy continues to guide every decision, project, and partnership today.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <p className="text-sm sm:text-base italic text-neutral-500 dark:text-neutral-400">
                Technology evolves quickly, but trust remains timeless.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}