"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone } from "lucide-react"

export function PreHeader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop < 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`bg-oishipop-primary text-white py-2 px-4 text-sm transition-all duration-300 ${
        isVisible ? "h-10 opacity-100" : "h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{"Av. Principal 123, Ciudad de Peluches"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
        <div className="text-xs">{"🚚 Envío gratis en compras mayores a $50"}</div>
      </div>
    </div>
  )
}
