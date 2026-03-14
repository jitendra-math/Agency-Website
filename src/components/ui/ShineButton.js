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
    lg: "px-8 py-3.5 text-base sm:text-lg", // Mobile-first sizing
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative inline-flex items-center justify-center font-medium tracking-wide",
        "rounded-full overflow-hidden isolate select-none",
        
        // Premium Core Colors (Clean Blue)
        "bg-blue-600 text-white",
        "dark:bg-blue-500 dark:text-white",
        
        // Soft, elegant shadow instead of harsh box-shadows
        "shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)]",
        "dark:shadow-[0_8px_20px_-6px_rgba(59,130,246,0.3)]",
        
        // Subtle inner border for depth
        "border border-white/20 dark:border-white/10",
        
        sizes[size],
        className
      )}
      {...props}
    >
      {/* THE SHINE EFFECT
        - w-[150%] ensures it covers the whole button width smoothly
        - absolute top-0 and h-full perfectly constrain it
      */}
      <div 
        className="absolute inset-0 -z-10 flex h-full w-full justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="absolute top-0 -left-[100%] h-full w-[150%] animate-pro-shine bg-gradient-to-r from-transparent via-white/30 to-transparent" 
        />
      </div>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
