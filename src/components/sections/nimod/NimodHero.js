// src/components/sections/nimod/NimodHero.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import nimodProject from "@/data/nimodProject";

// Optimized easing – still smooth but less computationally heavy than custom cubic-bezier
const smoothEase = "easeOut";

// Stagger variants – memoized to prevent recreation
const useStagger = () =>
  useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.1,
        },
      },
    }),
    []
  );

const useFadeUp = () =>
  useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          ease: smoothEase,
        },
      },
    }),
    []
  );

export default function NimodHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const stagger = useStagger();
  const fadeUp = useFadeUp();

  const blob1Animation = useMemo(
    () =>
      isMobile
        ? { x: [0, 20, 0], y: [0, -15, 0] }
        : { x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.05, 1] },
    [isMobile]
  );

  const blob2Animation = useMemo(
    () =>
      isMobile
        ? { x: [0, -20, 0], y: [0, 20, 0] }
        : { x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.07, 1] },
    [isMobile]
  );

  return (
    <section
      className="
      relative isolate overflow-hidden
      flex flex-col items-center justify-center
      min-h-[80vh] px-6 pt-24 pb-20 sm:pt-28 sm:pb-24
      text-center
      bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#ececec]
      dark:from-[#050505] dark:via-[#080808] dark:to-[#0c0c0c]
      transition-colors duration-500
      "
    >
      {/* content unchanged */}
    </section>
  );
}