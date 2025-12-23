import Link from "next/link";
import siteContent from "@/data/site-content.json";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function NavbarDesktop() {
  const { navbar } = siteContent;

  return (
    <div className="hidden md:flex items-center gap-10 text-sm font-medium text-light-muted dark:text-white/70">
      {navbar.menu.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="relative overflow-hidden group hover:text-light-primary dark:hover:text-white transition-colors py-1"
        >
          <span className="relative z-10">{item.name}</span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-light-primary dark:bg-holographic origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </Link>
      ))}

      {/* Theme Toggle */}

      <a
        href={navbar.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2.5 text-xs font-bold tracking-widest text-white bg-light-primary dark:bg-holographic dark:text-deep-void rounded-full hover:bg-light-primary/90 dark:hover:bg-white transition-all hover:scale-105 uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.3)] dark:shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] dark:hover:shadow-[0_0_30px_rgba(102,252,241,0.5)]"
      >
        {navbar.cta}
      </a>
      <ThemeToggle />
    </div>
  );
}
