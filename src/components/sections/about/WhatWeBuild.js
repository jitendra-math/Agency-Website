// src/components/sections/about/WhatWeBuild.js

"use client";

import { motion } from "framer-motion";
import { Globe, Fingerprint, Sparkles } from "lucide-react";

const items = [
  {
    icon: Globe,
    title: "Web Platforms",
    description:
      "Modern websites and digital platforms designed to be fast, reliable, and meaningful for the people who use them.",
  },
  {
    icon: Fingerprint,
    title: "Digital Identity Systems",
    description:
      "Projects that help individuals, creators, and organizations build a strong and authentic presence on the internet.",
  },
  {
    icon: Sparkles,
    title: "Experimental Ideas",
    description:
      "Creative experiments exploring new ways digital spaces can be built, experienced, and shared across the web.",
  },
];

export default function WhatWeBuild() {
  return (
    <section
      className="
      relative px-4 py-24
      bg-neutral-50
      dark:bg-neutral-900
    "
    >
      <div className="mx-auto max-w-6xl">

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
          What We Build
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
          The Kind of Projects We Focus On
        </motion.h2>

        {/* Grid */}
        <div
          className="
          mt-14
          grid gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="
                rounded-2xl
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
                <div
                  className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  bg-blue-500/10
                  text-blue-600
                  dark:text-blue-400
                "
                >
                  <Icon size={18} />
                </div>

                <h3
                  className="
                  mt-4
                  text-lg font-semibold
                  text-neutral-900
                  dark:text-neutral-100
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-2
                  text-sm leading-relaxed
                  text-neutral-600
                  dark:text-neutral-400
                "
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}