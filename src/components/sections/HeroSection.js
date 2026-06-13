// src/components/sections/HeroSection.js

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
        relative isolate overflow-hidden
        min-h-[85vh]
        flex items-center justify-center
        px-4 pt-16 pb-8
        bg-[#fafafa] dark:bg-[#050505]
      "
    >
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

        <div
          className="
            absolute -top-20 -left-20
            w-[320px] h-[320px]
            rounded-full
            bg-violet-400/25
            dark:bg-violet-700/20
            blur-[100px]
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[280px] h-[280px]
            rounded-full
            bg-cyan-300/20
            dark:bg-cyan-600/15
            blur-[100px]
          "
        />

      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto text-center">

        {/* Announcement - smaller badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          className="
            inline-flex items-center gap-1.5
            px-3 py-1.5 mb-3
            rounded-full
            bg-white/60 dark:bg-white/[0.04]
            backdrop-blur-xl
            border border-black/5 dark:border-white/10
          "
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-wide
              text-neutral-700 dark:text-neutral-300
            "
          >
            Digital Presence • Real Results
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: smoothEase,
          }}
          className="
            text-[2rem]
            sm:text-5xl
            md:text-6xl

            font-black
            tracking-tighter
            leading-[1.2]

            text-neutral-900
            dark:text-white
          "
        >
          Your{" "}
          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
            "
          >
            Business
          </span>{" "}
          Deserves More Than a{" "}
          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
            "
          >
            Social Media
          </span>{" "}
          Page.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: smoothEase,
          }}
          className="
            mt-5
            max-w-2xl mx-auto

            text-[14px]
            sm:text-base

            leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
        >
          Instagram helps people discover your business, but a website gives your brand a place to be trusted, remembered, and chosen. Build a digital presence that works for you 24/7, turning curious visitors into confident customers. ✨
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: smoothEase,
          }}
          className="
            mt-6
            flex flex-col
            sm:flex-row
            gap-4
            justify-center
            w-full
            max-w-md
            mx-auto
          "
        >
          {/* Primary Button - View Projects (with infinite shine) */}
          <Link href="/projects" className="group relative w-full sm:w-auto">
            <button
              className="
                relative w-full sm:w-auto
                px-6 py-2.5 sm:px-7 sm:py-3
                rounded-full
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white text-sm sm:text-base font-medium tracking-wide
                overflow-hidden
                flex items-center justify-center gap-2
              "
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              {/* Infinite shine effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
          </Link>

          {/* Secondary Button - Let's Talk (visible in light theme) */}
          <Link href="/contact" className="group w-full sm:w-auto">
            <button
              className="
                w-full sm:w-auto
                px-6 py-2.5 sm:px-7 sm:py-3
                rounded-full
                bg-white/90 dark:bg-white/10
                backdrop-blur-sm
                border border-black/20 dark:border-white/20
                text-neutral-800 dark:text-white
                text-sm sm:text-base font-medium
                transition-all duration-300
                flex items-center justify-center gap-2
              "
            >
              Let's Talk
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </motion.div>

      </div>

      {/* Keyframes for infinite shine */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-\\[shine_3s_linear_infinite\\] {
          animation: shine 3s linear infinite;
        }
      `}</style>
    </section>
  );
}