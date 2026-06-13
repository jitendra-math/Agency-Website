// src/components/layout/Footer.js

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <footer className="relative isolate overflow-hidden bg-[#fafafa] dark:bg-[#050505] pt-16 pb-8 transition-colors duration-500">
      
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[80vw] sm:w-[600px] h-[80vw] sm:h-[600px] rounded-full bg-indigo-300/20 dark:bg-indigo-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float-slow-xy will-change-transform"
        />
        <div
          className="absolute top-[-10%] right-[-10%] w-[90vw] sm:w-[500px] h-[90vw] sm:h-[500px] rounded-full bg-cyan-200/20 dark:bg-cyan-900/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float-slower-xy will-change-transform"
        />
      </div>

      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: smoothEase }}
            viewport={{ once: true }}
            className="flex flex-col max-w-xs"
          >
            <h2 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              JSS Originals
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              JSS Originals creates thoughtful digital experiences designed to strengthen trust, elevate brands, and support long-term business growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.1, ease: smoothEase }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-100 mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link href="/" className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: smoothEase }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-100 mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="text-neutral-500 dark:text-neutral-400">Website Development</li>
              <li className="text-neutral-500 dark:text-neutral-400">SEO Foundations</li>
              <li className="text-neutral-500 dark:text-neutral-400">Performance Optimization</li>
              <li className="text-neutral-500 dark:text-neutral-400">Digital Strategy</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: smoothEase }}
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
                  className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-1"
                >
                  WhatsApp
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
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
              <li className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
                <MapPin size={14} />
                Rajasthan, India
              </li>
            </ul>
          </motion.div>

        </div>

        <div className="relative pt-8 flex flex-col items-center justify-center border-t border-neutral-200/50 dark:border-neutral-800/50">
          
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-neutral-400 dark:text-neutral-500 mb-4 z-10">
            <p>© {year} JSS Originals. All rights reserved.</p>
            <p className="text-center">Designed for businesses that think long-term.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="text-center text-[10px] text-neutral-400 dark:text-neutral-500 mb-3">
            Crafted with care by Jitendra Singh.
          </div>

          <div className="w-full overflow-hidden select-none flex justify-center mt-2 pointer-events-none">
            <h1 className="text-[14vw] sm:text-[12vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-transparent dark:from-neutral-800 dark:to-transparent leading-none opacity-80">
              JSS ORIGINALS
            </h1>
          </div>

        </div>
      </div>
    </footer>
  );
}