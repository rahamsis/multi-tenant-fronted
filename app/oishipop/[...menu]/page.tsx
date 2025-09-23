
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ menu: string[] }>;
}

// async function getMenuByUrl(path: string) {
//     // Ejemplo de "menús" en tu DB
//     const menus = [
//         { url: "/productos", titulo: "Productos", contenido: "Aquí están los productos" },
//         { url: "/contacto", titulo: "Contacto", contenido: "Escríbenos un mensaje" },
//     ];

//     return menus.find((menu) => menu.url === path) || null;
// }


export default async function DinamicPage({ params }: Props) {
    const { menu } = await params;

    const categoria = menu?.[0];
    const subCategoria = menu?.[1];

    if (!menu) {
        notFound(); // Si no existe en DB, manda 404
    }

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">{categoria}</h1>
            <p className="mt-4">{subCategoria}</p>
        </main>
    );
}