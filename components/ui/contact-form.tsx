"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type ContactFormProps = {
  whatsappLink: string;
};

export default function ContactForm({ whatsappLink }: ContactFormProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappText = useMemo(() => {
    const lines = [
      `Nuevo mensaje desde MacizoDigital`,
      `Nombre: ${nombre || "-"}`,
      email ? `Email: ${email}` : "",
      telefono ? `Teléfono: ${telefono}` : "",
      `Mensaje: ${mensaje || "-"}`,
    ].filter(Boolean);

    return lines.join("\n");
  }, [email, mensaje, nombre, telefono]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const separator = whatsappLink.includes("?") ? "&" : "?";
      const url = `${whatsappLink}${separator}text=${encodeURIComponent(
        whatsappText
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-sm font-bold text-light-fg dark:text-white">
            Nombre
          </span>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            autoComplete="name"
            className="w-full rounded-xl border border-light-border/70 dark:border-white/10 bg-light-surface/40 dark:bg-white/5 px-4 py-3 text-light-fg dark:text-white placeholder:text-light-muted/70"
            placeholder="Tu nombre"
          />
        </label>

        <label className="space-y-2">
          <span className="block text-sm font-bold text-light-fg dark:text-white">
            Teléfono
          </span>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-light-border/70 dark:border-white/10 bg-light-surface/40 dark:bg-white/5 px-4 py-3 text-light-fg dark:text-white placeholder:text-light-muted/70"
            placeholder="+54 9 ..."
          />
        </label>

        <label className="space-y-2 col-span-2">
          <span className="block text-sm font-bold text-light-fg dark:text-white">
            Email
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-light-border/70 dark:border-white/10 bg-light-surface/40 dark:bg-white/5 px-4 py-3 text-light-fg dark:text-white placeholder:text-light-muted/70"
            placeholder="tu@email.com"
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="block text-sm font-bold text-light-fg dark:text-white">
          Mensaje
        </span>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          rows={5}
          className="w-full rounded-xl border border-light-border/70 dark:border-white/10 bg-light-surface/40 dark:bg-white/5 px-4 py-3 text-light-fg dark:text-white placeholder:text-light-muted/70 resize-none"
          placeholder="Contanos qué necesitás y en qué etapa estás."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-primary hover:bg-primary/90 text-white dark:text-deep-void font-bold px-8 py-4 text-base transition-all hover:scale-[1.02] shadow-lg shadow-primary/20 disabled:opacity-60 disabled:hover:scale-100"
      >
        {isSubmitting ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
      </button>
    </form>
  );
}

