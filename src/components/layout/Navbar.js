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
      // Triggering the glass effect slightly earlier for a smoother feel
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
            ? "bg-white/50 dark:bg-[#050505]/40 backdrop-blur-2xl shadow-sm border-b border-black/5 dark:border-white/5"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div
          className="
          mx-auto flex h-16 max-w-7xl items-center
          justify-between px-4 sm:px-6 lg:px-8
        "
        >
          {/* ===================================== */}
          {/* LOGO - Slightly Larger & Perfectly Centered Vertically */}
          {/* ===================================== */}
          <Link
            href="/"
            className="flex items-center justify-center select-none group"
          >
            {/* Light logo */}
            <Image
              src="/logo-black.png"
              alt="JSS Originals"
              width={160} // Slightly increased logical width
              height={48} // Slightly increased logical height
              priority
              className="h-7 sm:h-[1.85rem] w-auto dark:hidden transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Dark logo */}
            <Image
              src="/logo-white.png"
              alt="JSS Originals"
              width={160}
              height={48}
              priority
              className="hidden h-7 sm:h-[1.85rem] w-auto dark:block transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </Link>

          {/* ===================================== */}
          {/* CONTROLS (Right Side) */}
          {/* ===================================== */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              className="
              group flex h-10 w-10 items-center justify-center
              rounded-full
              border border-black/5 dark:border-white/10
              bg-white/60 dark:bg-neutral-900/60
              backdrop-blur-md
              transition-all duration-300 ease-out
              hover:bg-white dark:hover:bg-neutral-800
              hover:shadow-sm
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
