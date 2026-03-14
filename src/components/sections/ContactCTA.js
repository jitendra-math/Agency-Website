// src/components/sections/ContactCTA.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative px-4 py-20 overflow-hidden">

      {/* Soft Spotlight Background */}
      <div
        className="
        absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)]
        dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]
      "
      />

      <div className="mx-auto max-w-xl text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="
            text-2xl font-semibold
            text-neutral-900
            dark:text-neutral-100
          "
        >
          Have an Idea Worth Building?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          viewport={{ once: true }}
          className="
            mt-4 text-sm leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
        >
          Whether it's a website, digital platform, or experimental
          project — let's collaborate and turn your idea into something
          meaningful on the web.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-3"
        >
          <Link href="/contact">
            <ShineButton size="lg">
              Start a Project
            </ShineButton>
          </Link>

          <Link href="/projects">
            <Button
              variant="secondary"
              size="lg"
              className="flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}