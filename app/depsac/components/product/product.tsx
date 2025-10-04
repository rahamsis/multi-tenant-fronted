'use client';

import { useState, useEffect, } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ModalDetailProduct } from "../modal/detailProducts";

interface Productos {
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

interface ProductProps {
    products: Productos[];
    filteredProducts: Productos[];

    setFilterVisible: (visible: boolean) => void;
}

const Product = ({ products, filteredProducts, setFilterVisible }: ProductProps) => {
    const router = useRouter();

    const [productsFiltered, setProductsFiltered] = useState<Productos[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showDetailProduct, setShowDetailProduct] = useState<Productos | null>(null)

    const productsPerPage = 12;

    // paginación
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = productsFiltered.slice(startIndex, endIndex);
    const totalPages = Math.ceil(productsFiltered.length / productsPerPage);

    function goToContact() {
        router.push("/contact#formulario");
    }

    // inicializamos el componente 
    useEffect(() => {
        setProductsFiltered(filteredProducts.length ? filteredProducts : products);
    }, [products, filteredProducts]);

    return (
        <>
            {/* Lista de productos */}
            {currentProducts.map((product, index) => (
                <div
                    key={product.idProducto}
                    className="flex justify-center mb-0 px-3 mt-0 lg:mt-11"
                >
                    <div className={`flex flex-col justify-between text-center relative  cursor-pointer bottom-0 after:absolute group pb-[50px]`} >
                        {/* fondo */}
                        <span
                            className={`w-full bottom-0 left-0 h-3/4 bg-depsac-products absolute rounded-[10px] transition-all duration-500 ease-in-out origin-bottom scale-y-0 opacity-0
                                lg:group-hover:scale-y-100 lg:group-hover:opacity-100`}
                        ></span>
                        {/* imagen */}
                        <Image
                            alt={"product"}
                            width={300} height={300}
                            src={product.fotos[0]}
                            className={`max-w-full h-auto align-middle mb-[30px] top-0 relative transform transition-all duration-500 ease-in-out
                                lg:group-hover:opacity-100 lg:group-hover:-translate-y-10`}
                            priority
                        />

                        {/* texto */}

                        <h3 className="text-depsac-primary font-semibold text-sm lg:text-base leading-5 mb-2 mt-0 relative w-full">
                            {product.nombre}
                        </h3>

                        {/* botón cotizar y ver más (mobile) */}
                        <div className="flex items-center justify-center gap-3 pt-3">
                            <span
                                onClick={() => setShowDetailProduct(product)}
                                className={`lg:hidden flex w-9 h-9 bg-depsac-secondary lg:bg-depsac-primary bottom-4 text-center items-center rounded-[50%]`}
                            >
                                <Plus className="w-6 h-6 mx-auto text-white" />
                            </span>

                            <div className="text-center relative">
                                <Link
                                    href="/contact"
                                    onClick={goToContact}
                                    className="font-extrabold text-sm lg:text-base py-3 px-4 lg:px-[30px] rounded-[30px] text-depsac-fondo_claro bg-depsac-primary border-depsac-primary"
                                >
                                    Cotizar
                                </Link>
                            </div>

                        </div>

                        {/* boton plus */}
                        <span
                            onClick={() => setShowDetailProduct(product)}
                            className={`flex absolute w-9 h-9 left-[46%] bg-depsac-primary bottom-4 mb-[-17.5px] text-center items-center rounded-[50%] transition-depsac-products opacity-0 duration-500
                                lg:group-hover:opacity-100 lg:group-hover:translate-y-1/2 `}
                        >

                            <Plus className="w-6 h-6 mx-auto text-white" />


                        </span>

                    </div>
                </div>
            ))}

            {/* paginación */}
            {products.length > 11 && (
                <div className="flex flex-row mt-6 justify-between">
                    <div className="text-zinc-600 flex lg:text-base text-xs items-center">
                        <span>Mostrando {productsFiltered.length === 0 ? 0 : startIndex + 1} - {Math.min(endIndex, productsFiltered.length)} de {products.length} producto(s)</span>
                    </div>

                    <div className="flex justify-center gap-1">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            className={`p-1 border border-zinc-300 disabled:opacity-50 text-zinc-400 ${currentPage === 1 && "hidden"}`}
                        >
                            <ChevronLeft />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 border border-zinc-300 hover:bg-black hover:text-white font-semibold ${currentPage === i + 1 ? "bg-black text-white border border-black" : "text-zinc-400"}`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            className={`p-1 border border-zinc-300 disabled:opacity-50 hover:bg-black hover:text-white text-zinc-400 ${currentPage === totalPages && "hidden"}`}
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de detalle del producto */}
            {showDetailProduct && (
                <ModalDetailProduct producto={showDetailProduct} onClose={() => setShowDetailProduct(null)} />
            )}
        </>
    );
}

export default Product;