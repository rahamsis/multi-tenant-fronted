
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Categorías", href: "/categorias" },
  { label: "Marcas", href: "/marcas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contactanos" },
];

const NavbarDesktop = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" ||
        pathname === "/importhnostony";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`) ||
      pathname === `/importhnostony${href}` ||
      pathname.startsWith(`/importhnostony${href}/`)
    );
  };

  return (
    <nav
      aria-label="Navegación principal"
      className="hidden w-full bg-importhnostony-dark lg:block"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ul className="flex h-12 items-center justify-center">

          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.label} className="h-full">

                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative flex h-full items-center px-8
                    text-sm font-medium
                    transition-colors duration-200

                    ${
                      active
                        ? "text-white bg-importhnostony-primary"
                        : "text-white hover:bg-importhnostony-primary"
                    }
                  `}
                >
                  {item.label}
                </Link>

              </li>
            );
          })}

        </ul>
      </div>
    </nav>
  );
}

const NavbarMobile = () => {
    const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeMenu = () => {
    setSidebarOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return (
        pathname === "/" ||
        pathname === "/importhnostony"
      );
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`) ||
      pathname === `/importhnostony${href}` ||
      pathname.startsWith(`/importhnostony${href}/`)
    );
  };

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Cerrar menú con Escape y bloquear scroll
  useEffect(() => {
    if (!sidebarOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [sidebarOpen]);

  return (
    <nav
      aria-label="Navegación móvil"
      className="w-full bg-importhnostony-dark lg:hidden mb-3"
    >
      {/* BARRA SUPERIOR */}
      <div className="flex h-16 items-center justify-between px-4">

        {/* MARCA */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex flex-col"
        >
          <span className="text-xl font-extrabold tracking-tight text-white">
            IMPORT
            <span className="text-importhnostony-primary">
              HNOSTONY
            </span>
          </span>

          <span className="text-[9px] tracking-wider text-gray-300">
            REPUESTOS INDUSTRIALES
          </span>
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={sidebarOpen}
          aria-controls="importhnostony-mobile-menu"
          className="rounded-md p-2 text-white transition-colors hover:bg-importhnostony-primary"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* FONDO OSCURO */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* PANEL LATERAL */}
      <div
        id="importhnostony-mobile-menu"
        aria-hidden={!sidebarOpen}
        inert={!sidebarOpen}
        className={`
          fixed right-0 top-0 z-[70]
          h-dvh w-4/5 max-w-xs
          overflow-y-auto overscroll-contain
          bg-white shadow-2xl
          transition-transform duration-300 ease-in-out
          ${
            sidebarOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* CABECERA DEL PANEL */}
        <div className="flex h-16 items-center justify-between border-b border-border px-5">

          <span className="text-lg font-bold text-importhnostony-dark">
            Menú
          </span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Cerrar menú"
            className="rounded-md p-2 text-importhnostony-dark hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* OPCIONES */}
        <ul className="flex flex-col px-3 py-4">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`
                    flex items-center rounded-md
                    px-4 py-3.5
                    text-sm font-semibold
                    transition-colors duration-200
                    ${
                      active
                        ? "bg-importhnostony-primary text-white"
                        : "text-importhnostony-dark hover:bg-importhnostony-primary hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* PIE DEL PANEL */}
        <div className="mt-4 border-t border-border px-5 py-5">
          <p className="text-xs text-muted">
            Repuestos y accesorios para máquinas textiles industriales.
          </p>
        </div>
      </div>
    </nav>
  );
}

const Navbar = () => {
  return (
    <>
        <NavbarDesktop />
        <NavbarMobile />
    </>
  );
}

export default Navbar;