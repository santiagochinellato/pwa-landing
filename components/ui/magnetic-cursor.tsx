"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MagneticCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center the 32px cursor
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };
    
    // Optional: Add logic to detect hover on links and scale up
    
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
        {/* Main Ring */}
        <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-holographic rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
            x: cursorX,
            y: cursorY,
        }}
        />
        {/* Inner Dot */}
        <div 
            className="fixed top-0 left-0 w-2 h-2 bg-holographic rounded-full pointer-events-none z-[9999] mix-blend-difference"
            // We can attach this to raw mouse pos or smoothed
            style={{
                left: -100, // Hide initially or manage via state
                // This part needs real-time update or another motion value. 
                // For simplicity, let's just keep the ring for now.
            }}
        />
    </>
  );
}
