"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function TestimonialsSection() {
  const { testimonials } = siteContent;
  const testimonialList = testimonials.list;

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-transparent relative overflow-hidden border-t border-light-border dark:border-white/5 transition-colors duration-300"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-light-primary/5 dark:bg-holographic/5 rounded-full blur-[100px] pointer-events-none" />

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
          {testimonialList.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-light-surface dark:bg-white/5 border border-light-border dark:border-white/10 hover:border-light-primary/50 dark:hover:border-holographic/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-none flex flex-col h-full relative group"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageSquareQuote
                  size={40}
                  className="text-light-primary dark:text-holographic"
                />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-light-primary dark:text-holographic fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-light-fg dark:text-white/90 text-lg leading-relaxed mb-8 flex-1 font-light italic">
                &quot;{testimonial.content}&quot;
              </blockquote>

              <div className="pt-6 border-t border-light-border dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-light-primary/10 dark:bg-holographic/10 flex items-center justify-center text-light-primary dark:text-holographic font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-light-fg dark:text-white text-base leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-light-muted dark:text-white/40 font-mono uppercase tracking-wider mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
