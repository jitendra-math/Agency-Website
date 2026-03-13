// src/components/sections/ContactCTA.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="
        px-4 py-16
        bg-neutral-100
        dark:bg-neutral-900
      "
    >
      <div className="mx-auto max-w-6xl text-center">
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
          Have a Project Idea?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="
            mx-auto mt-3 max-w-xl
            text-sm leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
        >
          If you have a project in mind or want to collaborate,
          let's build something meaningful together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <Link href="/contact">
            <ShineButton size="lg">
              Contact Us
            </ShineButton>
          </Link>

          <Link href="/projects">
            <Button variant="secondary" size="lg">
              View Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}