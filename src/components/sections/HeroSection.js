// src/components/sections/HeroSection.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  // Apple-like smooth animation easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      min-h-[90vh] px-6 pt-24 pb-20
      text-center
      bg-white dark:bg-neutral-950
    "
    >
      {/* ===================================== */}
      {/* AMBIENT LUXURY GLOW (Lightweight) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex justify-center items-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="
          absolute
          w-[150vw] h-[150vw] sm:w-[800px] sm:h-[800px]
          rounded-full
          bg-gradient-to-tr from-neutral-200 to-transparent dark:from-white/[0.03] dark:to-transparent
          blur-[80px] sm:blur-[120px]
          -translate-y-1/4
        "
        />
      </div>

      {/* ===================================== */}
      {/* REFINED GRID TEXTURE WITH FADE MASK */}
      {/* ===================================== */}
      <div
        className="
        absolute inset-0 -z-20
        opacity-[0.03] dark:opacity-[0.04]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:64px_64px]
        [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]
      "
      />

      {/* ===================================== */}
      {/* HERO CONTENT */}
      {/* ===================================== */}

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
        
        {/* Subtle Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
          className="
            mb-8 inline-flex items-center gap-2 px-3 py-1 
            rounded-full border border-neutral-200 dark:border-neutral-800
            bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-md
          "
        >
          <span className="flex h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 uppercase">
            Introducing the new standard
          </span>
        </motion.div>

        {/* Main Heading - Ultra Premium Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: smoothEase }}
          className="
          text-5xl sm:text-6xl md:text-8xl
          font-bold
          tracking-tighter
          leading-[1.1] md:leading-[1.05]
          text-transparent bg-clip-text
          bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-500
          dark:from-white dark:via-neutral-200 dark:to-neutral-500
          drop-shadow-sm
        "
        >
          Crafting What the <br className="hidden sm:block" /> Web Deserves.
        </motion.h1>

        {/* Subheading & Paragraph combined for cleaner look */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
          className="
          mt-8
          max-w-2xl
          text-lg sm:text-xl md:text-2xl
          font-medium
          tracking-tight
          text-neutral-500
          dark:text-neutral-400
        "
        >
          Meaningful projects, thoughtfully built. <br className="hidden sm:block" />
          <span className="text-neutral-400 dark:text-neutral-500 font-normal">
            Exploring ideas and shaping digital spaces.
          </span>
        </motion.p>

        {/* Buttons - Mobile First Stacking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: smoothEase }}
          className="
          mt-12
          flex flex-col sm:flex-row items-center gap-4
          w-full sm:w-auto
        "
        >
          {/* Ensure your ShineButton and Button components accept full width on mobile if needed */}
          <div className="w-full sm:w-auto">
             <ShineButton size="lg" className="w-full sm:w-auto">
              View Projects
            </ShineButton>
          </div>

          <div className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Join Us
            </Button>
          </div>
        </motion.div>

      </div>

      {/* ===================================== */}
      {/* BOTTOM FADE */}
      {/* ===================================== */}
      <div
        className="
        pointer-events-none
        absolute bottom-0 left-0 right-0
        h-40
        bg-gradient-to-b
        from-transparent
        to-white
        dark:to-neutral-950
      "
      />
    </section>
  );
}
