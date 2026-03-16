// src/components/sections/nimod/NimodCTA.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import { MessageCircle } from "lucide-react";
import nimodProject from "@/data/nimodProject";

export default function NimodCTA() {
  const cta = nimodProject?.cta || {};

  return (
    <section className="relative px-6 py-24 bg-[#fafafa] dark:bg-[#050505] transition-colors overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vw] max-w-[520px] rounded-full bg-emerald-300/20 dark:bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center">

        {/* pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 mb-6"
        >
          Start a Project
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight"
        >
          {cta?.title || "Ready to Build Something Similar?"}
        </motion.h2>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto"
        >
          {cta?.description ||
            "Let's discuss how we can bring your ideas to life with a thoughtfully crafted digital platform."}
        </motion.p>

        {/* button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={cta?.link || "https://wa.me/919549626202"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShineButton className="flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-shadow duration-500">
              <MessageCircle size={18} />
              {cta?.button || "Discuss Your Project"}
            </ShineButton>
          </a>
        </motion.div>

      </div>
    </section>
  );
}