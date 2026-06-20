// src/components/sections/contact/ContactHero.jsx

"use client";

import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 px-4 py-16 sm:py-24 md:py-32 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-4">
          Contact
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white leading-[1.1]">
          Let's Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Worth Remembering.
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Whether you need a high-converting landing page, a custom web application, or a complete digital presence, we'd love to hear about your project.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#inquiry" className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]">
            Start Your Project
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <a
            href="https://wa.me/919549626202"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white dark:hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}