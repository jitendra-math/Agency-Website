// src/components/faq/CommonMisconceptions.jsx

"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const misconceptions = [
  {
    misconception: "I Only Need Social Media.",
    response:
      "Social platforms help people discover your business. A website gives them a reason to trust it.",
  },
  {
    misconception: "All Websites Are Basically The Same.",
    response:
      "Visual similarities can be deceiving. Strategy, performance, structure, and user experience often make the difference.",
  },
  {
    misconception: "SEO Produces Instant Results.",
    response:
      "SEO is a long-term investment that compounds over time through consistency and strong foundations.",
  },
];

export default function CommonMisconceptions() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Common Misconceptions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            A Few Things Worth Clarifying
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Many assumptions about websites, SEO, and digital growth create unrealistic expectations. Here's our perspective.
          </p>
        </div>

        {/* Misconceptions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {misconceptions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: smoothEase }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm border border-black/5 dark:border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              {/* Misconception */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0">
                  <X size={14} strokeWidth={2.5} />
                </div>
                <p className="text-base font-semibold text-black dark:text-white">
                  {item.misconception}
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700 mb-4" />

              {/* Response */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.response}
              </p>

              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}