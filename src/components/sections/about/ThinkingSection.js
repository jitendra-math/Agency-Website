// src/components/sections/about/ThinkingSection.js

"use client";

import { motion } from "framer-motion";

const thinkingPoints = [
  {
    number: "01",
    title: "Strategy Before Execution",
    description:
      "Every successful digital experience begins with understanding goals, challenges, and opportunities before moving into execution.",
  },
  {
    number: "02",
    title: "Design With Purpose",
    description:
      "Visual decisions should support clarity, usability, and trust rather than exist purely for decoration.",
  },
  {
    number: "03",
    title: "Performance Matters",
    description:
      "Speed, accessibility, and reliability shape how people perceive the quality of a business online.",
  },
  {
    number: "04",
    title: "Growth Is Long-Term",
    description:
      "The strongest digital foundations are designed to support businesses not only today, but years into the future.",
  },
];

export default function ThinkingSection() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
        relative isolate overflow-hidden
        px-6 pt-16 pb-16
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
            absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[5%]
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
            absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[5%]
            w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px]
            rounded-full
            bg-cyan-200/40 dark:bg-cyan-900/15
            blur-[90px] sm:blur-[130px]
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

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Our Thinking
          </p>
        </motion.div>

        {/* Editorial Timeline */}
        <div className="space-y-12 sm:space-y-16">
          {thinkingPoints.map((point, index) => {
            const titleWords = point.title.split(" ");
            const firstWord = titleWords[0];
            const restWords = titleWords.slice(1).join(" ");

            return (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 1.2,
                  ease: smoothEase,
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-10"
              >
                {/* Large Translucent Number */}
                <div className="relative flex-shrink-0 md:w-32">
                  <span
                    className="
                      text-6xl sm:text-7xl md:text-8xl
                      font-black tracking-tighter
                      text-neutral-900/5 dark:text-white/5
                      select-none
                    "
                  >
                    {point.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="
                      text-xl sm:text-2xl md:text-3xl
                      font-bold tracking-tight
                      text-neutral-900 dark:text-white
                      mb-3
                    "
                  >
                    <span
                      className="
                        text-transparent bg-clip-text
                        bg-gradient-to-r from-blue-600 to-cyan-500
                        dark:from-blue-400 dark:to-cyan-300
                      "
                    >
                      {firstWord}
                    </span>
                    {restWords && ` ${restWords}`}
                  </h3>
                  <p
                    className="
                      text-base sm:text-lg
                      leading-relaxed
                      text-neutral-600 dark:text-neutral-400
                      max-w-xl
                    "
                  >
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider removed */}
      </div>
    </section>
  );
}