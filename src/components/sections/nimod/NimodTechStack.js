// src/components/sections/nimod/NimodTechStack.js

"use client";

import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function NimodTechStack() {
  const { techStack } = nimodProject;

  return (
    <section
      className="
      relative px-4 py-24
      bg-neutral-50
      dark:bg-neutral-900
      "
    >
      <div className="mx-auto max-w-5xl">

        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Technology
          </p>

          <h2
            className="
            mt-4
            text-3xl sm:text-4xl
            font-semibold
            tracking-tight
            text-neutral-900
            dark:text-neutral-100
            "
          >
            Tech Stack
          </h2>

          <p
            className="
            mt-6
            text-base leading-relaxed
            text-neutral-600
            dark:text-neutral-400
            "
          >
            The platform was built using modern web technologies
            focused on performance, scalability, and maintainability.
          </p>
        </motion.div>

        {/* stack grid */}
        <div
          className="
          mt-16
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
          gap-4
          "
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="
              group
              flex items-center justify-center
              rounded-xl
              border border-neutral-200 dark:border-neutral-800
              bg-white dark:bg-neutral-950
              px-4 py-3
              text-sm font-medium
              text-neutral-800 dark:text-neutral-200
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-md
              "
            >
              {tech}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}