'use client'

import Image from "next/image";
const Service = () => {
  return (
    <main className="py-10 lg:py-16 px-4 lg:px-20 x:px-16 2xl:px-0">
      <div className="px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
                  Nuestros servicios
                </h1>

                <p className="mt-6 text-base text-zinc-600 text-justify">
                  Nos dedicamos a ofrecer servicios de alta calidad. Nos destacamos por la excelencia en cada detalle, brindando soluciones que superan las expectativas.
                  Tu satisfacción es nuestra prioridad, y trabajamos incansablemente para garantizar servicios que
                  reflejen nuestro compromiso con la calidad y la excelencia.
                </p>

                <div className="mt-6 flex gap-6 text-cygrefrisac-header">
                  <a className="group -m-1 p-1" aria-label="Follow on X" href="#">
                    <i className="bi bi-twitter-x text-4xl"></i>
                  </a>

                  <a className="group -m-1 p-1" aria-label="Follow on Instagram" href="#">
                    <i className="bi bi-instagram text-4xl"></i>
                  </a>

                  <a className="group -m-1 p-1" aria-label="Follow on Facebook" href="#">
                    <i className="bi bi-facebook text-4xl"></i>
                  </a>

                  <a className="group -m-1 p-1" aria-label="Follow on Tiktok" href="#">
                    <i className="bi bi-tiktok text-4xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image
              src="/cygrefrisac/images/postbanner1.jpg"
              alt="Logo de la empresa"
              width={500}
              height={500}
              className="rounded-lg"
              priority={true}
            />
          </div>

          <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2">
            <Image
              src="/cygrefrisac/images/postbanner2.jpg"
              alt="Logo de la empresa"
              width={500}
              height={500}
              className="rounded-lg"
              priority={true}
            />
          </div>

          <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src="/cygrefrisac/images/postbanner3.jpg"
              alt="Logo de la empresa"
              width={500}
              height={500}
              className="rounded-lg"
              priority={true}
            />
          </div>

          <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src="/cygrefrisac/images/slide1.jpg"
              alt="Logo de la empresa"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover"
              priority={true}
            />
          </div>

          <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2">
            <Image
              src="/cygrefrisac/images/slide2.jpg"
              alt="Logo de la empresa"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover"
              priority={true}
            />
          </div>
        </div>
      </div>

      <div className="px-8 my-24 md:my-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-slate-800">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-90 sm:-inset-x-6 sm:rounded-2xl">
                      </div>

                      <a>
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl">
                        </span>

                        <span className="relative z-10 text-cygrefrisac-header">
                          ¿Recibiré el mismo producto que veo en la imagen?
                        </span>
                      </a>
                    </h2>

                    <p className="relative z-10 mt-2 text-sm text-slate-800 text-justify">
                      Es importante verificar con nuestro personal de servicio al cliente, los acabados de nuestros productos,
                      pues su apariencia puede variar en relación con la imagen que se publica, ya que se pueden generar reflejos, sombras o brillos
                      que hacen que el producto no se asemeje a la realidad, esta aclaración aplica también a los colores de la pintura (las
                      cuales varían según el tipo de material). No nos hacemos responsables si no se verifica durante la compra.
                    </p>
                  </article>

                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-cygrefrisac-header">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl">
                      </div>
                      <a href="/articles/introducing-animaginary">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          ¿Puedo hacer devoluciones de productos?
                        </span>
                      </a>
                    </h2>

                    <p className="relative z-10 mt-2 text-sm text-slate-800 text-justify">
                      Si cambias de opinión o quieres hacer la devolución de tu(s) producto(s) no te preocupes, nuestra Satisfacción
                      garantizada te permite cambiar la mayoría de tus productos durante los primeros 7 días calendario desde que los recibes.
                    </p>
                  </article>

                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-cygrefrisac-header">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl">
                      </div>
                      <a href="/articles/rewriting-the-cosmos-kernel-in-rust">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          ¿A dónde hacen envios?
                        </span>
                      </a>
                    </h2>

                    <p className="relative z-10 mt-2 text-sm text-slate-800 text-justify">
                      Hacemos envíos a todo el Perú, esto incluye Lima y provincias.
                      Si tu envio es a provincia, deberás indicarnos en una nota en el pedido por cuál agencia de envios deseas
                      que te hagamos llegar tu pedido y este corre por tu cuenta.
                    </p>
                  </article>
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <Image
                    src="/cygrefrisac/images/servicios-left.jpg"
                    alt="servicios"
                    width={600}
                    height={600}
                    className="rounded-[20px] max-w-screen-xxs lg:max-w-full h-auto align-middle ml-10 lg:ml-0"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Services() {
  return (
    <>
      <Service />
    </>
  );
}