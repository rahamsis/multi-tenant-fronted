import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { headers } from "next/headers";
import { PreHeader } from "@/components/samar/preHeader/pre-header";
import Header from "@/components/samar/header/header";
import { Footer } from "@/components/samar/footer/footer"
import { getMenus, getWebSite } from "../utils/actions";
import { TenantProvider } from '../context/TenantContext';
import { CartProvider } from "../context/CartContext";
import { getAllProduct } from "@/app/utils/actions";
import { WrapperHeader } from "@/components/samar/wrapperheader/wrapperHeader";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Samar",
    description: "Descripción de Samar xd",
    keywords: ["Samar", "Jabones", "cuidado personal", "aceites esenciales", "cosmeticos", "productos naturales"],
    icons: {
        icon: "/samar/images/samar.ico"
    },
    openGraph: {
        title: 'Samar',
        description: 'Descripción de Samar xd',
        url: 'https://samarnature.com.pe',
        siteName: "Samar",
        images: [
            {
                url: 'https://samarnature.com.pe/samar/images/samar_miniatura.png',
                width: 1200,
                height: 630,
                alt: 'Imagen de vista previa',
            },
        ],
        locale: "es_ES",
        type: "website",
    },
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const headersList = await headers();
    const host = headersList.get("host") || "";
    const tenant = host.split(".")[0];

    const dataWebSite = await getWebSite(tenant);
    const result = await getMenus(tenant);
    const products = await getAllProduct(tenant);

    return (
        <html lang="es">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
            >
                <TenantProvider tenant={tenant}>
                    <CartProvider>
                        {/* <PreHeader dataWebsite={dataWebSite[0]} /> */}
                        <WrapperHeader dataWebsite={dataWebSite[0]} menu={result.menus} otherMenus={result.categorias} products={products} tenant={tenant} />

                        {/* <Header
                            dataWebsite={dataWebSite[0]}
                            menu={result.menus}
                            otherMenus={result.categorias}
                            products={products}
                        /> */}

                        <main>{children}</main>

                        <Footer dataWebsite={dataWebSite[0]} />
                    </CartProvider>
                </TenantProvider>
            </body>
        </html>
    );
}
