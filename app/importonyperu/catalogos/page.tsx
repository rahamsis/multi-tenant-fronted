'use client';

import { useState, useEffect, } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";
import CustomSelect from "../components/selector/select";
import { getCatalogs, getPortadaCatalogs } from "@/app/utils/actions";
import PdfCard from "../components/pdfCard/pdfCard";

function Banner() {
    return (
        <div className="relative w-full lg:h-full overflow-hidden pt-3 lg:pt-6">
            <div className="bg-importonyperu-Gray w-full text-center lg:py-16 py-8 text-zinc-800 text-2xl font-semibold">
                <h3>CATALOGOS</h3>
            </div>
        </div>
    );
}

type Catalog = {
    key: string;
    name: string;
    size?: number;
    lastModified?: string;
    viewUrl: string; // ver/leer en navegador
    thumbnailUrl: string;
    downloadUrl: string; // descarga directa
};

type CoverCatalog = {
    key: string;
    name: string;
    url: string;
    viewUrl: string; // ver/leer en navegador
};

const options = [
    { value: "default", label: "Predeterminado" },
    { value: "nameAZ", label: "Nombre: A a Z" },
    { value: "nameZA", label: "Nombre: Z a A" },
];

function Content() {
    const [catalogs, setCatalogs] = useState<Catalog[]>([]);
    const [covers, setCovers] = useState<CoverCatalog[]>([]);

    const [catalogsConPortada, setCatalogsConPortada] = useState<(Catalog & { thumbnailUrl?: string })[]>([]);

    const [catalogsOrdenados, setCatalogsOrdenados] = useState<Catalog[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [order, setOrder] = useState(1);

    //trae los catalogos
    useEffect(() => {
        const fetchCatalogs = async () => {
            try {
                const response = await getCatalogs()
                console.log("response: ", response)
                setCatalogs(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCatalogs();
    }, []);

    // trae las portadas
    useEffect(() => {
        const fetchCoversCatalogs = async () => {
            try {
                const response = await getPortadaCatalogs()
                setCovers(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCoversCatalogs();
    }, []);

    // unimos cada pdf con su cover
    useEffect(() => {
        if (catalogs.length === 0 || covers.length === 0) return;

        // Combinar cada catalogo con su portada según el nombre (o key)
        const combined = catalogs.map(cat => {
            const cover = covers.find(c => c.name.concat(".pdf") === cat.name);
            return {
                ...cat,
                thumbnailUrl: cover?.viewUrl || "/importonyperu/images/nuevo-catalogo.png", // si no hay portada, dejar vacío
            };
        });

        setCatalogsConPortada(combined);
        setCatalogsOrdenados(combined); // también ordenamos inicialmente
    }, [catalogs, covers]);

    // Detectar tamaño de pantalla para 2 / 6 visibles
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth >= 1024 ? false : true);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // // cargamos la data
    useEffect(() => {
        setCatalogsOrdenados(catalogsConPortada);
    }, [catalogsConPortada]);

    // Ordena los productos según el orden seleccionado
    const handleSelectChange = (value: string) => {
        const catalogsOrdenados = [...catalogsConPortada]; // clonamos el array para no mutar el original
        switch (value) {
            case "nameAZ":
                catalogsOrdenados.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "nameZA":
                catalogsOrdenados.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "default":
            default:
                catalogsOrdenados.sort((a, b) => a.key.localeCompare(b.key));
                break;
        }

        setCatalogsOrdenados(catalogsOrdenados);
    };

    return (
        <div className="lg:flex flex-col w-full lg:pt-6 pt-4 gap-6">
            <div className="flex justify-between w-full mb-6">
                <div className="hidden lg:flex gap-4 items-center">
                    <div className={`text-xl cursor-pointer hover:text-black ${order === 1 ? "text-black" : "text-zinc-300"}`} onClick={() => setOrder(1)}>
                        <LayoutGrid />
                    </div>

                    <div className={`text-xl cursor-pointer hover:text-black ${order === 2 ? "text-black" : "text-zinc-300"}`} onClick={() => setOrder(2)}>
                        <LayoutList className="" />
                    </div>

                    <div className="font-normal">
                        <p>Hay {catalogs.length} item(s)</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="hidden lg:flex">
                        <p>Ordenar por:</p>
                    </div>
                    <div className="">
                        <CustomSelect options={options} defaultValue="default" onChange={handleSelectChange} />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className={`grid gap-4 ${order === 2 && !isMobile ? "grid-cols-1" : "lg:grid-cols-3 grid-cols-1"}`}>
                    {catalogsOrdenados.map((catalogo, i) => (
                        <div key={i} className={`flex justify-center group ${order === 2 && !isMobile && "lg:flex"} `}>
                            <PdfCard url={catalogo.viewUrl} name={catalogo.name} thumbnailUrl={catalogo.thumbnailUrl} />
                            {/* <div className={`${order === 2 && !isMobile ? "text-start" : "text-center"} ml-6 relative items-start justify-center mx-auto mt-2 w-full`}>
                                {(order === 2 && !isMobile) &&
                                    <button className="bg-buttonGray space-x-2 hover:bg-black hover:text-white flex flex-row justify-center py-2 w-40" onClick={() => openPDF(catalogo.viewUrl)}>
                                        <Eye /><span>Abrir PDF </span>
                                    </button>}
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Catalogos() {
    return (
        <div className="mx-auto justify-between items-center xl:w-8/12 2xl:w-8/12 w-11/12 mb-8">

            <Banner />

            <Content />
        </div>
    );
}