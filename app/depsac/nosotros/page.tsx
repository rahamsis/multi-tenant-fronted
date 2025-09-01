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

// function Team() {
//     return (
//         <div className="py-4 lg:py-28 px-0">
//             <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">

//                 <div className="flex flex-wrap mt-0 -mx-[0.75] mb-12">
//                     <div className="w-full lg:w-[41.67%] mx-auto text-center">
//                         <h2 className="text-depsac-primary text-4xl mt-0 mb-2 font-medium leading-[1.2rem]">Our Team</h2>
//                     </div>
//                 </div>

//                 <div className="flex flex-wrap mt-0 mx-[0.75rem] text-sm leading-[28px] text-depsac-wychoose">

//                     {/* <!-- Start Column 1 --> */}
//                     <div className="w-full lg:w-1/4 mb-12 lg:mb-0 px-[0.5rem]">
//                         <img src="assets/person_1.jpg" className="max-w-full h-auto mb-12 align-middle" />
//                         <h3 className="text-[1.75rem] mt-0 mb-2 font-medium leading-[1.2rem]"><a href="#" className="text-depsac-primary underline"><span className="">Lawson</span> Arnold</a></h3>
//                         <span className="block mb-6">CEO, Founder, Atty.</span>
//                         <p className="mt-0 mb-0 lg:mb-4">Separated they live in.
//                             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//                         <p className="mb-0 mt-0"><a href="#" className="font-semibold underline text-depsac-primary">Leer más <span className=""></span></a></p>
//                     </div>
//                     {/* <!-- End Column 1 --> */}

//                     {/* <!-- Start Column 2 --> */}
//                     <div className="w-full lg:w-1/4 mb-12 lg:mb-0 px-[0.5rem]">
//                         <img src="assets/person_2.jpg" className="max-w-full h-auto mb-12 align-middle" />

//                         <h3 className="text-[1.75rem] mt-0 mb-2 font-medium leading-[1.2rem]"><a href="#" className="text-depsac-primary underline"><span className="">Jeremy</span> Walker</a></h3>
//                         <span className="block mb-6">CEO, Founder, Atty.</span>
//                         <p className="mt-0 mb-0 lg:mb-4">Separated they live in.
//                             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//                         <p className="mb-0 mt-0"><a href="#" className="font-semibold underline text-depsac-primary">Learn More <span className=""></span></a></p>

//                     </div>
//                     {/* <!-- End Column 2 --> */}

//                     {/* <!-- Start Column 3 --> */}
//                     <div className="w-full lg:w-1/4 mb-12 lg:mb-0 px-[0.5rem]">
//                         <img src="assets/person_3.jpg" className="max-w-full h-auto mb-12 align-middle" />
//                         <h3 className="text-[1.75rem] mt-0 mb-2 font-medium leading-[1.2rem]"><a href="#" className="text-depsac-primary underline"><span className="">Patrik</span> White</a></h3>
//                         <span className="block mb-6">CEO, Founder, Atty.</span>
//                         <p className="mt-0 mb-0 lg:mb-4">Separated they live in.
//                             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//                         <p className="mb-0 mt-0"><a href="#" className="font-semibold underline text-depsac-primary">Learn More <span className=""></span></a></p>
//                     </div>
//                     {/* <!-- End Column 3 --> */}

//                     {/* <!-- Start Column 4 --> */}
//                     <div className="w-full lg:w-1/4 mb-12 lg:mb-0 px-[0.5rem]">
//                         <img src="assets/person_4.jpg" className="max-w-full h-auto mb-12 align-middle" />

//                         <h3 className="text-[1.75rem] mt-0 mb-2 font-medium leading-[1.2rem]"><a href="#" className="text-depsac-primary underline"><span className="">Kathryn</span> Ryan</a></h3>
//                         <span className="block mb-6">CEO, Founder, Atty.</span>
//                         <p className="mt-0 mb-0 lg:mb-4">Separated they live in.
//                             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//                         <p className="mb-0 mt-0"><a href="#" className="font-semibold underline text-depsac-primary">Learn More <span className=""></span></a></p>


//                     </div>
//                     {/* <!-- End Column 4 --> */}

//                 </div>
//             </div>
//         </div>
//     );
// }

