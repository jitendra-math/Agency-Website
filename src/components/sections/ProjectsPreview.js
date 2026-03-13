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
      relative isolate overflow-hidden
      px-4 pt-28 pb-32
      bg-gradient-to-b
      from-white
      via-neutral-50
      to-white
      dark:from-neutral-950
      dark:via-neutral-950
      dark:to-neutral-950
    "
    >

      {/* ===== ambient glow continuation ===== */}

      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{ x:[0,30,0], y:[0,-40,0] }}
          transition={{ duration:16, repeat:Infinity }}
          className="
          absolute -top-40 -left-40
          w-[420px] h-[420px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
        />

        <motion.div
          animate={{ x:[0,-20,0], y:[0,40,0] }}
          transition={{ duration:18, repeat:Infinity }}
          className="
          absolute -bottom-40 -right-40
          w-[420px] h-[420px]
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
        />

        {/* center spotlight */}

        <div
          className="
          absolute left-1/2 top-40
          -translate-x-1/2
          w-[520px] h-[520px]
          rounded-full
          bg-gradient-to-r
          from-blue-400/15
          via-indigo-400/15
          to-purple-400/15
          blur-3xl
        "
        />

      </div>

      {/* ===== grid depth texture ===== */}

      <div
        className="
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:44px_44px]
        dark:opacity-[0.05]
      "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ===== Section Header ===== */}

        <motion.div
          initial={{ opacity:0, y:28 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
          className="text-center max-w-xl mx-auto"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">
            Selected Work
          </p>

          <h2
            className="
            text-3xl font-semibold tracking-tight
            text-neutral-900
            dark:text-neutral-100
          "
          >
            Projects shaping
            digital identity
          </h2>

          <p
            className="
            mt-6 text-sm leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
          >
            A selection of digital platforms and experimental
            web projects developed as part of JSS Originals.
          </p>

        </motion.div>

        {/* ===== Projects Grid ===== */}

        <div className="mt-16 grid gap-6">

          {projects.map((project,index)=>(
            <motion.div
              key={project.id}
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay:index*.15, duration:.7 }}
              viewport={{ once:true }}
              className="
              relative
              rounded-2xl
              border border-white/20
              dark:border-white/10
              bg-white/40
              dark:bg-white/5
              backdrop-blur-xl
              p-1
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_16px_60px_rgba(0,0,0,0.12)]
            "
            >

              {/* glass highlight */}

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none"/>

              <ProjectCard project={project}/>

            </motion.div>
          ))}

        </div>

        {/* ===== CTA ===== */}

        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:.3, duration:.6 }}
          viewport={{ once:true }}
          className="mt-16 flex justify-center"
        >
          <Link href="/projects">
            <Button variant="secondary" size="lg">
              View All Projects
            </Button>
          </Link>
        </motion.div>

      </div>

      {/* ===== bottom transition ===== */}

      <div
        className="
        absolute bottom-0 left-0 right-0
        h-28
        bg-gradient-to-b
        from-transparent
        to-white
        dark:to-neutral-950
      "
      />

    </section>
  );
}
