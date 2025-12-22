import Link from "next/link";
import siteContent from "@/data/site-content.json";

export default function FooterLinks() {
  const { footer } = siteContent;

  return (
    <div className="space-y-4">
      <h3 className="text-light-fg dark:text-white font-bold mb-6 tracking-widest text-sm">
        {footer.menuTitle}
      </h3>
      <div className="flex flex-col gap-3 text-light-muted dark:text-white/90">
        {footer.menuLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="hover:text-light-primary dark:hover:text-holographic transition-colors py-2 block"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
