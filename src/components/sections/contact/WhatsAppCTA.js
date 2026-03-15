// src/components/sections/contact/WhatsAppCTA.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
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
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="
          absolute -top-32 -left-32
          w-[360px] h-[360px]
          rounded-full
          bg-green-500/20
          blur-3xl
        "
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="
          absolute -bottom-32 -right-32
          w-[360px] h-[360px]
          rounded-full
          bg-emerald-500/20
          blur-3xl
        "
        />

      </div>

      <div className="mx-auto max-w-2xl">

        {/* Heading */}
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
          Start a Conversation
        </motion.h2>

        {/* Description */}
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
          The easiest way to discuss a project idea, collaboration,
          or simply start a conversation about the web is through
          WhatsApp.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://wa.me/919549626202"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShineButton size="lg" className="flex items-center gap-2">
              <MessageCircle size={18} />
              Chat on WhatsApp
            </ShineButton>
          </a>
        </motion.div>

      </div>
    </section>
  );
}