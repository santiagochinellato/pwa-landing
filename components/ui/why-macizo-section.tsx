"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Eye,
  Globe,
  Shield,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import MacizoLogoAnimation from "@/components/ui/macizo-logo-animation";
import MountainBackground from "@/components/ui/mountain-background";
import siteContent from "@/data/site-content.json";

const content = siteContent.whyMacizo;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

type LucideIcon = ComponentType<{ size?: number; className?: string }>;

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Shield,
  Zap,
  Globe,
  Target,
  TrendingUp,
  Eye,
};

// Word card color config (positional, matches JSON order)
const WORD_CARD_STYLES = [
  {
    color:
      "bg-light-primary/10 dark:bg-holographic/10 border-light-primary/20 dark:border-holographic/20",
    textColor: "text-light-primary dark:text-holographic",
  },
  {
    color:
      "bg-light-fg/5 dark:bg-white/5 border-light-border dark:border-white/10",
    textColor: "text-light-fg dark:text-white",
  },
];

type WhyMacizoVariant = "full" | "summary";

export default function WhyMacizoSection({
  variant = "full",
}: {
  variant?: WhyMacizoVariant;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });
  const isSummary = variant === "summary";
  const s = content.summary;

  if (isSummary) {
    return (
      <section ref={sectionRef} className="py-24 md:py-32 bg-transparent">
        <div className="max-w-[1500px] mx-auto px-4">
          {/* ── SUMMARY VARIANT ─────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">
            {/* LEFT — copy */}
            <div>
              {/* eyebrow */}
              <motion.p
                {...fadeUp}
                className="text-xs font-bold tracking-widest uppercase
         text-light-muted dark:text-white/40 mb-4"
              >
                {s.eyebrow}
              </motion.p>

              {/* title — much larger, accent on key word */}
              <motion.h2
                {...fadeUp}
                className="text-4xl md:text-6xl font-extrabold tracking-tight
         text-light-fg dark:text-white leading-[1.05] mb-4"
              >
                {s.titlePrefix}{" "}
                <span className="text-light-primary dark:text-holographic">
                  {s.titleAccent}
                </span>
                {s.titleSuffix}
              </motion.h2>

              {/* subtitle — italic, secondary, clearly subordinate */}
              <motion.p
                {...fadeUp}
                className="text-base md:text-lg font-normal italic
         text-light-muted dark:text-white/50 mb-8"
              >
                {s.subtitle}
              </motion.p>

              {/* body */}
              <motion.div
                {...fadeUp}
                className="space-y-5 text-base md:text-lg
         text-light-muted dark:text-white/70 mb-8"
              >
                <p>
                  {s.body1}{" "}
                  <strong className="text-light-fg dark:text-white font-medium">
                    {s.body1Strong}
                  </strong>
                  {s.body1Rest}
                </p>
                <p>{s.body2}</p>

                <blockquote
                  className="border-l-4 border-light-primary/80
           dark:border-holographic/70 pl-5 my-2"
                >
                  <span
                    className="block text-2xl md:text-3xl font-bold
             text-light-fg dark:text-white leading-snug"
                  >
                    {s.quoteMain}
                    <br />
                    {s.quotePre}{" "}
                    <span className="text-light-primary dark:text-holographic">
                      {s.quoteAccent}
                    </span>
                  </span>
                </blockquote>
              </motion.div>

              {/* CTA with bridge text */}
              <motion.div {...fadeUp} className="space-y-3">
                <p className="text-sm text-light-muted dark:text-white/40">
                  {s.ctaBridge}
                </p>
                <Link
                  href={s.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full
           bg-light-primary dark:bg-holographic
           text-white dark:text-deep-void
           px-8 py-4 text-base font-bold
           hover:scale-105 hover:opacity-90 transition-all
           shadow-lg shadow-light-primary/20 dark:shadow-holographic/20"
                >
                  {s.ctaButton}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — logo visual */}
            <motion.div
              {...fadeUp}
              className="hidden lg:flex items-center justify-center"
            >
              <MacizoLogoAnimation variant="hero" showWordmark={false} />
            </motion.div>
          </div>
        </div>
      </section>
  );
  }

  const hero = content.hero;
  const nombre = content.nombre;
  const vm = content.visionMision;
  const valores = content.valores;
  const principios = content.principios;
  const patagonia = content.patagonia;

  return (
    <section className="bg-transparent">
      {/* SUB-SECTION 1 — Hero intro */}
      <section className="py-24 md:py-40 bg-transparent">
        <div className="max-w-[1500px] mx-auto px-4 md:px-12 text-center">
          {/* eyebrow */}
          <p className="text-xs font-bold tracking-widest uppercase text-light-muted dark:text-white/40 mb-6">
            {hero.eyebrow}
          </p>

          {/* main title — split for accent */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-light-fg dark:text-white leading-[1.02] mb-8">
            {hero.title}
            <br />
            <span className="text-light-primary dark:text-holographic">
              {hero.titleAccent}
            </span>
          </h1>

          {/* tagline from brand guide */}
          <p className="text-xl md:text-2xl text-light-muted dark:text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {hero.tagline}
          </p>

          {/* animated scroll hint */}
          <div className="flex flex-col items-center gap-2 text-light-muted/50 dark:text-white/20 text-xs font-mono tracking-widest uppercase">
            <span>{hero.scrollHint}</span>
            <div className="w-px h-12 bg-light-primary/30 dark:bg-holographic/30 animate-pulse" />
          </div>
        </div>
      </section>

      {/* SUB-SECTION 2 — El nombre (two-column + sticky logo) */}
      <section
        ref={sectionRef}
        className="py-24 md:py-32 bg-transparent"
      >
        <div className="max-w-[1500px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-start">
            <div>
              <motion.h2
                {...fadeUp}
                className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
              >
                {nombre.title}
              </motion.h2>

              <motion.h3
                {...fadeUp}
                className="mt-4 text-lg md:text-xl font-normal italic text-muted-foreground"
              >
                <span className="text-light-primary dark:text-holographic font-bold">
                  {nombre.subtitleAccent}
                </span>
              </motion.h3>

              <motion.div
                {...fadeUp}
                className="mt-8 space-y-7 text-base md:text-lg text-muted-foreground"
              >
                <>
                  <p>
                    {nombre.body1}{" "}
                    <strong className="text-foreground font-medium">
                      {nombre.body1Strong}
                    </strong>
                    {nombre.body1Rest}
                  </p>

                  <p>{nombre.body2}</p>

                  <blockquote className="border-l-4 border-light-primary/80 dark:border-holographic/70 pl-5 my-6">
                    <span className="block text-2xl md:text-3xl font-bold text-foreground leading-snug">
                      {nombre.quoteMain}
                      <br />
                      {nombre.quotePre}{" "}
                      <span className="text-light-primary dark:text-holographic">
                        {nombre.quoteAccent}
                      </span>
                    </span>
                  </blockquote>

                  {/* anatomía del nombre */}
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    {nombre.wordCards.map((item, idx) => {
                      const style = WORD_CARD_STYLES[idx] ?? WORD_CARD_STYLES[0];
                      return (
                        <div
                          key={item.word}
                          className={`rounded-2xl border p-6 ${style.color}`}
                        >
                          <p
                            className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-2 ${style.textColor}`}
                          >
                            {item.word}
                          </p>
                          <p className="text-xs font-mono text-light-muted dark:text-white/40 uppercase tracking-widest mb-3">
                            {item.origin}
                          </p>
                          <p className="text-sm text-light-muted dark:text-white/70 leading-relaxed">
                            {item.means}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <p className="leading-relaxed">
                    {nombre.body3Pre}
                    <strong className="text-primary dark:text-holographic">
                      {" "}
                      {nombre.body3Brand}
                    </strong>{" "}
                    {nombre.body3Mid}{" "}
                    <strong className=" text-primary dark:text-holographic">
                      {nombre.body3Accent1}
                    </strong>{" "}
                    {nombre.body3End}{" "}
                    <strong className="text-primary dark:text-holographic">
                      {nombre.body3Accent2}
                    </strong>
                    {nombre.body3Closing}
                  </p>
                </>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp}
              className="md:sticky md:top-[20%] self-start flex justify-center"
            >
              <MacizoLogoAnimation
                variant="hero"
                showWordmark={false}
                buildProgress={scrollYProgress}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUB-SECTION 3 — Visión & Misión */}
      <section className="py-16 md:py-24 bg-light-surface dark:bg-white/5 border-t border-b border-light-border dark:border-white/5">
        <div className="max-w-[1500px] mx-auto px-4 md:px-12">
          <p className="text-xs font-bold tracking-widest uppercase text-light-muted dark:text-white/40 mb-10">
            {vm.eyebrow}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Visión */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-light-primary/10 dark:bg-holographic/10 flex items-center justify-center">
                  <Eye
                    size={16}
                    className="text-light-primary dark:text-holographic"
                  />
                </div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-light-primary dark:text-holographic">
                  {vm.vision.label}
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-light-fg dark:text-white leading-snug mb-4">
                {vm.vision.headline}
              </p>
              <p className="text-base text-light-muted dark:text-white/60 leading-relaxed">
                {vm.vision.body}
              </p>
            </div>

            {/* Misión */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-light-primary/10 dark:bg-holographic/10 flex items-center justify-center">
                  <Target
                    size={16}
                    className="text-light-primary dark:text-holographic"
                  />
                </div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-light-primary dark:text-holographic">
                  {vm.mision.label}
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-light-fg dark:text-white leading-snug mb-4">
                {vm.mision.headline}
              </p>
              <p className="text-base text-light-muted dark:text-white/60 leading-relaxed">
                {vm.mision.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-SECTION 4 — Los 4 valores de voz */}
      <section className="py-16 md:py-24 bg-transparent border-t border-light-border dark:border-white/5">
        <div className="max-w-[1500px] mx-auto px-4 md:px-12">
          <p className="text-xs font-bold tracking-widest uppercase text-light-muted dark:text-white/40 mb-3">
            {valores.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-fg dark:text-white mb-12">
            {valores.title}{" "}
            <span className="text-light-primary dark:text-holographic">
              {valores.titleAccent}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valores.items.map((v, i) => {
              const Icon = ICON_MAP[v.icon] ?? Code2;
              return (
                <motion.div
                  key={v.label}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="rounded-2xl border border-light-border dark:border-white/10 bg-light-surface/40 dark:bg-white/5 p-8 group hover:border-light-primary/40 dark:hover:border-holographic/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-light-primary/10 dark:bg-holographic/10 border border-light-primary/20 dark:border-holographic/20 flex items-center justify-center text-light-primary dark:text-holographic shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-widest uppercase text-light-muted dark:text-white/40 mb-1">
                        Valor {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="text-xl font-bold text-light-fg dark:text-white">
                        {v.label}
                      </p>
                    </div>
                  </div>

                  <p className="text-base font-semibold text-light-fg dark:text-white/90 leading-snug mb-3">
                    {v.headline}
                  </p>

                  <p className="text-sm text-light-muted dark:text-white/60 leading-relaxed mb-4">
                    {v.body}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-light-muted/60 dark:text-white/30 font-mono">
                    <span className="w-3 h-px bg-current" />
                    {v.not}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUB-SECTION 5 — Los 3 principios */}
      <section className="py-16 md:py-24 bg-light-surface dark:bg-white/5 border-t border-light-border dark:border-white/5">
        <div className="max-w-[1500px] mx-auto px-4 md:px-12">
          <p className="text-xs font-bold tracking-widest uppercase text-light-muted dark:text-white/40 mb-3">
            {principios.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-fg dark:text-white mb-12">
            {principios.title}{" "}
            <span className="text-light-primary dark:text-holographic">
              {principios.titleAccent}
            </span>
          </h2>

          <motion.div {...fadeUp} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {principios.items.map((p, i) => (
                <PrincipleCard
                  key={p.title}
                  index={i + 1}
                  icon={ICON_MAP[p.icon] ?? Code2}
                  title={p.title}
                  lead={p.lead}
                  body={p.body}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUB-SECTION 6 — Patagonia closing */}
      <section className="py-24 md:py-40 bg-transparent border-t border-light-border dark:border-white/5 relative overflow-hidden">
        {/* decorative mountain background */}
        <MountainBackground
          className="absolute bottom-0 left-0 w-full h-[280px] md:h-[500px] z-0 opacity-40 dark:opacity-30"
        />

        <div className="max-w-[1500px] mx-auto px-4 md:px-12 relative z-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-light-muted dark:text-white/40 mb-6">
            {patagonia.eyebrow}
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-light-fg dark:text-white leading-[1.05] mb-8">
            {patagonia.titleLine1}
            <br />
            <span className="text-light-primary dark:text-holographic">
              {patagonia.titleAccent}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-light-muted dark:text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {patagonia.body}{" "}
            <strong className="text-light-fg dark:text-white font-medium">
              {patagonia.bodyStrong}
            </strong>
          </p>

          <a
            href={patagonia.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-light-primary dark:bg-holographic text-white dark:text-deep-void font-bold text-lg hover:scale-105 hover:opacity-90 transition-all shadow-lg shadow-light-primary/20 dark:shadow-holographic/20"
          >
            {patagonia.ctaButton}
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </section>
  );
}

function PrincipleCard({
  index,
  icon: Icon,
  title,
  lead,
  body,
}: {
  index: number;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  lead: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      className="h-full rounded-2xl border border-light-border/70 dark:border-white/10 bg-light-surface/40 dark:bg-white/5 p-6"
    >
      <div className="flex flex-col items-start gap-4">
        <div className="w-10 h-10 rounded-xl border border-light-border/70 dark:border-white/10 bg-primary/10 flex items-center justify-center text-light-primary dark:text-holographic shrink-0">
          <Icon size={16} />
        </div>

        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <p className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground/60">
              {String(index).padStart(2, "0")} — {title.toUpperCase()}
            </p>
          </div>

          <p className="text-base font-bold text-foreground leading-snug">
            {lead}
          </p>

          <div className="border-l border-light-border/50 dark:border-white/10 pl-3 mt-1">
            <p className="text-xs md:text-sm text-muted-foreground/70 leading-relaxed italic">
              {body}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
