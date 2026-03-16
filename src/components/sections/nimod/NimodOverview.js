// src/components/sections/nimod/NimodOverview.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import nimodProject from "@/data/nimodProject";

export default function NimodOverview() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { client, details } = nimodProject;

  const overviewStats = [
    { label: "Client", value: client?.name || "Nimod Society" },
    { label: "Project Type", value: details?.projectType || "Web Platform" },
    { label: "Role", value: details?.role || "Development" },
    { label: "Year", value: details?.year || "2024" },
  ];

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

  const glowAnimation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.02, 1] : [1, 1.05, 1],
      opacity: isMobile ? [0.1, 0.15, 0.1] : [0.1, 0.2, 0.1],
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