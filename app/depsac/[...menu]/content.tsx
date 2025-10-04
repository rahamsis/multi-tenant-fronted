"use client";

/* eslint-disable */

import { useState, useEffect } from "react";
// import Sidebar from "../components/sidebar/sidebar";
// import Dropdown from "../components/dropDown/dropDown";
import Product from "../components/product/product";
import { Productos } from "@/types/producto";

export default function Content({
    initialProducts,
}: {
    initialProducts: Productos[];
}) {
    const [products] = useState<Productos[]>(initialProducts);
    const [productsFiltered, setProductsFiltered] = useState<Productos[]>(initialProducts);
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
    const [filterVisible, setFilterVisible] = useState(false);

    // Se llama cada vez que el Sidebar cambia filtros
    const handleFiltersChange = (filters: Record<string, string[]>) => {
        setSelectedFilters(filters);
    };

    // Filtrar productos según los filtros seleccionados
    useEffect(() => {
        let result = [...products];
        Object.keys(selectedFilters).forEach(attr => {
            const selected = selectedFilters[attr];
            if (selected?.length > 0) {
                result = result.filter(p => selected.includes((p as any)[attr]));
            }
        });
        setProductsFiltered(result);
    }, [selectedFilters, products]);

    return (
        <div className="pt-8 lg:pt-28 pb-48">
            <div className="max-w-[1320px] mx-auto px-4">
                {products && products.length > 0 ? (
                    <div className={`px-4 grid grid-cols-2 lg:grid-cols-5 gap-4`}>
                        <Product
                            products={products}
                            filteredProducts={productsFiltered}
                            setFilterVisible={setFilterVisible}
                        />
                    </div>) : (
                    <div className="w-full text-center pt-20">
                        <p className="">No hay items para mostrar</p>
                    </div>

                )
                }

            </div>
        </div>
    );
}
