# Copy de la web — MacizoDigital (inventario + contexto UX/UI)

Este documento junta **todos los textos** detectados en el proyecto (copy visible + microcopy + SEO/metadata + etiquetas accesibles) y agrega **contexto** para análisis de **público objetivo, tono y mejoras**.

> Fuente principal de copy editable: `data/site-content.json`  
> Textos “hardcodeados” adicionales: varios componentes en `components/ui/*` y `app/layout.tsx`.

---

## Objetivo del mensaje (lo que “prometemos”)

- **Promesa principal**: “Tu web te trae clientes / ventas” (sitio como herramienta comercial 24/7).
- **Diferenciación**: no “diseño lindo” sino **estrategia**, conversión, velocidad y acompañamiento.
- **Oferta**: webs/landings/tiendas + SEO + diagnóstico gratis + asesoramiento continuo.
- **CTA dominante**: WhatsApp (“HABLEMOS”, “Quiero más clientes”, “Hablemos por WhatsApp”).

## Público objetivo inferido (para validar)

- **Dueños/gestores de PyMEs y servicios profesionales** que quieren más consultas/ventas (no necesariamente técnicos).
- **Negocios locales/regionales** (Bariloche / Patagonia) con proyección a **Argentina y LATAM**.
- Verticales sugeridas por proyectos/testimonios: **turismo**, **salud**, **software B2B**, **servicios profesionales**.

## Tono y personalidad actuales

- Directo, coloquial argentino (“mientras dormís”, “dibujitos”, “página linda”).
- Orientado a resultado (ventas, consultas, ROI) + urgencia moderada (“Cupos limitados”).
- Mezcla de formalidad: hay frases muy coloquiales junto con términos técnicos (“Next.js”, “Copywriting”, “IA”).

---

## SEO / Metadata (lo que ve Google y redes)
**Fuente**: `app/layout.tsx`

- **Title (default)**: “MacizoDigital | Desarrollo Web y SEO desde la Patagonia”
- **Title template**: “%s | MacizoDigital”
- **Description**: “Agencia de desarrollo web y marketing digital en Bariloche. Creamos sitios web de alto rendimiento, tiendas online y estrategias SEO para potenciar tu negocio.”
- **Keywords**:
  - “Desarrollo Web Bariloche”
  - “Diseño Web Patagonia”
  - “Agencia SEO Bariloche”
  - “Marketing Digital Argentina”
  - “Diseño UX/UI”
  - “Tiendas Online”
  - “Ecommerce”
- **OpenGraph title**: “MacizoDigital - Infraestructura Digital desde la Patagonia”
- **OpenGraph description**: “Convertimos tu negocio en un líder digital. Desarrollo web de alto impacto desde la Patagonia para todo el país.”
- **Twitter title**: “MacizoDigital | Desarrollo Web y SEO”
- **Twitter description**: “Agencia de desarrollo web y marketing digital en Bariloche. Transformamos tu presencia digital.”
- **Twitter creator**: “@macizo.digital *(placeholder)*
- **Google verification**: “google-site-verification=YOUR_VERIFICATION_CODE” *(placeholder)*

**Contexto UX/UI**:
- Este bloque define el “primer contacto” en búsquedas y redes. Conviene alinear vocabulario con el copy del hero (“clientes/ventas”) o decidir una línea más institucional (“infraestructura digital”).

---

## Accesibilidad y microcopy global
**Fuente**: `app/layout.tsx`, `components/ui/*`

- **Skip link**: “Saltar al contenido principal”
- **Loading**: “Cargando...”

**Etiquetas ARIA (no visibles pero copy)**:
- `FloatingCTA`: “Contactar por WhatsApp”
- `NavbarMobileToggle`: “Toggle mobile menu”
- `ThemeToggle`: “Toggle theme”
- `InteractiveProcessSection`:
  - “Paso anterior”
  - “Siguiente paso”
  - “Ir al paso X”

**Contexto UX/UI**:
- Si el objetivo es “todo en español”, hay 2 strings ARIA en inglés (“Toggle theme”, “Toggle mobile menu”) que podrían traducirse.

