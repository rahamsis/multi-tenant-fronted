"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react" // Icono flecha hacia abajo

const menuItems = [
  {
    title: "Nuevos Arrivals",
    items: ["Esta Semana", "Este Mes", "Próximamente", "Edición Limitada"],
  },
  {
    title: "Por Edad",
    items: ["0-2 años", "3-5 años", "6-8 años", "9+ años"],
  },
  {
    title: "Personajes",
    items: ["Disney", "Pokémon", "Hello Kitty", "Anime"],
  },
  {
    title: "Animales",
    items: ["Osos", "Gatos", "Perros", "Animales Salvajes"],
  },
  {
    title: "Tamaños",
    items: ["Mini (15cm)", "Mediano (30cm)", "Grande (50cm)", "Gigante (80cm+)"],
  },
  {
    title: "Ocasiones",
    items: ["Cumpleaños", "San Valentín", "Navidad", "Graduación"],
  },
  {
    title: "Colecciones",
    items: ["Exclusivas", "Vintage", "Artesanales", "Eco-Friendly"],
  },
  {
    title: "Ofertas",
    items: ["Descuentos", "Liquidación", "Paquetes", "Membresía"],
  },
]

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<number | null>(null)
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
          {menuItems.map((menu, index) => (
            <li key={index} className="relative">
              {/* Botón del menú con flecha */}
              <button
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() =>
                  setOpenMenu(openMenu === index ? null : index)
                }
              >
                {menu.title}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${openMenu === index ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>

              {/* Dropdown */}
              {openMenu === index && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item}
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
