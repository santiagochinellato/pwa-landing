import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import WhyMacizoSection from "@/components/ui/why-macizo-section";

export const metadata: Metadata = {
  title: "Nosotros | MacizoDigital",
  description:
    "Manifiesto completo de MacizoDigital: filosofía, Patagonia y los 3 pilares que sostienen cada proyecto.",
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

