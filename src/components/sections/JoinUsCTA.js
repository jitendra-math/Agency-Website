// src/components/sections/JoinUsCTA.js

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Link from "next/link";
import { Code, PenTool, Lightbulb } from "lucide-react";

const roles = [
  {
    icon: Code,
    label: "Developers",
  },
  {
    icon: PenTool,
    label: "Designers",
  },
  {
    icon: Lightbulb,
    label: "Creators",
  },
];

export default function JoinUsCTA() {
  return (
    <section className="relative px-4 py-20 overflow-hidden">

      {/* Background Glow */}
      <div
        className="
        absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)]
        dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]
      "
      />

      <div className="mx-auto max-w-xl text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="
            text-2xl font-semibold
            text-neutral-900
            dark:text-neutral-100
          "
        >
          Build the Future of
          <br />
          Web Identity
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          viewport={{ once: true }}
          className="
            mt-4 text-sm leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
        >
          Join JSS Originals and collaborate on experimental web
          platforms, identity systems, and open digital projects.
        </motion.p>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-4"
        >
          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <div
                key={index}
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-neutral-200
                  dark:border-neutral-800
                  bg-white/60 dark:bg-neutral-900/60
                  backdrop-blur
                  px-3 py-1.5
                  text-xs
                  text-neutral-700 dark:text-neutral-300
                "
              >
                <Icon size={14} />
                {role.label}
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link href="/join">
            <ShineButton size="lg">
              Apply to Join
            </ShineButton>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}