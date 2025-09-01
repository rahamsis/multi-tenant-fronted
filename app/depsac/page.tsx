'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function Banner() {
  return (
    // <!-- Start Hero Section -->
    <div className="bg-depsac-primary pt-[98px] lg:pr-0 x:pb-36 lg:pb-0 lg:mt-[88px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap mt-0 mx-[-12] justify-between px-3">
          <div className="lg:w-[42%] w-full px-3">
            <div className="relative max-w-md z-[4]">
              <h1 className="text-depsac-fondo_claro text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">
                {/* <span className="text-depsac-fondo_claro text-xl lg:text-3xl"> y proyectos</span> <br /> */}
                <span className="d-block">Diseño de equipos y proyectos</span></h1>
              <p className="text-depsac-fondo_claro text-sm mb-10 leading-6 text-justify">
                Nos especializamos en el diseño de equipos de refrigeración industrial y el desarrollo de proyectos metalúrgicos a medida. Combinamos ingeniería de alto nivel,
                innovación y compromiso con la calidad para ofrecer soluciones eficientes, duraderas y adaptadas a las necesidades de cada cliente.
                Ya sea que necesites optimizar tus procesos térmicos o llevar a cabo una obra metalúrgica compleja, en Depsac convertimos tus ideas en resultados concretos.
              </p>
              <p className="mb-4">
                <Link href="/contact" className="btn bg-depsac-acento font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] mr-2">Cotizar ahora</Link>
                <Link href="/shop" className="text-depsac-fondo_claro btn border-2 border-depsac-acento font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px]">Explorar</Link>
              </p>
            </div>
          </div>
          <div className="flex relative lg:w-[58%] w-full">
            <div className="hidden lg:block xs:overflow-x-hidden after:absolute x:after:w-[255px] x:after:h-[217px] lg:after:w-[255px] lg:after:h-[217px] after:bg-depsac-banner-right after:bg-contain after:bg-no-repeat after:right-[-60px] lg:after:right-[0px] lg:after:top-[-20px] x:after:right-[-60px] x:after:top-[-60px] xl:after:right-[0px] 2xl:after:right-[-60px]">
              <Image
                src="/depsac/images/productos/copeland-discus.png"
                alt="copeland-discus"
                width={780}
                height={500}
                className="x:absolute lg:relative left-0 x:max-w-[780px] xl:max-w-[680px] 2xl:max-w-[780px] lg:max-w-[650px] h-auto align-middle box-border z-[2] x:top-[-100px] lg:top-[-50px] lg:right-[-100px]"
                priority // 🔥 Esto optimiza la carga de la image
              />
            </div>

            <div className="lg:hidden xs:overflow-x-hidden after:absolute xs:after:w-[220px] xs:after:h-[192px] after:bg-depsac-banner-right after:bg-contain after:bg-no-repeat after:right-[-60px] xs:after:right-0 xs:after:top-[60px] xs:mt-20">
              <Image
                src="/depsac/images/productos/copeland-discus.png"
                alt="copeland-discus"
                width={300}
                height={200}
                className="relative left-0 xs:max-w-[500px] h-full align-middle box-border z-[1] xs:top-[0px] xs:right-[0px]"
                priority // 🔥 Esto optimiza la carga de la image
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
  image: string;
  name: string;
  price: string;
  description: string;
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
    <div className="flex justify-center w-full lg:w-1/4 mb-0 px-3 mt-11 lg:mt-0" onMouseEnter={() => window.innerWidth >= 480 ? addElementsProduct() : null} onMouseLeave={quitElementsProduct}>
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
        {/* description */}
        <h3 ref={description} className="hidden text-depsac-primary h-[70px] -mt-[15px] text-center text-base leading-5 mb-2 relative">
          {props.description}
        </h3>

        {/* <strong className="text-depsac-primary font-extrabold text-lg relative">S/ {props.price}</strong> */}
        <p ref={btnCotizar} className="text-center relative pt-3" onClick={goToContact}><Link href="/contact" className="font-extrabold pt-3 pr-[30px] pb-3 pl-[30px] rounded-[30px] text-depsac-fondo_claro bg-depsac-primary border-depsac-primary">Cotizar</Link></p>

        {/* boton plus */}
        {/* <a href=""> */}
        <span ref={btnPlus} onMouseEnter={showDescription} onMouseLeave={hideDescription} className="flex absolute w-9 h-9 left-[46%] bg-depsac-primary bottom-4 mb-[-17.5px] text-center items-center rounded-[50%] transition-products opacity-0">
          <Image
            alt={"product"}
            width={30} height={30}
            src="/depsac/assets/cross.svg"
            className="w-4 h-4 max-w-full mx-auto"
            priority
          />
        </span>
        {/* </a> */}

      </button>
    </div>
  );
}

