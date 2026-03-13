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
      px-4 pt-32 pb-28
      text-center
      bg-gradient-to-b
      from-white via-neutral-50 to-neutral-100
      dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900
    "
    >
      {/* =============================== */}
      {/* Animated Mesh Gradient */}
      {/* =============================== */}

      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* blue mesh */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="
          absolute -top-40 -left-40
          h-[420px] w-[420px]
          rounded-full
          bg-blue-500/30
          blur-3xl
        "
        />

        {/* purple mesh */}
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="
          absolute -bottom-40 -right-40
          h-[440px] w-[440px]
          rounded-full
          bg-purple-500/30
          blur-3xl
        "
        />

        {/* center lighting */}
        <div
          className="
          absolute left-1/2 top-1/3
          -translate-x-1/2
          h-[500px] w-[500px]
          rounded-full
          bg-gradient-to-r
          from-blue-400/20
          via-indigo-400/20
          to-purple-400/20
          blur-3xl
        "
        />
      </div>

      {/* =============================== */}
      {/* Subtle Grid Texture */}
      {/* =============================== */}

      <div
        className="
        absolute inset-0 z-0 opacity-[0.03]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:40px_40px]
        dark:opacity-[0.05]
      "
      />

      {/* =============================== */}
      {/* Floating Project Cards */}
      {/* =============================== */}

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="
        absolute left-6 top-40
        hidden sm:block
        rounded-xl border border-neutral-200 dark:border-neutral-800
        bg-white/80 dark:bg-neutral-900/80
        backdrop-blur
        px-4 py-3
        text-xs
        shadow-lg
      "
      >
        Jitubanna Wiki
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="
        absolute right-6 top-60
        hidden sm:block
        rounded-xl border border-neutral-200 dark:border-neutral-800
        bg-white/80 dark:bg-neutral-900/80
        backdrop-blur
        px-4 py-3
        text-xs
        shadow-lg
      "
      >
        SEO Identity
      </motion.div>

      {/* =============================== */}
      {/* Heading */}
      {/* =============================== */}

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
        relative z-10
        max-w-2xl
        text-4xl font-semibold leading-tight tracking-tight
        text-neutral-900
        dark:text-neutral-100
      "
      >
        Building Digital Identity
        <br />
        for the Modern Web
      </motion.h1>

      {/* =============================== */}
      {/* Description */}
      {/* =============================== */}

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="
        mt-6 max-w-xl
        text-sm leading-relaxed
        text-neutral-600
        dark:text-neutral-400
      "
      >
        JSS Originals builds modern web platforms, SEO identity systems,
        and experimental digital products designed to create powerful
        online presence.
      </motion.p>

      {/* =============================== */}
      {/* Buttons */}
      {/* =============================== */}

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="mt-10 flex items-center gap-4"
      >
        <ShineButton size="lg">
          View Projects
        </ShineButton>

        <Button variant="secondary" size="lg">
          Join Us
        </Button>
      </motion.div>

      {/* =============================== */}
      {/* Bottom fade */}
      {/* =============================== */}

      <div
        className="
        pointer-events-none
        absolute bottom-0 left-0 right-0
        h-28
        bg-gradient-to-b
        from-transparent
        to-white
        dark:to-neutral-950
      "
      />
    </section>
  );
}
