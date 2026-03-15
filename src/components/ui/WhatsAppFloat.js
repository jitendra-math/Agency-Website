
"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
const phone = "919549626202";

return (
<motion.a
href={https://wa.me/${phone}}
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
<MessageCircle size={22} />
</motion.a>
);
}
