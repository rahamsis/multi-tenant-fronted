import * as React from "react";
import { getAllBrands, getMenus, getProductByCategory } from "@/app/utils/actions";
import { headers } from "next/headers";
import Content from "./content";

import { notFound } from "next/navigation";
import { Menu } from "@/types/menu";
import { Categoria } from "@/types/producto";

interface Props {
    params: Promise<{ menu: string[] }>;
}

function Banner({ titulo, subTitulo }: { titulo: string, subTitulo: string }) {
    return (
        <div className="py-5 lg:py-10">
            <div className="mx-auto">
                <div className="w-full px-3 text-slate-800">
                    <div className="relative text-center">
                        <h1 className="text-3xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">
                            {titulo} {subTitulo ?
                                <span className="d-block text-xl text-slate-500">/ {subTitulo}</span> : ""
                            }
                        </h1>
                    </div>
                </div>
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
    const marcas = await getAllBrands(tenant);

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
        <div className="">

            <Banner titulo={categoria || ""} subTitulo={subCategoria || ""} />

            <Content products={products} marcas={marcas} />
        </div>
    );
}