// src/components/sections/about/PhilosophySection.js

"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
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
      {/* Ambient Glows - Softer, more editorial */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[15%] left-[5%] sm:top-[25%] sm:left-[15%]
            w-[70vw] h-[70vw] sm:w-[450px] sm:h-[450px]
            rounded-full
            bg-blue-200/25 dark:bg-indigo-800/15
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[10%] right-[5%] sm:bottom-[20%] sm:right-[15%]
            w-[75vw] h-[75vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-cyan-200/30 dark:bg-cyan-800/12
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

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Editorial heading with split-line treatment */}
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold tracking-tighter
              text-neutral-900 dark:text-white
              leading-[1.15]
            "
          >
            Attention Gets You Seen.{" "}
            <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Trust Moves Businesses Forward.
            </span>
          </h2>

          {/* Manifesto body - elevated typography */}
          <div className="mt-10 sm:mt-12 max-w-2xl mx-auto">
            <p
              className="
                text-base sm:text-lg md:text-xl
                leading-relaxed sm:leading-relaxed
                text-neutral-600 dark:text-neutral-400
                font-medium
              "
            >
              Social media introduces people to your business. Trust gives them a reason to choose you.
            </p>
            <p
              className="
                mt-6
                text-base sm:text-lg md:text-xl
                leading-relaxed sm:leading-relaxed
                text-neutral-600 dark:text-neutral-400
              "
            >
              We believe digital experiences should communicate professionalism, inspire confidence, and support meaningful growth.
            </p>
          </div>

          {/* Elegant accent line */}
          <div className="mt-12 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}