"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from "react";

import { Productos } from "@/types/producto";
import { CartItem } from "@/types/cartItem";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Productos, cantidad?: number) => void;
  removeItem: (idProducto: string) => void;
  updateQuantity: (idProducto: string, cantidad: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const STORAGE_KEY = "samar-shopping-cart";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const parsed: unknown = JSON.parse(stored);

        if (Array.isArray(parsed)) {
          setItems(
            parsed.filter(
              (item): item is CartItem =>
                item !== null &&
                typeof item === "object" &&
                typeof item.idProducto === "string" &&
                typeof item.nombre === "string" &&
                typeof item.precio === "number" &&
                Number.isFinite(item.precio) &&
                item.precio >= 0 &&
                typeof item.foto === "string" &&
                Number.isSafeInteger(item.cantidad) &&
                item.cantidad > 0
            )
          );
        }
      }
    } catch (error) {
      console.error("Error al recuperar el carrito:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = (product: Productos, cantidad = 1) => {
    if (!Number.isSafeInteger(cantidad) || cantidad < 1) return;

    setItems((current) => {
      const existing = current.find(
        (item) => item.idProducto === product.idProducto
      );

      if (existing) {
        return current.map((item) =>
          item.idProducto === product.idProducto
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }

      return [
        ...current,
        {
          idProducto: product.idProducto,
          nombre: product.nombre,
          precio: product.precio,
          foto: product.fotos?.[0] || "/placeholder.svg",
          cantidad,
        },
      ];
    });
  };

  const removeItem = (idProducto: string) => {
    setItems((current) =>
      current.filter((item) => item.idProducto !== idProducto)
    );
  };

  const updateQuantity = (
    idProducto: string,
    cantidad: number
  ) => {
    if (!Number.isSafeInteger(cantidad) || cantidad < 1) return;

    setItems((current) =>
      current.map((item) =>
        item.idProducto === idProducto
          ? { ...item, cantidad }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.cantidad, 0),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe utilizarse dentro de CartProvider");
  }

  return context;
}