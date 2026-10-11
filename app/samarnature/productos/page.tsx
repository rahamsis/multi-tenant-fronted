/* eslint-disable */

import { headers } from "next/headers";
import { getAllProduct } from "@/app/utils/actions";
import Product from "../components/product/product";

export default async function ProductosPage() {
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const tenant = host.split(".")[0];

    const products = await getAllProduct(tenant);

    const activeProducts = products.filter(
        (product: any) => product.activo
    );

    return (
        <Product
            products={activeProducts}
            titulo="Todos nuestros productos"
        />
    );
}