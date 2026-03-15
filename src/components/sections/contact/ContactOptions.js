// src/components/sections/contact/ContactOptions.js

"use client";

import { motion } from "framer-motion";
import { contactOptions } from "@/data/contact";
import Button from "@/components/ui/Button";
import { MessageCircle, Mail, User } from "lucide-react";

const icons = {
  whatsapp: MessageCircle,
  email: Mail,
  founder: User,
};

export default function ContactOptions() {
  return (
    <section
      className="
      relative px-4 py-24
      bg-neutral-50
      dark:bg-neutral-900
    "
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          text-center
          text-3xl font-semibold
          tracking-tight
          text-neutral-900
          dark:text-neutral-100
        "
        >
          Ways to Reach Out
        </motion.h2>

        {/* Grid */}
        <div
          className="
          mt-14
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          {contactOptions.map((option, index) => {
            const Icon = icons[option.type];

            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="
                rounded-2xl
                border border-neutral-200
                dark:border-neutral-800
                bg-white/70
                dark:bg-neutral-900/60
                backdrop-blur
                p-6
                transition-all duration-300
                hover:-translate-y-1
              "
              >
                {/* Icon */}
                <div
                  className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  bg-blue-500/10
                  text-blue-600
                  dark:text-blue-400
                "
                >
                  <Icon size={18} />
                </div>

                {/* Title */}
                <h3
                  className="
                  mt-4
                  text-lg font-semibold
                  text-neutral-900
                  dark:text-neutral-100
                "
                >
                  {option.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  mt-2
                  text-sm leading-relaxed
                  text-neutral-600
                  dark:text-neutral-400
                "
                >
                  {option.description}
                </p>

                {/* Value */}
                <p
                  className="
                  mt-3
                  text-sm font-medium
                  text-neutral-900
                  dark:text-neutral-100
                "
                >
                  {option.value}
                </p>

                {/* Button */}
                <div className="mt-6">
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="md">
                      {option.button}
                    </Button>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}