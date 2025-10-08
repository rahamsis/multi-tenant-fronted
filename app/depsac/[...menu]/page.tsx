// 'use client';

import * as React from "react";
import Image from "next/image";
import { getMenus, getProductByCategory } from "@/app/utils/actions";
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
        <div className="bg-depsac-greenBanner pt-[98px] lg:pr-0 x:pb-36 lg:pb-0 lg:mt-[88px]">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
                    <div className="lg:w-[42%] w-full px-3">
                        <div className="relative max-w-md z-[4]">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">Nuestra <br /><span className="d-block">Tienda</span></h1>
                            <p className="text-depsac-paragraph text-sm mb-10 leading-6">
                                ofrecemos piezas cuidadosamente seleccionadas con garantía. Cada artículo es una expresión de calidad y durabilidad respaldada por nuestra promesa de satisfacción.
                            </p>
                            <p className="mb-4">
                                <a href="" className="btn bg-depsac-acento font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] mr-2">Cotizar ahora</a>
                                <a href="#" className="text-depsac-fondo_claro btn border-2 border-depsac-acento font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px]">Explorar</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex relative lg:w-[58%] w-full">
                        <div className="hidden lg:block xs:overflow-x-hidden after:absolute x:after:w-[255px] x:after:h-[217px] lg:after:w-[255px] lg:after:h-[217px] after:bg-depsac-banner-right after:bg-contain after:bg-no-repeat after:right-[-60px] lg:after:right-[0px] lg:after:top-[-20px] x:after:right-[-60px] x:after:top-[-60px] xl:after:right-[0px] 2xl:after:right-[-60px]">
                            <Image
                                src="/depsac/images/productos/copeland-discus.png"
                                alt="image"
                                width={780}
                                height={500}
                                className="x:absolute lg:relative left-0 x:max-w-[780px] xl:max-w-[680px] 2xl:max-w-[780px] lg:max-w-[650px] h-auto align-middle box-border z-[2] x:top-[-100px] lg:top-[-50px] lg:right-[-100px]"
                                priority={true}
                            />
                        </div>

                        <div className="lg:hidden xs:overflow-x-hidden after:absolute xs:after:w-[220px] xs:after:h-[192px] after:bg-depsac-banner-right after:bg-contain after:bg-no-repeat after:right-[-60px] xs:after:right-0 xs:after:top-[60px] xs:mt-20">
                            <Image
                                src="/depsac/images/productos/copeland-discus.png"
                                alt="image"
                                width={300}
                                height={200}
                                className="relative left-0 xs:max-w-[500px] h-full align-middle box-border z-[1] xs:top-[0px] xs:right-[0px]"
                                priority={true}
                            />
                        </div>
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

            <Content initialProducts={products} />
        </div>
    );
}