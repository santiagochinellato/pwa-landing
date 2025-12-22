import { ArrowRight, Video } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FinalCTASection() {
  const { finalCta } = siteContent;

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 relative overflow-hidden bg-white/5"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#66FCF1_0%,_transparent_70%)] opacity-5 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {finalCta.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-holographic to-white">
            {finalCta.titleHighlight}
          </span>
        </h2>

        <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
          {finalCta.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={finalCta.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 bg-holographic text-deep-void font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            {finalCta.whatsappButton} <ArrowRight size={20} />
          </a>

          <a
            href={finalCta.emailLink}
            className="w-full md:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Video size={20} /> {finalCta.videoButton}
          </a>
        </div>

        <p className="text-xs text-white/40 font-mono tracking-wide">
          {finalCta.footerText}
        </p>
      </div>
    </section>
  );
}
