
"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid2X2 } from "lucide-react";

import type { Productos } from "@/types/producto";

interface CategoriesPageProps {
    products: Productos[];
}

export default function Category({
    products,
}: CategoriesPageProps) {
    const categories = useMemo(() => {
        const activeProducts = products.filter(
            (product) => product.activo && product.categoria?.trim()
        );

        const grouped = new Map<
            string,
            {
                name: string;
                count: number;
                image: string;
            }
        >();

        activeProducts.forEach((product) => {
            const name = product.categoria.trim();
            const key = name.toLocaleLowerCase("es");

            const existing = grouped.get(key);

            if (existing) {
                existing.count += 1;

                if (
                    existing.image === "/placeholder.svg" &&
                    product.fotos?.[0]
                ) {
                    existing.image = product.fotos[0];
                }
            } else {
                grouped.set(key, {
                    name,
                    count: 1,
                    image: product.fotos?.[0] || "/placeholder.svg",
                });
            }
        });

        return Array.from(grouped.values()).sort((a, b) =>
            a.name.localeCompare(b.name, "es")
        );
    }, [products]);

    return (
        <main className="min-h-screen bg-white">

            {/* ENCABEZADO */}
            <section className="border-b border-gray-100 bg-importhnostony-surface py-9 sm:py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <nav
                        aria-label="Ruta de navegación"
                        className="mb-4 flex items-center gap-2 text-xs text-gray-500"
                    >
                        <Link
                            href="/"
                            className="hover:text-importhnostony-primary"
                        >
                            Inicio
                        </Link>

                        <span>/</span>

                        <span className="font-semibold text-importhnostony-primary">
                            Categorías
                        </span>
                    </nav>

                    <div className="mb-4 h-1 w-12 rounded-full bg-importhnostony-primary" />

                    <h1 className="text-2xl font-extrabold text-importhnostony-dark sm:text-3xl">
                        Explora nuestras categorías
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                        Encuentra repuestos y accesorios para máquinas
                        textiles industriales. Explora nuestras categorías
                        y descubre los productos disponibles.
                    </p>

                </div>
            </section>

            {/* LISTADO DE CATEGORÍAS */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                <div className="mb-6 flex items-center justify-between gap-3">
                    <h2 className="flex items-center gap-2 text-lg font-bold text-importhnostony-dark">
                        <Grid2X2
                            size={21}
                            className="text-importhnostony-primary"
                        />
                        Todas las categorías
                    </h2>

                    <span className="text-xs text-gray-500 sm:text-sm">
                        {categories.length} categorías
                    </span>
                </div>

                {categories.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">

                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                href={`/productos?categoria=${encodeURIComponent(category.name)}`}
                                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-importhnostony-primary hover:shadow-lg"
                            >

                                {/* IMAGEN */}
                                <div className="relative aspect-square overflow-hidden bg-importhnostony-surface">

                                    <Image
                                        src={category.image}
                                        alt={`Repuestos de ${category.name}`}
                                        fill
                                        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                                        className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                                    />

                                </div>

                                {/* INFORMACIÓN */}
                                <div className="flex flex-1 flex-col p-3 sm:p-4">

                                    <h3 className="text-sm font-bold text-importhnostony-dark transition-colors group-hover:text-importhnostony-primary sm:text-base">
                                        {category.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        {category.count}{" "}
                                        {category.count === 1
                                            ? "producto disponible"
                                            : "productos disponibles"}
                                    </p>

                                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-importhnostony-primary sm:text-sm">
                                        Ver productos
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </div>

                                </div>
                            </Link>
                        ))}

                    </div>
                ) : (
                    <div className="rounded-lg border border-gray-200 bg-importhnostony-surface px-6 py-14 text-center">
                        <h3 className="font-bold text-importhnostony-dark">
                            No hay categorías disponibles
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Todavía no encontramos categorías con productos activos.
                        </p>
                    </div>
                )}

            </section>
        </main>
    );
}
