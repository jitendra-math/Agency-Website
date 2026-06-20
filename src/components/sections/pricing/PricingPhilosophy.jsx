// src/components/sections/pricing/PricingPhilosophy.jsx

"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Users, Award } from "lucide-react";

const philosophyCards = [
  {
    icon: Shield,
    title: "Trust",
    description:
      "Professional digital experiences help customers feel confident choosing your business.",
  },
  {
    icon: Eye,
    title: "Visibility",
    description:
      "Customers can only choose businesses they can find.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "A great website turns interest into meaningful enquiries.",
  },
  {
    icon: Award,
    title: "Brand Authority",
    description:
      "Strong digital foundations strengthen credibility and perception.",
  },
];

export default function PricingPhilosophy() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
        relative isolate overflow-hidden
        px-6 py-16 sm:py-20
        bg-white dark:bg-[#050505]
        transition-colors duration-500
      "
    >
      {/* Ambient Glows - Softer */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[15%] left-[-5%] sm:top-[25%] sm:left-[5%]
            w-[70vw] h-[70vw] sm:w-[450px] sm:h-[450px]
            rounded-full
            bg-blue-200/20 dark:bg-indigo-900/12
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[10%] right-[-5%] sm:bottom-[20%] sm:right-[5%]
            w-[75vw] h-[75vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-cyan-200/25 dark:bg-cyan-900/10
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="
          absolute inset-0 -z-20
          opacity-[0.02] dark:opacity-[0.04]
          bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
          bg-[size:48px_48px] sm:bg-[size:64px_64px]
          [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)]
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
          >
            Our Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: smoothEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold tracking-tight
              text-black dark:text-white
              mt-2 leading-[1.1]
            "
          >
            A Website Is Not An Expense.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              It's A Business Asset.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Digital experiences create trust, visibility and growth opportunities that extend far beyond what social media alone can provide.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {philosophyCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.8, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="
                  group relative
                  flex flex-col
                  p-6 sm:p-8
                  rounded-2xl
                  bg-white/80 dark:bg-white/[0.04]
                  backdrop-blur-sm
                  border border-black/5 dark:border-white/10
                  transition-all duration-300
                  hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1
                "
              >
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-fit mb-4">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {card.description}
                </p>
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Philosophy Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 p-8 sm:p-10 rounded-2xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-200/70 dark:border-white/10 text-center"
        >
          <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
            Our Perspective
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            We believe businesses should invest in digital assets they own rather than relying entirely on platforms they do not control.
          </p>
        </motion.div>
      </div>
    </section>
  );
}