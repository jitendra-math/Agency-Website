// src/components/sections/nimod/NimodTechStack.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import nimodProject from "@/data/nimodProject";

export default function NimodTechStack() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { techStack } = nimodProject;

  const fadeUpVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 1.0 : 1.2,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const chipVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.9, y: 20 },
      show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: isMobile ? 0.8 : 1.0,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const glow1Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

  const glow2Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.03, 1] : [1, 1.05, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 py-32 sm:py-40
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
      "
    >
      {/* rest of your code unchanged */}
    </section>
  );
}