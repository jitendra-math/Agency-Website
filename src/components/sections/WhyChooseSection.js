// src/components/sections/WhyChooseSection.js

"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Strategic Thinking",
    description:
      "Before design. Before development. Before execution. We take the time to understand your goals, audience, and opportunities to ensure every decision serves a purpose.",
  },
  {
    number: "02",
    title: "Crafted With Intention",
    description:
      "Great experiences don't happen by accident. Every interaction, detail, and design decision is carefully considered to communicate professionalism and inspire confidence.",
  },
  {
    number: "03",
    title: "Built for Performance",
    description:
      "Fast, responsive, and reliable experiences are no longer optional. They are the foundation of how modern businesses earn attention and retain trust.",
  },
  {
    number: "04",
    title: "Focused on Growth",
    description:
      "Success isn't measured by launching a website. It's measured by the opportunities it creates and the growth it enables over time.",
  },
];

export default function WhyChooseSection() {
  const smoothEase = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: smoothEase },
    },
  };

  return (
    <section
      className="
        relative isolate overflow-hidden
        px-6 pt-16 pb-16
        bg-[#fafafa] dark:bg-[#050505]
        transition-colors duration-500
      "
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[10%]
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
            absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[10%]
            w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px]
            rounded-full
            bg-cyan-200/40 dark:bg-cyan-900/15
            blur-[90px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />

        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[70vw] h-[70vw] sm:w-[400px] sm:h-[400px]
            rounded-full
            bg-purple-200/30 dark:bg-violet-900/15
            blur-[100px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">
            The JSS Originals Difference
          </p>

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold tracking-tighter
              text-neutral-900 dark:text-white
              leading-[1.1]
            "
          >
            Built for Businesses That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              Think Long-Term.
            </span>
          </h2>

          <p
            className="
              mt-4 text-[14px] sm:text-base leading-relaxed
              text-neutral-600 dark:text-neutral-400
              font-medium
            "
          >
            We believe exceptional digital experiences are created through
            thoughtful strategy, refined execution, and a deep understanding of
            what businesses need to earn trust and grow sustainably.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 md:space-y-16"
        >
          {principles.map((principle, idx) => (
            <motion.div
              key={principle.number}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 border-b border-neutral-200/50 dark:border-neutral-800/50 pb-10 md:pb-12 last:border-0"
            >
              <div className="relative flex-shrink-0 md:w-32">
                <span
                  className="
                    text-7xl sm:text-8xl md:text-9xl
                    font-black tracking-tighter
                    text-neutral-900/5 dark:text-white/5
                    select-none
                  "
                >
                  {principle.number}
                </span>
              </div>

              <div className="flex-1">
                <h3
                  className="
                    text-2xl sm:text-3xl md:text-4xl
                    font-bold tracking-tight
                    text-neutral-900 dark:text-white
                    mb-4
                  "
                >
                  {principle.title}
                </h3>
                <p
                  className="
                    text-base sm:text-lg
                    leading-relaxed
                    text-neutral-600 dark:text-neutral-400
                    max-w-2xl
                  "
                >
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: smoothEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 sm:mt-20"
        >
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              bg-white/40 dark:bg-white/[0.02]
              ring-1 ring-inset ring-black/5 dark:ring-white/10
              backdrop-blur-2xl
              p-8 sm:p-12 md:p-16
              text-center
            "
          >
            <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 blur-3xl" />

            <h3
              className="
                text-2xl sm:text-3xl md:text-4xl
                font-bold tracking-tight
                text-neutral-900 dark:text-white
                mb-6
              "
            >
              Our Philosophy
            </h3>

            <p
              className="
                text-base sm:text-lg md:text-xl
                leading-relaxed
                text-neutral-600 dark:text-neutral-400
                max-w-3xl mx-auto
              "
            >
              Social media helps businesses get noticed. Trust gives people a
              reason to stay. At JSS Originals, we create digital experiences
              designed to strengthen credibility, support growth, and help
              businesses build something that lasts.
            </p>

            <div className="mt-8 h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}