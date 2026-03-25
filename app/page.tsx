import type { Metadata } from "next";
import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navbar";
import dynamic from "next/dynamic";

const ProjectsSection = dynamic(() => import("@/components/ui/projects-section"));
const WhyMacizoSection = dynamic(() => import("@/components/ui/why-macizo-section"));
const TestimonialsSection = dynamic(() => import("@/components/ui/testimonials-section"));
const FinalCTASection = dynamic(() => import("@/components/ui/final-cta-section"));
const Footer = dynamic(() => import("@/components/ui/footer"));
const LogoCloud = dynamic(() => import("@/components/ui/logo-cloud"));
const DifferentialsSection = dynamic(() => import("@/components/ui/differentials-section"));

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
