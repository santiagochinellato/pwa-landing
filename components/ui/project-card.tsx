"use client";

import { motion, useReducedMotion } from "framer-motion";
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
import siteContent from "@/data/site-content.json";

interface ProjectCardProps {
  title: string;
  category: string;
  type: "hotel" | "corporate" | "ecommerce" | "landing";
  metrics: string[];
  designExplanation?: string;
  link: string;
  imageUrl: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  category,
  type,
  metrics,
  designExplanation,
  link,
  imageUrl,
  featured,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const iconMap = {
    hotel: Building2,
    ecommerce: ShoppingCart,
    landing: Presentation,
    corporate: Layout, // Fallback for corporate or others
  };

  const Icon = iconMap[type] || Layout;

  const { projectCard } = siteContent;
  const hoverHint = projectCard.hoverHint;

  return (
    <>
      {/* Mobile Version (Simple Card) */}
      <div className="min-[1081px]:hidden rounded-2xl bg-light-surface dark:bg-white/5 border border-light-border dark:border-white/10 overflow-hidden flex flex-col h-[520px] md:h-[560px]">
        <div
          className={`relative w-full ${featured ? "h-64" : "h-48"} bg-light-surface dark:bg-deep-void`}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-void/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-mono tracking-widest text-holographic mb-1 block">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col gap-2">
          {/* {designExplanation && (
            <p className="text-sm md:text-base font-light italic text-light-fg/80 dark:text-white/80 leading-relaxed line-clamp-3">
              {designExplanation}
            </p>
          )} */}
          <ul className="space-y-2 w-full flex-1 min-h-0">
            {metrics.map((metric, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-light-muted dark:text-white/80 text-base"
              >
                <CheckCircle2 className="w-5 h-5 text-light-primary dark:text-holographic shrink-0 mt-0.5" />
                <span className="overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                  {metric}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Version (Flip Card) */}
      <motion.div
        className={`relative w-full hidden min-[1081px]:block group cursor-pointer ${
          featured ? "h-full min-h-[520px]" : "h-[400px]"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        role="group"
        aria-label={`Proyecto: ${title}`}
      >
        {/* Background Image + minimal front copy */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-light-surface dark:bg-deep-void border border-white/10">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain transition-all duration-700 group-hover:scale-102"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-deep-void/60 via-deep-void/10 to-transparent
             dark:from-deep-void/90 dark:via-deep-void/20 to-transparent"
          />

          <div
            className={`absolute bottom-0 left-0 w-full p-8 transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-holographic font-mono text-xs tracking-widest mb-2 block uppercase bg-deep-void/60 backdrop-blur-md border border-holographic/20 w-fit px-3 py-1 rounded-full shadow-lg">
              {category}
            </span>
            <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className="text-xs uppercase tracking-wider">
                Ver detalles
              </span>
              <ArrowUpRight size={16} className="text-holographic" />
            </div>
          </div>
        </div>

        {/* Overlay reveal */}
        <motion.div
          className={`absolute inset-0 rounded-2xl overflow-hidden border border-light-border/70 dark:border-white/10
            bg-light-surface/96 dark:bg-deep-void/70 backdrop-blur-md shadow-md dark:shadow-none
            ${isHovered ? "pointer-events-auto" : "pointer-events-none"}`}
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 12,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-deep-void/10 to-light-bg/35
             dark:to-deep-void/70 pointer-events-none"
          />

          <div className="relative p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-light-primary/10 dark:bg-white/5 flex items-center justify-center text-light-primary dark:text-white/90 transition-colors">
                <Icon size={24} />
              </div>
              <div className="w-8 h-8 rounded-full bg-light-primary/10 dark:bg-white/10 flex items-center justify-center text-light-primary dark:text-white transition-all">
                <ArrowUpRight size={16} />
              </div>
            </div>

            <div className="text-2xl font-bold text-light-fg dark:text-white/95 mb-6">
              {title}
            </div>

            {/* {designExplanation && (
              <p className="text-sm md:text-base font-light italic text-light-fg/80 dark:text-white/80 leading-relaxed mb-6 line-clamp-3">
                {designExplanation}
              </p>
            )} */}

            <ul className="space-y-3">
              {metrics.map((metric, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-light-fg/80 dark:text-white/80 text-sm md:text-base font-light"
                >
                  <CheckCircle2 className="w-5 h-5 text-light-primary dark:text-holographic/70 shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-light-border dark:border-white/5 flex justify-between items-center text-sm font-medium">
              <span className="text-light-fg/70 dark:text-white/40 flex items-center gap-2">
                <Eye size={16} className="text-light-primary dark:text-holographic" />
                {hoverHint}
              </span>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-primary dark:bg-holographic text-white dark:text-deep-void px-4 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity"
                aria-label={`Ver caso completo: ${title}`}
              >
                Ver caso completo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
