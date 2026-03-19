import Link from "next/link";
import siteContent from "@/data/site-content.json";

export default function FooterLinks() {
  const { footer } = siteContent;

  return (
    <div className="flex flex-col">
      <h3 className="text-light-fg dark:text-white font-medium mb-6 text-[12px] uppercase tracking-[0.08em]">
        {footer.menuTitle}
      </h3>
      <div className="flex flex-col gap-4 text-[14px] text-light-muted dark:text-white/70">
        {footer.menuLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="hover:text-light-primary dark:hover:text-holographic transition-colors w-fit"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}