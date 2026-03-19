import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import MountainBackground from "@/components/ui/mountain-background";

export const metadata: Metadata = {
  title: "Página no encontrada | MacizoDigital",
  description: "La página que buscás no existe. Volvé al inicio o explorá nuestros servicios.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-24 bg-transparent text-light-fg dark:text-white
           selection:bg-light-primary dark:selection:bg-holographic
           selection:text-white dark:selection:text-deep-void
           transition-colors duration-300 relative overflow-hidden
           flex items-center"
      >
        <MountainBackground
          className="absolute bottom-0 left-0 w-full h-[280px] md:h-[500px]
             z-0 opacity-30 dark:opacity-20"
        />

        <div
          className="relative z-10 max-w-3xl mx-auto px-4 md:px-12
           py-24 md:py-32 text-center w-full"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase
             text-light-muted dark:text-white/40 mb-6"
          >
            Error 404
          </p>

          <h1
            className="text-7xl md:text-9xl font-extrabold tracking-tight
             text-light-fg dark:text-white leading-none mb-6"
          >
            4
            <span className="text-light-primary dark:text-holographic">0</span>
            4
          </h1>

          <p
            className="text-2xl md:text-3xl font-bold text-light-fg
             dark:text-white mb-4 leading-snug"
          >
            Esta página no existe.
          </p>

          <p
            className="text-lg text-light-muted dark:text-white/60
             font-light leading-relaxed mb-12 max-w-md mx-auto"
          >
            Puede que la URL esté mal escrita o que la página haya sido movida.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center
             justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2
                 rounded-full bg-light-primary dark:bg-holographic
                 text-white dark:text-deep-void
                 px-8 py-4 text-base font-bold
                 hover:scale-105 hover:opacity-90 transition-all
                 shadow-lg shadow-light-primary/20 dark:shadow-holographic/20"
            >
              Volver al inicio
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2
                 rounded-full border border-light-border dark:border-white/20
                 text-light-fg dark:text-white
                 px-8 py-4 text-base font-medium
                 hover:border-light-primary/50 dark:hover:border-holographic/50
                 hover:bg-light-primary/5 dark:hover:bg-holographic/5
                 transition-all"
            >
              Contactarnos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
