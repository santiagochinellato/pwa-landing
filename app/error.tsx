"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-24 bg-transparent text-light-fg dark:text-white
           selection:bg-light-primary dark:selection:bg-holographic
           selection:text-white dark:selection:text-deep-void
           transition-colors duration-300
           flex items-center"
      >
        <div
          className="relative z-10 max-w-3xl mx-auto px-4 md:px-12
           py-24 md:py-32 text-center w-full"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase
             text-light-muted dark:text-white/40 mb-6"
          >
            Error inesperado
          </p>

          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight
             text-light-fg dark:text-white leading-none mb-6"
          >
            Algo salió{" "}
            <span className="text-light-primary dark:text-holographic">mal.</span>
          </h1>

          <p
            className="text-lg text-light-muted dark:text-white/60
             font-light leading-relaxed mb-12 max-w-md mx-auto"
          >
            Ocurrió un error inesperado. Podés intentar recargar la página o
            volver al inicio.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center
             justify-center gap-4"
          >
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2
                 rounded-full bg-light-primary dark:bg-holographic
                 text-white dark:text-deep-void
                 px-8 py-4 text-base font-bold
                 hover:scale-105 hover:opacity-90 transition-all
                 shadow-lg shadow-light-primary/20 dark:shadow-holographic/20"
            >
              Intentar de nuevo
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2
                 rounded-full border border-light-border dark:border-white/20
                 text-light-fg dark:text-white
                 px-8 py-4 text-base font-medium
                 hover:border-light-primary/50 dark:hover:border-holographic/50
                 hover:bg-light-primary/5 dark:hover:bg-holographic/5
                 transition-all"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
