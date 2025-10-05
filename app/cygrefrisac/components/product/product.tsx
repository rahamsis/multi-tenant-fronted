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

  const [productsFiltered, setProductsFiltered] = useState<Productos[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetailProduct, setShowDetailProduct] = useState<Productos | null>(null)

  const productsPerPage = 12;

  // paginación
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = productsFiltered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productsFiltered.length / productsPerPage);

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
          className="flex flex-col justify-between group hover:shadow-lg transition-all duration-[2000ms] h-full"
        >
          <div className="p-4 flex-1 flex flex-col">
            <div className="group relative mb-4 overflow-hidden rounded-lg">
              {/* Imagen principal */}
              <Image
                src={product.fotos[0] || "/placeholder.svg"}
                alt={product.nombre}
                className={`w-full h-64 object-cover transition-transform duration-[2000ms] ease-in-out 
                                      ${product.fotos[1] ? "group-hover:opacity-0" : "group-hover:scale-110"}`}
                width={500}
                height={500}
                priority
              />

              {/* Imagen secundaria solo si existe */}
              {product.fotos[1] && (
                <Image
                  src={product.fotos[1]}
                  alt={`${product.nombre} segunda imagen`}
                  className="absolute inset-0 w-full h-64 object-cover opacity-0 group-hover:opacity-100 transition-all duration-[2000ms] ease-in-out group-hover:scale-110"
                  width={500}
                  height={500}
                />
              )}

              {/* Icono ojo (solo mobile) */}
              <div className="absolute top-2 right-2 z-20 bg-white p-1 rounded-full shadow-md lg:hidden">
                <button
                  onClick={() => setShowDetailProduct(product)}
                  className="text-gray-700">
                  <i className="bi bi-eye"></i>
                </button>
              </div>

              {/* Rectángulo blanco con lupa (solo desktop) */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-0 bg-white 
                  items-center justify-center rounded-md shadow-md
                  overflow-hidden transition-all duration-300 ease-in-out 
                  hidden lg:flex lg:group-hover:h-12"
              >
                <button
                  onClick={() => setShowDetailProduct(product)}
                  className="text-gray-700">
                  <i className="bi bi-search  text-lg"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 pt-0">
            <button className="flex flex-row justify-center items-center w-full gap-2 bg-cygrefrisac-header py-2 rounded-lg text-white">
              <Link href={"/contacto"}>
                <i className="bi bi-pencil-square"></i>
                Cotizar Ahora
              </Link>
            </button>
          </div>
        </div>
      ))}

      {/* paginación */}
      {products.length > 15 && (
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