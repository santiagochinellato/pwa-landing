# Contexto del Proyecto
Este es un proyecto web moderno usando Next.js 15+ (App Router), TypeScript, Tailwind CSS, y Sanity CMS. Se enfoca en alta performance (PWA), SEO avanzado y experiencias interactivas (animaciones, modelos 3D).

# Reglas de Comportamiento del Asistente (Optimización de Tokens)
- **Sé extremadamente conciso:** No uses palabras de relleno, saludos ni explicaciones largas a menos que se te pida explícitamente.
- **Respuestas parciales de código:** Cuando modifiques un archivo existente, NO devuelvas el archivo completo. Usa comentarios como `// ... código existente ...` para las partes que no cambian. Solo mostrá lo que se agregó o modificó.
- **Cero obviedades:** Asumí que el desarrollador tiene nivel Senior. No expliques qué hace un `useState` o cómo funciona el App Router de Next.js.
- **Pensamiento paso a paso:** Si el problema es complejo, explicá brevemente tu lógica antes de escribir el código.

# Reglas de Arquitectura y Estructura
- **App Router:** La carpeta `app/` es solo para enrutamiento (`page.tsx`, `layout.tsx`). Mantené la lógica pesada fuera de esta carpeta.
- **Componentes:** - Ubicá los componentes visuales reutilizables en `components/ui/`.
  - Usá Server Components por defecto.
  - Agregá la directiva `'use client'` ÚNICAMENTE en la parte superior de los archivos cuando necesites interactividad (hooks de React, event listeners, animaciones framer-motion o canvas 3D).
- **Sanity CMS:** Todo lo relacionado con obtención de datos del CMS, esquemas y clientes debe mantenerse estrictamente dentro de `lib/sanity/`.
- **SEO:** Mantené el enfoque SEO. Si creás páginas nuevas, asegurate de incluir metadata y esquemas de datos estructurados (como los que están en `components/seo/`).

# Reglas de Código
- **TypeScript estricto:** Tipá todo correctamente. Está terminantemente prohibido usar `any`. Usá interfaces o types claros.
- **Estilos:** Usá clases utilitarias de Tailwind CSS. Mantené un enfoque "Mobile-First" (ej: `flex flex-col md:flex-row`).
- **Imágenes y Assets:** Usá siempre el componente `<Image />` de `next/image` para optimización automática. Para los modelos 3D (`.glb`), asegurate de manejar correctamente el lazy loading y suspense para no bloquear el hilo principal.
- **Gestor de paquetes:** El proyecto usa `npm` (hay un `package-lock.json`). Usá `npm install` para sugerir nuevas dependencias.
- **Imports:** Usá alias absolutos si están configurados (ej: `@/components/...` en lugar de `../../components/...`).

# Formato de Componentes
- Escribí componentes funcionales usando arrow functions.
- Exportá por defecto (export default) en las páginas de Next.js (`page.tsx`), pero usá exportaciones nombradas (named exports) para los componentes compartidos y utilidades.