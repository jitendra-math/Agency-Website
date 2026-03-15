// src/components/sections/about/AboutStory.js

"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  // Ultra-smooth cinematic Apple-style easing
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
      {/* SUBTLE AMBIENT GLOW */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-1/4 left-[-10%] sm:left-[10%]
            w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px]
            rounded-full bg-blue-500/5 dark:bg-blue-600/10
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      <div className="mx-auto max-w-4xl relative z-10">

        {/* ===================================== */}
        {/* SECTION HEADER */}
        {/* ===================================== */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="
          text-xs sm:text-sm font-semibold uppercase tracking-widest
          text-blue-600 dark:text-blue-400
          mb-6
        "
        >
          The Story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="
          text-4xl sm:text-5xl md:text-6xl
          font-bold
          tracking-tighter
          leading-[1.1]
          text-neutral-900
          dark:text-white
          mb-16
        "
        >
          The Beginning of <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            JSS Originals.
          </span>
        </motion.h2>

        {/* ===================================== */}
        {/* EDITORIAL CONTENT */}
        {/* ===================================== */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Animated Left Border Gradient */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 2, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute left-0 top-2 bottom-2 w-[2px] sm:w-[3px] bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent dark:from-blue-500 dark:via-cyan-400 dark:to-transparent rounded-full origin-top"
          />

          <div className="space-y-8 sm:space-y-10 max-w-2xl">
            
            {/* Lead Paragraph - Highlighted */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true, margin: "-100px" }}
              className="
              text-xl sm:text-2xl
              font-medium leading-relaxed
              text-neutral-800
              dark:text-neutral-200
            "
            >
              JSS Originals started from a simple belief — the internet
              still has countless ideas waiting to be explored. In a
              world where many websites look and feel the same, the goal
              was to build projects that carry originality, purpose, and
              thoughtful design.
            </motion.p>

            {/* Standard Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true, margin: "-100px" }}
              className="
              text-base sm:text-lg leading-relaxed
              text-neutral-600
              dark:text-neutral-400
            "
            >
              Instead of creating random platforms, the focus has always
              been on meaningful digital work. Some ideas grow into
              full-scale web platforms, while others remain experiments
              that explore new possibilities on the internet.
            </motion.p>

            {/* Standard Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true, margin: "-100px" }}
              className="
              text-base sm:text-lg leading-relaxed
              text-neutral-600
              dark:text-neutral-400
            "
            >
              Every project begins with curiosity. Questions lead the
              process: what value does this idea bring, who will use it,
              and how can it remain useful in the long run? These small
              questions often turn into larger projects that shape the
              direction of JSS Originals.
            </motion.p>

            {/* Standard Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true, margin: "-100px" }}
              className="
              text-base sm:text-lg leading-relaxed
              text-neutral-600
              dark:text-neutral-400
            "
            >
              Over time, JSS Originals has evolved into a digital space
              where experiments, platforms, and thoughtful ideas come
              together. It is less about building many things and more
              about building the right things for the web.
            </motion.p>

          </div>
        </div>

      </div>
    </section>
  );
}
