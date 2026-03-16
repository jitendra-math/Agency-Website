// src/components/sections/nimod/NimodOverview.js

"use client";

import { motion } from "framer-motion";
import nimodProject from "@/data/nimodProject";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function NimodOverview() {
  const { client, details } = nimodProject;

  return (
    <section
      className="
      relative px-4 py-24
      bg-white
      dark:bg-neutral-950
      "
    >
      <div className="mx-auto max-w-5xl">

        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Project Overview
          </p>

          <h2
            className="
            mt-4
            text-3xl sm:text-4xl
            font-semibold
            tracking-tight
            text-neutral-900
            dark:text-neutral-100
            "
          >
            A Digital Platform for a Rural Cooperative
          </h2>

          <p
            className="
            mt-6
            text-base leading-relaxed
            text-neutral-600
            dark:text-neutral-400
            "
          >
            This project focused on building a modern digital presence
            for a cooperative society serving local farmers and rural
            families. The goal was to present services, initiatives,
            and financial support programs in a simple and accessible
            format for the community.
          </p>
        </motion.div>

        {/* details grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
          mt-16
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          "
        >

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Client
            </p>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {client.name}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Project Type
            </p>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {details.projectType}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Role
            </p>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {details.role}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Year
            </p>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {details.year}
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}