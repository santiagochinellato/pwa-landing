import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/seo/local-business-schema";
import ClientWrapper from "@/components/ui/client-wrapper";
import { Providers } from "@/components/providers";
import { Spotlight } from "@/components/ui/spotlight";
import { GlassLayer } from "@/components/ui/glass-layer";
import { LazyMotion, domAnimation } from "framer-motion";
import FloatingCTA from "@/components/ui/floating-cta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalpatagonia.com"),
  title: {
    default: "Digital Patagonia | Desarrollo Web y SEO desde la Patagonia",
    template: "%s | Digital Patagonia",
  },
  description:
    "Agencia de desarrollo web y marketing digital en Bariloche. Creamos sitios web de alto rendimiento, tiendas online y estrategias SEO para potenciar tu negocio.",
  keywords: [
    "Desarrollo Web Bariloche",
    "Diseño Web Patagonia",
    "Agencia SEO Bariloche",
    "Marketing Digital Argentina",
    "Diseño UX/UI",
    "Tiendas Online",
    "Ecommerce",
  ],
  authors: [{ name: "Digital Patagonia" }],
  creator: "Digital Patagonia",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://digitalpatagonia.com",
    title: "Digital Patagonia - Infraestructura Digital desde la Patagonia",
    description:
      "Convertimos tu negocio en un líder digital. Desarrollo web de alto impacto desde la Patagonia para todo el país.",
    images: ["/og-image-bariloche.jpg"],
    siteName: "Digital Patagonia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Patagonia | Desarrollo Web y SEO",
    description:
      "Agencia de desarrollo web y marketing digital en Bariloche. Transformamos tu presencia digital.",
    images: ["/og-image-bariloche.jpg"],
    creator: "@digitalpatagonia", // Placeholder, adjust if user provides specific handle
  },
  icons: {
    icon: "/logos/favicon.svg",
    apple: "/logos/favicon.svg", // Adding apple touch icon as good practice
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE", // Placeholder for GSC
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="absolute opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto focus:z-[100] focus:p-4 focus:bg-background focus:text-foreground top-0 left-0"
        >
          Saltar al contenido principal
        </a>
        <Providers>
          <LazyMotion features={domAnimation}>
            <Spotlight />
            <GlassLayer />
            {/* Inyectamos el SEO Local Semántico */}
            <LocalBusinessSchema />
            <div className="relative z-10">
              <ClientWrapper>{children}</ClientWrapper>
              <FloatingCTA />
            </div>
          </LazyMotion>
        </Providers>
      </body>
    </html>
  );
}
