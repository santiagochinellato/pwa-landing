"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import siteContent from "@/data/site-content.json";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobileToggle from "./navbar-mobile-toggle";
import NavbarMobileMenu from "./navbar-mobile-menu";
import { useTheme } from "next-themes";
import { useEffect } from "react";

interface NavbarConfig {
  logoAlt: string;
  menu: { name: string; href: string }[];
  cta: string;
  themeLabel: string;
  whatsappLink: string;
  logoSize: {
    mobile: string;
    desktop: string;
  };
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navbar } = siteContent as { navbar: NavbarConfig };
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/logos/iconDark.svg"
      : "/logos/iconWhite.svg";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300",
          scrolled || isMobileMenuOpen
            ? "backdrop-blur-xl bg-light-surface/90 dark:bg-deep-void/90 border-b border-light-border dark:border-white/5 shadow-2xl shadow-light-bg/50 dark:shadow-deep-void/50"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex items-center gap-2 relative z-50">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src={logoSrc}
              alt={navbar.logoAlt}
              width={950}
              height={200}
              className="w-[var(--logo-w-mobile)] md:w-[var(--logo-w-desktop)] h-auto object-contain transition-opacity hover:opacity-80 dark:invert-0"
              style={
                {
                  "--logo-w-mobile": navbar.logoSize?.mobile || "250px",
                  "--logo-w-desktop": navbar.logoSize?.desktop || "350px",
                } as React.CSSProperties
              }
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavbarDesktop />

        {/* Mobile Toggle */}
        <NavbarMobileToggle
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
        />
      </motion.nav>

      <NavbarMobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
    </>
  );
}
