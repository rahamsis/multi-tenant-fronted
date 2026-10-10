"use client"

import { useState, useEffect } from "react"
import Image from "next/image";
import Link from "next/link";

export function PreHeader() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsVisible(scrollTop < 400)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className={`hidden lg:block bg-white text-black py-3 px-4 text-sm transition-all duration-300 ${isVisible ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
                }`}
        >
            <div className="container flex mx-auto justify-center">
                <Link href="/">
                    <Image
                        src="/importonyperu/images/logoTony.png"
                        alt="Landing page builder illustration"
                        width={400}
                        height={400}
                        className="rounded-lg"
                        priority // 🔥 Esto optimiza la carga de la image
                    />
                </Link>
            </div>
        </div>
    )
}
