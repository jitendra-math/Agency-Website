// src/components/sections/nimod/NimodScreenshots.js

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function NimodScreenshots() {
  const { screenshots } = nimodProject;

  const items = [
    {
      src: screenshots.light,
      label: "Light Mode",
    },
    {
      src: screenshots.dark,
      label: "Dark Mode",
    },
  ];

  return (
    <section
      className="
      relative px-4 py-24
      bg-neutral-50
      dark:bg-neutral-900
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
            Interface
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
            Interface Design
          </h2>

          <p
            className="
            mt-6
            text-base leading-relaxed
            text-neutral-600
            dark:text-neutral-400
            "
          >
            A modern interface designed for clarity, accessibility,
            and performance across all devices.
          </p>
        </motion.div>

        {/* screenshots */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
              group relative overflow-hidden
              rounded-2xl
              border border-neutral-200 dark:border-neutral-800
              bg-white dark:bg-neutral-950
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_16px_60px_rgba(0,0,0,0.12)]
              "
            >

              {/* image */}
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* label */}
              <div
                className="
                absolute top-3 left-3
                px-3 py-1
                rounded-full
                text-[11px] md:text-xs
                font-medium
                bg-black/60
                text-white
                backdrop-blur
                "
              >
                {item.label}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}