"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
  } = useCart();

  return (
    <section className="container mx-auto min-h-[60vh] px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold text-samar-textoprincipal">
        Mi carrito
      </h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-5 py-16 text-center">
          <ShoppingBag className="h-16 w-16 text-gray-300" />

          <h2 className="text-xl font-semibold">
            Tu carrito está vacío
          </h2>

          <p className="text-gray-500">
            Explora nuestros productos y agrega tus favoritos.
          </p>

          <Link
            href="/"
            className="rounded-lg bg-samar-botonprincipal px-6 py-3 text-white"
          >
            Seguir comprando
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Productos */}
          <div className="space-y-4 lg:col-span-2">
            {items.map((item) => (
              <article
                key={item.idProducto}
                className="flex flex-col gap-4 rounded-xl
                  border border-samar-bordes p-4 sm:flex-row"
              >
                <Link
                  href={`/producto/${encodeURIComponent(item.idProducto)}`}
                  className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg bg-white"
                >
                  <Image
                    src={item.foto}
                    alt={item.nombre}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between gap-3">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/producto/${encodeURIComponent(item.idProducto)}`}
                        className="font-semibold hover:text-samar-acento"
                      >
                        {item.nombre}
                      </Link>

                      <p className="mt-1 text-sm text-gray-500">
                        S/ {item.precio.toFixed(2)} c/u
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.idProducto)}
                      aria-label={`Eliminar ${item.nombre}`}
                      className="self-start text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center rounded-lg border">
                      <button
                        type="button"
                        disabled={item.cantidad <= 1}
                        onClick={() =>
                          updateQuantity(
                            item.idProducto,
                            item.cantidad - 1
                          )
                        }
                        className="p-2 disabled:opacity-40"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span className="min-w-10 text-center">
                        {item.cantidad}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.idProducto,
                            item.cantidad + 1
                          )
                        }
                        className="p-2"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="font-bold">
                      S/ {(item.precio * item.cantidad).toFixed(2)}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <button
              type="button"
              onClick={clearCart}
              className="text-sm text-red-600 hover:underline"
            >
              Vaciar carrito
            </button>
          </div>

          {/* Resumen */}
          <aside className="h-fit rounded-xl border border-samar-bordes bg-samar-primary p-6">
            <h2 className="mb-6 text-xl font-bold">
              Resumen del pedido
            </h2>

            <div className="flex justify-between border-b pb-4">
              <span>Subtotal</span>
              <span>S/ {totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between py-4">
              <span className="font-bold">Total provisional</span>
              <span className="text-xl font-bold">
                S/ {totalPrice.toFixed(2)}
              </span>
            </div>

            <p className="mb-5 text-xs text-gray-500">
              El envío y otros cargos, si corresponden,
              se calcularán al confirmar el pedido.
            </p>

            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-lg
                bg-samar-botonprincipal px-4 py-3
                font-semibold text-white opacity-60"
            >
              Finalizar compra (próximamente)
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}