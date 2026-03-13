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
      px-4 pt-32 pb-28
      bg-gradient-to-b
      from-transparent
      via-white
      to-white
      dark:via-neutral-950
      dark:to-neutral-950
    "
    >

      {/* ===== Top transition blend (Hero → About) ===== */}

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white dark:to-neutral-950 pointer-events-none" />

      {/* ===== Ambient mesh glow ===== */}

      <div className="absolute inset-0 pointer-events-none">

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

        {/* center ambient glow */}

        <div
          className="
          absolute left-1/2 top-40
          -translate-x-1/2
          w-[520px] h-[520px]
          rounded-full
          bg-gradient-to-r
          from-blue-400/15
          via-purple-400/15
          to-indigo-400/15
          blur-3xl
        "
        />

      </div>

      {/* ===== subtle grid depth ===== */}

      <div
        className="
        absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:44px_44px]
        dark:opacity-[0.05]
      "
      />

      {/* ===== Content ===== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Brand intro */}

        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.8 }}
          viewport={{ once:true }}
          className="text-center max-w-2xl mx-auto"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">
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

        {/* ===== Glass feature cards ===== */}

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
                border border-white/20
                dark:border-white/10
                bg-white/40
                dark:bg-white/5
                backdrop-blur-xl
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_60px_rgba(0,0,0,0.12)]
              "
              >

                {/* glass highlight */}

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                {/* icon */}

                <div
                  className="
                  mb-4
                  flex h-11 w-11 items-center justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-500/20
                  to-purple-500/20
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

      {/* ===== bottom fade ===== */}

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
