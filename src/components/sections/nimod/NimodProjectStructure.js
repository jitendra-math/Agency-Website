// src/components/sections/nimod/NimodProjectStructure.js
"use client";

import React from "react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FolderOpen, FileCode, FileJson, Image as ImageIcon, File } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";

// ==========================================
// OPTIMIZED NODE COMPONENT (Memoized)
// ==========================================
const Node = React.memo(function Node({ name, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  const { Icon, iconColor } = useMemo(() => {
    let IconComponent = File;
    let color = "text-neutral-500 dark:text-neutral-400";

    if (children) {
      IconComponent = open ? FolderOpen : Folder;
      color = "text-emerald-600 dark:text-emerald-400";
    } else if (name.endsWith(".js") || name.endsWith(".mjs")) {
      IconComponent = FileCode;
      color = "text-cyan-600 dark:text-cyan-400";
    } else if (name.endsWith(".json")) {
      IconComponent = FileJson;
      color = "text-amber-500 dark:text-amber-400";
    } else if (name.endsWith(".png") || name.endsWith(".jpg")) {
      IconComponent = ImageIcon;
      color = "text-purple-500 dark:text-purple-400";
    } else if (name.endsWith(".css")) {
      IconComponent = FileCode;
      color = "text-blue-500 dark:text-blue-400";
    }

    return { Icon: IconComponent, iconColor: color };
  }, [name, children, open]);

  return (
    <div className="font-mono text-sm sm:text-base">
      <div
        onClick={() => children && setOpen(!open)}
        className={`
          flex items-center gap-2 px-2 py-1.5 rounded-lg select-none transition-colors duration-200
          ${children ? "cursor-pointer hover:bg-black/5 dark:hover:bg-white/5" : ""}
          text-neutral-700 dark:text-neutral-300
        `}
      >
        <Icon size={16} className={iconColor} strokeWidth={2} />
        <span className={`${children ? "font-semibold" : "font-medium"} transition-colors group-hover:text-black dark:group-hover:text-white`}>
          {name}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {children && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-[9px] pl-4 border-l border-neutral-200 dark:border-neutral-800 flex flex-col gap-0.5 mt-0.5 mb-1.5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default function NimodProjectStructure() {
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
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

  const glow1Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.03, 1] : [1, 1.05, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

  const glow2Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
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