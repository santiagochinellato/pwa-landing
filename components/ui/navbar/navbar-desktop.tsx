"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import siteContent from "@/data/site-content.json";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function NavbarDesktop() {
  const { navbar } = siteContent;
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-light-muted dark:text-white/70">
      {navbar.menu.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative py-2 transition-colors duration-200 ${
              isActive
                ? "text-light-primary dark:text-holographic"
                : "hover:text-light-primary dark:hover:text-white/90"
            }`}
          >
            <span>{item.name}</span>
            {/* Indicador de página activa: Línea sólida sin animaciones exageradas */}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-light-primary dark:bg-holographic" />
            )}
          </Link>
        );
      })}

      <div className="flex items-center gap-6 ml-4 border-l border-light-border dark:border-white/10 pl-6">
        <ThemeToggle />
        
        <a
          href={navbar.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 text-[13px] font-medium tracking-[0.08em] uppercase transition-transform duration-200 bg-light-primary text-white dark:bg-holographic dark:text-deep-void hover:scale-[1.02] flex items-center gap-2"
        >
          {navbar.cta}
        </a>
      </div>
    </div>
  );
}