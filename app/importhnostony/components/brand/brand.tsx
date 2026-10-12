
"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Tags,
  Package,
  ChevronRight,
} from "lucide-react";

import type { Marca } from "@/types/producto";

interface BrandProps {
  marcas: Marca[];
}

interface BrandItem {
  name: string;
  count: number;
  image: string;
}

const normalizeBrand = (brand: string) =>
  brand.trim().replace(/\s+/g, " ").toLocaleLowerCase("es");

export default function Brand({ marcas }: BrandProps) {
  const brands = useMemo(() => {
    const grouped = new Map<string, BrandItem>();

    marcas
      .filter((marca) => marca.activo && marca.marca?.trim())
      .forEach((marca) => {
        const name = marca.marca ? marca.marca.trim() : "";
        const key = normalizeBrand(name);

        const image =  marca.urlFoto ? marca.urlFoto : "/images/default.";

        const existing = grouped.get(key);

        if (existing) {
          existing.count += 1;

          if (
            existing.image === "/placeholder.svg" &&
            image !== "/placeholder.svg"
          ) {
            existing.image = image;
          }
        } else {
          grouped.set(key, {
            name,
            count: 1,
            image,
          });
        }
      });

    return Array.from(grouped.values()).sort((a, b) =>
      a.name.localeCompare(b.name, "es")
    );
  }, [marcas]);

  return (
    <main className="min-h-screen bg-white">

      {/* ENCABEZADO */}
      <section className="border-b border-gray-100 bg-importhnostony-surface py-9 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* BREADCRUMB */}
          <nav
            aria-label="Ruta de navegación"
            className="mb-4 flex items-center gap-2 text-xs text-gray-500"
          >
            <Link
              href="/"
              className="transition-colors hover:text-importhnostony-primary"
            >
              Inicio
            </Link>

            <ChevronRight size={14} />

            <span className="font-semibold text-importhnostony-primary">
              Marcas
            </span>
          </nav>

          <div className="mb-4 h-1 w-12 rounded-full bg-importhnostony-primary" />

          <h1 className="text-2xl font-extrabold text-importhnostony-dark sm:text-3xl">
            Explora nuestras marcas
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Descubre las marcas disponibles en nuestro catálogo
            de repuestos y accesorios para máquinas textiles
            industriales.
          </p>

        </div>
      </section>

      {/* LISTADO DE MARCAS */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

          <h2 className="flex items-center gap-2 text-lg font-bold text-importhnostony-dark">
            <Tags
              size={21}
              className="text-importhnostony-primary"
            />
            Todas las marcas
          </h2>

          <span className="text-xs text-gray-500 sm:text-sm">
            {brands.length}{" "}
            {brands.length === 1 ? "marca" : "marcas"}
          </span>

        </div>

        {brands.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">

            {brands.map((brand) => (
              <Link
                key={normalizeBrand(brand.name)}
                href={`/productos?marca=${encodeURIComponent(brand.name)}`}
                className="
                  group flex flex-col overflow-hidden
                  rounded-lg border border-gray-200 bg-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-importhnostony-primary
                  hover:shadow-lg
                "
              >

                {/* IMAGEN */}
                <div className="relative aspect-square overflow-hidden bg-importhnostony-surface">

                  <Image
                    src={brand.image}
                    alt={`Productos de la marca ${brand.name}`}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* CONTADOR */}
                  <span className="absolute right-3 top-3 rounded-sm bg-importhnostony-dark px-2.5 py-1 text-[10px] font-semibold text-white">
                    {brand.count}{" "}
                    {brand.count === 1 ? "producto" : "productos"}
                  </span>

                </div>

                {/* INFORMACIÓN */}
                <div className="flex flex-1 flex-col p-3 sm:p-4">

                  <h3 className="text-sm font-bold text-importhnostony-dark transition-colors group-hover:text-importhnostony-primary sm:text-base">
                    {brand.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {brand.count}{" "}
                    {brand.count === 1
                      ? "producto disponible"
                      : "productos disponibles"}
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-4 text-xs font-semibold text-importhnostony-primary sm:text-sm">
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
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-importhnostony-surface px-6 py-12 text-center">

            <Package
              size={44}
              strokeWidth={1.5}
              className="text-gray-400"
            />

            <h3 className="mt-4 font-bold text-importhnostony-dark">
              No hay marcas disponibles
            </h3>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
              Todavía no encontramos marcas con productos activos.
            </p>

          </div>
        )}

      </section>
    </main>
  );
}
