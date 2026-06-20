// src/components/sections/contact/ContactMethods.jsx

"use client";

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
  return (
    <section className="bg-white dark:bg-neutral-950/90 px-4 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {methods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/70 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
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