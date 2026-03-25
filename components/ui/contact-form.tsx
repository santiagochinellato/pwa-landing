"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      action="https://formsubmit.co/hola@macizodigital.com"
      method="POST"
      className="space-y-4"
      onSubmit={() => setIsSubmitting(true)}
    >
      {/* Campos ocultos de configuración de FormSubmit */}
      <input type="hidden" name="_subject" value="Nuevo Lead | Web MacizoDigital" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="block text-sm font-bold text-light-fg dark:text-white">
            Nombre
          </span>
          <input
            name="nombre"
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
            name="telefono"
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
            name="email"
            required
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
          name="mensaje"
          required
          rows={5}
          className="w-full rounded-xl border border-light-border/70 dark:border-white/10 bg-light-surface/40 dark:bg-white/5 px-4 py-3 text-light-fg dark:text-white placeholder:text-light-muted/70 resize-none"
          placeholder="Contanos qué necesitás y en qué etapa estás."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-primary hover:bg-primary/90 text-white dark:text-deep-void font-bold px-8 py-4 text-base transition-all hover:scale-[1.02] shadow-lg shadow-primary/20 disabled:opacity-60 disabled:hover:scale-100 mt-2"
      >
        {isSubmitting ? "Enviando..." : "Enviar Consulta"}
      </button>
    </form>
  );
}

