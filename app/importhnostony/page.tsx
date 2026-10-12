'use client'

/* eslint-disable */

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { getAllBrands, getCategories, getFeaturesProduct } from "@/app/utils/actions";
import { ModalDetailProduct } from "./components/modal/detailProducts";
import { Categoria, Marca, Productos } from "@/types/producto";
import { useTenant } from "../context/TenantContext";
import Link from "next/link";
import {
  ShieldCheck,
  Headset,
  Truck,
  Wallet,
  Star,
  ArrowRight,
  Boxes,
} from "lucide-react";

const benefits = [
  {
    label: "Calidad garantizada",
    icon: ShieldCheck,
  },
  {
    label: "Asesoría técnica",
    icon: Headset,
  },
  {
    label: "Envíos a todo el Perú",
    icon: Truck,
  },
  {
    label: "Pago seguro",
    icon: Wallet,
  },
];

function Banner() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-importhnostony-dark text-white">

      {/* IMAGEN DE FONDO */}
      <Image
        src="/importhnostony/images/banner/hero-banner.png"
        alt="Máquina de coser industrial Juki"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* OSCURECIMIENTO PARA LEGIBILIDAD */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/5" />

      {/* DETALLES ROJOS DECORATIVOS */}
      <div
        aria-hidden="true"
        className="absolute -left-8 top-0 h-20 w-12 -skew-x-[35deg] bg-importhnostony-primary lg:h-28"
      />

      <div
        aria-hidden="true"
        className="absolute -right-12 bottom-0 h-36 w-24 -skew-x-[36deg] bg-importhnostony-primary bg-opacity-55 lg:h-96 lg:w-40"
      />

      <div
        aria-hidden="true"
        className="absolute -right-12 bottom-0 h-36 w-24 -skew-x-[36deg] bg-importhnostony-primary lg:h-80 lg:w-40"
      />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl flex-col justify-between px-5 py-9 sm:px-6 lg:min-h-[440px] lg:px-8 lg:py-10">

        {/* TITULAR Y BOTONES */}
        <div className="max-w-xl">

          <h1 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Repuestos que mantienen
            <br className="hidden sm:block" />
            {" "}tu producción en movimiento
          </h1>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-200 sm:text-base lg:text-lg">
            Piezas originales y compatibles para máquinas
            de coser industriales.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">

            <Link
              href="/productos"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-importhnostony-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-importhnostony-primary-hover"
            >
              Ver productos
            </Link>

            <Link
              href="/marcas"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-importhnostony-dark"
            >
              Nuestras marcas
            </Link>

          </div>
        </div>

        {/* BENEFICIOS */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/20 pt-5 lg:grid-cols-4 lg:mt-12 lg:border-0 lg:pt-0 lg:w-3/4">

          {benefits.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2.5"
            >
              <Icon
                size={22}
                strokeWidth={1.7}
                className="shrink-0 text-white"
              />

              <span className="text-xs font-medium text-white sm:text-sm">
                {label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function Categorias({ categorias }: { categorias: Categoria[] }) {
  return (
    <section className="w-full bg-white py-8 sm:py-10">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ENCABEZADO */}
        <div className="mb-5 flex items-center justify-between gap-3">

          <h2 className="flex items-center gap-2 text-lg font-bold text-importhnostony-dark sm:text-xl">
            <Star
              size={22}
              fill="currentColor"
              className="shrink-0 text-importhnostony-primary"
            />
            Categorías principales
          </h2>

          <Link
            href="/categorias"
            className="group inline-flex shrink-0 items-center gap-1 text-xs font-medium text-importhnostony-primary transition-colors hover:text-red-700 sm:text-sm"
          >
            <span className="hidden sm:inline">
              Ver todos
            </span>
            <span className="sm:hidden">
              Ver todos
            </span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">

          {categorias.slice(0, 7).map((category, index) => (
            <Link
              key={category.idCategoria}
              href={`/productos?categoria=${encodeURIComponent(category.categoria?category.categoria:"")}`}
              className={`
                group overflow-hidden rounded-md
                border border-gray-100
                bg-importhnostony-surface
                transition-all duration-300
                hover:-translate-y-1
                hover:border-importhnostony-primary
                hover:shadow-md
                ${index >= 4 ? "hidden lg:block" : index >= 2 ? "hidden sm:block" : ""}
              `}
            >
              {/* IMAGEN */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={category.imagen}
                  alt={`Repuestos de ${category.categoria}`}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 15vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />

              </div>

              {/* NOMBRE */}
              <div className="px-2 pb-4 text-center">
                <h3 className="text-xs font-semibold text-importhnostony-dark transition-colors group-hover:text-importhnostony-primary sm:text-sm">
                  {category.categoria}
                </h3>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

function ProductosDestacados({ productos }: { productos: Productos[] }) {
  return (
    <section className="w-full bg-white py-8 sm:py-10">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ENCABEZADO */}
        <div className="mb-5 flex items-center justify-between gap-3">

          <h2 className="flex items-center gap-2 text-lg font-bold text-importhnostony-dark sm:text-xl">
            <Star
              size={22}
              fill="currentColor"
              className="shrink-0 text-importhnostony-primary"
            />
            Productos destacados
          </h2>

          <Link
            href="/productos"
            className="group inline-flex shrink-0 items-center gap-1 text-xs font-medium text-importhnostony-primary transition-colors hover:text-red-700 sm:text-sm"
          >
            <span className="hidden sm:inline">
              Ver todos los productos
            </span>
            <span className="sm:hidden">
              Ver todos
            </span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">

          {productos.slice(0, 7).map((producto, index) => (
            <Link
              key={producto.idProducto}
              href={`/productos/${producto.nombre}`}
              className={`
                group overflow-hidden rounded-md
                border border-gray-100
                bg-importhnostony-surface
                transition-all duration-300
                hover:-translate-y-1
                hover:border-importhnostony-primary
                hover:shadow-md
                ${index >= 4 ? "hidden lg:block" : index >= 2 ? "hidden sm:block" : ""}
              `}
            >
              {/* IMAGEN */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={producto.fotos[0]}
                  alt={`Repuestos de ${producto.nombre}`}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 15vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />

              </div>

              {/* NOMBRE */}
              <div className="px-2 pb-4 text-center">
                <h3 className="text-xs font-semibold text-importhnostony-dark transition-colors group-hover:text-importhnostony-primary sm:text-sm">
                  {producto.nombre}
                </h3>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

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
    }, 5000);
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
    <div className="relative w-full">
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
          {marcas.map((src, idx) => (
            <div key={idx} style={itemStyle} className="shrink-0">
              <div className="mx-auto flex h-14 w-32 items-center justify-center">
                <Image
                  src={src.urlFoto}
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

        {/* Puntos (opcional) */}
        {/* <div className="mt-4 flex justify-center gap-2">
        {marcas.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-black" : "bg-slate-300"
            }`}
            aria-label={`Ir a marca ${i + 1}`}
          />
        ))}
      </div> */}
      </div>
    </div>
  );
}

function PromoBanners() {
  return (
    <section className="w-full bg-white py-3 sm:py-5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 sm:px-6 lg:grid-cols-2 lg:gap-4 lg:px-8">

        {/* BANNER 1 - STOCK */}
        <div className="group relative isolate min-h-[190px] overflow-hidden rounded-md bg-importhnostony-dark sm:min-h-[220px]">

          <Image
            src="/importhnostony/images/promobanners/banner-left.png"
            alt="Repuestos para máquinas de coser industriales"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* DEGRADADO */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />

          {/* CONTENIDO */}
          <div className="relative z-10 flex h-full min-h-[190px] items-center px-5 py-6 sm:min-h-[220px] sm:px-7">

            <div className="max-w-[65%]">
              <div className="flex items-start gap-3">

                <Boxes
                  size={27}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-importhnostony-primary"
                />

                <div>
                  <h2 className="text-lg font-bold leading-tight text-white sm:text-xl">
                    Amplio stock
                    <br />
                    de repuestos
                  </h2>

                  <p className="mt-2 text-xs leading-relaxed text-gray-200 sm:text-sm">
                    Todo lo que necesitas para tu máquina textil industrial.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BANNER 2 - ASESORÍA */}
        <div className="group relative isolate min-h-[190px] overflow-hidden rounded-md bg-importhnostony-dark sm:min-h-[220px]">

          <Image
            src="/importhnostony/images/promobanners/banner-rigth.png"
            alt="Asesoría técnica para máquinas de coser industriales"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* DEGRADADO */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

          {/* CONTENIDO */}
          <div className="relative z-10 flex h-full min-h-[190px] items-center px-5 py-6 sm:min-h-[220px] sm:px-7">

            <div className="max-w-[70%]">
              <div className="flex items-start gap-3">

                <Headset
                  size={27}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-importhnostony-primary"
                />

                <div>
                  <h2 className="text-lg font-bold leading-tight text-white sm:text-xl">
                    Asesoría
                    <br />
                    especializada
                  </h2>

                  <p className="mt-2 text-xs leading-relaxed text-gray-200 sm:text-sm">
                    Te ayudamos a encontrar el repuesto ideal.
                  </p>

                  <Link
                    href="/contactanos"
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-importhnostony-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:text-sm"
                  >
                    Contáctanos
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function ProductosMasVendidos({ productos }: { productos: Productos[] }) {
  return (
    <section className="w-full bg-white py-8 sm:py-10">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ENCABEZADO */}
        <div className="mb-5 flex items-center justify-between gap-3">

          <h2 className="flex items-center gap-2 text-lg font-bold text-importhnostony-dark sm:text-xl">
            <Star
              size={22}
              fill="currentColor"
              className="shrink-0 text-importhnostony-primary"
            />
            Más Vendidos
          </h2>

          <Link
            href="/productos"
            className="group inline-flex shrink-0 items-center gap-1 text-xs font-medium text-importhnostony-primary transition-colors hover:text-red-700 sm:text-sm"
          >
            <span className="hidden sm:inline">
              Ver todos
            </span>
            <span className="sm:hidden">
              Ver todos
            </span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">

          {productos.slice(0, 7).map((producto, index) => (
            <Link
              key={producto.idProducto}
              href={`/productos/${producto.nombre}`}
              className={`
                group overflow-hidden rounded-md
                border border-gray-100
                bg-importhnostony-surface
                transition-all duration-300
                hover:-translate-y-1
                hover:border-importhnostony-primary
                hover:shadow-md
                ${index >= 4 ? "hidden lg:block" : index >= 2 ? "hidden sm:block" : ""}
              `}
            >
              {/* IMAGEN */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={producto.fotos[0]}
                  alt={`Repuestos de ${producto.nombre}`}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 15vw"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />

              </div>

              {/* NOMBRE */}
              <div className="px-2 pb-4 text-center">
                <h3 className="text-xs font-semibold text-importhnostony-dark transition-colors group-hover:text-importhnostony-primary sm:text-sm">
                  {producto.nombre}
                </h3>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default function Home() {
  const { tenant } = useTenant();
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [productos, setProductos] = useState<Productos[]>([]);

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

  // llenar las categorias
  useEffect(() => {
    if (!tenant) return; // evita llamada vac

    async function fetchData() {
      try {
        const data = await getCategories(tenant);
        setCategorias(data);
      } catch (error) {
        console.error("Error obteniendo las categorías:", error);
      }
    }
    fetchData();
  }, [tenant]);

  // llenar los productos Destacados
  useEffect(() => {
    if (!tenant) return; // evita llamada vac

    async function fetchData() {
      try {
        const data = await getFeaturesProduct(tenant, 1);
        setProductos(data);
      } catch (error) {
        console.error("Error obteniendo los productos destacados:", error);
      }
    }
    fetchData();
  }, [tenant]);

  // llenar los productos Más Vendidos
  useEffect(() => {
    if (!tenant) return; // evita llamada vac

    async function fetchData() {
      try {
        const data = await getFeaturesProduct(tenant, 3);
        setProductos(data);
      } catch (error) {
        console.error("Error obteniendo los productos más vendidos:", error);
      }
    }
    fetchData();
  }, [tenant]);

  return (
    <div className="mx-auto justify-between items-center xl:w-8/12 2xl:w-8/12 w-11/12">
      <Banner />

      <Categorias categorias={categorias} />

      <ProductosDestacados productos={productos} />

      <Marcas marcas={marcas} />

      <PromoBanners />

      <ProductosMasVendidos productos={productos} />

    </div>
  )
}