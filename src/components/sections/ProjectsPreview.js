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
        px-4 py-16
        bg-neutral-50
        dark:bg-neutral-900
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Featured Projects
          </h2>

          <p className="max-w-xl text-sm text-neutral-600 dark:text-neutral-400">
            A selection of digital projects and platforms developed as part
            of JSS Originals initiatives and collaborations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}