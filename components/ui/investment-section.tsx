"use client";

import { TrendingUp } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function InvestmentSection() {
  const { investment } = siteContent;

  return (
    <section className="py-16 md:py-24 bg-light-surface dark:bg-white/5 border-t border-light-border dark:border-white/5 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="inline-block mb-6 px-3 py-1 bg-light-primary/10 dark:bg-holographic/10 rounded-full border border-light-primary/20 dark:border-holographic/20">
          <h2 className="text-xs md:text-sm font-bold text-light-primary dark:text-holographic tracking-widest uppercase">
            {investment.badge}
          </h2>
        </div>

        <h3 className="text-3xl md:text-5xl font-extrabold text-light-fg dark:text-white mb-6 text-balance leading-tight">
          {investment.title}{" "}
          <span className="text-light-primary dark:text-holographic">
            {investment.titleHighlight}
          </span>
        </h3>

        <p className="text-lg md:text-xl text-light-muted dark:text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          {investment.description}
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-light-muted/80 dark:text-white/40 font-mono uppercase tracking-widest">
          <TrendingUp
            size={16}
            className="text-light-primary dark:text-holographic"
          />
          <span>ROI Positivo garantizado</span>
        </div>
      </div>
    </section>
  );
}
