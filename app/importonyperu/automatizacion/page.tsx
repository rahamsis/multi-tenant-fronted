'use client';

import { useEffect, useState } from 'react';
import { LoginForm } from '../components/loginForm/Loginform';
import { LayoutGrid, LayoutList } from 'lucide-react';
import CustomSelect from '../components/selector/select';
import MyPDFViewer from '@/components/importonyperu/pdfViewer';
import Image from "next/image";


function Login({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex">
            {/* Left Side - Form */}
            <div className="w-full flex items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="mb-10 text-center">

                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance text-blue-800">
                            Acceso a tu cuenta
                        </h1>
                        <p className="text-foreground/60 text-lg mt-4">
                            Inicia sesión para continuar con tu experiencia personalizada
                        </p>
                    </div>

                    <LoginForm onLoginSuccess={onLoginSuccess} />

                </div>
            </div>
        </div>
    );
}

type Manual = {
    name: string;
    url: string; // ver/leer en navegador
    imageUrl: string;
};

const options = [
    { value: "default", label: "Predeterminado" },
    { value: "nameAZ", label: "Nombre: A a Z" },
    { value: "nameZA", label: "Nombre: Z a A" },
];

function ContentAutomatizacion() {
    const [manuals, setManuals] = useState<Manual[]>([]);

    const [manualsOrdenados, setManualsOrdenados] = useState<Manual[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [order, setOrder] = useState(1);

    const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);
    const [selectedManual, setSelectedManual] = useState<string>("");

    useEffect(() => {
        async function fetchBancos() {
            const res = await fetch("api/manuals?bucket=manuales-importony");
            const data = await res.json();

            const booksWithImages = await Promise.all(
                data.books.map(async (book: { name: string; url: string }) => {

                    const localImagePath = `/importonyperu/images/covers/${book.name.replace(".pdf", "")}.png`;

                    // Verifica si la imagen existe localmente
                    const imageExists = await fetch(localImagePath, { method: "HEAD" })
                        .then((res) => res.ok)
                        .catch(() => false);

                    if (imageExists) {
                        return { ...book, imageUrl: localImagePath };
                    }

                    const imageRes = await fetch(`/api/covers?bucket=portadas-manuales-importony&file=${book.name}.png`);
                    const imageData = await imageRes.json();
                    return {
                        ...book,
                        imageUrl: imageData.filePath || "/images/nuevo-catalog.png", // Usa una imagen por defecto si falla
                    };
                })
            );

            setManuals(booksWithImages);
        }
        fetchBancos();
    }, []);

    // Detectar tamaño de pantalla para 2 / 6 visibles
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth >= 1024 ? false : true);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // // cargamos la data
    useEffect(() => {
        setManualsOrdenados(manuals);
    }, [manuals]);

    // Ordena los productos según el orden seleccionado
    const handleSelectChange = (value: string) => {
        const manualsOrdenados = [...manuals]; // clonamos el array para no mutar el original
        switch (value) {
            case "nameAZ":
                manualsOrdenados.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "nameZA":
                manualsOrdenados.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "default":
            default:
                manualsOrdenados.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        setManualsOrdenados(manualsOrdenados);
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
                        <p>Hay {manuals.length} item(s)</p>
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
                    {manualsOrdenados.map((manual, i) => (
                        <div key={i} className={`flex justify-center group ${order === 2 && !isMobile && "lg:flex"} `}>
                            <div className="w-64 border border-zinc-300 shadow-md p-2 flex flex-col items-center">
                                <div className="w-full h-64 flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={manual.imageUrl}
                                        alt={manual.name}
                                        width={500}
                                        height={500}
                                        className="my-6 h-full w-auto object-contain"
                                        priority={true}
                                    />
                                </div>

                                <p className="my-2 text-sm lg:text-base text-center font-semibold">{manual.name}</p>

                                <button
                                    onClick={async () => {
                                        try {
                                            // Pedimos el PDF como blob desde tu endpoint protegido
                                            const res = await fetch(manual.url, {
                                                headers: {'x-request-source': 'internal-app'}, // este header autoriza la petición}
                                                credentials: 'include', // o token si usas auth
                                            });

                                            if (!res.ok) {
                                                throw new Error('Error al obtener el PDF');
                                            }

                                            const blob = await res.blob();

                                            // Creamos una URL temporal en memoria
                                            const blobUrl = URL.createObjectURL(blob);

                                            // Lo pasamos al visor
                                            setSelectedManual(blobUrl);
                                            setIsPdfViewerOpen(true);

                                        } catch (error) {
                                            console.error('❌ Error cargando PDF:', error);
                                        }
                                    }}
                                    className="w-3/4 h-10 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                                >
                                    <span className="hidden lg:block">Leer ahora</span>
                                    <span className="lg:hidden block">Leer</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isPdfViewerOpen && (
                <MyPDFViewer
                    fileUrl={selectedManual}
                    // onClose={() => setIsPdfViewerOpen(false)}
                    onClose={() => {
                        // Liberamos el blob para no saturar memoria
                        URL.revokeObjectURL(selectedManual);
                        setIsPdfViewerOpen(false);
                    }}
                />
            )}
        </div>
    );
}

export default function Automatizacion() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        // <div className="mx-auto justify-between items-center xl:w-8/12 2xl:w-8/12 w-11/12 mb-8 bg-red-500">
        <div className="mx-auto justify-between items-center">
            {!isAuthenticated ? (
                <Login onLoginSuccess={() => setIsAuthenticated(true)} />
            ) : (
                <div className='mx-auto justify-between items-center xl:w-8/12 2xl:w-8/12 w-11/12 mb-8'>
                    <ContentAutomatizacion />
                </div>
            )}
        </div>
    );
}