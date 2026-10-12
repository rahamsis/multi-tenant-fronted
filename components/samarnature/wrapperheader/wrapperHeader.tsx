'use client'

import { PreHeader } from "../preHeader/pre-header";
import HeaderDesktop from "../header/header";
import Navbar from "../navbar/navbar";
import { WebSite } from "@/types/webSite";
import { Menu, OtherMenu } from "@/types/menu";

import { useState, useEffect } from "react"
import { Productos } from "@/types/producto";

interface WrapperHeader {
  dataWebsite: WebSite
  menu: Menu[]
  otherMenus: OtherMenu[],
  products: Productos[],
  tenant: string
}

export function WrapperHeader({
  dataWebsite,
  menu,
  otherMenus,
  products,
}: WrapperHeader) {
  const [isVisible, setIsVisible] = useState(true)

  //controla visibilidad del top bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop < 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`hidden lg:block sticky top-0 w-full z-50 bg-samar-secondarytwo text-white py-2 px-4 text-sm transition-all duration-300 
          ${isVisible
            ? "h-10 opacity-100"
            : "h-0 opacity-0 overflow-hidden"
          }
        `}
      >
        <PreHeader dataWebsite={dataWebsite} />
      </div>
      <div className=" sticky top-0 z-50">
        {/* header y navbar juntos */}
        <HeaderDesktop dataWebsite={dataWebsite} menu={menu} otherMenus={otherMenus} products={products} />
        {/* navbar solo para moviles */}
        <Navbar dataWebsite={dataWebsite} menu={menu} otherMenus={otherMenus} />
      </div>
    </>
  );
}