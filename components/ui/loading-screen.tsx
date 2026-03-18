"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "./loading-context";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MacizoLogoAnimation from "@/components/ui/macizo-logo-animation";

export default function LoadingScreen() {
  const { isLoading } = useLoading();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Logic:
  // If current theme is DARK, we show DARK background with WHITE logo.
  // If current theme is LIGHT, we show WHITE background with DARK logo.
  const isDark = resolvedTheme === "dark";

  const bgColor = isDark ? "bg-deep-void" : "bg-white";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed inset-0 z-100 flex items-center justify-center ${bgColor}`}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.3 } }}
            className="relative max-w-[500px] h-auto"
          >
            <MacizoLogoAnimation
              variant="loader"
              showWordmark={false}
              className="mx-auto"
            />

            {/* Animated Loading Text */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center font-medium tracking-widest text-3xl  text-primary dark:text-holographic pt-8"><strong className="text-primary font-extrabold dark:text-holographic">Macizo</strong>Digital</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center font-medium tracking-widest text-2xl  text-primary dark:text-holographic pt-2">Diseño y Desarrollo Web</motion.div>
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className={`mt-4 text-center font-medium tracking-widest text-sm uppercase ${isDark ? "text-holographic" : "text-light-primary"}`}
            >
              Cargando...
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
