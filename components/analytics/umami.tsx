import Script from "next/script";

export default function UmamiAnalytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const src = process.env.NEXT_PUBLIC_UMAMI_URL;

  // Si no están las variables (ej. entorno de desarrollo), no renderiza nada
  if (!websiteId || !src) {
    return null;
  }

  return (
    <Script
      async
      src={src}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
