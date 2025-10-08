import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { WebSite } from "@/types/webSite";

export default function Footer({ dataWebsite }: { dataWebsite: WebSite }) {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo + descripción */}
                <div>
                    <div className="text-2xl font-bold text-white mb-4">
                        <Link href="/" className="">
                            <Image
                                src={dataWebsite.logo}
                                alt="Logo de la empresa"
                                width={300}
                                height={150}
                                className="rounded-lg"
                                priority={true}
                            />
                        </Link>
                    </div>
                    <p className="text-sm leading-6">
                        Se pone a su servicio de Lunes a viernes de 9 am a 1 y de 2 a 6 pm, sábados de 9 a 1 pm.
                    </p>
                </div>

                {/* Enlaces rápidos */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Enlaces</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
                        <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
                        <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
                        <li><Link href="/servicios" className="hover:text-white transition">Servicios</Link></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
                    <ul className="space-y-2 text-sm">
                        {dataWebsite.direccionPrincipal &&
                            <li>
                                <i className="bi bi-geo-alt-fill mr-3"></i> {dataWebsite.direccionPrincipal}
                            </li>
                        }
                        {dataWebsite.direccionSecundaria &&
                            <li>
                                <i className="bi bi-geo-alt-fill mr-3"></i> {dataWebsite.direccionSecundaria}
                            </li>
                        }
                        {dataWebsite.telefonoPrincipal &&
                            <li>
                                <a href={`tel:+51${dataWebsite.telefonoPrincipal}`}>
                                    <i className="bi bi-telephone-fill mr-3"></i> {dataWebsite.telefonoPrincipal.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                </a>
                            </li>
                        }
                        {dataWebsite.telefonoSecundario &&
                            <li>
                                <a href={`tel:+51${dataWebsite.telefonoSecundario}`}>
                                    <i className="bi bi-telephone-fill mr-3"></i> {dataWebsite.telefonoSecundario.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                </a>
                            </li>
                        }
                        {dataWebsite.correo &&
                            <li>
                                <a href={`mailto:${dataWebsite.correo}`}>
                                    <i className="bi bi-envelope-fill mr-3"></i> {dataWebsite.correo}
                                </a>
                            </li>
                        }
                    </ul>
                </div>

                {/* Redes sociales */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com" target="_blank" className="hover:text-white">
                            <Facebook size={22} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="hover:text-white">
                            <Twitter size={22} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="hover:text-white">
                            <Instagram size={22} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-white">
                            <Linkedin size={22} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Barra inferior */}
            <div className="border-t border-gray-700 mt-8">
                <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p className="">© Copyright {new Date().getFullYear()}. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0"> Diseñado por <a href="#">Rahamsis C.G.</a></p>
                </div>
            </div>
        </footer>
    )
}
