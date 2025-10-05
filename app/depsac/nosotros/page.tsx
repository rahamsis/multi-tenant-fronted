import Image from "next/image";

function Banner() {
    return (
        // <!-- Start Hero Section -->
        <div className="bg-depsac-greenBanner pt-[98px] lg:pr-0 x:pb-36 lg:pb-0 lg:mt-[88px]">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
                    <div className="lg:w-[42%] w-full px-3">
                        <div className="relative max-w-md z-[4]">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">Acerca de <br /><span className="d-block">Nosotros</span></h1>
                            <p className="text-depsac-paragraph text-sm mb-10 leading-6">
                                Somos la elección perfecta para muebles de calidad. Cada pieza que fabricamos refleja artesanía excepcional y diseño cuidadoso.
                                En nuestra empresa, creamos muebles que transforman espacios y hacen de cada hogar un lugar único.
                            </p>
                            <p className="mb-4">
                                <a href="" className="btn bg-depsac-acento font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] mr-2">Cotizar ahora</a>
                                <a href="#" className="btn border-2 border-depsac-acento font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px]">Explorar</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex relative lg:w-[58%] w-full">
                        <div className="hidden lg:block xs:overflow-x-hidden after:absolute x:after:w-[255px] x:after:h-[217px] lg:after:w-[255px] lg:after:h-[217px] after:bg-depsac-banner-right after:bg-contain after:bg-no-repeat after:right-[-60px] lg:after:right-[0px] lg:after:top-[-20px] x:after:right-[-60px] x:after:top-[-60px] xl:after:right-[0px] 2xl:after:right-[-60px]">
                            <Image
                                src="/depsac/images/productos/copeland-discus.png"
                                alt="image"
                                width={780}
                                height={500}
                                className="x:absolute lg:relative left-0 x:max-w-[780px] xl:max-w-[680px] 2xl:max-w-[780px] lg:max-w-[650px] h-auto align-middle box-border z-[2] x:top-[-100px] lg:top-[-50px] lg:right-[-100px]"
                                priority
                            />
                        </div>

                        <div className="lg:hidden xs:overflow-x-hidden after:absolute xs:after:w-[220px] xs:after:h-[192px] after:bg-depsac-banner-right after:bg-contain after:bg-no-repeat after:right-[-60px] xs:after:right-0 xs:after:top-[60px] xs:mt-20">
                            <Image
                                src="/depsac/images/productos/copeland-discus.png"
                                alt="image"
                                width={300}
                                height={200}
                                className="relative left-0 xs:max-w-[500px] h-full align-middle box-border z-[1] xs:top-[0px] xs:right-[0px]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!-- End Hero Section -->
    );
}

function WhyChoose() {
    return (
        <div className="py-28 px-0">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-[0] lg:mr-[0.75px] lg:ml-[0.75px] xs:mx-3 justify-between">
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-depsac-primary text-[2rem] mt-0 mb-6 lg:mb-3 font-medium leading-[1.2] text-center lg:text-left">Por que escogernos</h2>
                        <p className="mt-0 mb-4 text-center lg:text-left lg:mr-3">
                            En nuestro compromiso con la calidad y la excelencia, todos nuestros productos están
                            meticulosamente confeccionados utilizando maderas de la más alta calidad. Cada pieza es creada con esmero, asegurando no solo la
                            durabilidad, sino también un acabado impecable.
                        </p>

                        <div className="my-12 flex flex-wrap mx-2 lg:mr-[0.75px] lg:ml-[0.75px]">
                            <div className="w-1/2 pr-2 lg:pr-0">
                                <div className="mb-8">
                                    <div className="inline-block relative mb-5">
                                        <Image src="/depsac/assets/truck.svg" alt="truck" width={45} height={45} className="align-middle" priority />
                                    </div>
                                    <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Entrega Rápida</h3>
                                    <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">Recibie tus muebles de alta calidad de manera rápida y eficiente. Nuestro servicio de envío rápido
                                        garantiza que tus piezas seleccionadas lleguen a tu puerta en el menor tiempo posible.</p>
                                </div>
                            </div>

                            <div className="w-1/2 pl-2 lg:pl-0">
                                <div className="mb-8">
                                    <div className="inline-block relative mb-5">
                                        <Image src="/depsac/assets/bag.svg" alt="bag" width={45} height={45} className="align-middle" priority />
                                    </div>
                                    <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Cotización Sencilla</h3>
                                    <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">Simplificamos el proceso de cotización para que puedas obtener rápidamente un presupuesto personalizado. Obtén precios transparentes y descubre
                                        cómo hacer realidad tus proyectos de decoración nunca fue tan sencillo.</p>
                                </div>
                            </div>

                            <div className="w-1/2 pr-2 lg:pr-0">
                                <div className="mb-8">
                                    <div className="inline-block relative mb-5">
                                        <Image src="/depsac/assets/support.svg" alt="bag" width={45} height={45} className="align-middle" priority />
                                    </div>
                                    <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Atención Ininterrumpida</h3>
                                    <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">Nuestro equipo de atención al cliente está disponible para responder tus
                                        preguntas, brindarte asesoramiento experto y garantizar una experiencia de compra sin contratiempos</p>
                                </div>
                            </div>

                            <div className="w-1/2 pl-2 lg:pl-0">
                                <div className="mb-8">
                                    <div className="inline-block relative mb-5">
                                        <Image src="/depsac/assets/return.svg" alt="return" width={45} height={45} className="align-middle" priority />
                                    </div>
                                    <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Servicio de Armado Incluido</h3>
                                    <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">Con nosotros, no te preocuparás por ensamblar tus nuevos muebles, ya que nuestro equipo capacitado se encargará de todo. </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="lg:w-[41.67%] w-full mt-10 lg:mt-0">
                        <div className="relative after:absolute after:w-[300px] lg:after:w-[500px] after:h-[200px] after:bg-depsac-whychoose after:bg-no-repeat after:bg-contain after:content-normal after:top-[-80px] after:left-[-95px] after:z-[-1]">
                            <Image
                                src="/depsac/images/proyectos/proyecto1.png"
                                alt="ropero2"
                                width={600}
                                height={600}
                                className="rounded-[20px] max-w-screen-xxs lg:max-w-full h-auto align-middle ml-10 lg:ml-0"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default function nosotros() {
    return (
        <>
            <Banner />

            <WhyChoose />
        </>
    );
};