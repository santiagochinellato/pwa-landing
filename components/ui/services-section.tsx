import { Globe, RefreshCw, Server, Package } from "lucide-react";
import { ArrowRight, Star } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function ServicesSection() {
  const { services } = siteContent;

  const secondaryIcons = [RefreshCw, Server]; // Maps to order in JSON: Redesign, Hosting

  return (
    <section
      id="services"
      className="py-24 bg-deep-void px-6 md:px-12 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
          {services.heading}{" "}
          <span className="text-holographic">{services.headingHighlight}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Service - Featured */}
          <div className="lg:col-span-2 p-10 rounded-2xl bg-gradient-to-br from-holographic/10 via-white/5 to-white/5 border-2 border-holographic/50 hover:border-holographic transition-all duration-300 group relative overflow-hidden shadow-[0_0_40px_rgba(102,252,241,0.15)]">
            {/* Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-holographic/20 border border-holographic/50 rounded-full">
              <Star size={12} className="text-holographic fill-holographic" />
              <span className="text-[10px] font-bold text-holographic tracking-wider">
                {services.mainService.featuredBadge}
              </span>
            </div>

            <div className="flex flex-col h-full">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-holographic/20 border-2 border-holographic/30 flex items-center justify-center text-holographic group-hover:scale-110 transition-transform">
                  <Globe size={40} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-holographic transition-colors">
                    {services.mainService.title}
                  </h3>
                  <p className="text-sm text-holographic/80 font-mono">
                    {services.mainService.details}
                  </p>
                </div>
              </div>

              <p className="text-white/90 font-light leading-relaxed mb-6 text-lg">
                {services.mainService.description}
              </p>

              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-white/60 mb-1">
                      {services.mainService.durationLabel}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {services.mainService.durationValue}
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/5492944227526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 px-6 py-3 bg-holographic text-deep-void font-bold rounded-lg hover:bg-white transition-all hover:shadow-[0_0_20px_rgba(102,252,241,0.4)]"
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
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-holographic/50 transition-all duration-300 group relative overflow-hidden flex-1"
                >
                  <div className="absolute top-0 right-0 p-20 bg-holographic/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="w-12 h-12 mb-4 rounded-lg bg-deep-void border border-white/10 flex items-center justify-center text-holographic/80 group-hover:text-holographic group-hover:scale-110 transition-all">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                    {service.title}
                  </h3>

                  <p className="text-white/70 text-sm font-light leading-relaxed mb-4 relative z-10">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-sm relative z-10">
                    <span className="text-white/40 font-mono text-xs">
                      {service.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Paquete Completo - Destacado */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-holographic/10 to-blue-500/10 border border-holographic/30 hover:border-holographic/60 transition-all duration-300 group relative overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-holographic/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-holographic/20 flex items-center justify-center border-2 border-holographic/30">
                <Package size={32} className="text-holographic" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {services.fullPackage.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-holographic/20 border border-holographic/40 rounded text-[10px] font-bold text-holographic">
                    {services.fullPackage.badge}
                  </span>
                </div>
                <p className="text-white/60 text-sm">
                  {services.fullPackage.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* <div className="text-right">
                <div className="text-sm text-white/60">Desde</div>
                <div className="text-2xl font-bold text-holographic">
                  $3200{" "}
                  <span className="text-base text-white/60">+ $200/mes</span>
                </div>
              </div> */}
              <a
                href="https://wa.me/5492944XXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-holographic text-holographic font-bold rounded-lg hover:bg-holographic hover:text-deep-void transition-all whitespace-nowrap"
              >
                Consultar paquete
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/5492944XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-holographic text-holographic font-bold rounded-full hover:bg-holographic hover:text-deep-void transition-all"
          >
            ¿No sabés qué necesitás? Hablemos gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
