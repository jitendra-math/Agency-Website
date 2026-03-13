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
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "border border-white/20 dark:border-white/10",
        "bg-white/40 dark:bg-white/5",
        "backdrop-blur-xl",
        "p-6",
        "shadow-[0_10px_40px_rgba(0,0,0,0.08)]",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:shadow-[0_20px_80px_rgba(0,0,0,0.18)]",
        className
      )}
    >

      {/* glass highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent"/>

      {/* subtle glow on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"/>

      {/* Tag */}
      <span
        className="
        inline-flex items-center
        rounded-full
        bg-gradient-to-r
        from-blue-500/10
        to-purple-500/10
        px-3 py-1
        text-xs font-medium
        text-neutral-700
        dark:text-neutral-300
      "
      >
        {project.tag}
      </span>

      {/* Title */}
      <h3
        className="
        mt-4 text-lg font-semibold
        tracking-tight
        text-neutral-900
        dark:text-neutral-100
      "
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        className="
        mt-2 text-sm leading-relaxed
        text-neutral-600
        dark:text-neutral-400
      "
      >
        {project.description}
      </p>

      {/* Footer */}
      <div
        className="
        mt-6 flex items-center
        text-sm font-medium
        text-blue-600
        dark:text-blue-400
      "
      >
        View Project

        <ArrowUpRight
          size={16}
          className="
          ml-2
          transition-transform duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
        />

      </div>

    </motion.div>
  );
}
