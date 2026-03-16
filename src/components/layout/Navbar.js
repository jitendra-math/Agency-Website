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

        {/* bottom divider */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 transition-all duration-500",
            scrolled ? "h-16 sm:h-16" : "h-16 sm:h-24"
          )}
        >

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center select-none group outline-none rounded-lg"
          >
            <Image
              src="/logo-black.png"
              alt="JSS Originals"
              width={160}
              height={50}
              priority
              className="h-6 sm:h-7 w-auto dark:hidden transition-transform duration-500 group-hover:scale-[1.03] group-active:scale-95"
            />

            <Image
              src="/logo-white.png"
              alt="JSS Originals"
              width={160}
              height={50}
              priority
              className="hidden h-6 sm:h-7 w-auto dark:block transition-transform duration-500 group-hover:scale-[1.03] group-active:scale-95"
            />
          </Link>

          {/* Controls (transparent now) */}
          <div className="flex items-center gap-2">

            {/* Theme Toggle */}
            <div className="scale-90 sm:scale-100">
              <ThemeToggle />
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              aria-expanded={menuOpen}
              className="
              group flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
              rounded-full
              bg-transparent outline-none
              transition-all duration-300
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

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
