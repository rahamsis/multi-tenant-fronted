'use client'

import { Heart, ShoppingCart, Star } from "lucide-react"
import Image from "next/image";

function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-card to-muted py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            {"Los Peluches Más Adorables del Mundo"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            {"Descubre nuestra increíble colección de peluches suaves y tiernos. Perfectos para regalar o coleccionar."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-lg px-8">
              {"Ver Colección"}
            </button>
            <button className="text-lg px-8 bg-transparent">
              {"Ofertas Especiales"}
            </button>
          </div>
        </div>

        {/* Imagen del banner */}
        <div className="mt-12">
          <Image
            src="/oishipop/images/placeholder-hi2mp.png"
            alt="Colección de peluches adorables"
            className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            width={1000}
            height={1000}
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

const products = [
  {
    id: 1,
    name: "Oso Teddy Clásico",
    price: 29.99,
    originalPrice: 39.99,
    image: "/oishipop/images/placeholder-yk8rb.png",
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isOnSale: true,
  },
  {
    id: 2,
    name: "Unicornio Arcoíris",
    price: 34.99,
    image: "/oishipop/images/rainbow-unicorn-plush-toy-colorful.jpg",
    rating: 4.9,
    reviews: 89,
    isNew: true,
    isOnSale: false,
  },
  {
    id: 3,
    name: "Gato Kawaii",
    price: 24.99,
    image: "/oishipop/images/placeholder-n9gei.png",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isOnSale: false,
  },
  {
    id: 4,
    name: "Dragón Amigable",
    price: 42.99,
    originalPrice: 52.99,
    image: "/oishipop/images/friendly-dragon-plush-toy-green-cute.jpg",
    rating: 4.6,
    reviews: 73,
    isNew: false,
    isOnSale: true,
  },
  {
    id: 5,
    name: "Panda Gigante",
    price: 59.99,
    image: "/oishipop/images/giant-panda-plush-toy-black-white-large.jpg",
    rating: 4.9,
    reviews: 201,
    isNew: true,
    isOnSale: false,
  },
  {
    id: 6,
    name: "Conejo Suave",
    price: 19.99,
    image: "/oishipop/images/soft-bunny-rabbit-plush-toy-white-fluffy.jpg",
    rating: 4.5,
    reviews: 98,
    isNew: false,
    isOnSale: false,
  },
]

function ProductGrid() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{"Productos Destacados"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Descubre nuestros peluches más populares y adorables"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-4">
                <div className="relative mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                    width={500}
                    height={500}
                    priority={true}
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.isNew && <a className="bg-secondary text-secondary-foreground">Nuevo</a>}
                    {product.isOnSale && <a className="bg-primary text-primary-foreground">Oferta</a>}
                  </div>
                  <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button className="flex flex-row justify-center items-center w-full gap-2 bg-red-400 py-2 rounded-lg text-white">
                  <ShoppingCart className="h-4 w-4" />
                  Agregar al Carrito
                </button>
              </div>
            </div>
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
    <section className="bg-oishipop-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{"¡Únete a Nuestra Familia PlushWorld!"}</h2>
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
  return (
    <div className="">
      <HeroBanner />

      <ProductGrid/>

      <BottomBanner />
    </div>
  )
}