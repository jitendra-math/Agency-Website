// src/components/sections/FinalCTA.js

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
        relative isolate overflow-hidden
        px-6 py-24 sm:py-32
        bg-[#fafafa] dark:bg-[#050505]
        transition-colors duration-500
      "
    >
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (Cinematic Slow) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Blue/Indigo */}
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

        {/* Glow 2 - Cyan/Teal */}
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

        {/* Glow 3 - Subtle Purple Center */}
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

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* ===================================== */}
        {/* FLOATING GLASS CARD */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="
            relative
            rounded-3xl sm:rounded-[2.5rem]
            bg-white/40 dark:bg-white/[0.02]
            ring-1 ring-inset ring-black/5 dark:ring-white/10
            backdrop-blur-2xl
            p-8 sm:p-12 md:p-16
            text-center
            overflow-hidden
          "
        >
          {/* Inner ambient glow for depth */}
          <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 blur-3xl" />

          {/* ===================================== */}
          {/* BADGE */}
          {/* ===================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 mb-8"
          >
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Ready When You Are
            </span>
          </motion.div>

          {/* ===================================== */}
          {/* HEADING */}
          {/* ===================================== */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            viewport={{ once: true }}
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold tracking-tighter
              text-neutral-900 dark:text-white
              leading-[1.1]
            "
          >
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              Worth Remembering.
            </span>
          </motion.h2>

          {/* ===================================== */}
          {/* SUBHEADING */}
          {/* ===================================== */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: smoothEase }}
            viewport={{ once: true }}
            className="
              mt-6 sm:mt-8
              text-base sm:text-lg md:text-xl
              leading-relaxed
              text-neutral-600 dark:text-neutral-400
              max-w-2xl mx-auto
            "
          >
            Whether you're establishing your digital presence or preparing for
            the next stage of growth, we're here to create experiences that
            strengthen trust and move your business forward.
          </motion.p>

          {/* ===================================== */}
          {/* TRUST INDICATORS */}
          {/* ===================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: smoothEase }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {["Strategy", "Design", "Development"].map((item) => (
              <span
                key={item}
                className="
                  px-4 py-1.5
                  rounded-full
                  bg-white/50 dark:bg-white/5
                  border border-black/10 dark:border-white/10
                  backdrop-blur-sm
                  text-xs font-medium
                  text-neutral-700 dark:text-neutral-300
                "
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* ===================================== */}
          {/* CTA BUTTONS */}
          {/* ===================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: smoothEase }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Primary CTA */}
            <a
              href="https://client.jssoriginals.in/start"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <button
                className="
                  relative w-full sm:w-auto
                  px-8 py-3.5 sm:px-10 sm:py-4
                  rounded-full
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  text-white text-base sm:text-lg font-semibold
                  shadow-md shadow-blue-500/20
                  transition-all duration-300
                  hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30
                  active:scale-95
                  overflow-hidden
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            </a>

            {/* Secondary CTA */}
            <Link href="/contact" className="group">
              <button
                className="
                  w-full sm:w-auto
                  px-8 py-3.5 sm:px-10 sm:py-4
                  rounded-full
                  bg-white/60 dark:bg-white/5
                  backdrop-blur-md
                  border border-white/40 dark:border-white/10
                  text-neutral-800 dark:text-white
                  text-base sm:text-lg font-medium
                  transition-all duration-300
                  hover:bg-white/80 dark:hover:bg-white/10
                  hover:scale-105 hover:shadow-lg
                  active:scale-95
                "
              >
                Schedule a Consultation
              </button>
            </Link>
          </motion.div>

          {/* ===================================== */}
          {/* SUPPORTING TEXT */}
          {/* ===================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: smoothEase }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 max-w-md mx-auto">
              Every project begins with a conversation about your goals,
              challenges, and ambitions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}