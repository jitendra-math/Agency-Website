// src/components/sections/about/ClosingStatement.js

"use client";

import { motion } from "framer-motion";

export default function ClosingStatement() {
  return (
    <section
      className="
      relative px-4 py-28
      bg-white
      dark:bg-neutral-950
      text-center
    "
    >
      <div className="mx-auto max-w-2xl">

        {/* Divider */}
        <div className="mb-12 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

        {/* Closing line */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          text-3xl sm:text-4xl
          font-semibold
          tracking-tight
          text-neutral-900
          dark:text-neutral-100
        "
        >
          The web is still being written.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-6
          text-base leading-relaxed
          text-neutral-600
          dark:text-neutral-400
        "
        >
          JSS Originals is simply one place where new chapters begin.
        </motion.p>

      </div>
    </section>
  );
}