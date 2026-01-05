"use client";

import { Clock, Code2, Target, CheckCircle2 } from "lucide-react";
import siteContent from "@/data/site-content.json";
import { motion } from "framer-motion";

export default function DifferentialsSection() {
  const { differentials } = siteContent;
  const icons = [Clock, Code2, Target];

  return (
    <section className="py-16 md:py-24 bg-transparent px-4 md:px-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-light-fg dark:text-white">
          {differentials.title}{" "}
          <span className="text-light-primary dark:text-holographic">
            {differentials.titleHighlight}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentials.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 rounded-2xl bg-transparent border border-light-border dark:border-white/5 hover:bg-light-surface/30 dark:hover:bg-white/5 transition-all relative group overflow-hidden flex flex-col h-full"
              >
                <Icon
                  className="text-light-primary dark:text-holographic mb-6 group-hover:rotate-12 transition-transform"
                  size={40}
                />

                <h3 className="text-xl font-bold text-light-fg dark:text-white max-w-[90%] mb-4 min-h-[3.5rem] flex items-center">
                  {item.title}
                </h3>

                <ul className="space-y-3 mb-6">
                  {(item.benefits || []).map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-light-primary dark:text-holographic shrink-0 mt-1"
                        size={18}
                      />
                      <span className="text-light-muted dark:text-white/80 text-sm leading-snug">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Metric Reveal */}
                <div className="mt-auto pt-4 border-t border-light-border dark:border-white/5 flex items-baseline align-center gap-2">
                  <span className="text-2xl font-black text-light-fg dark:text-white group-hover:text-light-primary dark:group-hover:text-holographic transition-colors">
                    {item.metric}
                  </span>
                  <span className="text-[10px] md:text-xs text-light-muted dark:text-white/40 uppercase tracking-wide md:tracking-widest whitespace-nowrap">
                    {item.metricLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
