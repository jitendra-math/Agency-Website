// src/components/sections/contact/ContactFAQ.jsx

"use client";

import { useState } from "react";
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-neutral-950/90 px-4 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white mt-2">
            Questions We Often Receive
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/70 overflow-hidden transition-colors duration-200 hover:border-neutral-300 dark:hover:border-neutral-700"
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
                    className={`flex-shrink-0 text-neutral-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}