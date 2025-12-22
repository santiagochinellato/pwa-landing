"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Layout,
  ShoppingCart,
  Building2,
  Presentation,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  type: "hotel" | "corporate" | "ecommerce" | "landing";
  metrics: string[];
  imageUrl: string;
}

export default function ProjectCard({
  title,
  category,
  type,
  metrics,
  imageUrl,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const getIcon = () => {
    switch (type) {
      case "hotel":
        return Building2;
      case "ecommerce":
        return ShoppingCart;
      case "landing":
        return Presentation;
      default:
        return Layout;
    }
  };

  const Icon = getIcon();

  const hoverHint = "Ver detalles"; // Simplified for this example, or import from JSON

  return (
    <>
      {/* Mobile Version (Simple Card) */}
      <div className="md:hidden rounded-2xl bg-light-surface dark:bg-white/5 border border-light-border dark:border-white/10 overflow-hidden">
        <div className="relative h-48 w-full">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-void/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-mono tracking-widest text-holographic mb-1 block">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {metrics.map((metric, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-light-muted dark:text-white/70 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-light-primary dark:text-holographic shrink-0 mt-0.5" />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Version (Flip Card) */}
      <motion.div
        className="relative w-full h-[400px] [perspective:1000px] hidden md:block group cursor-pointer"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d] transition-all duration-500"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Front Face */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden bg-light-surface dark:bg-white/5 border border-light-border dark:border-white/10 hover:border-light-primary dark:hover:border-holographic/30 transition-all duration-300 shadow-md dark:shadow-none bg-white dark:bg-deep-void">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-light-bg/50 dark:to-deep-void/50 pointer-events-none" />

            <div className="relative p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-light-primary/10 dark:bg-white/5 flex items-center justify-center text-light-primary dark:text-white/50 group-hover:text-light-primary dark:group-hover:text-holographic transition-colors">
                  <Icon size={24} />
                </div>
                <span className="text-xs font-mono tracking-widest px-3 py-1 rounded-full border border-light-border dark:border-white/10 bg-light-surface dark:bg-white/5 text-light-muted dark:text-white/60">
                  {category}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-light-fg dark:text-white mb-6">
                {title}
              </h3>

              <ul className="space-y-3">
                {metrics.map((metric, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-light-muted dark:text-white/70 text-sm md:text-base font-light"
                  >
                    <CheckCircle2 className="w-5 h-5 text-light-primary dark:text-holographic/70 shrink-0 mt-0.5" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-auto pt-6 border-t border-light-border dark:border-white/5 flex justify-between items-center text-sm font-medium">
                <span className="text-light-muted dark:text-white/40 flex items-center gap-2">
                  <Eye
                    size={16}
                    className="text-light-primary dark:text-holographic"
                  />
                  {hoverHint}
                </span>
                <div className="w-8 h-8 rounded-full bg-light-primary/10 dark:bg-white/10 flex items-center justify-center text-light-primary dark:text-white group-hover:bg-light-primary group-hover:text-white dark:group-hover:bg-holographic dark:group-hover:text-deep-void transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Back Face (Image Reveal) */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-deep-void border border-white/10">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-deep-void/50 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-holographic font-mono text-sm tracking-widest mb-2 block">
                {category}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span>Ver caso de éxito completo</span>
                <ArrowUpRight size={16} className="text-holographic" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
