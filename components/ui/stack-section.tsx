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
    <section
      id="stack"
      className="py-24 bg-transparent px-6 md:px-12 relative border-t border-light-border dark:border-white/5 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-light-primary/5 dark:bg-holographic/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-light-primary/10 dark:bg-holographic/10 rounded-full border-2 border-light-primary/20 dark:border-holographic/20">
            <h2 className="text-xs font-bold text-light-primary dark:text-holographic tracking-widest uppercase">
              {stack.badge}
            </h2>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-light-fg dark:text-white">
            {stack.title}{" "}
            <span className="relative inline-block">
              <span className="text-light-primary dark:text-holographic">
                {stack.titleHighlight}
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-light-primary to-cyan-500 dark:from-holographic dark:to-cyan-400 rounded-full" />
            </span>
          </h1>
          <p className="text-lg text-light-muted dark:text-white/90 max-w-2xl mx-auto font-light">
            {stack.description}
          </p>
        </div>

        {/* DESKTOP: Tabs Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Tabs */}
          <div className="space-y-3 flex flex-col justify-center items-center h-full">
            {benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                    idx === activeTab
                      ? "border-light-primary bg-white dark:bg-holographic/10 dark:border-holographic shadow-lg shadow-light-primary/10 dark:shadow-holographic/10"
                      : "bg-white dark:bg-white/5 border-light-border dark:border-white/10 hover:border-light-primary/30 dark:hover:border-white/20 hover:bg-light-surface dark:hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        idx === activeTab
                          ? "bg-light-primary/10 dark:bg-holographic/20 text-light-primary dark:text-holographic"
                          : "bg-light-bg dark:bg-white/5 text-light-muted dark:text-white/90 group-hover:text-light-primary dark:group-hover:text-holographic"
                      }`}
                    >
                      <BenefitIcon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-bold mb-1 transition-colors ${
                          idx === activeTab
                            ? "text-light-primary dark:text-holographic"
                            : "text-light-fg dark:text-white/90 group-hover:text-light-primary dark:group-hover:text-holographic"
                        }`}
                      >
                        {benefit.title}
                      </div>
                      <p className="text-xs text-light-muted dark:text-white/90 font-mono">
                        {benefit.tech}
                      </p>
                    </div>
                    {idx === activeTab && (
                      <div className="text-2xl font-bold text-light-primary dark:text-holographic">
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
            <div className="rounded-3xl border border-light-border dark:border-white/10 bg-white dark:bg-white/5 p-8 shadow-2xl dark:shadow-none transition-all duration-300">
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center shadow-lg text-white`}
                >
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-light-fg dark:text-white">
                    {current.title}
                  </h3>
                  <p className="text-sm text-light-muted dark:text-white/90 font-mono">
                    {current.tech}
                  </p>
                </div>
              </div>

              {/* Metric Visualization */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="text-5xl font-bold text-light-fg dark:text-white mb-1">
                      {current.metric}
                    </div>
                    <div className="text-sm text-light-muted dark:text-white/90">
                      {current.comparison}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-light-primary dark:text-holographic">
                      {current.percentage}%
                    </div>
                    <div className="text-xs text-light-muted dark:text-white/90">
                      {stack.labels.optimization}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-3 bg-light-surface dark:bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${current.color} transition-all duration-1000`}
                    style={{ width: `${current.percentage}%` }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-light-fg dark:text-white/90 leading-relaxed mb-6 font-light text-lg">
                {current.description}
              </p>

              {/* Visual Comparison */}
              <div className="rounded-xl bg-light-surface dark:bg-white/5 p-6 border border-light-border dark:border-white/10">
                <div className="text-xs font-mono text-light-muted dark:text-white/90 mb-4">
                  {stack.labels.comparisonTitle}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-light-primary dark:text-holographic font-medium">
                        {stack.labels.ourTech}
                      </span>
                      <span className="font-bold text-light-fg dark:text-white">
                        {current.metric}
                      </span>
                    </div>
                    <div className="h-2 bg-light-border dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${current.color}`}
                        style={{ width: `${current.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-light-muted dark:text-white/90">
                        {stack.labels.marketAvg}
                      </span>
                      <span className="font-bold text-light-muted dark:text-white/90">
                        {current.comparison}
                      </span>
                    </div>
                    <div className="h-2 bg-light-border dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-light-muted/20 dark:bg-white/20"
                        style={{ width: "35%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 rounded-xl bg-gradient-to-r from-light-primary/10 to-cyan-50 dark:from-holographic/10 dark:to-cyan-900/10 border border-light-primary/30 dark:border-holographic/30 p-6 text-center shadow-lg dark:shadow-none">
              <p className="text-sm text-light-muted dark:text-white/90 mb-3 font-medium">
                {stack.cta.text}
              </p>
              <a
                href="https://wa.me/5492944227526"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-light-primary dark:bg-holographic text-white dark:text-deep-void px-6 py-3 rounded-lg font-bold hover:bg-light-primary/90 dark:hover:bg-white transition-all shadow-md hover:shadow-lg"
              >
                {stack.cta.button}
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
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-light-primary bg-white dark:bg-holographic/10 dark:border-holographic shadow-lg"
                    : "bg-white dark:bg-white/5 border-light-border dark:border-white/10"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-light-primary/10 dark:bg-holographic/20 text-light-primary dark:text-holographic"
                          : "bg-light-bg dark:bg-white/5 text-light-muted dark:text-white/90"
                      }`}
                    >
                      <BenefitIcon size={24} />
                    </div>
                    <div className="text-left">
                      <div
                        className={`font-bold text-sm mb-1 ${
                          isOpen
                            ? "text-light-primary dark:text-holographic"
                            : "text-light-fg dark:text-white/90"
                        }`}
                      >
                        {benefit.title}
                      </div>
                      <p className="text-xs text-light-muted dark:text-white/90 font-mono">
                        {benefit.tech}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-light-primary dark:text-holographic transition-transform ${
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
                        <div className="text-4xl font-bold text-light-fg dark:text-white mb-1">
                          {benefit.metric}
                        </div>
                        <div className="text-xs text-light-muted dark:text-white/90">
                          {benefit.comparison}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-light-primary dark:text-holographic">
                          {benefit.percentage}%
                        </div>
                        <div className="text-[10px] text-light-muted dark:text-white/90">
                          optimización
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-light-surface dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${benefit.color}`}
                        style={{ width: `${benefit.percentage}%` }}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-light-fg dark:text-white/90 text-sm leading-relaxed font-light">
                      {benefit.description}
                    </p>

                    {/* Comparison */}
                    <div className="rounded-lg bg-light-surface dark:bg-white/5 p-4 border border-light-border dark:border-white/10">
                      <div className="text-[10px] font-mono text-light-muted dark:text-white/90 mb-3">
                        COMPARACIÓN:
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-light-primary dark:text-holographic">
                              Con nuestra tecnología
                            </span>
                            <span className="font-bold text-light-fg dark:text-white">
                              {benefit.metric}
                            </span>
                          </div>
                          <div className="h-1.5 bg-light-border dark:bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${benefit.color}`}
                              style={{ width: `${benefit.percentage}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-light-muted dark:text-white/90">
                              Promedio
                            </span>
                            <span className="font-bold text-light-muted dark:text-white/90">
                              {benefit.comparison}
                            </span>
                          </div>
                          <div className="h-1.5 bg-light-border dark:bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-light-muted/20 dark:bg-white/20"
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
          <div className="mt-6 rounded-xl bg-gradient-to-r from-light-primary/10 to-cyan-50 dark:from-holographic/10 dark:to-cyan-900/10 border border-light-primary/30 dark:border-holographic/30 p-6 text-center">
            <p className="text-sm text-light-muted dark:text-white/90 mb-3">
              ¿Querés una web con estas ventajas?
            </p>
            <a
              href="https://wa.me/5492944227526"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-light-primary dark:bg-holographic text-white dark:text-deep-void px-6 py-3 rounded-lg font-semibold hover:bg-light-primary/90 dark:hover:bg-white transition-colors"
            >
              Consulta gratuita
            </a>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stack.bottomStats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl bg-white dark:bg-white/5 border border-light-border dark:border-white/10 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="text-2xl md:text-3xl font-bold text-light-primary dark:text-holographic mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-light-muted dark:text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
