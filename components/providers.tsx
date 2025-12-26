"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { LoadingProvider } from "./ui/loading-context";
import LoadingScreen from "./ui/loading-screen";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      <LoadingProvider>
        <LoadingScreen />
        {children}
      </LoadingProvider>
    </ThemeProvider>
  );
}
