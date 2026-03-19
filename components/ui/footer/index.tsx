"use client";
import siteContent from "@/data/site-content.json";
import FooterLinks from "./footer-links";
import FooterSocials from "./footer-socials";

export default function Footer() {
  const { footer } = siteContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-surface dark:bg-deep-void pt-20 pb-10 border-t border-light-border dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Grilla principal: Mensaje y Navegación */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-light-border dark:border-white/10">
          
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-light-fg dark:text-white leading-tight">
                {footer.title.split("\n")[0]} <br />
                <span className="text-light-primary dark:text-holographic">
                  {footer.titleHighlight}
                </span>
              </h2>
            </div>
            
            <div className="mt-12 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {/* Cuadrado sólido en lugar de círculo titilante */}
                <div className="w-2 h-2 bg-light-primary dark:bg-holographic" />
                <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-light-fg dark:text-white">
                  Diseño y desarrollo web — Bariloche, Patagonia
                </p>
              </div>
              <a
                href={`mailto:${footer.email}`}
                className="text-[18px] text-light-muted dark:text-white/70 hover:text-light-primary dark:hover:text-holographic transition-colors w-fit"
              >
                {footer.email}
              </a>
            </div>
          </div>

          {/* Menús secundarios */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8 pt-2 md:pt-0">
            <FooterLinks />
            <FooterSocials />
          </div>
        </div>

        {/* Barra inferior: Legales y metadata */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 text-[12px] text-light-muted dark:text-white/40 font-medium uppercase tracking-widest gap-4 md:gap-0">
          <p>{footer.copyright.replace("{year}", currentYear.toString())}</p>
          
          <div className="flex items-center gap-4">
            <span>{footer.hours}</span>
            <span className="text-light-border dark:text-white/20">/</span>
            <span>{footer.madeWith}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}