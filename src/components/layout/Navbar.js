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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800"
            : "bg-transparent"
        )}
      >
        <div
          className="
          mx-auto flex h-16 max-w-6xl items-center
          justify-between px-4
        "
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center select-none"
          >
            {/* Light logo */}
            <Image
              src="/logo-black.png"
              alt="JSS Originals"
              width={140}
              height={40}
              priority
              className="h-6 w-auto dark:hidden"
            />

            {/* Dark logo */}
            <Image
              src="/logo-white.png"
              alt="JSS Originals"
              width={140}
              height={40}
              priority
              className="hidden h-6 w-auto dark:block"
            />
          </Link>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              border border-neutral-200 dark:border-neutral-800
              bg-white/80 dark:bg-neutral-900/80
              backdrop-blur
              transition-all duration-200
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              active:scale-95
            "
            >
              <Menu size={18} />
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
