export interface Menu {
    idMenu: string;
    idCategoria?: string;
    urlMenu: string;
    titulo: string;
    descripcion?: string;
    userId?: string;
    orden: number;
    estado: boolean;
    subMenu: string[];
}

export interface OtherMenu {
    idCategoria: string;
    categoria: string;
    activo: boolean;
    subMenu: string[];
}