---

## Navbar (navegación)
**Fuente**: `data/site-content.json`, `components/ui/navbar/*`

### Logo
- `logoAlt`: “MacizoDigital Logo”

### Items del menú
- “PROYECTOS”
- “SERVICIOS”
- “CÓMO TRABAJAMOS”
- “RESULTADOS”
- “CONTACTO”

### CTA principal (Navbar)
- Botón: “HABLEMOS”

### Label de tema (mobile menu)
- “Tema”

**Contexto UX/UI**:
- La navegación es clara y orientada a secciones. El CTA “HABLEMOS” es genérico; si se quiere más performance, testear variantes tipo “Pedir diagnóstico” / “Quiero más clientes”.

---

## Hero (primera pantalla)
**Fuente**: `data/site-content.json`, `components/ui/hero-section.tsx`

### Titular
- “Tu negocio necesita más clientes.”
- “Tu web puede traértelos.”

### Subtítulo
- “Más clientes. Más ventas. Sin complicaciones.”

### Descripción
- “Creamos webs que te traen clientes mientras dormís. No es solo diseño, es estrategia: tu sitio trabaja 24/7 para aumentar tus ventas.”
- Enfatizado: “Una herramienta de ventas, no solo una página linda.”

### CTAs
- Primario: “Quiero más clientes” (WhatsApp)
- Secundario: “Ver resultados” (ancla a proceso)

### Value props (tarjetas)
- “Diseñada para vender” — “Cada elemento pensado para que te compren”
- “Lista en 2 semanas” — “Tu web funcionando rápido”
- “Asesoramiento incluido” — “Pensamos tu negocio juntos”

### Social proof strip (hardcodeado)
- “+15 clientes”
- “5.0 Rating”
- “2 sem. entrega”

**Contexto UX/UI**:
- Este hero apunta a un usuario con dolor “no me llegan clientes” y propone una solución rápida + acompañamiento.
- Hay una mezcla de métricas concretas (“2 semanas”) con otras ambiguas (“+15 clientes”, “5.0 Rating”) que conviene respaldar o reformular para credibilidad.

---

## Logo Cloud / Confianza (sección de marcas)
**Fuente**: `components/ui/logo-cloud.tsx`

- Eyebrow: “Empresas que confían en nosotros”
- Marcas (placeholders):
  - “TechFlow”, “Nexus”, “Horizon”, “Apex”, “Velocity”, “Zenith”

**Contexto UX/UI**:
- Hoy son nombres ficticios: si no se reemplazan por clientes reales, puede restar confianza. Alternativa: “Tecnologías/partners” o “Resultados en números”.

---

## Diferenciales (“por qué elegirnos”)
**Fuente**: `data/site-content.json`, `components/ui/differentials-section.tsx`

### Título
- “POR QUÉ” / “ELEGIRNOS”

### Items
1) “Pensamos tu negocio, no solo tu web”
   - “Entendemos tu negocio primero”
   - “Diseñamos la estrategia antes que la web”
   - “Alineamos todo a tus objetivos de venta”
   - Métrica: “Estratégico” — “Enfoque en tu negocio”

2) “Asesoramiento + Ejecución”
   - “No somos solo programadores”
   - “Te guiamos en la estrategia comercial”
   - “Solución completa sin sorpresas”
   - Métrica: “Completo” — “Consultoría + Desarrollo”

3) “Sin límites geográficos”
   - “Trabajamos con toda Argentina y LATAM”
   - “Estándares internacionales de calidad”
   - “Cercanía humana, alcance global”
   - Métrica: “Sin fronteras” — “Argentina y LATAM”

**Contexto UX/UI**:
- Es una sección de “razones para elegir” (objeciones). Podría beneficiarse de pruebas: casos, números, credenciales (años, proyectos, industrias).

---

## Servicios (“qué resolvemos”)
**Fuente**: `data/site-content.json`, `components/ui/services-section.tsx`

