// src/components/sections/about/FutureVision.js

"use client";

import { motion } from "framer-motion";

export default function FutureVision() {
  return (
    <section
      className="
      relative isolate overflow-hidden
      px-4 py-24
      bg-gradient-to-b
      from-neutral-50
      to-white
      dark:from-neutral-900
      dark:to-neutral-950
    "
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="
          absolute -top-36 -right-36
          h-[360px] w-[360px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 26, repeat: Infinity }}
          className="
          absolute -bottom-36 -left-36
          h-[360px] w-[360px]
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
        />
      </div>

      <div className="mx-auto max-w-3xl text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          text-xs uppercase tracking-[0.35em]
          text-neutral-500
        "
        >
          Looking Ahead
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
        "
        >
          The Future of JSS Originals
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-8 space-y-6
          text-base leading-relaxed
          text-neutral-600
          dark:text-neutral-400
        "
        >
          <p>
            The internet continues to evolve every day, bringing new
            ideas, technologies, and opportunities. JSS Originals aims
            to remain a space where thoughtful digital projects can
            grow and meaningful experiments can take shape.
          </p>

          <p>
            Future work will continue exploring areas such as digital
            identity systems, modern web platforms, and creative
            internet experiments that challenge traditional ways of
            building online experiences.
          </p>

          <p>
            Rather than focusing on building many things, the goal is to
            build the right things — projects that remain useful,
            simple, and valuable for the people who use them.
          </p>
        </motion.div>

      </div>
    </section>
  );
}