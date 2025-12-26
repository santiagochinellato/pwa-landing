import HeroSection from "@/components/ui/hero-section";
import siteContent from "@/data/site-content.json";
import Navbar from "@/components/ui/navbar";
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
    <main
      id="main-content"
      className="min-h-screen bg-transparent text-light-fg dark:text-white selection:bg-light-primary dark:selection:bg-holographic selection:text-white dark:selection:text-deep-void transition-colors duration-300"
    >
      <Navbar />
      <HeroSection />
      <DifferentialsSection />
      {/* <InfiniteMarquee /> */}
      <ServicesSection />
      <InteractiveProcessSection />
      <section
        id="portfolio"
        className="px-6 py-12 md:py-24 md:px-12 bg-transparent border-t border-light-border dark:border-white/5"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-light-fg dark:text-white text-balance leading-normal">
            TRABAJOS{" "}
            <span className="text-light-primary dark:text-holographic">
              REALIZADOS
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                category={project.category}
                type={
                  project.type as
                    | "hotel"
                    | "corporate"
                    | "ecommerce"
                    | "landing"
                }
                metrics={project.metrics}
                imageUrl={project.imageUrl}
              />
            ))}
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
