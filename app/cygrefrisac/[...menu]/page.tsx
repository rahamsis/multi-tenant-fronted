import * as React from "react";
import { getAllBrands, getMenus, getProductByCategory } from "@/app/utils/actions";
import { headers } from "next/headers";
import Content from "./content";

import { notFound } from "next/navigation";
import { Menu } from "@/types/menu";

interface Props {
    params: Promise<{ menu: string[] }>;
}

const toSlug = (value: string) =>
    value.trim().toLowerCase().replace(/\s+/g, "-");

const normalizeMenuPath = (value: string) =>
    `/${value
        .split("/")
        .filter(Boolean)
        .map(toSlug)
        .join("/")}`;

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

    const categorias = menusFromDb.categorias.map((categoria) => ({
        key: `/${toSlug(categoria.categoria)}`,
        nombre: categoria.categoria,
        subMenu: categoria.subMenu ?? [],
    }));

    const menus = menusFromDb.menus.map((menu: Menu) => ({
        key: normalizeMenuPath(menu.urlMenu),
        nombre: menu.urlMenu.replace(/^\/+/, "").replace(/-/g, " "),
        subMenu: menu.subMenu ?? [],
    }));

    const subMenus = [...menus, ...categorias].flatMap((parent) =>
        parent.subMenu.map((subMenu: string) => ({
            key: `${parent.key}/${toSlug(subMenu)}`,
            nombre: subMenu,
        }))
    );

    const topLevelMenus = [...menus, ...categorias];

    const categoriaKey = `/${toSlug(categoriaFromParam ?? "")}`;
    const foundCategoria = topLevelMenus.find((item) => item.key === categoriaKey);
    if (!foundCategoria) {
        notFound();
    }

    let foundSubCategoria: (typeof subMenus)[number] | undefined;
    if (subCategoriaFromParam) {
        const subCategoriaKey =
            `${categoriaKey}/${toSlug(subCategoriaFromParam)}`;
        foundSubCategoria = subMenus.find((item) => item.key === subCategoriaKey);

        if (!foundSubCategoria) {
            notFound();
        }
    }

    const categoria = foundCategoria.nombre.toUpperCase();
    const subCategoria = foundSubCategoria?.nombre.toUpperCase() ?? null;

    const products = await getProductByCategory(tenant, categoria, subCategoria);

    return (
        <div className="">

            <Banner titulo={categoria || ""} subTitulo={subCategoria || ""} />

            <Content products={products} marcas={marcas} />
        </div>
    );
}