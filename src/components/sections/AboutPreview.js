// src/components/sections/AboutPreview.js

"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Sparkles } from "lucide-react";

export default function AboutPreview() {

  const items = [
    {
      icon: Globe,
      title: "Web Platforms",
      description:
        "Modern websites and digital platforms designed for performance, scalability, and strong online presence.",
    },
    {
      icon: Layers,
      title: "SEO Identity Systems",
      description:
        "Structured digital identity systems that strengthen search visibility and long-term web presence.",
    },
    {
      icon: Sparkles,
      title: "Experimental Projects",
      description:
        "Independent digital experiments exploring open knowledge systems and next-generation web ideas.",
    },
  ];

  return (
    <section
      className="
      relative isolate overflow-hidden
      px-4 py-28
      bg-white
      dark:bg-neutral-950
    "
    >

      {/* ============================ */}
      {/* Ambient glow background */}
      {/* ============================ */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute left-1/2 top-20
          -translate-x-1/2
          w-[520px] h-[520px]
          rounded-full
          bg-gradient-to-r
          from-blue-400/20
          via-indigo-400/20
          to-purple-400/20
          blur-3xl
        " />

      </div>

      {/* ============================ */}
      {/* Content */}
      {/* ============================ */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Brand statement */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >

          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
            About JSS Originals
          </p>

          <h2
            className="
            text-3xl font-semibold tracking-tight
            text-neutral-900
            dark:text-neutral-100
          "
          >
            A digital projects lab building
            the future of web identity
          </h2>

          <p
            className="
            mt-5 text-sm leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
          >
            JSS Originals focuses on creating powerful web platforms,
            experimental knowledge systems, and scalable SEO identity
            architectures that strengthen digital presence across the internet.
          </p>

        </motion.div>

        {/* ============================ */}
        {/* Feature grid */}
        {/* ============================ */}

        <div className="mt-16 grid gap-6">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15, duration: .7 }}
                viewport={{ once: true }}
                className="
                relative
                rounded-2xl
                border border-neutral-200
                dark:border-neutral-800
                bg-white/70
                dark:bg-neutral-900/70
                backdrop-blur
                p-6
                shadow-sm
              "
              >

                {/* icon */}

                <div className="
                  mb-4
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-blue-100
                  dark:bg-blue-900/40
                ">
                  <Icon size={20} />
                </div>

                <h3
                  className="
                  text-sm font-semibold
                  text-neutral-900
                  dark:text-neutral-100
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-2 text-xs leading-relaxed
                  text-neutral-600
                  dark:text-neutral-400
                "
                >
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

      {/* ============================ */}
      {/* Bottom transition glow */}
      {/* ============================ */}

      <div
        className="
        absolute bottom-0 left-0 right-0
        h-32
        bg-gradient-to-b
        from-transparent
        to-white
        dark:to-neutral-950
      "
      />

    </section>
  );
}
