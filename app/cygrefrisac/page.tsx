'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTenant } from "../context/TenantContext";
import { Banner, Marca, Productos, Video } from "@/types/producto";
import { getAllBrands, getAllProduct, getAllBanners, getVideoPrincipal } from "../utils/actions";
import { ModalDetailProduct } from "./components/modal/detailProducts";

function HeroBanner({ banners }: { banners: Banner[] }) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Función para avanzar al siguiente slide
    const next = () => setCurrent((prev) => (prev + 1) % banners.length)

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval) // Limpia el intervalo al actualizar current
  }, [current, banners]) // <- Al cambiar current, se reinicia el intervalo

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length)
  }

  if (banners.length === 0) {
    return <div></div>;
  }

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden content-center">
      <div className="overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>


        {/* Imagen de fondo */}
        <div className="absolute inset-0 ">
          <Image
            src={banners[current].urlBanner}
            alt={banners[current].idBanner}
            className="object-cover w-full h-full transition-all duration-700"
            fill
            priority={true}
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>

        {/* Contenido del slide */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {banners[current].titulo}
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-3xl">
            {banners[current].descripcion}
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              <Link href={"/productos"}>
                Ver Productos
              </Link>

            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-white hover:text-black transition">
              <Link href={"/contacto"}>
                Cotizar Ahora
              </Link>
            </button>
          </div>
        </div>

        {/* Botones flotantes */}
        {isHovered && banners.length > 1 && (
          <>
            <div>banners.length: {banners.length}</div>
            <button
              onClick={prevSlide}
              className="hidden lg:flex absolute cursor-pointer top-1/2 left-2 md:left-10 -translate-y-1/2 bg-black/40 text-white p-2 md:p-3 rounded-full hover:bg-black/60 transition z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="hidden lg:flex absolute cursor-pointer top-1/2 right-2 md:right-10 -translate-y-1/2 bg-black/40 text-white p-2 md:p-3 rounded-full hover:bg-black/60 transition z-20"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </section>
  )
}

interface ProductDestacadosProps {
  products: Productos[];
}

const ProductDestacados = ({ products }: ProductDestacadosProps) => {

  const [productsDestacados, setProductsDestacados] = useState<Productos[]>([]);
  const [showDetailProduct, setShowDetailProduct] = useState<Productos | null>(null);

  useEffect(() => {
    // Filtra solo los productos donde destacado = true
    const destacados = products.filter((p) => p.destacado);
    setProductsDestacados(destacados);
  }, [products]); // se ejecuta cada vez que cambien los products

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-4">Productos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros productos más destacados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 x:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
          {productsDestacados.map((product) => (
            <div
              key={product.idProducto}
              className="flex flex-col justify-between group hover:shadow-lg transition-all duration-[2000ms] h-full"
            >
              <div className="p-4 flex-1 flex flex-col">
                <div className="group relative mb-4 overflow-hidden rounded-lg">
                  <div className="text-lg text-center text-cyan-800 font-semibold text-foreground pb-3 ">
                    {product.nombre}
                  </div>
                  {/* Imagen principal */}
                  <Image
                    src={product.fotos[0] || "/placeholder.svg"}
                    alt={product.nombre}
                    className={`w-full h-64 object-cover transition-transform duration-[2000ms] ease-in-out 
                      ${product.fotos[1] ? "group-hover:opacity-0" : "group-hover:scale-110"}`}
                    width={500}
                    height={500}
                    priority={true}
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
                      className="text-gray-700 hover:text-cyan-700 hover:font-semibold">
                      {/* <i className="bi bi-search  text-lg"></i> */}
                      mas información
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
        </div>

        <div className="text-center mt-12">
          <button className="bg-cygrefrisac-header p-3 rounded-lg text-white">
            <Link href={"/productos"}>
              Ver Todos los Productos
            </Link>
          </button>
        </div>
      </div>

      {/* Modal de detalle del producto */}
      {showDetailProduct && (
        <ModalDetailProduct producto={showDetailProduct} onClose={() => setShowDetailProduct(null)} />
      )}
    </section>
  )
}

const ProductNuevos = ({ products }: ProductDestacadosProps) => {
  const [productsDestacados, setProductsDestacados] = useState<Productos[]>([]);
  const [showDetailProduct, setShowDetailProduct] = useState<Productos | null>(null);

  useEffect(() => {
    // Filtra solo los productos donde destacado = true
    const destacados = products.filter((p) => p.nuevo);
    setProductsDestacados(destacados);
  }, [products]); // se ejecuta cada vez que cambien los products

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-4">Nuevos Productos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuevos productos de mejor calidad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {productsDestacados.map((product) => (
            <div
              key={product.idProducto}
              className="flex flex-col justify-between group hover:shadow-lg transition-all duration-[2000ms] h-full"
            >
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-lg text-center font-semibold text-foreground pb-3 ">
                  {product.nombre}
                </div>

                <div className="group relative mb-4 overflow-hidden rounded-lg">
                  {/* Imagen principal */}
                  <Image
                    src={product.fotos[0] || "/placeholder.svg"}
                    alt={product.nombre}
                    className={`w-full h-64 object-cover transition-transform duration-[2000ms] ease-in-out 
                      ${product.fotos[1] ? "group-hover:opacity-0" : "group-hover:scale-110"}`}
                    width={500}
                    height={500}
                    priority={true}
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
                      className="text-gray-700 hover:text-cyan-700 hover:font-semibold">
                      {/* <i className="bi bi-search  text-lg"></i> */}
                      mas información
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
        </div>

        <div className="text-center mt-12">
          <button className="bg-cygrefrisac-header p-3 rounded-lg text-white">
            <Link href={"/productos"}>
              Ver Todos los Productos
            </Link>
          </button>
        </div>
      </div>

      {/* Modal de detalle del producto */}
      {showDetailProduct && (
        <ModalDetailProduct producto={showDetailProduct} onClose={() => setShowDetailProduct(null)} />
      )}
    </section>
  )
}

const Videos = ({ videoPrincipal }: { videoPrincipal: Video | null }) => {
  return (
    <>
      {
        videoPrincipal?.urlVideo && (
          <section className="bg-cyan-700 text-primary-foreground py-12 px-4">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Titulo de algo
                </h2>

                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Alguna descripción si se desea
                </p>

                <div className="w-full aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/qup66Zwe02o?si=ds2BxBuJWp8Yv80E"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        )
      }
    </>
  )
}

// const postBanner2 = () => {
//   return (
//     <section className="bg-cyan-700 text-primary-foreground py-12 px-4">
//       <div className="container mx-auto text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
//             {"¡Únete a Nuestra Familia PlushWorld!"}</h2>
//           <p className="text-lg md:text-xl mb-8 text-pretty opacity-90">
//             {
//               "Suscríbete y recibe ofertas exclusivas, nuevos lanzamientos y contenido especial directamente en tu correo."
//             }
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Tu correo electrónico"
//               className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-secondary"
//             />
//             <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
//               Suscribirse
//             </button>
//           </div>

//           <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm opacity-80">
//             <div className="flex items-center gap-2">
//               <span>🎁</span>
//               <span>Regalos especiales</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span>📦</span>
//               <span>Envío gratuito</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span>⭐</span>
//               <span>Acceso VIP</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

interface MarcasProps {
  marcas: Marca[];
}

const BottomBanner = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Para pantallas grandes (3 en fila) */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          <div className="relative w-full h-64">
            <Image
              src="/cygrefrisac/images/postbanner10.jpg"
              alt="Banner 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/cygrefrisac/images/postbanner20.jpg"
              alt="Banner 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/cygrefrisac/images/postbanner30.jpg"
              alt="Banner 3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Para móviles (2 arriba + 1 full abajo) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          <div className="relative w-full h-40">
            <Image
              src="/cygrefrisac/images/postbanner1.jpg"
              alt="Banner 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="relative w-full h-40">
            <Image
              src="/cygrefrisac/images/postbanner2.jpg"
              alt="Banner 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <div className="relative w-full h-40 col-span-2">
            <Image
              src="/cygrefrisac/images/postbanner3.jpg"
              alt="Banner 3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
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
  }, [current
    // , visible
  ]);

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
    <div className="relative w-full lg:py-12">
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
              <div className="mx-auto flex h-28 w-44 items-center justify-center">
                <Image
                  src={m.urlFoto}
                  alt={`Marca ${idx + 1}`}
                  width={140}
                  height={70}
                  style={{ height: "100%", width: "100%" }}
                  className="object-contain h-auto transition duration-300"
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

