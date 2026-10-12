
import { headers } from "next/headers";
import { getAllProduct } from "@/app/utils/actions";
import Product from "../components/product/product";

interface Props {
  searchParams: Promise<{
    categoria?: string;
    marca?: string;
  }>;
}

export default async function ProductosPage({
  searchParams,
}: Props) {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const tenant = host.split(".")[0];

  const products = await getAllProduct(tenant);

  const activeProducts = products.filter(
    (product: any) => product.activo
  );

  // Obtener categoría desde la URL
  const { categoria } = await searchParams;
  const { marca } = await searchParams;

  return (
    <Product
      key={categoria ?? "todos"}
      products={activeProducts}
      titulo={
        categoria
          ? `Productos de ${categoria}`
          : "Todos nuestros productos"
      }
      categoriaInicial={categoria ?? ""}
      marcaInicial={marca ?? ""}
    />
  );
}
