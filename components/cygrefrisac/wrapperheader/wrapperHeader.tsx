'use client'

import { PreHeader } from "../preHeader/pre-header";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import { WebSite } from "@/types/webSite";
import { Menu, OtherMenu } from "@/types/menu";

import { useState, useEffect, useRef } from "react"

interface WrapperHeader {
    dataWebsite: WebSite
    menu: Menu[]
    otherMenus: OtherMenu[]
}

export function WrapperHeader({ dataWebsite, menu, otherMenus }: WrapperHeader) {
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
                className={`hidden lg:block sticky top-0 w-full z-50 bg-cygrefrisac-preHeader text-white py-2 px-4 text-sm transition-all duration-300 
                    ${isVisible ? "h-10 opacity-100" : "h-0 opacity-0 overflow-hidden"}
                    `}
            >
                <PreHeader dataWebsite={dataWebsite} />
            </div>
            <div className=" sticky top-0 z-50">
                <Header />
                <Navbar menu={menu} otherMenus={otherMenus} />
            </div>
        </>
    );
}