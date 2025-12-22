"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Sphere Reveal
  const sphereScale = useTransform(smoothProgress, [0, 1], [0.8, 1.2]);
  const sphereOpacity = useTransform(smoothProgress, [0, 0.5], [0.4, 0]);

  const { hero } = siteContent;

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20 transition-colors duration-300"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#14b8a6_0%,_transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,_#1f2833_0%,_transparent_50%)]" /> */}
      </div>

      <div className="z-10 flex flex-col items-center px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-light-fg to-light-fg/60 dark:from-white dark:to-white/60 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {hero.titleLine1} <br />
          <span className="text-light-fg dark:text-white">
            {hero.titleHighlight}
          </span>{" "}
          <br />
          <span className="text-light-primary dark:text-holographic">
            {hero.subtitle}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-light-muted dark:text-white/70 max-w-2xl font-light mb-10 leading-relaxed flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {hero.description}
          <br className="hidden md:block" />
          <span className="text-light-fg dark:text-white font-medium ">
            {hero.subDescriptionStrong}
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href={hero.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-light-primary dark:bg-holographic text-white dark:text-deep-void font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] dark:hover:shadow-[0_0_20px_rgba(102,252,241,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {hero.ctaPrimary}{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <Link
            href="#process"
            className="px-8 py-4 text-light-fg dark:text-white border border-light-border dark:border-white/20 rounded-full font-medium text-lg hover:bg-light-surface dark:hover:bg-white/5 transition-colors"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      {/* The "Sphere" Background Element */}
      <motion.div
        style={{ scale: sphereScale, opacity: sphereOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[100px] bg-gradient-to-tr from-light-primary/20 via-cyan-500/20 to-blue-600/20 dark:from-holographic/20 dark:via-purple-500/20 dark:to-blue-600/20 pointer-events-none z-0"
      />
    </section>
  );
}
