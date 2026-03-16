// src/components/layout/Navbar.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // { passive: true } is a pro-move for silky smooth mobile scrolling
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[0.16,1,0.3,1]",
          scrolled
            ? "bg-white/60 dark:bg-[#050505]/60 backdrop-blur-2xl backdrop-saturate-[1.8] shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(255,255,255,0.02)]"
            : "bg-transparent"
        )}
      >
        {/* ===================================== */}
        {/* PREMIUM GRADIENT BOTTOM EDGE */}
        {/* ===================================== */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent transition-opacity duration-500 ease-out",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 transition-all duration-500 ease-[0.16,1,0.3,1]",
            // Dynamic Height: Shrinks elegantly when scrolled
            scrolled ? "h-16 sm:h-16" : "h-16 sm:h-24"
          )}
        >
          {/* ===================================== */}
          {/* LOGO - Perfect Center & Tactile */}
          {/* ===================================== */}
          <Link
            href="/"
            className="flex items-center justify-center select-none group outline-none rounded-lg"
          >
            {/* Light logo */}
            <Image
              src="/logo-black.png"
              alt="JSS Originals"
              width={160} 
              height={48} 
              priority
              className="h-6 sm:h-7 w-auto dark:hidden transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-[1.03] group-active:scale-95"
            />

            {/* Dark logo */}
            <Image
              src="/logo-white.png"
              alt="JSS Originals"
              width={160}
              height={48}
              priority
              className="hidden h-6 sm:h-7 w-auto dark:block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-[1.03] group-active:scale-95"
            />
          </Link>

          {/* ===================================== */}
          {/* CONTROLS - "The Unified Glass Island" */}
          {/* ===================================== */}
          <div 
            className={cn(
              "flex items-center gap-1 sm:gap-2 p-1.5 rounded-full ring-1 ring-inset transition-all duration-500 ease-out",
              // Pops slightly when scrolled
              scrolled 
                ? "bg-white/80 dark:bg-white/[0.05] ring-black/[0.08] dark:ring-white/[0.12] shadow-[0_2px_10px_rgba(0,0,0,0.05)]" 
                : "bg-white/40 dark:bg-white/[0.02] ring-black/5 dark:ring-white/10 backdrop-blur-md"
            )}
          >
            {/* Theme Toggle Button */}
            <div className="scale-90 sm:scale-100">
              <ThemeToggle />
            </div>

            {/* Subtle Gradient Divider */}
            <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-black/15 dark:via-white/15 to-transparent mx-0.5 sm:mx-1" />

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              aria-expanded={menuOpen}
              className="
              group flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
              rounded-full
              bg-transparent outline-none
              transition-all duration-300 ease-out
              hover:bg-black/5 dark:hover:bg-white/10
              active:scale-90
            "
            >
              <Menu 
                size={20} 
                strokeWidth={1.5}
                className="text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors" 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
