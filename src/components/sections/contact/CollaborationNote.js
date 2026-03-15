// src/components/sections/contact/CollaborationNote.js

"use client";

import { motion } from "framer-motion";
import { collaborationNote } from "@/data/contact";

export default function CollaborationNote() {
  return (
    <section
      className="
      relative px-4 py-24
      bg-neutral-50
      dark:bg-neutral-900
      text-center
    "
    >
      <div className="mx-auto max-w-3xl">

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
          Collaboration
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
          {collaborationNote.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-6
          text-base leading-relaxed
          text-neutral-600
          dark:text-neutral-400
        "
        >
          {collaborationNote.description}
        </motion.p>

      </div>
    </section>
  );
}