// src/components/work/ProjectTypes.jsx

"use client";

import { motion } from "framer-motion";
import {
  Building2,
  SquareMousePointer,
  Briefcase,
  Code2,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";

const projectTypes = [
  {
    icon: Building2,
    title: "Business Websites",
    description:
      "Professional websites designed to strengthen trust and credibility.",
  },
  {
    icon: SquareMousePointer,
    title: "Landing Pages",
    description:
      "Focused experiences built to convert visitors into customers.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description:
      "Elegant digital identities for individuals and brands.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Tailored systems designed around unique workflows.",
  },
  {
    icon: CalendarDays,
    title: "Booking Platforms",
    description:
      "Experiences that simplify scheduling and customer interactions.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Internal tools and management systems built for efficiency.",
  },
];

export default function ProjectTypes() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-white dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            What We Build
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            Projects We Love Working On
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            We enjoy collaborating with businesses, creators and brands looking to build digital experiences that are thoughtful, modern and built to last.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.8, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative flex flex-col p-6 sm:p-8 rounded-3xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/70 dark:border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
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