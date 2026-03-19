"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import siteContent from "@/data/site-content.json";
import ThemeToggle from "@/components/ui/theme-toggle";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function NavbarMobileMenu({
  isOpen,
  setIsOpen,
}: NavbarMobileMenuProps) {
  const { navbar } = siteContent;
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 top-[70px] z-40 bg-light-surface/95 dark:bg-deep-void/95 backdrop-blur-md md:hidden flex flex-col px-6 pb-8 pt-2"
        >
          <div className="flex flex-col">
            {navbar.menu.map((item, idx) => {
              const isActive = pathname === item.href;
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-5 border-b border-light-border dark:border-white/10 text-[16px] font-medium transition-colors ${
                      isActive
                        ? "text-light-primary dark:text-holographic"
                        : "text-light-fg dark:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-6">
            <div className="flex items-center justify-between py-4 border-t border-light-border dark:border-white/10">
              <span className="text-[12px] font-medium text-light-muted dark:text-white/70 uppercase tracking-[0.08em]">
                {navbar.themeLabel || "Modo visual"}
              </span>
              <ThemeToggle />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <a
                href={navbar.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-light-primary text-white dark:bg-holographic dark:text-deep-void text-[13px] font-medium uppercase tracking-[0.08em] flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
              >
                {navbar.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}