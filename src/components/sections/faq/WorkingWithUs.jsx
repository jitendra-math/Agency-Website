// src/components/faq/WorkingWithUs.jsx

"use client";

import { motion } from "framer-motion";
import { MessageCircle, GitBranch, Target, Shield } from "lucide-react";

const workCards = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Regular updates, transparent feedback cycles, and direct communication throughout the project.",
  },
  {
    icon: GitBranch,
    title: "Structured Process",
    description:
      "Every project follows a defined workflow designed to reduce confusion and maintain momentum.",
  },
  {
    icon: Target,
    title: "Long-Term Thinking",
    description:
      "We focus on building digital foundations that continue delivering value well beyond launch.",
  },
  {
    icon: Shield,
    title: "Quality Over Quantity",
    description:
      "We intentionally accept a limited number of projects to maintain high standards and personal attention.",
  },
];

export default function WorkingWithUs() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-white dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Working With Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            What It's Like To Work With JSS Originals
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            We believe great digital experiences are built through clear communication, thoughtful planning, and a commitment to quality at every stage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.8, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/70 dark:border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-fit mb-4">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}