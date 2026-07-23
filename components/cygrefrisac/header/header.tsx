"use client"

import { useState, useEffect } from "react"
import { WebSite } from "@/types/webSite";
import { ChevronDown, Search } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllBrands } from "@/app/utils/actions";
import { Marca } from "@/types/producto";

const HeaderDesktop = ({ dataWebsite, marcas }: { dataWebsite: WebSite; marcas: Marca[] }) => {
  const pathName = usePathname();
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

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
              <li
                className="relative ml-4 mr-4"

              >
                <button
                  type="button"
                  className={`flex items-center gap-1 cursor-pointer hover:text-cygrefrisac-header ${isBrandsOpen || pathName === "/marcas" ? "text-cygrefrisac-header font-bold" : ""
                    }`}
                  onClick={() => setIsBrandsOpen((prev) => !prev)}
                >
                  <span>Marcas</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isBrandsOpen ? "rotate-180" : ""}`} />
                </button>

                {isBrandsOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-md border border-gray-200 bg-white p-2 shadow-lg z-50"
                    onMouseLeave={() => setIsBrandsOpen(false)}>
                    {marcas.length > 0 ? (
                      <ul className="max-h-72 space-y-1 overflow-y-auto">
                        {marcas
                          .filter((marca) => marca.activo !== false)
                          .map((marca) => (
                            <li key={marca.idMarca}>
                              <Link
                                href={`/productos?marca=${encodeURIComponent(marca.marca)}`}
                                className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-cygrefrisac-header"
                                onClick={() => setIsBrandsOpen(false)}
                              >
                                {marca.marca}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p className="px-3 py-2 text-sm text-slate-500">No hay marcas disponibles</p>
                    )}
                  </div>
                )}
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

export default function Header({ dataWebsite, tenant }: { dataWebsite: WebSite; tenant: string }) {

  const [marcas, setMarcas] = useState<Marca[]>([]);

  // llenar las marcas
  useEffect(() => {
    if (!tenant) return; // evita llamada vac

    async function fetchData() {
      try {
        const data = await getAllBrands(tenant);
        setMarcas(data);
      } catch (error) {
        console.error("Error obteniendo todas las marcas:", error);
      }
    }
    fetchData();
  }, [tenant]);

  return (
    <div>
      <HeaderDesktop dataWebsite={dataWebsite} marcas={marcas} />
    </div>
  );
}