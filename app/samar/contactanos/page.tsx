import { headers } from "next/headers";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock,
} from "lucide-react";

import { getWebSite } from "@/app/utils/actions";
import ContactForm from "../components/contact/contactForm";

export default async function ContactanosPage() {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const tenant = host.split(".")[0];

  const websites = await getWebSite(tenant);
  const website = websites?.[0];

  if (!website) {
    return (
      <main className="container mx-auto px-6 py-20 text-center">
        No se pudo cargar la información de contacto.
      </main>
    );
  }

  const {
    nombre,
    telefonoPrincipal,
    telefonoSecundario,
    correo,
    direccionPrincipal,
    direccionSecundaria,
  } = website;

  const whatsapp = telefonoPrincipal?.replace(/\D/g, "");

  return (
    <main className="min-h-screen bg-white text-samar-textoprincipal">
      {/* Cabecera */}
      <section className="bg-samar-primary py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-samar-acento">
            Estamos para ayudarte
          </p>

          <h1 className="text-4xl font-black md:text-5xl">
            Contáctanos
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            ¿Tienes alguna pregunta sobre nuestros productos,
            pedidos o entregas? En {nombre} estaremos encantados
            de atender tu consulta.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Información de contacto */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold">
                Hablemos
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Elige el medio de contacto que prefieras.
                Estamos aquí para resolver tus dudas.
              </p>
            </div>

            {telefonoPrincipal && (
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-samar-bordes p-5 transition hover:border-samar-acento hover:shadow-md"
              >
                <div className="rounded-xl bg-samar-primary p-3">
                  <MessageCircle className="h-6 w-6 text-samar-acento" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Escríbenos por WhatsApp
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {telefonoPrincipal}
                  </p>

                  <span className="mt-2 inline-block text-xs font-semibold text-samar-acento">
                    Iniciar conversación
                  </span>
                </div>
              </a>
            )}

            {correo && (
              <a
                href={`mailto:${correo}`}
                className="flex items-start gap-4 rounded-2xl border border-samar-bordes p-5 transition hover:border-samar-acento hover:shadow-md"
              >
                <div className="rounded-xl bg-samar-primary p-3">
                  <Mail className="h-6 w-6 text-samar-acento" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold">
                    Correo electrónico
                  </h3>

                  <p className="mt-1 break-all text-sm text-gray-600">
                    {correo}
                  </p>
                </div>
              </a>
            )}

            {telefonoSecundario && (
              <a
                href={`tel:${telefonoSecundario.replace(/[^\d+]/g, "")}`}
                className="flex items-start gap-4 rounded-2xl border border-samar-bordes p-5 transition hover:border-samar-acento hover:shadow-md"
              >
                <div className="rounded-xl bg-samar-primary p-3">
                  <Phone className="h-6 w-6 text-samar-acento" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Teléfono adicional
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {telefonoSecundario}
                  </p>
                </div>
              </a>
            )}

            {(direccionPrincipal || direccionSecundaria) && (
              <div className="flex items-start gap-4 rounded-2xl border border-samar-bordes p-5">
                <div className="rounded-xl bg-samar-primary p-3">
                  <MapPin className="h-6 w-6 text-samar-acento" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Nuestra ubicación
                  </h3>

                  {direccionPrincipal && (
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {direccionPrincipal}
                    </p>
                  )}

                  {direccionSecundaria && (
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {direccionSecundaria}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-samar-bordes bg-samar-primary p-6 shadow-sm md:p-10">
              <h2 className="mb-3 text-2xl font-bold">
                Envíanos tu consulta
              </h2>

              <p className="mb-8 text-sm leading-7 text-gray-600">
                Completa el formulario con los detalles
                de tu consulta y prepara un correo
                para nuestro equipo.
              </p>

              <ContactForm correo={correo} />
            </div>
          </div>
        </div>
      </section>

      {/* Mensaje inferior */}
      <section className="bg-samar-primary py-12">
        <div className="container mx-auto px-6 text-center">
          <MessageCircle className="mx-auto mb-4 h-8 w-8 text-samar-acento" />

          <h2 className="text-2xl font-bold">
            Tu experiencia nos importa
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600">
            Queremos ayudarte a encontrar los productos
            adecuados para tu rutina de cuidado personal.
          </p>
        </div>
      </section>
    </main>
  );
}