import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/seo/local-business-schema";
import ClientWrapper from "@/components/ui/client-wrapper";
import { Providers } from "@/components/providers";
import { Spotlight } from "@/components/ui/spotlight";
import { GlassLayer } from "@/components/ui/glass-layer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://patagoniawebfactory.com.ar"),
  title: {
    default: "Patagonia Web Factory | Desarrollo Web y SEO desde la Patagonia",
    template: "%s | Patagonia Web Factory",
  },
  description:
    "Infraestructura digital de alto rendimiento desde la Patagonia para toda Argentina. Diseño web, SEO estratégico y software a medida.",
  keywords: [
    "Desarrollo web Argentina",
    "Diseño web Patagonia",
    "Agencia SEO Argentina",
    "Software a medida",
    "Next.js Argentina",
    "Infraestructura digital",
    "Diseño web Bariloche",
  ],
  authors: [{ name: "Patagonia Web Factory" }],
  openGraph: {
    title: "Patagonia Web Factory - Infraestructura Digital desde la Patagonia",
    description:
      "Convertimos tu negocio en un líder digital. Desarrollo web de alto impacto desde la Patagonia para todo el país.",
    type: "website",
    locale: "es_AR",
    images: ["/og-image-bariloche.jpg"],
  },
  icons: {
    icon: "/logos/favaicon.svg",
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
          <Spotlight />
          <GlassLayer />
          {/* Inyectamos el SEO Local Semántico */}
          <LocalBusinessSchema />
          <div className="relative z-10">
            <ClientWrapper>{children}</ClientWrapper>
          </div>
        </Providers>
      </body>
    </html>
  );
}
