
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Search,
    UserRound,
    Heart,
    ShoppingCart,
} from "lucide-react";
import ProductSearch from "./productSearch";
import { WebSite } from "@/types/webSite";
import { Menu, OtherMenu } from "@/types/menu";
import { Productos } from "@/types/producto";

interface HeaderProps {
  dataWebsite: WebSite;
  products: Productos[];
}


const HeaderResponsive = ({
    dataWebsite,
    products,
}:HeaderProps) => {
    const [search, setSearch] = useState("");

    // Temporal: conectar posteriormente con CartContext
    const cartCount = 0;


    return (
        <header className="hidden w-full bg-importhnostony-background border-b border-importhnostony-border lg:block">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 lg:flex-nowrap">

                    {/* MARCA */}
                    <Link
                        href="/"
                        className="flex shrink-0 flex-col"
                        aria-label="IMPORTHNOSTONY - Inicio"
                    >
                        <span className="text-xl font-extrabold tracking-tight sm:text-2xl text-importhnostony-secondary">
                            IMPORT
                            <span className="text-importhnostony-primary">HNOSTONY</span>
                        </span>

                        <span className="text-[9px] tracking-widest text-importhnostony-muted sm:text-[10px]">
                            REPUESTOS PARA MÁQUINAS INDUSTRIALES
                        </span>
                    </Link>

                    <ProductSearch products={products} />

                    {/* ICONOS */}
                    <nav
                        aria-label="Accesos de usuario"
                        className="flex shrink-0 items-center gap-4 sm:gap-6"
                    >
                        {/* MI CUENTA */}
                        <Link
                            href="#"
                            aria-label="Mi cuenta"
                            className="group flex flex-col items-center gap-1"
                        >
                            <UserRound
                                size={23}
                                strokeWidth={1.8}
                                className="text-importhnostony-secondary transition-colors group-hover:text-importhnostony-primary"
                            />

                            <span className="hidden text-xs text-importhnostony-secondary group-hover:text-importhnostony-primary sm:block">
                                Mi cuenta
                            </span>
                        </Link>

                        {/* FAVORITOS */}
                        <Link
                            href="#"
                            aria-label="Favoritos"
                            className="group flex flex-col items-center gap-1"
                        >
                            <Heart
                                size={23}
                                strokeWidth={1.8}
                                className="text-importhnostony-secondary transition-colors group-hover:text-importhnostony-primary"
                            />

                            <span className="hidden text-xs text-importhnostony-secondary group-hover:text-importhnostony-primary sm:block">
                                Favoritos
                            </span>
                        </Link>

                        {/* CARRITO */}
                        <Link
                            href="#"
                            aria-label={`Carrito: ${cartCount} productos`}
                            className="group flex flex-col items-center gap-1"
                        >
                            <div className="relative">
                                <ShoppingCart
                                    size={23}
                                    strokeWidth={1.8}
                                    className="text-importhnostony-secondary transition-colors group-hover:text-importhnostony-primary"
                                />

                                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-importhnostony-primary px-1 text-[10px] font-semibold text-white">
                                    {cartCount}
                                </span>
                            </div>

                            <span className="hidden text-xs text-importhnostony-secondary group-hover:text-importhnostony-primary sm:block">
                                Carrito
                            </span>
                        </Link>
                    </nav>

                </div>
            </div>
        </header>
    );
}

const Header = ({
  dataWebsite,
  products,
}: HeaderProps) => {
  return (
    <HeaderResponsive
      dataWebsite={dataWebsite}
      products={products}
    />
  );
};

export default Header;
