// src/components/faq/FAQCTA.jsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FAQCTA() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] px-6 py-16 sm:py-24 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Ready When You Are
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mt-4 leading-[1.1]">
            Ready To Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Worth Remembering?
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Whether you're planning your first website or preparing for the next stage of growth, we're here to create digital experiences designed to strengthen trust and support long-term success.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start A Project
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
            <a
              href="https://wa.me/919549626202"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white dark:hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              Chat On WhatsApp
            </a>
          </div>

          {/* Micro Text */}
          <p className="mt-8 text-xs text-neutral-500 dark:text-neutral-500">
            Typical response time: Within 24 Business Hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}