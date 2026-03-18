"use client";

import { clsx } from "clsx";

export type TopoBackgroundProps = {
  className?: string;
  /**
   * Opacidad general del SVG (0 a 1).
   * Si querés controlar por CSS, dejalo undefined.
   */
  opacity?: number;
  /**
   * Controla el escalado/crop del SVG.
   * Para backgrounds anchos (Hero) suele convenir "none" para evitar que se recorten las líneas.
   */
  preserveAspectRatio?: string;
};

export default function TopoBackground({
  className,
  opacity,
  preserveAspectRatio = "xMidYMid slice",
}: TopoBackgroundProps) {
  return (
    <svg
      className={clsx("pointer-events-none select-none text-(--primary)", className)}
      viewBox="0 0 1080 1800"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden="true"
      style={opacity !== undefined ? { opacity } : undefined}
    >
      {/* Topographic lines */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.85"
        style={{
          filter:
            "drop-shadow(0px 1px 0px color-mix(in srgb, var(--primary) 35%, transparent))",
        }}
      >
        {/* Top left cluster */}
        <ellipse cx="120" cy="180" rx="280" ry="140" />
        <ellipse cx="120" cy="180" rx="230" ry="110" />
        <ellipse cx="120" cy="180" rx="180" ry="82" />
        <ellipse cx="120" cy="180" rx="130" ry="55" />
        {/* Bottom right cluster */}
        <ellipse cx="960" cy="1620" rx="300" ry="150" />
        <ellipse cx="960" cy="1620" rx="240" ry="118" />
        <ellipse cx="960" cy="1620" rx="180" ry="88" />
        <ellipse cx="960" cy="1620" rx="120" ry="58" />
        {/* Middle subtle */}
        <ellipse cx="900" cy="400" rx="200" ry="100" opacity="0.4" />
        <ellipse cx="900" cy="400" rx="150" ry="72" opacity="0.4" />
        <ellipse cx="200" cy="1400" rx="220" ry="110" opacity="0.3" />
        <ellipse cx="200" cy="1400" rx="160" ry="78" opacity="0.3" />
      </g>

      {/* Dot grid subtle center */}
      <g fill="currentColor" opacity="0.28" style={{ color: "var(--accent)" }}>
        <pattern
          id="topoDots"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="1" />
        </pattern>
        <rect width="1080" height="1800" fill="url(#topoDots)" />
      </g>
    </svg>
  );
}