### Título
- “QUÉ” / “RESOLVEMOS”

### Servicio principal (featured)
- Título: “¿Tu web te trae clientes nuevos cada mes?”
- Detalles: “Páginas web estratégicas • Tiendas online que venden • Páginas para campañas”
- Descripción:
  - “Tu competencia tiene web, pero ¿les trae clientes? Nosotros no hacemos páginas lindas que nadie ve. Hacemos sitios que cuando alguien entra, entiende qué hacés, confía en vos y te contacta.”
- Duración:
  - Label: “Tu web funcionando en”
  - Valor: “2 semanas”
  - Subtexto: “En ese tiempo entendemos tu negocio, diseñamos la estrategia, programamos y nos aseguramos de que funcione para aumentar tus ventas.”
- CTA: “Quiero más clientes”
- Badge: “SOLUCIÓN COMPLETA”

### Servicios secundarios
- “Revisión de tu web actual”
  - “¿Tenés web pero no te trae clientes? Te decimos qué está mal y cómo arreglarlo.”
  - “Diagnóstico gratis”
- “Que te encuentren en Google”
  - “Hacemos que aparezcas cuando la gente busca lo que vendés. Lleva tiempo, pero arrancamos con bases sólidas.”
  - “Estrategia a largo plazo”

### Paquete completo (partner)
- Título: “Tu Partner Digital de Confianza”
- Badge: “ASESORAMIENTO CONTINUO”
- Descripción: “Creamos tu web + Pensamos tu estrategia + Te acompañamos en el crecimiento.”
- CTA: “Solicitar diagnóstico”

### CTA final (en JSON, actualmente no renderizado como bloque CTA)
- “¿No sabés por dónde empezar? Te hacemos un diagnóstico gratis de tu situación.”

**Contexto UX/UI**:
- Acá el discurso es “conversion-first”. Puede servir agregar segmentación por industria (“turismo”, “salud”, “B2B”) o por objetivo (“más consultas”, “más reservas”, “más ventas”).

---

## Proceso (sección interactiva)
**Fuente**: `data/site-content.json`, `components/ui/interactive-process-section.tsx`

### Badge + Título
- “[ ASÍ TRABAJAMOS PARA TRAERTE RESULTADOS ]”
- “CÓMO CONVERTIMOS” / “TU WEB” / “EN UNA HERRAMIENTA DE VENTAS”

### Descripción
- “No empezamos haciendo dibujitos. Primero charlamos: ¿qué vendés? ¿quiénes te compran? ¿qué hace tu competencia? Después diseñamos todo pensando en que la gente te contacte o te compre.”

### Etapas
1) “Entendemos”
   - “Fase 1”
   - “Diagnóstico y Estrategia”
   - Incluye:
     - “Analizamos tu negocio y competencia”
     - “Definitimos objetivos de venta”
     - “Diseñamos la estrategia de conversión”
     - “Planificamos el embudo de ventas”
   - CTA: “Empezar”

2) “Creamos”
   - “Fase 2”
   - “Diseño y Desarrollo”
   - Incluye:
     - “Diseño visual orientado a ventas”
     - “Programación de alta velocidad”
     - “Redacción de textos persuasivos (Copywriting)”
     - “Estructura optimizada para Google”
   - CTA: “Ver diseño”

3) “Lanzamos”
   - “Fase 3”
   - “Testing y Puesta en Marcha”
   - Incluye:
     - “Pruebas en todos los dispositivos”
     - “Configuración de métricas y analíticas”
     - “Indexación en buscadores”
     - “Lanzamiento oficial seguro”
   - CTA: “Despegar”

4) “Acompañamos”
   - “Fase 4”
   - “Optimización Continua”
   - Incluye:
     - “Mantenimiento técnico mensual”
     - “Análisis de datos y mejoras”
     - “Asesoramiento para crecer”
     - “Soporte prioritario”
   - CTA: “Crecer”

### Labels de UI (hardcodeados)
- “Todas las etapas”
- “Lo que incluye”
- Navegación: “Anterior” / “Siguiente”

