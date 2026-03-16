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
    <section className="relative overflow-hidden px-6 py-24 bg-[#fafafa]">
      
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vw] max-w-[500px] rounded-full bg-emerald-300/20 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center">

        {/* pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex px-4 py-1 rounded-full border bg-white text-xs font-semibold tracking-widest text-emerald-600 mb-6"
        >
          Start a Project
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight"
        >
          {cta?.title || "Ready to Build Something Similar?"}
        </motion.h2>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-neutral-500 max-w-xl mx-auto"
        >
          {cta?.description ||
            "Let's discuss how we can bring your ideas to life with a thoughtfully crafted digital platform."}
        </motion.p>

        {/* button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={cta?.link || "https://wa.me/919549626202"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShineButton className="flex items-center gap-2">
              <MessageCircle size={18} />
              {cta?.button || "Discuss Your Project"}
            </ShineButton>
          </a>
        </motion.div>

      </div>
    </section>
  );
}