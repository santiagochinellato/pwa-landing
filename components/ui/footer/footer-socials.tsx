import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FooterSocials() {
  const { footer } = siteContent;

  return (
    <div className="space-y-4">
      <h3 className="text-light-fg dark:text-white font-bold mb-6 tracking-widest text-sm">
        {footer.socialTitle}
      </h3>
      <div className="flex gap-4 text-light-muted dark:text-white/90">
        <Link
          href="https://linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
          className="hover:text-light-primary dark:hover:text-holographic transition-colors p-2"
        >
          <Linkedin size={24} />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
          className="hover:text-light-primary dark:hover:text-holographic transition-colors p-2"
        >
          <Instagram size={24} />
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          aria-label="GitHub"
          className="hover:text-light-primary dark:hover:text-holographic transition-colors p-2"
        >
          <Github size={24} />
        </Link>
      </div>
    </div>
  );
}
