// src/components/sections/about/FounderSection.js

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import founder from "@/assets/images/founder/founder.png";

export default function FounderSection() {
  return (
    <section
      className="
      relative px-4 py-24
      bg-white
      dark:bg-neutral-950
    "
    >
      <div
        className="
        mx-auto max-w-6xl
        grid gap-12
        items-center
        md:grid-cols-2
      "
      >
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            className="
            relative
            rounded-2xl
            border border-neutral-200
            dark:border-neutral-800
            bg-neutral-50
            dark:bg-neutral-900
            p-6
          "
          >
            <Image
              src={founder}
              alt="Founder of JSS Originals"
              width={420}
              height={420}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>

        {/* Founder Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <p
            className="
            text-xs uppercase tracking-[0.35em]
            text-neutral-500
          "
          >
            Founder
          </p>

          {/* Name */}
          <h2
            className="
            mt-4
            text-3xl font-semibold
            tracking-tight
            text-neutral-900
            dark:text-neutral-100
          "
          >
            Jitendra Singh
          </h2>

          {/* Paragraph */}
          <p
            className="
            mt-6
            text-base leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
          >
            JSS Originals is created and led by Jitendra Singh, an
            independent web developer and digital experimenter focused
            on building thoughtful projects for the modern web. His
            work explores digital identity, web platforms, and
            experimental internet ideas that aim to create meaningful
            online experiences.
          </p>

          <p
            className="
            mt-4
            text-base leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
          >
            Through JSS Originals, he continues to explore new ideas
            and develop digital systems that combine creativity,
            simplicity, and long-term usefulness on the internet.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://jitubanna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Know the Founder
              </Button>
            </a>

            <a href="mailto:me@jitubanna.com">
              <Button variant="secondary" size="lg">
                Email
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}