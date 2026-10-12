
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

import { Productos } from "@/types/producto";

const normalizeCategory = (category: string) =>
  category
    .trim()
    .replace(/\s+/g, " ")
    .toLocaleLowerCase("es");

export interface ProductFilters {
  categorias: string[];
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
  categorias: [],
  subCategorias: [],
  marcas: [],
  precioMin: "",
  precioMax: "",
  soloNuevos: false,
};

type FilterField = "categorias" | "subCategorias" | "marcas";

export default function Sidebar({
  products,
  filters,
  onFiltersChange,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [expanded, setExpanded] = useState({
    categorias: true,
    subCategorias: true,
    marcas: true,
    precio: true,
  });

  // Opciones disponibles a partir del catálogo
  const categorias = useMemo(
    () => {
      const uniqueCategories = new Map<string, string>();

      products.forEach((product) => {
        const category = product.categoria?.trim();
        if (category) {
          uniqueCategories.set(normalizeCategory(category), category);
        }
      });

      return [...uniqueCategories.values()].sort((a, b) =>
        a.localeCompare(b, "es")
      );
    },
    [products]
  );

  const subCategorias = useMemo(() => {
    const filteredProducts =
      filters.categorias.length === 0
        ? products
        : products.filter((product) =>
          filters.categorias.some(
            (category) =>
              normalizeCategory(category) ===
              normalizeCategory(product.categoria ?? "")
          )
        );

    return [
      ...new Set(
        filteredProducts
          .map((product) => product.subCategoria?.trim())
          .filter((value): value is string => Boolean(value))
      ),
    ].sort((a, b) => a.localeCompare(b, "es"));
  }, [products, filters.categorias]);

  const marcas = useMemo(
    () =>
      [...new Set(products.map((p) => p.marca))]
        .filter((value): value is string => Boolean(value))
        .sort((a, b) => a.localeCompare(b, "es")),
    [products]
  );

  const toggleFilter = (
    field: FilterField,
    value: string
  ) => {
    const current = filters[field];
    const isSelected = field === "categorias"
      ? current.some((item) => normalizeCategory(item) === normalizeCategory(value))
      : current.includes(value);

    onFiltersChange({
      ...filters,
      [field]: isSelected
        ? current.filter((item) =>
          field === "categorias"
            ? normalizeCategory(item) !== normalizeCategory(value)
            : item !== value
        )
        : [...current, value],
    });
  };

  const toggleExpanded = (field: keyof typeof expanded) => {
    setExpanded((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const activeCount =
    filters.categorias.length +
    filters.subCategorias.length +
    filters.marcas.length +
    (filters.precioMin ? 1 : 0) +
    (filters.precioMax ? 1 : 0) +
    (filters.soloNuevos ? 1 : 0);

  // Bloquear scroll al abrir el panel móvil
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const renderFilterGroup = (
    title: string,
    field: FilterField,
    options: string[]
  ) => {
    if (options.length === 0) return null;

    return (
      <div className="border-b border-gray-200 py-4">
        <button
          type="button"
          onClick={() => toggleExpanded(field)}
          aria-expanded={expanded[field]}
          className="flex w-full items-center justify-between text-left"
        >
          <h3 className="text-sm font-bold text-importhnostony-dark">
            {title}
          </h3>

          <ChevronDown
            size={17}
            className={`text-gray-500 transition-transform duration-200 ${expanded[field] ? "rotate-180" : ""
              }`}
          />
        </button>

        {expanded[field] && (
          <div className="mt-4 max-h-48 space-y-3 overflow-y-auto pr-1">
            {options.map((option) => {
              const checked = field === "categorias"
                ? filters[field].some(
                  (category) =>
                    normalizeCategory(category) === normalizeCategory(option)
                )
                : filters[field].includes(option);

              return (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleFilter(field, option)}
                    className="h-4 w-4 cursor-pointer accent-importhnostony-primary"
                  />

                  <span
                    className={`text-sm transition-colors ${checked
                      ? "font-semibold text-importhnostony-primary"
                      : "text-gray-600"
                      }`}
                  >
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderContent = () => (
    <>
      {/* ENCABEZADO */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal
            size={20}
            className="text-importhnostony-primary"
          />

          <h2 className="text-lg font-bold text-importhnostony-dark">
            Filtros
          </h2>

          {activeCount > 0 && (
            <span className="rounded-full bg-importhnostony-primary px-2 py-0.5 text-xs font-semibold text-white">
              {activeCount}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onFiltersChange(initialFilters)}
          disabled={activeCount === 0}
          className="flex items-center gap-1 text-xs font-semibold text-importhnostony-primary hover:underline disabled:cursor-default disabled:opacity-40"
        >
          <RotateCcw size={13} />
          Limpiar
        </button>
      </div>

      {/* CATEGORÍAS */}
      {renderFilterGroup("Categorías", "categorias", categorias)}

      {/* SUBCATEGORÍAS */}
      {renderFilterGroup(
        "Subcategorías",
        "subCategorias",
        subCategorias
      )}

      {/* MARCAS */}
      {renderFilterGroup("Marcas", "marcas", marcas)}

      {/* PRECIO */}
      <div className="border-b border-gray-200 py-4">
        <button
          type="button"
          onClick={() => toggleExpanded("precio")}
          aria-expanded={expanded.precio}
          className="flex w-full items-center justify-between"
        >
          <h3 className="text-sm font-bold text-importhnostony-dark">
            Rango de precio
          </h3>

          <ChevronDown
            size={17}
            className={`text-gray-500 transition-transform ${expanded.precio ? "rotate-180" : ""
              }`}
          />
        </button>

        {expanded.precio && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <label className="mb-1 block text-xs text-gray-500">
                Mínimo (S/)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={filters.precioMin}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    precioMin: e.target.value,
                  })
                }
                className="w-full min-w-0 rounded-md border border-gray-200 px-2 py-2 text-sm text-importhnostony-dark outline-none focus:border-importhnostony-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs text-gray-500">
                Máximo (S/)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={filters.precioMax}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    precioMax: e.target.value,
                  })
                }
                className="w-full min-w-0 rounded-md border border-gray-200 px-2 py-2 text-sm text-importhnostony-dark outline-none focus:border-importhnostony-primary"
              />
            </div>
          </div>
        )}
      </div>

      {/* SOLO NUEVOS */}
      <label className="flex cursor-pointer items-center gap-3 py-4">
        <input
          type="checkbox"
          checked={filters.soloNuevos}
          onChange={(e) =>
            onFiltersChange({
              ...filters,
              soloNuevos: e.target.checked,
            })
          }
          className="h-4 w-4 cursor-pointer accent-importhnostony-primary"
        />

        <span className="text-sm font-medium text-importhnostony-dark">
          Solo productos nuevos
        </span>
      </label>
    </>
  );

  return (
    <>
      {/* BOTÓN MÓVIL */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-md bg-importhnostony-dark px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-importhnostony-primary lg:hidden"
      >
        <SlidersHorizontal size={17} />
        Filtrar productos

        {activeCount > 0 && (
          <span className="rounded-full bg-importhnostony-primary px-2 py-0.5 text-xs">
            {activeCount}
          </span>
        )}
      </button>

      {/* SIDEBAR ESCRITORIO */}
      <aside className="hidden w-64 shrink-0 self-start rounded-lg border border-gray-200 bg-white p-5 shadow-sm lg:block">
        {renderContent()}
      </aside>

      {/* SIDEBAR MÓVIL */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          {/* FONDO */}
          <button
            type="button"
            aria-label="Cerrar filtros"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60"
          />

          {/* PANEL */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Filtros de productos"
            className="absolute left-0 top-0 flex h-dvh w-80 max-w-[85vw] flex-col bg-white shadow-2xl"
          >
            {/* CERRAR */}
            <div className="flex justify-end border-b border-gray-200 px-4 py-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar filtros"
                className="rounded-md p-2 text-importhnostony-dark hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* FILTROS CON SCROLL */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {renderContent()}
            </div>

            {/* BOTÓN FIJO INFERIOR */}
            <div className="border-t border-gray-200 bg-white p-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-md bg-importhnostony-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Ver productos
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
