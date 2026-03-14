// src/components/sections/HeroSection.js
"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  // Apple‑grade easing curves
  const easeOutExpo = [0.16, 1, 0.3, 1];
  const easeInOut = [0.6, 0.01, 0.05, 0.95];

  return (
    <section
      className="
        relative isolate
        flex min-h-[100dvh] flex-col items-center justify-center
        overflow-hidden px-5 pt-24 pb-12 text-center
        bg-[#fbfbfd] dark:bg-[#0a0a0c]
        transition-colors duration-500
      "
    >
      {/* ========== BACKGROUND LAYERS (Lightweight & Smooth) ========== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        {/* 1. Base ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.blue.50/0.3),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,theme(colors.indigo.900/0.2),transparent_70%)]" />

        {/* 2. Floating orbs – CSS driven for performance */}
        <div className="absolute top-1/4 left-1/4 h-[40vw] w-[40vw] animate-float-slow rounded-full bg-gradient-to-br from-purple-200/20 to-blue-200/10 blur-[120px] dark:from-violet-800/20 dark:to-sky-800/10" />
        <div className="absolute bottom-1/4 right-1/4 h-[35vw] w-[35vw] animate-float-slower rounded-full bg-gradient-to-tl from-amber-200/20 to-rose-200/10 blur-[120px] dark:from-fuchsia-800/20 dark:to-rose-800/10" />

        {/* 3. Ultra‑fine noise texture (only 0.7kb equivalent) */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* 4. Refined grid with radial fade */}
        <div
          className="absolute inset-0 bg-[linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]"
        />
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">

        {/* ----- GLASS PILL (Announcement) ----- */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/30 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-neutral-800 backdrop-blur-xl shadow-lg shadow-black/[0.02] dark:border-white/10 dark:bg-black/30 dark:text-neutral-100 sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
          </span>
          Introducing the new standard
        </motion.div>

        {/* ----- MAIN HEADING (Liquid Metal Gradient + Shimmer) ----- */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: easeOutExpo }}
          className="relative max-w-4xl text-5xl font-black leading-[1.1] tracking-[-0.03em] sm:text-7xl md:text-8xl"
        >
          <span
            className="
              bg-gradient-to-br from-[#1d1d1f] via-[#4a4a4e] to-[#8e8e93]
              bg-clip-text text-transparent
              dark:from-white dark:via-[#b3b3b7] dark:to-[#6b6b70]
              drop-shadow-sm
            "
          >
            Crafting What the
          </span>
          <br className="hidden sm:block" />
          <span
            className="
              relative inline-block
              bg-gradient-to-br from-[#1d1d1f] via-[#4a4a4e] to-[#8e8e93]
              bg-clip-text text-transparent
              dark:from-white dark:via-[#b3b3b7] dark:to-[#6b6b70]
              drop-shadow-sm
            "
          >
            Web Deserves.
            {/* Subtle shimmer overlay (optional) */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-shimmer" />
          </span>
        </motion.h1>

        {/* ----- SUBHEADING ----- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: easeOutExpo }}
          className="mt-6 max-w-2xl text-balance text-lg font-medium text-neutral-600 dark:text-neutral-300 sm:text-xl md:text-2xl"
        >
          Meaningful projects, thoughtfully built. <br className="hidden sm:block" />
          <span className="text-neutral-500 dark:text-neutral-400">
            Exploring ideas and shaping digital spaces.
          </span>
        </motion.p>

        {/* ----- BUTTONS (Mobile‑first full width, then inline) ----- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: easeOutExpo }}
          className="mt-12 flex w-full flex-col items-center gap-4 px-4 sm:w-auto sm:flex-row sm:px-0"
        >
          <div className="w-full sm:w-auto">
            <ShineButton size="lg" className="w-full shadow-xl shadow-blue-500/10 sm:w-auto">
              View Projects
            </ShineButton>
          </div>
          <div className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full border border-neutral-200 bg-white/50 backdrop-blur-md dark:border-neutral-800 dark:bg-black/50 sm:w-auto"
            >
              Join Us
            </Button>
          </div>
        </motion.div>

        {/* ----- MINIMAL SCROLL INDICATOR (Apple‑style) ----- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <div className="h-10 w-5 rounded-full border border-neutral-300 dark:border-neutral-700 p-1">
            <div className="mx-auto h-2 w-1 animate-scrollDot rounded-full bg-neutral-400 dark:bg-neutral-500" />
          </div>
        </motion.div>
      </div>

      {/* ========== BOTTOM FADE OUT ========== */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fbfbfd] to-transparent dark:from-[#0a0a0c] md:h-48" />
    </section>
  );
}