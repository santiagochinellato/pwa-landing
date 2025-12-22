import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navbar";
import InfiniteMarquee from "@/components/ui/infinite-marquee";
import ProjectCard from "@/components/ui/project-card";
import Footer from "@/components/ui/footer";
import DifferentialsSection from "@/components/ui/differentials-section";
import ServicesSection from "@/components/ui/services-section";
import InteractiveProcessSection from "@/components/ui/interactive-process-section";
import StackSection from "@/components/ui/stack-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import FinalCTASection from "@/components/ui/final-cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-void text-white selection:bg-holographic selection:text-deep-void">
      <Navbar />
      <HeroSection />
      <DifferentialsSection />
      {/* <InfiniteMarquee /> */}
      <ServicesSection />
      <InteractiveProcessSection />
      <section
        id="portfolio"
        className="px-6 py-24 md:px-12 bg-deep-void border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">
            TRABAJOS <span className="text-holographic">REALIZADOS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Hotel Boutique Bariloche"
              category="WEB INSTITUCIONAL"
              type="hotel"
              metrics={[
                "40% más consultas directo web",
                "Carga ultra-rápida (1.2s)",
                "Diseño 100% responsive",
              ]}
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
            />
            <ProjectCard
              title="Estudio Contable NQN"
              category="CORPORATIVO"
              type="corporate"
              metrics={[
                "65% menos consultas repetitivas",
                "Panel de gestión propio",
                "Blog con 20+ artículos SEO",
              ]}
              imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
            />
            <ProjectCard
              title="Ecommerce Regional"
              category="TIENDA ONLINE"
              type="ecommerce"
              metrics={[
                "200+ productos gestionados",
                "Checkout optimizado (85% conv.)",
                "Integración Mercado Pago",
              ]}
              imageUrl="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800"
            />
            <ProjectCard
              title="Consultora Tech BUE"
              category="LANDING B2B"
              type="landing"
              metrics={[
                "12% tasa de conversión leads",
                "Validación de formularios IA",
                "Conexión directa a CRM",
              ]}
              imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
            />
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <StackSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
