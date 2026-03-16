// src/components/sections/nimod/NimodCTA.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import { MessageCircle } from "lucide-react";
import nimodProject from "@/data/nimodProject";

export default function NimodCTA() {
  const { cta } = nimodProject;

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-4 py-24
      text-center
      bg-gradient-to-b
      from-white
      to-neutral-100
      dark:from-neutral-950
      dark:to-neutral-900
      "
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="
          absolute -top-36 -left-36
          h-[360px] w-[360px]
          rounded-full
          bg-emerald-500/20
          blur-3xl
          "
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="
          absolute -bottom-36 -right-36
          h-[360px] w-[360px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
          "
        />

      </div>

      <div className="mx-auto max-w-2xl">

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          text-3xl sm:text-4xl
          font-semibold
          tracking-tight
          text-neutral-900
          dark:text-neutral-100
          "
        >
          {cta.title}
        </motion.h2>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-6
          text-base leading-relaxed
          text-neutral-600
          dark:text-neutral-400
          "
        >
          {cta.description}
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href={cta.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShineButton size="lg" className="flex items-center gap-2">
              <MessageCircle size={18} />
              {cta.button}
            </ShineButton>
          </a>
        </motion.div>

      </div>

      {/* bottom fade */}
      <div
        className="
        pointer-events-none
        absolute bottom-0 left-0 right-0
        h-24
        bg-gradient-to-b
        from-transparent
        to-white
        dark:to-neutral-950
      "
      />
    </section>
  );
}