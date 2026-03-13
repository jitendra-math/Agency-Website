// src/lib/utils.js

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes safely.
 * It removes conflicting classes and combines conditional classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Detect if user prefers dark mode from system settings.
 */
export function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Store theme in localStorage
 */
export function setThemeStorage(theme) {
  if (typeof window === "undefined") return;
  localStorage.setItem("theme", theme);
}

/**
 * Get stored theme from localStorage
 */
export function getStoredTheme() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("theme");
}