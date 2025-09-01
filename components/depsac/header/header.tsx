'use client'

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavbarDesktop = () => {

    const pathName = usePathname()

    return (
        // Start Hero Section 
        <nav className="hidden lg:flex bg-depsac-greenBanner py-3 items-center flex-nowrap justify-start fixed top-0 left-0 w-full z-50" arial-label="Furni navigation bar">
            <div className="flex justify-between items-center x:max-w-[1320px] mx-auto w-full x:px-0 px-4">
                <Link href="/" className="text-white font-bold">
                    <div className="leading-tight">
                        <div className="text-[42px]">
                            D.E.P. <span className="text-2xl align-bottom">S.A.C.</span>
                        </div>
                        <div className="text-xs mt-[-2px] tracking-tight">
                            DISEÑOS DE EQUIPOS Y PROYECTOS
                        </div>
                    </div>
                </Link>

                <div className="flex">
                    <ul className="flex flex-row pl-0 list-none mt-0 ms-auto align-middle items-center">
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/' ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`} href="/">Inicio</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2  ${pathName === '/shop' ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`} href="/shop">Productos</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/services' ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`} href="/services">Servicios</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/nosotros' ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`} href="/nosotros">Nosotros</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/blog' ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`} href="/blog">Blog</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/contact' ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`} href="/contact">Contactanos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

const NavbarMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="lg:hidden bg-depsac-greenBanner py-2 fixed flex flex-wrap items-center justify-between w-full z-50" arial-label="Furni navigation bar">
            <div className="flex items-center justify-between w-full px-3 mx-auto">
                <Link className="text-3xl font-semibold text-white py-[0.3125rem] mr-4 whitespace-nowrap" href="/">
                    <div className="leading-tight">
                        <div className="text-[28px]">
                            D.E.P. <span className="text-2xl align-bottom">S.A.C.</span>
                        </div>
                        <div className="text-[9px] mt-[-2px] tracking-tight">
                            DISEÑOS DE EQUIPOS Y PROYECTOS
                        </div>
                    </div>
                </Link>

                <button className="text-white focus:outline-none py-1  leading-none bg-transparent rounded m-0 text-4xl" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </button>
            </div>

            {/* Lista del menú que se mostrará o ocultará */}
            <div className={`lg:hidden w-full mx-auto px-3 pt-2 ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col text-lg font-medium text-white">
                    <li className="my-3"><a className="opacity-50 w-full " href="/">Inicio</a></li>
                    <li className="my-3"><Link className="opacity-50" href="shop" onClick={toggleMenu}>Productos</Link></li>
                    <li className="my-3"><Link className="opacity-50" href="services" onClick={toggleMenu}>Servicios</Link></li>
                    <li className="my-3"><Link className="opacity-50" href="nosotros" onClick={toggleMenu}>Nosotros</Link></li>
                    <li className="my-3"><Link className="opacity-50" href="blog" onClick={toggleMenu}>Blog</Link></li>
                    <li className="my-3"><Link className="opacity-50" href="contact" onClick={toggleMenu}>Contáctanos</Link></li>
                </ul>
            </div>
        </nav>
    );
};

const Header = () => {
    return (
        <>
            {/* Navbar para pantallas grandes */}
            <NavbarDesktop />

            {/* Navbar para pantallas pequeñas */}
            <NavbarMobile />
        </>
    );
};

export default Header;