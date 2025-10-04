'use client'

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { Menu, OtherMenu } from "@/types/menu";
import { ChevronDown } from "lucide-react";

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
    const menuRef = useRef<HTMLUListElement | null>(null);

    //inicializar el submenu del submenu para que quede abierto
    useEffect(() => {
        const parts = pathName.split("/").filter(Boolean);

        if (parts.length > 1) {
            setOpenOtherMenu(capitalize(parts[0].replace(/-/g, " ")));
        } else {
            setOpenOtherMenu(null);
        }

    }, [pathName]);

    useEffect(() => {
        const handleScrollOrClickOutside = (event?: MouseEvent) => {
            if (event && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
                setOpenMoreMenus(false);
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
                    <ul className="flex flex-row pl-0 list-none mt-0 ms-auto align-middle items-center" ref={menuRef}>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 hover:opacity-100 ${pathName === '/' ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`} href="/">Inicio</Link>
                        </li>
                        {menu.map((m: Menu) => (
                            <li key={m.idMenu} className="relative ml-4 mr-4">
                                <div className={`flex flex-row hover:opacity-100
                                    ${pathName === m.urlMenu
                                        || m.subMenu?.some((sub) => pathName === `${m.urlMenu}/${sub.toLowerCase().replace(/\s+/g, "-")}`) ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`}>
                                    <Link
                                        className={`font-medium text-white relative px-2`}
                                        // className={`font-medium text-white relative pr-2 pl-2 ${pathName === m.urlMenu ? 'border-b-4 border-b-depsac-acento' : 'opacity-50'}`}
                                        href={m.urlMenu}
                                        onClick={() => {
                                            setOpenMenu(null);
                                            setOpenMoreMenus(false);
                                        }}>
                                        {m.titulo.length > 16
                                            ? capitalize(m.titulo.substring(0, 16).toUpperCase())
                                            : capitalize(m.titulo.toUpperCase())}
                                    </Link>
                                    {m.subMenu?.length > 0 && (
                                        <button
                                            className="flex items-center text-white font-medium"
                                            onClick={() => {
                                                setOpenMenu(openMenu === m.idMenu ? null : m.idMenu);
                                                setOpenMoreMenus(false);
                                            }}
                                        >
                                            <ChevronDown
                                                className={`w-6 h-6 transition-transform duration-200 ${openMenu === m.idMenu ? "rotate-180" : "rotate-0"}`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {openMenu === m.idMenu && (
                                    <ul className="absolute text-left left-0 mt-2 w-48 bg-depsac-primary border border-depsac-secondary shadow-lg z-50">
                                        {m.subMenu?.map((sm, index) => (
                                            <div
                                                key={index}
                                                className={`${pathName === `${m.urlMenu.toLowerCase()}/${sm.toLowerCase().replace(/\s+/g, "-")}` ? '' : 'opacity-50'}`}>
                                                <li >
                                                    <Link
                                                        href={m.urlMenu + "/" + sm.toLowerCase().replace(/\s+/g, "-")}
                                                        className="block px-4 py-2 text-primary font-normal text-white"
                                                        onClick={() => {
                                                            setOpenMenu(null);
                                                            setOpenMoreMenus(false);
                                                        }}
                                                    >
                                                        {sm.length > 12
                                                            ? capitalize(sm.substring(0, 16).toUpperCase())
                                                            : capitalize(sm.toUpperCase())}
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
                                    className={`flex flex-row 
                                        ${otherMenus.some((om) =>
                                        pathName === `/${om.categoria.toLowerCase().replace(/\s+/g, "-")}` ||
                                        om.subMenu?.some((osm) => pathName === `/${om.categoria.toLowerCase().replace(/\s+/g, "-")}/${osm.toLowerCase().replace(/\s+/g, "-")}`)
                                    )
                                            ? "border-b-4 border-b-depsac-acento"
                                            : "opacity-50"
                                        }
                                        `}
                                    onClick={() => {
                                        setOpenMoreMenus(!openMoreMenus);
                                        setOpenMenu(null);
                                    }}
                                >
                                    <label
                                        className={`font-medium relative px-2 cursor-pointer text-white`}
                                    >
                                        Más
                                    </label>
                                    {otherMenus.length > 0 && (
                                        <button className="flex items-center text-white font-medium">
                                            <ChevronDown
                                                className={`w-6 h-6 transition-transform duration-200 ${openMoreMenus ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {openMoreMenus && (
                                    <ul className="absolute text-left left-0 mt-2 w-48 bg-depsac-primary border border-depsac-secondary shadow-lg z-50">
                                        {otherMenus.map((sm, index) => (
                                            <li key={index} className="relative">
                                                <div className={`flex flex-row items-center hover:opacity-100
                                                    ${pathName === `/${sm.categoria.toLowerCase().replace(/\s+/g, "-")}`
                                                        || sm.subMenu?.some((sub) => pathName === `/${sm.categoria.toLowerCase().replace(/\s+/g, "-")}/${sub.toLowerCase().replace(/\s+/g, "-")}`) ? '' : 'opacity-50'}`}>
                                                    <Link
                                                        href={"/" + sm.categoria.toLowerCase().replace(/\s+/g, "-")}
                                                        className="block px-4 py-2 text-white font-normal"
                                                        onClick={() => setOpenMoreMenus(false)}
                                                    >
                                                        {sm.categoria.length > 16
                                                            ? capitalize(sm.categoria.substring(0, 16).toUpperCase())
                                                            : capitalize(sm.categoria.toUpperCase())}
                                                    </Link>

                                                    {sm.subMenu?.length > 0 && (
                                                        <button
                                                            className="flex text-white font-medium"
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
                                                                className={`hover:opacity-100 
                                                                    ${pathName === `/${sm.categoria.toLowerCase().replace(/\s+/g, "-")}/${ssm.toLowerCase().replace(/\s+/g, "-")}` ? '' : 'opacity-50'}`}
                                                            >
                                                                <li >
                                                                    <Link
                                                                        href={
                                                                            "/" +
                                                                            sm.categoria.toLowerCase().replace(/\s+/g, "-") +
                                                                            "/" +
                                                                            ssm.toLowerCase().replace(/\s+/g, "-")
                                                                        }
                                                                        className="block pl-8 pr-4 py-2 text-primary font-normal text-white"
                                                                        onClick={() => {
                                                                            setOpenMenu(null);
                                                                            setOpenMoreMenus(false);
                                                                            setOpenOtherMenu(null);
                                                                        }}
                                                                    >
                                                                        {ssm.length > 16
                                                                            ? capitalize(ssm.substring(0, 16).toUpperCase())
                                                                            : capitalize(ssm.toUpperCase())}
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
            </div>
        </nav>

    );
}

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
        <nav className="lg:hidden fixed w-full top-0 bg-depsac-greenBanner py-2 right-0 z-50" arial-label="Furni navigation bar">
            <div className="flex flex-wrap items-center justify-between w-full px-3 mx-auto">
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

            <div className={`fixed inset-0 z-40 bg-black/50 ${sidebarOpen ? "block" : "hidden"}`} />

            {/* Lista del menú que se mostrará o ocultará */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`lg:hidden bg-depsac-greenBanner shadow-lg w-3/4 fixed top-0 right-0 px-3 max-w-xs h-full pt-2 z-50
                    ${sidebarOpen ? 'block' : 'hidden'}`}
            >
                <div className="flex justify-start">
                    <button className="text-white focus:outline-none py-1 px-3 leading-none bg-transparent rounded m-0 text-4xl" onClick={toggleMenu}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>

                <ul className="flex flex-col text-lg text-white">
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

const Header = ({ menu, otherMenus }: HeaderProps) => {
    return (
        <>
            {/* Navbar para pantallas grandes */}
            <NavbarDesktop menu={menu} otherMenus={otherMenus} />

            {/* Navbar para pantallas pequeñas */}
            <NavbarMobile menu={menu} otherMenus={otherMenus} />
        </>
    );
};

export default Header;