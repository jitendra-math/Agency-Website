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
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-16 sm:py-20 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500"
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            What Happens After You Contact Us?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-2xl mx-auto">
            A clear process designed to keep projects organised, efficient and predictable.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (hidden on mobile) */}
        <div className="hidden md:block relative">
          {/* connecting line */}
          <div className="absolute top-9 left-0 right-0 h-px bg-neutral-300 dark:bg-neutral-700" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-semibold text-sm relative z-10 mb-4 shadow-md shadow-blue-500/20">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed max-w-[180px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: smoothEase }}
              viewport={{ once: true, margin: "-30px" }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-semibold text-sm flex-shrink-0 shadow-md shadow-blue-500/20">
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px h-12 bg-neutral-300 dark:bg-neutral-700 mt-2" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}