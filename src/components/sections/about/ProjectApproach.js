// src/components/sections/about/ProjectApproach.js

"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Curiosity First",
    description:
      "Every project begins with a question. What problem does this idea solve, and why should it exist on the internet?",
  },
  {
    title: "Thoughtful Exploration",
    description:
      "Ideas are explored through small experiments, sketches, and prototypes before turning into real platforms.",
  },
  {
    title: "Careful Building",
    description:
      "Once the direction becomes clear, the project is developed with attention to performance, simplicity, and long-term usefulness.",
  },
  {
    title: "Meaningful Outcome",
    description:
      "The final goal is always the same — creating digital experiences that feel simple, useful, and meaningful for people using them.",
  },
];

export default function ProjectApproach() {
  return (
    <section
      className="
      relative px-4 py-24
      bg-neutral-50
      dark:bg-neutral-900
    "
    >
      <div className="mx-auto max-w-5xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          text-xs uppercase tracking-[0.35em]
          text-neutral-500
          text-center
        "
        >
          Project Approach
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-4
          text-3xl font-semibold
          tracking-tight
          text-neutral-900
          dark:text-neutral-100
          text-center
        "
        >
          How Projects Take Shape
        </motion.h2>

        {/* Steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="
              rounded-xl
              border border-neutral-200
              dark:border-neutral-800
              bg-white/70
              dark:bg-neutral-900/60
              backdrop-blur
              p-6
              transition-all duration-300
              hover:-translate-y-1
            "
            >

              {/* Step number */}
              <div
                className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                bg-blue-500/10
                text-sm font-semibold
                text-blue-600
                dark:text-blue-400
              "
              >
                {index + 1}
              </div>

              {/* Title */}
              <h3
                className="
                mt-4
                text-lg font-semibold
                text-neutral-900
                dark:text-neutral-100
              "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                mt-2
                text-sm leading-relaxed
                text-neutral-600
                dark:text-neutral-400
              "
              >
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}