// src/components/sections/nimod/NimodScreenshots.js
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import nimodProject from "@/data/nimodProject";

export default function NimodScreenshots() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { screenshots } = nimodProject;

  const items = [
    {
      src: screenshots?.light || "/images/placeholder-light.jpg",
      label: "Light Mode",
    },
    {
      src: screenshots?.dark || "/images/placeholder-dark.jpg",
      label: "Dark Mode",
    },
  ];

  // Optimized variants
  const fadeUpVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 1.0 : 1.2,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 1.0 : 1.2,
          ease: "easeOut",
        },
      },
    }),
    [isMobile]
  );

  // Glow animations – simplified on mobile
  const glow1Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

  const glow2Animation = useMemo(
    () => ({
      scale: isMobile ? [1, 1.07, 1] : [1, 1.15, 1],
      opacity: isMobile ? [0.15, 0.2, 0.15] : [0.15, 0.25, 0.15],
    }),
    [isMobile]
  );

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
      {/* AMBIENT GLOWS – Optimized */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={glow1Animation}
          transition={{
            duration: isMobile ? 20 : 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform, opacity" }}
          className="
            absolute top-[20%] right-[-10%] sm:right-[10%]
            w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px]
            rounded-full
            bg-emerald-400/15 dark:bg-emerald-600/15
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={glow2Animation}
          transition={{
            duration: isMobile ? 24 : 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: "transform, opacity" }}
          className="
            absolute bottom-[-10%] left-[-10%] sm:left-[10%]
            w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px]
            rounded-full
            bg-cyan-300/15 dark:bg-teal-800/15
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Luxury Grid Texture – unchanged */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        {/* ===================================== */}
        {/* HEADER SECTION */}
        {/* ===================================== */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl flex flex-col items-center"
        >
          {/* Glassmorphic Pill */}
          <div className="mb-6 sm:mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-sm">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Interface
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
            Seamless Interface <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 drop-shadow-sm">
              Design.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-2xl">
            A modern interface designed for clarity, accessibility,
            and performance across all devices, ensuring rural users feel at home.
          </p>
        </motion.div>

        {/* ===================================== */}
        {/* IMMERSIVE SCREENSHOTS GALLERY – Optimized */}
        {/* ===================================== */}
        <div className="mt-16 sm:mt-24 w-full grid gap-8 lg:gap-12 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="
                group relative 
                rounded-[1.5rem] sm:rounded-[2.5rem]
                bg-white/40 dark:bg-white/[0.02]
                ring-1 ring-inset ring-black/5 dark:ring-white/10
                backdrop-blur-3xl
                p-2 sm:p-4
                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]
                transition-all duration-700 ease-out
                hover:-translate-y-2
                hover:shadow-[0_32px_64px_-12px_rgba(16,185,129,0.15)]
                dark:hover:shadow-[0_32px_64px_-12px_rgba(16,185,129,0.08)]
              "
            >
              <div className="relative w-full aspect-[16/10] rounded-[1rem] sm:rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 isolate ring-1 ring-inset ring-black/5 dark:ring-white/10">
                <Image
                  src={item.src}
                  alt={`Nimod PACS ${item.label}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-[1rem] sm:rounded-[2rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none z-10" />
              </div>

              <div
                className="
                absolute top-6 left-6 sm:top-10 sm:left-10 z-20
                flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-white/80 dark:bg-black/80
                backdrop-blur-md
                ring-1 ring-inset ring-black/5 dark:ring-white/10
                shadow-lg shadow-black/5
                transition-transform duration-700 ease-out
                group-hover:scale-105 group-hover:bg-white dark:group-hover:bg-neutral-900
                "
              >
                <div className={`w-2 h-2 rounded-full ${index === 0 ? "bg-amber-400" : "bg-indigo-400"} shadow-sm`} />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-900 dark:text-white">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}