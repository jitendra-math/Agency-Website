// src/components/ui/ThemeToggle.js

"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { initTheme, toggleTheme } from "@/lib/theme";
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
        "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center",
        "rounded-full",
        "bg-transparent",
        "transition-all duration-300",
        "hover:bg-black/5 dark:hover:bg-white/10",
        "active:scale-90",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-neutral-700 dark:text-neutral-300" />
      )}
    </button>
  );
}
