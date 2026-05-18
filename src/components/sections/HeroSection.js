// src/components/sections/HeroSection.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HeroSection() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
        relative isolate overflow-hidden
        min-h-screen
        flex items-center justify-center
        px-4 pt-24 pb-14
        bg-[#fafafa] dark:bg-[#050505]
      "
    >
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

        <div
          className="
            absolute -top-20 -left-20
            w-[320px] h-[320px]
            rounded-full
            bg-violet-400/25
            dark:bg-violet-700/20
            blur-[100px]
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[280px] h-[280px]
            rounded-full
            bg-cyan-300/20
            dark:bg-cyan-600/15
            blur-[100px]
          "
        />

      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto text-center">

        {/* Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          className="
            inline-flex items-center gap-2
            px-4 py-2 mb-6
            rounded-full
            bg-white/60 dark:bg-white/[0.04]
            backdrop-blur-xl
            border border-black/5 dark:border-white/10
          "
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-wide
              text-neutral-700 dark:text-neutral-300
            "
          >
            Design • Development • Branding
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
            ease: smoothEase,
          }}
          className="
            text-[2.2rem]
            sm:text-6xl
            md:text-7xl

            font-black
            tracking-tighter
            leading-[1.05]

            text-neutral-900
            dark:text-white
          "
        >
          Build Brands That
          <br />

          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
            "
          >
            People Remember.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: smoothEase,
          }}
          className="
            mt-5
            max-w-xl mx-auto

            text-[15px]
            sm:text-lg

            leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
        >
          We create premium websites, bold identities, and digital
          experiences that feel expensive before anyone checks the price.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: smoothEase,
          }}
          className="
            mt-8

            flex flex-col
            sm:flex-row

            gap-3
            justify-center

            w-full
            max-w-md
            mx-auto
          "
        >

          {/* Primary */}
          <Link href="/projects" className="w-full sm:w-auto">
            <ShineButton className="w-full sm:w-auto px-8 py-4">
              View Projects
            </ShineButton>
          </Link>

          {/* Secondary */}
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              className="
                w-full sm:w-auto
                px-8 py-4

                bg-white/70
                dark:bg-white/[0.04]

                backdrop-blur-xl

                border
                border-black/10
                dark:border-white/10

                text-neutral-900
                dark:text-white
              "
            >
              Let's Talk
            </Button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}