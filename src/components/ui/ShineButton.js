// src/components/ui/ShineButton.js

"use client";

import Button from "./Button";
import { cn } from "@/lib/utils";

export default function ShineButton({
  className,
  children,
  size = "lg",
  ...props
}) {
  return (
    <Button
      size={size}
      shine
      className={cn(
        "relative bg-blue-600 text-white shadow-lg hover:bg-blue-700",
        "dark:bg-blue-500 dark:hover:bg-blue-600",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}