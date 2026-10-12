
"use client";

import { useState, useEffect } from "react";

import TopBar from "../topBar/topBar";
import Header from "../header/header";
// import Navbar from "../navbar/navbar";

import { WebSite } from "@/types/webSite";
import { Menu, OtherMenu } from "@/types/menu";
import { Productos } from "@/types/producto";
import Navbar from "../navbar/navbar";

interface WrapperHeaderProps {
  dataWebsite: WebSite;
  menu: Menu[];
  otherMenus: OtherMenu[];
  products: Productos[];
  tenant: string;
}

export function WrapperHeader({
  dataWebsite,
  products,
}: WrapperHeaderProps) {
  const [isVisible, setIsVisible] = useState(true);

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
      {/* TOP BAR */}
      <div
        className={`hidden lg:block sticky top-0 z-50 overflow-hidden transition-all duration-300 ease-in-out
          ${isVisible
            ? "max-h-12 opacity-100"
            : "max-h-0 opacity-0"
          }
        `}
      >
        <TopBar />
      </div>

      {/* HEADER + NAVBAR */}
      <div className="sticky top-0 z-50 bg-background">
        {/* marca - buscador -iconos */}
        <Header dataWebsite={dataWebsite} products={products}/>
        {/* navbar para escritotio y mobiles */}
        <Navbar />
      </div>
    </>
  );
}
