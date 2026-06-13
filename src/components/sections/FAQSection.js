// src/components/sections/FAQSection.js

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "Most projects are completed within 2–6 weeks depending on scope, complexity, and feedback cycles.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We provide post-launch support and long-term partnerships to help your digital presence continue evolving.",
  },
  {
    question: "Can my website grow with my business?",
    answer:
      "Absolutely. Every project is developed with scalability and future growth in mind.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes. We collaborate with businesses at different stages, tailoring our approach to their unique needs and ambitions.",
  },
];

export default function FAQSection() {
  const smoothEase = [0.16, 1, 0.3, 1];
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      className="
        relative isolate overflow-hidden
        px-6 pt-16 pb-24
        bg-[#fafafa] dark:bg-[#050505]
        transition-colors duration-500
      "
    >
      {/* Background glows (same ambient feel, optional) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[70vw] h-[70vw] sm:w-[500px] sm:h-[500px] rounded-full bg-violet-200/30 dark:bg-violet-900/15 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Answers to common questions about our process and approach.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                bg-white/30 dark:bg-white/[0.02]
                ring-1 ring-inset ring-black/5 dark:ring-white/10
                backdrop-blur-2xl
                transition-all duration-300
              "
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-neutral-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`
                    transition-transform duration-300 text-neutral-500
                    ${openFaq === index ? "rotate-180" : ""}
                  `}
                />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 border-t border-neutral-200/50 dark:border-neutral-800/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}