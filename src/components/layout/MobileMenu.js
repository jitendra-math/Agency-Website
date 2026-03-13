// src/components/layout/MobileMenu.js

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed right-0 top-0 z-50
              h-screen w-full
              bg-white dark:bg-neutral-950
              px-6 py-8
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">
                JSS Originals
              </span>

              <button
                onClick={onClose}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-neutral-200
                  dark:border-neutral-800
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="mt-12 flex flex-col gap-6 text-lg font-medium">
              <Link href="/" onClick={onClose}>
                Home
              </Link>

              <Link href="/about" onClick={onClose}>
                About
              </Link>

              <Link href="/projects" onClick={onClose}>
                Projects
              </Link>

              <Link href="/join" onClick={onClose}>
                Join Us
              </Link>

              <Link href="/contact" onClick={onClose}>
                Contact
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}