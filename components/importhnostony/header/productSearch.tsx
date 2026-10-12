"use client";

/* eslint-disable */

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Productos } from "@/types/producto";

interface ProductSearchProps {
  products: Productos[];
}

export default function ProductSearch({
  products,
}: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("es");

    if (!search) return [];

    return products
      .filter((product) => {
        if (!product.activo) return false;

        const searchableText = [
          product.nombre,
          product.categoria,
          product.subCategoria,
          product.marca,
        ]
          .filter(Boolean)
          .join(" ")
          .toLocaleLowerCase("es");

        return searchableText.includes(search);
      })
      .slice(0, 6);
  }, [query, products]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = () => {
    setQuery("");
    setIsOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (filteredProducts.length === 0) return;

    const product = filteredProducts[0];

    handleSelect();

    router.push(
      `/producto/${encodeURIComponent(product.idProducto)}`
    );
  };

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} role="search"
        className="order-3 flex w-full items-center overflow-hidden rounded-md border border-importhnostony-border 
      bg-white transition-colors focus-within:border-importhnostony-primary lg:order-none lg:max-w-xl lg:flex-1">
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            aria-label="Limpiar búsqueda"
            className="ml-3 text-gray-400 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Buscar repuestos, marcas, códigos..."
          aria-label="Buscar productos"
          aria-expanded={showDropdown}
          aria-controls="product-search-results"
          autoComplete="off"
          className="h-11 min-w-0 flex-1 bg-transparent px-4 text-sm text-importhnostony-secondary 
            outline-none placeholder:text-importhnostony-muted"
        />

        <button
          type="submit"
          aria-label="Buscar"
          className="flex h-11 w-12 shrink-0 items-center justify-center bg-importhnostony-primary text-white transition-colors hover:bg-importhnostony-primaryhover"
        >
          <Search size={20} />
        </button>
      </form>

      {showDropdown && (
        <div
          id="product-search-results"
          className="absolute left-0 right-0 top-full z-[60]
            mt-2 max-h-[420px] overflow-y-auto
            rounded-xl border border-gray-200
            bg-white shadow-xl"
        >
          {filteredProducts.length > 0 ? (
            <>
              <div className="border-b px-4 py-3">
                <p className="text-xs font-medium text-gray-500">
                  Resultados de búsqueda
                </p>
              </div>

              <ul>
                {filteredProducts.map((product) => (
                  <li key={product.idProducto}>
                    <Link
                      href={`/producto/${encodeURIComponent(
                        product.idProducto
                      )}`}
                      onClick={handleSelect}
                      className="flex items-center gap-3
                        border-b border-gray-100 px-4 py-3
                        transition-colors last:border-b-0
                        hover:bg-gray-50"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-50">
                        <Image
                          src={
                            product.fotos?.[0] ||
                            "/placeholder.svg"
                          }
                          alt={product.nombre}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-800">
                          {product.nombre}
                        </p>

                        <p className="mt-1 truncate text-xs text-gray-500">
                          {product.categoria}
                          {product.marca
                            ? ` · ${product.marca}`
                            : ""}
                        </p>

                        <p className="mt-1 text-sm font-bold text-samar-acento">
                          S/ {product.precio.toFixed(2)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="px-4 py-8 text-center">
              <Search className="mx-auto mb-3 h-8 w-8 text-gray-300" />

              <p className="text-sm font-medium text-gray-700">
                No encontramos productos
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Intenta buscar con otro nombre o categoría.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}