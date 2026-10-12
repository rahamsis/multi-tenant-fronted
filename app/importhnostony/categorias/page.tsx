
import type { Metadata } from "next";

import Category from "../components/category/category";

// Reutiliza aquí el servicio que ya utilizas en /productos
import { getAllProduct } from "@/app/utils/actions";

export const metadata: Metadata = {
  title: "Categorías | IMPORTHNOSTONY",
  description:
    "Explora nuestras categorías de repuestos para máquinas textiles industriales.",
};

export default async function CategoriasPage() {
  const products = await getAllProduct("importhnostony");

  return <Category products={products} />;
}