**Contexto UX/UI**:
- Muy buena sección para bajar ansiedad (“cómo trabajamos”). Ojo con el tono “dibujitos”: funciona si la marca es desafiante/anti-agencia; puede chocar con clientes corporativos conservadores.

---

## Proceso (sección alternativa no usada)
**Fuente**: `components/ui/process-section.tsx` *(no aparece en `app/page.tsx`, pero contiene copy)*

- Título: “CÓMO TRABAJAMOS”
- Pasos:
  - “Charlamos” — “Entendemos tu negocio, público y objetivos. Primera consulta sin cargo.” — “1 día”
  - “Diseñamos” — “Creamos el diseño y estructura de tu web. Revisiones incluidas.” — “2-3 días”
  - “Desarrollamos” — “Programamos con React, Next.js y tecnología escalable. IA para optimizar tiempos.” — “4-6 días”
  - “Revisamos” — “Ajustamos cada detalle hasta que estés 100% conforme.” — “1-2 días”
  - “Lanzamos” — “Publicamos tu web, configuramos hosting y dejamos todo funcionando.” — “1 día”
  - “Acompañamos” — “Soporte continuo, actualizaciones y mejoras cuando las necesites.” — “Continuo”
- CTA: “Empezar ahora →” *(link con teléfono placeholder)*

**Contexto UX/UI**:
- Si esta sección se reusa, habría que unificarla con la interactiva para no duplicar mensajes/procesos.

---

## Portfolio (proyectos)
**Fuente**: `app/page.tsx`, `data/site-content.json`, `components/ui/project-card.tsx`

### Título de sección
- “TRABAJOS REALIZADOS”

### Microcopy de tarjetas
- Hint (JSON): “Ver caso de éxito”
- Desktop (hardcodeado):
  - “Ver detalles”
  - Botón: “Ver caso completo”

### Proyectos (títulos/categorías/métricas)
1) “InterPracsys” — “SOFTWARE A MEDIDA”
   - “Los hace quedar bien ante clientes grandes”
   - “Cerraron ventas 30% más rápido”
   - “Sistema fácil de usar para sus clientes”

2) “Baritrekking” — “TURISMO AVENTURA”
   - “40% más consultas de turistas”
   - “Muestra la experiencia real de la montaña”
   - “Compite con agencias grandes”

3) “Estudio Contable CILS” — “SERVICIOS PROFESIONALES”
   - “Clientes llegan mejor informados”
   - “Blog que manejan ellos mismos”
   - “Los hace ver más profesionales”

4) “Laboratorios Dibio” — “SALUD”
   - “Info clara de cada sucursal”
   - “Fácil de usar para pacientes mayores”
   - “Menos llamadas con preguntas simples”

5) “Laboratorios Katz” — “LABORATORIO CLÍNICO”
   - “Fácil para adultos mayores”
   - “Carga rapidísimo”
   - “Info médica clara y accesible”

6) “Consultorios Morales” — “CENTRO MÉDICO”
   - “Equipo médico presentado profesionalmente”
   - “60% menos llamadas por consultas simples”
   - “Info disponible 24/7”

**Contexto UX/UI**:
- El portfolio ya trae beneficios (muy bueno). Falta “caso completo” real (hoy el botón no navega) o un modal/link a URL para sostener la promesa.

---

## Testimonios / Resultados
**Fuente**: `data/site-content.json`, `components/ui/testimonials-section.tsx`

### Badge + título
- “[ CLIENTES QUE CRECIERON CON NOSOTROS ]”
- “RESULTADOS REALES”
- Subtítulo: “Negocios que mejoraron sus ventas con una web que realmente funciona.”

### Testimonios
- “Estudio Cils” — “Socios Gerentes”
  - “Antes teníamos una web vieja que no nos representaba. Ahora tenemos una que nos hace quedar bien antes de la primera reunión. Los clientes llegan mejor informados y las consultas que recibimos son mejores.”
