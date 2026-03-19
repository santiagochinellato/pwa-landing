import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ProjectsSection from "@/components/ui/projects-section";
import TestimonialsSection from "@/components/ui/testimonials-section";

export const metadata: Metadata = {
  title: "Trabajos | MacizoDigital",
  description:
    "Casos de éxito y resultados reales. Portfolio completo y testimonios de clientes.",
};

export default function TrabajosPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-24 bg-transparent text-light-fg dark:text-white selection:bg-light-primary dark:selection:bg-holographic selection:text-white dark:selection:text-deep-void transition-colors duration-300"
      >
        <div className="space-y-0">
          <ProjectsSection />

          {/* Narrative bridge */}
          <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
            <div
              className="border-t border-light-border dark:border-white/10
     pt-10 flex flex-col md:flex-row md:items-end
     md:justify-between gap-4"
            >
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase
         text-light-muted dark:text-white/40 mb-2"
                >
                  Lo que dicen
                </p>
                <p
                  className="text-2xl md:text-3xl font-bold text-light-fg
         dark:text-white leading-snug"
                >
                  Los resultados hablan,{" "}
                  <span className="text-light-primary dark:text-holographic">
                    pero los clientes también.
                  </span>
                </p>
              </div>
              <p
                className="text-base text-light-muted dark:text-white/50
       max-w-sm md:text-right leading-relaxed"
              >
                Cada testimonio es de alguien que empezó con un problema
                y terminó con una herramienta que trabaja por su negocio.
              </p>
            </div>
          </div>
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

