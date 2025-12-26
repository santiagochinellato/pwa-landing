"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const AnimatedHeroVisual = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mouse motion values for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for mouse movement
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => setMounted(true), []);

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
    primary: "#66FCF1",
    secondary: "#45A29E",
    // Accent is brighter for edge highlights
    accent: isDark ? "#A6FFFA" : "#3BB2B8",
    // Fills for glass panels (low opacity)
    glassFill: isDark ? "rgba(102, 252, 241, 0.1)" : "rgba(69, 162, 158, 0.15)",
    glassFillHover: isDark
      ? "rgba(102, 252, 241, 0.2)"
      : "rgba(69, 162, 158, 0.25)",
    // Grid lines
    grid: isDark ? "rgba(102, 252, 241, 0.3)" : "rgba(69, 162, 158, 0.4)",
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
      <svg
        viewBox="0 0 800 800"
        className="w-full h-full drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "drop-shadow(0px 0px 30px rgba(102, 252, 241, 0.15))",
        }}
      >
        <defs>
          <linearGradient id="glassGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.05" />
            <stop offset="50%" stopColor={colors.primary} stopOpacity="0.2" />
            <stop
              offset="100%"
              stopColor={colors.secondary}
              stopOpacity="0.05"
            />
          </linearGradient>

          {/* Grid Pattern for texture */}
          <pattern
            id="gridPattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(30)"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke={colors.primary}
              strokeWidth="0.5"
              strokeOpacity="0.15"
            />
          </pattern>
        </defs>

        <g transform="translate(400, 400) scale(1.35)">
          {/* --- BACK LAYER --- */}
          <motion.g style={{ x: backLayerX, y: backLayerY }}>
            {/* Large Vertical Plane (Back Left) */}
            <motion.path
              d="M -150 -200 L 0 -100 L 0 250 L -150 150 Z"
              fill="url(#glassGradient)"
              stroke={colors.grid}
              strokeWidth="1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 1.5, ease: "easeOut" },
                y: {
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut" as const,
                },
              }}
            />
            {/* Grid Texture */}
            <motion.path
              d="M -150 -200 L 0 -100 L 0 250 L -150 150 Z"
              fill="url(#gridPattern)"
              opacity="0.5"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" as const,
              }}
            />

            {/* Horizontal Plane (Bottom) */}
            <motion.path
              d="M -100 180 L 50 280 L 200 180 L 50 80 Z"
              fill={colors.glassFill}
              stroke={colors.secondary}
              strokeWidth="1"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" as const,
                delay: 1,
              }}
            />
          </motion.g>

          {/* --- MIDDLE LAYER (Main Element) --- */}
          <motion.g
            style={{ rotateX: midLayerRotateX, rotateY: midLayerRotateY }}
          >
            {/* Central Tall Monolith */}
            <motion.path
              d="M -40 -250 L 60 -180 L 60 220 L -40 150 Z"
              fill="url(#glassGradient)"
              stroke={colors.accent}
              strokeWidth="1.5"
              style={{
                filter: "drop-shadow(0 0 15px rgba(102, 252, 241, 0.3))",
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" as const,
              }}
            />

            {/* Intersecting Horizontal Blade (Right) */}
            <motion.path
              d="M 20 -50 L 220 50 L 220 120 L 20 20 Z"
              fill={colors.glassFillHover}
              stroke={colors.primary}
              strokeWidth="1"
              animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" as const,
                delay: 0.5,
              }}
            />
            {/* Grid lines on the blade */}
            <motion.line
              x1="20"
              y1="20"
              x2="220"
              y2="120"
              stroke={colors.primary}
              strokeWidth="0.5"
              strokeOpacity="0.3"
              animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" as const,
                delay: 0.5,
              }}
            />
          </motion.g>

          {/* --- FRONT LAYER (Floating Details) --- */}
          <motion.g style={{ x: frontLayerX, y: frontLayerY }}>
            {/* Small Vertical Detail (Front Left) */}
            <motion.path
              d="M -180 -50 L -80 0 L -80 150 L -180 100 Z"
              fill={colors.glassFill}
              stroke={colors.accent}
              strokeWidth="1"
              animate={{ y: [0, -25, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" as const,
                delay: 0.8,
              }}
            />
            <motion.path
              d="M -180 -50 L -80 0 L -80 150 L -180 100 Z"
              fill="url(#gridPattern)"
              opacity="0.3"
              animate={{ y: [0, -25, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" as const,
                delay: 0.8,
              }}
            />

            {/* Connecting Nodes with Pulse */}
            <motion.circle
              cx="-40"
              cy="150"
              r="3"
              fill="white"
              animate={pulseAnim(0)}
            />
            <motion.circle
              cx="60"
              cy="220"
              r="3"
              fill="white"
              animate={pulseAnim(1)}
            />
            <motion.circle
              cx="220"
              cy="50"
              r="3"
              fill="white"
              animate={pulseAnim(2)}
            />

            {/* Decorative "Scanning" Line on Central Monolith */}
            <motion.line
              x1="-40"
              y1="-250"
              x2="60"
              y2="-180"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.8"
              animate={{
                y: [0, 400],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: 0.5,
              }}
            />
          </motion.g>
        </g>
      </svg>

      {/* Background Glow */}
      {isDark && (
        <div className="absolute inset-0 bg-primary/10 blur-[90px] rounded-full pointer-events-none z-[-1]" />
      )}
    </motion.div>
  );
};
