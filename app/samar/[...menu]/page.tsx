
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import {
    getAllProduct,
    getMenus,
} from "@/app/utils/actions";
import Product from "../components/product/product";

interface Props {
    params: Promise<{
        menu: string[];
    }>;
}

export default async function DinamicPage({ params, }: Props) {
    const { menu } = await params;

    if (!menu?.length || menu.length > 2) {
        notFound();
    }

    // const categoriaUrl = menu?.[0]?.toLowerCase();
    // const subCategoriaUrl = menu?.[1]?.toLowerCase();

    // if (!categoriaUrl || menu.length > 2) {
    //     notFound();
    // }

    const headersList = await headers();
    const host = headersList.get("host") || "";
    const tenant = host.split(".")[0];

    const [menuResponse, products] = await Promise.all([
        getMenus(tenant),
        getAllProduct(tenant),
    ]);

    const selectedMenu = menuResponse.menus.find(
        (item) =>
            item.estado &&
            item.urlMenu.toLowerCase().replace(/\/$/, "") ===
            `/${menu[0].toLowerCase()}`
    );

    if (!selectedMenu?.idCategoria) {
        notFound();
    }

    const productosCategoria = products.filter(
        (product: any) =>
            product.activo &&
            product.idCategoria === selectedMenu.idCategoria &&
            (
                !menu[1] ||
                product.subCategoria?.toLowerCase() ===
                decodeURIComponent(menu[1]).toLowerCase()
            )
    );

    return (
        <Product
            key={menu.join("/")}
            products={productosCategoria}
            titulo={selectedMenu.titulo}
        />
    );
}