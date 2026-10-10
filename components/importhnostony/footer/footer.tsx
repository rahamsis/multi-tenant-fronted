function MainFooter() {
    return (
        <footer className="w-full bg-zinc-900 text-zinc-400">
            <div className="mx-auto max-w-[1202px] px-6 pb-12 pt-14 md:px-8 lg:pt-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
                    <section>
                        <h6 className="mb-6 border-b border-zinc-700 pb-4 text-sm font-semibold tracking-[0.18em] text-zinc-200">
                            PRODUCTOS
                        </h6>
                        <div className="flex flex-col gap-4">
                            <a className="w-fit text-sm text-gray-500 transition-colors hover:text-zinc-200" href="https://importonyperu.com.pe/catalogos">Catalógos</a>
                            <a className="w-fit text-sm text-gray-500 transition-colors hover:text-zinc-200" href="https://importonyperu.com.pe/automatizacion">Máquinas automatizadas</a>
                            <p className="text-sm text-gray-500">Novedades</p>
                            <p className="text-sm text-gray-500">Los Más Vendidos</p>
                        </div>
                    </section>
                    <section>
                        <h6 className="mb-6 border-b border-zinc-700 pb-4 text-sm font-semibold tracking-[0.18em] text-zinc-200">
                            NUESTRA EMPRESA
                        </h6>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-gray-500">Nosotros</p>
                            <p className="text-sm text-gray-500">Mapa del lugar</p>
                            <p className="text-sm text-gray-500">Tiendas</p>
                        </div>
                        <ul className="mt-6 flex gap-3">
                            <li>
                                <a className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm text-black transition-colors hover:bg-zinc-200" href="#">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm text-black transition-colors hover:bg-zinc-200" href="#">
                                    <i className="bi bi-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="sm:col-span-2 lg:col-span-1">
                        <h6 className="mb-6 border-b border-zinc-700 pb-4 text-sm font-semibold tracking-[0.18em] text-zinc-200">
                            UBICACIÓN &amp; CONTACTO
                        </h6>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-gray-500">importony@hotmail.com</p>
                            <p className="text-sm text-gray-500">(+51) 994 151 785</p>
                            <p className="text-sm text-gray-500">(+51) 955 171 495</p>
                        </div>
                    </section>
                </div>
            </div>
            <div className="border-t border-zinc-700">
                <div className="mx-auto max-w-[1202px] px-6 py-6 text-center md:px-8">
                    <p className="text-xs leading-6 text-gray-500 sm:text-sm">
                        Copyright {new Date().getFullYear()}. Todos los derechos reservados. — Diseñado por <a className="text-zinc-300 transition-colors hover:text-white" href="https://www.facebook.com/profile.php?id=100007722019176" target="_blank">Rahamsis CG</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default function Footer() {
    return (
        <>
            <MainFooter />
        </>
    );
}