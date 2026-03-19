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

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

type LucideIcon = ComponentType<{ size?: number; className?: string }>;

type ValorItem = {
  label: string;
  icon: LucideIcon;
  headline: string;
  body: string;
  not: string;
};

const VALORES = [
  {
    label: "Técnico",
    icon: Code2,
    headline: "Usamos términos precisos porque el cliente lo merece.",
    body: "CSS Grid, API-first, Core Web Vitals. No simplificamos de más ni exhibimos conocimiento innecesario. Hablamos con claridad técnica.",
    not: "No es jerga incomprensible.",
  },
  {
    label: "Confiable",
    icon: Shield,
    headline: "Cada afirmación tiene respaldo técnico.",
    body: "Las promesas que hacemos son demostrables. No vendemos humo. Si decimos que carga en 1.5 segundos, medimos y mostramos el número.",
    not: "No es arrogancia. No promete lo imposible.",
  },
  {
    label: "Directo",
    icon: Zap,
    headline: "Sin relleno. Cada frase tiene un propósito.",
    body: "No usamos tres palabras cuando una alcanza. La brevedad no elimina la calidez — la concentra.",
    not: "No es frío ni robótico.",
  },
  {
    label: "Local + Global",
    icon: Globe,
    headline: "Orgullosos de ser patagónicos. Capaces de trabajar con cualquier cliente del mundo.",
    body: "Bariloche no es una limitación. Es una identidad. La misma rigurosidad con la que se construye en este lugar define cómo trabajamos.",
    not: "No es folklorista ni provinciano.",
  },
] as const satisfies readonly ValorItem[];

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
                Estudio de desarrollo web · Bariloche, Patagonia
              </motion.p>

              {/* title — much larger, accent on key word */}
              <motion.h2
                {...fadeUp}
                className="text-4xl md:text-6xl font-extrabold tracking-tight
         text-light-fg dark:text-white leading-[1.05] mb-4"
              >
                Por qué{" "}
                <span className="text-light-primary dark:text-holographic">
                  Macizo
                </span>
                Digital
              </motion.h2>

              {/* subtitle — italic, secondary, clearly subordinate */}
              <motion.p
                {...fadeUp}
                className="text-base md:text-lg font-normal italic
         text-light-muted dark:text-white/50 mb-8"
              >
                El nombre no es un accidente.
              </motion.p>

              {/* body */}
              <motion.div
                {...fadeUp}
                className="space-y-5 text-base md:text-lg
         text-light-muted dark:text-white/70 mb-8"
              >
                <p>
                  En Patagonia, un macizo es una formación rocosa que{" "}
                  <strong className="text-light-fg dark:text-white font-medium">
                    no cede
                  </strong>
                  . No se erosiona con el tiempo, no se mueve con el viento,
                  no falla bajo presión. Es la base sobre la que se construye
                  todo lo demás.
                </p>
                <p>Eso es lo que hacemos con tu negocio en internet.</p>

                <blockquote
                  className="border-l-4 border-light-primary/80
           dark:border-holographic/70 pl-5 my-2"
                >
                  <span
                    className="block text-2xl md:text-3xl font-bold
             text-light-fg dark:text-white leading-snug"
                  >
                    No construimos páginas.
                    <br />
                    Construimos{" "}
                    <span className="text-light-primary dark:text-holographic">
                      cimientos.
                    </span>
                  </span>
                </blockquote>
              </motion.div>

              {/* CTA with bridge text */}
              <motion.div {...fadeUp} className="space-y-3">
                <p className="text-sm text-light-muted dark:text-white/40">
                  Conocé la historia y filosofía detrás de la marca.
                </p>
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 rounded-full
           bg-light-primary dark:bg-holographic
           text-white dark:text-deep-void
           px-8 py-4 text-base font-bold
           hover:scale-105 hover:opacity-90 transition-all
           shadow-lg shadow-light-primary/20 dark:shadow-holographic/20"
                >
                  Leer nuestro manifiesto
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

  return (
    <section className="bg-transparent">
      {/* SUB-SECTION 1 — Hero intro */}
      <section className="py-24 md:py-40 bg-transparent">
        <div className="max-w-[1500px] mx-auto px-4 md:px-12 text-center">
          {/* eyebrow */}
          <p className="text-xs font-bold tracking-widest uppercase text-light-muted dark:text-white/40 mb-6">
            Estudio de desarrollo web · Bariloche, Patagonia
          </p>

          {/* main title — split for accent */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-light-fg dark:text-white leading-[1.02] mb-8">
            Construimos lo que
            <br />
            <span className="text-light-primary dark:text-holographic">
              no se rompe.
            </span>
          </h1>

          {/* tagline from brand guide */}
          <p className="text-xl md:text-2xl text-light-muted dark:text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Maquetación sólida, estructura unificada.
          </p>

          {/* animated scroll hint */}
          <div className="flex flex-col items-center gap-2 text-light-muted/50 dark:text-white/20 text-xs font-mono tracking-widest uppercase">
            <span>Scrolleá para conocernos</span>
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
                Por qué MacizoDigital
              </motion.h2>

              <motion.h3
                {...fadeUp}
                className="mt-4 text-lg md:text-xl font-normal italic text-muted-foreground"
              >
                <span className="text-light-primary dark:text-holographic font-bold">
                  El nombre no es un{" "}
                  accidente.
                </span>
              </motion.h3>

              <motion.div
                {...fadeUp}
                className="mt-8 space-y-7 text-base md:text-lg text-muted-foreground"
              >
                <>
                  <p>
                    En Patagonia, un macizo es una formación rocosa que{" "}
                    <strong className="text-foreground font-medium">
                      no cede
                    </strong>
                    . No se erosiona con el tiempo, no se mueve con el viento,
                    no falla bajo presión. Es la base sobre la que se construye
                    todo lo demás.
                  </p>

                  <p>Eso es lo que hacemos con tu negocio en internet.</p>

                  <blockquote className="border-l-4 border-light-primary/80 dark:border-holographic/70 pl-5 my-6">
                    <span className="block text-2xl md:text-3xl font-bold text-foreground leading-snug">
                      No construimos páginas.
                      <br />
                      Construimos{" "}
                      <span className="text-light-primary dark:text-holographic">
                        cimientos.
                      </span>
                    </span>
                  </blockquote>

                  {/* anatomía del nombre */}
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    {[
                      {
                        word: "MACIZO",
                        origin: "Latín / Español geográfico",
                        means:
                          "Formación rocosa sólida, inamovible. Libre de fisuras.",
                        color:
                          "bg-light-primary/10 dark:bg-holographic/10 border-light-primary/20 dark:border-holographic/20",
                        textColor: "text-light-primary dark:text-holographic",
                      },
                      {
                        word: "DIGITAL",
                        origin: "Inglés técnico universal",
                        means:
                          "Arena tecnológica. Infraestructura de datos y software.",
                        color:
                          "bg-light-fg/5 dark:bg-white/5 border-light-border dark:border-white/10",
                        textColor: "text-light-fg dark:text-white",
                      },
                    ].map((item) => (
                      <div
                        key={item.word}
                        className={`rounded-2xl border p-6 ${item.color}`}
                      >
                        <p
                          className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-2 ${item.textColor}`}
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
                    ))}
                  </div>

                  <p className="leading-relaxed">
                    Hay miles de estudios que te hacen una web. La diferencia
                    está en qué pasa seis meses después: si escala, si resiste
                    el tráfico, si sigue funcionando cuando tu negocio crece.
                    <strong className="text-primary dark:text-holographic">
                      {" "}
                      MacizoDigital
                    </strong>{" "}
                    nació con una convicción:{" "}
                    <strong className=" text-primary dark:text-holographic">
                      una web mal construida no es un activo, es un problema
                      que se acumula.
                    </strong>{" "}
                    Por eso{" "}
                    <strong className="text-primary dark:text-holographic">
                      cada proyecto arranca desde los cimientos, no desde la
                      estética
                    </strong>
                    .
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
            Visión y misión
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
                  Visión
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-light-fg dark:text-white leading-snug mb-4">
                Ser el estudio de referencia en infraestructura digital desde la
                Patagonia para el mundo.
              </p>
              <p className="text-base text-light-muted dark:text-white/60 leading-relaxed">
                No solo hacer webs. Construir la base digital sobre la que los
                negocios crecen sin límite geográfico.
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
                  Misión
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-light-fg dark:text-white leading-snug mb-4">
                Construir estructuras digitales que duren, que escalen y que no
                fallen.
              </p>
              <p className="text-base text-light-muted dark:text-white/60 leading-relaxed">
                En un mercado saturado de soluciones rápidas y frágiles,
                entregamos cimientos sólidos. No páginas: infraestructuras que
                sostienen negocios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-SECTION 4 — Los 4 valores de voz */}
      <section className="py-16 md:py-24 bg-transparent border-t border-light-border dark:border-white/5">
        <div className="max-w-[1500px] mx-auto px-4 md:px-12">
          <p className="text-xs font-bold tracking-widest uppercase text-light-muted dark:text-white/40 mb-3">
            Cómo somos
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-fg dark:text-white mb-12">
            Los valores que guían{" "}
            <span className="text-light-primary dark:text-holographic">
              cada decisión.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALORES.map((v, i) => {
              const Icon = v.icon;
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
            Filosofía de trabajo
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-fg dark:text-white mb-12">
            Los 3 principios que{" "}
            <span className="text-light-primary dark:text-holographic">
              no negociamos.
            </span>
          </h2>

          <motion.div {...fadeUp} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <PrincipleCard
                index={1}
                icon={Code2}
                title="Solidez"
                body="Lo que construimos no se rompe.
Código limpio, arquitecturas sin deuda técnica. Lo que entregamos aguanta el tiempo, el tráfico y el crecimiento."
              />
              <PrincipleCard
                index={2}
                icon={Target}
                title="Precisión"
                body="Los detalles son los que generan confianza.
No decoramos: comunicamos. Cada elemento está donde está por una razón, y esa razón siempre es tu cliente."
              />
              <PrincipleCard
                index={3}
                icon={TrendingUp}
                title="Escala"
                body="Pensamos en tu negocio de acá a dos años.
Construimos para el lanzamiento y para lo que viene después. Si crecés, tu web crece con vos."
              />
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
            Desde acá, para donde sea
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-light-fg dark:text-white leading-[1.05] mb-8">
            Desde la Patagonia,
            <br />
            <span className="text-light-primary dark:text-holographic">
              para cualquier lugar.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-light-muted dark:text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Trabajamos desde Bariloche no como una limitación, sino como una
            identidad. La misma geografía que inspiró el nombre define nuestra
            forma de trabajar:{" "}
            <strong className="text-light-fg dark:text-white font-medium">
              sin apuros superficiales, con foco en lo que dura.
            </strong>
          </p>

          <a
            href="https://wa.me/5492944227526"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-light-primary dark:bg-holographic text-white dark:text-deep-void font-bold text-lg hover:scale-105 hover:opacity-90 transition-all shadow-lg shadow-light-primary/20 dark:shadow-holographic/20"
          >
            Hablemos de tu proyecto
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
  body,
}: {
  index: number;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
}) {
  const parts = body
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const lead = parts[0] ?? "";
  const rest = parts.slice(1).join(" ");

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

          {rest ? (
            <div className="border-l border-light-border/50 dark:border-white/10 pl-3 mt-1">
              <p className="text-xs md:text-sm text-muted-foreground/70 leading-relaxed italic">
                {rest}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

