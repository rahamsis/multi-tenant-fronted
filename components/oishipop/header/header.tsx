"use client"

import { useState } from "react"
import { Search, Heart, ShoppingCart, User, Globe } from "lucide-react"

const HeaderDesktop = () => {
  const [currencyOpen, setCurrencyOpen] = useState(false)
  const [currency, setCurrency] = useState("USD")

  const currencies = [
    { code: "USD", label: "USD - Dólar" },
    { code: "EUR", label: "EUR - Euro" },
    { code: "MXN", label: "MXN - Peso" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Buscador - Izquierda */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                placeholder="Buscar ALGO XD..."
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Logo - Centro */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">🧸 OISHIPOP</h1>
          </div>

          {/* Opciones - Derecha */}
          <div className="flex items-center gap-4">
            {/* Selector de moneda */}
            <div className="relative">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 text-sm"
              >
                <Globe className="h-4 w-4" />
                {currency}
              </button>

              {currencyOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-50">
                  {currencies.map((c) => (
                    <li key={c.code}>
                      <button
                        onClick={() => {
                          setCurrency(c.code)
                          setCurrencyOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50"
                      >
                        {c.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Iniciar sesión */}
            <button className="flex items-center gap-2 text-sm hover:text-blue-600">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Iniciar Sesión</span>
            </button>

            {/* Favoritos */}
            <button className="relative hover:text-red-500">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs">
                3
              </span>
            </button>

            {/* Carrito */}
            <button className="relative hover:text-blue-600">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

const Header = () => {
  return (
    <div>
      <HeaderDesktop/>
    </div>
  );
}

export default Header;