"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react" // Icono flecha hacia abajo
import { Menu, OtherMenu } from "@/types/menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeaderProps = {
    menu: Menu[];
    otherMenus: OtherMenu[];
};

function capitalize(word: string): string {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const NavbarDesktop = ({ menu, otherMenus }: HeaderProps) => {
    const pathName = usePathname();

    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [openMoreMenus, setOpenMoreMenus] = useState(false);
    const [openOtherMenu, setOpenOtherMenu] = useState<string | null>(null);

    const menuRef = useRef<HTMLUListElement | null>(null)

    //inicializar el submenu del submenu para que quede abierto
    useEffect(() => {
        const parts = pathName.split("/").filter(Boolean);

        if (parts.length > 1) {
            setOpenOtherMenu(capitalize(parts[0].replace(/-/g, " ")));
        } else {
            setOpenOtherMenu(null);
        }

    }, [pathName]);

    // Cerrar menú cuando se hace click fuera
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(null)
                setOpenMoreMenus(false);
            }
        }

        function handleScroll() {
            setOpenMenu(null)
        }

        document.addEventListener("mousedown", handleClickOutside)
        window.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className={`hidden lg:flex w-full bg-white border-b shadow-sm`}>
            <div className="container mx-auto px-4">
                <ul className="flex flex-row justify-center space-x-6 py-3" ref={menuRef}>
                    {menu.map((m) => (
                        <li key={m.idMenu} className="relative">
                            {/* Botón del menú con flecha */}
                            <div className={`flex items-center gap-1 px-3 hover:text-cygrefrisac-header
                                ${pathName === m.urlMenu
                                    || m.subMenu?.some((sub) => pathName === `${m.urlMenu}/${sub.toLowerCase().replace(/\s+/g, "-")}`) ? 'text-cygrefrisac-header font-medium' : 'text-slate-800'}`}
                            >
                                <Link
                                    href={m.urlMenu}
                                    onClick={() => {
                                        setOpenMenu(null);
                                        setOpenMoreMenus(false);
                                    }}>
                                    {capitalize(m.titulo)}
                                </Link>

                                {m.subMenu?.length > 0 && (
                                    <button
                                        className="flex items-center text-slate-800 font-medium"
                                        onClick={() => {
                                            setOpenMenu(openMenu === m.idMenu ? null : m.idMenu);
                                            setOpenMoreMenus(false);
                                        }}
                                    >
                                        <ChevronDown
                                            className={`w-6 h-6 transition-transform duration-200 ${openMenu === m.idMenu ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Dropdown */}
                            {openMenu === m.idMenu && m.subMenu?.length > 0 && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    {m.subMenu.map((sm, index) => (
                                        <div
                                            key={index}
                                            className={`${pathName === `${m.urlMenu.toLowerCase()}/${sm.toLowerCase().replace(/\s+/g, "-")}` ? 'text-cygrefrisac-header' : 'text-slate-800'}`}>
                                            <li>
                                                <Link
                                                    href={m.urlMenu + "/" + sm.toLowerCase().replace(/\s+/g, "-")}
                                                    className="block px-4 py-2 text-primary  hover:text-cygrefrisac-header"
                                                    onClick={() => {
                                                        setOpenMenu(null);
                                                        setOpenMoreMenus(false);
                                                    }}
                                                >
                                                    {capitalize(sm.toUpperCase())}
                                                </Link>
                                            </li>
                                        </div>

                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

                    {otherMenus && (
                        <li className={`relative`}>
                            <div
                                className={`flex flex-row hover:text-cygrefrisac-header
                                        ${otherMenus.some((om) =>
                                    pathName === `/${om.categoria.toLowerCase().replace(/\s+/g, "-")}` ||
                                    om.subMenu?.some((osm) => pathName === `/${om.categoria.toLowerCase().replace(/\s+/g, "-")}/${osm.toLowerCase().replace(/\s+/g, "-")}`)
                                )
                                        ? "text-cygrefrisac-header"
                                        : "text-slate-800"
                                    }
                                        `}
                                onClick={() => {
                                    setOpenMoreMenus(!openMoreMenus);
                                    setOpenMenu(null);
                                }}
                            >
                                <label className={` relative cursor-pointer`}>
                                    Más
                                </label>
                                {otherMenus.length > 0 && (
                                    <button className="flex items-center font-medium">
                                        <ChevronDown
                                            className={`w-6 h-6 transition-transform duration-200 ${openMoreMenus ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>
                                )}
                            </div>

                            {openMoreMenus && (
                                <ul className="absolute text-left left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    {otherMenus.map((sm, index) => (
                                        <li key={index} className="relative">
                                            <div className={`flex flex-row items-center hover:opacity-100 hover:text-cygrefrisac-header
                                                    ${pathName === `/${sm.categoria.toLowerCase().replace(/\s+/g, "-")}`
                                                    || sm.subMenu?.some((sub) => pathName === `/${sm.categoria.toLowerCase().replace(/\s+/g, "-")}/${sub.toLowerCase().replace(/\s+/g, "-")}`) ? 'text-cygrefrisac-header' : 'text-slate-800'}`}>
                                                <Link
                                                    href={"/" + sm.categoria.toLowerCase().replace(/\s+/g, "-")}
                                                    className="block px-4 py-2 font-normal"
                                                    onClick={() => setOpenMoreMenus(false)}
                                                >
                                                    {capitalize(sm.categoria.toUpperCase())}
                                                </Link>

                                                {sm.subMenu?.length > 0 && (
                                                    <button
                                                        className="flex"
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // evita cerrar el menú padre
                                                            setOpenOtherMenu(
                                                                openOtherMenu === sm.categoria ? null : sm.categoria
                                                            );
                                                        }}
                                                    >
                                                        <ChevronDown
                                                            className={`w-6 h-6 transition-transform duration-200 ${openOtherMenu === sm.categoria ? "rotate-180" : "rotate-0"
                                                                }`}
                                                        />
                                                    </button>
                                                )}
                                            </div>

                                            {openOtherMenu === sm.categoria && (
                                                <ul className={`top-0 mt-0 w-48 z-50
                                                     `}>
                                                    {sm.subMenu?.map((ssm, idx) => (
                                                        <div key={idx}
                                                            className={`hover:text-cygrefrisac-header
                                                                ${pathName === `/${sm.categoria.toLowerCase().replace(/\s+/g, "-")}/${ssm.toLowerCase().replace(/\s+/g, "-")}` ? 'text-cygrefrisac-header' : 'text-slate-800'}`}
                                                        >
                                                            <li >
                                                                <Link
                                                                    href={
                                                                        "/" +
                                                                        sm.categoria.toLowerCase().replace(/\s+/g, "-") +
                                                                        "/" +
                                                                        ssm.toLowerCase().replace(/\s+/g, "-")
                                                                    }
                                                                    className="block pl-8 pr-4 py-2 text-primary"
                                                                    onClick={() => {
                                                                        setOpenMenu(null);
                                                                        setOpenMoreMenus(false);
                                                                        setOpenOtherMenu(null);
                                                                    }}
                                                                >
                                                                    {capitalize(ssm.toUpperCase())}
                                                                </Link>
                                                            </li>
                                                        </div>
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
        </nav>
    )
};

const NavbarMobile = ({ menu, otherMenus }: HeaderProps) => {
    const pathName = usePathname();

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


    //inicializar el submenu del submenu para que quede abiertos
    useEffect(() => {
        const parts = pathName.split("/").filter(Boolean);
        const titulo = parts.length > 1 ? capitalize(parts[0].replace(/-/g, " ")) : "";
        const menu = menuComplete.find((mc) => mc.titulo === titulo);

        if (parts.length > 1) {
            setOpenMenu(menu?.id || null);
        } else {
            setOpenMenu(null);
        }

    }, [pathName]);

    const toggleMenu = () => {
        setSidebarOpen(!sidebarOpen)

    };
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
        <nav className="lg:hidden sticky w-full top-0 bg-white py-2 right-0 z-50 shadow-lg">
            <div className="flex flex-wrap items-center justify-between w-full px-3 mx-auto">
                <Link className="text-3xl font-semibold text-white py-[0.3125rem] mr-4 whitespace-nowrap" href="/">
                    <div className="leading-tight">
                        <Image
                            src="/cygrefrisac/images/cyglogo.jpg"
                            alt="Logo de la empresa"
                            width={130}
                            height={80}
                            className="rounded-lg w-auto h-auto"
                            priority={true}
                        />
                    </div>
                </Link>

                <button className="text-black focus:outline-none py-1  leading-none bg-transparent rounded m-0 text-4xl" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </button>
            </div>

            <div className={`fixed inset-0 z-40 bg-black/50 ${sidebarOpen ? "block" : "hidden"}`} />

            {/* Lista del menú que se mostrará o ocultará */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`lg:hidden bg-white shadow-lg w-3/4 fixed top-0 right-0 px-3 max-w-xs h-full pt-2 z-50
                    ${sidebarOpen ? 'block' : 'hidden'}`}
            >
                <div className="flex justify-start">
                    <button className="text-slate-800 focus:outline-none py-1 px-3 leading-none bg-transparent rounded m-0 text-4xl" onClick={toggleMenu}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>

                <ul className="flex flex-col text-lg text-slate-800">
                    <li className={`my-3 ${pathName === "/" ? 'opacity-100' : 'opacity-50'}`}>
                        <a className=" w-full mx-4 font-semibold" href="/">Inicio</a>
                    </li>
                    {menuComplete.map((m) => (
                        <li key={m.id} className="my-3 font-semibold">
                            <div
                                className={`flex flex-row mx-4 gap-8
                                ${pathName === m.url
                                        || m.subMenu?.some((sub) => pathName === `${m.url}/${sub.toLowerCase().replace(/\s+/g, "-")}`) ? 'opacity-100' : 'opacity-50'}
                            `}>
                                <Link
                                    className=""
                                    href={m.url}
                                    onClick={toggleMenu}
                                >
                                    {capitalize(m.titulo)}
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
                                        <div
                                            key={index}
                                            className={` ${pathName === `${m.url}/${sm.toLowerCase().replace(/\s+/g, "-")}` ? 'opacity-100' : 'opacity-50'} `}
                                        >
                                            <li >
                                                <Link
                                                    href={m.url + "/" + sm.toLowerCase().replace(/\s+/g, "-")}
                                                    className="block pl-9 pr-4 py-2 "
                                                    onClick={closeMenu}
                                                >
                                                    {capitalize(sm)}
                                                </Link>
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const Nabvar = ({ menu, otherMenus }: HeaderProps) => {
    return (
        <>
            {/* Navbar para pantallas grandes */}
            <NavbarDesktop menu={menu} otherMenus={otherMenus} />

            {/* Navbar para pantallas pequeñas */}
            <NavbarMobile menu={menu} otherMenus={otherMenus} />
        </>
    );
};

export default Nabvar;