import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import WhyMacizoSection from "@/components/ui/why-macizo-section";

export const metadata: Metadata = {
  title: "Agencia de Desarrollo Web en Bariloche, Patagonia | MacizoDigital",
  description:
    "Somos MacizoDigital, la agencia de desarrollo web, SEO y diseño UX/UI con base en San Carlos de Bariloche. Construimos infraestructura digital sólida para empresas de la Patagonia y LATAM.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-24 bg-transparent text-light-fg dark:text-white selection:bg-light-primary dark:selection:bg-holographic selection:text-white dark:selection:text-deep-void transition-colors duration-300"
      >
        <WhyMacizoSection />
      </main>
      <Footer />
    </>
  );
}

