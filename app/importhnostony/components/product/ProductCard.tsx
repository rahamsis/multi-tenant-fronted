
"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

import { Productos } from "@/types/producto";
import { useCart } from "@/app/context/CartContext";

interface ProductCardProps {
  product: Productos;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { addItem } = useCart();

  const imageUrl =
    product.fotos?.[0] || "/placeholder.svg";

  const productUrl =
    `/productos/${encodeURIComponent(product.idProducto)}`;

  const formattedPrice = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(product.precio);

  return (
    <article
      className="
        group flex h-full flex-col
        overflow-hidden rounded-lg
        border border-gray-200
        bg-white shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-importhnostony-primary
        hover:shadow-lg
      "
    >
      {/* IMAGEN */}
      <div className="relative aspect-square overflow-hidden bg-importhnostony-surface">

        <Link
          href={productUrl}
          className="block h-full w-full"
          aria-label={`Ver ${product.nombre}`}
        >
          <Image
            src={imageUrl}
            alt={product.nombre}
            fill
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
            className="
              object-contain p-4
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </Link>

        {/* ETIQUETAS */}
        <div className="pointer-events-none absolute left-2 top-2 flex flex-col items-start gap-1.5 sm:left-3 sm:top-3">

          {product.nuevo && (
            <span className="rounded-sm bg-importhnostony-dark px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              Nuevo
            </span>
          )}

          {product.destacado && (
            <span className="rounded-sm bg-importhnostony-primary px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              Destacado
            </span>
          )}

        </div>

        {/* FAVORITOS */}
        <button
          type="button"
          aria-label={
            isFavorite
              ? "Quitar de favoritos"
              : "Agregar a favoritos"
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((prev) => !prev)}
          className="
            absolute right-2 top-2
            flex h-9 w-9 items-center justify-center
            rounded-full bg-white
            text-importhnostony-dark
            shadow-sm transition-all duration-200
            hover:scale-110
            hover:text-importhnostony-primary
            sm:right-3 sm:top-3
          "
        >
          <Heart
            size={19}
            className={
              isFavorite
                ? "fill-importhnostony-primary text-importhnostony-primary"
                : "text-gray-600"
            }
          />
        </button>

      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">

        {/* MARCA */}
        {product.marca && (
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-importhnostony-primary">
            {product.marca}
          </p>
        )}

        {/* NOMBRE */}
        <Link
          href={productUrl}
          className="group/title"
        >
          <h3
            className="
              line-clamp-2 min-h-10
              text-sm font-semibold leading-5
              text-importhnostony-dark
              transition-colors
              group-hover/title:text-importhnostony-primary
              sm:text-base sm:leading-6
            "
          >
            {product.nombre}
          </h3>
        </Link>

        {/* DESCRIPCIÓN - SOLO DESKTOP */}
        {product.descripcion && (
          <p className="mt-2 hidden line-clamp-2 text-xs leading-5 text-gray-500 lg:block">
            {product.descripcion}
          </p>
        )}

        {/* PRECIO Y BOTÓN */}
        <div className="mt-auto pt-4">

          <p className="mb-3 text-lg font-extrabold text-importhnostony-dark sm:text-xl">
            {formattedPrice}
          </p>

          <button
            type="button"
            onClick={() => addItem(product, 1)}
            className="
              flex min-h-10 w-full
              items-center justify-center gap-2
              rounded-md
              bg-importhnostony-dark
              px-2 py-2.5
              text-xs font-semibold text-white
              transition-colors duration-200
              hover:bg-importhnostony-primary
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-importhnostony-primary
              sm:text-sm
            "
          >
            <ShoppingCart
              size={17}
              className="shrink-0"
            />

            <span>Agregar al carrito</span>
          </button>

        </div>

      </div>
    </article>
  );
}
