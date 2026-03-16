// src/components/sections/nimod/NimodCTA.js
"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ShineButton from "@/components/ui/ShineButton";
import { MessageCircle } from "lucide-react";
import nimodProject from "@/data/nimodProject";

export default function NimodCTA() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { cta } = nimodProject;

  // Optimized variants
  const fadeUpVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 1.0 : 1.2,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const pillVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 0.8 : 1.0,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const headingVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 0.9 : 1.2,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  // Glow animations – simplified on mobile
  const glow1Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

  const glow2Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.07, 1] : [1, 1.15, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

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
      {/* AMBIENT GLOWS – Optimized */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Glow 1 - Deep Emerald */}
        <motion.div
          animate={glow1Animation}
          transition={{
            duration: isMobile ? 20 : 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform, opacity" }}
          className="
            absolute top-[10%] left-[-10%] sm:left-[10%]
            w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px]
            rounded-full
            bg-emerald-400/20 dark:bg-emerald-600/15
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />

        {/* Glow 2 - Cyan Sweep */}
        <motion.div
          animate={glow2Animation}
          transition={{
            duration: isMobile ? 24 : 30,
            repeat: Infinity,
            ease: "linear",
            delay: isMobile ? 0 : 1, // remove delay on mobile for simplicity
          }}
          style={{ willChange: "transform, opacity" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:right-[10%]
            w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px]
            rounded-full
            bg-cyan-300/20 dark:bg-teal-700/10
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Luxury Grid Texture – unchanged */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center">
        {/* ===================================== */}
        {/* THE MASSIVE GLASS WIDGET */}
        {/* ===================================== */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
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
          {/* GLASSMORPHIC PILL */}
          {/* ===================================== */}
          <motion.div
            variants={pillVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 
              rounded-full 
              border border-black/[0.08] dark:border-white/[0.08]
              bg-white/60 dark:bg-black/40 
              backdrop-blur-xl shadow-sm relative z-10
            "
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Start a Project
            </span>
          </motion.div>

          {/* ===================================== */}
          {/* HEADING */}
          {/* ===================================== */}
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
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
            {cta?.highlightText ? (
              <>
                {cta.title.replace(cta.highlightText, "")}
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 drop-shadow-sm">
                  {cta.highlightText}
                </span>
              </>
            ) : (
              cta?.title || "Ready to Build Something Similar?"
            )}
          </motion.h2>

          {/* ===================================== */}
          {/* DESCRIPTION */}
          {/* ===================================== */}
          <motion.p
            variants={pillVariants} // reuse pill variant (same as above)
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
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
            {cta?.description || "Let's discuss how we can bring your ideas to life with a thoughtfully crafted digital platform."}
          </motion.p>

          {/* ===================================== */}
          {/* CTA BUTTON */}
          {/* ===================================== */}
          <motion.div
            variants={pillVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 sm:mt-12 w-full sm:w-auto relative z-10"
          >
            <a
              href={cta?.link || "https://wa.me/919549626202"}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full group"
            >
              <ShineButton size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/15 group-hover:shadow-emerald-500/30 transition-shadow duration-500">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>{cta?.button || "Discuss Your Project"}</span>
              </ShineButton>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ===================================== */}
      {/* SEAMLESS FOOTER HANDOFF FADE */}
      {/* ===================================== */}
      <div
        className="
        pointer-events-none
        absolute bottom-0 left-0 right-0
        h-32 md:h-48
        bg-gradient-to-t
        from-[#fafafa] dark:from-[#050505]
        to-transparent
      "
      />
    </section>
  );
}