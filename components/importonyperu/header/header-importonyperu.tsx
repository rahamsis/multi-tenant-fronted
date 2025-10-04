'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { Menu, OtherMenu } from "@/types/menu";
import { ChevronDown } from "lucide-react";

type HeaderProps = {
    menu: Menu[];
    otherMenus: OtherMenu[];
};

const HeaderDesktop = ({ menu, otherMenus }: HeaderProps) => {
    const pathName = usePathname();
    const [scrolled, setScrolled] = useState(false);

    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [openMoreMenus, setOpenMoreMenus] = useState(false);
    const [openOtherMenu, setOpenOtherMenu] = useState<string | null>(null);
    const menuRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const handleScrollOrClickOutside = (event?: MouseEvent) => {
            if (event && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
                setOpenMoreMenus(false);
            }

            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // cerrar menús si hay scroll
            if (!event) {
                setOpenMenu(null);
                setOpenMoreMenus(false);
            }
        };

        document.addEventListener("mousedown", handleScrollOrClickOutside);
        window.addEventListener("scroll", () => handleScrollOrClickOutside());

        return () => {
            document.removeEventListener("mousedown", handleScrollOrClickOutside);
            window.removeEventListener("scroll", () => handleScrollOrClickOutside());
        };
    }, []);

    return (
        <nav className={`hidden lg:flex lg:flex-col py-3 items-center top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "fixed bg-white shadow-md py-2" : "relative"}`}>
            <div className={`flex text-center justify-center items-center w-full py-4 px-4 border-slate-300 border-t border-b ${scrolled ? "border-none" : ""}`}>
                <div className="flex">
                    <ul className="flex flex-row pl-0 list-none mt-0 ms-auto align-middle justify-center" ref={menuRef}>
                        <li className="bg-blue-500 rounded-md py-1">
                            <Link className={`text-white font-medium relative px-2 hover:opacity-50 ${pathName === '/catalogos' ? '' : ''}`} href="/catalogos">CATÁLOGOS</Link>
                        </li>
                        {menu.map((m: Menu) => (
                            <li key={m.idMenu} className={`relative  border-slate-300 ${m.orden !== 1 && "border-l"}`}>
                                <div className="flex flex-row">
                                    <Link
                                        className={`flex items-center text-primary font-medium px-5 hover:opacity-50 ${pathName === m.urlMenu ? '' : ''}`}
                                        href={m.urlMenu}
                                        onClick={() => {
                                            setOpenMenu(null);
                                            setOpenMoreMenus(false);
                                        }}>
                                        {m.titulo.length > 12
                                            ? m.titulo.substring(0, 12).toUpperCase()
                                            : m.titulo.toUpperCase()}
                                    </Link>
                                    {m.subMenu?.length > 0 && (
                                        <button
                                            className="flex items-center pr-4 text-gray-700 font-medium"
                                            onClick={() => {
                                                setOpenMenu(openMenu === m.idMenu ? null : m.idMenu);
                                                setOpenMoreMenus(false);
                                            }}
                                        >
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${openMenu === m.idMenu ? "rotate-180" : "rotate-0"}`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {openMenu === m.idMenu && (
                                    <ul className="absolute text-left left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50">
                                        {m.subMenu?.map((sm, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={m.urlMenu + "/" + sm.toLowerCase().replace(/\s+/g, "-")}
                                                    className="block px-4 py-2 text-primary font-normal hover:opacity-50"
                                                    onClick={() => {
                                                        setOpenMenu(null);
                                                        setOpenMoreMenus(false);
                                                    }}
                                                >
                                                    {sm.length > 12
                                                        ? sm.substring(0, 12).toUpperCase()
                                                        : sm.toUpperCase()}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}

                        {otherMenus && (
                            <li className={`relative border-slate-300 border-l`}>
                                <div
                                    className="flex flex-row"
                                    onClick={() => {
                                        setOpenMoreMenus(!openMoreMenus);
                                        setOpenMenu(null);
                                    }}
                                >
                                    <label
                                        className={`font-medium relative px-5 cursor-pointer hover:opacity-50`}
                                    >
                                        MÁS
                                    </label>
                                    {otherMenus.length > 0 && (
                                        <button className="flex items-center pr-4 text-gray-700 font-medium">
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${openMoreMenus ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {openMoreMenus && (
                                    <ul className="absolute text-left left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50">
                                        {otherMenus.map((sm, index) => (
                                            <li key={index} className="relative">
                                                <div className="flex flex-row items-center justify-between">
                                                    <Link
                                                        href={"/" + sm.categoria.toLowerCase().replace(/\s+/g, "-")}
                                                        className="block px-4 py-2 text-primary font-normal hover:opacity-50"
                                                        onClick={() => setOpenMoreMenus(false)}
                                                    >
                                                        {sm.categoria.length > 12
                                                            ? sm.categoria.substring(0, 12).toUpperCase()
                                                            : sm.categoria.toUpperCase()}
                                                    </Link>

                                                    {sm.subMenu?.length > 0 && (
                                                        <button
                                                            className="flex items-center pr-2 text-gray-700 font-medium"
                                                            onClick={(e) => {
                                                                e.stopPropagation(); // evita cerrar el menú padre
                                                                setOpenOtherMenu(
                                                                    openOtherMenu === sm.categoria ? null : sm.categoria
                                                                );
                                                            }}
                                                        >
                                                            <ChevronDown
                                                                className={`w-4 h-4 transition-transform duration-200 ${openOtherMenu === sm.categoria ? "rotate-180" : "rotate-0"
                                                                    }`}
                                                            />
                                                        </button>
                                                    )}
                                                </div>

                                                {openOtherMenu === sm.categoria && (
                                                    <ul className="top-0 mt-0 w-48 bg-white border border-gray-200 z-50">
                                                        {sm.subMenu?.map((ssm, idx) => (
                                                            <li key={idx}>
                                                                <Link
                                                                    href={
                                                                        "/" +
                                                                        sm.categoria.toLowerCase().replace(/\s+/g, "-") +
                                                                        "/" +
                                                                        ssm.toLowerCase().replace(/\s+/g, "-")
                                                                    }
                                                                    className="block pl-8 pr-4 py-2 text-primary font-normal hover:opacity-50"
                                                                    onClick={() => {
                                                                        setOpenMenu(null);
                                                                        setOpenMoreMenus(false);
                                                                        setOpenOtherMenu(null);
                                                                    }}
                                                                >
                                                                    {ssm.length > 12
                                                                        ? ssm.substring(0, 12).toUpperCase()
                                                                        : ssm.toUpperCase()}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const HeaderMobile = ({ menu, otherMenus }: HeaderProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    // Normalizamos ambos arrays
    const menuComplete = [
        ...menu.map((m) => ({
            id: m.idMenu,
            titulo: m.titulo,
            url: m.urlMenu,
            subMenu: m.subMenu ?? []
        })),
        ...otherMenus.map((o) => ({
            id: o.idCategoria,
            titulo: o.categoria,
            url: "/" + o.categoria.toLowerCase().replace(/\s+/g, "-"),
            subMenu: o.subMenu ?? []
        }))
    ];

    const toggleMenu = () => setSidebarOpen(!sidebarOpen);

    const closeMenu = () => setSidebarOpen(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu()
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                sidebarOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [sidebarOpen]);

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [sidebarOpen]);

    return (
        <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white">
            <nav className=" py-2 flex flex-wrap items-center justify-between w-full z-50 border-slate-300 border-b">
                <div className="flex w-full justify-between px-3">
                    <button
                        ref={buttonRef}
                        className="text-importonyperu-primary focus:outline-none py-1 leading-none bg-transparent rounded m-0 text-4xl"
                        onClick={toggleMenu}
                        aria-label={sidebarOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={sidebarOpen}
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
                className={`lg:hidden bg-white shadow-lg fixed top-0 left-0 w-3/4 max-w-xs h-full px-3 pt-2 transform transition-all duration-300 ease-in-out z-50
                    ${sidebarOpen ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menú de navegación"
            >
                <div className="flex justify-start py-2 border-slate-300 border-b">
                    <button
                        className="text-importonyperu-primary pl-3 text-3xl focus:outline-none"
                        onClick={closeMenu}
                        aria-label="Cerrar menú"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <ul className="flex flex-col text-lg font-bold mt-8 ">
                    <li className="pb-2">
                        <div className="text-blue-600">
                            <Link
                                href="/catalogos"
                                className="block py-2 mx-4 hover:opacity-100 transition-opacity duration-200"
                                onClick={closeMenu}
                            >
                                CATÁLOGOS
                            </Link>
                        </div>
                    </li>
                    {menuComplete.map((m) => (
                        <li key={m.id} className="border-t border-slate-200 py-2">
                            <div className="flex flex-row mx-4 gap-8">
                                <Link
                                    href={m.url}
                                    className="block py-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
                                    onClick={closeMenu}
                                >
                                    {m.titulo.toUpperCase()}
                                </Link>
                                {m.subMenu?.length > 0 && (
                                    <button
                                        className="flex items-center"
                                        onClick={() => setOpenMenu(openMenu === m.id ? null : m.id)}
                                    >
                                        <ChevronDown
                                            className={`transition-transform duration-200 ${openMenu === m.id ? "rotate-180" : "rotate-0"}`}
                                        />
                                    </button>
                                )}
                            </div>

                            {openMenu === m.id && (
                                <ul className="top-0 mt-0">
                                    {m.subMenu.map((sm, index) => (
                                        <li key={index}>
                                            <Link
                                                href={m.url + "/" + sm.toLowerCase().replace(/\s+/g, "-")}
                                                className="block pl-9 pr-4 py-2 font-semibold"
                                                onClick={closeMenu}
                                            >
                                                {sm.toUpperCase()}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Header = ({ menu, otherMenus }: HeaderProps) => {
    return (
        <div className="mx-auto justify-between items-center xl:w-8/12 2xl:w-8/12 w-11/12">
            <HeaderDesktop menu={menu} otherMenus={otherMenus} />
            <HeaderMobile menu={menu} otherMenus={otherMenus} />
        </div>
    );
};

export default Header;
