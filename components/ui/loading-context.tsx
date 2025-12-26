"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface LoadingContextType {
  isLoading: boolean;
  transitionTheme: (nextTheme: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Initial load simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds for initial branding impact

    return () => clearTimeout(timer);
  }, []);

  const transitionTheme = (nextTheme: string) => {
    setIsLoading(true);

    // Wait for enter animation (approx 500ms), then switch theme
    setTimeout(() => {
      setTheme(nextTheme);

      // Wait a bit more ensuring smooth transition before revealing
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 800);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, transitionTheme }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
