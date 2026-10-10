"use client"

/* eslint-disable */

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react" // Icono flecha hacia abajo
import { useState, useRef } from "react"
import { WebSite } from "@/types/webSite"
import { Menu, OtherMenu } from "@/types/menu";
import CartButton from "@/app/samar/components/cart/CartButton";
import { Productos } from "@/types/producto";
import ProductSearch from "./productSearch";

interface HeaderProps {
  dataWebsite: WebSite;
  menu: Menu[];
  otherMenus: OtherMenu[];
  products: Productos[];
}

const HeaderDesktop = ({ dataWebsite, menu, otherMenus, products, }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLUListElement | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-samar-primary border-b border-samar-bordes shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Buscador - Izquierda */}
          <div className="justify-self-start w-full max-w-md">
            <Link href="/" className="">
              <Image
                src={dataWebsite.logo}
                alt="Logo de la empresa"
                width={150}
                height={150}
                className="rounded-lg"
                priority={true}
              />
            </Link>
          </div>

          {/* Logo - Centro */}
          <div className="justify-self-center">
            <ul className="flex flex-row justify-center space-x-6 py-3" ref={menuRef}>
              {menu
                .filter((m) => m.estado)
                .sort((a, b) => a.orden - b.orden)
                .map((m) => (
                  <li key={m.idMenu} className="relative">
                    {m.subMenu?.length > 0 ? (
                      <>
                        <button
                          type="button"
                          className="flex items-center gap-1 px-3 py-2 text-samar-textoprincipal hover:text-samar-acento font-medium"
                          onClick={() =>
                            setOpenMenu(
                              openMenu === m.idMenu ? null : m.idMenu
                            )
                          }
                        >
                          {m.titulo}
                          <ChevronDown className="w-4 h-4" />
                        </button>

                        {openMenu === m.idMenu && (
                          <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                            {m.subMenu.map((sm) => (
                              <li key={sm}>
                                <span className="block px-4 py-2 text-sm">
                                  {sm}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link href={m.urlMenu} className="block px-3 py-2 text-samar-textoprincipal hover:text-samar-acento font-medium">
                        {m.titulo}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Opciones - Derecha */}
          <div className="flex items-center justify-self-end gap-4">
            <div className="relative">
              {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
              {/* <input
                placeholder="Buscar productos..."
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-samar-acentofemenino text-sm"
              /> */}
              <ProductSearch products={products} />
            </div>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  )
}

const Header = ({ dataWebsite, menu, otherMenus, products }: HeaderProps) => {
  return (
    <div>
      <HeaderDesktop
        dataWebsite={dataWebsite}
        menu={menu}
        otherMenus={otherMenus}
        products={products} />
    </div>
  );
}

export default Header;