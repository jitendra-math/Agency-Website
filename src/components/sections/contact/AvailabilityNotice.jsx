// src/components/sections/contact/AvailabilityNotice.jsx

"use client";

export default function AvailabilityNotice() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-950 px-4 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200/70 dark:border-neutral-800/70 text-center shadow-sm">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full mb-4">
            Limited Availability
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
            We Currently Accept A Limited Number Of Projects Each Month
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            To maintain quality, communication standards and delivery timelines, project slots are allocated on a first-come, first-served basis.
          </p>
        </div>
      </div>
    </section>
  );
}