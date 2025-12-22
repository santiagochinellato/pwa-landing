"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  ShoppingCart,
  Layout,
  CheckCircle2,
  Eye,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import siteContent from "@/data/site-content.json";

interface ProjectCardProps {
  title: string;
  category: string;
  metrics: string[];
  type: "hotel" | "ecommerce" | "corporate" | "landing";
  imageUrl?: string;
}

const icons = {
  hotel: Building2,
  ecommerce: ShoppingCart,
  corporate: Layout,
  landing: Layout,
};

export default function ProjectCard({
  title,
  category,
  metrics,
  type,
  imageUrl,
}: ProjectCardProps) {
  const Icon = icons[type];
  const [isFlipped, setIsFlipped] = useState(false);
  const { projectCard } = siteContent;

  return (
    <>
      {/* Desktop Version (Flip Card) - Visible md and up */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full h-[400px] [perspective:1000px] hidden md:block"
        onHoverStart={() => imageUrl && setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Front Side */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-holographic/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-void/50 pointer-events-none" />

            <div className="relative p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:text-holographic transition-colors">
                  <Icon size={24} />
                </div>
                <span className="text-xs font-mono tracking-widest px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white">
                  {category}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {title}
                </h3>

                <ul className="space-y-3">
                  {metrics.map((metric, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white text-sm md:text-base font-light"
                    >
                      <CheckCircle2 className="w-5 h-5 text-holographic/70 shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-sm font-medium">
                <span className="text-white flex items-center gap-2">
                  {imageUrl && <Eye size={16} className="text-holographic" />}
                  {imageUrl ? projectCard.hoverHint : projectCard.viewCase}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Back Side - Image */}
          {imageUrl && (
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden border border-holographic/30">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-void via-deep-void/50 to-transparent" />

              {/* Info overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {title}
                </div>
                <p className="text-sm text-white mb-4">{category}</p>
                <button className="flex items-center gap-2 text-sm font-medium text-holographic hover:text-white transition-colors">
                  {projectCard.viewCase}
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Mobile Version (Horizontal/Grid Layout) - Visible up to md */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-holographic/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(102,252,241,0.05)] md:hidden block"
      >
        <div className="flex flex-col h-full">
          {/* Image Section */}
          <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-void/30" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon size={64} className="text-white/10" />
              </div>
            )}

            {/* Icon Badge Floating */}
            <div className="absolute top-4 left-4">
              <div className="w-12 h-12 rounded-xl bg-deep-void/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group-hover:text-holographic group-hover:border-holographic/30 transition-all">
                <Icon size={24} />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col justify-between flex-1">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="text-xl font-bold text-white group-hover:text-holographic transition-colors pr-4">
                  {title}
                </div>
                <span className="text-sm text-white mb-4">{category}</span>
              </div>

              {/* Metrics */}
              <ul className="space-y-2.5">
                {metrics.map((metric, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-white text-sm font-light"
                  >
                    <CheckCircle2 className="w-4 h-4 text-holographic/70 shrink-0 mt-0.5" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer CTA */}
            <div className="pt-4 mt-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-sm font-medium text-white group-hover:text-white transition-colors">
                {projectCard.viewCase}
              </span>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-holographic group-hover:text-deep-void transition-all group-hover:scale-110">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
