"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
  ArrowRight,
  Clock,
} from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function InteractiveProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const { process } = siteContent;

  const iconMap = [
    MessageSquare,
    Palette,
    Code2,
    CheckCircle2,
    Rocket,
    Headphones,
  ];

  const steps = process.steps.map((step, idx) => ({
    ...step,
    icon: iconMap[idx],
  }));

  const currentStep = steps[activeStep];
  const Icon = currentStep.icon;
  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <section
      id="process"
      className="bg-deep-void text-white py-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-holographic tracking-widest mb-4">
            {process.badge}
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {process.title}{" "}
            <span className="text-holographic">{process.titleHighlight}</span>{" "}
            {process.titleSuffix}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {process.description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex md:justify-between justify-start gap-8 md:gap-0 items-center mb-6 text-white overflow-x-auto md:overflow-visible pb-4 pt-4 md:pb-0 px-1 md:px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] mask-linear-fade">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-center gap-2 transition-all min-w-[60px] ${
                  idx === activeStep
                    ? "scale-110 opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    idx === activeStep
                      ? `border-current ${step.color} bg-white/5`
                      : "border-white/20 bg-transparent text-white"
                  }`}
                >
                  <step.icon size={20} className="transition-colors" />
                </div>
                <span
                  className={`text-[10px] md:text-xs font-medium uppercase tracking-wider ${idx === activeStep ? step.color : "text-white"}`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Progress line */}
          <div className="relative h-px bg-white/10 w-full">
            <div
              className="absolute h-full bg-gradient-to-r from-holographic to-holographic-dim transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Active Step Content */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Visual Card */}
          <div
            className={`relative rounded-2xl p-8 md:p-10 bg-white/5 border ${currentStep.border} overflow-hidden transition-all duration-500 h-full flex flex-col`}
          >
            {/* Subtle Glow Effect */}
            <div
              className={`absolute top-0 right-0 w-80 h-80 ${currentStep.glow} rounded-full blur-[100px] opacity-30 pointer-events-none`}
            />
            <div
              className={`absolute bottom-0 left-0 w-40 h-40 ${currentStep.glow} rounded-full blur-[80px] opacity-20 pointer-events-none`}
            />

            <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex w-full items-center justify-between mb-8 md:mb-10">
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 ${currentStep.color}`}
                >
                  <Icon size={32} />
                </div>
                <div
                  className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 ${currentStep.color}`}
                >
                  <Clock size={14} />
                  <span>{currentStep.duration}</span>
                </div>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {currentStep.title}
              </h3>
              <p
                className={`text-lg md:text-2xl mb-8 md:mb-10 font-light ${currentStep.color} opacity-90`}
              >
                {currentStep.shortDesc}
              </p>

              <div className="space-y-4 md:space-y-5 mb-8 flex-1 w-full text-left">
                {currentStep.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div
                      className={`mt-1.5 w-6 h-6 rounded-full bg-white/5 border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${currentStep.color.replace("text-", "border-").replace("400", "500/30")}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${currentStep.color.replace("text-", "bg-")}`}
                      />
                    </div>
                    <p className="text-base md:text-lg text-white/80 font-light group-hover:text-white transition-colors leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {currentStep.cta && (
                <a
                  href="https://wa.me/5492944XXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-deep-void px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-holographic transition-all flex items-center justify-center gap-3 group shadow-xl shadow-white/5 hover:shadow-holographic/20 mt-auto"
                >
                  {currentStep.cta}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              )}
            </div>
            {/* Bottom Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex items-center gap-2 text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                <ArrowRight size={16} className="rotate-180" />
                ANTERIOR
              </button>

              <span className="text-xs text-white/20 font-mono tracking-widest">
                {activeStep + 1} / {steps.length}
              </span>

              <button
                onClick={() =>
                  setActiveStep(Math.min(steps.length - 1, activeStep + 1))
                }
                disabled={activeStep === steps.length - 1}
                className="flex items-center gap-2 text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                SIGUIENTE
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Navigation & Stats */}
          <div className="flex flex-col gap-6 h-full">
            {/* Timeline Summary */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-holographic/10 rounded-full blur-[50px] group-hover:bg-holographic/20 transition-all opacity-50" />

              <h4 className="text-xs font-mono text-holographic mb-3 uppercase tracking-widest relative z-10 flex items-center gap-2">
                <Clock size={14} /> DURACIÓN TOTAL ESTIMADA
              </h4>
              <div className="text-6xl md:text-7xl font-bold mb-3 text-white tracking-tighter relative z-10">
                7-12{" "}
                <span className="text-3xl text-white/40 font-light">días</span>
              </div>
              <p className="text-base text-white/60 font-light relative z-10 max-w-sm">
                Desde la primera reunión hasta el lanzamiento oficial de tu
                sitio.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6 flex-1 flex flex-col">
              <h4 className="text-xs font-mono text-white/40 mb-6 uppercase tracking-widest">
                ETAPAS DEL PROYECTO
              </h4>
              <div className="space-y-2 flex-1 flex flex-col justify-center">
                {steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all flex items-center justify-between group ${
                      idx === activeStep
                        ? "bg-white/10 border border-white/5"
                        : "hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeStep ? step.color.replace("text-", "bg-") + " scale-125 shadow-[0_0_10px_currentColor]" : "bg-white/20"}`}
                      />
                      <span
                        className={`text-base font-medium transition-colors ${
                          idx === activeStep
                            ? "text-white"
                            : "text-white/40 group-hover:text-white/60"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {idx === activeStep && (
                      <ArrowRight size={18} className="text-white/40" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-holographic/20 bg-holographic/5 p-8 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-holographic/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-sm text-white/70 mb-4 relative z-10">
            ¿Querés ver este proceso en acción con tu proyecto?
          </p>
          <a
            href="https://wa.me/5492944XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-holographic text-holographic px-8 py-3 rounded-full font-bold hover:bg-holographic hover:text-deep-void transition-all relative z-10"
          >
            Empezar ahora <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
