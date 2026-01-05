"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const { navbar } = siteContent; // Reusing navbar WhatsApp link

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past 300px (approx Hero height)
    const show = latest > 300;
    if (show !== isVisible) {
      setIsVisible(show);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 right-6 z-50 lg:hidden pointer-events-none"
        >
          <a
            href={navbar.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-full shadow-lg shadow-black/20 pointer-events-auto transition-transform active:scale-95"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="text-lg tracking-wide">Hablemos por WhatsApp</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
