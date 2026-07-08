// src/components/ui/ShineButton.js

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ShineButton({
  className,
  children,
  size = "lg",
  ...props
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm sm:text-base",
    lg: "px-8 py-3.5 text-base sm:text-lg",
  };

  return (
    <>
      <motion.button
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "group relative inline-flex items-center justify-center font-medium tracking-wide",
          "rounded-full overflow-hidden isolate select-none",

          // --- Matching the HeroSection primary button gradient ---
          "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",

          // Soft shadow (same as hero)
          "shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)]",
          "dark:shadow-[0_8px_20px_-6px_rgba(99,102,241,0.3)]",

          // Subtle inner border for depth
          "border border-white/20 dark:border-white/10",

          sizes[size],
          className
        )}
        {...props}
      >
        {/* Infinite shine effect – identical to hero section */}
        <div
          className="absolute inset-0 -translate-x-full animate-[shine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>

      {/* Keyframes for the shine animation (scoped) */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}