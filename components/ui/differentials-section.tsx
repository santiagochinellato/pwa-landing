"use client";

import { Clock, Code2, Target } from "lucide-react";
import siteContent from "@/data/site-content.json";
import { motion } from "framer-motion";

export default function DifferentialsSection() {
  const { differentials } = siteContent;
  const icons = [Clock, Code2, Target];

  return (
    <section className="py-24 bg-deep-void px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
          {differentials.title}{" "}
          <span className="text-holographic">
            {differentials.titleHighlight}
          </span>
        </h2>

        <div className="grid grid-cols- md:grid-cols-3 gap-6">
          {differentials.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-deep-void border border-white/10 hover:border-holographic transition-all relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-holographic origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <Icon
                  className="text-holographic mb-6 group-hover:rotate-12 transition-transform"
                  size={40}
                />
                <h3 className="text-xl font-bold text-white max-w-[80%] mb-4">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {item.copy}
                </p>

                {/* Metric Reveal */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white group-hover:text-holographic transition-colors">
                    {item.metric}
                  </span>
                  <span className="text-xs text-white/90 uppercase tracking-widest">
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
