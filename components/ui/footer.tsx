"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Footer() {
  const container = useRef(null);

  return (
    <footer
      ref={container}
      className="relative min-h-screen bg-deep-void flex flex-col justify-between p-6 md:p-12 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-deep-void via-transparent to-holographic/5 pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start z-10 gap-8">
        <div className="text-sm font-mono text-white/40 max-w-xs space-y-4">
          <Image
            src="/pwaLogo.svg"
            alt="Patagonia Web Factory Logo"
            width={60}
            height={60}
            className="w-16 h-16 object-contain mb-4"
          />
          <p>PATAGONIA WEB FACTORY</p>
          <p>
            WE ORCHESTRATE DIGITAL REALITIES THROUGH NEXT-GEN ENGINEERING AND
            ORCHESTRATION.
          </p>
        </div>
        <div className="text-right text-sm font-mono text-white/40 space-y-2">
          <p>[ TERMINALS ]</p>
          <ul className="flex flex-col gap-1">
            <li className="hover:text-holographic cursor-pointer transition-colors">
              TWITTER
            </li>
            <li className="hover:text-holographic cursor-pointer transition-colors">
              GITHUB
            </li>
            <li className="hover:text-holographic cursor-pointer transition-colors">
              LINKEDIN
            </li>
          </ul>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center flex-grow py-20">
        <div className="group relative cursor-pointer">
          <div className="absolute -inset-8 bg-holographic/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
          <h2 className="relative text-6xl md:text-[8vw] font-bold text-center leading-[0.9] tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-holographic transition-all duration-500">
            START THE
            <br />
            FABRICATION
          </h2>
        </div>
      </div>

      <div className="z-10 flex justify-between items-end border-t border-white/10 pt-8 w-full">
        <span className="text-xs text-white/20">© 2025 PATAGONIA SYSTEMS</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-white/20">SYSTEM ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
