"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

interface ContactFormProps {
  correo: string;
}

export default function ContactForm({
  correo,
}: ContactFormProps) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!correo) return;

    const subject = encodeURIComponent(
      `Consulta Samar: ${form.asunto}`
    );

    const body = encodeURIComponent(
      `Nombre: ${form.nombre}
Correo: ${form.email}
Teléfono: ${form.telefono || "No indicado"}

Mensaje:
${form.mensaje}`
    );

    window.location.href =
      `mailto:${correo}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-samar-bordes bg-white px-4 py-3 text-sm outline-none transition focus:border-samar-acento focus:ring-1 focus:ring-samar-acento";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 block text-sm font-semibold"
          >
            Nombre completo *
          </label>

          <input
            id="nombre"
            type="text"
            required
            maxLength={100}
            value={form.nombre}
            onChange={(e) =>
              setForm({ ...form, nombre: e.target.value })
            }
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold"
          >
            Correo electrónico *
          </label>

          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="correo@ejemplo.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="telefono"
            className="mb-2 block text-sm font-semibold"
          >
            Teléfono (opcional)
          </label>

          <input
            id="telefono"
            type="tel"
            value={form.telefono}
            onChange={(e) =>
              setForm({ ...form, telefono: e.target.value })
            }
            placeholder="+51 999 999 999"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="asunto"
            className="mb-2 block text-sm font-semibold"
          >
            Asunto *
          </label>

          <select
            id="asunto"
            required
            value={form.asunto}
            onChange={(e) =>
              setForm({ ...form, asunto: e.target.value })
            }
            className={inputClass}
          >
            <option value="">Selecciona una opción</option>
            <option value="Información de productos">
              Información de productos
            </option>
            <option value="Consulta sobre un pedido">
              Consulta sobre un pedido
            </option>
            <option value="Envíos y entregas">
              Envíos y entregas
            </option>
            <option value="Cambios y devoluciones">
              Cambios y devoluciones
            </option>
            <option value="Otra consulta">
              Otra consulta
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="mb-2 block text-sm font-semibold"
        >
          Mensaje *
        </label>

        <textarea
          id="mensaje"
          required
          rows={6}
          maxLength={3000}
          value={form.mensaje}
          onChange={(e) =>
            setForm({ ...form, mensaje: e.target.value })
          }
          placeholder="Cuéntanos cómo podemos ayudarte..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={!correo}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-samar-botonprincipal px-8 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        Preparar correo
      </button>

      <p className="text-xs leading-6 text-gray-500">
        Al continuar, se abrirá tu aplicación de correo
        para que revises y envíes el mensaje.
      </p>
    </form>
  );
}