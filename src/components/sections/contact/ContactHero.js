// src/components/sections/contact/ContactHero.js

"use client";

import { motion } from "framer-motion";
import { contactHero } from "@/data/contact";

export default function ContactHero() {
  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      px-4 pt-36 pb-28
      text-center
      bg-gradient-to-b
      from-white via-neutral-50 to-neutral-100
      dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900
    "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="
          absolute -top-40 -left-40
          h-[420px] w-[420px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
          className="
          absolute -bottom-40 -right-40
          h-[420px] w-[420px]
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
        />

      </div>

      {/* Grid Texture */}
      <div
        className="
        absolute inset-0
        opacity-[0.035]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:42px_42px]
        dark:opacity-[0.05]
      "
      />

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
        relative z-10
        max-w-3xl
        text-4xl sm:text-5xl
        font-semibold
        tracking-tight
        leading-tight
        text-neutral-900
        dark:text-neutral-100
      "
      >
        {contactHero.title}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="
        mt-6
        text-xl sm:text-2xl
        font-medium
        text-neutral-800
        dark:text-neutral-200
      "
      >
        {contactHero.subtitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="
        mt-6
        max-w-xl
        text-base
        leading-relaxed
        text-neutral-600
        dark:text-neutral-400
      "
      >
        {contactHero.description}
      </motion.p>
    </section>
  );
}