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
      bg-gradient-to-b
      from-neutral-100
      via-white
      to-white
      dark:from-neutral-950
      dark:via-neutral-950
      dark:to-neutral-950
    "
    >

      {/* ========================= */}
      {/* Mesh Glow Continuation */}
      {/* ========================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* blue mesh */}
        <motion.div
          animate={{ x:[0,30,0], y:[0,-40,0] }}
          transition={{ duration:14, repeat:Infinity }}
          className="
          absolute -top-40 -left-40
          w-[420px] h-[420px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
        />

        {/* purple mesh */}
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

      </div>

      {/* ========================= */}
      {/* Subtle grid depth */}
      {/* ========================= */}

      <div
        className="
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:44px_44px]
        dark:opacity-[0.05]
      "
      />

      {/* ========================= */}
      {/* Content */}
      {/* ========================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Brand intro */}

        <motion.div
          initial={{ opacity:0, y:28 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
          className="text-center max-w-2xl mx-auto"
        >

          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
            About JSS Originals
          </p>

          <h2
            className="
            text-3xl font-semibold tracking-tight
            text-neutral-900
            dark:text-neutral-100
          "
          >
            Building systems that shape
            digital identity on the web
          </h2>

          <p
            className="
            mt-6 text-sm leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
          >
            JSS Originals develops scalable web platforms,
            experimental knowledge systems, and SEO identity
            architectures designed to create strong long-term
            presence across the internet.
          </p>

        </motion.div>

        {/* ========================= */}
        {/* Feature cards */}
        {/* ========================= */}

        <div className="mt-16 grid gap-6">

          {items.map((item,index)=>{

            const Icon = item.icon;

            return(

              <motion.div
                key={item.title}
                initial={{ opacity:0, y:24 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:index*.15, duration:.7 }}
                viewport={{ once:true }}
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

                <div
                  className="
                  mb-4
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-blue-100
                  dark:bg-blue-900/40
                "
                >
                  <Icon size={20}/>
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

      {/* ========================= */}
      {/* Bottom fade */}
      {/* ========================= */}

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
