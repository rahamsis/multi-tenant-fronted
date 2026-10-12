
import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    ChevronRight,
    Clock3,
    Headphones,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Contacto | IMPORTHNOSTONY",
    description:
        "Contáctanos para consultar sobre repuestos, accesorios y productos para máquinas textiles industriales en IMPORTHNOSTONY.",
};

// Reemplazar por los datos oficiales de la empresa
const contacto = {
    telefono: "+51 955 171 495",
    whatsapp: "955 171 495",
    correo: "importony@hotmail.com",
    direccion: "Jr.huanuco 1674, La Victoria, Peru, 15030",
    horario: "Consultar horario de atención",
    mapaUrl: "https://maps.app.goo.gl/SNTAWVGweEoYSeH78",
};

const whatsappNumero = contacto.whatsapp.replace(/\D/g, "");

const whatsappUrl = whatsappNumero
    ? `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(
        "Hola, quisiera consultar sobre sus repuestos y accesorios para máquinas textiles industriales."
    )}`
    : null;

const informacion = [
    {
        icon: Phone,
        titulo: "Teléfono",
        descripcion: "Comunícate con nosotros",
        valor: contacto.telefono || "Por confirmar",
        href: contacto.telefono
            ? `tel:${contacto.telefono.replace(/[^\d+]/g, "")}`
            : null,
    },
    {
        icon: Mail,
        titulo: "Correo electrónico",
        descripcion: "Envíanos tus consultas",
        valor: contacto.correo || "Por confirmar",
        href: contacto.correo
            ? `mailto:${contacto.correo}`
            : null,
    },
    {
        icon: MapPin,
        titulo: "Ubicación",
        descripcion: "Visita nuestro establecimiento",
        valor: contacto.direccion || "Dirección por confirmar",
        href: contacto.mapaUrl || null,
    },
    {
        icon: Clock3,
        titulo: "Horario de atención",
        descripcion: "Estamos para atenderte",
        valor: contacto.horario,
        href: null,
    },
];

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ENCABEZADO */}
            <section className="border-b border-gray-100 bg-importhnostony-surface py-10 sm:py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                            Contacto
                        </span>
                    </nav>

                    <div className="mb-4 h-1 w-12 rounded-full bg-importhnostony-primary" />

                    <h1 className="text-3xl font-extrabold text-importhnostony-dark sm:text-4xl">
                        Contáctanos
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        ¿Necesitas un repuesto para tu máquina textil industrial?
                        Estamos aquí para ayudarte con tus consultas sobre
                        nuestros productos y accesorios.
                    </p>
                </div>
            </section>

            {/* INFORMACIÓN DE CONTACTO */}
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mb-9">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-importhnostony-primary">
                        Canales de atención
                    </p>

                    <h2 className="mt-3 text-2xl font-extrabold text-importhnostony-dark sm:text-3xl">
                        Estamos a tu disposición
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
                        Puedes comunicarte con nosotros a través de nuestros
                        canales de atención para consultar por disponibilidad,
                        características y precios de nuestros productos.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {informacion.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.titulo}
                                className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-importhnostony-primary hover:shadow-md"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-importhnostony-surface">
                                    <Icon
                                        size={23}
                                        className="text-importhnostony-primary"
                                    />
                                </div>

                                <h3 className="text-base font-bold text-importhnostony-dark">
                                    {item.titulo}
                                </h3>

                                <p className="mt-1 text-xs text-gray-500">
                                    {item.descripcion}
                                </p>

                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target={
                                            item.href.startsWith("https://")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            item.href.startsWith("https://")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="mt-4 block break-words text-sm font-semibold text-importhnostony-dark transition-colors hover:text-importhnostony-primary"
                                    >
                                        {item.valor}
                                    </a>
                                ) : (
                                    <p className="mt-4 break-words text-sm font-semibold text-importhnostony-dark">
                                        {item.valor}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* FORMULARIO Y WHATSAPP */}
            <section className="bg-importhnostony-surface py-14 sm:py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:gap-10 lg:px-8">
                    {/* FORMULARIO */}
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-9 lg:col-span-3">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-importhnostony-primary">
                            Escríbenos
                        </p>

                        <h2 className="mt-3 text-2xl font-extrabold text-importhnostony-dark">
                            Envíanos tu consulta
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Completa tus datos y cuéntanos qué producto o repuesto
                            estás buscando.
                        </p>

                        {/*
              Formulario preparado para enviar por correo.
              No requiere backend mientras se utilice mailto.
            */}
                        {contacto.correo ? (
                            <form
                                action={`mailto:${contacto.correo}`}
                                method="GET"
                                className="mt-8 space-y-5"
                            >
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="nombre"
                                            className="mb-2 block text-sm font-semibold text-importhnostony-dark"
                                        >
                                            Nombre completo
                                        </label>

                                        <input
                                            id="nombre"
                                            name="nombre"
                                            type="text"
                                            required
                                            placeholder="Ingresa tu nombre"
                                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-importhnostony-primary"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="telefono"
                                            className="mb-2 block text-sm font-semibold text-importhnostony-dark"
                                        >
                                            Teléfono
                                        </label>

                                        <input
                                            id="telefono"
                                            name="telefono"
                                            type="tel"
                                            placeholder="Ingresa tu teléfono"
                                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-importhnostony-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-importhnostony-dark"
                                    >
                                        Correo electrónico
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="ejemplo@correo.com"
                                        className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-importhnostony-primary"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="asunto"
                                        className="mb-2 block text-sm font-semibold text-importhnostony-dark"
                                    >
                                        Asunto
                                    </label>

                                    <input
                                        id="asunto"
                                        name="subject"
                                        type="text"
                                        required
                                        placeholder="Consulta sobre repuestos"
                                        className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-importhnostony-primary"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="mensaje"
                                        className="mb-2 block text-sm font-semibold text-importhnostony-dark"
                                    >
                                        Mensaje
                                    </label>

                                    <textarea
                                        id="mensaje"
                                        name="body"
                                        required
                                        rows={5}
                                        placeholder="Cuéntanos qué repuesto o accesorio necesitas..."
                                        className="w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-importhnostony-primary"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-importhnostony-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-700 sm:w-auto"
                                >
                                    Enviar consulta
                                    <Send size={17} />
                                </button>

                                <p className="text-xs text-gray-500">
                                    Al enviar, se abrirá tu aplicación de correo
                                    para completar el envío.
                                </p>
                            </form>
                        ) : (
                            <div className="mt-8 rounded-md border border-gray-200 bg-importhnostony-surface p-6 text-sm leading-6 text-gray-600">
                                El formulario de consultas estará disponible cuando
                                se configure el correo de atención de la empresa.
                            </div>
                        )}
                    </div>

                    {/* PANEL LATERAL */}
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        <div className="rounded-lg bg-importhnostony-dark p-7 text-white sm:p-9">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10">
                                <MessageCircle
                                    size={28}
                                    className="text-importhnostony-primary"
                                />
                            </div>

                            <h3 className="text-xl font-extrabold">
                                ¿Prefieres WhatsApp?
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-300">
                                Consulta directamente por repuestos, accesorios
                                y disponibilidad de productos a través de WhatsApp.
                            </p>

                            {whatsappUrl ? (
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-importhnostony-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-700"
                                >
                                    Escribir por WhatsApp
                                    <ArrowRight size={18} />
                                </a>
                            ) : (
                                <p className="mt-7 text-sm font-medium text-gray-300">
                                    Número de WhatsApp por confirmar.
                                </p>
                            )}
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-7 sm:p-9">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-importhnostony-surface">
                                <Headphones
                                    size={24}
                                    className="text-importhnostony-primary"
                                />
                            </div>

                            <h3 className="text-lg font-bold text-importhnostony-dark">
                                ¿Necesitas orientación?
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                Si no encuentras un repuesto en nuestro catálogo,
                                puedes consultarnos indicando la marca, el modelo
                                de la máquina y las características de la pieza.
                            </p>

                            <Link
                                href="/productos"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-importhnostony-primary hover:underline"
                            >
                                Explorar catálogo
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* UBICACIÓN */}
            <section className="py-14 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-importhnostony-primary">
                            Encuéntranos
                        </p>

                        <h2 className="mt-3 text-2xl font-extrabold text-importhnostony-dark sm:text-3xl">
                            Nuestra ubicación
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Consulta la ubicación de nuestro establecimiento.
                        </p>
                    </div>

                    {contacto.mapaUrl ? (
                        <div className="flex flex-col gap-5 rounded-lg border border-gray-200 bg-importhnostony-surface p-7 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-start gap-4">
                                <MapPin
                                    size={25}
                                    className="shrink-0 text-importhnostony-primary"
                                />

                                <div>
                                    <h3 className="font-bold text-importhnostony-dark">
                                        IMPORTHNOSTONY
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-600">
                                        {contacto.direccion || "Ver ubicación en el mapa"}
                                    </p>
                                </div>
                            </div>

                            <a
                                href={contacto.mapaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-importhnostony-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-importhnostony-primary"
                            >
                                Cómo llegar
                                <ArrowRight size={17} />
                            </a>
                        </div>
                    ) : (
                        <div className="flex min-h-[220px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-importhnostony-surface px-6 py-10 text-center">
                            <MapPin
                                size={38}
                                strokeWidth={1.5}
                                className="text-importhnostony-primary"
                            />

                            <h3 className="mt-4 font-bold text-importhnostony-dark">
                                Ubicación por confirmar
                            </h3>

                            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                                Próximamente podrás consultar nuestra dirección
                                y cómo llegar a nuestro establecimiento.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
