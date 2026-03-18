"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Code2, Target, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";
import MacizoLogoAnimation from "@/components/ui/macizo-logo-animation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function WhyMacizoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-transparent">
      <div className="max-w-[1500px] mx-auto px-4">
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
              <p>
                En Patagonia, un macizo es una formación rocosa que{" "}
                <strong className="text-foreground font-medium">no cede</strong>.
                No
                se erosiona con el tiempo, no se mueve con el viento, no falla
                bajo presión. Es la base sobre la que se construye todo lo
                demás.
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

              <p className="leading-relaxed">
                Hay miles de estudios que te hacen una web. La diferencia está
                en qué pasa seis meses después: si escala, si resiste el
                tráfico, si sigue funcionando cuando tu negocio crece.
                 <strong className="text-primary dark:text-holographic"> MacizoDigital</strong> nació con una convicción:{" "}
                <strong className=" text-primary dark:text-holographic">
                  una web mal construida no es un activo, es un problema que
                  se acumula.
                </strong>{" "}
                  Por eso <strong className="text-primary dark:text-holographic">cada proyecto arranca desde los cimientos, no desde la
                  estética</strong>.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="mt-10">
              <h4 className="text-2xs md:text-1xl font-bold tracking-widest uppercase text-light-muted dark:text-white/50 mb-6">
                Los 3 Principios
              </h4>

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

            <motion.div {...fadeUp} className="mt-10 space-y-2">
              <p className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground/50">
                Desde acá, para donde sea
              </p>
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Desde la Patagonia, para cualquier lugar.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Trabajamos desde Bariloche no como una limitación, sino como
                una identidad. La misma geografía que inspiró el nombre define
                nuestra forma de trabajar:{" "}
                <strong className="text-primary dark:text-holographic">
                  sin apuros superficiales, con foco en lo que dura.
                </strong>
              </p>
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

