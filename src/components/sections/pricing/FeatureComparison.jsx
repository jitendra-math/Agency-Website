// src/components/sections/pricing/FeatureComparison.jsx

"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = {
  features: [
    { label: "Responsive Design", foundation: true, momentum: true, signature: true },
    { label: "Performance Optimisation", foundation: true, momentum: true, signature: true },
    { label: "SEO Foundations", foundation: true, momentum: true, signature: true },
    { label: "Custom Design", foundation: false, momentum: true, signature: true },
    { label: "Analytics Setup", foundation: false, momentum: true, signature: true },
    { label: "CMS Integration", foundation: false, momentum: true, signature: true },
    { label: "Advanced Functionality", foundation: false, momentum: false, signature: true },
    { label: "Priority Support", foundation: false, momentum: false, signature: true },
    { label: "Custom Integrations", foundation: false, momentum: false, signature: true },
  ],
};

export default function FeatureComparison() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="relative isolate overflow-hidden px-6 py-16 sm:py-20 bg-white dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[-5%] sm:top-[25%] sm:left-[10%] w-[70vw] h-[70vw] sm:w-[450px] sm:h-[450px] rounded-full bg-blue-200/20 dark:bg-indigo-900/12 blur-[100px] sm:blur-[140px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[-5%] sm:bottom-[25%] sm:right-[10%] w-[75vw] h-[75vw] sm:w-[500px] sm:h-[500px] rounded-full bg-cyan-200/25 dark:bg-cyan-900/10 blur-[100px] sm:blur-[140px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.02] dark:opacity-[0.04] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)]"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
          >
            Compare Options
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: smoothEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]"
          >
            Compare Your Options
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-2xl mx-auto"
          >
            Choose the engagement level that best aligns with your business goals.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="overflow-x-auto rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200/70 dark:border-neutral-800/70">
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400">
                  Feature
                </th>
                <th className="px-4 sm:px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400">
                  Foundation
                </th>
                <th className="px-4 sm:px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 dark:text-blue-400">
                  Momentum
                </th>
                <th className="px-4 sm:px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400">
                  Signature
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.features.map((feature, idx) => (
                <tr
                  key={idx}
                  className="border-b border-neutral-200/50 dark:border-neutral-800/50 ${idx % 2 === 0 ? "bg-neutral-50/50 dark:bg-white/[0.02]" : ""} transition-colors duration-200 hover:bg-neutral-100/50 dark:hover:bg-white/[0.04]"
                >
                  <td className="px-4 sm:px-6 py-3.5 text-sm font-medium text-black dark:text-white">
                    {feature.label}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 text-center">
                    {feature.foundation ? (
                      <Check size={18} className="inline text-blue-600 dark:text-blue-400" />
                    ) : (
                      <X size={16} className="inline text-neutral-400 dark:text-neutral-600" />
                    )}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 text-center">
                    {feature.momentum ? (
                      <Check size={18} className="inline text-blue-600 dark:text-blue-400" />
                    ) : (
                      <X size={16} className="inline text-neutral-400 dark:text-neutral-600" />
                    )}
                  </td>
                  <td className="px-4 sm:px-6 py-3.5 text-center">
                    {feature.signature ? (
                      <Check size={18} className="inline text-blue-600 dark:text-blue-400" />
                    ) : (
                      <X size={16} className="inline text-neutral-400 dark:text-neutral-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-xs text-neutral-500 dark:text-neutral-500 text-center mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Every project is tailored to the specific needs of your business. Final investment may vary depending on scope, complexity and objectives.
        </motion.p>
      </div>
    </section>
  );
}