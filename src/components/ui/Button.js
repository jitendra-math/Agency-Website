// src/components/ui/Button.js

"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const base =
  "relative inline-flex items-center justify-center font-medium tracking-wide select-none rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 isolate";

const variants = {
  primary: cn(
    "bg-blue-600 text-white",
    "dark:bg-blue-500 dark:text-white",
    "shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)]",
    "dark:shadow-[0_8px_20px_-6px_rgba(59,130,246,0.3)]",
    "border border-white/20 dark:border-white/10",
    "transition-all duration-300",
    "hover:bg-blue-700 dark:hover:bg-blue-600"
  ),

  secondary: cn(
    "bg-white/60 dark:bg-white/[0.03]",
    "ring-1 ring-inset ring-black/5 dark:ring-white/10",
    "backdrop-blur-xl",
    "text-neutral-800 dark:text-neutral-200",
    "transition-all duration-300 ease-out",
    "hover:bg-white/80 dark:hover:bg-white/[0.08]",
    "hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)]",
    "dark:hover:shadow-[0_8px_20px_-6px_rgba(255,255,255,0.02)]"
  ),
  
  // Bonus: Added a ghost variant for very subtle links
  ghost: cn(
    "text-neutral-700 dark:text-neutral-300",
    "transition-colors duration-300",
    "hover:bg-black/5 dark:hover:bg-white/10"
  )
};

// Sizes perfectly synced with Mobile-First ShineButton
const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm sm:text-base",
  lg: "px-8 py-3.5 text-base sm:text-lg",
};

const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      shine = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Updated to use the clean Pro Max Shine if passed as true */}
        {shine && (
          <div 
            className="absolute inset-0 -z-10 flex h-full w-full justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div 
              className="absolute top-0 -left-[100%] h-full w-[150%] animate-pro-shine bg-gradient-to-r from-transparent via-white/30 to-transparent" 
            />
          </div>
        )}

        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
