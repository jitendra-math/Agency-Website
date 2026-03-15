// src/components/layout/MobileMenu.js (Optimized)

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Apple-style silky smooth easing
const smoothEase = [0.16, 1, 0.3, 1];

// Panel animation with GPU hint
const panel = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.5, ease: smoothEase },
  },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: smoothEase } 
  },
};

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - still using motion for smooth fade, but lightweight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Glassmorphic panel with will-change hint */}
          <motion.div
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ willChange: 'transform' }} // GPU acceleration hint
            className="
              fixed right-0 top-0 z-50
              h-screen w-full sm:w-[400px]
              bg-white/70 dark:bg-[#050505]/70
              backdrop-blur-2xl
              shadow-2xl
              border-l border-white/20 dark:border-white/5
              px-6 pt-8 pb-10
              flex flex-col
              overflow-hidden
            "
          >
            {/* Static rich glows (no animation, so no performance hit) */}
            <div className="absolute inset-0 -z-10 pointer-events-none opacity-60 dark:opacity-40">
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-400/30 dark:bg-indigo-600/30 rounded-full blur-[80px]" />
              <div className="absolute bottom-20 left-[-20%] w-72 h-72 bg-cyan-300/30 dark:bg-cyan-600/20 rounded-full blur-[90px]" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between relative z-10">
              <Link href="/" onClick={onClose} className="drop-shadow-sm">
                <Image
                  src="/logo-black.png"
                  alt="JSS Originals"
                  width={140}
                  height={40}
                  className="h-6 w-auto dark:hidden"
                />
                <Image
                  src="/logo-white.png"
                  alt="JSS Originals"
                  width={140}
                  height={40}
                  className="hidden h-6 w-auto dark:block"
                />
              </Link>

              <button
                onClick={onClose}
                className="
                  group flex h-11 w-11 items-center justify-center
                  rounded-full
                  border border-black/5 dark:border-white/10
                  bg-white/60 dark:bg-black/60
                  backdrop-blur-md
                  transition-all duration-300
                  active:scale-90
                "
              >
                <X size={20} className="text-neutral-700 dark:text-neutral-300 group-active:text-neutral-900 dark:group-active:text-white transition-colors" />
              </button>
            </div>

            {/* Navigation links with staggered animation */}
            <motion.nav
              className="
              mt-20 flex flex-col gap-6
              text-4xl sm:text-5xl font-bold tracking-tighter
              text-neutral-900 dark:text-neutral-100
              relative z-10
            "
            >
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Join Us", "/join"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <motion.div key={href} variants={item}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className="
                      inline-block
                      transition-all duration-300 ease-out
                      active:scale-95 active:text-blue-600 dark:active:text-blue-400
                    "
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Footer branding */}
            <motion.div
              variants={item}
              className="
              mt-auto pt-12 relative z-10
              flex flex-col gap-1
            "
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                JSS Originals
              </span>
              <a 
                href="https://jssoriginals.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-500 dark:text-neutral-400 active:text-neutral-900 dark:active:text-neutral-200 transition-colors"
              >
                jssoriginals.in
              </a>
            </motion.div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}