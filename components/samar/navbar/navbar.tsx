"use client";

/* eslint-disable */

import { useState, useRef, useEffect, useMemo } from "react";
import { ChevronDown } from "lucide-react" // Icono flecha hacia abajo
import { Menu, OtherMenu } from "@/types/menu";
import { usePathname } from "next/navigation";
import { WebSite } from "@/types/webSite";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  dataWebsite: WebSite;
  menu: Menu[];
  otherMenus: OtherMenu[];
};

function capitalize(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const NavbarMobile = ({ dataWebsite, menu, otherMenus }: HeaderProps) => {
  const pathName = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);
  // const buttonRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Normalizamos ambos arrays
  const menuComplete = useMemo(() => {
    return [
      ...menu
        .filter((m) => m.estado)
        .sort((a, b) => a.orden - b.orden)
        .map((m) => ({
          id: m.idMenu,
          titulo: m.titulo,
          url: m.urlMenu,
          subMenu: m.subMenu ?? [],
        })),

      ...otherMenus.map((o) => ({
        id: o.idCategoria,
        titulo: o.categoria,
        url: "/" + o.categoria.toLowerCase().replace(/\s+/g, "-"),
        subMenu: o.subMenu ?? [],
      })),
    ];
  }, [menu, otherMenus]);


  //inicializar el submenu del submenu para que quede abiertos
  useEffect(() => {
    const activeMenu = menuComplete.find((m) =>
      pathName.startsWith(`${m.url}/`)
    );

    setOpenMenu(activeMenu?.id ?? null);
  }, [pathName, menuComplete]);

  // const toggleMenu = () => {
  //   if (sidebarOpen) {
  //     closeMenu();
  //   } else {
  //     setSidebarOpen(true);
  //   }
  // };
  const toggleMenu = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setSidebarOpen(false);
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (
  //       sidebarOpen &&
  //       menuRef.current &&
  //       !menuRef.current.contains(e.target as Node) &&
  //       buttonRef.current &&
  //       !buttonRef.current.contains(e.target as Node)
  //     ) {
  //       closeMenu();
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [sidebarOpen]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <nav className="lg:hidden sticky w-full top-0 bg-samar-primary py-2 right-0 z-50 border-b border-samar-bordes shadow-sm">
      <div className="flex flex-wrap items-center justify-between w-full px-3 mx-auto">
        <Link className="text-3xl font-semibold text-white py-[0.3125rem] mr-4 whitespace-nowrap" href="/">
          <div className="leading-tight">
            <Image
              src={dataWebsite.logo}
              alt="Logo de la empresa"
              width={80}
              height={60}
              className="rounded-lg w-auto h-auto"
              priority={true}
            />
          </div>
        </Link>

        <button className="text-black focus:outline-none py-1  leading-none bg-transparent rounded m-0 text-4xl" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>
      </div>

      {/* <div className={`fixed inset-0 z-40 bg-black/50 ${sidebarOpen ? "block" : "hidden"}`} /> */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Lista del menú que se mostrará o ocultará */}
      <div
        // ref={menuRef}
        id="mobile-menu"
        // className={`lg:hidden bg-white shadow-lg w-3/4 fixed top-0 right-0 px-3 max-w-xs h-full pt-2 z-50
        //             ${sidebarOpen ? 'block' : 'hidden'}`}
        aria-hidden={!sidebarOpen}
        inert={!sidebarOpen}
        className={`fixed right-0 top-0 z-50 h-full w-3/4 max-w-xs overflow-y-auto overscroll-contain bg-white px-3 pt-2 shadow-xl 
          transition-transform duration-300 ease-in-out lg:hidden ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-start">
          <button className="text-slate-800 focus:outline-none py-1 px-3 leading-none bg-transparent rounded m-0 text-4xl" onClick={toggleMenu}>
            <i className="bi bi-x"></i>
          </button>
        </div>

        <ul className="flex flex-col text-lg text-slate-800">
          <li className={`my-3 ${pathName === "/" ? 'opacity-100' : 'opacity-50'}`}>
            <a className=" w-full mx-4 font-semibold" href="/">Inicio</a>
          </li>
          {menuComplete.map((m) => (
            <li key={m.id} className="my-3 font-semibold">
              <div
                className={`flex flex-row mx-4 gap-8
                                ${pathName === m.url
                    || m.subMenu?.some((sub) => pathName === `${m.url}/${sub.toLowerCase().replace(/\s+/g, "-")}`) ? 'opacity-100' : 'opacity-50'}
                            `}>
                <Link
                  className=""
                  href={m.url}
                  onClick={toggleMenu}
                >
                  {capitalize(m.titulo)}
                </Link>
                {m.subMenu?.length > 0 && (
                  <button
                    type="button"
                    aria-label={`Desplegar submenú de ${m.titulo}`}
                    aria-expanded={openMenu === m.id}
                    className="flex items-center p-2"
                    onClick={() =>
                      setOpenMenu((prev) => (prev === m.id ? null : m.id))
                    }
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${openMenu === m.id ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  </button>
                )}
              </div>

              {openMenu === m.id && (
                <ul className="top-0 mt-0">
                  {m.subMenu.map((sm, index) => (
                    <div
                      key={index}
                      className={` ${pathName === `${m.url}/${sm.toLowerCase().replace(/\s+/g, "-")}` ? 'opacity-100' : 'opacity-50'} `}
                    >
                      <li >
                        <Link
                          href={m.url + "/" + sm.toLowerCase().replace(/\s+/g, "-")}
                          className="block pl-9 pr-4 py-2 "
                          onClick={closeMenu}
                        >
                          {capitalize(sm)}
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Nabvar = ({ dataWebsite, menu, otherMenus }: HeaderProps) => {
  return (
    <>
      {/* Navbar para pantallas pequeñas */}
      <NavbarMobile dataWebsite={dataWebsite} menu={menu} otherMenus={otherMenus} />
    </>
  );
};

export default Nabvar;
