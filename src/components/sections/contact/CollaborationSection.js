// src/components/sections/contact/CollaborationSection.js (Optimized)

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import { MessageCircle } from "lucide-react";

const services = [
  "Website development",
  "Digital identity projects",
  "Experimental web ideas",
  "Creative collaborations",
];

export default function CollaborationSection() {
  // Ultra-smooth cinematic Apple-style easing (only for content)
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 py-32 sm:py-40
      bg-[#fafafa] dark:bg-[#050505]
      text-center
      transition-colors duration-500
    "
    >
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (GPU Accelerated) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Glow 1 - Blue/Indigo (CSS animated) */}
        <div
          className="
            absolute top-[-10%] sm:top-0 right-[-10%] sm:right-[20%]
            w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px]
            rounded-full
            bg-blue-400/20 dark:bg-indigo-600/20
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
            animate-pulse-slow
            will-change-transform
          "
        />
        {/* Glow 2 - Cyan (CSS animated) */}
        <div
          className="
            absolute bottom-[-10%] sm:bottom-0 left-[-10%] sm:left-[20%]
            w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px]
            rounded-full
            bg-cyan-300/20 dark:bg-cyan-600/15
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
            animate-pulse-slower
            will-change-transform
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl relative z-10 flex flex-col items-center">

        {/* ===================================== */}
        {/* GLASSMORPHIC PILL LABEL */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm mb-6 sm:mb-8"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Collaboration
          </span>
        </motion.div>

        {/* ===================================== */}
        {/* CINEMATIC HEADING */}
        {/* ===================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          text-4xl sm:text-5xl md:text-6xl
          font-extrabold
          tracking-tighter
          leading-[1.1]
          text-neutral-900
          dark:text-white
        "
        >
          Have a Project <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
            in Mind?
          </span>
        </motion.h2>

        {/* ===================================== */}
        {/* DESCRIPTION */}
        {/* ===================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          mt-8 sm:mt-10
          text-lg sm:text-xl
          font-medium
          leading-relaxed
          text-neutral-500
          dark:text-neutral-400
          max-w-2xl
        "
        >
          If you’re planning a web project, digital platform, or an
          experimental idea for the internet, JSS Originals is open to
          meaningful collaborations. The easiest way to begin is by
          sharing your idea through WhatsApp.
        </motion.p>

        {/* ===================================== */}
        {/* GLASSMORPHIC SERVICE PILLS */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3 max-w-2xl"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                px-4 py-2 sm:px-5 sm:py-2.5 
                rounded-full 
                bg-white/50 dark:bg-white/[0.03] 
                border border-black/5 dark:border-white/10 
                backdrop-blur-md 
                text-sm sm:text-base font-medium 
                text-neutral-700 dark:text-neutral-300
                transition-colors duration-300
                hover:bg-white dark:hover:bg-white/[0.08]
              "
            >
              {service}
            </div>
          ))}
        </motion.div>

        {/* ===================================== */}
        {/* CTA BUTTON */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 sm:mt-16 flex justify-center w-full sm:w-auto"
        >
          <a
            href="https://wa.me/919549626202"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group"
          >
            <ShineButton size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-500">
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Discuss Your Project</span>
            </ShineButton>
          </a>
        </motion.div>

      </div>
    </section>
  );
}