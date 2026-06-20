// src/components/sections/pricing/CustomSolutions.jsx

"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  Database, 
  Calendar, 
  Brain, 
  Code, 
  Briefcase 
} from "lucide-react";

const customSolutions = [
  {
    icon: LayoutDashboard,
    title: "SaaS Platforms",
  },
  {
    icon: Database,
    title: "Admin Dashboards",
  },
  {
    icon: Calendar,
    title: "Booking Platforms",
  },
  {
    icon: Briefcase,
    title: "Internal Business Systems",
  },
  {
    icon: Brain,
    title: "AI Integrations",
  },
  {
    icon: Code,
    title: "Custom Web Applications",
  },
];

export default function CustomSolutions() {
  return (
    <section className="bg-white dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Custom Engagements
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            Need Something Beyond A Standard Website?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Some projects require specialised planning, advanced functionality, and fully tailored solutions. We help businesses build digital systems designed around their exact requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {customSolutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/70 dark:border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-105 transition-transform duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-black dark:text-white text-center leading-tight">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Premium Highlight Panel */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/70 dark:border-white/10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
            Every Custom Project Begins With Strategy.
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            We take time to understand your goals, workflows and business requirements before recommending the right solution.
          </p>
          <div className="mt-6">
            <Link
              href="https://client.jssoriginals.in/start?plan=custom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request A Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}