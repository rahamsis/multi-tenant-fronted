import Image from "next/image";

function WhyChoose() {
    return (
        <div className="py-10 lg:py-28 px-4 lg:px-20 x:px-16 2xl:px-0">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-[0] xs:mx-3 justify-between">
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-depsac-primary text-[2rem] mt-0 mb-6 lg:mb-3 font-medium leading-[1.2] text-center lg:text-left">¿Quiénes somos?</h2>
                        <p className="mt-0 mb-4 lg:text-left lg:mr-3 text-justify">
                            Somos una empresa especialistas en refrigeración comercial e industrial, diseñamos y desarrollamos
                            proyectos integrales de acuerdo a las exigencias y necesidad de nuestros clientes.
                            Contamos con personal altamente calificado lo cual nos permite ofrecer productos y servicios
                            con los mas altos estándares de calidad para su empresa.
                        </p>

                        <div className="my-12 flex flex-wrap mx-2 lg:mr-[0.75px] lg:ml-[0.75px]">
                            <div className="w-full lg:w-1/2 pr-2 lg:pr-0">
                                <div className="mb-8">
                                    <div className="inline-block relative mb-5">
                                        <i className="bi bi-crosshair text-4xl"></i>
                                    </div>
                                    <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">misión</h3>
                                    <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">
                                        Brindar productos y servicios de calidad, ofreciendo equipos y accesorios de las marcas mas reconocidas del rubro de la refrigeración.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 pl-2 lg:pl-0">
                                <div className="mb-8">
                                    <div className="inline-block relative mb-5">
                                        <i className="bi bi-lightbulb text-4xl"></i>
                                    </div>
                                    <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Visión</h3>
                                    <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1 text-justify">
                                        Ser una empresa líder en el rubro de la refrigeración, desarrollando y brindando servicio de calidad de acuerdo a las innovaciones y exigencias del mercado.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 pr-2 lg:pr-0">
                                <div className="mb-8">
                                    <div className="inline-block relative mb-5">
                                        <i className="bi bi-buildings text-4xl"></i>
                                    </div>
                                    <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Cultura de la Empresa</h3>
                                    <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1 text-justify">
                                        En nuestra empresa fomentamos un ambiente de respeto,
                                        innovación y colaboración. Creemos en el trabajo en equipo, el aprendizaje constante y el compromiso con nuestros clientes.
                                        Valoramos la creatividad y la responsabilidad, construyendo juntos un futuro sostenible y lleno de oportunidades.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[41.67%] w-full">
                        <div className="relative after:absolute after:w-[300px] lg:after:w-[500px] after:h-[200px] after:bg-depsac-whychoose after:bg-no-repeat after:bg-contain after:content-normal after:top-[-80px] after:left-[-95px] after:z-[-1]">
                            <Image
                                src="/cygrefrisac/images/quienessomos.jpg"
                                alt="ropero2"
                                width={600}
                                height={600}
                                className="rounded-[20px] h-auto align-middle"
                                priority={true}
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

            <WhyChoose />
        </>
    );
};