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

    const images =
        product.fotos?.filter(Boolean).length > 0
            ? product.fotos.filter(Boolean)
            : ["/placeholder.svg"];

    const { addItem } = useCart();

    return (
        <section className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-samar-acento">
                    Inicio
                </Link>

                <ChevronRight className="h-4 w-4" />

                <span>{product.categoria}</span>

                <ChevronRight className="h-4 w-4" />

                <span className="font-medium text-samar-textoprincipal">
                    {product.nombre}
                </span>
            </nav>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {/* Galería */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-samar-bordes bg-white">
                        <Image
                            src={images[selectedImage]}
                            alt={product.nombre}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain p-6"
                        />

                        {product.nuevo && (
                            <span className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white">
                                Nuevo
                            </span>
                        )}
                    </div>

                    {/* Miniaturas */}
                    {images.length > 1 && (
                        <div className="grid grid-cols-5 gap-3">
                            {images.map((image, index) => (
                                <button
                                    key={`${image}-${index}`}
                                    type="button"
                                    onClick={() => setSelectedImage(index)}
                                    aria-label={`Ver imagen ${index + 1}`}
                                    className={`relative aspect-square overflow-hidden rounded-lg border-2 bg-white ${selectedImage === index
                                        ? "border-samar-acento"
                                        : "border-gray-200"
                                        }`}
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

                {/* Información */}
                <div className="flex flex-col">
                    {product.marca && (
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                            {product.marca}
                        </p>
                    )}

                    <h1 className="text-3xl font-bold text-samar-textoprincipal md:text-4xl">
                        {product.nombre}
                    </h1>

                    <p className="mt-5 text-3xl font-bold text-samar-acento">
                        S/ {product.precio.toFixed(2)}
                    </p>

                    {product.descripcion && (
                        <p className="mt-6 whitespace-pre-line leading-7 text-gray-600">
                            {product.descripcion}
                        </p>
                    )}

                    <div className="my-8 border-t border-samar-bordes" />

                    {/* Cantidad */}
                    <div className="mb-6">
                        <p className="mb-3 font-semibold">Cantidad</p>

                        <div className="inline-flex items-center overflow-hidden rounded-lg border border-gray-300">
                            <button
                                type="button"
                                onClick={() =>
                                    setQuantity((current) => Math.max(1, current - 1))
                                }
                                disabled={quantity <= 1}
                                className="p-3 transition hover:bg-gray-100 disabled:opacity-40"
                                aria-label="Disminuir cantidad"
                            >
                                <Minus className="h-4 w-4" />
                            </button>

                            <span className="min-w-12 px-4 text-center font-semibold">
                                {quantity}
                            </span>

                            <button
                                type="button"
                                onClick={() => setQuantity((current) => current + 1)}
                                className="p-3 transition hover:bg-gray-100"
                                aria-label="Aumentar cantidad"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Acciones */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => addItem(product, quantity)}
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-samar-botonprincipal px-5 py-4
                                font-semibold text-white transition hover:opacity-90"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            Agregar al carrito
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsFavorite(!isFavorite)}
                            aria-label="Agregar o quitar de favoritos"
                            aria-pressed={isFavorite}
                            className="rounded-xl border border-samar-bordes p-4 transition hover:bg-gray-50"
                        >
                            <Heart
                                className={`h-5 w-5 ${isFavorite
                                    ? "fill-red-500 text-red-500"
                                    : "text-gray-600"
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Información adicional */}
                    <div className="mt-8 space-y-3 rounded-xl bg-samar-primary p-5 text-sm">
                        <p>
                            <span className="font-semibold">Categoría:</span>{" "}
                            {product.categoria}
                        </p>

                        {product.subCategoria && (
                            <p>
                                <span className="font-semibold">Subcategoría:</span>{" "}
                                {product.subCategoria}
                            </p>
                        )}

                        {product.marca && (
                            <p>
                                <span className="font-semibold">Marca:</span>{" "}
                                {product.marca}
                            </p>
                        )}

                        <p>
                            <span className="font-semibold">Código:</span>{" "}
                            {product.idProducto}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}