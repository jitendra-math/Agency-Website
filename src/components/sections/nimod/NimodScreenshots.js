// src/components/sections/nimod/NimodScreenshots.js
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NimodScreenshots() {

  const items = [
    {
      src: "/assets/images/projects/nimod/light-mode.jpg",
      label: "Light Mode",
    },
    {
      src: "/assets/images/projects/nimod/dark-mode.jpg",
      label: "Dark Mode",
    },
  ];

  return (
    <section className="relative px-6 py-28 bg-[#fafafa] overflow-hidden">

      {/* soft glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vw] max-w-[500px] rounded-full bg-emerald-300/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* header */}
        <div className="text-center max-w-2xl">
          <div className="inline-flex px-4 py-1 rounded-full border bg-white text-xs font-semibold tracking-widest text-emerald-600 mb-6">
            Interface
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            Seamless Interface
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">
              Design
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-500">
            A clean mobile-first interface designed for accessibility
            and ease of use for rural communities.
          </p>
        </div>

        {/* mobile screenshots */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >

              {/* phone frame */}
              <div className="relative w-[240px] sm:w-[260px] rounded-[2.2rem] bg-white p-3 shadow-xl ring-1 ring-black/5">

                <div className="relative w-full aspect-[9/19] rounded-[1.6rem] overflow-hidden">

                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="260px"
                    className="object-cover"
                  />

                </div>

              </div>

              {/* label */}
              <span className="mt-4 text-sm font-semibold text-neutral-600">
                {item.label}
              </span>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}