- “Baritrekking” — “Guías de Turismo”
  - “Competimos con agencias grandes que tienen mucho presupuesto. Nuestra web ahora muestra la experiencia de la montaña tan bien que los turistas nos eligen a nosotros. Las consultas aumentaron 40% desde el cambio.”
- “InterPracsys” — “Dirección Comercial”
  - “Vendemos software a empresas grandes. La web anterior no transmitía seriedad. Ahora tenemos una plataforma que nos hace quedar bien antes de la primera presentación comercial.”

**Contexto UX/UI**:
- Hay repetición del concepto “quedar bien/seriedad” (B2B). Podría balancearse con testimonios orientados a “ventas/reservas” + números verificables.

---

## Stack / Beneficios (“tecnología que ayuda a vender”)
**Fuente**: `data/site-content.json`, `components/ui/stack-section.tsx`

### Badge + título
- “[ TECNOLOGÍA QUE TE AYUDA A VENDER MÁS ]”
- “NO VENDEMOS SOLO TECNOLOGÍA BONITA”
- Descripción: “Usamos tecnología de punta porque te ayuda a vender más. Pero lo más importante es la estrategia: entendemos tu negocio y diseñamos para que te traiga ingresos.”

### Beneficios (resumen de ítems)
- “DISEÑO QUE VENDE” — “Psicología aplicada al diseño” — “Alto Impacto” — “Diseño con Propósito”
- “ASESORAMIENTO ESTRATÉGICO” — “Pensamos tu negocio juntos” — “Incluido” — “Consultoría 360°”
- “CARGA RAPIDÍSIMO” — “Tu web no hace esperar” — “1.5 seg” — “Promedio mercado: 5s”
- “LA MANEJÁS VOS” — “Cambiás cosas sin llamarnos” — “Fácil” — “Total Autonomía”
- “SABÉS QUÉ PASA” — “Medimos todo” — “Datos Reales” — “Mejores Decisiones”
- “APARECÉS EN GOOGLE (CON TIEMPO)” — “Bases sólidas para crecer” — “Largo Plazo” — “Crecimiento Orgánico”

### Labels internos (UI)
- “IMPACTO:”
- “Nuestra Metodología”
- “Sitio Web Estándar”
- “Promedio”
- CTA:
  - Texto: “¿Querés una web con estas ventajas?”
  - Botón: “Cotizar mi proyecto”
- Hardcodeado (desktop): “Respuesta hoy garantizada”
- Hardcodeado (mobile):
  - “COMPARACIÓN:”
  - “Con nuestra tecnología”
  - “Promedio”
  - CTA: “Consulta gratuita”
  - “optimización”

**Contexto UX/UI**:
- Es una sección “racional” que justifica precio/decisión. Si el público incluye profesionales tradicionales, puede convenir bajar tecnicismos o acompañarlos con analogías simples.

---

## Inversión (sección actualmente no renderizada en Home)
**Fuente**: `data/site-content.json`, `components/ui/investment-section.tsx` *(en `app/page.tsx` está comentada)*

- Badge: “[ INVERSIÓN TRANSPARENTE ]”
- Título: “UNA WEB SE PAGA” / “CON LOS CLIENTES QUE TRAE”
- Descripción:
  - “Si tu web te trae 2 clientes nuevos por mes que antes no llegaban, ¿cuánto vale eso para tu negocio? No vendemos páginas web baratas. Vendemos herramientas que te traen ingresos. La inversión se paga sola cuando empezás a ver resultados.”
- CTA (en JSON): “Quiero saber más”
- Hardcodeado (sección): “ROI Positivo garantizado”

**Contexto UX/UI**:
- “ROI positivo garantizado” es una promesa fuerte (riesgo legal/credibilidad). Tal vez convenga reformular a “apuntamos a ROI positivo” o explicar condiciones.

---

## CTA final / Contacto
**Fuente**: `data/site-content.json`, `components/ui/final-cta-section.tsx`

### Urgencia (hardcodeado)
- “Cupos limitados: 3 lugares este mes”

