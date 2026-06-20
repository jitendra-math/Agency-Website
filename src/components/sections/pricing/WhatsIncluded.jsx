// src/components/sections/pricing/WhatsIncluded.jsx

"use client";

import { 
  Smartphone, 
  Search, 
  Zap, 
  Shield, 
  Rocket, 
  RefreshCw 
} from "lucide-react";

const inclusions = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Designed to perform beautifully across mobile, tablet and desktop devices.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    description:
      "Built with modern search visibility best practices from day one.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "Fast-loading experiences engineered for speed and reliability.",
  },
  {
    icon: Shield,
    title: "Security Best Practices",
    description:
      "Modern development standards and security-conscious implementation.",
  },
  {
    icon: Rocket,
    title: "Launch Support",
    description:
      "Guidance and assistance throughout the launch process.",
  },
  {
    icon: RefreshCw,
    title: "Future-Ready Development",
    description:
      "Built on scalable foundations that support future growth.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Included In Every Project
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            Premium Standards. Every Time.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            No matter the size of the engagement, every project is built with the same commitment to quality, performance and professionalism.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm border border-black/5 dark:border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-fit mb-4">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}