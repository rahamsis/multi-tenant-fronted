
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  PackageSearch,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Sidebar, {
  initialFilters,
  type ProductFilters,
} from "@/components/importhnostony/sidebar/Sidebar";

import type { Productos } from "@/types/producto";
import ProductCard from "./ProductCard";

const normalizeCategory = (category: string) =>
  category
    .trim()
    .replace(/\s+/g, " ")
    .toLocaleLowerCase("es");

const normalizeBrand = (brand: string) =>
  brand.trim().replace(/\s+/g, " ").toLocaleLowerCase("es");

interface Props {
  products: Productos[];
  titulo: string;
  categoriaInicial?: string;
  marcaInicial?: string;
}

export default function Product({ products, titulo, categoriaInicial = "", marcaInicial = "" }: Props) {
  const normalizedInitialCategory = categoriaInicial.trim();
  const [filters, setFilters] = useState<ProductFilters>(() => ({
    ...initialFilters,
    categorias: categoriaInicial.trim()
      ? [categoriaInicial.trim()]
      : [],
    marcas: marcaInicial.trim()
      ? [marcaInicial.trim()]
      : [],
  }));

  const [orden, setOrden] = useState("default");
  const PRODUCTS_PER_PAGE = 12;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilters({
      ...initialFilters,
      categorias: normalizedInitialCategory ? [normalizedInitialCategory] : [],
      marcas: marcaInicial.trim() ? [marcaInicial.trim()] : [],
    });

    setCurrentPage(1);
  }, [normalizedInitialCategory]);

  const activeProducts = useMemo(
    () => products.filter((product) => product.activo),
    [products]
  );

  const filteredProducts = useMemo(() => {
    const selectedCategories = new Set(
      filters.categorias.map(normalizeCategory)
    );

    const selectedBrands = new Set(
      filters.marcas.map(normalizeBrand)
    );

    const result = activeProducts.filter((product) => {
      // CATEGORÍAS
      if (
        selectedCategories.size > 0 &&
        !selectedCategories.has(normalizeCategory(product.categoria ?? ""))
      ) {
        return false;
      }

      // SUBCATEGORÍAS
      if (
        filters.subCategorias.length > 0 &&
        !filters.subCategorias.includes(product.subCategoria ?? "")
      ) {
        return false;
      }

      // MARCAS
      if (
        selectedBrands.size > 0 &&
        !selectedBrands.has(normalizeBrand(product.marca ?? ""))
      ) {
        return false;
      }

      // PRECIO MÍNIMO
      if (
        filters.precioMin !== "" &&
        product.precio < Number(filters.precioMin)
      ) {
        return false;
      }

      // PRECIO MÁXIMO
      if (
        filters.precioMax !== "" &&
        product.precio > Number(filters.precioMax)
      ) {
        return false;
      }

      // PRODUCTOS NUEVOS
      if (filters.soloNuevos && !product.nuevo) {
        return false;
      }

      return true;
    });

    // ORDENAMIENTO
    switch (orden) {
      case "precio-asc":
        return result.sort((a, b) => a.precio - b.precio);

      case "precio-desc":
        return result.sort((a, b) => b.precio - a.precio);

      case "nombre":
        return result.sort((a, b) =>
          a.nombre.localeCompare(b.nombre, "es")
        );

      default:
        return result;
    }
  }, [activeProducts, filters, orden]);

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

    return filteredProducts.slice(
      startIndex,
      startIndex + PRODUCTS_PER_PAGE
    );
  }, [filteredProducts, currentPage]);

  // Regresar a la primera página al cambiar filtros u orden
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, orden]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  const startProduct =
    filteredProducts.length === 0
      ? 0
      : (currentPage - 1) * PRODUCTS_PER_PAGE + 1;

  const endProduct = Math.min(
    currentPage * PRODUCTS_PER_PAGE,
    filteredProducts.length
  );

  const resetFilters = () => {
    setFilters({
      ...initialFilters,
      categorias: [],
      subCategorias: [],
      marcas: [],
    });

    setOrden("default");
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ENCABEZADO */}
        <div className="mb-7 border-b border-gray-200 pb-5">

          <div className="mb-3 h-1 w-12 rounded-full bg-importhnostony-primary" />

          <h1 className="text-2xl font-extrabold text-importhnostony-dark sm:text-3xl">
            {titulo}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Encuentra repuestos y accesorios para tus
            máquinas textiles industriales.
          </p>

        </div>

        {/* CONTENIDO */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">

          {/* SIDEBAR */}
          <Sidebar
            products={activeProducts}
            filters={filters}
            onFiltersChange={setFilters}
          />

          {/* LISTADO */}
          <div className="min-w-0 flex-1">

            {/* RESULTADOS Y ORDENAMIENTO */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">

              <p className="text-sm text-gray-600">
                <span className="font-bold text-importhnostony-dark">
                  {filteredProducts.length}
                </span>
                {" "}productos encontrados
              </p>

              <div className="flex items-center gap-2">

                <label
                  htmlFor="orden-productos"
                  className="hidden text-xs text-gray-500 sm:block"
                >
                  Ordenar por:
                </label>

                <select
                  id="orden-productos"
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                  className="
                    max-w-full rounded-md
                    border border-gray-200
                    bg-white px-3 py-2.5
                    text-xs text-importhnostony-dark
                    outline-none
                    focus:border-importhnostony-primary
                    sm:text-sm
                  "
                >
                  <option value="default">
                    Orden predeterminado
                  </option>

                  <option value="precio-asc">
                    Menor precio
                  </option>

                  <option value="precio-desc">
                    Mayor precio
                  </option>

                  <option value="nombre">
                    Nombre A-Z
                  </option>
                </select>

              </div>
            </div>

            {/* TARJETAS */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">

                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.idProducto}
                    product={product}
                  />
                ))}

              </div>
            ) : (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-importhnostony-surface px-5 py-12 text-center">

                <PackageSearch
                  size={46}
                  strokeWidth={1.5}
                  className="text-gray-400"
                />

                <h3 className="mt-4 text-lg font-bold text-importhnostony-dark">
                  No encontramos productos
                </h3>

                <p className="mt-2 max-w-sm text-sm text-gray-500">
                  No hay productos que coincidan con los
                  filtros seleccionados.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-importhnostony-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                >
                  <RotateCcw size={16} />
                  Limpiar filtros
                </button>

              </div>
            )}

            {/* PAGINACIÓN */}
            {totalPages > 1 && (
              <div className="mt-10 flex flex-col items-center gap-5 border-t border-gray-200 pt-6">

                {/* CONTADOR */}
                <p className="text-center text-xs text-gray-500 sm:text-sm">
                  Mostrando{" "}
                  <span className="font-semibold text-importhnostony-dark">
                    {startProduct} - {endProduct}
                  </span>
                  {" "}de{" "}
                  <span className="font-semibold text-importhnostony-dark">
                    {filteredProducts.length}
                  </span>
                  {" "}productos
                </p>

                {/* BOTONES */}
                <nav
                  aria-label="Paginación de productos"
                  className="flex flex-wrap items-center justify-center gap-1.5"
                >

                  {/* ANTERIOR */}
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Página anterior"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-importhnostony-dark transition-colors hover:border-importhnostony-primary hover:text-importhnostony-primary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {/* NÚMEROS DE PÁGINA */}
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  )
                    .filter(
                      (page) =>
                        page === 1 ||
                        page === totalPages ||
                        Math.abs(page - currentPage) <= 1
                    )
                    .reduce<(number | "ellipsis")[]>(
                      (acc, page, index, pages) => {
                        if (index > 0 && page - pages[index - 1] > 1) {
                          acc.push("ellipsis");
                        }
                        acc.push(page);
                        return acc;
                      },
                      []
                    )
                    .map((page, index) =>
                      page === "ellipsis" ? (
                        <span
                          key={`ellipsis-${index}`}
                          className="flex h-10 w-6 items-center justify-center text-sm text-gray-400"
                        >
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          type="button"
                          onClick={() => goToPage(page)}
                          aria-label={`Ir a la página ${page}`}
                          aria-current={
                            currentPage === page ? "page" : undefined
                          }
                          className={`flex h-10 min-w-10 items-center justify-center rounded-md border px-2 text-sm font-semibold transition-colors
                            ${currentPage === page
                              ? "border-importhnostony-primary bg-importhnostony-primary text-white"
                              : "border-gray-200 bg-white text-importhnostony-dark hover:border-importhnostony-primary hover:text-importhnostony-primary"
                            }
                          `}
                        >
                          {page}
                        </button>
                      )
                    )}

                  {/* SIGUIENTE */}
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Página siguiente"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-importhnostony-dark transition-colors hover:border-importhnostony-primary hover:text-importhnostony-primary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight size={18} />
                  </button>

                </nav>
              </div>
            )}
          </div>




        </div>
      </div>
    </section>
  );
}
