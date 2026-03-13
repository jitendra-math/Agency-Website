// src/components/ui/ThemeToggle.js

"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { initTheme, toggleTheme, getCurrentTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initialTheme = initTheme();
    setTheme(initialTheme);
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle Theme"
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-lg",
        "border border-neutral-200 dark:border-neutral-700",
        "bg-white dark:bg-neutral-900",
        "transition-all duration-300",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-neutral-700" />
      )}
    </button>
  );
}