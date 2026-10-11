"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function CartButton() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/carrito"
      aria-label={`Ver carrito, ${totalItems} productos`}
      className="relative inline-flex items-center justify-center
        rounded-full p-2 text-samar-textoprincipal
        transition hover:text-samar-acento"
    >
      <ShoppingCart className="h-6 w-6" />

      {totalItems > 0 && (
        <span
          className="absolute -right-1 -top-1 flex h-5 min-w-5
            items-center justify-center rounded-full
            bg-samar-botonprincipal px-1 text-xs font-bold text-white"
        >
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}