function Products() {

  return (
    <div className="pt-28 lg:pb-28 pb-0 px-3">
      <div className="max-w-[1320px] mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 lg:ml-[-0.75] lg:mr-[-0.75] xs:mx-3">

          {/* <!-- Start Column 1 --> */}
          <div className="w-full lg:w-1/4 mb-0">
            <h2 className="mb-6 text-2xl mt-0 font-medium leading-[1.2] text-depsac-primary text-center lg:text-left">Elaborado con excelente material.</h2>
            <p className="mb-6 mt-0 text-center lg:text-left">
              Diseñamos y fabricamos cámaras frigoríficas, sistemas de enfriamiento industrial y estructuras metálicas a medida. Soluciones eficientes, duraderas y adaptadas a
              cada necesidad.
            </p>
            <p className="xs:text-center lg:text-left">
              <Link href="/shop" className="font-semibold pt-3 pr-[30px] pb-3 pl-[30px] rounded-[30px] text-white bg-depsac-primary border-depsac-primary">Explorar</Link>
            </p>
          </div>
          {/* <!-- End Column 1 --> */}

          {/* <!-- Start Column 2 --> */}
          <Item image={"/depsac/images/productos/maneurop.png"} name={"Cmpresor hermetico Danfoss"} price={"00.00"} description={"Esta es una pequeña descripción del producto"} />
          {/* <!-- End Column 2 --> */}

          {/* <!-- Start Column 3 --> */}
          <Item image={"/depsac/images/productos/scroll-copeland.png"} name={"Compresor hermetico Scroll"} price={"00.00"} description={""} />
          {/* <!-- End Column 3 --> */}

          {/* <!-- Start Column 4 --> */}
          <Item image={"/depsac/images/productos/tornillo-bitzer.png"} name={"Compresor semi hermetico Tornillo"} price={"00.00"} description={""} />
          {/* <!-- End Column 4 --> */}

        </div>
      </div>
    </div>
  );
}

