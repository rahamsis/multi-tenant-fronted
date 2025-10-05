import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Productos {
    idProducto: number;
    categoria: string;
    subCategoria: string;
    marca: string;
    nombre: string;
    precio: number;
    color: string;
    descripcion: string;
    destacado: boolean;
    nuevo: boolean;
    masVendido: boolean;
    activo: boolean;
    fotos: string[];
}

interface ModalDetailProducts {
    producto: Productos;
    onClose: () => void;
}

export const ModalDetailProduct = ({ producto, onClose }: ModalDetailProducts) => {
    const [fotos, setFotos] = useState<string[]>([]);
    const [picture, setPicture] = useState<{ nombre: string, url: string } | null>(null)

    const scrollRef = useRef<HTMLDivElement>(null)

    // Bloquear scroll al abrir modal
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


    useEffect(() => {
        if (!producto) return;

        if (producto.fotos[0]) {
            setPicture({ nombre: producto.nombre, url: producto.fotos[0] });
        }

        const fotosProductos = producto.fotos.filter(Boolean);
        setFotos(fotosProductos);
    }, [producto]);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current
            scrollRef.current.scrollBy({
                left: direction === "left" ? -clientWidth : clientWidth,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white p-6 rounded-lg lg:max-w-xl max-w-lg w-full mx-4 lg:mx-0 shadow-lg overflow-auto max-h-[800px]">
                {/* Botón Cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-black text-white hover:opacity-30 text-xl font-bold"
                >
                    <X />
                </button>

                {/* Contenido del Modal */}
                <div className="m-2">
                    {picture?.url && (
                        <div className="">
                            {/* <div className="grid grid-cols-2 gap-8"> */}
                            <div className="">
                                <div className="flex flex-col items-center">
                                    <div className="px-6 border py-12 border-zinc-300 max-w-[500px] max-h-[500px] flex items-center justify-center">
                                        <Image
                                            src={picture?.url || ""}
                                            alt={picture?.nombre || ""}
                                            width={400}
                                            height={400}
                                            className="object-contain"
                                            priority={true}
                                        />
                                    </div>

                                    {/* Carrusel de previews */}
                                    <div className="relative w-full max-w-2xl my-4">
                                        {/* Flecha izquierda */}
                                        {fotos.length > 3 && <button onClick={() => scroll("left")}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>}

                                        {/* Scroll horizontal */}
                                        <div
                                            ref={scrollRef}
                                            className="flex justify-center gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-10"
                                        >
                                            {fotos.map((foto: string, index: number) => (
                                                <div
                                                    key={index}
                                                    className={`border cursor-pointer flex-shrink-0`}
                                                    onClick={() => setPicture({ nombre: picture.nombre, url: foto })}
                                                >
                                                    <Image
                                                        src={foto}
                                                        alt={foto}
                                                        width={50}
                                                        height={50}
                                                        className={`object-contain py-2 ${foto === picture?.url && "opacity-35"}`}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Flecha derecha */}
                                        {fotos.length > 3 && <button
                                            onClick={() => scroll("right")}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
                                        >
                                            <ChevronRight size={24} />
                                        </button>}
                                    </div>

                                    <div className="text-depsac-gray_dark text-justify text-sm">
                                        {producto.descripcion}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}