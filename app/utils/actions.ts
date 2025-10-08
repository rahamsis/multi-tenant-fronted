'use server';

import { Menu, OtherMenu } from "@/types/menu";
import { Marca } from "@/types/producto";
import { WebSite } from "@/types/webSite";

/* eslint-disable */

export async function getMenus(tenant: string) {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/backendApi/menus`, {
            method: 'GET',
            cache: "no-store", // evita cache estático de Next.js
            headers: {
                'Content-Type': 'application/json',
                "X-Tenant-ID": tenant,
                'accept': '/'
            },
        });

        const data = await response.json();

        // return data.map((item: any) => ({
        //     idMenu: String(item.idMenu),
        //     urlMenu: String(item.urlMenu),
        //     titulo: String(item.titulo),
        //     idCategoria: String(item.idCategoria),
        //     userId: String(item.userId),
        //     orden: Number(item.orden),
        //     estado: Boolean(item.estado),
        //     subMenu: item.subMenu ? item.subMenu.split(",") : [],
        // }));

        const menus: Menu[] = data.menus.map((item: any) => ({
            idMenu: String(item.idMenu),
            urlMenu: String(item.urlMenu),
            titulo: String(item.titulo),
            idCategoria: String(item.idCategoria),
            userId: String(item.userId),
            orden: Number(item.orden),
            estado: Boolean(item.estado),
            subMenu: item.subMenu ? item.subMenu.split(",") : [],
        }));

        const categorias: OtherMenu[] = data.categorias.map((item: any) => ({
            idCategoria: String(item.idCategoria),
            categoria: String(item.categoria),
            activo: Boolean(item.activo),
            subMenu: item.subMenu ? item.subMenu.split(",") : [],
        }));

        return { menus, categorias };
    } catch (error) {
        console.error('Error cargando menús:', error);
        throw new Error("Error cargando menús");
    }
}

export async function getWebSite(tenant: string) {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/get-website`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "X-Tenant-ID": tenant,
                "accept": "application/json"
            },
            next: { revalidate: 0 }
        });

        const data = await response.json();

        return data.map((row: WebSite) => ({
            idEmpresa: row.idEmpresa,
            nombre: row.nombre,
            telefonoPrincipal: row.telefonoPrincipal,
            telefonoSecundario: row.telefonoSecundario,
            direccionPrincipal: row.direccionPrincipal,
            direccionSecundaria: row.direccionSecundaria,
            correo: row.correo,
            logo: row.logo
        }));
    } catch (error) {
        console.error("Error al traer los datos de la compañia", error);
        throw new Error("Error al traer los datos de la compañia")
    }
}

export async function getFeaturesProduct(tenant: string, feature: number) {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/backendApi/features-products?feature=${feature}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "X-Tenant-ID": tenant,
                    Accept: "application/json",
                },
                next: { revalidate: 0 }
            });

        const data = await response.json();

        return data.map((row: any) => ({
            idProducto: row.idProducto,
            idCategoria: row.idCategoria,
            categoria: row.categoria,
            idSubCategoria: row.idSubCategoria,
            subCategoria: row.subCategoria,
            idMarca: row.idMarca,
            marca: row.marca,
            nombre: row.nombre,
            precio: row.precio,
            idColor: row.idColor,
            color: row.color,
            descripcion: row.descripcion,
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

export async function getAllProduct(tenant: string) {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/backendApi/all-products`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "X-Tenant-ID": tenant,
                    Accept: "application/json",
                },
                next: { revalidate: 0 }
            });

        const data = await response.json();

        return data.map((row: any) => ({
            idProducto: row.idProducto,
            idCategoria: row.idCategoria,
            categoria: row.categoria,
            idSubCategoria: row.idSubCategoria,
            subCategoria: row.subCategoria,
            idMarca: row.idMarca,
            marca: row.marca,
            nombre: row.nombre,
            precio: row.precio,
            idColor: row.idColor,
            color: row.color,
            descripcion: row.descripcion,
            destacado: row.destacado,
            nuevo: row.nuevo,
            masVendido: row.masVendido,
            activo: row.activo,
            fotos: row.fotosAdicionales?.split(',') ?? []
        }));
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        throw new Error("Error al obtener todos los productos");
    }
}

export async function getProductByCategory(tenant: string, category: string, subCategory: string | null) {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/backendApi/product-by-category?category=${category}&subcategory=${subCategory}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "X-Tenant-ID": tenant,
                'accept': '/'
            },
            next: { revalidate: 0 }
        });

        const data = await response.json();

        return data.map((row: any) => ({
            idProducto: row.idProducto,
            idCategoria: row.idCategoria,
            categoria: row.categoria,
            idSubCategoria: row.idSubCategoria,
            subCategoria: row.subCategoria,
            idMarca: row.idMarca,
            marca: row.marca,
            nombre: row.nombre,
            precio: row.precio,
            idColor: row.idColor,
            color: row.color,
            descripcion: row.descripcion,
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
                "X-Tenant-ID": "importonyperu",
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

export async function getPortadaCatalogs() {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/catalogos/all-covers-catalogos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "X-Tenant-ID": "importonyperu",
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

export async function getAllBrands(tenant: string) {
    try {
        const response = await fetch(`${process.env.APP_BACK_END}/backendApi/all-brands`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "X-Tenant-ID": tenant,
                    Accept: "application/json",
                },
                next: { revalidate: 0 }
            });

        const data = await response.json();
        return data.map((row: Marca) => ({
            idMarca: row.idMarca,
            marca: row.marca,
            urlFoto: row.urlFoto,
            activo: row.activo
        }));
    } catch (error) {
        console.error('Error al obtener todas las marcas:', error);
        throw new Error("Error al obtener todas las marcas");
    }
}