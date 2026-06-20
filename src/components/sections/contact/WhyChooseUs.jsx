// src/components/sections/contact/WhyChooseUs.jsx

"use client";

import { MessageSquare, Cpu, Zap, Rocket } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Fast Communication",
    description:
      "Clear updates, structured feedback cycles and responsive communication throughout the project.",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    description:
      "Built using modern technologies and best practices for performance and maintainability.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Fast loading experiences optimised for users, search engines and conversions.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description:
      "Websites and applications designed to grow alongside your business.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-neutral-950/90 px-4 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Why JSS Originals
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white mt-2">
            Built For Businesses That Care About Quality.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3">
            We focus on clean design, modern engineering and long-term scalability instead of recycled templates and quick fixes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/70 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-fit mb-5">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
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