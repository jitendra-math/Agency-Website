// src/components/work/OurApproach.jsx

"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description: "Understand goals, challenges and opportunities before execution.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create purposeful experiences that communicate professionalism and trust.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build with performance, scalability and maintainability in mind.",
  },
  {
    number: "04",
    title: "Refinement",
    description: "Review, optimize and polish every important detail.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deliver, support and help businesses move forward confidently.",
  },
];

export default function OurApproach() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-white dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            How We Approach Every Project
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            A thoughtful process designed to keep projects clear, collaborative and focused on meaningful outcomes.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Connecting Line (hidden on mobile, visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-neutral-300 dark:bg-neutral-700" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 1, ease: smoothEase }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-0 top-1 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-500/20 z-10">
                    {idx + 1}
                  </div>

                  {/* Content */}
                  <div className={`pl-14 md:pl-0 md:w-5/12 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="group relative p-6 sm:p-8 rounded-2xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/70 dark:border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-2">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                    </div>
                  </div>

                  {/* Empty spacer for alignment (desktop) */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}