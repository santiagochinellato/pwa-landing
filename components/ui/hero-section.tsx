"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

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

  // Text Orchestration
  const textY = useTransform(smoothProgress, [0, 0.5], [0, -100]);
  const textOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const explodeGap = useTransform(smoothProgress, [0, 0.5], ["0em", "0.5em"]);

  // Reveals
  const sphereScale = useTransform(smoothProgress, [0, 1], [0.8, 1.5]);
  const sphereOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8],
    [0.4, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[150vh] flex flex-col items-center pt-40 md:pt-60 overflow-hidden bg-deep-void"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#1f2833_0%,_transparent_50%)]" />
      </div>

      <div className="sticky top-40 z-10 flex flex-col items-center">
        <motion.h1
          style={{ y: textY, opacity: textOpacity }}
          className="text-5xl md:text-8xl lg:text-[8rem] font-bold text-center leading-[0.85] tracking-tighter"
        >
          <motion.div
            className="flex justify-center flex-wrap"
            style={{ gap: explodeGap }}
          >
            <span>EXCELENCIA</span>
            <span>DIGITAL</span>
          </motion.div>
          <div className="h-4 md:h-8" /> {/* Spacer */}
          <motion.span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            CODIFICADA
          </motion.span>
        </motion.h1>

        <motion.p
          style={{ y: textY, opacity: textOpacity }}
          className="mt-8 text-sm md:text-lg text-white/60 max-w-xl text-center font-light tracking-wider"
        >
          Donde la vanguardia técnica se encuentra con el diseño sin
          concesiones.
        </motion.p>
      </div>

      {/* The "Core" - Placeholder for Video/3D */}
      <motion.div
        style={{ scale: sphereScale, opacity: sphereOpacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full blur-[80px] bg-gradient-to-tr from-holographic via-purple-500 to-blue-600 mix-blend-screen pointer-events-none z-0"
      />

      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]) }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        {/* Placeholder for video content appearing inside the void */}
        {/* <div className="text-sm font-mono tracking-widest text-holographic uppercase">[ IA CORE ACTIVE ]</div> */}
      </motion.div>
    </section>
  );
}
