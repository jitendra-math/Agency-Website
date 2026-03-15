// src/components/ui/WhatsAppFloat.js

"use client";

import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const phone = "919549626202";

  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      whileTap={{ scale: 0.92 }}
      className="
        fixed bottom-5 right-5 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all duration-300
        hover:scale-105
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="currentColor"
      >
        <path d="M19.11 17.41c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.11-.55.11-.11.27-.29.4-.44.13-.16.18-.27.27-.45.09-.18.04-.33-.02-.47-.07-.13-.6-1.45-.82-1.99-.21-.5-.43-.43-.6-.44-.16-.01-.33-.01-.51-.01-.18 0-.47.07-.71.33-.24.27-.94.92-.94 2.24s.96 2.6 1.09 2.78c.13.18 1.89 2.88 4.58 4.04.64.28 1.14.45 1.53.57.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.28.22-.64.22-1.18.15-1.28-.07-.11-.25-.18-.52-.31z"/>
        <path d="M16.02 3C8.84 3 3 8.74 3 15.8c0 2.78.91 5.35 2.45 7.45L4 29l5.93-1.55c2 .98 4.23 1.5 6.09 1.5 7.18 0 13.02-5.74 13.02-12.8C29.04 8.74 23.2 3 16.02 3zm0 23.27c-1.72 0-3.4-.46-4.86-1.33l-.35-.21-3.52.92.94-3.43-.23-.36c-1.02-1.59-1.56-3.44-1.56-5.34 0-5.5 4.54-9.97 10.13-9.97 5.58 0 10.13 4.47 10.13 9.97 0 5.5-4.55 9.97-10.13 9.97z"/>
      </svg>
    </motion.a>
  );
}
