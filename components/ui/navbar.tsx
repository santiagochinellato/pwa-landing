"use client";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12",
        "backdrop-blur-xl bg-deep-void/10 border-b border-white/5",
        "supports-[backdrop-filter]:bg-deep-void/10"
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/pwaLogo.svg"
          alt="Patagonia Web Factory Logo"
          width={300}
          height={60}
          className="w-[300px] h-auto object-contain"
        />
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        {["WORK", "SERVICES", "ABOUT", "CONTACT"].map((item) => (
          <Link
            key={item}
            href="/"
            className="relative overflow-hidden group hover:text-white transition-colors"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              {item}
            </span>
            <span className="absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-holographic">
              {item}
            </span>
          </Link>
        ))}
      </div>

      <button className="hidden md:block px-6 py-2.5 text-xs font-bold tracking-widest text-deep-void bg-holographic rounded-full hover:bg-white transition-colors uppercase">
        INICIAR PROYECTO
      </button>
    </motion.nav>
  );
}
