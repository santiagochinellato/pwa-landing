"use client";

import { motion, useReducedMotion, useMotionValue, useTransform } from "framer-motion";
import { clsx } from "clsx";
import type { MotionValue } from "framer-motion";

type Variant = "loader" | "hero";

export type MacizoLogoAnimationProps = {
  variant?: Variant;
  className?: string;
  /**
   * Si querés mostrar el texto "MacizoDigital" debajo del ícono.
   * Útil para loaders o pantallas de transición.
   */
  showWordmark?: boolean;
  wordmarkText?: string;
  /**
   * Duración base de la animación de entrada (en segundos).
   * En `hero` suele verse mejor un poco más lenta.
   */
  enterDurationSec?: number;
  /**
   * Si se pasa, la animación se controla por scroll (progreso 0..1),
   * en lugar de la animación de entrada.
   */
  buildProgress?: MotionValue<number>;
};

const viewBox = "0 0 215 254";

export default function MacizoLogoAnimation({
  variant = "loader",
  className,
  showWordmark = variant === "loader",
  wordmarkText = "MacizoDigital",
  enterDurationSec,
  buildProgress,
}: MacizoLogoAnimationProps) {
  const reduceMotion = useReducedMotion();
  const fallbackProgress = useMotionValue(reduceMotion ? 1 : 0);
  const effectiveProgress = buildProgress ?? fallbackProgress;
  const isBuilding = buildProgress !== undefined;

  const duration =
    enterDurationSec ?? (variant === "hero" ? 1.1 : variant === "loader" ? 0.9 : 0.9);

  const ease = [0.4, 0, 0.2, 1] as const;

  const strokeColor = "var(--primary)";
  // Fill traslúcido (verde/cian) consistente con el "glass" del hero.
  // Usamos color-mix para que se adapte al tema sin hardcodear RGBA.
  const fillColor =
    variant === "hero"
      ? "color-mix(in srgb, var(--primary) 22%, transparent)"
      : "color-mix(in srgb, var(--primary) 16%, transparent)";
  const fillColorStrong =
    variant === "hero"
      ? "color-mix(in srgb, var(--primary) 34%, transparent)"
      : "color-mix(in srgb, var(--primary) 24%, transparent)";
  const outlineOpacity = variant === "hero" ? 0.75 : 0.9;

  const gCommon = {
    initial: reduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
  } as const;

  // Scroll-driven "build" transforms (px + opacity)
  const svgOpacity = useTransform(effectiveProgress, [0, 0.35], [0, 1]);
  const svgScale = useTransform(effectiveProgress, [0, 0.35], [0.98, 1]);

  const leftOpacity = useTransform(effectiveProgress, [0.0, 0.25], [0, 1]);
  const leftX = useTransform(effectiveProgress, [0.0, 0.25], [-28, 0]);
  const leftY = useTransform(effectiveProgress, [0.0, 0.25], [14, 0]);

  const rightOpacity = useTransform(effectiveProgress, [0.05, 0.3], [0, 1]);
  const rightX = useTransform(effectiveProgress, [0.05, 0.3], [28, 0]);
  const rightY = useTransform(effectiveProgress, [0.05, 0.3], [14, 0]);

  const baseOpacity = useTransform(effectiveProgress, [0.15, 0.45], [0, 1]);
  const baseY = useTransform(effectiveProgress, [0.15, 0.45], [12, 0]);

  const topOpacity = useTransform(effectiveProgress, [0.25, 0.6], [0, 1]);
  const topY = useTransform(effectiveProgress, [0.25, 0.6], [-24, 0]);

  const wordmarkOpacity = useTransform(effectiveProgress, [0.55, 0.8], [0, 1]);

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center select-none",
        variant === "hero" ? "gap-4" : "gap-6",
        className
      )}
    >
      <motion.svg
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={clsx(
          "overflow-visible",
          variant === "hero" ? "w-[260px] h-[308px] md:w-[320px] md:h-[378px]" : "w-[215px] h-[254px]"
        )}
          initial={reduceMotion || isBuilding ? undefined : { opacity: 0, scale: 0.98 }}
          animate={reduceMotion || isBuilding ? undefined : { opacity: 1, scale: 1 }}
          transition={reduceMotion || isBuilding ? undefined : { duration: 0.6, ease }}
        style={{
          filter:
            variant === "hero"
              ? "drop-shadow(0px 0px 30px color-mix(in srgb, var(--primary) 20%, transparent))"
              : "drop-shadow(0px 0px 18px color-mix(in srgb, var(--primary) 18%, transparent))",
            ...(isBuilding
              ? {
                  opacity: reduceMotion ? 1 : svgOpacity,
                  scale: reduceMotion ? 1 : svgScale,
                }
              : {}),
        }}
        aria-hidden={showWordmark ? undefined : true}
      >
        {/* Grupo 1a: Cara lateral izquierda */}
          {isBuilding ? (
            <motion.g style={{ opacity: reduceMotion ? 1 : leftOpacity, x: leftX, y: leftY }}>
              <path
                d="M107.5 170.079L35.5 128.579V211.579L0.5 191.579V67.5793L107.5 129.579Z"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
            </motion.g>
          ) : (
            <motion.g
              {...gCommon}
              initial={
                reduceMotion
                  ? gCommon.initial
                  : { opacity: 0, x: -28, y: 14 }
              }
              transition={{
                duration: reduceMotion ? 0 : duration,
                ease,
              }}
            >
              <path
                d="M107.5 170.079L35.5 128.579V211.579L0.5 191.579V67.5793L107.5 129.579Z"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
            </motion.g>
          )}

        {/* Grupo 1b: Cara lateral derecha */}
          {isBuilding ? (
            <motion.g style={{ opacity: reduceMotion ? 1 : rightOpacity, x: rightX, y: rightY }}>
              <path
                d="M107.5 170.079L179.5 127.579V211.579L214 191.579V67.5793L107.5 129.579Z"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
            </motion.g>
          ) : (
            <motion.g
              {...gCommon}
              initial={
                reduceMotion
                  ? gCommon.initial
                  : { opacity: 0, x: 28, y: 14 }
              }
              transition={{
                duration: reduceMotion ? 0 : duration,
                ease,
              }}
            >
              <path
                d="M107.5 170.079L179.5 127.579V211.579L214 191.579V67.5793L107.5 129.579Z"
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
            </motion.g>
          )}

        {/* Grupo 1c: Bases / caras inferiores */}
          {isBuilding ? (
            <motion.g style={{ opacity: reduceMotion ? 1 : baseOpacity, y: baseY }}>
              <path
                d="M107.5 187.579L50.5 154.579V220.579L107.5 252.579Z"
                fill={fillColorStrong}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
              <path
                d="M107.5 187.579L164 154.579L164.5 220.579L107.5 252.579Z"
                fill={fillColorStrong}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
            </motion.g>
          ) : (
            <motion.g
              {...gCommon}
              initial={
                reduceMotion
                  ? gCommon.initial
                  : { opacity: 0, y: 12 }
              }
              transition={{
                duration: reduceMotion ? 0 : Math.max(0.65, duration - 0.2),
                ease,
                delay: reduceMotion ? 0 : 0.15,
              }}
            >
              <path
                d="M107.5 187.579L50.5 154.579V220.579L107.5 252.579Z"
                fill={fillColorStrong}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
              <path
                d="M107.5 187.579L164 154.579L164.5 220.579L107.5 252.579Z"
                fill={fillColorStrong}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
            </motion.g>
          )}

        {/* Grupo 2: Caras superiores */}
          {isBuilding ? (
            <motion.g style={{ opacity: reduceMotion ? 1 : topOpacity, y: topY }}>
              <path
                d="M107.5 112.579L203.5 56.5793L168.5 35.5793L72.5 91.5793L107.5 112.579Z"
                fill={fillColorStrong}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
              <path
                d="M57.5 83.5793L11.5 56.5793L107.5 0.579285L153.5 27.5793L57.5 83.5793Z"
                fill={fillColorStrong}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
            </motion.g>
          ) : (
            <motion.g
              {...gCommon}
              initial={
                reduceMotion
                  ? gCommon.initial
                  : { opacity: 0, y: -24 }
              }
              transition={{
                duration: reduceMotion ? 0 : Math.max(0.65, duration - 0.2),
                ease,
                delay: reduceMotion ? 0 : 0.25,
              }}
            >
              <path
                d="M107.5 112.579L203.5 56.5793L168.5 35.5793L72.5 91.5793L107.5 112.579Z"
                fill={fillColorStrong}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
              <path
                d="M57.5 83.5793L11.5 56.5793L107.5 0.579285L153.5 27.5793L57.5 83.5793Z"
                fill={fillColorStrong}
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity={outlineOpacity}
              />
            </motion.g>
          )}
      </motion.svg>

      {showWordmark ? (
        <motion.div
          initial={
            isBuilding
              ? undefined
              : reduceMotion
                ? { opacity: 1, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(4px)" }
          }
          animate={
            isBuilding ? undefined : { opacity: 1, filter: "blur(0px)" }
          }
          style={isBuilding ? { opacity: reduceMotion ? 1 : wordmarkOpacity } : undefined}
          transition={
            isBuilding
              ? undefined
              : {
                  duration: reduceMotion ? 0 : 0.8,
                  ease,
                  delay: reduceMotion ? 0 : 1.0,
                }
          }
          className={clsx(
            "font-semibold tracking-[-0.02em] text-foreground",
            variant === "hero" ? "text-2xl md:text-3xl" : "text-2xl"
          )}
        >
          {wordmarkText}
        </motion.div>
      ) : null}
    </div>
  );
}

