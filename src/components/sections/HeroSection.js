// src/components/sections/HeroSection.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      px-4 pt-36 pb-32
      text-center
      bg-gradient-to-b
      from-white via-neutral-50 to-neutral-100
      dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900
    "
    >
      {/* ===================================== */}
      {/* MESH SPOTLIGHT */}
      {/* ===================================== */}

      <div className="absolute inset-0 -z-10 pointer-events-none">

        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
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
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
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

      {/* ===================================== */}
      {/* GRID TEXTURE */}
      {/* ===================================== */}

      <div
        className="
        absolute inset-0
        opacity-[0.035]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:42px_42px]
        dark:opacity-[0.05]
      "
      />

      {/* ===================================== */}
      {/* HERO CONTENT */}
      {/* ===================================== */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
        relative z-10
        max-w-3xl
        text-4xl
        sm:text-5xl
        font-semibold
        leading-tight
        tracking-tight
        text-neutral-900
        dark:text-neutral-100
      "
      >
        Building Digital Identity
        <br />
        for the Modern Web
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="
        mt-8
        max-w-xl
        text-base
        leading-relaxed
        text-neutral-600
        dark:text-neutral-400
      "
      >
        JSS Originals builds modern web platforms, SEO identity
        systems, and experimental digital products designed to create
        powerful online presence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="
        mt-12
        flex items-center gap-4
      "
      >
        <ShineButton size="lg">
          View Projects
        </ShineButton>

        <Button variant="secondary" size="lg">
          Join Us
        </Button>
      </motion.div>

      {/* ===================================== */}
      {/* BOTTOM FADE */}
      {/* ===================================== */}

      <div
        className="
        pointer-events-none
        absolute bottom-0 left-0 right-0
        h-32
        bg-gradient-to-b
        from-transparent
        to-white
        dark:to-neutral-950
      "
      />
    </section>
  );
}