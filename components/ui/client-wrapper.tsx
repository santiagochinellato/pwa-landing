"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const SmoothScroll = dynamic(() => import("@/components/smooth-scroll"), {
  ssr: false,
});
const MagneticCursor = dynamic(
  () => import("@/components/ui/magnetic-cursor"),
  {
    ssr: false,
  }
);

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <div className="hidden md:block">
        <MagneticCursor />
      </div>
      {children}
    </SmoothScroll>
  );
}