function WhyChoose() {
  return (
    <div className="py-28 px-7">
      <div className="max-w-[1320px] mr-auto ml-auto">
        <div className="flex flex-wrap mt-[0] lg:mr-[0.75] lg:ml-[0.75px] xs:mx-3 justify-between">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-depsac-primary text-[2rem] mt-0 mb-6 lg:mb-3 font-medium leading-[1.2] text-center lg:text-left">Por que escogernos</h2>
            <p className="mt-0 mb-4 text-center lg:text-left lg:mr-3">
              En Depsac, combinamos experiencia, innovación y compromiso para ofrecer soluciones industriales a la medida de tus necesidades. Nuestro equipo técnico altamente
              capacitado trabaja con tecnología de vanguardia y materiales de primera calidad, asegurando resultados duraderos, eficientes y seguros.
              Elegirnos es contar con un aliado confiable que entiende tu industria y transforma tus ideas en soluciones concretas y efectivas.
            </p>

            <div className="my-12 flex flex-wrap mx-2 lg:mr-[0.75px] lg:ml-[0.75px]">
              <div className="w-1/2 pr-2 lg:pr-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <Image src="/depsac/assets/truck.svg" alt="truck" width={45} height={45} className="" priority />
                  </div>
                  <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Entrega Rápida</h3>
                  <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">Cumplimos con los plazos. Optimizamos cada etapa del proceso para garantizar que tu
                    proyecto esté listo a tiempo, sin comprometer la calidad.</p>
                </div>
              </div>

              <div className="w-1/2 pl-2 lg:pl-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <Image src="/depsac/assets/bag.svg" alt="bag" width={45} height={45} className="" priority />
                  </div>
                  <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Cotización Sencilla</h3>
                  <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">En Depsac, creemos que tu tiempo vale. Por eso, simplificamos el proceso de cotización
                    para que obtengas una respuesta rápida, clara y personalizada. Solo dinos qué necesitas, y nuestro equipo se encargará del resto, sin demoras ni trámites innecesarios.</p>
                </div>
              </div>

              <div className="w-1/2 pr-2 lg:pr-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <Image src="/depsac/assets/support.svg" alt="support" width={45} height={45} className="" priority />
                  </div>
                  <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Atención Ininterrumpida</h3>
                  <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">Nos enfocamos en ofrecer una atención cercana, profesional y resolutiva. En Depsac,
                    escuchamos tus necesidades, respondemos con rapidez y te acompañamos en cada etapa del proyecto para que tengas una experiencia confiable y sin complicaciones.</p>
                </div>
              </div>

              <div className="w-1/2 pl-2 lg:pl-0">
                <div className="mb-8">
                  <div className="inline-block relative mb-5">
                    <Image src="/depsac/assets/return.svg" alt="return" width={45} height={45} className="" priority />
                  </div>
                  <h3 className="text-sm text-depsac-primary mt-0 mb-2 font-medium leading-[1.2]">Excelente Servicio</h3>
                  <p className="text-sm leading-6 text-depsac-wychoose mt-0 mb-4 mx-1">En Depsac, la calidad no termina en el producto. Brindamos un servicio integral que abarca desde
                    el primer contacto hasta la entrega final, con seguimiento constante, asesoría técnica y un compromiso real con tu satisfacción.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:w-[41.67%] w-full mt-10 lg:mt-0">
            <div className="relative after:absolute after:w-[300px] lg:after:w-[500px] after:h-[200px] after:bg-depsac-whychoose after:bg-no-repeat after:bg-contain after:content-normal after:top-[-80px] after:left-[-95px] after:z-[-1]">
              <Image
                src="/depsac/images/proyectos/estructuras-metalicas.jpg"
                alt="Image"
                width={600}
                height={45}
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

function WeHelp() {
  return (
    <div className="pt-12 lg:pt-28 pr-0 pb-28 pl-0">
      <div className="max-w-[1320px] mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 ml-[-0.75pm] mr-[-0.75px] xs:mx-3 justify-between">
          <div className="lg:w-[58.3%] xs:w-full lg:mb-0 mb-10 ml-3 lg:ml-0">
            <div className="grid grid-cols-depsac-weHelp relative after:absolute after:w-[255px] after:h-[217px] after:bg-depsac-weHelp after:bg-contain after:bg-no-repeat after:z-[-1] after:top-[-85px] lg:after:left-[-70px] after:left-[-110px]">
              <div className="relative col-start-1 col-end-[18] row-start-1 row-end-[27]">
                <Image src="/depsac/images/proyectos/proyecto1.png" alt="image" width={500} height={45} className="rounded-[20px] max-w-full align-middle" priority />
              </div>
              <div className="relative col-start-[19] col-end-[27] row-start-1 row-end-[5]">
                <Image src="/depsac/images/proyectos/proyecto3.png" alt="image" width={500} height={45} className="rounded-[20px] max-w-full align-middle" priority />
              </div>
              <div className="relative col-start-[14] col-end-[27] row-start-6 row-end-[27] pt-5">
                <Image src="/depsac/images/proyectos/proyecto2.png" alt="image" width={500} height={45} className="rounded-[20px] max-w-full align-middle" priority />
              </div>
            </div>
          </div>
          <div className="lg:w-[41.67%] xs:w-full pl-0 lg:pl-12">
            <h2 className="text-depsac-primary mb-6 text-2xl mt-0 font-medium leading-[1.2] text-center lg:text-left">Estructuras Metalicas de Alta Calidad</h2>
            <p className="mt-0 mb-4 text-center lg:text-left">
              Diseñamos y fabricamos estructuras metálicas robustas, funcionales y adaptadas a cada proyecto. En Depsac, combinamos ingeniería precisa, materiales resistentes y acabados
              profesionales para garantizar resultados duraderos y eficientes en todo tipo de obras industriales o personalizadas.
            </p>

            <ul className="pl-0 list-none w-full mt-12 lg:mt-6 mb-6 text-left lg:text-left">
              <li className="text-sm inline-block w-[45%] mb-3 leading-6 relative pl-4 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-depsac-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0" style={{ width: "50%-20px" }}>
                Funcionalidad y Uso que perdura en el tiempo
              </li>
              <li className="text-sm inline-block w-[45%] mb-3 leading-6 relative pl-4 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-depsac-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0" style={{ width: "50%-20px" }}>
                Calidad de los Materiales y Construcción
              </li>
              <li className="text-sm inline-block w-[45%] mb-3 leading-6 relative pl-4 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-depsac-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0" style={{ width: "50%-20px" }}>
                Estilo acorde al mercado y según el cliente
              </li>
              <li className="text-sm inline-block w-[45%] mb-3 leading-6 relative pl-4 lg:pl-5 after:w-2 after:h-2 after:rounded-[50%] after:border-2 after:border-solid after:border-depsac-weHelp after:absolute after:left-0 after:top-2 mx-2 lg:mx-0" style={{ width: "50%-20px" }}>
                Presupuesto y Relación Calidad-Precio
              </li>
            </ul>
            <p className="mt-0 mb-4 text-center lg:text-left">
              <a href="#" className="font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] text-white bg-depsac-primary border-depsac-primary">Explorar</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopularProduct() {
  return (
    <div className="pt-0 pr-0 pb-28 pl-0">
      <div className="max-w-[1320px] ml-auto mr-auto">
        <div className="flex flex-wrap mt-0 mr-[-0.75px] ml-[-0.75] xs:mx-4 ss:mx-0">

          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-depsac-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <Image src="/depsac/images/productos/unidadCondensadoraDanfoss.png" alt="image" width={300} height={45} className="max-w-full h-auto align-middle" priority />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-depsac-primary mt-0 mb-2 leading-[1.2]">Unidades condensadoras indoor</h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">Un ventilador industrial es un equipo robusto que mueve gran cantidad de aire para ventilar espacios amplios como fábricas o talleres.</p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <a href="#" className="text-depsac-primary">Leer más</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-depsac-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <Image src="/depsac/images/productos/EnfriadorPlacasAlfaLaval.png" alt="image" width={300} height={45} className="max-w-full h-auto align-middle" priority />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-depsac-primary mt-0 mb-2 leading-[1.2]">Intercambiadores de placas</h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">Un enfriador de placas transfiere calor entre líquidos mediante placas metálicas delgadas.</p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <a href="#" className="text-depsac-primary">Leer más</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[33.33%] mb-0 lg:px-3 py-3 lg:py-0">
            <div className="flex">
              <div className="mr-10px relative basis-[120px] grow-0 shrink-0 after:absolute after:rounded-[20px] after:bg-depsac-popularProducts after:w-24 after:h-24 after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1]">
                <Image src="/depsac/images/productos/unidadCondensadoraRussell.png" alt="image" width={300} height={45} className="max-w-full h-auto align-middle" priority />
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-bold text-depsac-primary mt-0 mb-2 leading-[1.2]">unidades condensadoras Outdoor</h3>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">Ventilador industrial es un equipo robusto que mueve gran cantidad de aire para ventilar espacios amplios</p>
                <p className="leading-[1.4] mb-[10px] text-sm mt-0">
                  <a href="#" className="text-depsac-primary">Leer más</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// function Testimonials() {
//   return (
//     <div className="lg:pt-28 xs:pt-0 pr-0 lg:pb-48 pb-0 pl-0">
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
//                     <div className="tns-carousel whitespace-nowrap w-[500%] transition-products" id="tns1">

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

function BlogSection() {
  return (
    <div className="pt-28 pr-0 pb-48 pl-0">
      <div className="max-w-[1320px] lg:mx-auto mx-3">
        <div className="flex flex-wrap mt-0  mx-3 mb-12 ">
          <div className="basis-auto lg:w-1/2 w-full">
            <h2 className="text-depsac-primary text-2xl mt-0 mb-2 font-medium leading-[1.2]">Blog Reciente</h2>
          </div>
          <div className="basis-auto lg:w-1/2 lg:text-right text-left w-full">
            <a href="/blog" className="font-semibold text-depsac-primary underline">Ver todos los Posts</a>
          </div>
        </div>

        <div className="flex flex-wrap mt-0 mx-[-0.75px]">

          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3">
            <div className="post-entry">
              <a href="#" className="block mb-5 text-depsac-primary ">
                <Image src="/depsac/images/proyectos/proyecto4.png" alt="image" width={500} height={45} className="rounded-[20px] max-w-full h-auto align-middle" priority />
              </a>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]"><a href="#" className="text-depsac-primary ">Estructuras metálicas a medida</a></h3>
                <div className="text-sm">
                  <span><a href="#" className="font-semibold text-depsac-primary">Nota: </a></span> <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3 my-12 lg:my-0">
            <div className="post-entry">
              <a href="#" className="block mb-5 text-depsac-primary ">
                <Image src="/depsac/images/proyectos/proyecto5.png" alt="image" width={500} height={45} className="rounded-[20px] max-w-full h-auto align-middle" priority />
              </a>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]"><a href="#" className="text-depsac-primary ">Soldadura a detalle</a></h3>
                <div className="text-sm">
                  <span><a href="#" className="font-semibold text-depsac-primary">Nota: </a></span> <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex basis-auto lg:w-[33.33%] xs:w-full mb-0 px-3 my-12 lg:my-0">
            <div className="post-entry">
              <a href="#" className="block mb-5 text-depsac-primary ">
                <Image src="/depsac/images/proyectos/proyecto6.png" alt="image" width={500} height={45} className="rounded-[20px] max-w-full h-auto align-middle" priority />
              </a>
              <div className="px-[15px]">
                <h3 className="text-base font-semibold mb-2 mt-0 leading-[1.2]"><a href="#" className="text-depsac-primary ">Personal capacitado en todo momento</a></h3>
                <div className="text-sm">
                  <span><a href="#" className="font-semibold text-depsac-primary">Nota: </a></span> <span>Todas las imágenes son referenciales</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Banner />

      <Products />

      <WhyChoose />

      <WeHelp />

      <PopularProduct />

      {/* <Testimonials /> */}

      <BlogSection />
    </>
  );
}
