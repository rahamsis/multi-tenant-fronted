import Link from "next/link";
import Image from "next/image";
import {
  // Facebook,
  // Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  MessageCircle,
} from "lucide-react";
import type { WebSite } from "@/types/webSite";

interface FooterProps {
  dataWebsite: WebSite;
}

// const socialLinks = [
//   // Agrega aquí únicamente las redes sociales reales.
//   {
//     name: "Instagram",
//     href: "#",
//     icon: Instagram,
//   },
//   {
//     name: "Facebook",
//     href: "#",
//     icon: Facebook,
//   },
// ];

const navigationLinks = [
  { name: "Todos los productos", href: "/productos" },
  { name: "Cuidado corporal", href: "#" },
  { name: "Cuidado facial", href: "#" },
  { name: "Sobre nosotros", href: "/nosotros" },
];

const customerLinks = [
  { name: "Contáctanos", href: "/contactanos" },
  // Habilitar cuando se creen estas páginas:
  // { name: "Envíos y entregas", href: "/envios" },
  // { name: "Cambios y devoluciones", href: "/devoluciones" },
  // { name: "Términos y condiciones", href: "/terminos" },
  // { name: "Política de privacidad", href: "/privacidad" },
];

export function Footer({ dataWebsite }: FooterProps) {
  const {
    nombre,
    telefonoPrincipal,
    telefonoSecundario,
    direccionPrincipal,
    direccionSecundaria,
    correo,
    logo,
  } = dataWebsite;

  const year = new Date().getFullYear();

  const whatsappNumber = telefonoPrincipal.replace(/\D/g, "");

  return (
    <footer className="bg-samar-primary text-samar-textoprincipal">
      <div className="container mx-auto px-6 pb-12 pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Marca */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              {logo ? (
                <Image
                  src={logo}
                  alt={`Logo de ${nombre}`}
                  width={70}
                  height={70}
                  className="h-auto max-h-16 w-auto object-contain"
                  priority={true}
                />
              ) : (
                <span className="text-3xl font-bold">{nombre}</span>
              )}
            </Link>

            <p className="max-w-xs text-sm leading-7 opacity-75">
              Descubre una forma especial de cuidar tu piel.
              Productos de cuidado personal y bienestar
              pensados para acompañarte en tu rutina diaria.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-6 text-base font-bold">
              Explora {nombre}
            </h3>

            <ul className="space-y-4">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2
                      text-sm opacity-75 transition-all
                      hover:translate-x-1 hover:text-samar-acento
                      hover:opacity-100"
                  >
                    <ArrowRight
                      className="h-3.5 w-3.5 opacity-0
                        transition-opacity group-hover:opacity-100"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Atención al cliente */}
          <div>
            <h3 className="mb-6 text-base font-bold">
              Atención al cliente
            </h3>

            <ul className="space-y-4">
              {customerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2
                      text-sm opacity-75 transition-all
                      hover:translate-x-1 hover:text-samar-acento
                      hover:opacity-100"
                  >
                    <ArrowRight
                      className="h-3.5 w-3.5 opacity-0
                        transition-opacity group-hover:opacity-100"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-samar-bordes bg-white/40 p-4">
              <div className="flex items-start gap-3">
                <Heart className="mt-0.5 h-5 w-5 shrink-0 text-samar-acento" />

                <p className="text-xs leading-6 opacity-80">
                  Estamos aquí para ayudarte a encontrar
                  los productos ideales para tu cuidado personal.
                </p>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-6 text-base font-bold">
              Contáctanos
            </h3>

            <div className="space-y-5">
              {telefonoPrincipal && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-samar-acento" />

                  <div>
                    <p className="text-sm font-semibold">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm opacity-75 group-hover:text-samar-acento">
                      {telefonoPrincipal}
                    </p>
                  </div>
                </a>
              )}

              {telefonoSecundario && (
                <a
                  href={`tel:${telefonoSecundario.replace(/[^\d+]/g, "")}`}
                  className="group flex items-start gap-3"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-samar-acento" />

                  <div>
                    <p className="text-sm font-semibold">
                      Teléfono adicional
                    </p>

                    <p className="mt-1 text-sm opacity-75 group-hover:text-samar-acento">
                      {telefonoSecundario}
                    </p>
                  </div>
                </a>
              )}

              {correo && (
                <a
                  href={`mailto:${correo}`}
                  className="group flex items-start gap-3"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-samar-acento" />

                  <div>
                    <p className="text-sm font-semibold">
                      Correo electrónico
                    </p>

                    <p className="mt-1 break-all text-sm opacity-75 group-hover:text-samar-acento">
                      {correo}
                    </p>
                  </div>
                </a>
              )}

              {(direccionPrincipal || direccionSecundaria) && (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-samar-acento" />

                  <div>
                    <p className="text-sm font-semibold">
                      Ubicación
                    </p>

                    {direccionPrincipal && (
                      <p className="mt-1 text-sm leading-6 opacity-75">
                        {direccionPrincipal}
                      </p>
                    )}

                    {direccionSecundaria && (
                      <p className="mt-1 text-sm leading-6 opacity-75">
                        {direccionSecundaria}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-samar-bordes pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs opacity-65">
              © {year} {nombre}. Todos los derechos reservados.
            </p>

            <p className="flex items-center gap-1 text-xs opacity-65">
              Hecho con
              <Heart className="h-3.5 w-3.5 fill-samar-acento text-samar-acento" />
              para tu bienestar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}