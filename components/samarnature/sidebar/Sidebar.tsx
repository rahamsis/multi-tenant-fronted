"use client";

import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";
import { Productos } from "@/types/producto";

export interface ProductFilters {
    subCategorias: string[];
    marcas: string[];
    precioMin: string;
    precioMax: string;
    soloNuevos: boolean;
}

interface SidebarProps {
    products: Productos[];
    filters: ProductFilters;
    onFiltersChange: (filters: ProductFilters) => void;
}

export const initialFilters: ProductFilters = {
    subCategorias: [],
    marcas: [],
    precioMin: "",
    precioMax: "",
    soloNuevos: false,
};

export default function Sidebar({
    products,
    filters,
    onFiltersChange,
}: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const subCategorias = useMemo(
        () =>
            [...new Set(products.map((p) => p.subCategoria))]
                .filter((value): value is string => Boolean(value))
                .sort(),
        [products]
    );

    const marcas = useMemo(
        () =>
            [...new Set(products.map((p) => p.marca))]
                .filter((value): value is string => Boolean(value))
                .sort(),
        [products]
    );

    const toggleFilter = (
        field: "subCategorias" | "marcas",
        value: string
    ) => {
        const current = filters[field];

        onFiltersChange({
            ...filters,
            [field]: current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value],
        });
    };

    const content = (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-samar-textoprincipal">
                    Filtros
                </h2>

                <button
                    type="button"
                    onClick={() => onFiltersChange(initialFilters)}
                    className="text-sm text-samar-acento hover:underline"
                >
                    Limpiar
                </button>
            </div>

            {subCategorias.length > 0 && (
                <div className="space-y-3">
                    <h3 className="font-semibold">Subcategorías</h3>

                    {subCategorias.map((subCategoria) => (
                        <label
                            key={subCategoria}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={filters.subCategorias.includes(subCategoria)}
                                onChange={() =>
                                    toggleFilter("subCategorias", subCategoria)
                                }
                                className="accent-pink-500"
                            />
                            <span className="text-sm">{subCategoria}</span>
                        </label>
                    ))}
                </div>
            )}

            {marcas.length > 0 && (
                <div className="space-y-3">
                    <h3 className="font-semibold">Marcas</h3>

                    {marcas.map((marca) => (
                        <label
                            key={marca}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={filters.marcas.includes(marca)}
                                onChange={() => toggleFilter("marcas", marca)}
                                className="accent-pink-500"
                            />
                            <span className="text-sm">{marca}</span>
                        </label>
                    ))}
                </div>
            )}

            <div className="space-y-3">
                <h3 className="font-semibold">Precio</h3>

                <div className="grid grid-cols-2 gap-2">
                    <input
                        type="number"
                        min="0"
                        placeholder="Mínimo"
                        value={filters.precioMin}
                        onChange={(e) =>
                            onFiltersChange({
                                ...filters,
                                precioMin: e.target.value,
                            })
                        }
                        className="w-full rounded-lg border px-3 py-2 text-sm"
                    />

                    <input
                        type="number"
                        min="0"
                        placeholder="Máximo"
                        value={filters.precioMax}
                        onChange={(e) =>
                            onFiltersChange({
                                ...filters,
                                precioMax: e.target.value,
                            })
                        }
                        className="w-full rounded-lg border px-3 py-2 text-sm"
                    />
                </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={filters.soloNuevos}
                    onChange={(e) =>
                        onFiltersChange({
                            ...filters,
                            soloNuevos: e.target.checked,
                        })
                    }
                    className="accent-pink-500"
                />
                <span className="text-sm font-medium">
                    Solo productos nuevos
                </span>
            </label>
        </div>
    );

    return (
        <>
            {/* Botón móvil */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="lg:hidden flex items-center gap-2 rounded-lg
          bg-samar-botonprincipal px-4 py-2 text-white"
            >
                <Filter className="h-4 w-4" />
                Filtrar productos
            </button>

            {/* Sidebar escritorio */}
            <aside className="hidden lg:block w-64 shrink-0 self-start rounded-xl border border-samar-bordes bg-samar-primary p-5">
                {content}
            </aside>

            {/* Sidebar móvil */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    <button
                        type="button"
                        aria-label="Cerrar filtros"
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/50"
                    />

                    <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-white p-6 shadow-xl">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Cerrar"
                            className="absolute right-4 top-4"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="mt-8">{content}</div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="mt-8 w-full rounded-lg bg-samar-botonprincipal px-4 py-3 text-white"
                        >
                            Ver productos
                        </button>
                    </aside>
                </div>
            )}
        </>
    );
}