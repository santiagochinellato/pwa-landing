"use client";

import {
  Star,
  MessageSquareQuote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import siteContent from "@/data/site-content.json";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const { testimonials } = siteContent;
  const testimonialList = testimonials.list;

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, index, testimonialList.length]);

  // Handle Touch/Mobile "Resolve Differently"
  // We use standard touch events to pause autoplay
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    // Optional delay before resuming avoids restarting immediately if user just tapped
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section className="py-20 bg-deep-void relative overflow-hidden border-t border-white/5">
      {/* Background decorations - Reduced opacity for cleaner look */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-holographic/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-sm font-mono text-holographic tracking-widest mb-2">
              {testimonials.badge}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {testimonials.title}{" "}
              <span className="text-holographic">
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
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-holographic/20 hover:text-holographic hover:border-holographic/50 transition-all active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % testimonialList.length)
              }
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-holographic/20 hover:text-holographic hover:border-holographic/50 transition-all active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="overflow-hidden -mx-3" // Negative margin to offset item padding
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex" // Removed gap-6, handled by padding
            animate={{
              x: `-${index * (100 / itemsPerView)}%`, // Simplified math
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {[...testimonialList, ...testimonialList].map(
              (testimonial, idx) => (
                <motion.div
                  key={`${testimonial.name}-${idx}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3" // Item width + padding
                >
                  <div className="h-full p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-holographic/30 transition-all duration-300 group flex flex-col hover:bg-white/10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-holographic fill-holographic"
                          />
                        ))}
                      </div>
                      <MessageSquareQuote
                        size={24}
                        className="text-white/20 group-hover:text-holographic/50 transition-colors"
                      />
                    </div>

                    <p className="text-white/90 font-light leading-relaxed mb-6 flex-1 text-sm md:text-base italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-holographic/50 transition-colors shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {testimonial.name}
                        </div>
                        <p className="text-[10px] md:text-xs text-white/90 font-mono uppercase tracking-wider">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              aria-label={`Go to testimonial slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === index
                  ? "w-8 bg-holographic"
                  : "w-1.5 bg-white/10 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
