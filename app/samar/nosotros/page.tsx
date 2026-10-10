import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Leaf,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const valores = [
  {
    icon: Heart,
    titulo: "Cuidado personal",
    descripcion:
      "Creemos que dedicarte tiempo es una forma de bienestar. Queremos acompañarte en esos pequeños momentos de cuidado diario.",
  },
  {
    icon: Leaf,
    titulo: "Belleza consciente",
    descripcion:
      "Promovemos una rutina de belleza que valore el bienestar, el equilibrio y el cuidado de cada persona.",
  },
  {
    icon: ShieldCheck,
    titulo: "Atención y confianza",
    descripcion:
      "Buscamos ofrecer una experiencia de compra clara, cercana y con atención personalizada.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="bg-white text-samar-textoprincipal">
      {/* Hero */}
      <section className="bg-samar-primary">
        <div className="container mx-auto grid min-h-[460px] grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-samar-acento">
              Conoce nuestra esencia
            </p>

            <h1 className="max-w-xl text-4xl font-black leading-tight md:text-5xl">
              Tu bienestar es parte de nuestra inspiración
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 md:text-lg">
              En Samar creemos que el cuidado personal va más allá
              de una rutina. Es un momento para conectar contigo,
              sentirte bien y disfrutar de los pequeños detalles.
            </p>

            <Link
              href="/productos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-samar-botonprincipal px-7 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Descubre nuestros productos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-lg md:h-[420px]">
            <Image
              src="/samar/images/nosotros/nosotros1.jpeg"
              alt="Productos de cuidado personal Samar"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[350px] overflow-hidden rounded-3xl bg-samar-primary md:h-[440px]">
            <Image
              src="/samar/images/nosotros/nosotros2.jpeg"
              alt="Rutina de cuidado y bienestar"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-samar-acento">
              Quiénes somos
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Cuidarte también es quererte
            </h2>

            <div className="space-y-5 text-base leading-8 text-gray-600">
              <p>
                Samar es una tienda dedicada a ofrecer productos
                de cuidado personal, belleza y bienestar para
                acompañarte en tu día a día.
              </p>

              <p>
                Queremos que cada persona encuentre productos
                que se adapten a sus gustos y necesidades,
                haciendo de su rutina un momento especial.
              </p>

              <p>
                Nuestro propósito es construir una experiencia
                de compra agradable, sencilla y cercana,
                donde cada detalle importe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-samar-primary py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 flex justify-center">
              <Sparkles className="h-8 w-8 text-samar-acento" />
            </div>

            <h2 className="text-3xl font-bold md:text-4xl">
              Lo que nos inspira
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Tres principios que queremos reflejar en
              cada experiencia con Samar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valores.map((valor) => {
              const Icon = valor.icon;

              return (
                <div
                  key={valor.titulo}
                  className="rounded-2xl border border-samar-bordes bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-samar-primary">
                    <Icon className="h-8 w-8 text-samar-acento" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold">
                    {valor.titulo}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {valor.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="container mx-auto px-6 py-20 text-center">
        <Leaf className="mx-auto mb-5 h-10 w-10 text-samar-acento" />

        <h2 className="text-3xl font-bold md:text-4xl">
          Encuentra tu momento de bienestar
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Explora nuestra selección de productos y descubre
          nuevas formas de disfrutar tu rutina de cuidado.
        </p>

        <Link
          href="/productos"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-samar-botonprincipal px-8 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Explorar catálogo
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </main>
  );
}