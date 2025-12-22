"use client";
import siteContent from "@/data/site-content.json";
import FooterLinks from "./footer-links";
import FooterSocials from "./footer-socials";

export default function Footer() {
  const { footer } = siteContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-void py-12 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              {footer.title.split("\n")[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-holographic to-white">
                {footer.titleHighlight}
              </span>
            </h2>
            <div className="space-y-4">
              <a
                href={`mailto:${footer.email}`}
                className="block text-xl md:text-2xl text-white hover:text-holographic transition-colors"
              >
                {footer.email}
              </a>
              <p className="text-white">{footer.phone}</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-white">{footer.address}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-12 md:gap-24">
            <FooterLinks />
            <FooterSocials />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white font-mono">
          <p>{footer.copyright.replace("{year}", currentYear.toString())}</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>{footer.hours}</span>
            <span>•</span>
            <span>{footer.madeWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
