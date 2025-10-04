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

    // ✅ Si hay más de 2 niveles => 404
    if (menu.length > 2) {
        notFound();
    }

    const categoriaFromParam = menu?.[0];
    const subCategoriaFromParam = menu?.[1];

    const headersList = await headers();
    const host = headersList.get("host") || "";
    const tenant = host.split(".")[0];

    const menusFromDb = await getMenus(tenant);

    // Normalizamos categorías y subcategorías
    const categorias = menusFromDb.categorias.map((c: Categoria) => ({
        key: "/" + c.categoria.toLowerCase().replace(/\s+/g, "-"),
        nombre: c.categoria.toUpperCase()
    }));

    const menus = menusFromDb.menus.map((m: Menu) => ({
        key: m.urlMenu,
        nombre: m.urlMenu.replace("/", "").toUpperCase()
    }));

    // ✅ Normalizamos submenús
    const subMenus = menusFromDb.menus.flatMap((m: Menu) =>
        (m.subMenu || []).map((s: string) => ({
            key: `${m.urlMenu}/${s.toLowerCase().replace(/\s+/g, "-")}`,
            nombre: s.toUpperCase()
        }))
    );

    // Combinamos en un solo array
    const combined = [...menus, ...categorias, ...subMenus];

    // ✅ Validamos categoría
    const categoriaKey = "/" + categoriaFromParam;
    const foundCategoria = combined.find(item => item.key === categoriaKey);
    if (!foundCategoria) {
        notFound();
    }

    // ✅ Validamos subcategoría si existe
    if (subCategoriaFromParam) {
        const subCategoriaKey = `/${categoriaFromParam}/${subCategoriaFromParam}`;
        const foundSubCategoria = combined.find((item) => item.key === subCategoriaKey);

        if (!foundSubCategoria) {
            notFound();
        }
    }

    const categoria = categoriaFromParam ? categoriaFromParam.toUpperCase().replace(/-/g, " ") : "";
    const subCategoria = subCategoriaFromParam ? subCategoriaFromParam.toUpperCase().replace(/-/g, " ") : null;

    const products = await getProductByCategory(tenant, categoria, subCategoria);

    return (
        <div className="mx-auto justify-between items-center xl:w-8/12 2xl:w-8/12 w-11/12 mb-8">

            <Banner titulo={categoria || ""} subTitulo={subCategoria || ""} />

            <Content initialProducts={products} />
        </div>
    );
}