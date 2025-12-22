"use client";

import { useState } from "react";
import {
  Zap,
  Palette,
  Database,
  ServerCog,
  Bot,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function StackSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<number[]>([0]); // Primer item abierto por defecto
  const { stack } = siteContent;

  const iconMap = [Zap, Palette, Database, ServerCog, Bot, TrendingUp];

  const benefits = stack.benefits.map((benefit, idx) => ({
    ...benefit,
    icon: iconMap[idx],
  }));

  const current = benefits[activeTab];
  const Icon = current.icon;

  const toggleAccordion = (idx: number) => {
    setOpenAccordions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-24 bg-deep-void px-6 md:px-12 relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-void to-holographic/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-holographic tracking-widest mb-4">
            {stack.badge}
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {stack.title}{" "}
            <span className="text-holographic">{stack.titleHighlight}</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
            {stack.description}
          </p>
        </div>

        {/* DESKTOP: Tabs Layout (como antes) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Tabs */}
          <div className="space-y-3 flex flex-col justify-center items-center h-full">
            {benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-xl border transition-all ${
                    idx === activeTab
                      ? "border-holographic bg-holographic/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        idx === activeTab ? "bg-holographic/20" : "bg-white/5"
                      }`}
                    >
                      <BenefitIcon
                        size={24}
                        className={
                          idx === activeTab
                            ? "text-holographic"
                            : "text-white/90"
                        }
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-bold mb-1 ${
                          idx === activeTab
                            ? "text-holographic"
                            : "text-white/90"
                        }`}
                      >
                        {benefit.title}
                      </div>
                      <p className="text-xs text-white/90 font-mono">
                        {benefit.tech}
                      </p>
                    </div>
                    {idx === activeTab && (
                      <div className="text-2xl font-bold text-holographic">
                        {benefit.metric}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Benefit Details */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${current.color} flex items-center justify-center`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-holographic">
                    {current.title}
                  </h3>
                  <p className="text-sm text-white/90 font-mono">
                    {current.tech}
                  </p>
                </div>
              </div>

              {/* Metric Visualization */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="text-5xl font-bold text-white mb-1">
                      {current.metric}
                    </div>
                    <div className="text-sm text-white/90">
                      {current.comparison}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-holographic">
                      {current.percentage}%
                    </div>
                    <div className="text-xs text-white/90">optimización</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${current.color} transition-all duration-1000`}
                    style={{ width: `${current.percentage}%` }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-white/90 leading-relaxed mb-6 font-light">
                {current.description}
              </p>

              {/* Visual Comparison */}
              <div className="rounded-xl bg-white/5 p-6 border border-white/10">
                <div className="text-xs font-mono text-white/90 mb-4">
                  COMPARACIÓN:
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-holographic">
                        Con nuestra tecnología
                      </span>
                      <span className="font-bold text-white">
                        {current.metric}
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${current.color}`}
                        style={{ width: `${current.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/90">
                        Promedio del mercado
                      </span>
                      <span className="font-bold text-white/90">
                        {current.comparison}
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white/20"
                        style={{ width: "35%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 rounded-xl bg-holographic/10 border border-holographic/30 p-6 text-center">
              <p className="text-sm text-white/90 mb-3">
                ¿Querés una web con estas ventajas?
              </p>
              <a
                href="https://wa.me/5492944XXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-holographic text-deep-void px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
              >
                Consulta gratuita
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE: Accordion Layout */}
        <div className="lg:hidden space-y-4">
          {benefits.map((benefit, idx) => {
            const BenefitIcon = benefit.icon;
            const isOpen = openAccordions.includes(idx);

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? "border-holographic bg-holographic/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isOpen ? "bg-holographic/20" : "bg-white/5"
                      }`}
                    >
                      <BenefitIcon
                        size={24}
                        className={
                          isOpen ? "text-holographic" : "text-white/90"
                        }
                      />
                    </div>
                    <div className="text-left">
                      <div
                        className={`font-bold text-sm mb-1 ${
                          isOpen ? "text-holographic" : "text-white/90"
                        }`}
                      >
                        {benefit.title}
                      </div>
                      <p className="text-xs text-white/90 font-mono">
                        {benefit.tech}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-holographic transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-6 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* Metric */}
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-4xl font-bold text-white mb-1">
                          {benefit.metric}
                        </div>
                        <div className="text-xs text-white/90">
                          {benefit.comparison}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-holographic">
                          {benefit.percentage}%
                        </div>
                        <div className="text-[10px] text-white/90">
                          optimización
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${benefit.color}`}
                        style={{ width: `${benefit.percentage}%` }}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-white/90 text-sm leading-relaxed font-light">
                      {benefit.description}
                    </p>

                    {/* Comparison */}
                    <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                      <div className="text-[10px] font-mono text-white/90 mb-3">
                        COMPARACIÓN:
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-holographic">
                              Con nuestra tecnología
                            </span>
                            <span className="font-bold text-white">
                              {benefit.metric}
                            </span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${benefit.color}`}
                              style={{ width: `${benefit.percentage}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/90">Promedio</span>
                            <span className="font-bold text-white/90">
                              {benefit.comparison}
                            </span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-white/20"
                              style={{ width: "35%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile CTA */}
          <div className="mt-6 rounded-xl bg-holographic/10 border border-holographic/30 p-6 text-center">
            <p className="text-sm text-white/90 mb-3">
              ¿Querés una web con estas ventajas?
            </p>
            <a
              href="https://wa.me/5492944XXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-holographic text-deep-void px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              Consulta gratuita
            </a>
          </div>
        </div>

        {/* Bottom Stats (ambas versiones) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Velocidad promedio", value: "1.5 seg" },
            { label: "Score SEO", value: "95/100" },
            { label: "Tiempo de entrega", value: "7-12 días" },
            { label: "Satisfacción", value: "100%" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-2xl md:text-3xl font-bold text-holographic mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
