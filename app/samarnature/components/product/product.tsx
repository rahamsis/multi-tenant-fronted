"use client";

import { useMemo, useState } from "react";
import Sidebar, {
    initialFilters,
    ProductFilters,
} from "@/components/samarnature/sidebar/Sidebar";
import { Productos } from "@/types/producto";
import ProductCard from "./ProductCard";

interface Props {
    products: Productos[];
    titulo: string;
}

export default function Product({
    products,
    titulo,
}: Props) {
    const [filters, setFilters] =
        useState<ProductFilters>(initialFilters);

    const [orden, setOrden] = useState("default");

    const filteredProducts = useMemo(() => {
        const result = products.filter((product) => {
            if (!product.activo) return false;

            if (
                filters.subCategorias.length > 0 &&
                !filters.subCategorias.includes(product.subCategoria ?? "")
            ) {
                return false;
            }

            if (
                filters.marcas.length > 0 &&
                !filters.marcas.includes(product.marca ?? "")
            ) {
                return false;
            }

            if (
                filters.precioMin !== "" &&
                product.precio < Number(filters.precioMin)
            ) {
                return false;
            }

            if (
                filters.precioMax !== "" &&
                product.precio > Number(filters.precioMax)
            ) {
                return false;
            }

            if (filters.soloNuevos && !product.nuevo) {
                return false;
            }

            return true;
        });

        switch (orden) {
            case "precio-asc":
                return result.sort((a, b) => a.precio - b.precio);

            case "precio-desc":
                return result.sort((a, b) => b.precio - a.precio);

            case "nombre":
                return result.sort((a, b) =>
                    a.nombre.localeCompare(b.nombre)
                );

            default:
                return result;
        }
    }, [products, filters, orden]);

    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold text-samar-textoprincipal">
                {titulo}
            </h1>

            <div className="flex flex-col gap-8 lg:flex-row">
                <Sidebar
                    products={products}
                    filters={filters}
                    onFiltersChange={setFilters}
                />

                <div className="min-w-0 flex-1">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <p className="text-sm text-gray-600">
                            {filteredProducts.length} productos encontrados
                        </p>

                        <select
                            value={orden}
                            onChange={(e) => setOrden(e.target.value)}
                            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm"
                        >
                            <option value="default">Orden predeterminado</option>
                            <option value="precio-asc">Menor precio</option>
                            <option value="precio-desc">Mayor precio</option>
                            <option value="nombre">Nombre A-Z</option>
                        </select>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="rounded-xl border p-10 text-center text-gray-500">
                            No encontramos productos con estos filtros.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.idProducto}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}