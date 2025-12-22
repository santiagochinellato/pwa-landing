"use client";

import dynamic from "next/dynamic";

const InfiniteMarquee = dynamic(
  () => import("@/components/ui/infinite-marquee"),
  {
    ssr: false,
  }
);

export default function DynamicMarquee() {
  return <InfiniteMarquee />;
}
