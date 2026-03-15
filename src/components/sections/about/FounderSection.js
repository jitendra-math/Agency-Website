// src/components/sections/about/FounderSection.js

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ShineButton from "@/components/ui/ShineButton"; // Upgraded to our premium CTA
import founder from "@/assets/images/founder/founder.png";
import { MapPin } from "lucide-react"; // Added for the subtle location badge

export default function FounderSection() {
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
      {/* SUBTLE BACKGROUND TEXTURE */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div
        className="
        mx-auto max-w-7xl
        grid gap-16 lg:gap-24
        items-center
        lg:grid-cols-2
      "
      >
        {/* ===================================== */}
        {/* LEFT: FOUNDER PORTRAIT (Glass Frame) */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Ambient Portrait Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 dark:bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />

          {/* Premium Glass Frame */}
          <div
            className="
            relative
            rounded-[2.5rem]
            bg-white/40 dark:bg-white/[0.02]
            ring-1 ring-inset ring-black/5 dark:ring-white/10
            backdrop-blur-2xl
            p-4 sm:p-6
            shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)]
            dark:shadow-[0_24px_48px_-12px_rgba(255,255,255,0.02)]
          "
          >
            {/* The Image */}
            <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900/50 isolate">
              <Image
                src={founder}
                alt="Jitendra Singh - Founder of JSS Originals"
                width={500}
                height={500}
                priority
                className="h-auto w-full max-w-md object-contain transition-transform duration-700 hover:scale-[1.02]"
              />
              
              {/* Subtle Inner Bezel for the image itself */}
              <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
            </div>

            {/* Floating Glass Badge (Micro-Interaction Detail) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-2 sm:-right-8 flex flex-col gap-1.5 p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-black/60 ring-1 ring-inset ring-black/5 dark:ring-white/10 backdrop-blur-xl shadow-xl"
            >
              <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">Full Stack Developer</span>
              <span className="flex items-center text-[10px] sm:text-xs font-medium text-neutral-500 dark:text-neutral-400">
                <MapPin size={12} className="mr-1 text-blue-500" />
                Rajasthan, India
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ===================================== */}
        {/* RIGHT: CONTENT & TYPOGRAPHY */}
        {/* ===================================== */}
        <div className="flex flex-col lg:pl-8">
          
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400"
          >
            The Architect
          </motion.p>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="
            mt-4 sm:mt-6
            text-4xl sm:text-5xl md:text-6xl 
            font-bold tracking-tighter
            text-neutral-900 dark:text-white
            leading-[1.1]
          "
          >
            Jitendra Singh.
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="
            mt-8
            text-lg sm:text-xl font-medium leading-relaxed
            text-neutral-600 dark:text-neutral-400
          "
          >
            JSS Originals is created and led by Jitendra Singh, an
            independent web developer and digital experimenter focused
            on building thoughtful projects for the modern web. His
            work explores digital identity, web platforms, and
            experimental internet ideas that aim to create meaningful
            online experiences.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="
            mt-6
            text-base sm:text-lg leading-relaxed
            text-neutral-500 dark:text-neutral-500
          "
          >
            Through JSS Originals, he continues to explore new ideas
            and develop digital systems that combine creativity,
            simplicity, and long-term usefulness on the internet.
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.5, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://jitubanna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              {/* Upgraded to our premium ShineButton */}
              <ShineButton size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-500/10">
                Know the Founder
              </ShineButton>
            </a>

            <a href="mailto:me@jitubanna.com" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Email
              </Button>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
