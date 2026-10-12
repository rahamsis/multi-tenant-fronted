"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import { WebSite } from "@/types/webSite";
import { Menu, OtherMenu } from "@/types/menu";
import { Productos } from "@/types/producto";

import CartButton from "@/app/samarnature/components/cart/CartButton";
import ProductSearch from "./productSearch";

interface HeaderProps {
  dataWebsite: WebSite;
  menu: Menu[];
  otherMenus: OtherMenu[];
  products: Productos[];
}

const Header = ({
  dataWebsite,
  menu,
  products,
}: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menuRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setOpenMenu(null);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cerrar menú al presionar Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Cerrar menú al navegar a otra página
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  // Generar ruta de subcategoría
  const getSubMenuUrl = (
    urlMenu: string,
    subMenu: string
  ) => {
    const base = urlMenu.replace(/\/+$/, "");

    return `${base}/${encodeURIComponent(
      subMenu.toLowerCase().trim()
    )}`;
  };

  return (
    <header className="relative z-50 hidden border-b border-samar-bordes bg-samar-primary shadow-sm lg:flex">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

          {/* Logo */}
          <div className="w-full max-w-md justify-self-start">
            <Link href="/">
              <Image
                src={dataWebsite.logo}
                alt={`Logo de ${dataWebsite.nombre}`}
                width={150}
                height={150}
                className="rounded-lg"
                priority
              />
            </Link>
          </div>

          {/* Menú central */}
          <nav
            className="justify-self-center"
            aria-label="Navegación principal"
          >
            <ul
              ref={menuRef}
              className="flex flex-row justify-center space-x-6 py-3"
            >
              {menu
                .filter((m) => m.estado)
                .sort((a, b) => a.orden - b.orden)
                .map((m) => {
                  const isOpen = openMenu === m.idMenu;
                  const hasSubMenus = m.subMenu?.length > 0;

                  return (
                    <li
                      key={m.idMenu}
                      className="relative"
                    >
                      {hasSubMenus ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                            aria-controls={`submenu-${m.idMenu}`}
                            onClick={() =>
                              setOpenMenu(
                                isOpen ? null : m.idMenu
                              )
                            }
                            className={`flex items-center gap-1 rounded-md px-3 py-2 font-medium transition-colors ${
                              isOpen
                                ? "text-samar-acento"
                                : "text-samar-textoprincipal hover:text-samar-acento"
                            }`}
                          >
                            {m.titulo}

                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <ul
                              id={`submenu-${m.idMenu}`}
                              className="absolute left-0 top-full z-[100] mt-1 min-w-52 overflow-hidden rounded-lg border border-samar-bordes bg-white py-2 shadow-xl"
                            >
                              {m.subMenu.map((sm) => (
                                <li key={sm}>
                                  <Link
                                    href={getSubMenuUrl(
                                      m.urlMenu,
                                      sm
                                    )}
                                    onClick={() =>
                                      setOpenMenu(null)
                                    }
                                    className="block px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-samar-primary hover:text-samar-acento"
                                  >
                                    {sm}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link
                          href={m.urlMenu}
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-md px-3 py-2 font-medium text-samar-textoprincipal transition-colors hover:text-samar-acento"
                        >
                          {m.titulo}
                        </Link>
                      )}
                    </li>
                  );
                })}
            </ul>
          </nav>

          {/* Opciones derecha */}
          <div className="flex items-center justify-self-end gap-4">
            <ProductSearch products={products} />
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderDesktop = ({
  dataWebsite,
  menu,
  otherMenus,
  products,
}: HeaderProps) => {
  return (
    <Header
      dataWebsite={dataWebsite}
      menu={menu}
      otherMenus={otherMenus}
      products={products}
    />
  );
};

export default HeaderDesktop;