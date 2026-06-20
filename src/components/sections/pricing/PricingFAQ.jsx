// src/components/sections/pricing/PricingFAQ.jsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why do websites start from ₹15,000?",
    answer:
      "Every project is custom-built and tailored to business goals, functionality requirements and long-term growth objectives.",
  },
  {
    question: "How much advance payment is required?",
    answer:
      "Projects generally begin after an agreed advance payment is received and confirmed.",
  },
  {
    question: "Do you provide hosting and domains?",
    answer:
      "We can assist with setup and recommendations, but hosting and domain costs are typically managed separately.",
  },
  {
    question: "How long does development take?",
    answer:
      "Timelines depend on project complexity, scope and content readiness.",
  },
  {
    question: "Can I request custom functionality?",
    answer:
      "Yes. Custom features and advanced requirements can be quoted separately.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. Ongoing maintenance and support options are available after launch.",
  },
  {
    question: "Will my website be mobile friendly?",
    answer:
      "Absolutely. Every project is built using a mobile-first approach.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Every project includes SEO foundations, with additional optimisation available where required.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            Questions We Often Receive.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know before starting a project with JSS Originals.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
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