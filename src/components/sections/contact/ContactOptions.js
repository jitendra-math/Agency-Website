// src/components/sections/contact/ContactOptions.js (Optimized)

"use client";

import { motion } from "framer-motion";
import { contactOptions } from "@/data/contact";
import Button from "@/components/ui/Button";
import { MessageCircle, Mail, User } from "lucide-react";

// Mapping icons dynamically
const icons = {
  whatsapp: MessageCircle,
  email: Mail,
  founder: User,
};

export default function ContactOptions() {
  // Ultra-smooth cinematic Apple-style easing (only for content)
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 pb-32 sm:pb-40
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* AMBIENT GLOWS (GPU Accelerated) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="
            w-[100vw] sm:w-[800px] h-[40vh] sm:h-[400px]
            bg-blue-400/10 dark:bg-indigo-500/10
            blur-[100px] sm:blur-[140px] rounded-full
            mix-blend-multiply dark:mix-blend-screen
            animate-contact-options-glow
            will-change-transform
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-6xl relative z-10">

        {/* ===================================== */}
        {/* HEADING */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
            Ways to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              Reach Out.
            </span>
          </h2>
        </motion.div>

        {/* ===================================== */}
        {/* CARDS GRID (Glassmorphic Bento) */}
        {/* ===================================== */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactOptions.map((option, index) => {
            const Icon = icons[option.type];

            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 1.5, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="
                  group relative flex flex-col h-full
                  rounded-[2rem] sm:rounded-[2.5rem]
                  bg-white/30 dark:bg-white/[0.02]
                  ring-1 ring-inset ring-black/5 dark:ring-white/10
                  backdrop-blur-2xl
                  p-8 sm:p-10
                  transition-all duration-700 ease-out
                  hover:-translate-y-2
                  hover:bg-white/50 dark:hover:bg-white/[0.04]
                  hover:shadow-[0_24px_48px_-12px_rgba(37,99,235,0.08)]
                  dark:hover:shadow-[0_24px_48px_-12px_rgba(59,130,246,0.04)]
                "
              >
                {/* 1. Gradient Icon Dock */}
                <div
                  className="
                  mb-8
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br from-white to-blue-50/50
                  dark:from-neutral-800 dark:to-neutral-900/50
                  ring-1 ring-inset ring-black/5 dark:ring-white/10
                  shadow-inner
                  group-hover:scale-110 group-hover:shadow-blue-500/10 transition-all duration-500 ease-out
                "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-blue-600 dark:text-blue-400 transition-colors duration-300"
                  />
                </div>

                {/* 2. Text Content */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
                  {option.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 flex-grow">
                  {option.description}
                </p>

                {/* The highlighted value (Email, Number) */}
                <p className="mt-6 mb-8 text-base font-semibold tracking-wide text-neutral-900 dark:text-white">
                  {option.value}
                </p>

                {/* 3. Button - Mobile First (w-full on mobile) */}
                <div className="mt-auto">
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    {/* Primary options get a bolder look using standard polished Button */}
                    <Button variant={index === 0 ? "primary" : "secondary"} size="lg" className="w-full">
                      {option.button}
                    </Button>
                  </a>
                </div>

                {/* Butter smooth glowing bottom line on hover */}
                <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}