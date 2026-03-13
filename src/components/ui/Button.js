// src/components/ui/Button.js

"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  primary: cn(
    "relative overflow-hidden rounded-xl",
    "bg-blue-600 text-white",
    "shadow-[0_6px_24px_rgba(37,99,235,0.35)]",
    "transition-all duration-300 ease-out",
    "hover:bg-blue-700",
    "hover:shadow-[0_8px_30px_rgba(37,99,235,0.45)]",
    "active:scale-[0.97]"
  ),

  secondary: cn(
    "relative overflow-hidden rounded-xl",
    "border border-neutral-300 dark:border-neutral-700",
    "bg-white/60 dark:bg-neutral-900/60 backdrop-blur",
    "text-neutral-900 dark:text-neutral-100",
    "transition-all duration-300 ease-out",
    "hover:bg-neutral-100 dark:hover:bg-neutral-800",
    "hover:shadow-md",
    "active:scale-[0.97]"
  ),
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
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
        whileTap={{ scale: 0.95 }}
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "inline-flex items-center justify-center",
          "font-medium select-none",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {shine && (
          <span
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
            aria-hidden="true"
          >
            <span
              className="
                absolute left-[-150%] top-0
                h-full w-[200%]
                rotate-[25deg]
                bg-gradient-to-r
                from-transparent
                via-white/50
                to-transparent
                animate-shine
              "
            />
          </span>
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
