// src/components/sections/ProjectsPreview.js

"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ProjectsPreview() {
  return (
    <section
      className="
      relative overflow-hidden
      px-4 py-24
      bg-gradient-to-b
      from-white
      to-neutral-100
      dark:from-neutral-950
      dark:to-neutral-900
    "
    >
      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{ x:[0,20,0], y:[0,-20,0] }}
          transition={{ duration:14, repeat:Infinity }}
          className="
          absolute -top-32 -left-32
          w-80 h-80
          rounded-full
          bg-blue-500/15
          blur-3xl
        "
        />

        <motion.div
          animate={{ x:[0,-20,0], y:[0,20,0] }}
          transition={{ duration:16, repeat:Infinity }}
          className="
          absolute -bottom-32 -right-32
          w-80 h-80
          rounded-full
          bg-purple-500/15
          blur-3xl
        "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* header */}
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="text-center max-w-xl mx-auto"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">
            Selected Work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Projects shaping digital identity
          </h2>

          <p className="mt-5 text-sm text-neutral-600 dark:text-neutral-400">
            A selection of digital platforms and experimental
            web projects developed as part of JSS Originals.
          </p>

        </motion.div>

        {/* projects */}
        <div className="mt-14 grid gap-6">

          {projects.map((project,index)=>(
            <motion.div
              key={project.id}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*.12, duration:.5 }}
              viewport={{ once:true }}
              className="
              rounded-xl
              border border-neutral-200
              dark:border-neutral-800
              bg-white/70
              dark:bg-neutral-900/60
              backdrop-blur
              p-1
              transition-all
              hover:-translate-y-1
            "
            >
              <ProjectCard project={project}/>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:.25, duration:.5 }}
          viewport={{ once:true }}
          className="mt-14 flex justify-center"
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