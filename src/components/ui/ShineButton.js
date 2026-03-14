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
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base sm:text-lg", // Mobile first: bumps text size slightly on bigger screens
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative inline-flex items-center justify-center font-semibold tracking-wide overflow-hidden",
        "rounded-full select-none", 
        
        // Premium Apple-style Rich Blue
        "bg-gradient-to-b from-blue-500 to-blue-600",
        "dark:from-blue-600 dark:to-blue-700",
        "text-white",
        
        // 3D Ambient Drop Shadow (Matches the button color)
        "shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)]",
        "dark:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.4)]",
        
        // Inner glass bezel (Creates the physical 3D button feel)
        "ring-1 ring-inset ring-white/20",
        
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Top Inner Highlight for 3D depth */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />

      {/* THE PRO MAX LIGHT SWEEP */}
      <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden mask-radial-edges">
        <div
          className="absolute top-0 bottom-0 -left-[100%] w-[40%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] animate-premium-shine"
        />
      </div>

      {/* Hover state subtle inner glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]" />

      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
        {children}
      </span>
    </motion.button>
  );
}
