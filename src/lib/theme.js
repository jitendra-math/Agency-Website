// src/lib/theme.js

import { getStoredTheme, getSystemTheme, setThemeStorage } from "./utils";

/**
 * Apply theme to the document root
 */
export function applyTheme(theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

/**
 * Initialize theme on page load
 * Priority:
 * 1. localStorage
 * 2. system preference
 * 3. default light
 */
export function initTheme() {
  let theme = getStoredTheme();

  if (!theme) {
    theme = getSystemTheme() || "light";
  }

  applyTheme(theme);
  setThemeStorage(theme);

  return theme;
}

/**
 * Toggle theme between light and dark
 */
export function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.contains("dark");

  const newTheme = isDark ? "light" : "dark";

  applyTheme(newTheme);
  setThemeStorage(newTheme);

  return newTheme;
}

/**
 * Get current active theme
 */
export function getCurrentTheme() {
  if (typeof document === "undefined") return "light";

  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}