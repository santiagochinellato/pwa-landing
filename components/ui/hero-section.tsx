"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Target, Zap, Wrench } from "lucide-react";
import siteContent from "@/data/site-content.json";
import React from "react";

const iconMap: { [key: string]: React.ElementType } = {
  Award,
  Target,
  Zap,
  Wrench,
};

export default function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-secondary/20 pt-24 lg:pt-32 pb-20">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container px-4 md:px-6 z-10 w-full max-w-5xl">
        <div className="flex flex-col items-center justify-center text-center space-y-10">
          {/* Main Text Content */}
          <div className="flex flex-col space-y-6 relative z-20 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
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

              <p className="text-xl md:text-2xl font-medium text-muted-foreground/90 max-w-2xl mx-auto pt-2">
                {hero.subtitle}
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-muted-foreground md:text-lg leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
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

          {/* Value Props Grid */}
          {hero.valueProps && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 w-full border-t border-border/40 mt-12"
            >
              {hero.valueProps.map((prop, index) => {
                const Icon = iconMap[prop.icon] || Target;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 dark:hover:bg-muted/30 dark:hover:shadow-none dark:hover:translate-y-0"
                  >
                    <div className="p-3 bg-primary/10 rounded-full text-primary mb-1">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-sm md:text-base">
                      {prop.label}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {prop.detail}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
