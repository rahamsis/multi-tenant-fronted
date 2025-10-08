"use client"

import { WebSite } from "@/types/webSite";
import { Search, Facebook, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderDesktop = ({ dataWebsite }: { dataWebsite: WebSite }) => {
  const pathName = usePathname();
  return (
    <header className={`hidden lg:flex w-full bg-white border-b transition-all duration-100 `}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Buscador - Izquierda */}
          <div className="flex-1 max-w-md">
            <ul className="flex flex-row pl-0 list-none mt-0 ms-auto align-middle items-center">
              <li className={`ml-4 mr-4 cursor-pointer hover:text-cygrefrisac-header 
              ${pathName === "/nosotros" ? 'text-cygrefrisac-header font-bold' : ''}`}>
                <Link href="/nosotros" className="">
                  Nosotros
                </Link>
              </li>
              <li className={`ml-4 mr-4 cursor-pointer hover:text-cygrefrisac-header
                ${pathName === "/contacto" ? 'text-cygrefrisac-header font-bold' : ''}`}>
                <Link href="/contacto" className="">
                  Contacto
                </Link>
              </li>
              <li className={`ml-4 mr-4 cursor-pointer hover:text-cygrefrisac-header
                ${pathName === "/servicios" ? 'text-cygrefrisac-header font-bold' : ''}`}>
                <Link href="/servicios" className="">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo - Centro */}
          <div className="flex-shrink-0">
            <Link href="/" className="">
              <Image
                src={dataWebsite.logo}
                alt="Logo de la empresa"
                width={250}
                height={150}
                className="rounded-lg w-auto h-auto"
                priority={true}
              />
            </Link>
          </div>

          {/* Buscador - Izquierda */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                placeholder="Busque un producto"
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cygrefrisac-header text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const Header = ({ dataWebsite }: { dataWebsite: WebSite }) => {
  return (
    <div>
      <HeaderDesktop dataWebsite={dataWebsite} />
    </div>
  );
}

export default Header;