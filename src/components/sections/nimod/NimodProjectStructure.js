// src/components/sections/nimod/NimodProjectStructure.js

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function Node({ name, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="ml-4">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-neutral-200 hover:text-white select-none"
      >
        {children ? (open ? "📂 " : "📁 ") : "📄 "}
        {name}
      </div>

      {children && open && (
        <div className="ml-4 border-l border-neutral-800 pl-4 mt-1">
          {children}
        </div>
      )}
    </div>
  );
}

export default function NimodProjectStructure() {
  return (
    <section className="px-4 py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Architecture
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
            Full Project Structure
          </h2>

          <p className="mt-6 text-neutral-600 dark:text-neutral-400">
            The project follows a modular Next.js architecture with
            reusable components and structured sections.
          </p>
        </motion.div>

        {/* tree viewer */}
        <div className="mt-16 bg-neutral-950 rounded-2xl p-6 text-sm font-mono overflow-x-auto">

          <Node name="Nimod-coopretive-bank-preview-main" defaultOpen>

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
                  <Node name="AboutStats.js" />
                  <Node name="AboutTimeline.js" />
                </Node>

                <Node name="contact">
                  <Node name="ContactHero.js" />
                  <Node name="ContactForm.js" />
                  <Node name="ContactMap.js" />
                </Node>

                <Node name="faq">
                  <Node name="FAQHero.js" />
                  <Node name="FAQList.js" />
                  <Node name="FAQSearch.js" />
                </Node>

                <Node name="layout">
                  <Node name="Navbar.js" />
                  <Node name="Footer.js" />
                  <Node name="MobileMenu.js" />
                </Node>

                <Node name="projects">
                  <Node name="ProjectsHero.js" />
                  <Node name="ProjectsGrid.js" />
                  <Node name="ProjectsCTA.js" />
                </Node>

                <Node name="sections">
                  <Node name="Hero.js" />
                  <Node name="About.js" />
                  <Node name="Services.js" />
                  <Node name="Projects.js" />
                  <Node name="Contact.js" />
                </Node>

                <Node name="services">
                  <Node name="ServicesHero.js" />
                  <Node name="ServicesGrid.js" />
                  <Node name="ServicesProcess.js" />
                </Node>

                <Node name="ui">
                  <Node name="ThemeToggle.js" />
                  <Node name="PremiumLoader.js" />
                  <Node name="BackgroundGradient.js" />
                </Node>

              </Node>

              <Node name="data">
                <Node name="faqData.js" />
              </Node>

              <Node name="lib">
                <Node name="utils.js" />
              </Node>

              <Node name="providers">
                <Node name="ThemeProvider.js" />
              </Node>

            </Node>

            <Node name="jsconfig.json" />
            <Node name="next.config.mjs" />
            <Node name="package.json" />
            <Node name="postcss.config.js" />
            <Node name="tailwind.config.js" />

          </Node>

        </div>
      </div>
    </section>
  );
}