'use client'

/* eslint-disable */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const HeaderDesktop = () => {

    const pathName = usePathname()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) { // Cambia 150 por el punto donde quieres que cambie
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // Start Hero Section 
        <nav className={`hidden lg:flex lg:flex-col py-3 items-center top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "fixed bg-white shadow-md py-2" : "relative"
            }`}>
            {!scrolled && (
                <div className="h-28 w-96 my-4 text-white flex items-center justify-center">
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
            )}

            <div
                className={`flex text-center justify-center items-center w-full py-4 px-4 border-slate-300 border-t border-b ${scrolled ? "border-none" : ""
                    }`}
            >
                <div className="flex">
                    <ul className="flex flex-row pl-0 list-none mt-0 ms-auto align-middle items-center">
                        <li className="bg-blue-500 rounded-md py-1">
                            <Link className={`text-white font-medium relative px-2 hover:opacity-50 ${pathName === '/catalogos' ? '' : ''}`} href="/catalogos">CATÁLOGOS</Link>
                        </li>
                        <li className="">
                            <Link className={`text-primary font-medium relative px-6 hover:opacity-50 ${pathName === '/garfios' ? '' : ''}`} href="/garfios">GARFIOS</Link>
                        </li>
                        <li className="border-l border-slate-300">
                            <Link className={`text-primary font-medium relative px-6 hover:opacity-50 ${pathName === '/agujas' ? '' : ''}`} href="/agujas">AGUJAS</Link>
                        </li>
                        <li className="border-l border-slate-300">
                            <Link className={`text-primary font-medium relative px-6 hover:opacity-50 ${pathName === '/planchuelas' ? '' : ''}`} href="/planchuelas">PLANCHUELAS</Link>
                        </li>
                        <li className="border-l border-slate-300 flex text-center">
                            <Link className={`text-primary font-medium relative px-6 hover:opacity-50 ${pathName === '/planchas-industriales' ? '' : ''}`} href="/planchas-industriales">PLANCHAS IND.</Link>
                        </li>
                        <li className="border-l border-slate-300">
                            <Link className={`text-primary font-medium relative px-6 hover:opacity-50 ${pathName === '/prensatelas' ? '' : ''}`} href="/prensatelas">PRENSATELA</Link>
                        </li>
                        <li className="border-l border-slate-300">
                            <Link className={`text-primary font-medium relative px-6 hover:opacity-50 ${pathName === '/accesorios' ? '' : ''}`} href="/accesorios">ACCESORIOS</Link>
                        </li>
                        <li className="border-l border-slate-300">
                            <Link className={`text-primary font-medium relative px-6 hover:opacity-50 ${pathName === '/' ? '' : ''}`} href="/">MÁS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const HeaderMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Cerrar menú al presionar Escape
    useEffect(() => {
        const handleEscape = (e: any) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    // Cerrar menú al hacer clic fuera de él
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    // Prevenir scroll del cuerpo cuando el menú está abierto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const menuItems = [
        { href: "/catalogos", label: "CATALOGOS" },
        { href: "/garfios", label: "GARFIOS" },
        { href: "/agujas", label: "AGUJAS" },
        { href: "/planchuelas", label: "PLANCHUELAS" },
        { href: "/planchas-industriales", label: "PLANCHAS IND." },
        { href: "/prensatelas", label: "PRENSATELA" },
        { href: "/accesorios", label: "ACCESORIOS" },
        { href: "/", label: "MORE" }
    ];

    return (
        <div className="">
            {/* Navbar */}
            <nav className="lg:hidden py-2 flex flex-wrap items-center justify-between w-full z-50 border-slate-300 border-b">
                <div className="flex w-full justify-between px-3">
                    <button
                        ref={buttonRef}
                        className="text-primary focus:outline-none py-1 leading-none bg-transparent rounded m-0 text-4xl"
                        onClick={toggleMenu}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <i className="bi bi-list"></i>
                    </button>
                    <div className="flex justify-center w-full items-center">
                        <Link href="/" onClick={closeMenu}>
                            <Image
                                src="/importonyperu/images/logoTony.png"
                                alt="Logo de la empresa"
                                width={150}
                                height={150}
                                className="rounded-lg"
                                priority
                            />
                        </Link>
                    </div>
                </div>
            </nav>

            <div
                ref={menuRef}
                id="mobile-menu"
                className={`lg:hidden bg-white shadow-lg fixed top-0 left-0 w-3/4 max-w-xs h-full bg-greenBanner px-3 pt-2 transform transition-all duration-300 ease-in-out z-50
                    ${menuOpen ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menú de navegación"
            >
                <div className="flex justify-start py-2 border-slate-300 border-b">
                    <button
                        className="text-primary pl-3 text-3xl focus:outline-none"
                        onClick={closeMenu}
                        aria-label="Cerrar menú"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <ul className="flex flex-col text-lg font-bold mt-8 space-y-4">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            {
                                item.label === "CATALOGOS" ? (
                                    <div className="text-blue-600">
                                        <Link
                                            href={item.href}
                                            className="block py-2 mx-4 hover:opacity-100 transition-opacity duration-200"
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="mx-4">
                                        <Link
                                            href={item.href}
                                            className="block py-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                )
                            }

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="mx-auto justify-between items-center xl:w-8/12 2xl:w-8/12 w-11/12">
            {/* Navbar para pantallas grandes */}
            <HeaderDesktop />

            {/* Navbar para pantallas pequeñas */}
            <HeaderMobile />
        </div>
    );
};

export default Header;