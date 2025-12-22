import { Clock, Code2, Target } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function DifferentialsSection() {
  const { differentials } = siteContent;
  const icons = [Clock, Code2, Target];

  return (
    <section className="py-24 bg-deep-void px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
          {differentials.title}{" "}
          <span className="text-holographic">
            {differentials.titleHighlight}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-holographic/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-holographic/10 flex items-center justify-center text-holographic group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {item.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
