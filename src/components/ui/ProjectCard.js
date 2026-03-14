// src/components/ui/ProjectCard.js

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, className }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative rounded-xl",
        "border border-neutral-200 dark:border-neutral-800",
        "bg-white/70 dark:bg-neutral-900/60",
        "backdrop-blur",
        "p-6",
        "transition-all duration-300",
        "hover:-translate-y-1",
        className
      )}
    >

      {/* subtle hover glow */}
      <div
        className="
        absolute inset-0 rounded-xl
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        bg-gradient-to-r
        from-blue-500/5
        via-purple-500/5
        to-blue-500/5
        pointer-events-none
      "
      />

      {/* Tag */}
      <span
        className="
        inline-flex items-center
        rounded-full
        bg-blue-500/10
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
        text-blue-600 dark:text-blue-400
      "
      >
        View Project

        <ArrowUpRight
          size={16}
          className="
          ml-2 transition-transform duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
        />
      </div>

    </motion.div>
  );
}