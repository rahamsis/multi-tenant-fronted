"use client"


import { Facebook, Mail, Phone, Twitter } from "lucide-react"
import { WebSite } from "@/types/webSite"

export function PreHeader({ dataWebsite }: { dataWebsite: WebSite }) {

  return (
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+51 {dataWebsite.telefonoPrincipal.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>{dataWebsite.correo}</span>
        </div>
        <div className="border-x border-white">
          <Facebook className="h-4 w-4 mx-2" />
        </div>
        <div>
          <Twitter className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}
