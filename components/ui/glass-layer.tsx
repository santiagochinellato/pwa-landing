"use client";

export function GlassLayer() {
  return (
    <div
      className="fixed inset-0 z-[-5] pointer-events-none"
      style={{
        backdropFilter: "blur(100px)",
        background: "transparent", // Allow base theme color to show through
      }}
    />
  );
}
