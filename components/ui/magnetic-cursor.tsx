"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MagneticCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detección robusta de dispositivo táctil
    const checkTouch = () => {
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      setIsTouch(isTouchDevice);
    };

    checkTouch();

    if (window.matchMedia("(pointer: coarse)").matches) return; // Si es táctil, no agregamos listeners

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  // Si es táctil, no renderizamos NADA. Ahorramos nodos del DOM.
  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-holographic rounded-full pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Eliminé el Inner Dot que tenías comentado o sin uso para limpiar código */}
    </>
  );
}
