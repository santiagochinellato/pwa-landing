"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function Spotlight() {
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);

  // Motion values initialization
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics configuration
  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    // Set initial position to center of window
    if (typeof window !== "undefined") {
      x.set(window.innerWidth / 2);
      y.set(window.innerHeight / 2);
    }

    const handleScroll = () => {
      if (!hasStartedScrolling) {
        setHasStartedScrolling(true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (hasStartedScrolling) {
        x.set(e.clientX);
        y.set(e.clientY);
      }
    };

    // Add scroll listener (only needed once to unlock the spotlight)
    window.addEventListener("scroll", handleScroll, { once: true });

    // Add mouse move listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hasStartedScrolling, x, y]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="hidden md:block fixed z-[-10] w-[400px] h-[400px] rounded-full pointer-events-none opacity-100"
    >
      {/* Light Mode Gradient (Teal) */}
      <div
        className="absolute inset-0 w-full h-full rounded-full blur-[80px] opacity-100 dark:opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,0.4) 0%, rgba(6,182,212,0.2) 40%, transparent 70%)",
        }}
      />
      {/* Dark Mode Gradient (Holographic) */}
      <div
        className="absolute inset-0 w-full h-full rounded-full blur-[80px] opacity-0 dark:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(102,252,241,0.25) 0%, rgba(69,162,158,0.15) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
