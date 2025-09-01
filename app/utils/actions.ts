'use server';

/* eslint-disable */

export async function getFeaturesProduct(feature: number) {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/backendApi/features-products?feature=${feature}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': '/'
            },
            next: { revalidate: 0 }
        });

        const data = await response.json();

        return data.map((row:any) =>({
            idProducto: row.idProducto,
            categoria: row.categoria,
            subCategoria: row.subCategoria,
            marca: row.marca,
            nombre: row.nombre,
            precio: row.precio,
            color: row.color,
            descripcion: row.descripcion,
            imagen: row.imagen,
            destacado: row.destacado,
            nuevo: row.nuevo,
            masVendido: row.masVendido,
            activo: row.activo,
            fotos: row.fotosAdicionales?.split(',') ?? []
        }));
    } catch (error) {
        console.error('Error al obtener los productos destacados o nuevos o más vendidos:', error);
        throw new Error("Error al obtener los productos destacados o nuevos o más vendidos");
    }
}

export async function getProductByCategory(category: string) {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/backendApi/product-by-category?category=${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': '/'
            },
            next: { revalidate: 0 }
        });

        const data = await response.json();

        return data.map((row:any) =>({
            idProducto: row.idProducto,
            categoria: row.categoria,
            subCategoria: row.subCategoria,
            marca: row.marca,
            nombre: row.nombre,
            precio: row.precio,
            color: row.color,
            descripcion: row.descripcion,
            imagen: row.imagen,
            destacado: row.destacado,
            nuevo: row.nuevo,
            masVendido: row.masVendido,
            activo: row.activo,
            fotos: row.fotosAdicionales?.split(',') ?? []
        }));
    } catch (error) {
        console.error('Error al obtener los productos por categoria:', error);
        throw new Error("Error al obtener los productos por categoria");
    }
}

export async function getCatalogs() {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/catalogos/all-catalogos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': '/'
            },
            next: { revalidate: 0 }
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error al obtener los catalogos:', error);
        throw new Error("Error al obtener los catalogos");
    }
}