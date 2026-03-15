// src/components/layout/Footer.js (Optimized)

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  // Cinematic slow easing
  const smoothEase = [0.16, 1, 0.3, 1];

  // The official network mapped out cleanly
  const ecosystem = [
    { name: "jssoriginals.in", url: "https://jssoriginals.in" },
    { name: "jssoriginals.online", url: "https://jssoriginals.online" },
    { name: "jssoriginals.info", url: "https://jssoriginals.info" },
    { name: "jitendrasingh.online", url: "https://jitendrasingh.online" },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#fafafa] dark:bg-[#050505] pt-24 pb-12 transition-colors duration-500">
      
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (GPU Accelerated) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Deep Indigo rising from bottom (CSS animated) */}
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[80vw] sm:w-[600px] h-[80vw] sm:h-[600px] rounded-full bg-indigo-300/20 dark:bg-indigo-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float-slow-xy will-change-transform"
        />

        {/* Glow 2 - Cyan sweeping from top right (CSS animated) */}
        <div
          className="absolute top-[-10%] right-[-10%] w-[90vw] sm:w-[500px] h-[90vw] sm:h-[500px] rounded-full bg-cyan-200/20 dark:bg-cyan-900/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float-slower-xy will-change-transform"
        />
      </div>

      {/* ===================================== */}
      {/* SUBTLE GRID DEPTH */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Top subtle border fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* 1. Brand Identity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: smoothEase }}
            viewport={{ once: true }}
            className="flex flex-col max-w-xs"
          >
            {/* Using your favorite Rich Gradient here */}
            <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              JSS Originals
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              A digital projects lab building modern web platforms, SEO identity systems, and experimental internet initiatives.
            </p>
          </motion.div>

          {/* 2. Digital Ecosystem */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.1, ease: smoothEase }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-100 mb-6">
              Digital Ecosystem
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              {ecosystem.map((site) => (
                <li key={site.name}>
                  <a 
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {site.name}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Direct Connect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: smoothEase }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-100 mb-6">
              Connect
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a 
                  href="https://wa.me/919549626202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@jssoriginals.in"
                  className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  contact@jssoriginals.in
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 4. The Founder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: smoothEase }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-100 mb-6">
              Founder & Developer
            </h3>
            <div className="text-sm flex flex-col gap-4 text-neutral-500 dark:text-neutral-400">
              <p>
                Built by <span className="font-medium text-neutral-800 dark:text-neutral-200">Jitendra Singh</span>, Full Stack Developer. <br />
                Based in Rajasthan, India.
              </p>
              <a 
                href="https://jitubanna.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-neutral-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                jitubanna.com
                <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <a 
                href="mailto:me@jitubanna.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                me@jitubanna.com
              </a>
            </div>
          </motion.div>

        </div>

        {/* ===================================== */}
        {/* BOTTOM SECTION & MEGA WATERMARK */}
        {/* ===================================== */}
        <div className="relative pt-8 flex flex-col items-center justify-center border-t border-neutral-200/50 dark:border-neutral-800/50">
          
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-500 dark:text-neutral-500 mb-8 z-10">
            <p>© {year} JSS Originals. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* The Mega Text - Fading into the background */}
          <div className="w-full overflow-hidden select-none flex justify-center mt-4 pointer-events-none">
            <h1 className="text-[14vw] sm:text-[12vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-transparent dark:from-neutral-800 dark:to-transparent leading-none opacity-80">
              JSS ORIGINALS
            </h1>
          </div>

        </div>
      </div>
    </footer>
  );
}