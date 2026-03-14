// src/components/sections/HeroSection.js

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      px-4 pt-28 pb-24
      text-center
      bg-gradient-to-b
      from-white via-neutral-50 to-neutral-100
      dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900
    "
    >

      {/* =============================== */}
      {/* RIBBON DECORATIONS (PREMIUM STYLE) */}
      {/* =============================== */}

      {/* top right ribbon */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="
        pointer-events-none
        absolute
        -top-20
        -right-40
        w-[340px]
        opacity-30
        select-none
      "
      >
        <Image
          src="/bg-ribbon-1.png"
          alt=""
          width={600}
          height={600}
        />
      </motion.div>

      {/* bottom left ribbon */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="
        pointer-events-none
        absolute
        -bottom-24
        -left-36
        w-[300px]
        opacity-30
        select-none
      "
      >
        <Image
          src="/bg-ribbon-2.png"
          alt=""
          width={600}
          height={600}
        />
      </motion.div>


      {/* =============================== */}
      {/* Soft mesh background */}
      {/* =============================== */}

      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="
          absolute -top-40 -left-40
          h-[360px] w-[360px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="
          absolute -bottom-40 -right-40
          h-[380px] w-[380px]
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
        />

      </div>


      {/* =============================== */}
      {/* Grid texture */}
      {/* =============================== */}

      <div
        className="
        absolute inset-0
        opacity-[0.03]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:40px_40px]
        dark:opacity-[0.05]
      "
      />


      {/* =============================== */}
      {/* Hero Content */}
      {/* =============================== */}

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
        relative z-10
        max-w-2xl
        text-3xl
        sm:text-4xl
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
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="
        mt-6
        max-w-xl
        text-sm
        leading-relaxed
        text-neutral-600
        dark:text-neutral-400
      "
      >
        JSS Originals builds modern web platforms, SEO identity systems,
        and experimental digital products designed to create powerful
        online presence.
      </motion.p>


      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="
        mt-10
        flex
        items-center
        gap-4
      "
      >
        <ShineButton size="lg">
          View Projects
        </ShineButton>

        <Button variant="secondary" size="lg">
          Join Us
        </Button>
      </motion.div>


      {/* =============================== */}
      {/* bottom fade */}
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
