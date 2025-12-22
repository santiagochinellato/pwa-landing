import Link from "next/link";
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 top-[76px] z-40 bg-light-surface/95 dark:bg-deep-void/95 backdrop-blur-xl md:hidden flex flex-col p-6"
        >
          <div className="flex flex-col gap-6 text-xl font-bold text-light-fg dark:text-white">
            {navbar.menu.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 border-b border-light-border dark:border-white/10"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle in Mobile Menu */}
          <div className="mt-8 flex items-center justify-between py-4 border-b border-light-border dark:border-white/10">
            <span className="text-light-muted dark:text-white/70">Tema</span>
            <ThemeToggle />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-auto"
          >
            <a
              href={navbar.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-light-primary dark:bg-holographic text-white dark:text-deep-void font-bold rounded-xl flex items-center justify-center gap-2"
            >
              {navbar.cta} <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
