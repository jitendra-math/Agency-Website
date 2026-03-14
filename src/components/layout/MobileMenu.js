// src/components/layout/MobileMenu.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed right-0 top-0 z-50
              h-screen w-full
              bg-white dark:bg-neutral-950
              px-6 pt-6 pb-10
              flex flex-col
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center"
              >
                {/* light logo */}
                <Image
                  src="/logo-black.png"
                  alt="JSS Originals"
                  width={140}
                  height={40}
                  className="h-6 w-auto dark:hidden"
                />

                {/* dark logo */}
                <Image
                  src="/logo-white.png"
                  alt="JSS Originals"
                  width={140}
                  height={40}
                  className="hidden h-6 w-auto dark:block"
                />
              </Link>

              {/* Close button */}
              <button
                onClick={onClose}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  border border-neutral-200 dark:border-neutral-800
                  bg-white/80 dark:bg-neutral-900/80
                  backdrop-blur
                  transition-all duration-200
                  hover:bg-neutral-100 dark:hover:bg-neutral-800
                  active:scale-95
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            <nav
              className="
              mt-16
              flex flex-col
              gap-8
              text-2xl
              font-semibold
              tracking-tight
              text-neutral-900 dark:text-neutral-100
            "
            >
              <Link
                href="/"
                onClick={onClose}
                className="transition-opacity hover:opacity-60"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={onClose}
                className="transition-opacity hover:opacity-60"
              >
                About
              </Link>

              <Link
                href="/projects"
                onClick={onClose}
                className="transition-opacity hover:opacity-60"
              >
                Projects
              </Link>

              <Link
                href="/join"
                onClick={onClose}
                className="transition-opacity hover:opacity-60"
              >
                Join Us
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className="transition-opacity hover:opacity-60"
              >
                Contact
              </Link>
            </nav>

            {/* Footer hint */}
            <div className="mt-auto pt-12 text-sm text-neutral-500 dark:text-neutral-400">
              JSS Originals
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
