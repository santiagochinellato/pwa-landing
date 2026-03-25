import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ServicesSection from "@/components/ui/services-section";
import InteractiveProcessSection from "@/components/ui/interactive-process-section";
import StackSection from "@/components/ui/stack-section";
import InvestmentSection from "@/components/ui/investment-section";
import DifferentialsSection from "@/components/ui/differentials-section";

export const metadata: Metadata = {
  title: "Servicios de Desarrollo Web, SEO y Diseño en Bariloche | MacizoDigital",
  description:
    "Desarrollamos sitios web, tiendas online, SEO y sistemas de gestión para empresas en San Carlos de Bariloche y toda la Patagonia. Sin piezas sueltas, con estrategia y resultados medibles.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-24 bg-transparent text-light-fg dark:text-white selection:bg-light-primary dark:selection:bg-holographic selection:text-white dark:selection:text-deep-void transition-colors duration-300"
      >
        <section className="pt-24 pb-0 md:pt-32 border-b border-light-border dark:border-white/5">
  <div className="max-w-[1500px] mx-auto px-4 md:px-12 pb-16 md:pb-24">
    
    <p className="text-xs md:text-sm font-bold tracking-widest uppercase 
       text-light-muted dark:text-white/40 mb-4">
      Servicios
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
         tracking-tight text-light-fg dark:text-white leading-[1.05]">
        Todo lo que necesitás para que tu{" "}
        <span className="text-light-primary dark:text-holographic">
          negocio crezca online.
        </span>
      </h1>

      <div className="space-y-6">
        <p className="text-lg md:text-xl text-light-muted dark:text-white/70 
           font-light leading-relaxed">
          Desde el primer diseño hasta el seguimiento de resultados.
          Sin piezas sueltas, sin proveedores distintos.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Páginas web", "SEO", "Sistemas de gestión", "Estrategia digital"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold tracking-widest uppercase 
                 bg-light-primary/10 dark:bg-holographic/10 
                 border border-light-primary/20 dark:border-holographic/20 
                 text-light-primary dark:text-holographic rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

  </div>
        </section>
        <div className="space-y-0">
          <ServicesSection />
          <InteractiveProcessSection />
          <div className="max-w-[1500px] mx-auto px-4 py-6 md:py-8">
            <div
              className="border-t border-border/40 pt-8 flex flex-col md:flex-row
     md:items-center md:justify-between gap-4"
            >
              <p className="text-lg md:text-xl font-semibold text-foreground">
                Esto es lo que incluye cada proyecto.
              </p>
              <p className="text-base text-muted-foreground">
                Ahora hablemos de lo que vale.
              </p>
            </div>
          </div>
          <InvestmentSection />
          <StackSection />
          {/* <DifferentialsSection /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}

