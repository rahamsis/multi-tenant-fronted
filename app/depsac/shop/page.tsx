'use client'
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

function Banner() {
    return (
        // <!-- Start Hero Section -->
        <div className="bg-depsac-greenBanner pt-[98px] lg:pr-0 x:pb-36 lg:pb-0 lg:mt-[88px]">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-wrap mt-0 mx-[-12] justify-between">
                    <div className="lg:w-[42%] w-full px-3">
                        <div className="relative max-w-md z-[4]">
                            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-[30px] leading-10 lg:leading-[3.5rem]">Nuestra <br /><span className="d-block">Tienda</span></h1>
                            <p className="text-depsac-paragraph text-sm mb-10 leading-6">
                                ofrecemos piezas cuidadosamente seleccionadas con garantía. Cada artículo es una expresión de calidad y durabilidad respaldada por nuestra promesa de satisfacción.
                            </p>
                            <p className="mb-4">
                                <a href="" className="btn bg-depsac-acento font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px] mr-2">Cotizar ahora</a>
                                <a href="#" className="text-depsac-fondo_claro btn border-2 border-depsac-acento font-semibold pt-3 pr-8 pb-3 pl-8 rounded-[30px]">Explorar</a>
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

interface Props {
    image: string
    name: string
    price: string
    category: string
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
        <div className="flex justify-center w-full lg:w-1/4 mb-0 px-3 mt-11 lg:mt-0" onMouseEnter={(e) => window.innerWidth >= 480 ? addElementsProduct() : null} onMouseLeave={quitElementsProduct}>
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
                    {props.name}
                </h3>

                {/* <strong className="text-depsac-primary font-extrabold text-lg relative">S/ {props.price}</strong> */}
                <p ref={btnCotizar} className="text-center relative pt-3" onClick={goToContact}><Link href="/contact" className="font-extrabold pt-3 pr-[30px] pb-3 pl-[30px] rounded-[30px] text-depsac-fondo_claro bg-depsac-primary border-depsac-primary">Cotizar</Link></p>

                {/* boton plus */}
                <span ref={btnPlus} onMouseEnter={showDescription} onMouseLeave={hideDescription} className="flex absolute w-9 h-9 left-[46%] bg-depsac-primary bottom-4 mb-[-17.5px] text-center items-center rounded-[50%] transition-depsac-products opacity-0">
                    <Image
                        alt={"product"}
                        width={30} height={30}
                        src="/depsac/assets/cross.svg"
                        className="w-4 h-4 max-w-full mx-auto"
                        priority
                    />
                </span>

            </button>
        </div>
    );
}


function Content() {
    const products = [
        {
            image: "/depsac/images/productos/copeland-discus.png",
            name: "Compresor semi hermetico Copeland Discus",
            price: "00.00",
            category: "Compresores"
        },
        {
            image: "/depsac/images/productos/EnfriadorPlacasAlfaLaval.png",
            name: "Intercambiadores de placas",
            price: "00.00",
            category: "Intercambiadores"
        },
        {
            image: "/depsac/images/productos/maneurop.png",
            name: "Compresor hermetico Danfoss",
            price: "00.00",
            category: "Compresores"
        },
        {
            image: "/depsac/images/productos/Bitzer.png",
            name: "Compresor semi hermetico Bitzer",
            price: "00.00",
            category: "Compresores"
        },
        {
            image: "/depsac/images/productos/scroll-copeland.png",
            name: "Compresor hermetico Scroll",
            price: "00.00",
            category: "Compresores"
        },
        {
            image: "/depsac/images/productos/tornillo-bitzer.png",
            name: "Compresor semi hermetico Tornillo",
            price: "00.00",
            category: "Compresores"
        },
        {
            image: "/depsac/images/productos/unidadCondensadoraDanfoss.png",
            name: "Unidades condensadoras indoor",
            price: "00.00",
            category: "Und. condensadoras indoor"
        },
        {
            image: "/depsac/images/productos/unidadCondensadoraRussell.png",
            name: "Unidades condensadoras Outdoor",
            price: "00.00",
            category: "Und. condensadoras outdoor"
        },
        {
            image: "/depsac/images/productos/Unidad indoor 2.png",
            name: "Unidad indoor 2",
            price: "00.00",
            category: "Und. condensadoras indoor"
        },
        {
            image: "/depsac/images/productos/Unidad indoor 3.png",
            name: "Unidad indoor 3",
            price: "00.00",
            category: "Und. condensadoras indoor"
        },
        {
            image: "/depsac/images/productos/outdoor 2.png",
            name: "Unidad outdoor 2",
            price: "00.00",
            category: "Und. condensadoras outdoor"
        },
        {
            image: "/depsac/images/productos/rack 1.png",
            name: "Unidad outdoor 2",
            price: "00.00",
            category: "Racks"
        },
        {
            image: "/depsac/images/productos/filtro de succion tipo caucho.png",
            name: "filtro de succion tipo caucho",
            price: "00.00",
            category: "Accesorios"
        },
        {
            image: "/depsac/images/productos/filtro liquido tipo caucho.png",
            name: "filtro liquido tipo caucho",
            price: "00.00",
            category: "Accesorios"
        },
        {
            image: "/depsac/images/productos/valvula reguladora de succion.png",
            name: "valvula reguladora de succion",
            price: "00.00",
            category: "Accesorios"
        },
        {
            image: "/depsac/images/productos/valvula selenoide.png",
            name: "valvula selenoide",
            price: "00.00",
            category: "Accesorios"
        },
        {
            image: "/depsac/images/productos/valvula-expansion-electronica.png",
            name: "valvula-expansion-electronica",
            price: "00.00",
            category: "Accesorios"
        },
        {
            image: "/depsac/images/productos/valvula-expansion-termostatica.png",
            name: "valvula-expansion-termostatica",
            price: "00.00",
            category: "Accesorios"
        },
        {
            image: "/depsac/images/productos/tiro-forzado-mipal.png",
            name: " Evaporadores cubicos",
            price: "00.00",
            category: " Evaporadores cubicos"
        }
    ];

    const categories = ["Todos", "Compresores", "Intercambiadores", "Und. Condensadoras indoor", "Und. condensadoras outdoor", "Racks", "Accesorios"," Evaporadores cubicos"];
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredProducts = selectedCategory === "Todos"
        ? products
        : products.filter(p => p.category === selectedCategory);


    return (
        <div className="pt-8 lg:pt-28 pr-0 pb-48 pl-0">
            <div className="max-w-[1320px] mx-auto px-4">
                <div className="flex flex-wrap -mx-4">

                    {/* Sidebar de Categorías */}
                    <div className="w-full lg:w-1/4 px-4 mb-10">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Categorías</h3>
                            <ul className="space-y-2">
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            className={`w-full text-left px-4 py-2 rounded-lg hover:bg-depsac-primary hover:text-white ${selectedCategory === cat ? 'bg-depsac-primary text-white' : 'text-gray-800'}`}
                                            onClick={() => setSelectedCategory(cat)}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Productos */}
                    <div className="w-full lg:w-3/4 px-4 flex flex-wrap">
                        {filteredProducts.map((product, index) => (
                            <Item
                                key={index}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                category={product.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Shop() {
    return (
        <>
            <Banner />

            <Content />
        </>
    );
};