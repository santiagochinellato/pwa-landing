import { Globe, RefreshCw, Server, Package } from "lucide-react";
import { ArrowRight, Star } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function ServicesSection() {
  const { services } = siteContent;

  const secondaryIcons = [RefreshCw, Server];

  return (
    <section
      id="services"
      className="py-24 bg-light-bg dark:bg-deep-void px-6 md:px-12 relative border-t border-light-border dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-light-fg dark:text-white">
          {services.heading}{" "}
          <span className="text-light-primary dark:text-holographic">
            {services.headingHighlight}
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Service - Featured - Updated Design */}
          <div className="lg:col-span-2 p-10 rounded-2xl bg-gradient-to-br from-light-primary/10 via-light-surface to-light-surface dark:from-holographic/10 dark:via-white/5 dark:to-white/5 border-2 border-light-primary/50 dark:border-holographic/50 hover:border-light-primary dark:hover:border-holographic transition-all duration-300 group relative overflow-hidden shadow-xl dark:shadow-[0_0_40px_rgba(102,252,241,0.15)] bg-white dark:bg-transparent">
            {/* Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-light-primary/20 dark:bg-holographic/20 border border-light-primary/50 dark:border-holographic/50 rounded-full">
              <Star
                size={12}
                className="text-light-primary dark:text-holographic fill-current"
              />
              <span className="text-[10px] font-bold text-light-primary dark:text-holographic tracking-wider">
                {services.mainService.featuredBadge}
              </span>
            </div>

            <div className="flex flex-col h-full">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-light-primary/20 dark:bg-holographic/20 border-2 border-light-primary/30 dark:border-holographic/30 flex items-center justify-center text-light-primary dark:text-holographic group-hover:scale-110 transition-transform bg-white dark:bg-transparent">
                  <Globe size={40} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-light-fg dark:text-white mb-2 group-hover:text-light-primary dark:group-hover:text-holographic transition-colors">
                    {services.mainService.title}
                  </h3>
                  <p className="text-sm text-light-primary/80 dark:text-holographic/80 font-mono">
                    {services.mainService.details}
                  </p>
                </div>
              </div>

              <p className="text-light-muted dark:text-white/90 font-light leading-relaxed mb-6 text-lg">
                {services.mainService.description}
              </p>

              <div className="mt-auto pt-6 border-t border-light-border dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-light-muted dark:text-white/90 mb-1">
                      {services.mainService.durationLabel}
                    </div>
                    <div className="text-lg font-semibold text-light-fg dark:text-white">
                      {services.mainService.durationValue}
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/5492944227526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 px-6 py-3 bg-light-primary dark:bg-holographic text-white dark:text-deep-void font-bold rounded-lg hover:opacity-90 transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] dark:hover:shadow-[0_0_20px_rgba(102,252,241,0.4)]"
                >
                  {services.mainService.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Services */}
          <div className="flex flex-col gap-8">
            {services.secondaryServices.map((service, index) => {
              const Icon = secondaryIcons[index] || Globe;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-light-surface dark:bg-white/5 border border-light-border dark:border-white/10 hover:border-light-primary/50 dark:hover:border-holographic/50 transition-all duration-300 group relative overflow-hidden flex-1 shadow-sm hover:shadow-lg dark:shadow-none bg-white dark:bg-transparent"
                >
                  <div className="absolute top-0 right-0 p-20 bg-light-primary/5 dark:bg-holographic/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="w-12 h-12 mb-4 rounded-lg bg-light-bg dark:bg-deep-void border border-light-border dark:border-white/10 flex items-center justify-center text-light-primary/80 dark:text-holographic/80 group-hover:text-light-primary dark:group-hover:text-holographic group-hover:scale-110 transition-all">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-light-fg dark:text-white mb-2 relative z-10">
                    {service.title}
                  </h3>

                  <p className="text-light-muted dark:text-white/90 text-sm font-light leading-relaxed mb-4 relative z-10">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-sm relative z-10">
                    <span className="text-light-muted dark:text-white/90 font-mono text-xs">
                      {service.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Paquete Completo */}
        <div className="p-8 rounded-2xl bg-light-surface dark:bg-white/5 shadow-2xl bg-gradient-to-r from-purple-500/10 via-light-primary/10 dark:via-holographic/10 to-blue-500/10 border border-light-primary/30 dark:border-holographic/30 hover:border-light-primary/60 dark:hover:border-holographic/60 transition-all duration-300 group relative overflow-hidden mb-8 bg-white dark:bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-light-primary/5 dark:via-holographic/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-light-primary/20 dark:to-holographic/20 flex items-center justify-center border-2 border-light-primary/30 dark:border-holographic/30 bg-white/50 dark:bg-transparent">
                <Package
                  size={32}
                  className="text-light-primary dark:text-holographic"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-light-fg dark:text-white">
                    {services.fullPackage.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-light-primary/20 dark:bg-holographic/20 border border-light-primary/40 dark:border-holographic/40 rounded text-[10px] font-bold text-light-primary dark:text-holographic">
                    {services.fullPackage.badge}
                  </span>
                </div>
                <p className="text-light-muted dark:text-white/90 text-sm">
                  {services.fullPackage.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5492944227526"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-light-primary dark:border-holographic text-light-primary dark:text-holographic font-bold rounded-lg hover:bg-light-primary dark:hover:bg-holographic hover:text-white dark:hover:text-deep-void transition-all whitespace-nowrap bg-white/50 dark:bg-transparent"
              >
                {services.fullPackage.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        {/* <div className="flex justify-center">
          <a
            href="https://wa.me/5492944227526"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-light-primary dark:border-holographic text-light-primary dark:text-holographic font-bold rounded-full hover:bg-light-primary dark:hover:bg-holographic hover:text-white dark:hover:text-deep-void transition-all"
          >
            ¿No sabés qué necesitás? Hablemos gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
