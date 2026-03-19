"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logoFiles = [
  "KATZ.png",
  "btLogo.webp",
  "LogoLabSarmiento.png",
  "interpracsysLogo.webp",
  "logo.png",
  "cilsLogo.webp",
  "Gnet-black.png",
  "COL-CEMM.png",
  "delvallelogo.webp",
  "COL-CMM1.png",
  "martinquero.svg",
];

export default function LogoCloud() {
  return (
    <section className="py-12 border-b border-light-border/50 dark:border-white/5 bg-light-bg/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-mono text-light-muted dark:text-white/40 uppercase tracking-widest mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-70 grayscale transition-opacity duration-500">
          {logoFiles.map((file, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-12 md:h-14 w-32 md:w-40 flex items-center justify-center"
            >
              <div className="relative w-full h-full grayscale">
                {file.toLowerCase().endsWith(".svg") ? (
                  <img
                    src={`/logosClientes/${file}`}
                    alt={`Logo de ${file.replace(/\.[^/.]+$/, "")}`}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <Image
                    src={`/logosClientes/${file}`}
                    alt={`Logo de ${file.replace(/\.[^/.]+$/, "")}`}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-contain"
                    priority={false}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
