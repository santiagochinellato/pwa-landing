"use client";

import { motion } from "framer-motion";
import {
  Star,
  MessageSquareQuote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import siteContent from "@/data/site-content.json";

export default function TestimonialsSection() {
  const { testimonials } = siteContent;
  const testimonialList = testimonials.list;
  const [index, setIndex] = useState(0);

  const testimonial = testimonialList[index];

  return (
    <section
      id="testimonials"
      className="py-20 bg-transparent relative overflow-hidden border-t border-light-border dark:border-white/5 transition-colors duration-300"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-light-primary/5 dark:bg-holographic/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-sm font-mono text-light-primary dark:text-holographic tracking-widest mb-2">
              {testimonials.badge}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-light-fg dark:text-white">
              {testimonials.title}{" "}
              <span className="text-light-primary dark:text-holographic">
                {testimonials.titleHighlight}
              </span>
            </h3>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2">
            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? testimonialList.length - 1 : prev - 1
                )
              }
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-light-surface dark:bg-white/5 border border-light-border dark:border-white/10 hover:bg-light-primary/20 dark:hover:bg-holographic/20 hover:text-light-primary dark:hover:text-holographic hover:border-light-primary/50 dark:hover:border-holographic/50 transition-all active:scale-95 bg-white dark:bg-transparent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % testimonialList.length)
              }
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-light-surface dark:bg-white/5 border border-light-border dark:border-white/10 hover:bg-light-primary/20 dark:hover:bg-holographic/20 hover:text-light-primary dark:hover:text-holographic hover:border-light-primary/50 dark:hover:border-holographic/50 transition-all active:scale-95 bg-white dark:bg-transparent"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="relative min-h-[300px]">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full p-8 md:p-12 rounded-2xl bg-light-surface dark:bg-white/5 border border-light-border dark:border-white/10 hover:border-light-primary dark:hover:border-holographic/30 transition-all duration-300 group flex flex-col hover:bg-light-surface dark:hover:bg-white/10 shadow-sm dark:shadow-none bg-white dark:bg-transparent relative"
          >
            {/* Stars */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-light-primary dark:text-holographic fill-current"
                  />
                ))}
              </div>
              <MessageSquareQuote
                size={32}
                className="text-light-muted/20 dark:text-white/20 group-hover:text-light-primary/50 dark:group-hover:text-holographic/50 transition-colors"
              />
            </div>

            <p className="text-light-fg dark:text-white/80 font-light leading-relaxed mb-8 flex-1 text-lg md:text-xl italic">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-light-border dark:border-white/5 pt-6 mt-auto">
              {/* <div className="relative w-12 h-12 rounded-full overflow-hidden border border-light-border dark:border-white/10 group-hover:border-light-primary dark:group-hover:border-holographic/50 transition-colors shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div> */}
              <div>
                <h4 className="font-bold text-light-fg dark:text-white text-base">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-light-muted dark:text-white/40 font-mono uppercase tracking-wider">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
