"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import siteContent from "@/data/site-content.json";

const INDUSTRY_MAP: Record<string, string> = {
  "Estudio Cils": "Servicios profesionales",
  "Baritrekking": "Turismo aventura",
  "InterPracsys": "Software B2B",
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

        {/* Grid Layout - No Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
        </div>
      </div>
    </section>
  );
}
