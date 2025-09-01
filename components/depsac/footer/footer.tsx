import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-20 lg:pb-20 pb-5 px-0 bg-white">
      <div className="lg:max-w-[1320px] w-full mx-auto relative ss:px-3 xs:px-0">

        {/* sofa img */}
        <div className="hidden lg:block absolute -top-[200px] z-[1] right-0 xs:overflow-x-hidden">
          <Image src="/depsac/images/productos/Bitzer.png" alt="image" width={500} height={45} className="max-w-[380px] h-auto align-middle md:translate-x-0 xs:translate-x-1/4" />
        </div>

        <div className=" lg:hidden absolute -top-[200px] z-[1] right-0 xs:overflow-x-hidden">
          <Image src="/depsac/images/productos/Bitzer.png" alt="image" width={250} height={45} className="max-w-[380px] h-auto align-middle md:translate-x-0 " />
        </div>

        <div className="flex flex-wrap mt-0 -mx-3 gap-x-6 gap-y-0 pt-24 xs:mx-2 lg:mx-2">
          <div className="w-[66.67%] max-w-full px-[0.75rem] xs:w-full">
            <div className="mt-0 mb-20 relative z-[2]">
              <h3 className="flex items-center text-depsac-footer text-lg font-medium mt-6 lg:mt-0 mb-2 leading-[1.2]">
                <span className="mr-1">
                  <Image
                    src="/depsac/assets/envelope-outline.svg"
                    alt="image"
                    width={30}
                    height={20}
                    className="max-w-[380px] h-auto align-middle"
                    priority
                  />
                </span>
                <span>Subscríbete a las últimas noticias</span>
              </h3>

              <form action="#" className="flex flex-wrap mt-0 -mx-3">
                <div className="w-auto px-2">
                  <input type="text" className="h-[50px] rounded-[10px] font-serif block w-full py-[0.375rem] px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-depsac-borderInputFooter appearance-none m-0" placeholder="Ingresa tu nombre" />
                </div>
                <div className="w-auto  px-2 xxs:pt-3 ss:pt-0">
                  <input type="email" className="h-[50px] rounded-[10px] font-serif block w-full py-[0.375rem] px-[0.75rem] text-base font-normal leading-[1.5] text-depsac-imputFootr bg-white bg-clip-padding border border-solid border-depsac-borderInputFooter appearance-none m-0" placeholder="Ingresa tu correo" />
                </div>
                <div className="w-auto  px-2 xxs:pt-3 ss:pt-0">
                  <button className="rounded-[10px] bg-depsac-footer border-depsac-footer font-semibold py-3 px-[30px] text-white inline-block leading-[1.5] text-center align-middle border border-solid border-transparent text-base">
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>

        <div className="flex flex-wrap mt-0 -mx-3 lg:mx-2 xs:mx-2 mb-12">
          <div className="lg:w-[33.33%] px-3 w-full">
            <div className="mb-6 footer-logo-wrap ">
              <a href="#" className="text-4xl font-medium text-depsac-footer">DEP sac<span>.</span></a>
            </div>

            <p className="mb-6 mt-0 text-sm leading-7">Con una dedicación incomparable a la calidad y un compromiso constante con la perfección, nos enorgullece ser la 
              principal elección para quienes buscan estructuras metalicas o productos de la más alta calidad y distinción</p>

            <ul className="pl-0 list-none mt-0 mb-4">
              <li className="m-[2px] inline-block">
                <a href="#" className="w-10 h-10 text-center leading-10 inline-block bg-depsac-iconsFoot text-depsac-footer rounded-[50%]"><i className="bi bi-facebook"></i></a>
              </li>
              <li className="m-[2px] inline-block">
                <a href="#" className="w-10 h-10 text-center leading-10 inline-block bg-depsac-iconsFoot text-depsac-footer rounded-[50%]"><i className="bi bi-twitter"></i></a>
              </li>
              <li className="m-[2px] inline-block">
                <a href="#" className="w-10 h-10 text-center leading-10 inline-block bg-depsac-iconsFoot text-depsac-footer rounded-[50%]"><i className="bi bi-instagram"></i></a>
              </li>
              <li className="m-[2px] inline-block">
                <a href="#" className="w-10 h-10 text-center leading-10 inline-block bg-depsac-iconsFoot text-depsac-footer rounded-[50%]"><i className="bi bi-linkedin"></i></a>
              </li>
            </ul>
          </div>

          <div className="lg:w-[66.67%] max-w-full px-[1.5rem] w-full ">
            <div className="flex flex-wrap lg:mt-[66px] mt-8 lg:-mx-3 mx-0">
              <div className="flex basis-auto lg:w-1/4 w-1/2">
                <ul className="pl-0 list-none mt-0 mb-4">
                  <li className="mb-[10px]"><Link href="/nosotros" className="text-depsac-primary">Nosotros</Link></li>
                  <li className="mb-[10px]"><Link href="/services" className="text-depsac-primary">Servicios</Link></li>
                  <li className="mb-[10px]"><Link href="/blog" className="text-depsac-primary">Blog</Link></li>
                  <li className="mb-[10px]"><Link href="/contact" className="text-depsac-primary">Contactanos</Link></li>
                </ul>
              </div>

              <div className="flex basis-auto lg:w-1/4 w-1/2">
                <ul className="pl-0 list-none mt-0 mb-4">
                  <li className="mb-[10px]"><Link href="#" className="text-depsac-primary">Soporte</Link></li>
                  <li className="mb-[10px]"><Link href="#" className="text-depsac-primary">Clientes</Link></li>
                  <li className="mb-[10px]"><Link href="https://api.whatsapp.com/send?phone=51917584018&text=Hola%2c%20podría%20brindarme%20más%20información%20sobre%20el%20servicio%20que%20brinda.%0AGracias%2e" target='_blank' className="text-depsac-primary">Chat</Link></li>
                </ul>
              </div>

              <div className="flex basis-auto lg:w-1/4 w-1/2">
                <ul className="pl-0 list-none mt-0 mb-4">
                  <li className="mb-[10px]"><a href="/blog" className="text-depsac-primary">Trabajos</a></li>
                  <li className="mb-[10px]"><a href="/nosotros" className="text-depsac-primary">Nuestro equipo</a></li>
                  <li className="mb-[10px]"><a href="/nosotros" className="text-depsac-primary">Especialistas</a></li>
                  <li className="mb-[10px]"><a href="/nosotros" className="text-depsac-primary">Politicas</a></li>
                </ul>
              </div>

              <div className="flex basis-auto lg:w-1/4 w-1/2">
                <ul className="pl-0 list-none mt-0 mb-4">
                  <li className="mb-[10px]"><Link href="/shop" className="text-depsac-primary">Comprensoras</Link></li>
                  <li className="mb-[10px]"><Link href="/shop" className="text-depsac-primary">Estructuras</Link></li>
                  <li className="mb-[10px]"><Link href="/shop" className="text-depsac-primary">General</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-depsac-wychoose border-t -mx-3 lg:mx-1 xs:mx-0">
          <div className="flex flex-wrap mt-0 mx-0 lg:mx-2 pt-6">
            <div className="flex basis-auto lg:w-1/2 w-full px-6 lg:px-3">
              <p className="mb-2 lg:text-left text-center mt-0">Copyright {new Date().getFullYear()}. Todos los derechos reservados. — Diseñado por  <a href="#">Rahamsis C.G.</a></p>
            </div>

            <div className="flex basis-auto lg:w-1/2 w-full text-right px-6 lg:px-3 justify-center lg:justify-end">
              <ul className="pl-0 list-none mt-0 mb-4 inline-flex lg:ml-auto">
                <li className="mr-6"><a href="#" className="text-depsac-primary">Terms &amp; Conditions</a></li>
                <li><a href="#" className="text-depsac-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}