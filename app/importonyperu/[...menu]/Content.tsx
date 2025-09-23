"use client";

/* eslint-disable */

import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/sidebar";
import Dropdown from "../components/dropDown/dropDown";
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
        <div className="lg:flex w-full lg:pt-6 pt-4 gap-6">
            {/* Sidebar de Categorías */}
            <div className="lg:w-1/5 hidden lg:flex lg:relative">
                <Sidebar
                    products={products}
                    selectedFilters={selectedFilters}
                    onFiltersChange={handleFiltersChange}
                    filteredProducts={productsFiltered}
                />
            </div>

            <div className={`lg:w-4/5 flex flex-col ${filterVisible ? "hidden lg:flex" : "block"}`}>
                <Product
                    products={products}
                    filteredProducts={productsFiltered}
                    setFilterVisible={setFilterVisible}
                />
            </div>

            {/* Menu de filtros solo para móviles */}
            <div className={`w-full flex flex-col gap-4 ${filterVisible ? "block lg:hidden" : "hidden"}`}>
                <div className="w-full">
                    <Dropdown
                        isVisible={filterVisible}
                        products={products}
                        selectedFilters={selectedFilters}
                        onFiltersChange={handleFiltersChange}
                        filteredProducts={productsFiltered}
                        onClose={() => setFilterVisible(false)}
                    />
                </div>
            </div>
        </div>
    );
}
