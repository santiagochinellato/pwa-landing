import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FooterSocials() {
  const { footer } = siteContent;

  return null;
  /*
  return (
    <div className="flex flex-col">
      <h3 className="text-light-fg dark:text-white font-medium mb-6 text-[12px] uppercase tracking-[0.08em]">
        {footer.socialTitle}
      </h3>
      <div className="flex gap-5 text-light-muted dark:text-white/70">
        <Link
          href={(footer as any)._socialLinks.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          className="hover:text-light-primary dark:hover:text-holographic transition-colors"
        >
          <Linkedin size={20} strokeWidth={1.5} />
        </Link>
        <Link
          href={(footer as any)._socialLinks.instagram}
          target="_blank"
          aria-label="Instagram"
          className="hover:text-light-primary dark:hover:text-holographic transition-colors"
        >
          <Instagram size={20} strokeWidth={1.5} />
        </Link>
        <Link
          href={(footer as any)._socialLinks.github}
          target="_blank"
          aria-label="GitHub"
          className="hover:text-light-primary dark:hover:text-holographic transition-colors"
        >
          <Github size={20} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
  */
}