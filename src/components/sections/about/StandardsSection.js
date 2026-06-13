// src/components/sections/about/StandardsSection.js

"use client";

import { motion } from "framer-motion";

const standards = [
  "Clarity over complexity.",
  "Quality over shortcuts.",
  "Trust over trends.",
  "Performance over decoration.",
  "Long-term thinking over quick wins.",
];

export default function StandardsSection() {
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
      {/* Ambient Glows - Soft and Editorial */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -15, 0],
            y: [0, 25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[20%] left-[-5%] sm:top-[30%] sm:left-[10%]
            w-[70vw] h-[70vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-blue-200/30 dark:bg-blue-900/15
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[10%] right-[-5%] sm:bottom-[20%] sm:right-[10%]
            w-[80vw] h-[80vw] sm:w-[550px] sm:h-[550px]
            rounded-full
            bg-cyan-200/25 dark:bg-cyan-800/12
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="
          absolute inset-0 -z-20
          opacity-[0.02] dark:opacity-[0.04]
          bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
          bg-[size:48px_48px] sm:bg-[size:64px_64px]
          [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold tracking-tighter
              text-neutral-900 dark:text-white
              leading-[1.1]
            "
          >
            Standards We Never{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Compromise On.
            </span>
          </h2>
        </motion.div>

        {/* Manifesto List */}
        <div className="space-y-6 sm:space-y-8">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 1,
                ease: smoothEase,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group"
            >
              <p
                className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-medium tracking-tight
                  text-neutral-700 dark:text-neutral-300
                  hover:text-neutral-900 dark:hover:text-white
                  transition-colors duration-500
                  leading-[1.2]
                "
              >
                {standard}
              </p>
              {/* Subtle accent line on hover */}
              <div className="mt-2 h-px w-0 group-hover:w-12 bg-gradient-to-r from-blue-500/50 to-transparent transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>

        {/* Closing Elegance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: smoothEase }}
          viewport={{ once: true }}
          className="mt-16 pt-8 text-center"
        >
          <div className="h-px w-12 mx-auto bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <p className="mt-6 text-xs text-neutral-400 dark:text-neutral-500 tracking-wide">
            These principles define every project we undertake.
          </p>
        </motion.div>
      </div>
    </section>
  );
}