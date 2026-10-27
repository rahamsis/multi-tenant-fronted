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

  const imageUrl =
    product.fotos?.[0] || "/placeholder.svg";

  const { addItem } = useCart();

  return (
    <article
      className="group flex h-full flex-col overflow-hidden
      rounded-xl border border-samar-bordes
      bg-samar-primary shadow-sm
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Imagen */}

      <div className="relative overflow-hidden ">
        {/* <div className="relative mb-4"> */}
        <Link href={`/productos/${encodeURIComponent(product.idProducto)}`} className="block">
          <Image
            src={imageUrl}
            alt={product.nombre}
            // fill
            // sizes="(max-width: 640px) 100vw,
            //        (max-width: 1280px) 50vw,
            //        33vw"
            className="w-full h-64 object-cover rounded-3xl p-4 transition-transform
          duration-300 group-hover:scale-105"
            width={500}
            height={500}
            priority={true}
          />
        </Link>

        {/* Etiquetas */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.nuevo && (
            <span
              className="rounded-full bg-green-600
              px-3 py-1 text-xs font-semibold text-white"
            >
              Nuevo
            </span>
          )}

          {product.destacado && (
            <span
              className="rounded-full bg-samar-botonprincipal
              px-3 py-1 text-xs font-semibold text-white"
            >
              Destacado
            </span>
          )}
        </div>

        {/* Favoritos */}
        <button
          type="button"
          aria-label={
            isFavorite
              ? "Quitar de favoritos"
              : "Agregar a favoritos"
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-3 top-3 rounded-full
          bg-white p-2 shadow-md transition hover:scale-110"
        >
          <Heart
            className={`h-5 w-5 ${isFavorite
              ? "fill-red-500 text-red-500"
              : "text-gray-600"
              }`}
          />
        </button>
      </div>

      {/* Información */}
      <div className="flex flex-1 flex-col p-4">
        {product.marca && (
          <p className="mb-1 text-xs uppercase tracking-wide text-gray-500">
            {product.marca}
          </p>
        )}

        <Link href={`/producto/${encodeURIComponent(product.idProducto)}`} className="hover:text-samar-acento">
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-samar-textoprincipal">
            {product.nombre}
          </h3>
        </Link>

        {product.descripcion && (
          <p className="mb-4 line-clamp-2 text-sm text-gray-600">
            {product.descripcion}
          </p>
        )}

        <div className="mt-auto">
          <p className="mb-4 text-xl font-bold text-samar-textoprincipal">
            S/ {product.precio.toFixed(2)}
          </p>

          <button
            type="button"
            onClick={() => addItem(product, 1)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-samar-botonprincipal px-4 py-3
              font-medium text-white transition-opacity hover:opacity-90"
          >
            <ShoppingCart className="h-5 w-5" />
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
}