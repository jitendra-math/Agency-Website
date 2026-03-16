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
          ${isFolder ? "cursor-pointer hover:bg-neutral-100" : ""}
        `}
      >
        {/* simple icon */}
        <span className="text-emerald-600">
          {isFolder ? (open ? "📂" : "📁") : "📄"}
        </span>

        <span className={isFolder ? "font-semibold" : "font-medium"}>
          {name}
        </span>
      </div>

      {isFolder && open && (
        <div className="ml-4 pl-3 border-l border-neutral-200 flex flex-col gap-1">
          {children}
        </div>
      )}
    </div>
  );
}

export default function NimodProjectStructure() {
  return (
    <section className="px-6 py-24 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">

        {/* header */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-1 rounded-full bg-white border text-xs font-semibold tracking-widest text-emerald-600 mb-6">
            Architecture
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Full Project Structure
          </h2>

          <p className="mt-4 text-neutral-500">
            Modular Next.js architecture with reusable components.
          </p>
        </div>

        {/* file tree */}
        <div className="bg-white rounded-xl border p-6 shadow-sm overflow-x-auto">

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