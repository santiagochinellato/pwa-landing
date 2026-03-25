export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "MacizoDigital",
    description:
      "Agencia de desarrollo web, SEO y diseño UX/UI en San Carlos de Bariloche, Patagonia. Construimos sitios web estratégicos, tiendas online y sistemas de gestión para empresas de Argentina y LATAM.",
    image: "https://macizodigital.com/logo.png",
    logo: "https://macizodigital.com/logo-dark.png",
    "@id": "https://macizodigital.com",
    url: "https://macizodigital.com",
    telephone: "+542944227526",
    email: "hola@macizodigital.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Centro Cívico",
      addressLocality: "San Carlos de Bariloche",
      addressRegion: "Río Negro",
      postalCode: "8400",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -41.172694,
      longitude: -71.436946,
    },
    areaServed: [
      {
        "@type": "State",
        name: "Río Negro",
        containedInPlace: { "@type": "Country", name: "Argentina" },
      },
      {
        "@type": "State",
        name: "Neuquén",
        containedInPlace: { "@type": "Country", name: "Argentina" },
      },
      {
        "@type": "State",
        name: "Chubut",
        containedInPlace: { "@type": "Country", name: "Argentina" },
      },
      {
        "@type": "Country",
        name: "Argentina",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    knowsAbout: [
      "Desarrollo Web",
      "Diseño Web",
      "SEO",
      "Posicionamiento en Google",
      "Tiendas Online",
      "UX/UI",
      "Next.js",
      "React",
      "Estrategia Digital",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de MacizoDigital",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo Web en Bariloche",
            description:
              "Diseño y desarrollo de sitios web estratégicos para empresas en Bariloche y la Patagonia.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO — Posicionamiento en Google",
            description:
              "Optimización para buscadores (SEO técnico y local) para negocios en Argentina.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tiendas Online y E-commerce",
            description:
              "Desarrollo de tiendas online y plataformas de venta digital para Patagonia y LATAM.",
          },
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/macizo.digital",
      "https://linkedin.com/company/macizo.digital",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
