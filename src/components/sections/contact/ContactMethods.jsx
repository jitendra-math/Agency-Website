// src/components/sections/contact/ContactMethods.jsx

"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock } from "lucide-react";

const methods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For project discussions, proposals and general inquiries.",
    value: "contact@jssoriginals.in",
    link: "mailto:contact@jssoriginals.in",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Quick questions, project discussions and updates.",
    value: "+91 9549626202",
    note: "Calls Not Supported",
    link: "https://wa.me/919549626202",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "Typical response window",
    value: "Within 24 Business Hours",
    extra: "Monday–Friday · 10:00 AM – 6:00 PM IST",
  },
];

export default function ContactMethods() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-16 sm:py-20 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[10%] w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-300/30 dark:bg-indigo-900/20 blur-[80px] sm:blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[10%] w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px] rounded-full bg-cyan-200/40 dark:bg-cyan-900/15 blur-[90px] sm:blur-[130px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-200/30 dark:bg-violet-900/15 blur-[100px] sm:blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {methods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm border border-black/5 dark:border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-black dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">
                  {item.description}
                </p>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-base font-medium text-blue-600 dark:text-blue-400 hover:underline hover:underline-offset-2 transition-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-base font-medium text-black dark:text-white">
                    {item.value}
                  </div>
                )}
                {item.note && (
                  <span className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                    {item.note}
                  </span>
                )}
                {item.extra && (
                  <span className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                    {item.extra}
                  </span>
                )}
                {/* subtle bottom highlight on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}