
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  ChevronRight,
  Truck,
  ShieldCheck,
  Headset,
  Package,
  Check,
} from "lucide-react";

import { Productos } from "@/types/producto";
import { useCart } from "@/app/context/CartContext";

interface ProductDetailProps {
  product: Productos;
}

export default function ProductDetail({
  product,
}: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addItem } = useCart();

  const images =
    product.fotos?.filter(Boolean).length > 0
      ? product.fotos.filter(Boolean)
      : ["/placeholder.svg"];

  const formattedPrice = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(product.precio);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToCart(true);
  };

  return (
    <section className="min-h-screen bg-white pb-12">

      {/* BREADCRUMB */}
      <div className="border-b border-gray-100 bg-importhnostony-surface">
        <nav
          aria-label="Ruta de navegación"
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-xs text-gray-500 sm:px-6 sm:text-sm lg:px-8"
        >
          <Link
            href="/"
            className="transition-colors hover:text-importhnostony-primary"
          >
            Inicio
          </Link>

          <ChevronRight size={14} />

          <Link
            href="/productos"
            className="transition-colors hover:text-importhnostony-primary"
          >
            Productos
          </Link>

          <ChevronRight size={14} />

          <span className="text-importhnostony-dark">
            {product.categoria}
          </span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* GALERÍA */}
          <div className="space-y-3">

            {/* IMAGEN PRINCIPAL */}
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-importhnostony-surface">

              <Image
                src={images[selectedImage]}
                alt={product.nombre}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-contain p-6 sm:p-10"
              />

              {/* ETIQUETAS */}
              <div className="absolute left-4 top-4 flex flex-col items-start gap-2">

                {product.nuevo && (
                  <span className="rounded-sm bg-importhnostony-dark px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Nuevo
                  </span>
                )}

                {product.destacado && (
                  <span className="rounded-sm bg-importhnostony-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Destacado
                  </span>
                )}

              </div>
            </div>

            {/* MINIATURAS */}
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Ver imagen ${index + 1}`}
                    aria-pressed={selectedImage === index}
                    className={`
                      relative aspect-square overflow-hidden
                      rounded-md border-2 bg-importhnostony-surface
                      transition-colors
                      ${
                        selectedImage === index
                          ? "border-importhnostony-primary"
                          : "border-gray-200 hover:border-gray-400"
                      }
                    `}
                  >
                    <Image
                      src={image}
                      alt={`${product.nombre} - Imagen ${index + 1}`}
                      fill
                      sizes="100px"
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* INFORMACIÓN */}
          <div className="flex flex-col">

            {/* MARCA */}
            {product.marca && (
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-importhnostony-primary">
                {product.marca}
              </p>
            )}

            {/* NOMBRE */}
            <h1 className="text-2xl font-extrabold leading-tight text-importhnostony-dark sm:text-3xl lg:text-4xl">
              {product.nombre}
            </h1>

            {/* CÓDIGO */}
            <p className="mt-3 text-xs text-gray-500">
              Código: {product.idProducto}
            </p>

            {/* PRECIO */}
            <div className="mt-6 border-b border-gray-200 pb-6">
              <p className="mb-1 text-xs font-medium text-gray-500">
                Precio
              </p>

              <p className="text-3xl font-extrabold text-importhnostony-dark sm:text-4xl">
                {formattedPrice}
              </p>
            </div>

            {/* DESCRIPCIÓN */}
            {product.descripcion && (
              <div className="mt-6">
                <h2 className="mb-3 text-sm font-bold text-importhnostony-dark">
                  Descripción
                </h2>

                <p className="whitespace-pre-line text-sm leading-7 text-gray-600">
                  {product.descripcion}
                </p>
              </div>
            )}

            {/* CANTIDAD */}
            <div className="mt-7">

              <p className="mb-3 text-sm font-bold text-importhnostony-dark">
                Cantidad
              </p>

              <div className="inline-flex h-11 items-center overflow-hidden rounded-md border border-gray-200">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  disabled={quantity <= 1}
                  aria-label="Disminuir cantidad"
                  className="flex h-full w-11 items-center justify-center text-importhnostony-dark transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus size={17} />
                </button>

                <span className="flex h-full min-w-12 items-center justify-center border-x border-gray-200 px-3 text-sm font-bold text-importhnostony-dark">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  aria-label="Aumentar cantidad"
                  className="flex h-full w-11 items-center justify-center text-importhnostony-dark transition-colors hover:bg-gray-100"
                >
                  <Plus size={17} />
                </button>

              </div>
            </div>

            {/* ACCIONES */}
            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={handleAddToCart}
                className="
                  flex min-h-12 flex-1 items-center justify-center gap-2
                  rounded-md bg-importhnostony-dark px-4 py-3
                  text-sm font-semibold text-white
                  transition-colors duration-200
                  hover:bg-importhnostony-primary
                "
              >
                {addedToCart ? (
                  <>
                    <Check size={19} />
                    Agregado al carrito
                  </>
                ) : (
                  <>
                    <ShoppingCart size={19} />
                    Agregar al carrito
                  </>
                )}
              </button>

              {/* FAVORITOS */}
              <button
                type="button"
                onClick={() => setIsFavorite((prev) => !prev)}
                aria-label={
                  isFavorite
                    ? "Quitar de favoritos"
                    : "Agregar a favoritos"
                }
                aria-pressed={isFavorite}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white transition-colors hover:border-importhnostony-primary"
              >
                <Heart
                  size={21}
                  className={
                    isFavorite
                      ? "fill-importhnostony-primary text-importhnostony-primary"
                      : "text-gray-600"
                  }
                />
              </button>

            </div>

            {/* BENEFICIOS */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-y border-gray-200 py-5 sm:grid-cols-3">

              <div className="flex items-center gap-2">
                <Truck
                  size={22}
                  className="shrink-0 text-importhnostony-primary"
                />
                <span className="text-xs font-medium text-gray-600">
                  Envíos a todo el Perú
                </span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={22}
                  className="shrink-0 text-importhnostony-primary"
                />
                <span className="text-xs font-medium text-gray-600">
                  Calidad garantizada
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Headset
                  size={22}
                  className="shrink-0 text-importhnostony-primary"
                />
                <span className="text-xs font-medium text-gray-600">
                  Asesoría técnica
                </span>
              </div>

            </div>

            {/* DETALLES DEL PRODUCTO */}
            <div className="mt-7 rounded-lg border border-gray-200 bg-importhnostony-surface p-5">

              <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-importhnostony-dark">
                <Package
                  size={19}
                  className="text-importhnostony-primary"
                />
                Información del producto
              </h2>

              <div className="space-y-3 text-sm">

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Categoría</span>
                  <span className="text-right font-semibold text-importhnostony-dark">
                    {product.categoria || "Sin categoría"}
                  </span>
                </div>

                {product.subCategoria && (
                  <div className="flex justify-between gap-4 border-t border-gray-200 pt-3">
                    <span className="text-gray-500">Subcategoría</span>
                    <span className="text-right font-semibold text-importhnostony-dark">
                      {product.subCategoria}
                    </span>
                  </div>
                )}

                {product.marca && (
                  <div className="flex justify-between gap-4 border-t border-gray-200 pt-3">
                    <span className="text-gray-500">Marca</span>
                    <span className="text-right font-semibold text-importhnostony-dark">
                      {product.marca}
                    </span>
                  </div>
                )}

                <div className="flex justify-between gap-4 border-t border-gray-200 pt-3">
                  <span className="text-gray-500">Código</span>
                  <span className="break-all text-right font-semibold text-importhnostony-dark">
                    {product.idProducto}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
