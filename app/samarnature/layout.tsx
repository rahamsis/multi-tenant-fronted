import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { headers } from "next/headers";
import { Footer } from "@/components/samarnature/footer/footer"
import { TenantProvider } from '../context/TenantContext';
import { CartProvider } from "../context/CartContext";
import { WrapperHeader } from "@/components/samarnature/wrapperheader/wrapperHeader";

import { 
  getAllProduct, 
  getMenus, 
  getWebSite
} from "@/app/utils/actions";
import Whatsapp from "@/components/samarnature/whatsapp/whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SamarNature",
  description: "Samar es una marca de productos naturales para el cuidado personal, que ofrece jabones, aceites esenciales y cosméticos elaborados con ingredientes de alta calidad y respetuosos con el medio ambiente.",
  keywords: [
    "Samar", 
    "Jabones", 
    "cuidado personal", 
    "aceites esenciales", 
    "cosmeticos", 
    "productos naturales"
  ],
  icons: {
    icon: "/samarnature/images/samarnature.ico",
  },
  openGraph: {
    title: 'Samarnature',
    description: 'Samar es una marca de productos naturales para el cuidado personal, que ofrece jabones, aceites esenciales y cosméticos elaborados con ingredientes de alta calidad y respetuosos con el medio ambiente.',
    url: 'https://samarnature.com',
    siteName: "Samar",
    images: [
      {
        url: 'https://samarnature.com/samarnature/images/samarnature_miniatura.png',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <TenantProvider tenant={tenant}>
          <CartProvider>
            <WrapperHeader dataWebsite={dataWebSite[0]} menu={result.menus} otherMenus={result.categorias} products={products} tenant={tenant} />
            <main>{children}</main>
            <Footer dataWebsite={dataWebSite[0]} />
          </CartProvider>
        </TenantProvider>
        <Whatsapp dataWebsite={dataWebSite[0]}/>
      </body>
    </html>
  );
}
