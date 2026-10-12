
import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

/* eslint-disable */

import type { WebSite } from "@/types/webSite";

interface FooterProps {
  dataWebsite: WebSite;
}

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contactanos" },
];

export function Footer({ dataWebsite }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-importhnostony-dark text-white">

      {/* CONTENIDO PRINCIPAL */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-12 lg:gap-10">

          {/* COLUMNA 1 - EMPRESA */}
          <div className="col-span-2 lg:col-span-6">

            <Link href="/" className="inline-block">
              <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                IMPORT
                <span className="text-importhnostony-primary">
                  HNOSTONY
                </span>
              </span>
            </Link>

            {/* DESCRIPCIÓN DESKTOP */}
            <p className="mt-4 hidden max-w-md text-sm leading-7 text-gray-400 sm:block">
              Especialistas en la comercialización de
              repuestos y accesorios para máquinas textiles
              industriales Juki, Siruba, Kingtex y otras marcas.
            </p>

            {/* DESCRIPCIÓN MÓVIL */}
            <p className="mt-2 text-xs leading-5 text-gray-400 sm:hidden">
              Repuestos y accesorios para máquinas textiles industriales.
            </p>

            {/* REDES SOCIALES */}
            <div className="mt-4 flex items-center gap-2 sm:mt-5 sm:gap-3">
              <span
                title="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 text-gray-300 sm:h-9 sm:w-9"
              >
                <Facebook size={17} />
              </span>

              <span
                title="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 text-gray-300 sm:h-9 sm:w-9"
              >
                <Instagram size={17} />
              </span>

              <span
                title="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 text-gray-300 sm:h-9 sm:w-9"
              >
                <MessageCircle size={17} />
              </span>
            </div>
          </div>

          {/* COLUMNA 2 - ENLACES */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-sm font-semibold sm:text-base">
              Enlaces rápidos
            </h3>

            <div className="mt-2 h-[2px] w-9 bg-importhnostony-primary" />

            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-importhnostony-primary sm:gap-2 sm:text-sm"
                  >
                    <ChevronRight
                      size={14}
                      className="hidden transition-transform group-hover:translate-x-1 sm:block"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3 - CONTACTO */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-sm font-semibold sm:text-base">
              Contacto
            </h3>

            <div className="mt-2 h-[2px] w-9 bg-importhnostony-primary" />

            <ul className="mt-4 space-y-3 text-xs text-gray-400 sm:space-y-4 sm:text-sm">

              <li className="flex items-start gap-2">
                <MapPin
                  size={17}
                  className="shrink-0 text-importhnostony-primary"
                />
                <span>Lima, Perú</span>
              </li>

              <li className="flex items-start gap-2">
                <Phone
                  size={17}
                  className="shrink-0 text-importhnostony-primary"
                />
                <span>Teléfono de ventas</span>
              </li>

              <li className="flex items-start gap-2">
                <Mail
                  size={17}
                  className="shrink-0 text-importhnostony-primary"
                />
                <span className="break-words">
                  Correo de contacto
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 bg-[#111111]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-[11px] text-gray-400 sm:flex-row sm:px-6 lg:px-8">

          <p>
            © {year} IMPORTHNOSTONY. Todos los derechos reservados.
            <span className="hidden sm:inline"> — </span>
            <span className="block sm:inline">
              Diseñado por{" "}
              <a
                href="https://www.facebook.com/profile.php?id=100007722019176"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-importhnostony-primary"
              >
                Rahamsis CG
              </a>
            </span>
          </p>

          <p className="hidden lg:block">
            Repuestos para máquinas textiles industriales
          </p>

        </div>
      </div>
    </footer>
  );
}
