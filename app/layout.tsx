import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import MagneticCursor from "@/components/ui/magnetic-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patagonia Web Factory | Digital Reality Orchestrators",
  description: "We orchestrate digital realities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>
            <MagneticCursor />
            {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
