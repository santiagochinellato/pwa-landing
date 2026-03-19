# Relevamiento de CTAs y botones (MacizoDigital)

Fecha: 2026-03-19  
Alcance: inventario de CTAs/botones en `app/` y `components/` (App Router, `output: "export"`).

## Criterio usado
- Se consideran CTAs/botones los enlaces (`<a>`, `<Link>`) y botones con intención de navegación/acción (especialmente los de contacto).
- WhatsApp: se toma como destino el link en `data/site-content.json` (`whatsappLink` / `finalCta.whatsappLink`), y también cualquier `href` que apunte a `https://wa.me/...`.
- Se marcan como “faltantes” los `href` placeholders (ej. `XXXXXX`) y los botones sin `href`/`onClick`.

## Inventario por página / sección

### Home (`app/page.tsx`)
Componentes relevantes: `HeroSection`, `WhyMacizoSection (variant="summary")`, `ProjectsSection`, `TestimonialsSection`, `FinalCTASection`, `FloatingCTA`, `DifferentialsSection`, `Footer`.

1. Navbar (CTA principal)
   - Archivo: [`app/components/ui/navbar/navbar-desktop.tsx`](components/ui/navbar/navbar-desktop.tsx)
   - Texto: `navbar.cta` (en JSON: “Hablemos”)
   - Destino: `navbar.whatsappLink` (`https://wa.me/5492944227526`)
   - Estado: OK

2. Hero (CTA primario)
   - Archivo: [`components/ui/hero-section.tsx`](components/ui/hero-section.tsx)
   - Texto: `hero.ctaPrimary` (“Quiero más clientes”)
   - Destino: `hero.whatsappLink` (`https://wa.me/5492944227526`)
   - Estado: OK

3. Hero (CTA secundario)
   - Archivo: [`components/ui/hero-section.tsx`](components/ui/hero-section.tsx)
   - Texto: `hero.ctaSecondary` (“Ver resultados”)
   - Destino: `/trabajos`
   - Estado: OK (navegación interna)

4. Why Macizo (summary)
   - Archivo: [`components/ui/why-macizo-section.tsx`](components/ui/why-macizo-section.tsx)
   - Texto: “Leer nuestro manifiesto”
   - Destino: `/nosotros`
   - Estado: OK (navegación interna)

5. Projects (tarjetas)
   - Archivo: [`components/ui/projects-section.tsx`](components/ui/projects-section.tsx) + [`components/ui/project-card.tsx`](components/ui/project-card.tsx)
   - Botón sin destino:
     - Texto: “Ver caso completo”
     - Estado: REQUIERE CONEXION (no tiene `href` ni `onClick`)

6. Final CTA
   - Archivo: [`components/ui/final-cta-section.tsx`](components/ui/final-cta-section.tsx)
   - WhatsApp:
     - Texto: `finalCta.whatsappButton` (“Quiero una web que venda”)
     - Destino: `finalCta.whatsappLink` (`https://wa.me/5492944227526`)
     - Estado: OK
   - Segundo CTA:
     - Texto: `finalCta.videoButton` (“Agendar diagnóstico gratuito”)
     - Destino: `finalCta.emailLink` (`mailto:hola@macizodigital.com`)
     - Estado: OK (pero NO es WhatsApp)

7. Floating CTA
   - Archivo: [`components/ui/floating-cta.tsx`](components/ui/floating-cta.tsx)
   - Texto: “Hablemos por WhatsApp”
   - Destino: `navbar.whatsappLink` (`https://wa.me/5492944227526`)
   - Estado: OK

8. Footer
   - Archivo: [`components/ui/footer/index.tsx`](components/ui/footer/index.tsx)
   - CTA destacado: mailto del email de la empresa (`mailto:${footer.email}`)
   - Estado: OK (no WhatsApp)

### Servicios (`app/servicios/page.tsx`)
Componentes relevantes: `ServicesSection`, `InteractiveProcessSection`, `InvestmentSection`, `StackSection`.

1. ServicesSection - Main service
   - Archivo: [`components/ui/services-section.tsx`](components/ui/services-section.tsx)
   - Texto (JSON): `services.mainService.cta` (“Quiero más clientes”)
   - Destino: `https://wa.me/5492944227526`
   - Estado: OK

2. ServicesSection - Full package
   - Archivo: [`components/ui/services-section.tsx`](components/ui/services-section.tsx)
   - Texto (JSON): `services.fullPackage.cta` (“Solicitar diagnóstico”)
   - Destino: `https://wa.me/5492944227526`
   - Estado: OK

