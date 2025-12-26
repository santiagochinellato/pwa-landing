"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Target,
  Zap,
  Wrench,
  CheckCircle2,
  Star,
} from "lucide-react";
import siteContent from "@/data/site-content.json";
import React from "react";
import { AnimatedHeroVisual } from "./hero-visual";

const iconMap: { [key: string]: React.ElementType } = {
  Award,
  Target,
  Zap,
  Wrench,
};

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-secondary/20 pt-24 lg:pt-24 pb-12 lg:pb-20">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Container - now using flex for desktop split if needed, but staying vertical aligned for now given the previous layout */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-4 md:mt-0 items-center">
        {/* Main Text Content (Left Side) */}
        <div className="flex flex-col space-y-4 lg:space-y-6 relative z-20 text-center lg:text-left order-2 lg:order-1 items-center lg:items-start px-4 md:px-6">
          <div className="space-y-4">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-600 dark:text-green-400 text-xs md:text-sm font-bold mb-2">
              <Zap size={16} />
              Primera consulta sin cargo
            </div> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1]">
              <span className="text-foreground tracking-tight">
                {hero.titleLine1}
              </span>
              <br />
              <span className="text-primary dark:text-holographic relative inline-block">
                {hero.titleHighlight}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 pt-2">
              {hero.subtitle}
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto lg:mx-0 max-w-[700px] text-muted-foreground text-base md:text-xl leading-relaxed"
          >
            {hero.description}
            <br className="hidden md:block my-2" />
            <span className="font-semibold text-foreground block mt-2">
              {hero.subDescriptionStrong}
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6 justify-center lg:justify-start w-full"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={hero.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-deep-void px-8 md:px-10 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 whitespace-nowrap"
              >
                {hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <Link
                href="#process"
                className="inline-flex h-12 items-center justify-center rounded-full border border-primary/20 bg-transparent px-8 text-base font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm hover:bg-primary/5 whitespace-nowrap"
              >
                {hero.ctaSecondary}
              </Link>
            </div>

            {/* Social Proof Strip (In-Hero) */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 border-t border-border/40 w-full pt-6 md:pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary dark:text-holographic w-4 h-4" />
                <span className="text-xs font-medium text-muted-foreground dark:text-white/80">
                  +15 clientes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                <span className="text-xs font-medium text-muted-foreground dark:text-white/80">
                  5.0 Rating
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-primary dark:text-holographic w-4 h-4" />
                <span className="text-xs font-medium text-muted-foreground dark:text-white/80">
                  2 sem. entrega
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Value Props Grid & Visual (Right Side) */}
        <div className="relative hidden lg:flex flex-col items-center justify-center space-y-10 order-1 lg:order-2">
          {/* The New Animated Visual */}
          <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] flex items-center justify-center">
            <AnimatedHeroVisual />
          </div>
        </div>
      </div>

      {/* Value Props Stats (Below) */}
      {hero.valueProps && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 pt-12 w-full border-t border-border/40 mt-12 max-w-7xl mx-auto"
        >
          {hero.valueProps.map((prop, index) => {
            const Icon = iconMap[prop.icon] || Target;
            return (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 bg-white/50 dark:bg-white/10 border border-border/50 dark:border-white/10 shadow-sm hover:shadow-md group"
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary dark:text-holographic mb-1 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-sm md:text-base text-center text-foreground dark:text-white">
                  {prop.label}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground dark:text-white/90 text-center">
                  {prop.detail}
                </p>
              </div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
