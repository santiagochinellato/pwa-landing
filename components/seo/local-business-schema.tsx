export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MacizoDigital",
    image: "https://macizodigital.com/logo.png",
    "@id": "https://macizodigital.com",
    url: "https://macizodigital.com",
    telephone: "+542944227526",
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
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.instagram.com/macizo.digital"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