// function Testimonials() {
//     return (
//         <div className="lg:pt-28 xs:pt-0 pr-0 pb-48 pl-0">
//             <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">
//                 <div className="flex flex-wrap mt-0 -mx-[0.75]">
//                     <div className="w-[58.33%] mx-auto text-center">
//                         <h2 className="text-depsac-primary text-[2rem] mt-0 mb-2 font-medium leading-tight">Testimonials</h2>
//                     </div>
//                 </div>

//                 <div className="justify-center flex flex-wrap mt-0 -mx-[0.75]">
//                     <div className="w-full">
//                         <div className="relative text-center">

//                             <div id="testimonial-nav" aria-label="Carousel Navigation" className="xs:hidden lg:block absolute top-1/2 z-[99] w-full">
//                                 <span className="-left-[10px] cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-depsac-primary" data-controls="prev" aria-controls="tns1">
//                                     <i className="bi bi-chevron-left"></i>
//                                 </span>
//                                 <span className="right-0 cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-depsac-primary" data-controls="next" aria-controls="tns1">
//                                     <i className="bi bi-chevron-right"></i>
//                                 </span>
//                             </div>

//                             <div className="p-0" id="tns1-ow">
//                                 <div className="absolute lg:-bottom-[50px] bottom-0 left-1/2 -translate-x-1/2" aria-label="Carousel Pagination">
//                                     <button data-nav="0" aria-controls="tns1" aria-label="Carousel Page 1 (Current Slide)" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
//                                     <button data-nav="1" aria-controls="tns1" aria-label="Carousel Page 2" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
//                                     <button data-nav="2" aria-controls="tns1" aria-label="Carousel Page 3" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
//                                 </div>

//                                 <div className="absolute -left-[10000em]" aria-live="polite" aria-atomic="true">slide <span className="current">2</span>  of 3</div>
//                                 <div id="tns1-mw" className="overflow-hidden">
//                                     <div className="pt-8" id="tns1-iw">
//                                         <div className="tns-carousel whitespace-nowrap w-[500%] transition-products" id="tns1">

//                                             <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                                                 <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                                                     <div className="lg:w-[66.67%] w-full mx-auto">

//                                                         <div className="testimonial-block text-center">
//                                                             <blockquote className="mb-12 leading-8 lg:text-lg">
//                                                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                                                             </blockquote>

//                                                             <div className="author-info">
//                                                                 <div className="mb-5">
//                                                                     <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] mx-auto" />
//                                                                 </div>
//                                                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                                                             </div>
//                                                         </div>

//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                                                 <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                                                     <div className="lg:w-[66.67%] w-full mx-auto">

//                                                         <div className="testimonial-block text-center">
//                                                             <blockquote className="mb-12 leading-8 xs:text-sm lg:text-lg">
//                                                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                                                             </blockquote>

//                                                             <div className="author-info">
//                                                                 <div className="mb-5">
//                                                                     <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle mx-auto" />
//                                                                 </div>
//                                                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                                                             </div>
//                                                         </div>

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- END item --> */}

//                                             <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                                                 <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                                                     <div className="lg:w-[66.67%] w-full mx-auto">

//                                                         <div className="testimonial-block text-center">
//                                                             <blockquote className="mb-12 leading-8 text-lg">
//                                                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                                                             </blockquote>

//                                                             <div className="author-info">
//                                                                 <div className="mb-5">
//                                                                     <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
//                                                                 </div>
//                                                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                                                             </div>
//                                                         </div>

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- END item --> */}

//                                             <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                                                 <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                                                     <div className="lg:w-[66.67%] w-full mx-auto">

//                                                         <div className="testimonial-block text-center">
//                                                             <blockquote className="mb-12 leading-8 text-lg">
//                                                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                                                             </blockquote>

//                                                             <div className="author-info">
//                                                                 <div className="mb-5">
//                                                                     <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
//                                                                 </div>
//                                                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                                                             </div>
//                                                         </div>

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- END item --> */}

//                                             <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                                                 <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                                                     <div className="lg:w-[66.67%] w-full mx-auto">

//                                                         <div className="testimonial-block text-center">
//                                                             <blockquote className="mb-12 leading-8 text-lg">
//                                                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                                                             </blockquote>

//                                                             <div className="author-info">
//                                                                 <div className="mb-5">
//                                                                     <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
//                                                                 </div>
//                                                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                                                             </div>
//                                                         </div>

//                                                     </div>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function nosotros() {
    return (
        <>
            <Banner />

            <WhyChoose />

            {/* <Team />

            <Testimonials /> */}
        </>
    );
};