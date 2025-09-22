export interface Menu {
    idMenu: string;
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