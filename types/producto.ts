export interface Productos {
    idProducto: string;
    idCategoria: string;
    categoria: string;
    idSubCategoria: string | null;
    subCategoria: string | null;
    idMarca: string | null;
    marca: string | null;
    nombre: string;
    precio: number;
    idColor: string | null;
    color: string | null;
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
    titulo: string;
    descripcion: string;
}

export interface Video {
    idVideo: string;
    urlVideo: string;
    titulo: string;
    descripcion: string;
}