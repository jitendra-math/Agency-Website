// src/components/work/FutureCaseStudies.jsx

"use client";

import { motion } from "framer-motion";
import { ClipboardList, LineChart, Handshake } from "lucide-react";

const futureCards = [
  {
    icon: ClipboardList,
    title: "Transparent Process",
    description:
      "Every project will be documented with clarity and honesty.",
  },
  {
    icon: LineChart,
    title: "Meaningful Results",
    description:
      "Case studies will focus on outcomes rather than vanity metrics.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    description:
      "We believe the best work comes from trust and collaboration.",
  },
];

export default function FutureCaseStudies() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-white dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Future Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            Every Great Portfolio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Starts Somewhere.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            JSS Originals is currently focused on building thoughtful digital experiences and long-term partnerships. As projects are completed, detailed case studies and success stories will be shared here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: smoothEase }}
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

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-500 italic max-w-2xl mx-auto">
            We prefer showcasing meaningful work over filling a portfolio with placeholders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}