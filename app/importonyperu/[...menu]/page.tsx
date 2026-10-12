// 'use client';

import * as React from "react";
import { getMenus, getProductByCategory } from "@/app/utils/actions";
import { headers } from "next/headers";
import Content from "./Content";

import { notFound } from "next/navigation";
import { Menu } from "@/types/menu";

import { Metadata } from "next";

interface Props {
    params: Promise<{ menu: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { menu } = await params;

    const categoriaFromParam = menu?.[0];
    const subCategoriaFromParam = menu?.[1];

    const headersList = await headers();
    const host = headersList.get("host") || "";
    const tenant = host.split(".")[0];

    await getMenus(tenant); // opcional: podrías usar esto para validar la categoría

    const categoria = categoriaFromParam
        ? categoriaFromParam.replace(/-/g, " ")
        : "";
    const subCategoria = subCategoriaFromParam
        ? subCategoriaFromParam.replace(/-/g, " ")
        : "";

    const title = subCategoria
        ? `${subCategoria.toUpperCase()} | ${categoria.toUpperCase()}`
        : `${categoria.toUpperCase()} | Importony Perú`;

    const description = subCategoria
        ? `Compra productos de ${subCategoria} en la categoría ${categoria}. Envíos a todo el país con Importony Perú.`
        : `Explora nuestra categoría de ${categoria}. Productos originales, entrega rápida y garantía.`;

    const url = subCategoria
        ? `https://tuweb.com/${categoriaFromParam}/${subCategoriaFromParam}`
        : `https://tuweb.com/${categoriaFromParam}`;

    // 👉 cambia por tus imágenes reales (o dinámicas)
    const imageUrl = `https://tuweb.com/images/${categoriaFromParam}.jpg`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            type: "website",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${categoria} ${subCategoria}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    };
}

function Banner({ titulo, subTitulo }: { titulo: string, subTitulo: string }) {
    return (
        <div className="relative w-full lg:h-full overflow-hidden pt-3 lg:pt-6">
            <div className="bg-importonyperu-Gray w-full lg:py-16 py-8 flex justify-center items-center">
                <label className="flex items-end">
                    <h1 className={`${subTitulo ? "text-base font-semibold text-zinc-400" : "text-2xl font-semibold text-zinc-800"}`}>
                        {titulo.toUpperCase().replace(/-/g, " ")}
                    </h1>
                    {subTitulo &&
                        <h2 className="text-xl lg:text-2xl font-semibold text-zinc-800">/{subTitulo.toUpperCase().replace(/-/g, " ")}</h2>
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
    const categorias = menusFromDb.categorias.map((c) => ({
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