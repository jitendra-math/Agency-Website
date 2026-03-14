// src/components/sections/about/AboutStory.js

"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section
      className="
      relative px-4 py-24
      bg-white
      dark:bg-neutral-950
    "
    >
      <div className="mx-auto max-w-3xl">

        {/* Section label */}
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
          The Story
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-4
          text-3xl
          font-semibold
          tracking-tight
          text-neutral-900
          dark:text-neutral-100
        "
        >
          The Beginning of JSS Originals
        </motion.h2>

        {/* Paragraphs */}
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
            JSS Originals started from a simple belief — the internet
            still has countless ideas waiting to be explored. In a
            world where many websites look and feel the same, the goal
            was to build projects that carry originality, purpose, and
            thoughtful design.
          </p>

          <p>
            Instead of creating random platforms, the focus has always
            been on meaningful digital work. Some ideas grow into
            full-scale web platforms, while others remain experiments
            that explore new possibilities on the internet.
          </p>

          <p>
            Every project begins with curiosity. Questions lead the
            process: what value does this idea bring, who will use it,
            and how can it remain useful in the long run? These small
            questions often turn into larger projects that shape the
            direction of JSS Originals.
          </p>

          <p>
            Over time, JSS Originals has evolved into a digital space
            where experiments, platforms, and thoughtful ideas come
            together. It is less about building many things and more
            about building the right things for the web.
          </p>
        </motion.div>

      </div>
    </section>
  );
}