export default function Home() {
  const { tenant } = useTenant();

  const [banners, setBanners] = useState<Banner[]>([]);
  const [products, setProducts] = useState<Productos[]>([]);
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [videoPrincipal, setVideoPrincipal] = useState<Video | null>(null);

  // llenar los banners
  useEffect(() => {
    if (!tenant) return; // evita llamada vac

    async function fetchData() {
      try {
        const data = await getAllBanners(tenant);
        setBanners(data);
      } catch (error) {
        console.error("Error obteniendo todos los banners:", error);
      }
    }
    fetchData();
  }, [tenant]);

  // llenar los productos
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

  // llenar las marcas
  useEffect(() => {
    if (!tenant) return; // evita llamada vac

    async function fetchData() {
      try {
        const data = await getAllBrands(tenant);
        setMarcas(data);
      } catch (error) {
        console.error("Error obteniendo todas las marcas:", error);
      }
    }
    fetchData();
  }, [tenant]);

  // llenar el video
  useEffect(() => {
    if (!tenant) return; // evita llamada vac

    async function fetchData() {
      try {
        const data = await getVideoPrincipal(tenant);

        setVideoPrincipal(data[0]);
      } catch (error) {
        console.error("Error obteniendo el video principal:", error);
      }
    }
    fetchData();
  }, [tenant]);
  return (
    <div className="">
      <HeroBanner banners={banners} />

      <ProductDestacados products={products} />

      <ProductNuevos products={products} />

      <Videos videoPrincipal={videoPrincipal} />

      <BottomBanner />

      <Marcas marcas={marcas} />
    </div>
  )
}