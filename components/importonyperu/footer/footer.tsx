function MainFooter() {
    return (
        <footer className="w-full bg-zinc-900 text-zinc-400">
            <div className="mx-auto max-w-[1202px]  px-3">
                <div className="flex flex-wrap mt-0 pb-10 pt-[52px]">
                    <div className="px-6 w-full mt-12 md:w-1/2 lg:w-1/4 flex flex-col">
                        <h6 className="mb-8 text-lg text-zinc-200 font-semibold">PRODUCTOS</h6>
                        <div className="flex flex-col gap-3">
                            <a className="text-sm text-gray-500" href="https://importonyperu.com.pe/catalogos">Catalógos</a>
                            <a className="text-sm text-gray-500" href="https://importonyperu.com.pe/automatizacion">Máquinas automatizadas</a>
                            <p className="text-sm text-gray-500">Novedades</p>
                            <p className="text-sm text-gray-500">Los Más Vendidos</p>
                        </div>

                    </div>
                    <div className="px-6 w-full mt-12 md:w-1/2 lg:w-1/4">
                        <h6 className="mb-8 text-lg text-zinc-200 font-semibold">NUESTRA EMPRESA</h6>
                        <p className="text-sm text-gray-500">Nosotros</p>
                        <p className="text-sm text-gray-500 my-3">Mapa del lugar</p>
                        <p className="text-sm text-gray-500">Tiendas</p>
                        <ul className="-ml-2 mt-2  md:mt-4 lg:mt-6">
                            <li className="inline-block m-2 leading-1">
                                <a className="text-sm text-black inline-flex w-11 h-11 items-center justify-center rounded-full bg-white text-center" href="#">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li className="inline-block m-2 leading-1">
                                <a className="text-sm text-black inline-flex w-11 h-11 items-center justify-center rounded-full bg-white text-center" href="#">
                                    <i className="bi bi-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-6 w-full mt-12 md:w-1/2 lg:w-1/4">
                        <h6 className="mb-8 text-lg text-zinc-200 font-semibold">UBICACIÓN &amp; CONTACTO</h6>
                        <p className="text-sm text-gray-500">importony@hotmail.com</p>
                        <p className="text-sm text-gray-500 py-3">(+51) 994 151 785</p>
                        <p className="text-sm text-gray-500">(+51) 955 171 495</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto px-3 max-w-[1440px]">
                <div className="mx-auto border-t-[1px] border-zinc-600 pb-10 pt-7 text-center">
                    <p className="text-sm text-gray-500 mx-3 lg:mx-0">Copyright {new Date().getFullYear()}. Todos los derechos reservados. — Diseñado por <a href="https://www.facebook.com/profile.php?id=100007722019176" target="_blank">Rahamsis CG</a></p>

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