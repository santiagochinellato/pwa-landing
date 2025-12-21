"use client";
import { motion } from "framer-motion";

const STACK = ["Next.js", "Sanity", "AI", "Vercel", "Tailwind", "Framer Motion", "Lenis", "React"];

export default function InfiniteMarquee() {
  return (
    <div className="relative py-32 overflow-hidden bg-deep-void">
      {/* Fade Gradients for smooth entry/exit */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-deep-void to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-deep-void to-transparent z-10" />
      
      {/* Tilted Marquee Container */}
      <div className="-rotate-3 scale-105 origin-center">
        <motion.div 
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            style={{ x: 0 }} // Initial
        >
            {[...STACK, ...STACK, ...STACK, ...STACK].map((item, i) => (
                <div key={i} className="relative group">
                    <div className="absolute -inset-1 bg-holographic/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative text-5xl md:text-8xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 stroke-white/10" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                        {item}
                    </div>
                </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
