import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FooterSocials() {
  const { footer } = siteContent;

  return (
    <div className="space-y-4">
      <h3 className="text-white font-bold mb-6 tracking-widest text-sm">
        {footer.socialTitle}
      </h3>
      <div className="flex gap-4 text-white/50">
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-holographic transition-colors"
        >
          <Linkedin size={24} />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          className="hover:text-holographic transition-colors"
        >
          <Instagram size={24} />
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          className="hover:text-holographic transition-colors"
        >
          <Github size={24} />
        </Link>
      </div>
    </div>
  );
}
