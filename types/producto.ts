export interface Productos {
    idProducto: number;
    categoria: string;
    subCategoria: string;
    marca: string;
    nombre: string;
    precio: number;
    color: string
    decripcion: string;
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