// src/components/sections/about/Philosophy.js

"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section
      className="
      relative px-4 py-24
      bg-white
      dark:bg-neutral-950
    "
    >
      <div className="mx-auto max-w-3xl text-center">

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
          Philosophy
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
          How We Think About the Web
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
            The internet is more than a collection of websites. It is a
            living space where ideas, people, and communities connect.
            Every project built for the web becomes a small part of that
            larger ecosystem.
          </p>

          <p>
            At JSS Originals, the goal is not simply to build more
            things, but to build the right things. Projects are designed
            to be clear, useful, and thoughtfully crafted so they can
            remain valuable over time.
          </p>

          <p>
            Simplicity plays a central role in this philosophy. The best
            digital experiences are often the ones that feel effortless
            to use. When technology becomes invisible, ideas are allowed
            to shine.
          </p>

          <p>
            This approach guides every project developed within JSS
            Originals — focusing on meaningful ideas, careful execution,
            and a genuine respect for the open web.
          </p>
        </motion.div>

      </div>
    </section>
  );
}