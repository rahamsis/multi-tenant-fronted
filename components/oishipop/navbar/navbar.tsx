"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react" // Icono flecha hacia abajo
import { Menu, OtherMenu } from "@/types/menu";

type HeaderProps = {
  menu: Menu[];
  otherMenus: OtherMenu[];
};

export function Navbar({ menu, otherMenus }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLUListElement | null>(null)

  // Cerrar menú cuando se hace click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null)
      }
    }

    function handleScroll() {
      setOpenMenu(null)
    }
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <ul className="flex flex-row justify-center space-x-6 py-3" ref={menuRef}>
          {menu.map((m) => (
            <li key={m.idMenu} className="relative">
              {/* Botón del menú con flecha */}
              <button
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() =>
                  setOpenMenu(openMenu === m.idMenu ? null : m.idMenu)
                }
              >
                {m.titulo}
                {m.subMenu?.length > 0 && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${openMenu === m.idMenu ? "rotate-180" : "rotate-0"
                      }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {openMenu === m.idMenu && m.subMenu?.length > 0 && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {m.subMenu.map((sm, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {sm}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
