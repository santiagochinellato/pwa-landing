import { Video, MessageCircle } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FinalCTASection() {
  const { finalCta } = siteContent;

  return (
    <section
      id="contact"
      className="py-16 md:py-32 px-4 md:px-12 relative overflow-hidden bg-transparent transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#14b8a6_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_#66FCF1_0%,_transparent_70%)] opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-sm font-bold mb-6 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Cupos limitados: 3 lugares este mes
        </div>

        <h2 className="text-3xl md:text-6xl font-bold text-light-fg dark:text-white mb-6 tracking-tight">
          {finalCta.title} <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-primary dark:from-holographic to-light-fg dark:to-white">
            {finalCta.titleHighlight}
          </span>
        </h2>

        <p className="text-xl text-light-muted dark:text-white/90 font-light mb-12 max-w-2xl mx-auto">
          {finalCta.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={finalCta.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 bg-[#25D366] text-white font-bold text-l rounded-full hover:bg-[#20bd5a] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30"
          >
            <MessageCircle size={24} className="fill-white" />{" "}
            {finalCta.whatsappButton}
          </a>

          <a
            href={finalCta.emailLink}
            className="w-full md:w-auto px-8 py-4 bg-transparent border border-light-border dark:border-white/20 text-light-fg dark:text-white font-medium text-l rounded-full hover:bg-light-bg dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Video size={20} /> {finalCta.videoButton}
          </a>
        </div>

        <p className="text-xs text-light-muted dark:text-white/90 font-mono tracking-wide">
          {finalCta.footerText}
        </p>
      </div>
    </section>
  );
}
