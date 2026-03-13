// src/components/sections/AboutPreview.js

"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Sparkles } from "lucide-react";

export default function AboutPreview() {
  const items = [
    {
      icon: Globe,
      title: "Web Platforms",
      description:
        "Modern websites and platforms designed for performance and strong digital presence.",
    },
    {
      icon: Layers,
      title: "SEO Identity Systems",
      description:
        "Structured identity systems built to strengthen online visibility and search footprint.",
    },
    {
      icon: Sparkles,
      title: "Experimental Projects",
      description:
        "Independent digital experiments exploring open web ideas and knowledge platforms.",
    },
  ];

  return (
    <section
      className="
        px-4 py-16
        bg-white
        dark:bg-neutral-950
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            text-2xl font-semibold
            text-neutral-900
            dark:text-neutral-100
          "
        >
          What is JSS Originals
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="
            mt-3 max-w-xl
            text-sm leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
        >
          JSS Originals is a digital projects lab focused on building web
          platforms, SEO identity systems, and experimental online projects.
        </motion.p>

        {/* Features */}
        <div className="mt-10 grid gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  flex gap-4 rounded-xl
                  border border-neutral-200
                  dark:border-neutral-800
                  bg-neutral-50
                  dark:bg-neutral-900
                  p-4
                "
              >
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    bg-blue-100
                    dark:bg-blue-900/40
                  "
                >
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}