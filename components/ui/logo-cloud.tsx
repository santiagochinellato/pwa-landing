"use client";

import { motion } from "framer-motion";

const companies = [
  "TechFlow",
  "Nexus",
  "Horizon",
  "Apex",
  "Velocity",
  "Zenith",
];

export default function LogoCloud() {
  return (
    <section className="py-12 border-b border-light-border/50 dark:border-white/5 bg-light-bg/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-mono text-light-muted dark:text-white/40 uppercase tracking-widest mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-xl md:text-2xl font-bold font-serif text-light-fg dark:text-white/80"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
