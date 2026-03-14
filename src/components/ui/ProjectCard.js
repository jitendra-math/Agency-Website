// src/components/ui/ProjectCard.js

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, className }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative flex flex-col h-full rounded-[2rem]", // Apple-style large radius
        "bg-white/30 dark:bg-white/[0.02]", // Ultra sheer glass
        "ring-1 ring-inset ring-black/5 dark:ring-white/10", // Inner bezel reflection
        "backdrop-blur-2xl",
        "p-8 sm:p-10",
        "transition-all duration-700 ease-out",
        "hover:bg-white/50 dark:hover:bg-white/[0.04]", // Deepens slightly on hover
        "hover:shadow-[0_24px_48px_-12px_rgba(37,99,235,0.08)]",
        "dark:hover:shadow-[0_24px_48px_-12px_rgba(59,130,246,0.04)]",
        className
      )}
    >
      {/* Premium Tag Pill */}
      <div className="mb-6 flex items-center">
        <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          {project.tag}
        </span>
      </div>

      {/* Title - Clean & Bold */}
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
        {project.name}
      </h3>

      {/* Description - Readable Measure */}
      <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8 flex-grow">
        {project.description}
      </p>

      {/* Footer CTA - Interactive Arrow */}
      <div className="mt-auto flex items-center text-sm font-semibold tracking-wide text-neutral-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        Explore Project
        <div className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-800 ring-1 ring-inset ring-black/5 dark:ring-white/10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Butter smooth glowing bottom line on hover */}
      <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-full" />
    </motion.div>
  );
}
