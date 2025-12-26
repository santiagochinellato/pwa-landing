"use client";

import { useState } from "react";
import siteContent from "@/data/site-content.json";
import {
  Clock,
  ArrowRight,
  MessageSquare,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
};

interface StepData {
  icon: string;
  title: string;
  duration: string;
  shortDesc: string;
  details: string[];
  cta: string;
  color: string;
  glow: string;
  border: string;
}

interface ProcessData {
  badge: string;
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  steps: StepData[];
}

interface StepWithIcon extends Omit<StepData, "icon"> {
  icon: LucideIcon;
}

export default function InteractiveProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const { process } = siteContent as { process: ProcessData };

  const steps: StepWithIcon[] = process.steps.map((step) => ({
    ...step,
    icon: iconMap[step.icon] || MessageSquare,
  }));

  const currentStep = steps[activeStep];

  return (
    <ProcessContent
      steps={steps}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      currentStep={currentStep}
      Icon={currentStep.icon}
      progress={0} // Not used in current design but kept for compatibility if needed
      process={process}
    />
  );
}

const getStepColors = (colorClass: string) => {
  if (colorClass.includes("sky"))
    return {
      bg: "bg-sky-500",
      border: "border-sky-500",
      text: "text-sky-500",
      shadow: "shadow-sky-500/30",
      ring: "ring-sky-500",
    };
  if (colorClass.includes("purple"))
    return {
      bg: "bg-purple-500",
      border: "border-purple-500",
      text: "text-purple-500",
      shadow: "shadow-purple-500/30",
      ring: "ring-purple-500",
    };
  if (colorClass.includes("emerald"))
    return {
      bg: "bg-emerald-500",
      border: "border-emerald-500",
      text: "text-emerald-500",
      shadow: "shadow-emerald-500/30",
      ring: "ring-emerald-500",
    };
  if (colorClass.includes("orange"))
    return {
      bg: "bg-orange-600",
      border: "border-orange-600",
      text: "text-orange-600",
      shadow: "shadow-orange-600/30",
      ring: "ring-orange-600",
    };
  if (colorClass.includes("yellow"))
    return {
      bg: "bg-yellow-600",
      border: "border-yellow-600",
      text: "text-yellow-600",
      shadow: "shadow-yellow-600/30",
      ring: "ring-yellow-600",
    };
  if (colorClass.includes("indigo"))
    return {
      bg: "bg-indigo-500",
      border: "border-indigo-500",
      text: "text-indigo-500",
      shadow: "shadow-indigo-500/30",
      ring: "ring-indigo-500",
    };

  return {
    bg: "bg-light-primary dark:bg-holographic",
    border: "border-light-primary dark:border-holographic",
    text: "text-light-primary dark:text-holographic",
    shadow: "shadow-light-primary/30 dark:shadow-holographic/30",
    ring: "ring-light-primary dark:ring-holographic",
  };
};

