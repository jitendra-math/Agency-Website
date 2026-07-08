// src/components/sections/contact/ContactFAQ.jsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer hosting?",
    answer: "Yes. Hosting can be arranged separately depending on project requirements.",
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes. Ongoing support and maintenance plans are available after launch.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We work remotely with clients from different countries.",
  },
  {
    question: "How long does a project take?",
    answer: "Timelines vary depending on project scope, complexity and client feedback cycles.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. We can improve the design, performance and user experience of existing websites.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const smoothEase = [0.16, 1, 0.3, 1];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-16 sm:py-20 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[10%] w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-300/30 dark:bg-indigo-900/20 blur-[80px] sm:blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[10%] w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px] rounded-full bg-cyan-200/40 dark:bg-cyan-900/15 blur-[90px] sm:blur-[130px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-200/30 dark:bg-violet-900/15 blur-[100px] sm:blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            Questions We Often Receive
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: smoothEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-2xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm border border-black/5 dark:border-white/10 overflow-hidden transition-colors duration-200 hover:border-blue-500/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-black dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 text-neutral-500 transition-transform duration-300 ${ isOpen ? "rotate-180" : "" }"
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out ${ isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0" }"
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}