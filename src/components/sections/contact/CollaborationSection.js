// src/components/sections/contact/CollaborationSection.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import { MessageCircle } from "lucide-react";

export default function CollaborationSection() {
  return (
    <section
      className="
      relative isolate overflow-hidden
      px-4 py-24
      text-center
      bg-white
      dark:bg-neutral-950
    "
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="
          absolute -top-36 -left-36
          h-[380px] w-[380px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
          className="
          absolute -bottom-36 -right-36
          h-[380px] w-[380px]
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
        />

      </div>

      <div className="mx-auto max-w-2xl">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          text-xs uppercase tracking-[0.35em]
          text-neutral-500
        "
        >
          Collaboration
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-4
          text-3xl sm:text-4xl
          font-semibold
          tracking-tight
          text-neutral-900
          dark:text-neutral-100
        "
        >
          Have a Project in Mind?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-6
          text-base leading-relaxed
          text-neutral-600
          dark:text-neutral-400
        "
        >
          If you’re planning a web project, digital platform, or an
          experimental idea for the internet, JSS Originals is open to
          meaningful collaborations. The easiest way to begin is by
          sharing your idea through WhatsApp.
        </motion.p>

        {/* List */}
        <motion.ul
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-8
          space-y-2
          text-sm
          text-neutral-700
          dark:text-neutral-300
        "
        >
          <li>• Website development</li>
          <li>• Digital identity projects</li>
          <li>• Experimental web ideas</li>
          <li>• Creative collaborations</li>
        </motion.ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
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
              Discuss Your Project
            </ShineButton>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
