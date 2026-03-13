// src/components/sections/HeroSection.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      className="
        relative overflow-hidden
        flex flex-col items-center justify-center
        px-4 pt-32 pb-24
        text-center
        bg-gradient-to-b
        from-white via-neutral-50 to-neutral-100
        dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900
      "
    >
      {/* ================================= */}
      {/* Gradient Glow Background */}
      {/* ================================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Blue blob */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="
            absolute -top-40 -left-32
            h-[320px] w-[320px]
            rounded-full
            bg-blue-500/30
            blur-[60px]
            dark:bg-blue-500/20
          "
        />

        {/* Purple blob */}
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="
            absolute -bottom-40 -right-32
            h-[340px] w-[340px]
            rounded-full
            bg-purple-500/30
            blur-[40px]
            dark:bg-purple-500/20
          "
        />

        {/* center glow */}
        <div
          className="
            absolute left-1/2 top-1/3
            h-[420px] w-[420px]
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-blue-400/20
            via-indigo-400/20
            to-purple-400/20
            blur-[60px]
          "
        />
      </div>

      {/* ================================= */}
      {/* Heading */}
      {/* ================================= */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          max-w-2xl
          text-3xl font-semibold leading-tight
          text-neutral-900 dark:text-neutral-100
        "
      >
        Building Digital Identity
        <br />
        for the Modern Web
      </motion.h1>

      {/* ================================= */}
      {/* Description */}
      {/* ================================= */}

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="
          mt-5 max-w-xl
          text-sm leading-relaxed
          text-neutral-600 dark:text-neutral-400
        "
      >
        JSS Originals creates modern web platforms, SEO identity systems,
        and experimental digital projects designed to build powerful
        online presence.
      </motion.p>

      {/* ================================= */}
      {/* Buttons */}
      {/* ================================= */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mt-8 flex items-center gap-3"
      >
        <ShineButton size="lg">
          View Projects
        </ShineButton>

        <Button variant="secondary" size="lg">
          Join Us
        </Button>
      </motion.div>

      {/* ================================= */}
      {/* Subtle bottom gradient fade */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          h-24
          bg-gradient-to-b
          from-transparent
          to-white
          dark:to-neutral-950
        "
      />
    </section>
  );
}
