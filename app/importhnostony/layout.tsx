import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";

import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { TenantProvider } from "../context/TenantContext";
import { CartProvider } from "../context/CartContext";

import { WrapperHeader } from "@/components/importhnostony/wrapperheader/wrapperHeader";
import { Footer } from "@/components/importhnostony/footer/footer";

import {
  getMenus,
  getWebSite,
  getAllProduct,
} from "../utils/actions";
import Whatsapp from "@/components/importhnostony/whatsapp/whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImportHnosTony ",
  description:
    "IMPORTHNOSTONY ofrece repuestos y accesorios para máquinas de coser industriales. Garfios, empeines, impelentes y piezas compatibles con Juki, Siruba, Kingtex y otras marcas.",
  keywords: [
    "IMPORTHNOSTONY",
    "repuestos para máquinas de coser",
    "máquinas textiles industriales",
    "garfios industriales",
    "empeines",
    "impelentes",
    "Juki",
    "Siruba",
    "Kingtex",
    "repuestos textiles Perú",
  ],
  icons: {
    icon: "/importhnostony/images/importhnostony.ico",
  },
  openGraph: {
    title: "IMPORTHNOSTONY | Repuestos para Máquinas Industriales",
    description:
      "Repuestos y accesorios para máquinas textiles industriales Juki, Siruba, Kingtex y otras marcas.",
    siteName: "IMPORTHNOSTONY",
    images: [
      {
        url: "https://importhnostony.com.pe/importhnostony/images/importhnostony_miniatura.png",
        width: 1200,
        height: 630,
        alt: "IMPORTHNOSTONY - Repuestos industriales",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get("host") || "";

  const tenant = host.split(".")[0];

  // Datos del tenant
  const [dataWebSite, result, products] = await Promise.all([
    getWebSite(tenant),
    getMenus(tenant),
    getAllProduct(tenant),
  ]);

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        <TenantProvider tenant={tenant}>
          <CartProvider>
            <WrapperHeader dataWebsite={dataWebSite[0]} menu={result.menus} otherMenus={result.categorias} products={products} tenant={tenant} />
            <main className="flex-1">
              {children}
            </main>
            <Footer dataWebsite={dataWebSite[0]} />
          </CartProvider>
        </TenantProvider>
        <Whatsapp dataWebsite={dataWebSite[0]} />
      </body>
    </html>
  );
}