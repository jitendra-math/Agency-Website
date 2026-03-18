// src/components/sections/work/PricingPlans.js

"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const plans = [
  {
    id: "starter",
    name: "Starter Presence",
    desc: "For individuals and small brands starting their digital journey.",
    features: [
      "Clean, modern website",
      "Mobile-first design",
      "Fast loading performance",
    ],
    price: "Starting from ₹7,999",
  },
  {
    id: "growth",
    name: "Growth Platform",
    desc: "For businesses looking to build a strong online presence.",
    features: [
      "SEO-focused architecture",
      "Scalable system",
      "Performance optimized",
    ],
    price: "Starting from ₹15,000",
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium Identity",
    desc: "For brands that want a complete digital identity.",
    features: [
      "Full custom design system",
      "Brand structure & positioning",
      "High-performance architecture",
    ],
    price: "Custom pricing",
  },
];

export default function PricingPlans() {
  return (
    <section
      className="
      relative px-4 py-24
      bg-white dark:bg-neutral-950
    "
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Pricing
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
            Simple, transparent
            <br />
            pricing structure
          </h2>

          <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
            Every project is built uniquely based on vision, not templates.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                relative rounded-2xl p-6
                border border-neutral-200 dark:border-neutral-800
                bg-white/70 dark:bg-white/[0.03]
                backdrop-blur-xl
                transition-all duration-300
                ${plan.highlight ? "shadow-lg scale-[1.01]" : ""}
              `}
            >

              {/* highlight */}
              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 pointer-events-none" />
              )}

              <div className="relative z-10">

                {/* Title */}
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {plan.name}
                </h3>

                {/* Desc */}
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {plan.desc}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                {/* Price */}
                <p className="mt-6 text-base font-medium text-neutral-900 dark:text-neutral-100">
                  {plan.price}
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <Button
                    size="md"
                    className="w-full"
                    onClick={() =>
                      window.location.href = `https://client.jssoriginals.in/start?plan=${plan.id}`
                    }
                  >
                    Start a Project
                  </Button>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}