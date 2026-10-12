"use client"

/* eslint-disable */

import { useState, useEffect } from "react"
import { MapPin, Phone } from "lucide-react"
import { WebSite } from "@/types/webSite"

export function PreHeader({dataWebsite} : {dataWebsite: WebSite}) {
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
    // <div
    //   className={`overflow-hidden bg-samar-secondarytwo text-xs text-white transition-all duration-300 sm:px-4 sm:text-sm ${
    //     isVisible
    //       ? "max-h-40 py-2 opacity-100 sm:max-h-10"
    //       : "max-h-0 py-0 opacity-0"
    //   }`}
    // >
      <div className="container mx-auto flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate">{dataWebsite.direccionPrincipal}</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Phone className="h-4 w-4 shrink-0" />
            <span>{dataWebsite.telefonoPrincipal}</span>
          </div>
        </div>
        <div className="text-left text-xs">{"🚚 Envío gratis en compras mayores a $50"}</div>
      </div>
    // </div>
  )
}