### Título + subtítulo + descripción
- “¿Tu web actual” / “te trae clientes?”
- Subtítulo: “Si la respuesta es no, charlemos.”
- Descripción:
  - “No vendemos webs lindas. Vendemos herramientas que te traen ingresos. Primera consulta gratis: vemos tu web actual (o tu situación si no tenés), te decimos qué está mal y cómo mejorarla para que te traiga más clientes.”

### Botones
- WhatsApp: “Quiero una web que venda”
- Email/agenda: “Agendar diagnóstico gratuito”

### Footer de confianza
- “Diagnóstico gratis • 🌎 Trabajamos con toda Argentina y LATAM • Primera consulta sin cargo”

**Contexto UX/UI**:
- Gran cierre con propuesta y baja fricción. La urgencia “3 lugares” conviene que sea real/actualizable o puede percibirse como “marketing falso”.

---

## Footer
**Fuente**: `data/site-content.json`, `components/ui/footer/*`

- Título: “¿Hablamos de” / “tu negocio?”
- Label: “Estudio de ingeniería web” *(hardcodeado en `footer/index.tsx`)*
- Menú:
  - Título: “Navegación”
  - Links:
    - “Casos de Éxito”
    - “Qué Resolvemos”
    - “Cómo Trabajamos”
    - “Resultados”
    - “Contacto”
- Sociales:
  - Título: “SEGUINOS”
  - ARIA: “LinkedIn”, “Instagram”, “GitHub”
- Legal:
  - “© 2025 MacizoDigital. TODOS LOS DERECHOS RESERVADOS.”
- Horario:
  - “LUN - VIE: 9:00 - 18:00 ART”
- Claim:
  - “DESDE LA PATAGONIA PARA EL MUNDO”

**Contexto UX/UI**:
- El footer refuerza cercanía y profesionalismo. El teléfono está incompleto en JSON (“+54 9 294 4...”), conviene definirlo.

---

## CTAs flotantes / Persistentes

### Floating CTA (mobile)
**Fuente**: `components/ui/floating-cta.tsx`

- Botón: “Hablemos por WhatsApp”
- ARIA: “Contactar por WhatsApp”

### Theme toggle
**Fuente**: `components/ui/theme-toggle.tsx`

- ARIA: “Toggle theme”

### Loading (pantalla)
**Fuente**: `components/ui/loading-screen.tsx`

- Texto: “Cargando...”
- Alt: “Loading...”

**Contexto UX/UI**:
- Microcopy consistente con el CTA principal (WhatsApp). Faltan traducciones en alt/aria en algunas partes (“Loading...”, “Toggle theme”).

---

## SEO semántico (Schema.org LocalBusiness)
**Fuente**: `components/seo/local-business-schema.tsx`

Campos relevantes (texto):
- `@type`: “LocalBusiness”
- `name`: “MacizoDigital”
- `streetAddress`: “Centro Cívico”
- `addressLocality`: “San Carlos de Bariloche”
- `addressRegion`: “Río Negro”
- `postalCode`: “8400”
- `addressCountry`: “AR”
- `areaServed.name`: “Argentina”
- `openingHoursSpecification.dayOfWeek`: “Monday…Friday”

**Contexto UX/UI**:
- Si la marca apunta a Argentina/LATAM, el “LocalBusiness” está bien, pero el copy y los datos (teléfono, `sameAs`) deberían reflejar el branding final.

---

## Notas rápidas de auditoría (para mejorar público/claridad)

- **Consistencia de marca**: aparecen macizodigital.com” y “MacizoDigital”; conviene unificar naming en metadata, schema y textos.
- **Pruebas / credibilidad**: “+15 clientes”, “5.0 Rating”, “ROI Positivo garantizado”, “Cupos limitados: 3” requieren respaldo o reformulación.
- **Lenguaje**: decidir si el tono “anti-agencia” (“dibujitos”, “página linda”) es intencional para el público objetivo.
- **Accesibilidad / idioma**: traducir strings ARIA/alt en inglés si el sitio es 100% español.

