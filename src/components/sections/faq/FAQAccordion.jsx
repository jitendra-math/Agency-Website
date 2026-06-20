// src/components/faq/FAQAccordion.jsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = {
  "getting-started": [
    {
      question: "How do I start a project?",
      answer:
        "Simply reach out through our contact form or WhatsApp. We'll schedule a conversation to understand your goals and discuss the best approach.",
    },
    {
      question: "What information do you need?",
      answer:
        "We typically ask about your business goals, target audience, desired features, timeline expectations, and any existing brand assets.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Absolutely. We work with businesses of all sizes, from startups to established brands, tailoring our approach to meet their specific needs.",
    },
    {
      question: "Do you work internationally?",
      answer:
        "Yes, we work remotely with clients from around the world. Our processes are designed for seamless collaboration across time zones.",
    },
  ],
  "pricing-payments": [
    {
      question: "How much does a website cost?",
      answer:
        "Investment varies based on project complexity and requirements. Our packages start from ₹15,000, with custom solutions available for more complex needs.",
    },
    {
      question: "Why are prices 'starting from'?",
      answer:
        "Every project is unique. The starting price reflects our entry-level engagement, with custom features and additional scope quoted separately.",
    },
    {
      question: "How much advance is required?",
      answer:
        "Projects generally begin after an agreed advance payment is received and confirmed, which secures production scheduling and capacity.",
    },
    {
      question: "Are domain and hosting included?",
      answer:
        "We can assist with setup and recommendations, but hosting and domain costs are typically managed separately unless specifically included.",
    },
  ],
  "development-process": [
    {
      question: "How long does a project take?",
      answer:
        "Timelines depend on project scope and complexity. Simple websites typically take 2–4 weeks, while more complex projects may require longer.",
    },
    {
      question: "Will I be involved during development?",
      answer:
        "Yes. We provide regular updates, share progress, and seek feedback at key milestones to ensure the project stays aligned with your vision.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "The number of revisions is specified in your proposal. Additional revisions beyond the agreed scope may be billed separately.",
    },
    {
      question: "What happens if I delay feedback?",
      answer:
        "Extended delays may affect project timelines. We'll work with you to keep things moving, but significant inactivity may result in project pausing.",
    },
  ],
  "ownership-rights": [
    {
      question: "Who owns the website?",
      answer:
        "Full ownership of the final deliverables transfers to you after all payments have been cleared.",
    },
    {
      question: "Do I get the source code?",
      answer:
        "Yes. You receive full access to the source code and all project files upon completion and final payment.",
    },
    {
      question: "Can I move the website elsewhere later?",
      answer:
        "Absolutely. You are free to migrate your website to any platform or hosting provider of your choice.",
    },
    {
      question: "Will you showcase my project in your portfolio?",
      answer:
        "We typically showcase completed projects in our portfolio unless a non-disclosure agreement is signed or otherwise agreed in writing.",
    },
  ],
  "support-maintenance": [
    {
      question: "Do you offer support after launch?",
      answer:
        "Yes. We provide a complimentary bug-fixing period after launch, with ongoing maintenance and support options available.",
    },
    {
      question: "Do you offer maintenance?",
      answer:
        "Yes. We offer flexible maintenance plans to keep your website updated, secure, and performing optimally.",
    },
    {
      question: "What happens if I find a bug?",
      answer:
        "Bugs identified within the warranty period are addressed at no additional cost. Beyond that, we can assist on a case-by-case basis.",
    },
    {
      question: "Can I request updates later?",
      answer:
        "Yes. We provide ongoing support for feature updates, content changes, and enhancements through our maintenance plans.",
    },
  ],
  "technical-questions": [
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. Every project is built using a mobile-first approach to ensure a seamless experience across all devices.",
    },
    {
      question: "Will it be SEO-ready?",
      answer:
        "Yes. Our development process includes SEO foundations, including proper metadata, site structure, and performance optimisation.",
    },
    {
      question: "Can you integrate third-party tools?",
      answer:
        "Yes. We can integrate with a wide range of third-party platforms, including CRMs, marketing tools, payment gateways, and analytics.",
    },
    {
      question: "Can you build custom functionality?",
      answer:
        "Yes. Custom features and advanced functionality can be developed based on your specific business requirements.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes. We can improve the design, performance, and user experience of existing websites while preserving your brand identity.",
    },
  ],
};

export default function FAQAccordion({ activeCategory }) {
  const [openIndex, setOpenIndex] = useState(null);
  const smoothEase = [0.16, 1, 0.3, 1];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Determine which questions to show
  const getQuestions = () => {
    if (activeCategory === "all") {
      // Show all questions from all categories
      const allQuestions = [];
      Object.values(faqData).forEach((categoryQuestions) => {
        categoryQuestions.forEach((q) => {
          allQuestions.push(q);
        });
      });
      return allQuestions;
    }
    return faqData[activeCategory] || [];
  };

  const questions = getQuestions();

  if (questions.length === 0) {
    return (
      <section className="bg-[#fafafa] dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            No questions available for this category.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#fafafa] dark:bg-[#050505] px-6 py-16 sm:py-20 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          {questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: smoothEase }}
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}