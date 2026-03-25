import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import siteContent from "@/data/site-content.json";
import ContactForm from "@/components/ui/contact-form";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | MacizoDigital",
  description:
    "Hablemos de tu proyecto. Primera consulta sin cargo, diagnóstico incluido.",
};

const CHANNELS = [
  {
    label: "WhatsApp",
    value: "+54 9 294 422 7526",
    href: siteContent.finalCta.whatsappLink,
    icon: MessageCircle,
    iconBg: "bg-light-primary/10 dark:bg-holographic/10",
    iconColor: "text-light-primary dark:text-holographic",
  },
  {
    label: "Instagram",
    value: "@macizo.digital",
    href: "https://instagram.com/macizo.digital",
    icon: Instagram,
    iconBg: "bg-purple-500/10 dark:bg-purple-400/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    label: "Email",
    value: "hola@macizodigital.com",
    href: `mailto:${siteContent.footer.email}`,
    icon: Mail,
    iconBg: "bg-amber-500/10 dark:bg-amber-400/10",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
] as const;

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen pt-24 bg-transparent text-light-fg
           dark:text-white selection:bg-light-primary
           dark:selection:bg-holographic selection:text-white
           dark:selection:bg-deep-void transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-12 py-16 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* ── LEFT — info ───────────────────────────── */}
            <div className="lg:sticky lg:top-32 flex flex-col gap-10">
              {/* Heading */}
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase
                   text-light-muted dark:text-white/40 mb-4"
                >
                  Contacto
                </p>
                <h1
                  className="text-4xl md:text-5xl font-extrabold
                   tracking-tight text-light-fg dark:text-white
                   leading-[1.05] mb-5"
                >
                  Hablemos de lo que<br />
                  necesita tu{" "}
                  <span className="text-light-primary dark:text-holographic">
                    negocio.
                  </span>
                </h1>
                <p
                  className="text-lg text-light-muted dark:text-white/60
                   font-light leading-relaxed"
                >
                  No te vamos a vender algo que no necesitás. Primero
                  entendemos dónde estás, después te decimos qué tiene
                  sentido.
                </p>
              </div>

              {/* Channel cards */}
              <div className="flex flex-col gap-3">
                {CHANNELS.map((ch) => {
                  const Icon = ch.icon;
                  return (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-5 py-4
                         rounded-2xl border border-light-border
                         dark:border-white/10 bg-light-surface/40
                         dark:bg-white/5 hover:border-light-primary/40
                         dark:hover:border-holographic/40
                         hover:-translate-y-0.5 transition-all
                         duration-200 group"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center
                           justify-center shrink-0 ${ch.iconBg}`}
                      >
                        <Icon
                          size={18}
                          className={ch.iconColor}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[11px] font-bold tracking-widest
                           uppercase text-light-muted dark:text-white/40
                           mb-0.5"
                        >
                          {ch.label}
                        </p>
                        <p className="text-sm font-medium text-light-fg
                           dark:text-white truncate">
                          {ch.value}
                        </p>
                      </div>
                      <span
                        className="text-light-muted/40 dark:text-white/20
                           group-hover:text-light-primary
                           dark:group-hover:text-holographic
                           transition-colors text-lg leading-none"
                      >
                        ↗
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Manifesto quote */}
              <div
                className="border-l-4 border-light-primary/70
                   dark:border-holographic/50 pl-5"
              >
                <p
                  className="text-base text-light-muted dark:text-white/60
                   font-light italic leading-relaxed"
                >
                  No construimos páginas. Construimos cimientos. Si tu
                  negocio necesita algo sólido, estamos acá para ayudarte
                  a encontrar por dónde empezar.
                </p>
              </div>
            </div>

            {/* ── RIGHT — form ──────────────────────────── */}
            <div
              className="rounded-2xl border border-light-border/70
                 dark:border-white/10 bg-light-surface/30 dark:bg-white/5
                 p-6 md:p-8"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

