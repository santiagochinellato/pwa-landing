"use client";

export function GlassLayer() {
  return (
    <div className="fixed inset-0 z-[-5] pointer-events-none backdrop-blur-none md:backdrop-blur-[100px] bg-transparent" />
  );
}
