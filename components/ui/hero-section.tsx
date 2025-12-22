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

  // Text Orchestration - simplified
  const textY = useTransform(smoothProgress, [0, 0.5], [0, -50]);
  const textOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  // Sphere Reveal
  const sphereScale = useTransform(smoothProgress, [0, 1], [0.8, 1.2]);
  const sphereOpacity = useTransform(smoothProgress, [0, 0.5], [0.4, 0]);

  const { hero } = siteContent;

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-deep-void pt-20"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#1f2833_0%,_transparent_50%)]" />
      </div>

      <div className="z-10 flex flex-col items-center px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6"
        >
          {hero.titleLine1} <br />
          <span className="text-white">{hero.titleHighlight}</span> <br />
          <span className="text-holographic">{hero.subtitle}</span>
        </motion.h1>

        <motion.p
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/70 max-w-2xl font-light mb-10 leading-relaxed flex flex-col gap-4"
        >
          {hero.description}
          <br className="hidden md:block" />
          <span className="text-white font-medium ">
            {hero.subDescriptionStrong}
          </span>
        </motion.p>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 items-center"
        >
          <a
            href={hero.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-holographic text-deep-void font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(102,252,241,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {hero.ctaPrimary}{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <Link
            href="#process"
            className="px-8 py-4 text-white border border-white/20 rounded-full font-medium text-lg hover:bg-white/5 transition-colors"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      {/* The "Sphere" Background Element */}
      <motion.div
        style={{ scale: sphereScale, opacity: sphereOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[100px] bg-gradient-to-tr from-holographic/20 via-purple-500/20 to-blue-600/20 pointer-events-none z-0"
      />
    </section>
  );
}
