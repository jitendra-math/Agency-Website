// src/components/sections/contact/WhatsAppCTA.js (Optimized)

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  // Ultra-smooth cinematic Apple-style easing (only for content animations)
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 py-32 sm:py-40
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* AMBIENT EMERALD GLOWS (GPU Accelerated) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Glow 1 - Deep Emerald (CSS animated) */}
        <div
          className="
            absolute top-[-10%] sm:top-0 right-[-10%] sm:right-[15%]
            w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px]
            rounded-full
            bg-emerald-400/20 dark:bg-emerald-600/15
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
            animate-pulse-slow
            will-change-transform
          "
        />

        {/* Glow 2 - Teal Sweep (CSS animated) */}
        <div
          className="
            absolute bottom-[-10%] sm:bottom-0 left-[-10%] sm:left-[15%]
            w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px]
            rounded-full
            bg-teal-300/20 dark:bg-teal-600/10
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
            animate-pulse-slower
            will-change-transform
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center">

        {/* ===================================== */}
        {/* THE MASSIVE GLASS WIDGET */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="
            relative w-full max-w-4xl flex flex-col items-center text-center
            rounded-[2.5rem] sm:rounded-[3rem]
            bg-white/40 dark:bg-white/[0.02]
            ring-1 ring-inset ring-black/5 dark:ring-emerald-500/10
            backdrop-blur-2xl
            p-8 sm:p-16 md:p-20
            shadow-[0_24px_48px_-12px_rgba(16,185,129,0.05)]
            dark:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.02)]
            overflow-hidden
          "
        >
          {/* Inner ambient light for the glass */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent pointer-events-none" />

          {/* ===================================== */}
          {/* ICON DOCK */}
          {/* ===================================== */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true }}
            className="
              mb-8 sm:mb-10
              flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center
              rounded-2xl sm:rounded-3xl
              bg-gradient-to-br from-emerald-50 to-emerald-100/50
              dark:from-emerald-900/40 dark:to-emerald-800/20
              ring-1 ring-inset ring-emerald-500/20 dark:ring-emerald-500/30
              shadow-inner shadow-emerald-500/10
            "
          >
            <MessageCircle size={32} strokeWidth={1.5} className="text-emerald-600 dark:text-emerald-400" />
          </motion.div>

          {/* ===================================== */}
          {/* HEADING (Emerald Gradient) */}
          {/* ===================================== */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true }}
            className="
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold
            tracking-tighter
            leading-[1.1]
            text-neutral-900
            dark:text-white
            relative z-10
          "
          >
            Start a <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300 drop-shadow-sm">
              Conversation.
            </span>
          </motion.h2>

          {/* ===================================== */}
          {/* DESCRIPTION */}
          {/* ===================================== */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true }}
            className="
            mt-6 sm:mt-8
            text-lg sm:text-xl
            font-medium
            leading-relaxed
            text-neutral-600
            dark:text-neutral-400
            max-w-xl relative z-10
          "
          >
            The easiest way to discuss a project idea, collaboration,
            or simply start a conversation about the web is through
            WhatsApp.
          </motion.p>

          {/* ===================================== */}
          {/* WHATSAPP CTA BUTTON */}
          {/* ===================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 w-full sm:w-auto relative z-10"
          >
            <a
              href="https://wa.me/919549626202"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full group"
            >
              <ShineButton size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow duration-500">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Chat on WhatsApp</span>
              </ShineButton>
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}