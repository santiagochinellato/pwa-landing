export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Charlamos",
      description:
        "Entendemos tu negocio, público y objetivos. Primera consulta sin cargo.",
      time: "1 día",
    },
    {
      number: "02",
      title: "Diseñamos",
      description:
        "Creamos el diseño y estructura de tu web. Revisiones incluidas.",
      time: "2-3 días",
    },
    {
      number: "03",
      title: "Desarrollamos",
      description:
        "Programamos con React, Next.js y tecnología escalable. IA para optimizar tiempos.",
      time: "4-6 días",
    },
    {
      number: "04",
      title: "Revisamos",
      description: "Ajustamos cada detalle hasta que estés 100% conforme.",
      time: "1-2 días",
    },
    {
      number: "05",
      title: "Lanzamos",
      description:
        "Publicamos tu web, configuramos hosting y dejamos todo funcionando.",
      time: "1 día",
    },
    {
      number: "06",
      title: "Acompañamos",
      description:
        "Soporte continuo, actualizaciones y mejoras cuando las necesites.",
      time: "Continuo",
    },
  ];

  return (
    <section id="process" className="py-24 bg-deep-void px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
          CÓMO <span className="text-holographic">TRABAJAMOS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors group"
            >
              <div className="absolute top-4 right-4 text-4xl font-black text-white/5 group-hover:text-holographic/20 transition-colors">
                {step.number}
              </div>

              <div className="mb-4 inline-block px-2 py-1 bg-holographic/10 border border-holographic/30 rounded text-holographic text-xs font-mono">
                {step.time}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-white/60 font-light text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5492944XXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b border-holographic text-holographic pb-1 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            Empezar ahora →
          </a>
        </div>
      </div>
    </section>
  );
}
