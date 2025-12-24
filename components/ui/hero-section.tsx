"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { CityModel } from "./CityModel";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteContent from "@/data/site-content.json";
import React from "react";

export default function HeroSection() {
  const { hero } = siteContent;
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-20">
      <div className="container px-4 md:px-6 z-10 h-full max-h-[900px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          {/* COLUMNA IZQUIERDA: Textos */}
          <div className="flex flex-col space-y-6 text-center lg:text-left relative z-20 lg:pl-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-light-fg to-light-fg/80 dark:from-white dark:to-white/80">
                {hero.titleLine1}
              </span>
              <br />
              <span className="text-light-primary dark:text-holographic">
                {hero.titleHighlight}
              </span>
              <br />
              <span className="text-xl md:text-3xl text-muted-foreground font-normal">
                {hero.subtitle}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto lg:mx-0 max-w-[600px] text-muted-foreground md:text-xl leading-relaxed"
            >
              {hero.description}
              <br className="hidden md:block" />
              <span className="font-medium text-foreground">
                {hero.subDescriptionStrong}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href={hero.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-light-primary dark:bg-holographic px-8 text-sm font-bold text-white dark:text-deep-void shadow transition-transform hover:scale-105"
              >
                {hero.ctaPrimary}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              <Link
                href="#process"
                className="inline-flex h-11 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: El Modelo 3D */}
          <div className="h-[50vh] lg:h-full w-full relative min-h-[400px]">
            {isMounted && (
              <Canvas
                shadows
                dpr={[1, 2]} // 1. Sharpness: Handle Retina displays
                gl={{ antialias: true, preserveDrawingBuffer: true }} // 2. Sharpness: Antialias
                camera={{ position: [8, 6, 8], fov: 35 }}
              >
                {/* Luces mejoradas: más intensidad para evitar modorro "oscuro" */}
                <ambientLight intensity={1.5} />
                <directionalLight
                  position={[10, 10, 5]}
                  intensity={3}
                  castShadow
                  shadow-mapSize={[1024, 1024]}
                  shadow-bias={-0.0001} // 3. Sharpness: Better shadow quality
                />
                <spotLight position={[-5, 5, 0]} intensity={2} angle={0.5} />

                {/* Entorno suave - DISABLED FOR STABILITY
                <Environment preset="city" blur={0.8} />
                */}

                <React.Suspense fallback={null}>
                  <CityModel />
                </React.Suspense>

                {/* Controles para que el usuario pueda rotar la ciudad, limitado */}
                <OrbitControls
                  enableZoom={false}
                  enablePan={true}
                  autoRotate
                  autoRotateSpeed={0.8}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2.2} // Limita para no ver desde abajo
                />

                {/* Sombra de contacto - DISABLED FOR STABILITY
                <ContactShadows
                  position={[0, -0.05, 0]} // Justo debajo del modelo centrado
                  opacity={0.4}
                  scale={10}
                  blur={2}
                  far={4.5}
                />
                */}
              </Canvas>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
