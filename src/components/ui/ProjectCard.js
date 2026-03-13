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
        "group relative rounded-2xl border border-neutral-200 dark:border-neutral-800",
        "bg-white dark:bg-neutral-900",
        "p-5 transition-all duration-300",
        "hover:shadow-lg",
        className
      )}
    >
      {/* Tag */}
      <span
        className="
          inline-flex items-center rounded-full
          bg-neutral-100 dark:bg-neutral-800
          px-3 py-1 text-xs font-medium
          text-neutral-600 dark:text-neutral-300
        "
      >
        {project.tag}
      </span>

      {/* Title */}
      <h3
        className="
          mt-3 text-lg font-semibold
          text-neutral-900 dark:text-neutral-100
        "
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        className="
          mt-2 text-sm
          text-neutral-600 dark:text-neutral-400
          leading-relaxed
        "
      >
        {project.description}
      </p>

      {/* Arrow */}
      <div
        className="
          mt-4 flex items-center text-sm font-medium
          text-blue-600 dark:text-blue-400
        "
      >
        View Project
        <ArrowUpRight
          size={16}
          className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.div>
  );
}