'use client'

import { useRef, useState } from "react";

// var message = "Hola%2c%20podría%20brindarme%20más%20información%20sobre%20el%20servicio%20que%20brinda.%0AGracias%2e"
const numero = "51963422245"
const url = "https://api.whatsapp.com/send?phone=" + numero + "&text="


export default function Whatsapp() {

    // Estado local para almacenar el valor del input
    const [valorInput, setValorInput] = useState('');
    //   Función para manejar cambios en el input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValorInput(event.target.value);
    };

    const miRef = useRef<HTMLDivElement>(null);

    const toggleChating = () => {
        miRef.current?.classList.remove('opacity-0', 'translate-x-full')
        miRef.current?.classList.add('translate-x-0', 'opacity-100')
    };

    const closeChating = () => {
        miRef.current?.classList.remove('opacity-100')
        miRef.current?.classList.add('translate-x-full','opacity-0')
        setValorInput("")
    }

    const sendMessage = () => {
        window.open(url + valorInput, '_blank');
        setValorInput("")
    }

    setTimeout(toggleChating, 1500);

    return (
        <>
            <div>
                <div ref={miRef} className='fixed bottom-28 right-8 z-50 bg-depsac-chat rounded-2xl shadow-lg p-3 transform  transition-all duration-1000 ease-in-out translate-x-full opacity-0'>
                    <div className='text-depsac-whatsapp text-2xl cursor-pointer w-auto'>
                        <span onClick={closeChating}>
                            <i className="bi bi-x-circle-fill"></i>
                        </span>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <div className='py-3 h-auto text-4xl text-slate-500'>
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <div className='pl-4 py-3 text-slate-700 opacity-90'>
                            <a>Hola, ¿En qué podemos ayudarle?</a>
                        </div>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <div className='py-3 w-[80%]'>
                            <input
                                type="text"
                                value={valorInput}
                                onChange={handleChange}
                                className="form-control h-8 rounded-xl font-sans block w-full my-1 px-[0.75rem] text-base font-normal leading-[1.5] opacity-60 bg-white bg-clip-padding border border-solid border-depsac-borderInputFooter appearance-none m-0 focus:border-transparent focus:outline-none transition-all duration-300"
                                placeholder='Enviar mensaje...' />
                        </div>
                        <div className='flex w-9 h-9 pl-2 bg-white items-center text-center rounded-[50%] text-slate-600 shadow-xl rotate-45 absolute right-4'>
                            <button onClick={sendMessage}>
                                <i className="bi bi-send-fill"></i>
                            </button>
                        </div>

                    </div>
                </div>


                <a className='cursor-pointer block fixed w-14 h-14 leading-[55px] bottom-8 right-8 bg-depsac-whatsapp text-white rounded-[50%] text-center text-3xl shadow-lg hover:no-underline hover:text-depsac-whatsapp hover:bg-white z-50'
                    onClick={toggleChating}>
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>

            {/* boton de whatsapp visible solo en mobiles */}
            {/* <a href={url + message} target='_blank' className='lg:hidden fixed w-14 h-14 leading-[55px] bottom-8 right-8 bg-depsac-whatsapp text-white rounded-[50%] text-center text-3xl shadow-lg hover:no-underlin z-50'>
                <i className="bi bi-whatsapp"></i>
            </a> */}
        </>
    )
}