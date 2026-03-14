// src/components/layout/MobileMenu.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const panel = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* panel */}
          <motion.div
            variants={panel}
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
            {/* header */}
            <div className="flex items-center justify-between">

              <Link href="/" onClick={onClose}>
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
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  border border-neutral-200 dark:border-neutral-800
                  bg-white/80 dark:bg-neutral-900/80
                  backdrop-blur
                  transition-colors
                  hover:bg-neutral-100 dark:hover:bg-neutral-800
                "
              >
                <X size={20} />
              </button>

            </div>

            {/* navigation */}
            <motion.nav
              className="
              mt-16 flex flex-col gap-8
              text-2xl font-semibold
              tracking-tight
              text-neutral-900 dark:text-neutral-100
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
                    className="transition-opacity hover:opacity-60"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

            </motion.nav>

            {/* footer branding */}
            <motion.div
              variants={item}
              className="
              mt-auto pt-12
              text-sm text-neutral-500
              dark:text-neutral-400
            "
            >
              JSS Originals
            </motion.div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}