// src/components/sections/ProjectsPreview.js

"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ProjectsPreview() {
  // Ultra-smooth cinematic Apple-style easing
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative isolate overflow-hidden px-6 pt-24 pb-32 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500">
      
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (Cinematic Slow) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Indigo */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-5%] w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px] rounded-full bg-indigo-300/20 dark:bg-indigo-900/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />

        {/* Glow 2 - Cyan */}
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px] rounded-full bg-cyan-200/20 dark:bg-cyan-900/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* ===================================== */}
      {/* SUBTLE GRID DEPTH */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ===================================== */}
        {/* SECTION HEADER */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6">
            Selected Work
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
            Projects shaping <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              digital identity.
            </span>
          </h2>

          <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl mx-auto">
            A selection of digital platforms and experimental web projects developed as part of JSS Originals.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* PROJECTS GRID (BENTO STYLE) */}
        {/* ===================================== */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 1.5, ease: smoothEase }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* ===================================== */}
        {/* CALL TO ACTION */}
        {/* ===================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 flex justify-center"
        >
          <Link href="/projects">
            <Button variant="secondary" size="lg">
              View All Projects
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
