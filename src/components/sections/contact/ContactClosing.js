// src/components/sections/contact/ContactClosing.js

"use client";

import { motion } from "framer-motion";
import { contactClosing } from "@/data/contact";

export default function ContactClosing() {
  // Ultra-smooth cinematic Apple-style easing
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
      {/* CENTRAL AMBIENT SPOTLIGHT */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="
            w-[100vw] sm:w-[800px] h-[50vh] sm:h-[400px]
            bg-cyan-500/5 dark:bg-blue-500/10
            blur-[100px] sm:blur-[120px] rounded-full
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-4xl relative z-10">

        {/* ===================================== */}
        {/* ELEGANT ANIMATED DIVIDER */}
        {/* ===================================== */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 sm:mb-20 h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent origin-center"
        />

        {/* ===================================== */}
        {/* THE CLOSING LINE (Smart Highlight) */}
        {/* ===================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.1, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          text-4xl sm:text-5xl md:text-7xl
          font-extrabold
          tracking-tighter
          leading-[1.1]
          text-neutral-900 dark:text-white
          drop-shadow-sm
        "
        >
          {contactClosing?.highlightText ? (
            <>
              {contactClosing.title.replace(contactClosing.highlightText, "")}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                {contactClosing.highlightText}
              </span>
            </>
          ) : (
            contactClosing?.title || "Let's make it happen."
          )}
        </motion.h2>

        {/* ===================================== */}
        {/* SUB-STATEMENT */}
        {/* ===================================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="
          mt-8 sm:mt-10
          text-lg sm:text-2xl
          font-medium
          leading-relaxed
          text-neutral-500
          dark:text-neutral-400
          max-w-2xl mx-auto
        "
        >
          {contactClosing?.description || "Reach out today and let's start writing the next chapter."}
        </motion.p>

      </div>
    </section>
  );
}
