import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/seo/local-business-schema";
import ClientWrapper from "@/components/ui/client-wrapper";
import { Providers } from "@/components/providers";
import { Spotlight } from "@/components/ui/spotlight";
import { GlassLayer } from "@/components/ui/glass-layer";
import { LazyMotion, domAnimation } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://patagoniawebfactory.com.ar"),
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
  },
  icons: {
    icon: "/logos/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <LazyMotion features={domAnimation}>
            <Spotlight />
            <GlassLayer />
            {/* Inyectamos el SEO Local Semántico */}
            <LocalBusinessSchema />
            <div className="relative z-10">
              <ClientWrapper>{children}</ClientWrapper>
            </div>
          </LazyMotion>
        </Providers>
      </body>
    </html>
  );
}
