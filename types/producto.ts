export interface Productos {
    idProducto: number;
    categoria: string;
    subCategoria: string;
    marca: string;
    nombre: string;
    precio: number;
    color: string
    descripcion: string;
    destacado: boolean;
    nuevo: boolean;
    masVendido: boolean;
    activo: boolean;
    fotos: string[];
}

export interface Categoria {
    idCategoria: string;
    categoria: string;
    activo: boolean;
}

export interface Marca {
    idMarca: string;
    marca: string;
    urlFoto: string;
    activo: boolean;
}

export interface Banner {
    idBanner: string;
    urlBanner: string;
    posicion: string;
}