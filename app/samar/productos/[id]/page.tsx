import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { getAllProduct } from "@/app/utils/actions";
import ProductDetail from "../../components/product/ProductDetail";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductPage({
    params,
}: Props) {
    const { id } = await params;

    const headersList = await headers();
    const host = headersList.get("host") || "";
    const tenant = host.split(".")[0];

    const products = await getAllProduct(tenant);

    const product = products.find(
        (item: any) =>
            item.idProducto === id &&
            item.activo
    );

    if (!product) {
        notFound();
    }

    return <ProductDetail product={product} />;
}