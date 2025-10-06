'use client';
import { getWebSite } from "@/app/utils/actions";
import { useTenant } from "@/app/context/TenantContext";
import { WebSite } from "@/types/webSite";
import { useState, useEffect } from "react"

function Content({ dataWebsite }: { dataWebsite: WebSite }) {

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

        window.location.href = `mailto:${dataWebsite.correo}?subject=${asunto}&body=${cuerpo}`;
    };

    return (
        <div className="py-10 lg:py-28 px-4 lg:px-20 x:px-16 2xl:px-0">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-[0] xs:mx-3 justify-between">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pb-[1.5rem] px-[0.75rem]">

                        <div>
                            <div>
                                {/* Correo */}
                                <div className="">
                                    <a
                                        href={`mailto:${dataWebsite?.correo}`}
                                        className="flex flex-row items-center h-full py-4 rounded-lg transition hover:bg-gray-50"
                                        data-aos="fade-left"
                                        data-aos-delay="100"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-cygrefrisac-header text-white mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm md:text-base m-0">
                                            {dataWebsite?.correo}
                                        </p>
                                    </a>
                                </div>

                                {/* Teléfono */}
                                <div className="">
                                    <a
                                        href={`tel:+51${dataWebsite?.telefonoPrincipal}`}
                                        className="flex flex-row items-center h-full py-4 rounded-lg transition hover:bg-gray-50"
                                        data-aos="fade-left"
                                        data-aos-delay="200"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-cygrefrisac-header text-white mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm md:text-base m-0">
                                            {dataWebsite?.telefonoPrincipal.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {dataWebsite?.telefonoSecundario ? " - " + dataWebsite?.telefonoPrincipal.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : ""}
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="block mt-0 mb-12">
                                <p>Recuerda que puedes hacer tu cotización en el formulario de abajo o escribiendonos por <span className="font-bold"> Whatsapp</span> en el botón verde.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="block mt-0">
                                <div className="flex flex-wrap mt-0">
                                    <div className="w-1/2 pr-3">
                                        <div className="form-group">
                                            <label className="text-black inline-block">Nombre</label>
                                            <input type="text" className="form-control h-[50px] rounded-xl font-serif block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-cygrefrisac-header appearance-none m-0" id="fname" placeholder="Ingrese su nombre" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-3">
                                        <div className="form-group">
                                            <label className="text-black inline-block">Apellidos</label>
                                            <input type="text" className="form-control h-[50px] rounded-xl font-serif block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-cygrefrisac-header appearance-none m-0" id="lname" placeholder="Ingrese su(s) apellido(s)" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <label className="text-black inline-block">Su correo</label>
                                    <input type="email" className="form-control h-[50px] rounded-xl font-serif block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-cygrefrisac-header appearance-none m-0" id="email" placeholder="Ingrese su correo" />
                                </div>

                                <div className="form-group mb-5 py-2">
                                    <label className="text-black inline-block" >Mensaje</label>
                                    <textarea rows={5} name="" className="form-control rounded-xl font-serif block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-cygrefrisac-header appearance-none m-0 py-2" id="message"></textarea>
                                </div>

                                <button type="submit" className="cursor-pointer font-semibold py-3 px-[30px] rounded-[30px] text-white bg-cygrefrisac-header border-cygrefrisac-header inline-block leading-[1.5] text-center align-middle m-0">Enviar</button>
                            </form>
                        </div>

                        <div className="flex flex-col h-full">
                            <div className="w-full h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4748.461775441861!2d-77.0473918885857!3d-11.8690619883055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d0ce1b3ed5b7%3A0xe53856c2759d1ae6!2sResidencial%20condominio%20sol%20de%20carabayllo!5e1!3m2!1ses-419!2spe!4v1759651268869!5m2!1ses-419!2spe"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-2xl w-full h-full"
                                ></iframe>
                            </div>

                            {/* Dirección */}
                            <div className="py-4">
                                <a
                                    href="https://maps.app.goo.gl/5raavVWzFBJjWfzE8"
                                    target="_blank"
                                    className="flex flex-row items-center  rounded-lg transition hover:bg-gray-50"
                                    data-aos="fade-left"
                                    data-aos-delay="0"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-cygrefrisac-header text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm md:text-base ml-4">
                                        Calle 3 Mz A8 Lte 41 Urb. Sol de Carabayllo I Etapa - Carabayllo.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default function Contact() {
    const { tenant } = useTenant();

    const [webSite, setWebsite] = useState<WebSite[]>([]);

    // llenar los productos
    useEffect(() => {
        if (!tenant) return; // evita llamada vac

        async function fetchData() {
            try {
                const data = await getWebSite(tenant);
                setWebsite(data);
            } catch (error) {
                console.error("Error obteniendo datos del website desde /contacto:", error);
            }
        }
        fetchData();
    }, [tenant]);


    return (
        <>
            <Content dataWebsite={webSite[0]} />
        </>
    );
};