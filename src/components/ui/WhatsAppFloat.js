// src/components/ui/WhatsAppFloat.js

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phone = "919549626202";

  return (
    <div className="fixed bottom-5 right-5 z-50 group">

      {/* pulse ring */}
      <span
        className="
        absolute inset-0
        rounded-full
        bg-[#25D366]/40
        animate-pulse-soft
      "
      />

      {/* button */}
      <motion.a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
          relative
          flex h-13 w-13 items-center justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
          transition-all duration-300
          hover:scale-110
          hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]
        "
      >
        <MessageCircle size={22} />
      </motion.a>

      {/* tooltip */}
      <span
        className="
        pointer-events-none
        absolute right-14 top-1/2
        -translate-y-1/2
        whitespace-nowrap
        rounded-lg
        bg-neutral-900
        px-3 py-1
        text-xs
        text-white
        opacity-0
        transition-all duration-300
        group-hover:opacity-100
        dark:bg-neutral-700
      "
      >
        Chat on WhatsApp
      </span>

    </div>
  );
}
