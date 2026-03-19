import type { Metadata } from "next";
import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navbar";
import ProjectsSection from "@/components/ui/projects-section";
import WhyMacizoSection from "@/components/ui/why-macizo-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import FinalCTASection from "@/components/ui/final-cta-section";
import Footer from "@/components/ui/footer";
import LogoCloud from "@/components/ui/logo-cloud";
import DifferentialsSection from "@/components/ui/differentials-section";

export const metadata: Metadata = {
  title: "MacizoDigital | Desarrollo Web y SEO desde la Patagonia",
  description:
    "Cubrimos desarrollo web y SEO para que tu negocio consiga más clientes. Solidez, precisión y escala desde la Patagonia.",
};

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-transparent text-light-fg dark:text-white selection:bg-light-primary dark:selection:bg-holographic selection:text-white dark:selection:text-deep-void transition-colors duration-300"
    >
      <Navbar />
      <HeroSection />
      <WhyMacizoSection variant="summary" />
      <LogoCloud/>
      <DifferentialsSection/>
      <ProjectsSection limit={4} />
      <TestimonialsSection limit={3} />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
