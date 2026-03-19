"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "24px",
          background: "#f8fafc",
          color: "#0f172a",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            color: "#64748b",
            margin: 0,
          }}
        >
          Error crítico
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          MacizoDigital
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#64748b",
            maxWidth: "400px",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Ocurrió un error crítico en la aplicación.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={reset}
            style={{
              background: "#1a5c38",
              color: "#fff",
              border: "none",
              borderRadius: "9999px",
              padding: "14px 32px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Reintentar
          </button>

          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            style={{
              background: "transparent",
              color: "#0f172a",
              border: "1.5px solid #e2e8f0",
              borderRadius: "9999px",
              padding: "14px 32px",
              fontSize: "1rem",
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Ir al inicio
          </a>
        </div>
      </body>
    </html>
  );
}
