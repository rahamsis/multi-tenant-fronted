'use client';
import Image from "next/image";

function Banner() {
    return (
        // <!-- Start Hero Section -->
        <div className="bg-depsac-greenBanner pt-[98px] lg:pr-0 x:pb-36 lg:pb-0 lg:mt-[88px]">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
                    <div className="lg:w-[42%] w-full px-3">
                        <div className="relative max-w-md z-[4]">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">Rapido <br /><span className="d-block">Contacto</span></h1>
                            <p className="text-depsac-paragraph text-sm mb-10 leading-6">
                                Cada pieza es creada con esmero, asegurando no solo la durabilidad, sino también un acabado impecable. Nos enorgullece ofrecer productos que no solo son visualmente atractivos,
                                sino que también reflejan la artesanía excepcional y el compromiso con la excelencia en cada detalle.
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
function Content() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const nombre = form.fname.value;
        const apellidos = form.lname.value;
        const correo = form.email.value;
        const mensaje = form.message.value;

        const asunto = encodeURIComponent("Consulta desde el formulario web");
        const cuerpo = encodeURIComponent(
            `Nombre: ${nombre} ${apellidos}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`
        );

        window.location.href = `mailto:maria.espinoza@depsac.com.pe?subject=${asunto}&body=${cuerpo}`;
    };

    return (
        <div className="py-28 px-0">
            <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">

                <div className="block text-sm">
                    <div className="flex flex-wrap mt-0 -mx-[0.75rem] justify-center">

                        <div className="w-full lg:w-[66.67%] pb-[1.5rem] px-[0.75rem]">

                            <div className="flex flex-wrap mt-0 mx-[-0.75rem] mb-12" id="formulario">
                                <div className="w-full lg:w-[33.33%] px-[0.75rem]">
                                    <a href="https://maps.app.goo.gl/5raavVWzFBJjWfzE8" target="_blank">
                                        <div className="leading-[1.5rem] items-center flex " data-aos="fade-left" data-aos-delay="0">
                                            <div className="rounded-[10px] flex basis-[50px] lg:basis-[72px] h-[50px] leading-[50px] items-center bg-depsac-greenBanner mr-5 text-white mb-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mx-auto" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                                                </svg>
                                            </div>
                                            {/* <!-- /.icon --> */}
                                            <div className="service-contents">
                                                <p className="mt-0 mb-4">Calle 3 Mz A8 Lte 41 Urb. Sol de Carabayllo I Etapa - Carabayllo.</p>
                                            </div>
                                            {/* <!-- /.service-contents--> */}
                                        </div>
                                    </a>
                                    {/* <!-- /.service --> */}
                                </div>

                                <div className="w-full lg:w-[33.33%] px-[0.75rem]" >
                                    {/* <a href="mailto:rahamsiscg.95@gmail.com" target="_blank"> */}
                                    <a href="#">
                                        <div className="leading-[1.5] items-center flex" data-aos="fade-left" data-aos-delay="0">
                                            <div className="rounded-[10px] flex basis-[50px] h-[50px] leading-[50px] items-center bg-depsac-greenBanner mr-5 text-white mb-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill mx-auto" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                                                </svg>
                                            </div>
                                            {/* <!-- /.icon --> */}
                                            <div className="service-contents">
                                                <p className="mt-0 mb-4">maria.espinoza@depsac.com.pe</p>
                                            </div>
                                            {/* <!-- /.service-contents--> */}
                                        </div>
                                    </a>
                                    {/* <!-- /.service --> */}
                                </div>

                                <div className="w-full lg:w-[33.33%] px-[0.75rem]">
                                    <a href="tel:+51917584018" target="_blank">
                                        <div className="leading-[1.5] items-center flex" data-aos="fade-left" data-aos-delay="0">
                                            <div className="rounded-[10px] flex basis-[50px] h-[50px] leading-[50px] items-center bg-depsac-greenBanner mr-5 text-white mb-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill mx-auto" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                                </svg>
                                            </div>

                                            {/* <!-- /.icon --> */}
                                            <div className="service-contents">
                                                <p className="mt-0 mb-4">+51 963 422 245</p>
                                            </div>
                                            {/* <!-- /.service-contents--> */}
                                        </div>
                                    </a>
                                    {/* <!-- /.service --> */}
                                </div>
                            </div>

                            <div className="blockp mt-0 mb-12">
                                <p>Recuerda que puedes hacer tu cotización en el formulario de abajo o escribiendonos por <span className="font-bold"> Whatsapp</span> en el botón verde.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="block mt-0">
                                <div className="flex flex-wrap mt-0">
                                    <div className="w-1/2 pr-3">
                                        <div className="form-group">
                                            <label className="text-black inline-block">Nombre</label>
                                            <input type="text" className="form-control h-[50px] rounded-xl font-serif block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-depsac-borderInputFooter appearance-none m-0" id="fname" placeholder="Ingrese su nombre" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-3">
                                        <div className="form-group">
                                            <label className="text-black inline-block">Apellidos</label>
                                            <input type="text" className="form-control h-[50px] rounded-xl font-serif block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-depsac-borderInputFooter appearance-none m-0" id="lname" placeholder="Ingrese su(s) apellido(s)" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <label className="text-black inline-block">Su correo</label>
                                    <input type="email" className="form-control h-[50px] rounded-xl font-serif block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-depsac-borderInputFooter appearance-none m-0" id="email" placeholder="Ingrese su correo" />
                                </div>

                                <div className="form-group mb-5 py-2">
                                    <label className="text-black inline-block" >Mensaje</label>
                                    <textarea rows={5} name="" className="form-control rounded-xl font-serif block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-depsac-borderInputFooter appearance-none m-0 py-2" id="message"></textarea>
                                </div>

                                <button type="submit" className="cursor-pointer font-semibold py-3 px-[30px] rounded-[30px] text-white bg-depsac-primary border-depsac-primary inline-block leading-[1.5] text-center align-middle m-0">Enviar</button>
                            </form>

                        </div>

                    </div>

                </div>

            </div>


        </div>
    );
}

export default function Contact() {
    return (
        <>
            <Banner />

            <Content />
        </>
    );
};