// src/components/sections/nimod/NimodProjectStructure.js
"use client";

import React, { useState } from "react";

function Node({ name, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const isFolder = Boolean(children);

  return (
    <div className="font-mono text-sm">
      <div
        onClick={() => isFolder && setOpen(!open)}
        className={`
          flex items-center gap-2 px-2 py-1 rounded-md
          transition-colors
          ${
            isFolder
              ? "cursor-pointer hover:bg-neutral-100 dark:hover:bg-white/5"
              : ""
          }
          text-neutral-700 dark:text-neutral-300
        `}
      >
        {/* icon */}
        <span className="text-emerald-600 dark:text-emerald-400">
          {isFolder ? (open ? "📂" : "📁") : "📄"}
        </span>

        <span className={isFolder ? "font-semibold" : "font-medium"}>
          {name}
        </span>
      </div>

      {isFolder && open && (
        <div className="ml-4 pl-3 border-l border-neutral-200 dark:border-neutral-800 flex flex-col gap-1">
          {children}
        </div>
      )}
    </div>
  );
}

export default function NimodProjectStructure() {
  return (
    <section className="relative px-6 py-24 bg-[#fafafa] dark:bg-[#050505] transition-colors overflow-hidden">

      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vw] max-w-[520px] rounded-full bg-emerald-300/20 dark:bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* header */}
        <div className="text-center mb-12">

          <div className="inline-flex px-4 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 mb-6">
            Architecture
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Full Project Structure
          </h2>

          <p className="mt-4 text-neutral-500 dark:text-neutral-400">
            Modular Next.js architecture with reusable components.
          </p>

        </div>

        {/* file tree container */}
        <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-black/5 dark:border-white/10 p-6 shadow-sm dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-x-auto">

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

      </div>
    </section>
  );
}