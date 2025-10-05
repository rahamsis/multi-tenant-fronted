"use client";

/* eslint-disable */

import { useState, useEffect, useRef, useMemo } from "react"
import Product from "../components/product/product";
import { Marca, Productos } from "@/types/producto";
import Image from "next/image";

interface MarcasProps {
    marcas: Marca[];
}

const Marcas = ({ marcas }: MarcasProps) => {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(2); // 2 en móvil, 6 en desktop
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Detectar tamaño de pantalla para 2 / 6 visibles
    useEffect(() => {
        const check = () => setVisible(window.innerWidth >= 1024 ? 6 : 2);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // Avance automático cada 5s
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            next();
        }, 3000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [current, visible]);

    const stepPercent = useMemo(() => 100 / visible, [visible]);
    const total = marcas.length;

    const next = () => {
        setCurrent((i) => (i + 1) % (total - visible + 1));
    };
    const prev = () => {
        setCurrent((i) => (i - 1 + (total - visible + 1)) % (total - visible + 1));
    };

    // const goTo = (i: number) => setCurrent(i);

    // Para que cada item ocupe 1/visible del carril
    const itemStyle = { flex: `0 0 ${stepPercent}%` };
    // Trasladar carril: un paso = ancho de un item
    const trackStyle = {
        transform: `translateX(-${current * stepPercent}%)`,
    };

    return (
        <div className="relative w-full py-12">
            <div
                className="relative w-full overflow-hidden group py-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Carril */}
                <div
                    className="flex items-center transition-transform duration-700 ease-in-out"
                    style={trackStyle}
                >
                    {marcas.map((m, idx) => (
                        <div key={idx} style={itemStyle} className="shrink-0">
                            <div className="mx-auto flex h-14 w-32 items-center justify-center">
                                <Image
                                    src={m.urlFoto}
                                    alt={`Marca ${idx + 1}`}
                                    width={140}
                                    height={50}
                                    style={{ height: "auto", width: "auto" }}
                                    className="object-contain h-auto transition duration-300 "
                                    priority={idx < visible}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Flechas (solo desktop + en hover) */}
                {isHovered && (
                    <>
                        <button
                            onClick={() => {
                                prev();
                            }}
                            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-10 h-10 items-center justify-center hover:bg-black/70 transition"
                            aria-label="Anterior"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => {
                                next();
                            }}
                            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-10 h-10 items-center justify-center hover:bg-black/70 transition"
                            aria-label="Siguiente"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

const Products = ({ initialProducts, }: { initialProducts: Productos[]; }) => {
    const [products] = useState<Productos[]>(initialProducts);
    const [productsFiltered, setProductsFiltered] = useState<Productos[]>(initialProducts);
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
    const [filterVisible, setFilterVisible] = useState(false);

    // Se llama cada vez que el Sidebar cambia filtros
    const handleFiltersChange = (filters: Record<string, string[]>) => {
        setSelectedFilters(filters);
    };

    // Filtrar productos según los filtros seleccionados
    useEffect(() => {
        let result = [...products];
        Object.keys(selectedFilters).forEach(attr => {
            const selected = selectedFilters[attr];
            if (selected?.length > 0) {
                result = result.filter(p => selected.includes((p as any)[attr]));
            }
        });
        setProductsFiltered(result);
    }, [selectedFilters, products]);

    return (
        <div className="py-8 lg:py-10">
            <div className="container mx-auto">
                {products && products.length > 0 ? (
                    <div className={`grid grid-cols-1 lg:grid-cols-5 gap-4`}>
                        <Product
                            products={products}
                            filteredProducts={productsFiltered}
                            setFilterVisible={setFilterVisible}
                        />
                    </div>) : (
                    <div className="w-full text-center pt-20">
                        <p className="">No hay items para mostrar</p>
                    </div>

                )
                }

            </div>
        </div>
    );
}

export default function Content({ products, marcas }: { products: Productos[], marcas: Marca[] }) {
    return (
        <>

            <Products initialProducts={products} />

            <Marcas marcas={marcas} />
        </>
    );
}
