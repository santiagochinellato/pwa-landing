"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Target, Zap, Wrench } from "lucide-react";
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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-secondary/20 pt-16 lg:pt-32 pb-12 lg:pb-20">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* Container - now using flex for desktop split if needed, but staying vertical aligned for now given the previous layout */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-10 md:mt-0 items-center">
        {/* Main Text Content (Left Side) */}
        <div className="flex flex-col space-y-4 lg:space-y-6 relative z-20 text-center lg:text-left order-2 lg:order-1 items-center lg:items-start px-6">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
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

            <p className="text-lg md:text-2xl font-medium text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 pt-2">
              {hero.subtitle}
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto lg:mx-0 max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed"
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
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 lg:pt-6"
          >
            <a
              href={hero.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 text-white font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105"
            >
              {hero.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <Link
              href="#process"
              className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Value Props Grid & Visual (Right Side) */}
        <div className="relative hidden lg:flex flex-col items-center justify-center space-y-10 order-1 lg:order-2">
          {/* The New Animated Visual */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-12 w-full border-t border-border/40 mt-12 max-w-7xl mx-auto"
        >
          {hero.valueProps.map((prop, index) => {
            const Icon = iconMap[prop.icon] || Target;
            return (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-3 md:p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 dark:hover:bg-muted/30 dark:hover:shadow-none dark:hover:translate-y-0 "
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-1">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[10px] md:text-sm md:text-base text-center">
                  {prop.label}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground text-center">
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
