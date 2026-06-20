// src/components/sections/about/ProblemSection.js

"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
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
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[10%] left-[-5%] sm:top-[20%] sm:left-[5%]
            w-[80vw] h-[80vw] sm:w-[550px] sm:h-[550px]
            rounded-full
            bg-indigo-200/25 dark:bg-indigo-800/15
            blur-[100px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[15%] right-[-5%] sm:bottom-[25%] sm:right-[10%]
            w-[70vw] h-[70vw] sm:w-[480px] sm:h-[480px]
            rounded-full
            bg-cyan-200/30 dark:bg-cyan-800/12
            blur-[100px] sm:blur-[130px]
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2
              className="
                text-2xl sm:text-3xl md:text-4xl
                font-bold tracking-tight
                text-neutral-900 dark:text-white
                leading-[1.2]
              "
            >
              Many Businesses Depend Entirely on Platforms They Don't Own.
            </h2>
            <div className="mt-6 space-y-4">
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Algorithms change.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Profiles blend together.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Credibility becomes difficult to establish.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Growth becomes unpredictable.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="
              lg:pl-8
              border-l-0 lg:border-l
              border-neutral-200/60 dark:border-neutral-800/60
            "
          >
            <div className="pl-0 lg:pl-8">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-4">
                Our Response
              </p>
              <p
                className="
                  text-xl sm:text-2xl md:text-3xl
                  font-semibold tracking-tight
                  text-neutral-900 dark:text-white
                  leading-[1.3]
                "
              >
                We help businesses build digital foundations they truly own.
              </p>
              {/* Decorative line removed */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}