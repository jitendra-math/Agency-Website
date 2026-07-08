// src/components/sections/pricing/PricingPackages.jsx

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    id: "foundation",
    name: "Foundation",
    description: "For businesses establishing a professional digital presence.",
    price: "Starting From ₹15,000",
    features: [
      "Responsive Website",
      "Mobile Optimised",
      "Performance Focused",
      "Modern Design",
      "SEO Foundations",
      "Launch Support",
    ],
    cta: "Start A Project",
    ctaLink: "https://client.jssoriginals.in/start?plan=foundation",
  },
  {
    id: "momentum",
    name: "Momentum",
    description: "For businesses focused on growth and stronger digital visibility.",
    price: "Starting From ₹35,000",
    badge: "Most Popular",
    features: [
      "Everything In Foundation",
      "Enhanced SEO",
      "Strategic Site Structure",
      "Performance Optimisation",
      "Conversion Focused Design",
      "Extended Support",
    ],
    cta: "Start A Project",
    ctaLink: "https://client.jssoriginals.in/start?plan=momentum",
    highlighted: true,
  },
  {
    id: "signature",
    name: "Signature",
    description: "For ambitious brands seeking a fully bespoke digital experience.",
    price: "Tailored Investment",
    features: [
      "Fully Custom Design",
      "Advanced Functionality",
      "Custom Integrations",
      "Growth Strategy Alignment",
      "Premium Development",
      "Bespoke Solutions",
    ],
    cta: "Request Custom Quote",
    ctaLink: "https://client.jssoriginals.in/start?plan=signature",
  },
];

export default function PricingPackages() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      className="relative isolate overflow-hidden px-6 py-16 sm:py-20 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 35, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-5%] sm:top-[20%] sm:left-[5%] w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-300/25 dark:bg-indigo-900/15 blur-[90px] sm:blur-[130px] mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[-5%] sm:bottom-[20%] sm:right-[5%] w-[85vw] h-[85vw] sm:w-[550px] sm:h-[550px] rounded-full bg-cyan-200/30 dark:bg-cyan-900/12 blur-[90px] sm:blur-[130px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
          >
            Choose Your Plan
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: smoothEase }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]"
          >
            Investment Options For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Every Stage.
            </span>
          </motion.h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 1, ease: smoothEase }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${ pkg.highlighted ? "bg-white/80 dark:bg-white/[0.06] ring-2 ring-blue-500/40 dark:ring-blue-400/30 shadow-xl shadow-blue-500/5" : "bg-white/60 dark:bg-white/[0.02] ring-1 ring-inset ring-black/5 dark:ring-white/10" }"
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-blue-600 text-white rounded-full shadow-md shadow-blue-500/20">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Name */}
              <h3 className="text-xl font-bold tracking-tight text-black dark:text-white">
                {pkg.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pkg.description}
              </p>

              {/* Price */}
              <p className="mt-6 text-2xl font-semibold text-black dark:text-white">
                {pkg.price}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
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

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={pkg.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${ pkg.highlighted ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]" : "bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-white dark:hover:bg-white/20 hover:scale-[1.02]" }"
                >
                  {pkg.cta}
                </Link>
              </div>

              {/* Subtle bottom highlight */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}