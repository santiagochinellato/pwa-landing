"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import siteContent from "@/data/site-content.json";
import { useEffect, useMemo, useState } from "react";

const INDUSTRY_MAP: Record<string, string> = {
  "Estudio Cils": "ESTUDIO CONTABLE",
  "Baritrekking": "COMUNIDAD DE TREKKING",
  "InterPracsys": "SOFTWARE A MEDIDA",
  "Consultorios Morales": "CENTRO MÉDICO",
  "Martín Quero": "COACHING ONTOLÓGICO",
  "Del Valle Soluciones": "SOLUCIONES TECNOLÓGICAS",
  "Gnet": "INTERNET Y REDES",
};

export default function TestimonialsSection({
  limit,
}: {
  limit?: number;
}) {
  const { testimonials } = siteContent;
  const testimonialList = testimonials.list;
  const visibleTestimonials =
    typeof limit === "number"
      ? testimonialList.slice(0, limit)
      : testimonialList;

  const [perView, setPerView] = useState<number>(1);
  const [activeStartIndex, setActiveStartIndex] = useState<number>(0);

  const maxStartIndex = useMemo(() => {
    return Math.max(0, visibleTestimonials.length - perView);
  }, [perView, visibleTestimonials.length]);

  useEffect(() => {
    const computePerView = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };

    computePerView();
    window.addEventListener("resize", computePerView);
    return () => window.removeEventListener("resize", computePerView);
  }, []);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      setActiveStartIndex((prev) => Math.min(prev, maxStartIndex));
    });
    return () => window.cancelAnimationFrame(raf);
  }, [maxStartIndex]);

  const carouselTestimonials = useMemo(() => {
    return visibleTestimonials.slice(
      activeStartIndex,
      activeStartIndex + perView,
    );
  }, [activeStartIndex, perView, visibleTestimonials]);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-transparent border-t border-light-border dark:border-white/5 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[10px] md:text-sm font-mono text-light-primary dark:text-holographic tracking-wide md:tracking-widest mb-3 uppercase">
            {testimonials.badge}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-light-fg dark:text-white mb-4">
            {testimonials.title}{" "}
            <span className="text-light-primary dark:text-holographic">
              {testimonials.titleHighlight}
            </span>
          </h3>
          <p className="text-lg text-light-muted dark:text-white/60 max-w-2xl mx-auto">
            {testimonials.subtitle}
          </p>
        </div>

        <motion.div
          key={activeStartIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {carouselTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="rounded-2xl bg-light-surface dark:bg-white/5
     border border-light-border dark:border-white/10
     hover:border-light-primary/40 dark:hover:border-holographic/40
     hover:-translate-y-1 transition-all duration-300
     shadow-sm hover:shadow-lg dark:shadow-none
     flex flex-col h-full p-7 md:p-8"
            >
              {/* ── Top row: industry tag + stars ── */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-[11px] font-bold tracking-widest uppercase
         px-3 py-1 rounded-full
         bg-light-primary/10 dark:bg-holographic/10
         border border-light-primary/20 dark:border-holographic/20
         text-light-primary dark:text-holographic"
                >
                  {INDUSTRY_MAP[testimonial.name] ?? "Desarrollo web"}
                </span>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="text-light-primary dark:text-holographic fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* ── Opening quote mark ── */}
              <p
                className="text-5xl font-bold leading-none mb-1 select-none
       text-light-border dark:text-white/10"
                aria-hidden="true"
              >
                &ldquo;
              </p>

              {/* ── Quote text — protagonist ── */}
              <blockquote
                className="text-light-fg dark:text-white/90 text-base md:text-lg
       leading-relaxed flex-1 font-light italic mb-6"
              >
                {testimonial.content}
              </blockquote>

              {/* ── Divider ── */}
              <div className="border-t border-light-border dark:border-white/5 mb-5" />

              {/* ── Author ── */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full shrink-0
         bg-light-primary/10 dark:bg-holographic/10
         flex items-center justify-center
         text-light-primary dark:text-holographic
         font-bold text-sm"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-bold text-light-fg dark:text-white
         text-sm leading-tight"
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-[11px] text-light-muted dark:text-white/40
         font-mono uppercase tracking-wider mt-0.5"
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {(visibleTestimonials.length > perView || maxStartIndex > 0) && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveStartIndex((prev) =>
                  Math.max(0, prev - perView),
                )
              }
              disabled={activeStartIndex === 0}
              aria-label="Reseñas anteriores"
              className="inline-flex items-center justify-center rounded-full
                border border-light-border dark:border-white/10
                px-4 py-3
                text-light-fg dark:text-white
                hover:border-light-primary/40 dark:hover:border-holographic/40
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="text-[11px] text-light-muted dark:text-white/40 font-mono">
              {Math.floor(activeStartIndex / perView) + 1} /{" "}
              {Math.max(1, Math.ceil(visibleTestimonials.length / perView))}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveStartIndex((prev) =>
                  Math.min(maxStartIndex, prev + perView),
                )
              }
              disabled={activeStartIndex === maxStartIndex}
              aria-label="Próximas reseñas"
              className="inline-flex items-center justify-center rounded-full
                border border-light-border dark:border-white/10
                px-4 py-3
                text-light-fg dark:text-white
                hover:border-light-primary/40 dark:hover:border-holographic/40
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
