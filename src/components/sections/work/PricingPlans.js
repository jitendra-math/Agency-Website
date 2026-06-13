// src/components/sections/work/PricingPlans.js

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

const plans = [
  {
    id: "foundation",
    name: "Foundation",
    description:
      "For businesses establishing a professional digital presence with clarity and confidence.",
    features: [
      "Professionally crafted website experience",
      "Responsive design across all devices",
      "Performance-focused development",
      "Built with future growth in mind",
    ],
    price: "Starting from ₹15,000",
    cta: "Explore Foundation",
    ctaLink: "https://client.jssoriginals.in/start?plan=foundation",
  },
  {
    id: "momentum",
    name: "Momentum",
    description:
      "For growing businesses seeking stronger visibility, trust, and digital performance.",
    features: [
      "Strategic website architecture",
      "SEO-conscious foundations",
      "Enhanced performance optimization",
      "Designed to support business growth",
    ],
    price: "Starting from ₹35,000",
    cta: "Discuss Your Goals",
    ctaLink: "https://wa.me/919549626202",
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "signature",
    name: "Signature",
    description:
      "For ambitious brands seeking a fully tailored digital experience aligned with their vision.",
    features: [
      "Fully bespoke design experience",
      "Strategic brand alignment",
      "Advanced performance engineering",
      "Tailored growth-focused solutions",
    ],
    price: "Tailored Investment",
    cta: "Request a Consultation",
    ctaLink: "https://client.jssoriginals.in/start?plan=signature",
  },
];

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

export default function PricingPlans() {
  const smoothEase = [0.16, 1, 0.3, 1];
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      className="
        relative isolate overflow-hidden
        px-6 pt-16 pb-16
        bg-[#fafafa] dark:bg-[#050505]
        transition-colors duration-500
      "
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[10%]
            w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-blue-300/30 dark:bg-indigo-900/20
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[10%]
            w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px]
            rounded-full
            bg-cyan-200/40 dark:bg-cyan-900/15
            blur-[90px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[70vw] h-[70vw] sm:w-[400px] sm:h-[400px]
            rounded-full
            bg-purple-200/30 dark:bg-violet-900/15
            blur-[100px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      <div
        className="
        absolute inset-0 -z-20
        opacity-[0.03] dark:opacity-[0.05]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:48px_48px] sm:bg-[size:64px_64px]
        [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]
      "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">
            Investment
          </p>

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold tracking-tighter
              text-neutral-900 dark:text-white
              leading-[1.1]
            "
          >
            Investment in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm">
              Long-Term Growth.
            </span>
          </h2>

          <p
            className="
              mt-4 text-[14px] sm:text-base leading-relaxed
              text-neutral-600 dark:text-neutral-400
              font-medium max-w-2xl mx-auto
            "
          >
            Every engagement is thoughtfully tailored to the unique goals,
            challenges, and ambitions of your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 1,
                  ease: smoothEase,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`
                  group relative flex flex-col
                  rounded-3xl p-8
                  backdrop-blur-2xl
                  transition-all duration-700 ease-out
                  hover:-translate-y-1
                  ${
                    plan.highlight
                      ? "bg-white/40 dark:bg-white/[0.04] ring-2 ring-blue-500/30 dark:ring-blue-400/30 shadow-xl shadow-blue-500/5"
                      : "bg-white/30 dark:bg-white/[0.02] ring-1 ring-inset ring-black/5 dark:ring-white/10"
                  }
                `}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-2xl font-semibold text-neutral-900 dark:text-white">
                  {plan.price}
                </p>

                <div className="mt-8">
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      block w-full text-center
                      px-6 py-3 rounded-full
                      font-medium transition-all duration-300
                      ${
                        plan.highlight
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]"
                          : "bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-white dark:hover:bg-white/20 hover:scale-[1.02]"
                      }
                    `}
                  >
                    {plan.cta}
                  </a>
                </div>

                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-full" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xs text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
            Every project is tailored to the specific needs of your business.
            Final investment may vary based on scope, complexity, and
            objectives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: smoothEase }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Answers to common questions about our process and approach.
            </p>
          </div>

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
        </motion.div>
      </div>
    </section>
  );
}