function ProcessContent({
  steps,
  activeStep,
  setActiveStep,
  currentStep,
  Icon,
  process,
}: {
  steps: StepWithIcon[];
  activeStep: number;
  setActiveStep: (idx: number) => void;
  currentStep: StepWithIcon;
  Icon: LucideIcon;
  progress: number;
  process: ProcessData;
}) {
  const currentColors = getStepColors(currentStep.color);

  return (
    <section
      id="process"
      className="bg-transparent py-24 px-4 md:px-6 relative transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-light-primary/5 dark:bg-holographic/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Diseño con underline colorida */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-light-primary/10 dark:bg-holographic/10 rounded-full border-2 border-light-primary/20 dark:border-holographic/20">
            <h2 className="text-xs font-bold text-light-primary dark:text-holographic tracking-widest uppercase">
              {process.badge}
            </h2>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold mb-4 text-light-fg dark:text-white text-balance leading-normal lg:leading-tight">
            {process.title}{" "}
            <span className="relative inline-block">
              <span className="text-light-primary dark:text-holographic">
                {process.titleHighlight}
              </span>
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-light-primary to-cyan-500 dark:from-holographic dark:to-cyan-400 rounded-full" />
            </span>{" "}
            {process.titleSuffix}
          </h2>

          <p className="text-lg text-light-muted dark:text-white/60 max-w-2xl mx-auto font-light">
            {process.description}
          </p>
        </div>

        {/* Timeline Visual con Cards - SOLO MOBILE */}
        <div className="mb-16 lg:hidden">
          <div className="flex justify-start gap-4 overflow-x-auto py-8 px-4 scrollbar-hide -mx-4 md:mx-0 snap-x snap-mandatory">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              const stepColors = getStepColors(step.color);

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-3 min-w-[100px] group relative snap-center shrink-0"
                >
                  {/* Círculo con número */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                        isActive
                          ? `${stepColors.bg} scale-110 ${stepColors.shadow} text-white`
                          : isPast
                            ? `bg-white dark:bg-white/5 border-2 ${stepColors.border}`
                            : "bg-white dark:bg-white/5 border-2 border-light-border dark:border-white/10 group-hover:border-light-primary/50 dark:group-hover:border-holographic/50"
                      }`}
                    >
                      <StepIcon
                        size={isActive ? 28 : 24}
                        className={`transition-all ${
                          isActive
                            ? "text-white"
                            : isPast
                              ? stepColors.text
                              : "text-light-muted dark:text-white/40 group-hover:text-light-primary dark:group-hover:text-holographic"
                        }`}
                      />
                    </div>

                    {/* Badge de número */}
                    <div
                      className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md ${
                        isActive
                          ? `bg-white dark:bg-deep-void ${stepColors.text}`
                          : isPast
                            ? `${stepColors.bg} text-white`
                            : "bg-light-surface dark:bg-deep-void border-2 border-light-border dark:border-white/10 text-light-muted dark:text-white/40"
                      }`}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <span
                      className={`text-xs md:text-sm font-semibold uppercase tracking-wide transition-colors block mb-1 ${
                        isActive
                          ? stepColors.text
                          : isPast
                            ? stepColors.text
                            : "text-light-muted dark:text-white/40 group-hover:text-light-fg dark:group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`text-[10px] font-mono text-light-muted/60 dark:text-white/30 flex items-center justify-center gap-1 ${
                        isActive || isPast
                          ? `opacity-100 ${stepColors.text}`
                          : "opacity-60"
                      }`}
                    >
                      <Clock size={10} />
                      {step.duration}
                    </span>
                  </div>

                  {/* Conector de línea */}
                  {idx < steps.length - 1 && (
                    <div className="absolute  top-12 left-[calc(115%-12px)] w-full h-0.5 bg-light-border dark:bg-white/10 -z-10 hidden md:block">
                      <div
                        className={`h-full transition-all duration-500 ${
                          idx < activeStep ? `w-full ${stepColors.bg}` : "w-0"
                        }`}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8">
          {/* Left Sidebar - Mini Cards - SOLO DESKTOP */}
          <div className="hidden lg:flex lg:col-span-2 space-y-3 flex-col justify-center items-start">
            <h4 className="text-sm font-bold text-light-muted dark:text-white/50 uppercase tracking-wider mb-4 px-2">
              Todas las etapas
            </h4>

            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const stepColors = getStepColors(step.color);

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                    idx === activeStep
                      ? `bg-white dark:bg-white/5 shadow-lg ${stepColors.shadow} border-2 ${stepColors.border}`
                      : "bg-white dark:bg-white/5 hover:bg-light-surface dark:hover:bg-white/10 border-2 border-light-border dark:border-white/10 hover:border-light-primary/30 dark:hover:border-holographic/30 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                        idx === activeStep
                          ? `${stepColors.bg} text-white`
                          : "bg-light-bg dark:bg-white/5 text-light-muted dark:text-white/40 group-hover:bg-light-primary/10 dark:group-hover:bg-holographic/10 group-hover:text-light-primary dark:group-hover:text-holographic"
                      }`}
                    >
                      <StepIcon size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h5
                        className={`text-sm font-bold transition-colors truncate ${
                          idx === activeStep
                            ? stepColors.text
                            : "text-light-fg dark:text-white group-hover:text-light-primary dark:group-hover:text-holographic"
                        }`}
                      >
                        {step.title}
                      </h5>
                      <p className="text-xs text-light-muted dark:text-white/50 truncate">
                        {step.shortDesc}
                      </p>
                    </div>

                    {idx === activeStep && (
                      <ArrowRight size={16} className={stepColors.text} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right - Active Step Detail Card */}
          <div className="w-full lg:col-span-3">
            <div className="bg-white dark:bg-white/5 rounded-3xl border-2 border-light-border dark:border-white/10 shadow-2xl overflow-hidden">
              {/* Card Header con color del step */}
              <div
                className={`p-6 md:p-8 pb-6 bg-gradient-to-br transition-colors duration-300 ${
                  currentStep.color === "text-sky-400"
                    ? "from-sky-50 to-cyan-50 dark:from-sky-500/10 dark:to-cyan-500/5 border-b-2 border-sky-200 dark:border-sky-500/20"
                    : currentStep.color === "text-purple-400"
                      ? "from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/5 border-b-2 border-purple-200 dark:border-purple-500/20"
                      : currentStep.color === "text-emerald-400"
                        ? "from-emerald-50 to-green-50 dark:from-emerald-500/10 dark:to-green-500/5 border-b-2 border-emerald-200 dark:border-emerald-500/20"
                        : currentStep.color === "text-orange-400"
                          ? "from-orange-50 to-amber-50 dark:from-orange-500/10 dark:to-amber-500/5 border-b-2 border-orange-200 dark:border-orange-500/20"
                          : currentStep.color === "text-yellow-400"
                            ? "from-yellow-50 to-amber-50 dark:from-yellow-500/10 dark:to-amber-500/5 border-b-2 border-yellow-200 dark:border-yellow-500/20"
                            : "from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/5 border-b-2 border-indigo-200 dark:border-indigo-500/20"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform ${currentColors.bg} text-white`}
                  >
                    <Icon size={32} />
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-light-border dark:border-white/10 shadow-sm">
                    <Clock size={14} className={currentColors.text} />
                    <span className="text-xs font-bold text-light-fg dark:text-white">
                      {currentStep.duration}
                    </span>
                  </div>
                </div>

                {currentStep.title ? (
                  <h3 className="text-3xl md:text-4xl font-bold text-light-fg dark:text-white mb-3">
                    {currentStep.title}
                  </h3>
                ) : null}

                <p className="text-lg text-light-muted dark:text-white/70 font-light leading-relaxed">
                  {currentStep.shortDesc}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8">
                <h4 className="text-sm font-bold text-light-muted dark:text-white/50 uppercase tracking-wider mb-6">
                  Lo que incluye
                </h4>

                <div className="space-y-4 mb-8">
                  {currentStep.details.map((detail: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div
                        className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-all ${
                          currentStep.color === "text-sky-400"
                            ? "bg-sky-100 dark:bg-sky-500/10 border-2 border-sky-300 dark:border-sky-500/30 group-hover:bg-sky-500 dark:group-hover:bg-sky-500"
                            : currentStep.color === "text-purple-400"
                              ? "bg-purple-100 dark:bg-purple-500/10 border-2 border-purple-300 dark:border-purple-500/30 group-hover:bg-purple-500 dark:group-hover:bg-purple-500"
                              : currentStep.color === "text-emerald-400"
                                ? "bg-emerald-100 dark:bg-emerald-500/10 border-2 border-emerald-300 dark:border-emerald-500/30 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-500"
                                : currentStep.color === "text-orange-400"
                                  ? "bg-orange-100 dark:bg-orange-500/10 border-2 border-orange-300 dark:border-orange-500/30 group-hover:bg-orange-500 dark:group-hover:bg-orange-500"
                                  : currentStep.color === "text-yellow-400"
                                    ? "bg-yellow-100 dark:bg-yellow-500/10 border-2 border-yellow-300 dark:border-yellow-500/30 group-hover:bg-yellow-500 dark:group-hover:bg-yellow-500"
                                    : "bg-indigo-100 dark:bg-indigo-500/10 border-2 border-indigo-300 dark:border-indigo-500/30 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-500"
                        }`}
                      >
                        <CheckCircle2
                          size={14}
                          className={`text-light-primary dark:text-white group-hover:text-white transition-colors`}
                        />
                      </div>
                      <p className="text-base text-light-fg dark:text-white/80 font-light leading-relaxed group-hover:text-light-fg/80 dark:group-hover:text-white transition-colors">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/5492944227526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full ${currentColors.bg} text-white px-8 py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3 group shadow-lg ${currentColors.shadow} hover:shadow-xl hover:-translate-y-1`}
                >
                  {currentStep.cta}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Card Footer - Navigation */}
              <div className="flex justify-between items-center px-4 md:px-8 py-6 bg-light-bg dark:bg-white/5 border-t-2 border-light-border dark:border-white/10">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="flex items-center gap-2 text-light-muted hover:text-light-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-semibold"
                  aria-label="Paso anterior"
                >
                  <ArrowRight size={16} className="rotate-180" />
                  <span className="hidden md:block">Anterior</span>
                </button>

                <div className="flex gap-2">
                  {steps.map((_: StepWithIcon, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      aria-label={`Ir al paso ${idx + 1}`}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeStep
                          ? `w-8 ${currentColors.bg}`
                          : idx < activeStep
                            ? "bg-light-primary/50"
                            : "bg-light-border hover:bg-light-primary/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setActiveStep(Math.min(steps.length - 1, activeStep + 1))
                  }
                  disabled={activeStep === steps.length - 1}
                  className="flex items-center gap-2 text-light-muted hover:text-light-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm font-semibold"
                  aria-label="Siguiente paso"
                >
                  <span className="hidden md:block">Siguiente</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Stats Cards debajo */}
            {/* <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-light-primary/10 to-cyan-50 dark:from-holographic/10 dark:to-cyan-900/10 p-6 rounded-2xl border-2 border-light-primary/20 dark:border-holographic/20">
                <div className="flex items-center gap-3 mb-2">
                  <Clock
                    size={20}
                    className="text-light-primary dark:text-holographic"
                  />
                  <span className="text-xs font-bold text-light-muted dark:text-white/60 uppercase tracking-wider">
                    Duración Total
                  </span>
                </div>
                <div className="text-4xl font-bold text-light-primary dark:text-holographic">
                  7-12{" "}
                  <span className="text-xl text-light-muted dark:text-white/60">
                    días
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-500/10 dark:to-green-500/5 p-6 rounded-2xl border-2 border-emerald-200 dark:border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                  <span className="text-xs font-bold text-light-muted dark:text-white/60 uppercase tracking-wider">
                    Garantía
                  </span>
                </div>
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                  100<span className="text-xl">%</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="mt-16 shadow-2xl  from-light-primary/10 via-cyan-50 to-blue-50 dark:from-holographic/10 dark:via-cyan-900/10 dark:to-blue-900/10 rounded-3xl border-2  border-light-primary/30 dark:border-holographic/30 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-light-surface dark:bg-white/5 bg-[radial-gradient(circle_at_70%_30%,_rgba(20,184,166,0.1),transparent_50%)] pointer-events-none" />

          <h3 className="text-2xl md:text-3xl font-bold text-light-fg dark:text-white mb-4 relative z-10">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-light-muted mb-8 max-w-2xl mx-auto relative z-10">
            Hablemos de tu idea y diseñemos juntos el camino perfecto para tu
            negocio
          </p>

          <a
            href="https://wa.me/5492944227526"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-light-primary dark:bg-holographic text-white dark:text-deep-void px-10 py-5 rounded-2xl font-bold text-lg hover:bg-light-primary/90 dark:hover:bg-holographic/90 transition-all shadow-xl shadow-light-primary/20 dark:shadow-holographic/20 hover:shadow-2xl hover:shadow-light-primary/30 dark:hover:shadow-holographic/30 hover:-translate-y-1 relative z-10"
          >
            Iniciar conversación
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
