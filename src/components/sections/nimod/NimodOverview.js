// src/components/sections/nimod/NimodOverview.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

export default function NimodOverview() {

  const client = nimodProject?.client || {};
  const details = nimodProject?.details || {};

  return (
    <section className="relative px-6 py-32 bg-[#fafafa] dark:bg-[#050505] transition-colors overflow-hidden">

      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vw] max-w-[520px] rounded-full bg-emerald-300/20 dark:bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* header */}
        <div className="text-center max-w-3xl">

          <div className="inline-flex px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 mb-6">
            Project Overview
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
            A Digital Platform for a
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-500 dark:from-emerald-400 dark:to-cyan-300">
              Rural Cooperative
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-500 dark:text-neutral-400">
            This project focused on building a modern digital presence for a
            cooperative society serving farmers and rural families.
          </p>

        </div>


        {/* BENTO GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

          {/* CLIENT CARD (large) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
            sm:col-span-2
            rounded-[2rem]
            bg-white/70 dark:bg-white/[0.03]
            backdrop-blur-xl
            ring-1 ring-black/5 dark:ring-white/10
            p-8
            hover:shadow-[0_30px_60px_-10px_rgba(16,185,129,0.12)]
            transition-all
            "
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-3">
              Client
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              {client?.name || "Nimod Society"}
            </h3>

            <p className="mt-3 text-neutral-500 dark:text-neutral-400">
              {client?.location || "Rajasthan, India"}
            </p>

          </motion.div>


          {/* YEAR */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
            rounded-[2rem]
            bg-white/70 dark:bg-white/[0.03]
            backdrop-blur-xl
            ring-1 ring-black/5 dark:ring-white/10
            p-8
            flex flex-col justify-center
            "
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-3">
              Year
            </p>

            <p className="text-2xl font-bold text-neutral-900 dark:text-white">
              {details?.year || "2024"}
            </p>

          </motion.div>


          {/* PROJECT TYPE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
            rounded-[2rem]
            bg-white/70 dark:bg-white/[0.03]
            backdrop-blur-xl
            ring-1 ring-black/5 dark:ring-white/10
            p-8
            "
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-3">
              Project Type
            </p>

            <p className="text-lg font-semibold text-neutral-900 dark:text-white">
              {details?.projectType || "Web Platform"}
            </p>

          </motion.div>


          {/* ROLE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
            rounded-[2rem]
            bg-white/70 dark:bg-white/[0.03]
            backdrop-blur-xl
            ring-1 ring-black/5 dark:ring-white/10
            p-8
            "
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-3">
              Role
            </p>

            <p className="text-lg font-semibold text-neutral-900 dark:text-white">
              {details?.role || "Design & Development"}
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}