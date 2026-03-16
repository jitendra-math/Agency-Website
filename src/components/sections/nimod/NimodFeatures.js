// src/components/sections/nimod/NimodFeatures.js

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

export default function NimodFeatures() {
  const { highlights } = nimodProject;

  return (
    <section
      className="
      relative px-4 py-24
      bg-white
      dark:bg-neutral-950
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Key Features
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
            What Makes This Platform Work
          </h2>

          <p
            className="
            mt-6
            text-base leading-relaxed
            text-neutral-600
            dark:text-neutral-400
            "
          >
            The platform was designed to balance clarity, performance,
            and accessibility while keeping the experience simple for
            rural users.
          </p>
        </motion.div>

        {/* features grid */}
        <div
          className="
          mt-16
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          {highlights.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
              relative
              rounded-2xl
              border border-neutral-200 dark:border-neutral-800
              bg-neutral-50 dark:bg-neutral-900
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              "
            >
              {/* glow highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none"/>

              <p
                className="
                text-sm leading-relaxed
                text-neutral-700
                dark:text-neutral-300
                "
              >
                {feature}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}