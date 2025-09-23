"use client";

import Image from "next/image";

interface PdfCardProps {
    url: string;
    name: string;
    thumbnailUrl: string;
}

export default function PdfCard({ url, name, thumbnailUrl }: PdfCardProps) {
    return (
        <div className="w-64 border border-zinc-300 shadow-md p-2 flex flex-col items-center">
            <div className="w-full h-64 flex items-center justify-center overflow-hidden">
                <Image
                    src={thumbnailUrl}
                    alt={name}
                    width={500}
                    height={500}
                    className="my-6 h-full w-auto object-contain"
                    priority={true}
                />
            </div>
            <p className="mt-2 text-sm lg:text-base text-center font-semibold">{name}</p>
            <a
                href={url}
                target="_blank"
                className="mt-2 px-4 py-1 bg-black text-white hover:opacity-50"
            >
                Ver PDF
            </a>
        </div>
    );
}
