// src/components/sections/about/ProcessSection.js

"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your business, goals, audience, and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Together, we define priorities and establish a clear direction for the project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Experiences are crafted to communicate professionalism, clarity, and trust.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Modern technologies are used to build fast, scalable, and reliable solutions.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After refinement and testing, your digital experience is introduced to the world.",
  },
];

export default function ProcessSection() {
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
            x: [0, -25, 0],
            y: [0, 35, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[10%] left-[-10%] sm:top-[15%] sm:left-[5%]
            w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-blue-300/30 dark:bg-indigo-900/20
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:bottom-[5%] sm:right-[5%]
            w-[90vw] h-[90vw] sm:w-[550px] sm:h-[550px]
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

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">
            How We Work
          </p>
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold tracking-tighter
              text-neutral-900 dark:text-white
              leading-[1.1]
            "
          >
            A Process Built on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Clarity & Collaboration.
            </span>
          </h2>
          <p
            className="
              mt-4 text-[14px] sm:text-base
              leading-relaxed
              text-neutral-600 dark:text-neutral-400
              max-w-2xl mx-auto
            "
          >
            Every successful project begins with understanding and progresses
            through a thoughtful, collaborative process designed to deliver
            meaningful outcomes.
          </p>
        </motion.div>

        {/* Timeline - Horizontal on desktop, Vertical on mobile */}
        <div className="relative mt-8">
          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative">
            {/* Connecting Line */}
            <div className="absolute top-[72px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
            <div className="grid grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 1,
                    ease: smoothEase,
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="mb-4">
                    <span
                      className="
                        text-4xl font-black tracking-tighter
                        text-neutral-900/10 dark:text-white/10
                      "
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Step Title */}
                  <h3
                    className="
                      text-lg font-semibold tracking-tight
                      text-neutral-900 dark:text-white
                      mb-2
                    "
                  >
                    {step.title}
                  </h3>
                  {/* Step Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden space-y-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: smoothEase,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex gap-5"
              >
                {/* Left Column - Number with connector */}
                <div className="flex-shrink-0 w-16 text-right">
                  <span
                    className="
                      text-3xl font-black tracking-tighter
                      text-neutral-900/10 dark:text-white/10
                    "
                  >
                    {step.number}
                  </span>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-10 mx-auto mt-2 bg-gradient-to-b from-neutral-300 dark:from-neutral-700 to-transparent" />
                  )}
                </div>
                {/* Right Column - Content */}
                <div className="flex-1 pb-8">
                  <h3
                    className="
                      text-xl font-semibold tracking-tight
                      text-neutral-900 dark:text-white
                      mb-2
                    "
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Elegant Separator */}
        <div className="mt-16 h-px w-12 mx-auto bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
    </section>
  );
}