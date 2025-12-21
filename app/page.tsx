import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navbar";
import InfiniteMarquee from "@/components/ui/infinite-marquee";
import ProjectCard from "@/components/ui/project-card";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-void text-white">
      <Navbar />
      <HeroSection />
      
      <InfiniteMarquee />
      
      <section className="px-6 py-24 md:px-12 bg-deep-void">
        <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-2xl font-mono text-holographic tracking-widest mb-12">[ SELECTED WORKS ]</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard title="NEURAL NEXUS" category="AI PLATFORM" year="2025" />
                <ProjectCard title="CYBER DYNAMICS" category="WEB EXPERIENCE" year="2024" />
                <ProjectCard title="VOID WALKER" category="IMMERSIVE 3D" year="2024" />
                <ProjectCard title="QUANTUM CORE" category="SYSTEM DESIGN" year="2025" />
            </div>
        </div>
      </section>

      {/* Manifesto Placeholder */}
      <section className="h-[50vh] flex items-center justify-center border-t border-white/5">
        <div className="text-center space-y-4">
             <p className="text-holographic font-mono text-sm">[ MANIFESTO ]</p>
             <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
                En una web ruidosa, <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-holographic">el silencio es un lujo.</span>
             </h2>
             <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed pt-4">
                Construimos espacios digitales con claridad e intención, elevando la narrativa de tu marca mediante diseño riguroso y tecnología invisible.
             </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
