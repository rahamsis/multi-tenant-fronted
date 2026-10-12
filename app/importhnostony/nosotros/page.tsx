
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    ChevronRight,
    Factory,
    Target,
    Eye,
    ShieldCheck,
    Headset,
    PackageCheck,
    Wrench,
    CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Nosotros | IMPORTHNOSTONY",
    description:
        "Conoce IMPORTHNOSTONY, empresa dedicada a la comercialización de repuestos y accesorios para máquinas textiles industriales.",
};

const valores = [
    {
        icon: ShieldCheck,
        titulo: "Compromiso",
        descripcion:
            "Trabajamos para ofrecer productos y una atención que respondan a las necesidades de nuestros clientes.",
    },
    {
        icon: PackageCheck,
        titulo: "Calidad",
        descripcion:
            "Priorizamos la calidad y confiabilidad de los repuestos y accesorios de nuestro catálogo.",
    },
    {
        icon: Headset,
        titulo: "Atención personalizada",
        descripcion:
            "Buscamos orientar a nuestros clientes en la elección de los productos adecuados.",
    },
    {
        icon: Wrench,
        titulo: "Especialización",
        descripcion:
            "Nos enfocamos en soluciones para máquinas de confección y el sector textil industrial.",
    },
];

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* ENCABEZADO */}
            <section className="border-b border-gray-100 bg-importhnostony-surface py-10 sm:py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* BREADCRUMB */}
                    <nav
                        aria-label="Ruta de navegación"
                        className="mb-5 flex items-center gap-2 text-xs text-gray-500 sm:text-sm"
                    >
                        <Link
                            href="/"
                            className="transition-colors hover:text-importhnostony-primary"
                        >
                            Inicio
                        </Link>

                        <ChevronRight size={14} />

                        <span className="font-semibold text-importhnostony-primary">
                            Nosotros
                        </span>
                    </nav>

                    <div className="mb-4 h-1 w-12 rounded-full bg-importhnostony-primary" />

                    <h1 className="text-3xl font-extrabold text-importhnostony-dark sm:text-4xl">
                        Sobre nosotros
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        Conoce más sobre IMPORTHNOSTONY y nuestro compromiso
                        con el sector textil industrial.
                    </p>
                </div>
            </section>

            {/* QUIÉNES SOMOS */}
            <section className="py-14 sm:py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

                    {/* IMAGEN */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-importhnostony-surface">
                            <Image
                                src="/importhnostony/images/nosotros/nosotros.png"
                                alt="Máquinas textiles industriales y repuestos"
                                fill
                                sizes="(max-width: 1023px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-md bg-importhnostony-dark px-5 py-4 text-white shadow-lg sm:right-6">
                            <Factory
                                size={27}
                                className="text-importhnostony-primary"
                            />

                            <div>
                                <p className="text-sm font-bold">
                                    Sector textil
                                </p>
                                <p className="text-xs text-gray-300">
                                    Repuestos industriales
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTENIDO */}
                    <div className="pt-6 lg:pt-0">

                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-importhnostony-primary">
                            Quiénes somos
                        </p>

                        <h2 className="text-2xl font-extrabold leading-tight text-importhnostony-dark sm:text-3xl">
                            Soluciones para la industria textil
                        </h2>

                        <div className="mt-5 h-1 w-12 rounded-full bg-importhnostony-primary" />

                        <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
                            En <strong className="text-importhnostony-dark">IMPORTHNOSTONY</strong>{" "}
                            nos dedicamos a la comercialización de repuestos,
                            piezas y accesorios para máquinas de coser industriales,
                            atendiendo las necesidades del sector de confección textil.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                            Nuestro objetivo es facilitar el acceso a componentes
                            para el mantenimiento y funcionamiento de maquinaria,
                            ofreciendo una variedad de alternativas para nuestros clientes.
                        </p>

                        <div className="mt-6 space-y-3">
                            {[
                                "Repuestos para máquinas textiles industriales",
                                "Variedad de piezas y accesorios",
                                "Atención orientada a las necesidades del cliente",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={19}
                                        className="mt-0.5 shrink-0 text-importhnostony-primary"
                                    />
                                    <span className="text-sm text-gray-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/productos"
                            className="mt-8 inline-flex items-center gap-2 rounded-md bg-importhnostony-dark px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-importhnostony-primary"
                        >
                            Explorar productos
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* MISIÓN Y VISIÓN */}
            <section className="bg-importhnostony-surface py-14 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="mb-10 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-importhnostony-primary">
                            Nuestra dirección
                        </p>

                        <h2 className="mt-3 text-2xl font-extrabold text-importhnostony-dark sm:text-3xl">
                            Misión y visión
                        </h2>

                        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-importhnostony-primary" />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* MISIÓN */}
                        <div className="rounded-lg border border-gray-200 bg-white p-7 transition-shadow hover:shadow-md sm:p-9">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-importhnostony-dark">
                                <Target size={27} className="text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-importhnostony-dark">
                                Nuestra misión
                            </h3>

                            <div className="mt-3 h-1 w-10 rounded-full bg-importhnostony-primary" />

                            <p className="mt-5 text-sm leading-7 text-gray-600">
                                Brindar a nuestros clientes acceso a repuestos
                                y accesorios para maquinaria textil industrial,
                                mediante un catálogo variado y una atención
                                comprometida con sus necesidades.
                            </p>
                        </div>

                        {/* VISIÓN */}
                        <div className="rounded-lg border border-gray-200 bg-white p-7 transition-shadow hover:shadow-md sm:p-9">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-importhnostony-dark">
                                <Eye size={27} className="text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-importhnostony-dark">
                                Nuestra visión
                            </h3>

                            <div className="mt-3 h-1 w-10 rounded-full bg-importhnostony-primary" />

                            <p className="mt-5 text-sm leading-7 text-gray-600">
                                Ser una empresa reconocida por ofrecer
                                soluciones confiables para el sector textil,
                                ampliando constantemente nuestra variedad
                                de productos y fortaleciendo la relación
                                con nuestros clientes.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* VALORES */}
            <section className="py-14 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="mb-10 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-importhnostony-primary">
                            Lo que nos caracteriza
                        </p>

                        <h2 className="mt-3 text-2xl font-extrabold text-importhnostony-dark sm:text-3xl">
                            Nuestros valores
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500">
                            Principios que orientan nuestro trabajo y
                            la relación con nuestros clientes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {valores.map((valor) => {
                            const Icon = valor.icon;

                            return (
                                <div
                                    key={valor.titulo}
                                    className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-importhnostony-primary hover:shadow-lg"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-importhnostony-surface transition-colors group-hover:bg-importhnostony-dark">
                                        <Icon
                                            size={23}
                                            className="text-importhnostony-primary"
                                        />
                                    </div>

                                    <h3 className="text-base font-bold text-importhnostony-dark">
                                        {valor.titulo}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {valor.descripcion}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LLAMADO A LA ACCIÓN */}
            <section className="bg-importhnostony-dark py-12 sm:py-16">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">

                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-importhnostony-primary">
                            IMPORTHNOSTONY
                        </p>

                        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                            Encuentra los repuestos que necesitas
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-gray-300">
                            Explora nuestro catálogo de repuestos y accesorios
                            para máquinas textiles industriales.
                        </p>
                    </div>

                    <Link
                        href="/productos"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-importhnostony-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-700"
                    >
                        Ver nuestros productos
                        <ArrowRight size={18} />
                    </Link>

                </div>
            </section>

        </main>
    );
}
