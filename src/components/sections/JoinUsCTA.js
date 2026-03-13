// src/components/sections/JoinUsCTA.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Link from "next/link";

export default function JoinUsCTA() {
  return (
    <section
      className="
        px-4 py-16
        bg-gradient-to-b
        from-white
        to-neutral-100
        dark:from-neutral-950
        dark:to-neutral-900
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
          Join the JSS Originals Network
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
          Developers, designers, and digital creators are welcome to
          collaborate and contribute to experimental web projects and
          open digital initiatives.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link href="/join">
            <ShineButton size="lg">
              Apply to Join
            </ShineButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}