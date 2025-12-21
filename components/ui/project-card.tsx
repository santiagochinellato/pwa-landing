"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    category: string;
    year: string;
    imageUrl?: string; // Optional for now
}

export default function ProjectCard({ title, category, year, imageUrl }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // Smooth mouse movement
    const maskX = useSpring(0, { stiffness: 100, damping: 20 });
    const maskY = useSpring(0, { stiffness: 100, damping: 20 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left - width / 2;
            const mouseY = e.clientY - rect.top - height / 2;
            
            x.set(mouseX / 15); // Parallax factor
            y.set(mouseY / 15);

            maskX.set(e.clientX - rect.left);
            maskY.set(e.clientY - rect.top);
        }
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl bg-white/5 border border-white/10 group cursor-none"
        >
            <motion.div 
                style={{ x, y, scale: 1.1 }}
                className="absolute inset-0 w-full h-full"
            >
                {/* Placeholder or Image */}
                 <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700" />
                 {imageUrl && <Image src={imageUrl} alt={title} fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" />}
            </motion.div>

            {/* Custom Cursor / Hover Reveal Area */}
            {/* We could use maskImage for a flashlight effect, but keep it simple for now as requested: Parallax + Info */}

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 mix-blend-difference">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                     <span className="text-xs font-mono tracking-widest text-holographic">{category}</span>
                     <span className="text-xs font-mono tracking-widest text-white/50">{year}</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 ease-out">{title}</h3>
            </div>
            
            {/* Optional Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-void/90 via-transparent to-transparent pointer-events-none" />
        </motion.div>
    );
}
