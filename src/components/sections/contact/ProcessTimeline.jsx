// src/components/sections/contact/ProcessTimeline.jsx

"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We review your requirements and understand your goals.",
  },
  {
    number: "02",
    title: "Proposal",
    description: "You receive a detailed scope, timeline and quotation.",
  },
  {
    number: "03",
    title: "Development",
    description: "Design, development and testing begin after approval.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Your project goes live with post-launch support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-white dark:bg-neutral-950/90 px-4 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white mt-2">
            What Happens After You Contact Us?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3">
            A clear process designed to keep projects organised, efficient and predictable.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (hidden on mobile) */}
        <div className="hidden md:block relative">
          {/* connecting line */}
          <div className="absolute top-9 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-semibold text-sm relative z-10 mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-semibold text-sm flex-shrink-0">
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px h-12 bg-neutral-200 dark:bg-neutral-800 mt-2" />
                )}
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}