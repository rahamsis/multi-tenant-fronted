// 'use client';

import * as React from "react";
import { getMenus, getProductByCategory } from "@/app/utils/actions";
import { headers } from "next/headers";
import Content from "./Content";

import { notFound } from "next/navigation";
import { Menu } from "@/types/menu";
import { Categoria } from "@/types/producto";

interface Props {
    params: Promise<{ menu: string[] }>;
}

function Banner({ titulo, subTitulo }: { titulo: string, subTitulo: string }) {
    return (
        <div className="relative w-full lg:h-full overflow-hidden pt-3 lg:pt-6">
            <div className="bg-importonyperu-Gray w-full lg:py-16 py-8 flex justify-center items-center">
                <label className="flex items-end">
                    <h3 className={`${subTitulo ? "text-base font-semibold text-zinc-400" : "text-2xl font-semibold text-zinc-800"}`}>
                        {titulo.toUpperCase().replace(/-/g, " ")}
                    </h3>
                    {subTitulo &&
                        <h3 className="text-xl lg:text-2xl font-semibold text-zinc-800">/{subTitulo.toUpperCase().replace(/-/g, " ")}</h3>
                    }
                </label>
            </div>
        </div>
    );
}

export default async function DinamicPage({ params }: Props) {
    const { menu } = await params;

    const categoria = menu?.[0];
    const subCategoria = menu?.[1];

    const headersList = await headers();
    const host = headersList.get("host") || "";
    const tenant = host.split(".")[0];

    const menusFromDb = await getMenus(tenant);

    // Creamos un array combinado de objetos normalizados
    const combined = [
        ...menusFromDb.menus.map((m: Menu) => ({ key: m.urlMenu })),
        ...menusFromDb.categorias.map((c: Categoria) => ({ key: "/" + c.categoria.toLowerCase().replace(/\s+/g, "-") }))
    ];

    // const menus = menusFromDb.menus.find((m: Menu) => m.urlMenu === "/" + categoria);
    // Buscar una sola vez
    const found = combined.find(item => item.key === "/" + categoria);

    if (!found) {
        notFound();
    }

    const products = await getProductByCategory(tenant, categoria.toUpperCase().replace(/-/g, " "));

    return (
        <div className="mx-auto justify-between items-center xl:w-8/12 2xl:w-8/12 w-11/12 mb-8">

            <Banner titulo={categoria || ""} subTitulo={subCategoria || ""} />

            <Content initialProducts={products} />
        </div>
    );
}