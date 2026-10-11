'use client'

import Image from "next/image";
import { useState, useEffect, } from "react"
import { useTenant } from "../context/TenantContext";
import { Productos, } from "@/types/producto";
import { getAllProduct, } from "../utils/actions";
import ProductCard from "./components/product/ProductCard";
import Link from "next/link";


function HeroBanner() {
  return (
    <section className="w-full bg-samar-primary">
      <div className="grid min-h-[500px] w-full grid-cols-1 md:grid-cols-2">
        <div className="relative h-full min-h-[320px] w-full">
          <Image
            src="/samar/images/banner/banner1.jpeg"
            alt="Peluches suaves y adorable"
            fill
            className="object-cover"
            priority
          />S
        </div>

        <div className="flex items-center justify-center px-6 py-12 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-samar-textoprincipal">
              Colección especial
            </p>
            <h1 className="text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Cuidado natural para tu piel
            </h1>
            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
              Descubre nuestros productos hechos artesanalmente.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/productos" className="rounded-full bg-samar-botonprincipal px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Ver productos
              </Link>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100">
                Ver ofertas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProductDestacadosProps {
  products: Productos[];
}

const ProductDestacados = ({ products }: ProductDestacadosProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{"Productos Destacados"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Descubre nuestros productos más populares y de primera línea, cuidadosamente seleccionados para ti."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter((product) => product.activo && product.destacado)
            .slice(0, 8)
            .map((product) => (
              <ProductCard
                key={product.idProducto}
                product={product}
              />
            ))}
        </div>

        <div className="text-center mt-12">
          <button>
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  )
}

function BottomBanner() {
  return (
    <section className="bg-samar-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{"¡Únete a Nuestra Familia Samar!"}</h2>
          <p className="text-lg md:text-xl mb-8 text-pretty opacity-90">
            {
              "Suscríbete y recibe ofertas exclusivas, nuevos lanzamientos y contenido especial directamente en tu correo."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              Suscribirse
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span>🎁</span>
              <span>Regalos especiales</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📦</span>
              <span>Envío gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span>Acceso VIP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { tenant } = useTenant();

  const [products, setProducts] = useState<Productos[]>([]);

  useEffect(() => {
    if (!tenant) return; // evita llamada vac

    async function fetchData() {
      try {
        const data = await getAllProduct(tenant);

        setProducts(data);
      } catch (error) {
        console.error("Error obteniendo todos los productos:", error);
      }
    }
    fetchData();
  }, [tenant]);
  return (
    <div className="bg-samar-blanco">
      <HeroBanner />

      <ProductDestacados products={products} />

      <BottomBanner />
    </div>
  )
}