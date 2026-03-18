"use client";

import { clsx } from "clsx";

export type MountainBackgroundProps = {
  className?: string;
  opacity?: number;
};

export default function MountainBackground({
  className,
  opacity,
}: MountainBackgroundProps) {
  return (
    <svg
      className={clsx("pointer-events-none select-none", className)}
      viewBox="0 0 1080 420"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      style={opacity !== undefined ? { opacity } : undefined}
    >
      {/* Back range */}
      <polygon
        points="0,420 180,180 320,280 480,120 640,240 780,160 920,220 1080,140 1080,420"
        fill="color-mix(in srgb, var(--foreground) 10%, var(--background))"
        opacity="0.35"
      />
      {/* Snow caps back */}
      <polygon
        points="480,120 440,185 520,185"
        fill="color-mix(in srgb, var(--foreground) 16%, var(--background))"
        opacity="0.3"
      />
      <polygon
        points="780,160 750,210 810,210"
        fill="color-mix(in srgb, var(--foreground) 16%, var(--background))"
        opacity="0.26"
      />
      <polygon
        points="1080,140 1050,185 1080,185"
        fill="color-mix(in srgb, var(--foreground) 16%, var(--background))"
        opacity="0.22"
      />

      {/* Mid range */}
      <polygon
        points="0,420 80,280 200,340 360,200 500,300 620,220 740,310 860,230 1000,290 1080,250 1080,420"
        fill="color-mix(in srgb, var(--foreground) 14%, var(--background))"
        opacity="0.45"
      />
      {/* Snow caps mid */}
      <polygon
        points="360,200 325,258 395,258"
        fill="color-mix(in srgb, var(--foreground) 18%, var(--background))"
        opacity="0.33"
      />
      <polygon
        points="620,220 588,272 652,272"
        fill="color-mix(in srgb, var(--foreground) 18%, var(--background))"
        opacity="0.28"
      />
      <polygon
        points="860,230 830,278 890,278"
        fill="color-mix(in srgb, var(--foreground) 18%, var(--background))"
        opacity="0.24"
      />

      {/* Front range */}
      <polygon
        points="0,420 120,320 240,370 400,260 520,340 660,270 800,350 940,280 1080,330 1080,420"
        fill="color-mix(in srgb, var(--foreground) 18%, var(--background))"
        opacity="0.6"
      />

      {/* Teal glow on peaks */}
      <polygon
        points="400,260 370,310 430,310"
        fill="var(--primary)"
        opacity="0.12"
      />
      <polygon
        points="660,270 632,318 688,318"
        fill="var(--primary)"
        opacity="0.1"
      />

      {/* Subtle ridge highlight lines */}
      <polyline
        points="0,420 120,320 240,370 400,260 520,340 660,270 800,350 940,280 1080,330"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1"
        opacity="0.18"
      />
      <polyline
        points="480,120 440,185 360,200 325,258"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="0.8"
        opacity="0.12"
      />
    </svg>
  );
}