3. InteractiveProcessSection - CTA por paso
   - Archivo: [`components/ui/interactive-process-section.tsx`](components/ui/interactive-process-section.tsx)
   - Destino: `https://wa.me/5492944227526`
   - Texto: `currentStep.cta` (varía por paso: “Empezar”, “Ver diseño”, “Despegar”, etc.)
   - Estado: OK

4. StackSection - CTA mobile
   - Archivo: [`components/ui/stack-section.tsx`](components/ui/stack-section.tsx)
   - Texto (hardcoded): “Consulta gratuita”
   - Destino: `https://wa.me/5492944227526`
   - Estado: OK

### Trabajos (`app/trabajos/page.tsx`)
Componentes relevantes: `ProjectsSection`, `TestimonialsSection`.

1. Projects (tarjetas)
   - Archivo: [`components/ui/project-card.tsx`](components/ui/project-card.tsx)
   - Botón sin destino:
     - Texto: “Ver caso completo”
     - Estado: REQUIERE CONEXION (no tiene `href` ni `onClick`)

2. Testimonials
   - Archivo: [`components/ui/testimonials-section.tsx`](components/ui/testimonials-section.tsx)
   - Estado: sin CTAs externas (solo navegación del carrusel)

### Nosotros (`app/nosotros/page.tsx`)
Componentes relevantes: `WhyMacizoSection` (full por default).

1. Why Macizo (full)
   - Archivo: [`components/ui/why-macizo-section.tsx`](components/ui/why-macizo-section.tsx)
   - Texto: “Hablemos de tu proyecto”
   - Destino: `https://wa.me/5492944227526`
   - Estado: OK

### Contacto (`app/contacto/page.tsx`)
Componentes relevantes: `ContactForm`.

1. Channel cards
   - Archivo: [`app/contacto/page.tsx`](app/contacto/page.tsx)
   - WhatsApp:
     - Destino: `siteContent.finalCta.whatsappLink` (`https://wa.me/5492944227526`)
     - Estado: OK
   - Instagram:
     - Destino: `https://instagram.com/macizo.digital`
     - Estado: OK
   - Email:
     - Destino: `mailto:${footer.email}`
     - Estado: OK

2. ContactForm submit
   - Archivo: [`components/ui/contact-form.tsx`](components/ui/contact-form.tsx)
   - Botón: “Enviar por WhatsApp”
   - Estado: OK (abre WhatsApp con mensaje construido)

## Hallazgos críticos (faltantes)

1. Placeholder WhatsApp en componente no usado en páginas actuales
   - Archivo: [`components/ui/process-section.tsx`](components/ui/process-section.tsx)
   - Problema: `href="https://wa.me/5492944XXXXXX"` (placeholder incorrecto)
   - Observación: no aparece importado en `app/` (no se usa en las páginas actuales); si se reusa, debe corregirse.

2. Botón sin navegación real en tarjetas de proyectos
   - Archivo: [`components/ui/project-card.tsx`](components/ui/project-card.tsx)
   - Problema: botón `<button>Ver caso completo</button>` sin `href` ni `onClick`.
   - Impacto: el usuario ve un CTA pero no sucede nada.

## Observaciones sobre navegación “por sección”
- Hay un skip-link a `#main-content` en `app/layout.tsx`, pero no se detectaron CTAs hacia `#portfolio`, `#testimonials` o `#contact` en `app/` o `components/`.
- `InteractiveProcessSection` usa lógica interna (`scrollIntoView`) para el carrusel/paso activo, no para navegar a secciones de página.

## Recomendaciones (sin aplicar)
- Resolver el botón “Ver caso completo” en `project-card.tsx`.
  - Opción A: abrir `project.link` en nueva pestaña (requiere pasar `project.link` a `ProjectCard`).
  - Opción B: abrir WhatsApp con un mensaje prearmado usando `finalCta.whatsappLink` y el contexto del proyecto.
- Corregir el placeholder de WhatsApp en `process-section.tsx` si ese componente vuelve a usarse.
- Si el objetivo es que “Contacto” lleve al usuario al formulario/CTA de la home por scroll interno, revisar enlaces tipo `/contacto` vs scroll interno a `id="contact"` (existe en `final-cta-section.tsx`), porque hoy la navegación va por ruta completa.

