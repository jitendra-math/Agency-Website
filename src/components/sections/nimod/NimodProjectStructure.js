// src/components/sections/nimod/NimodProjectStructure.js

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FolderOpen, FileCode, FileJson, Image as ImageIcon, File } from "lucide-react";

// ==========================================
// SMART NODE COMPONENT (Handles File Logic)
// ==========================================
function Node({ name, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  // Intelligent Icon & Color Logic based on File Extension
  let Icon = File;
  let iconColor = "text-neutral-500 dark:text-neutral-400";
  
  if (children) {
    Icon = open ? FolderOpen : Folder;
    iconColor = "text-emerald-600 dark:text-emerald-400";
  } else if (name.endsWith('.js') || name.endsWith('.mjs')) {
    Icon = FileCode;
    iconColor = "text-cyan-600 dark:text-cyan-400";
  } else if (name.endsWith('.json')) {
    Icon = FileJson;
    iconColor = "text-amber-500 dark:text-amber-400";
  } else if (name.endsWith('.png') || name.endsWith('.jpg')) {
    Icon = ImageIcon;
    iconColor = "text-purple-500 dark:text-purple-400";
  } else if (name.endsWith('.css')) {
    Icon = FileCode;
    iconColor = "text-blue-500 dark:text-blue-400";
  }

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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
}

export default function NimodProjectStructure() {
  // Ultra-smooth cinematic Apple-style easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-6 py-32 sm:py-40
      bg-[#fafafa] dark:bg-[#050505]
      transition-colors duration-500
      "
    >
      {/* ===================================== */}
      {/* AMBIENT GLOWS (Subtle Emerald/Teal) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[30%] left-[-10%] sm:left-[20%]
            w-[70vw] sm:w-[500px] h-[70vw] sm:h-[500px]
            rounded-full
            bg-emerald-400/20 dark:bg-emerald-700/15
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:right-[20%]
            w-[80vw] sm:w-[600px] h-[80vw] sm:h-[600px]
            rounded-full
            bg-cyan-300/15 dark:bg-teal-800/15
            blur-[100px] sm:blur-[140px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Luxury Grid Texture */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">

        {/* ===================================== */}
        {/* HEADER SECTION */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: smoothEase }}
          className="text-center max-w-3xl flex flex-col items-center"
        >
          {/* Glassmorphic Pill */}
          <div className="mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Architecture
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
            Full Project <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 drop-shadow-sm">
              Structure.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-2xl">
            The project follows a modular Next.js architecture with
            reusable components and structured sections, ensuring scalability and clean code.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* THE GLASS CODE EDITOR WINDOW */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 1.5, ease: smoothEase }}
          className="
            mt-16 sm:mt-20 w-full
            rounded-2xl sm:rounded-[2rem]
            bg-white/60 dark:bg-[#0A0A0A]/80
            ring-1 ring-inset ring-black/5 dark:ring-white/10
            backdrop-blur-3xl
            shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]
            overflow-hidden
          "
        >
          {/* Editor Header (macOS Traffic Lights) */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/90 dark:bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/90 dark:bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/90 dark:bg-emerald-500/80" />
            <div className="ml-4 text-xs font-mono text-neutral-400 dark:text-neutral-500 font-medium select-none">
              nimod-pacs-workspace — JSS Originals
            </div>
          </div>

          {/* Editor Body (File Tree) */}
          <div className="p-4 sm:p-8 overflow-x-auto custom-scrollbar">
            <Node name="nimod-cooperative-bank" defaultOpen>

              <Node name="public" defaultOpen>
                <Node name="images" defaultOpen>
                  <Node name="logo-dark.png" />
                  <Node name="logo-light.png" />
                  <Node name="nimod-gate.jpg" />
                </Node>
              </Node>

              <Node name="src" defaultOpen>

                <Node name="app">
                  <Node name="about/page.js" />
                  <Node name="contact/page.js" />
                  <Node name="faq/page.js" />
                  <Node name="projects/page.js" />
                  <Node name="services/page.js" />
                  <Node name="globals.css" />
                  <Node name="layout.js" />
                  <Node name="page.js" />
                </Node>

                <Node name="components">

                  <Node name="about">
                    <Node name="AboutHero.js" />
                    <Node name="AboutIntro.js" />
                  </Node>

                  <Node name="contact">
                    <Node name="ContactHero.js" />
                    <Node name="ContactForm.js" />
                  </Node>

                  <Node name="layout">
                    <Node name="Navbar.js" />
                    <Node name="Footer.js" />
                  </Node>

                  <Node name="nimod">
                    <Node name="NimodHero.js" />
                    <Node name="NimodOverview.js" />
                    <Node name="NimodProjectStructure.js" />
                  </Node>

                  <Node name="ui">
                    <Node name="ThemeToggle.js" />
                    <Node name="ShineButton.js" />
                  </Node>

                </Node>

                <Node name="data">
                  <Node name="nimodProject.js" />
                </Node>

                <Node name="lib">
                  <Node name="utils.js" />
                </Node>

              </Node>

              <Node name="jsconfig.json" />
              <Node name="next.config.mjs" />
              <Node name="package.json" />
              <Node name="tailwind.config.js" />

            </Node>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
