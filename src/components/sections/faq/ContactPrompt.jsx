// src/components/faq/ContactPrompt.jsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPrompt() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="bg-white dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
            Still Have A Question?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Every business is different. If your question is not covered here, we'd be happy to discuss it.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}