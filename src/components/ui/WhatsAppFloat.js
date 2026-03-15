// src/components/ui/WhatsAppFloat.js

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phone = "919549626202";

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* outer pulse */}
      <span
        className="
        absolute inset-0
        rounded-full
        bg-[#25D366]/30
        animate-pulse-soft
        scale-[1.35]
      "
      />

      {/* glow layer */}
      <span
        className="
        absolute inset-0
        rounded-full
        bg-[#25D366]
        blur-xl
        opacity-40
        scale-125
      "
      />

      {/* button */}
      <motion.a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_12px_40px_rgba(0,0,0,0.35)]
          transition-all duration-300
          hover:scale-110
          hover:shadow-[0_18px_55px_rgba(0,0,0,0.45)]
        "
      >
        <MessageCircle size={26} />
      </motion.a>

      {/* tooltip */}
      <span
        className="
        pointer-events-none
        absolute right-16 top-1/2
        -translate-y-1/2
        whitespace-nowrap
        rounded-lg
        bg-neutral-900
        px-3 py-1.5
        text-xs
        text-white
        opacity-0
        translate-x-2
        transition-all duration-300
        group-hover:opacity-100
        group-hover:translate-x-0
        dark:bg-neutral-700
      "
      >
        Chat on WhatsApp
      </span>

    </div>
  );
}
