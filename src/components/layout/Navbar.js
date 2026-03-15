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
      // Triggering the glass effect perfectly as user starts scrolling
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/50 dark:bg-[#050505]/50 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(255,255,255,0.01)]"
            : "bg-transparent"
        )}
      >
        {/* ===================================== */}
        {/* PREMIUM GRADIENT BOTTOM EDGE */}
        {/* ===================================== */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent transition-opacity duration-500 ease-out",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className="
          mx-auto flex h-16 sm:h-20 max-w-7xl items-center
          justify-between px-4 sm:px-6 lg:px-8
        "
        >
          {/* ===================================== */}
          {/* LOGO - Slightly Larger & Pixel-Perfect Centered */}
          {/* ===================================== */}
          <Link
            href="/"
            className="flex items-center justify-center select-none group"
          >
            {/* Light logo */}
            <Image
              src="/logo-black.png"
              alt="JSS Originals"
              width={150} 
              height={45} 
              priority
              className="h-8 sm:h-[2.1rem] w-auto dark:hidden transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Dark logo */}
            <Image
              src="/logo-white.png"
              alt="JSS Originals"
              width={190}
              height={60}
              priority
              className="hidden h-8 sm:h-[2.1rem] w-auto dark:block transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </Link>

          {/* ===================================== */}
          {/* CONTROLS - "The Unified Glass Island" */}
          {/* ===================================== */}
          <div 
            className="
            flex items-center gap-1 sm:gap-2 p-1 
            rounded-full 
            bg-white/40 dark:bg-white/[0.03] 
            ring-1 ring-inset ring-black/5 dark:ring-white/10 
            backdrop-blur-md
            shadow-sm
            transition-all duration-300
            hover:bg-white/60 dark:hover:bg-white/[0.06]
          "
          >
            {/* Theme Toggle Button */}
            <div className="scale-90 sm:scale-100">
              <ThemeToggle />
            </div>

            {/* Subtle Inner Divider */}
            <div className="w-px h-5 bg-black/10 dark:bg-white/10 mx-0.5 sm:mx-1" />

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              className="
              group flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
              rounded-full
              bg-transparent
              transition-all duration-300 ease-out
              hover:bg-black/5 dark:hover:bg-white/10
              active:scale-95
            "
            >
              <Menu size={18} className="text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
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
