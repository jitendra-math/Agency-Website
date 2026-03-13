// src/components/sections/HeroSection.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      className="
        relative flex flex-col items-center
        justify-center
        px-4 pt-28 pb-20
        text-center
        bg-gradient-to-b
        from-white
        to-neutral-100
        dark:from-neutral-950
        dark:to-neutral-900
      "
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          max-w-2xl
          text-3xl font-semibold
          leading-tight
          text-neutral-900
          dark:text-neutral-100
        "
      >
        Building Digital Identity
        <br />
        for the Modern Web
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="
          mt-4 max-w-xl
          text-sm leading-relaxed
          text-neutral-600
          dark:text-neutral-400
        "
      >
        JSS Originals creates web platforms, identity systems, and
        experimental digital projects focused on building strong
        online presence and modern internet experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-6 flex items-center gap-3"
      >
        <ShineButton>
          View Projects
        </ShineButton>

        <Button variant="secondary">
          Join Us
        </Button>
      </motion.div>
    </section>
  );
}