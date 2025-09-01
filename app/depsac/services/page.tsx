'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

function Banner() {
  return (
    // <!-- Start Hero Section -->
    <div className="bg-depsac-greenBanner pt-[98px] lg:pr-0 x:pb-36 lg:pb-0 lg:mt-[88px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
          <div className="lg:w-[42%] w-full px-3">
            <div className="relative max-w-md z-[4]">
              <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">Nuestros <br /><span className="d-block">Servicios</span></h1>
              <p className="text-depsac-paragraph text-sm mb-10 leading-6">
                Nos dedicamos a ofrecer servicios de alta calidad. Nos destacamos por la excelencia en cada detalle, brindando soluciones que superan las expectativas. Tu satisfacción es nuestra prioridad, y trabajamos incansablemente para garantizar servicios que
                reflejen nuestro compromiso con la calidad y la excelencia.
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
                className="x:absolute lg:relative left-0 x:max-w-[780px] xl:max-w-[680px] 2xl:max-w-[780px] lg:max-w-[650px] h-auto align-middle box-border z-[2] x:top-[-100px] lg:top-[-10px] lg:right-[-100px]"
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

interface Props {
  image: string
  name: String
  price: String
}

function Item(props: Props) {
  const imgProduct = useRef<HTMLImageElement>(null);
  const btnPlus = useRef<HTMLSpanElement>(null);
  const background = useRef<HTMLButtonElement>(null);
  const description = useRef<HTMLHeadingElement>(null);
  const nameProduct = useRef<HTMLHeadingElement>(null);
  const btnCotizar = useRef<HTMLParagraphElement>(null);

  const addElementsProduct = () => {
    imgProduct.current?.classList.remove('translate-y-0')
    imgProduct.current?.classList.add('opacity-100', '-translate-y-10')
    background.current?.classList.add('transform', 'opacity-100', 'scale-y-100')
    btnPlus.current?.classList.add('translate-y-1/2', 'duration-500', 'opacity-100')
  };

  const quitElementsProduct = () => {
    imgProduct.current?.classList.remove('opacity-100', '-translate-y-10')
    imgProduct.current?.classList.add('translate-y-0')
    background.current?.classList.remove('transform', 'opacity-100', 'scale-y-100')
    btnPlus.current?.classList.remove('translate-y-1/2', 'duration-500', 'opacity-100')
  };

  function goToContact() {
    window.location.href = "/contact#formulario"
  }

  function showDescription() {
    nameProduct.current?.classList.add('hidden')
    btnCotizar.current?.classList.add('hidden')
    description.current?.classList.remove('hidden')
  }

  const hideDescription = () => {
    nameProduct.current?.classList.remove('hidden')
    btnCotizar.current?.classList.remove('hidden')
    description.current?.classList.add('hidden')
  }

  return (
    <div className="w-full lg:w-1/4 mb-0 px-3 mt-11 lg:mt-0" onMouseEnter={(e) => window.innerWidth >= 480 ? addElementsProduct() : null} onMouseLeave={quitElementsProduct}>
      <button className="text-center block relative pb-[50px]  cursor-pointer bottom-0  after:absolute" >
        {/* fondo */}
        <span ref={background} className="w-full bottom-0 left-0 h-3/4 bg-depsac-products absolute rounded-[10px] transition-all duration-500 ease-in-out origin-bottom scale-y-0 opacity-0 "></span>
        {/* imagen */}
        <Image
          ref={imgProduct}
          alt={"product"}
          width={300} height={300}
          src={props.image}
          className="max-w-full h-auto align-middle mb-[30px] top-0 relative transform transition-all duration-500 ease-in-out"
          priority
        />
        {/* texto */}
        <h3 ref={nameProduct} className="text-depsac-primary font-semibold text-base leading-5 mb-2 mt-0 relative">{props.name}</h3>
        <h3 ref={description} className="hidden text-depsac-primary h-[70px] -mt-[15px] text-center text-base leading-5 mb-2 relative">
          {props.name}
        </h3>

        {/* <strong className="text-depsac-primary font-extrabold text-lg relative">S/ {props.price}</strong> */}
        <p ref={btnCotizar} className="text-center relative pt-3" onClick={goToContact}><Link href="/contact" className="font-extrabold pt-3 pr-[30px] pb-3 pl-[30px] rounded-[30px] text-depsac-fondo_claro bg-depsac-primary border-depsac-primary">Cotizar</Link></p>


        {/* boton plus */}
        <a href="/shop">
          <span ref={btnPlus} onMouseEnter={showDescription} onMouseLeave={hideDescription} className="flex absolute w-9 h-9 left-[46%] bg-depsac-primary bottom-4 mb-[-17.5px] text-center items-center rounded-[50%] transition-depsac-products opacity-0">
            <Image
              alt={"product"}
              width={30} height={30}
              src="/depsac/assets/cross.svg"
              className="w-4 h-4 max-w-full mx-auto"
              priority
            />
          </span>
        </a>

      </button>
    </div>
  );
}

function Content() {
  return (
    <div className="lg:py-28 py-11 px-0">
      <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">
        <div className="flex flex-wrap mx-3 lg:mx-[-0.75rem] my-12">
          <div className="w-1/2 lgw-1/4 mb-6">
            <div className="mb-[30px]">
              <div className="inline-block relative mb-5 after:w-[33px] after:h-[33px] after:absolute after:bg-depsac-nosotros after:rounded-[50%] after:right-[-8px] after:bottom-0">
                <Image src="/depsac/assets/truck.svg" alt="truck" width={45} height={45} className="align-middle" priority />
              </div>
              <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-5">Entrega Rápida</h3>
              <p className="text-sm leading-[22px] text-depsac-wychoose mt-0 mb-4 mx-1">Disfruta de la comodidad de recibir tus muebles de alta calidad de manera rápida y eficiente. Nuestro servicio de envío rápido
                garantiza que tus piezas seleccionadas lleguen a tu puerta en el menor tiempo posible, para que puedas disfrutar de tu nuevo mobiliario sin demoras</p>
            </div>
          </div>

          <div className="w-1/2 lgw-1/4 mb-62">
            <div className="mb-[30px]">
              <div className="inline-block relative mb-5 after:w-[33px] after:h-[33px] after:absolute after:bg-depsac-nosotros after:rounded-[50%] after:right-[-8px] after:bottom-0">
                <Image src="/depsac/assets/bag.svg" alt="bag" width={45} height={45} className="align-middle" priority />
              </div>
              <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-5">Cotización Sencilla</h3>
              <p className="text-sm leading-[22px] text-depsac-wychoose mt-0 mb-4 mx-1">Simplificamos el proceso de cotización para que puedas obtener rápidamente un presupuesto personalizado. Nuestro sistema fácil de usar
                te permite seleccionar tus muebles preferidos y recibir una cotización sin complicaciones. Obtén precios transparentes y descubre cómo hacer realidad tus proyectos de decoración nunca fue tan sencillo.</p>
            </div>
          </div>

          <div className="w-1/2 lgw-1/4 mb-62">
            <div className="mb-[30px]">
              <div className="inline-block relative mb-5 after:w-[33px] after:h-[33px] after:absolute after:bg-depsac-nosotros after:rounded-[50%] after:right-[-8px] after:bottom-0">
                <Image src="/depsac/assets/support.svg" alt="support" width={45} height={45} className="align-middle" priority />
              </div>
              <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-5">Atención Ininterrumpida</h3>
              <p className="text-sm leading-[22px] text-depsac-wychoose mt-0 mb-4 mx-1">Estamos aquí para ti las 24 horas del día, los 7 días de la semana. Nuestro equipo de atención al cliente está disponible para responder tus
                preguntas, brindarte asesoramiento experto y garantizar una experiencia de compra sin contratiempos. Tu comodidad y satisfacción son nuestra prioridad en cualquier momento del día.</p>
            </div>
          </div>

          <div className="w-1/2 lgw-1/4 mb-62">
            <div className="mb-[30px]">
              <div className="inline-block relative mb-5 after:w-[33px] after:h-[33px] after:absolute after:bg-depsac-nosotros after:rounded-[50%] after:right-[-8px] after:bottom-0">
                <Image src="/depsac/assets/return.svg" alt="return" width={45} height={45} className="align-middle" priority />
              </div>
              <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-5">Servicio de Armado Incluido</h3>
              <p className="text-sm leading-[22px] text-depsac-wychoose mt-0 mb-4 mx-1">Simplificamos tu experiencia de compra al ofrecer servicio de armado profesional de muebles de forma gratuita. Con nosotros, no te
                preocuparás por ensamblar tus nuevos muebles, ya que nuestro equipo capacitado se encargará de todo. Disfruta de la comodidad de recibir tus muebles listos para usar, sin complicaciones ni esfuerzos
                adicionales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="pt-0 pb-28">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap mt-0 mx-3 lg:mx-[-0.75]">

          {/* <!-- Start Column 1 --> */}
          <div className="w-full lg:w-1/4 mb-0">
            <h2 className="mb-6 text-2xl mt-0 font-medium leading-[1.2] text-depsac-primary text-center lg:text-left">Elaborado con excelente material.</h2>
            <p className="mb-6 mt-0 text-center lg:text-left">
              Nuestros productos destacan por estar fabricados con las mejores maderas, garantizando una calidad superior y un acabado impecable. Cada detalle refleja nuestro compromiso con la excelencia en la creación de muebles duraderos y visualmente atractivos.
            </p>
            <p className="xs:text-center lg:text-left"><a href="shop.html" className="font-semibold pt-3 pr-[30px] pb-3 pl-[30px] rounded-[30px] text-white bg-depsac-primary border-depsac-primary">Explorar</a></p>
          </div>
          {/* <!-- End Column 1 --> */}

          {/* <!-- Start Column 2 --> */}
          <Item image={"/depsac/images/productos/valvula-expansion-electronica.png"} name={"Mesa de Noche"} price={"00.00"} />
          {/* <!-- End Column 2 --> */}

          {/* <!-- Start Column 3 --> */}
          <Item image={"/depsac/images/productos/valvula-expansion-termostatica.png"} name={"Cama 2 plz"} price={"00.00"} />
          {/* <!-- End Column 3 --> */}

          {/* <!-- Start Column 4 --> */}
          <Item image={"/depsac/images/productos/tiro-forzado-mipal.png"} name={"Ropero 3 Puertas"} price={"00.00"} />
          {/* <!-- End Column 4 --> */}

        </div>
      </div>
    </div>
  );
}

// function Testimonials() {
//   return (
//     <div className="lg:pt-28 xs:pt-0 pr-0 pb-48 pl-0">
//       <div className="max-w-[1320px] w-full px-[0.75rem] mx-auto">
//         <div className="flex flex-wrap mt-0 -mx-[0.75]">
//           <div className="w-[58.33%] mx-auto text-center">
//             <h2 className="text-depsac-primary text-[2rem] mt-0 mb-2 font-medium leading-tight">Testimonials</h2>
//           </div>
//         </div>

//         <div className="justify-center flex flex-wrap mt-0 -mx-[0.75]">
//           <div className="w-full">
//             <div className="relative text-center">

//               <div id="testimonial-nav" aria-label="Carousel Navigation" className="xs:hidden lg:block absolute top-1/2 z-[99] w-full">
//                 <span className="-left-[10px] cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-depsac-primary" data-controls="prev" aria-controls="tns1">
//                   <i className="bi bi-chevron-left"></i>
//                 </span>
//                 <span className="right-0 cursor-pointer absolute w-[58px] h-[58px] leading-[58px] rounded-[50%] bg-prevNext text-depsac-primary" data-controls="next" aria-controls="tns1">
//                   <i className="bi bi-chevron-right"></i>
//                 </span>
//               </div>

//               <div className="p-0" id="tns1-ow">
//                 <div className="absolute lg:-bottom-[50px] bottom-0 left-1/2 -translate-x-1/2" aria-label="Carousel Pagination">
//                   <button data-nav="0" aria-controls="tns1" aria-label="Carousel Page 1 (Current Slide)" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
//                   <button data-nav="1" aria-controls="tns1" aria-label="Carousel Page 2" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
//                   <button data-nav="2" aria-controls="tns1" aria-label="Carousel Page 3" className="mr-4 bg-none border-none inline-block relative w-0 h-[7px] m-[2px] after:block after:w-2 after:h-2 after:left-0 after:top-0 after:absolute after:rounded-[50%] after:bg-testimonials"></button>
//                 </div>

//                 <div className="absolute -left-[10000em]" aria-live="polite" aria-atomic="true">slide <span className="current">2</span>  of 3</div>
//                 <div id="tns1-mw" className="overflow-hidden">
//                   <div className="pt-8" id="tns1-iw">
//                     <div className="tns-carousel whitespace-nowrap w-[500%] transition-depsac-products" id="tns1">

//                       <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                         <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                           <div className="lg:w-[66.67%] w-full mx-auto">

//                             <div className="testimonial-block text-center">
//                               <blockquote className="mb-12 leading-8 lg:text-lg">
//                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                               </blockquote>

//                               <div className="author-info">
//                                 <div className="mb-5">
//                                   <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] mx-auto" />
//                                 </div>
//                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                               </div>
//                             </div>

//                           </div>
//                         </div>
//                       </div>

//                       <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                         <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                           <div className="lg:w-[66.67%] w-full mx-auto">

//                             <div className="testimonial-block text-center">
//                               <blockquote className="mb-12 leading-8 xs:text-sm lg:text-lg">
//                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                               </blockquote>

//                               <div className="author-info">
//                                 <div className="mb-5">
//                                   <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle mx-auto" />
//                                 </div>
//                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                               </div>
//                             </div>

//                           </div>
//                         </div>
//                       </div>
//                       {/* <!-- END item --> */}

//                       <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                         <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                           <div className="lg:w-[66.67%] w-full mx-auto">

//                             <div className="testimonial-block text-center">
//                               <blockquote className="mb-12 leading-8 text-lg">
//                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                               </blockquote>

//                               <div className="author-info">
//                                 <div className="mb-5">
//                                   <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
//                                 </div>
//                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                               </div>
//                             </div>

//                           </div>
//                         </div>
//                       </div>
//                       {/* <!-- END item --> */}

//                       <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                         <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                           <div className="lg:w-[66.67%] w-full mx-auto">

//                             <div className="testimonial-block text-center">
//                               <blockquote className="mb-12 leading-8 text-lg">
//                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                               </blockquote>

//                               <div className="author-info">
//                                 <div className="mb-5">
//                                   <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
//                                 </div>
//                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                               </div>
//                             </div>

//                           </div>
//                         </div>
//                       </div>
//                       {/* <!-- END item --> */}

//                       <div className="w-[20%] text-sm inline-block align-top whitespace-normal" aria-hidden="true" >
//                         <div className="justify-center flex flex-wrap mt-0 lg:-mx-[0.75rem] mx-0">
//                           <div className="lg:w-[66.67%] w-full mx-auto">

//                             <div className="testimonial-block text-center">
//                               <blockquote className="mb-12 leading-8 text-lg">
//                                 <p className="mt-0 mb-4">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
//                               </blockquote>

//                               <div className="author-info">
//                                 <div className="mb-5">
//                                   <img src="assets/person-1.png" alt="Maria Jones" className="h-auto max-w-[80px] rounded-[50%] align-middle" />
//                                 </div>
//                                 <h3 className="text-sm font-bold text-depsac-primary mb-0 mt-0 leading-tight">Maria Jones</h3>
//                                 <span className="mb-4 block">CEO, Co-Founder, XYZ Inc.</span>
//                               </div>
//                             </div>

//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Services() {
  return (
    <>
      <Banner />

      <Content />

      <Products />

      {/* <Testimonials /> */}
    </>
  );
}