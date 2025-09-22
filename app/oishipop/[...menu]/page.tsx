
import { notFound } from "next/navigation";

async function getMenuByUrl(path: string) {
    // Ejemplo de "menús" en tu DB
    const menus = [
        { url: "/productos", titulo: "Productos", contenido: "Aquí están los productos" },
        { url: "/contacto", titulo: "Contacto", contenido: "Escríbenos un mensaje" },
    ];

    return menus.find((menu) => menu.url === path) || null;
}


export default async function DynamicPage({ params }: { params: { menu?: string[] } }) {
    const path = "/" + (params.menu?.join("/") || ""); // "/productos", "/contacto", etc.
    const menu = await getMenuByUrl(path);

    if (!menu) {
        notFound(); // Si no existe en DB, manda 404
    }

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">{menu.titulo}</h1>
            <p className="mt-4">{menu.contenido}</p>
        </main>
    );
}