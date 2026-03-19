"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MacizoLogoAnimation from "@/components/ui/macizo-logo-animation";

export const AnimatedHeroVisual = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [cycle, setCycle] = useState(0);

  // Mouse motion values for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for mouse movement
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    // Calculate normalized position -0.5 to 0.5
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isDark = resolvedTheme === "dark";

  // Palette based on the reference image
  const colors = {
    primary: "#4ade80",
    secondary: "#22c55e",
    // Accent is brighter for edge highlights
    accent: isDark ? "#86efac" : "#15803d",
    // Fills for glass panels (low opacity)
    glassFill: isDark ? "rgba(74, 222, 128, 0.1)" : "rgba(26, 92, 56, 0.15)",
    glassFillHover: isDark
      ? "rgba(74, 222, 128, 0.2)"
      : "rgba(26, 92, 56, 0.25)",
    // Grid lines
    grid: isDark ? "rgba(74, 222, 128, 0.3)" : "rgba(26, 92, 56, 0.4)",
  };

  /**
   * Isometric Projection Helper
   * We simulate 3D shapes using 2D paths.
   * Common isometric angles: 30 degrees.
   */

  // Parallax transforms for different layers
  // Back layer moves slightly opposite to mouse
  const backLayerX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const backLayerY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  // Middle layer stays central
  const midLayerRotateX = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);
  const midLayerRotateY = useTransform(mouseX, [-0.5, 0.5], [5, -5]);

  // Front layer moves with mouse for depth
  const frontLayerX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const frontLayerY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  // Animation variants for floating "breathing" effect
  const pulseAnim = (delay: number) => ({
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay: delay,
    },
  });

  useEffect(() => {
    if (!mounted) return;

    // Duración efectiva aproximada de la animación de entrada del logo:
    // - duración base (enterDurationSec)
    // - + el delay máximo entre capas (0.25s)
    // - + un pequeño buffer visual
    const enterDurationSec = 0.9;
    const maxLayerDelaySec = 0.25;
    const bufferSec = 0.15;
    const pauseBetweenLoopsMs = 5000;

    const totalCycleMs =
      Math.round((enterDurationSec + maxLayerDelaySec + bufferSec) * 1000) +
      pauseBetweenLoopsMs;

    const timer = window.setInterval(() => {
      setCycle((c) => c + 1);
    }, totalCycleMs);

    return () => window.clearInterval(timer);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        style={{
          x: frontLayerX,
          y: frontLayerY,
          rotateX: midLayerRotateX,
          rotateY: midLayerRotateY,
        }}
        className="will-change-transform"
      >
        <MacizoLogoAnimation
          key={cycle}
          variant="hero"
          showWordmark={false}
          enterDurationSec={0.9}
        />
      </motion.div>

      {/* Background Glow */}
      {isDark && (
        <div className="absolute inset-0 bg-primary/10 blur-[90px] rounded-full pointer-events-none z-[-1]" />
      )}
    </motion.div>
  );
};
