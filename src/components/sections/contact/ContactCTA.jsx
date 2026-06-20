// src/components/sections/contact/ContactCTA.jsx

"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 px-4 py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
          Ready To Start?
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Tell us about your project and we'll get back to you with the next steps.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#inquiry"
            className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Your Project
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          <a
            href="https://wa.me/919549626202"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white dark:hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}