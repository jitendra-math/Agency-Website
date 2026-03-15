// src/components/sections/ContactCTA.js (Optimized)

"use client";

import { motion } from "framer-motion";
import ShineButton from "@/components/ui/ShineButton";
import Link from "next/link";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function ContactCTA() {
  // Ultra-smooth cinematic Apple-style easing (only for content animations)
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500">
      
      {/* ===================================== */}
      {/* RICH AMBIENT GLOWS (GPU Accelerated) */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Glow 1 - Blue (CSS animated - exact motion) */}
        <div
          className="absolute top-[20%] right-[-10%] w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px] rounded-full bg-blue-300/20 dark:bg-indigo-900/15 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-float-contact-1 will-change-transform"
        />
        {/* Glow 2 - Cyan (CSS animated - exact motion) */}
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px] rounded-full bg-cyan-200/30 dark:bg-cyan-900/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-float-contact-2 will-change-transform"
        />
      </div>

      {/* ===================================== */}
      {/* SUBTLE GRID DEPTH */}
      {/* ===================================== */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* ===================================== */}
          {/* LEFT: CONTENT & DIRECT CONTACT CARDS */}
          {/* ===================================== */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: smoothEase }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
                Have an idea <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
                  worth building?
                </span>
              </h2>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium max-w-md">
                Whether it's a web platform or an experimental idea — let's collaborate and shape it into a reality.
              </p>
            </motion.div>

            {/* Contact Information Cards (WhatsApp & Email) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: smoothEase }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full"
            >
              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/919549626202" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] ring-1 ring-inset ring-black/5 dark:ring-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-white/60 dark:hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">WhatsApp</p>
                  <p className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">+91 95496 26202</p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:contact@jssoriginals.in"
                className="group flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] ring-1 ring-inset ring-black/5 dark:ring-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-white/60 dark:hover:bg-white/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Email Us</p>
                  <p className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100">contact@jssoriginals.in</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* ===================================== */}
          {/* RIGHT: SLEEK GLASSMORPHIC FORM */}
          {/* ===================================== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: smoothEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            <form className="flex flex-col gap-4 p-6 sm:p-8 rounded-[2rem] bg-white/30 dark:bg-white/[0.01] ring-1 ring-inset ring-black/5 dark:ring-white/10 backdrop-blur-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.02)]">
              
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Send a Message</h3>

              {/* Input: Name */}
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-neutral-900/40 ring-1 ring-inset ring-black/5 dark:ring-white/10 outline-none text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Input: Email */}
              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-neutral-900/40 ring-1 ring-inset ring-black/5 dark:ring-white/10 outline-none text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Input: Message */}
              <div className="relative group">
                <textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  rows="4"
                  className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-neutral-900/40 ring-1 ring-inset ring-black/5 dark:ring-white/10 outline-none text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <ShineButton size="lg" className="w-full flex justify-center shadow-lg shadow-blue-500/20">
                  <span>Send Message</span>
                  <Send size={18} className="ml-2" />
                </ShineButton>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}