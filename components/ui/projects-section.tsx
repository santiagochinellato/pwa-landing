import siteContent from "@/data/site-content.json";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsSection({ limit }: { limit?: number }) {
  const projects = siteContent.projects;
  const visibleProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;

  const featured = visibleProjects[0];
  const rest = visibleProjects.slice(1);

  return (
    <section
      id="portfolio"
      className="px-4 md:px-12 py-16 md:py-24 bg-transparent
         border-t border-light-border dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ── Intro ─────────────────────────────────────── */}
        <div className="max-w-3xl">
          <p
            className="text-xs font-bold tracking-widest uppercase
             text-light-muted dark:text-white/40 mb-4"
          >
            Portfolio
          </p>
          <h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight
             text-light-fg dark:text-white leading-[1.05] mb-5"
          >
            Trabajos{" "}
            <span className="text-light-primary dark:text-holographic">
              realizados.
            </span>
          </h2>
          <p
            className="text-lg md:text-xl text-light-muted dark:text-white/60
             font-light leading-relaxed"
          >
            Cada proyecto arrancó con un problema concreto y terminó
            con resultados medibles. Estos son algunos de los negocios
            que acompañamos.
          </p>
        </div>

        {/* ── Featured project ──────────────────────────── */}
        {featured && (
          <div className="w-full">
            <p
              className="inline-flex items-center px-4 py-2 rounded-full border
               text-xs md:text-sm font-bold tracking-widest uppercase
               mb-5 w-fit
               border-light-primary/20 dark:border-holographic/20
               bg-light-primary/10 dark:bg-holographic/10
               text-light-primary dark:text-holographic"
            >
              Proyecto destacado
            </p>
            <div className="md:h-[520px]">
              <ProjectCard
                title={featured.title}
                category={featured.category}
                type={
                  featured.type as "hotel" | "corporate" | "ecommerce" | "landing"
                }
                metrics={featured.metrics}
                imageUrl={featured.imageUrl}
                featured
              />
            </div>
          </div>
        )}

        {/* ── Rest of projects ──────────────────────────── */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((project, idx) => {
              const isLast = idx === rest.length - 1;
              const shouldCenterLast = isLast && rest.length % 2 === 1;

              return (
                <div
                  key={idx}
                  className={
                    shouldCenterLast
                      ? "md:col-span-2 flex justify-center"
                      : undefined
                  }
                >
                  <ProjectCard
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

