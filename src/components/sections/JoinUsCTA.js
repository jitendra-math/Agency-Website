// src/components/sections/JoinUsCTA.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Link from "next/link";
import { Code, PenTool, Lightbulb } from "lucide-react";

const roles = [
  { icon: Code, label: "Developers" },
  { icon: PenTool, label: "Designers" },
  { icon: Lightbulb, label: "Creators" },
];

export default function JoinUsCTA() {
  // Ultra-premium Apple-style easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative isolate px-4 sm:px-6 py-24 sm:py-32 overflow-hidden bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500">
      
      {/* ===================================== */}
      {/* FLOATING GLASS CARD */}
      {/* ===================================== */}
      <div className="relative mx-auto max-w-4xl">
        
        {/* Card Background & Border */}
        <div className="
          absolute inset-0 -z-10 
          rounded-[2.5rem] sm:rounded-[3rem] 
          bg-white/60 dark:bg-white/[0.02] 
          border border-black/[0.05] dark:border-white/[0.05] 
          backdrop-blur-2xl 
          shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_40px_-12px_rgba(255,255,255,0.02)]
        " />

        {/* Inner Card Ambient Glow */}
        <div className="absolute inset-0 -z-10 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden pointer-events-none">
          <div className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[150%] h-[150%] sm:w-[800px] sm:h-[800px]
            bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_50%)]
            dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)]
          " />
        </div>

        {/* ===================================== */}
        {/* CONTENT WAPPER */}
        {/* ===================================== */}
        <div className="px-6 py-16 sm:p-20 text-center flex flex-col items-center">
          
          {/* Subtle Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10">
              Open Positions
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: smoothEase }}
            viewport={{ once: true, margin: "-50px" }}
            className="
              text-3xl sm:text-5xl md:text-6xl 
              font-bold tracking-tighter 
              text-neutral-900 dark:text-white
              leading-[1.15]
            "
          >
            Build the future of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-400 dark:from-neutral-300 dark:to-neutral-600">
              web identity.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            viewport={{ once: true, margin: "-50px" }}
            className="
              mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed
              text-neutral-600 dark:text-neutral-400
            "
          >
            Join JSS Originals and collaborate on experimental web platforms,
            identity systems, and open digital projects.
          </motion.p>

          {/* Roles Badges - Mobile First Flex Wrap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: smoothEase }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 w-full"
          >
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div
                  key={index}
                  className="
                    flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5
                    rounded-full
                    border border-black/[0.06] dark:border-white/[0.08]
                    bg-white/80 dark:bg-black/40
                    backdrop-blur-md
                    text-sm font-medium
                    text-neutral-700 dark:text-neutral-300
                    hover:-translate-y-1 transition-transform duration-300 ease-out
                    shadow-sm
                  "
                >
                  <Icon size={16} className="text-neutral-500 dark:text-neutral-400" />
                  {role.label}
                </div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 w-full sm:w-auto"
          >
            <Link href="/join" className="block w-full sm:inline-block">
              {/* Using the newly polished ShineButton */}
              <ShineButton size="lg" className="w-full sm:w-auto">
                Apply to Join
              </ShineButton>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
