import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { headers } from "next/headers";
import Header from "@/components/importonyperu/header/header-importonyperu";
import Footer from "@/components/importonyperu/footer/footer";
import Whatsapp from "./components/whatsapp/whatsapp";
import { PreHeader } from "@/components/importonyperu/preHeader/pre-header";

import { getMenus } from "../utils/actions";

import { TenantProvider } from '../context/TenantContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Importhnostony",
  description: "Importaciones y Negociaciones Hnos. Tony E.I.R.L.",
  keywords: ["Importony", "importaciones Tony", "tony peru"],
  icons: {
    icon: "/importhnostony/images/importhnostonyIcon.ico"
  },
  openGraph: {
    title: 'Importhnostony',
    description: 'Importaciones y Negociaciones Hnos. Tony E.I.R.L.',
    url: 'https://importhnostony.com.pe',
    siteName: "Importhnostony",
    images: [
      {
        url: 'https://importhnostony.com.pe/importhnostony/images/importhnostony_miniatura.png',
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
  const tenant = host.split(".")[0]; // "depsac", "importonyperu", "samar", etc.

  const result = await getMenus(tenant);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PreHeader />
        <Header menu={result.menus} otherMenus={result.categorias} />
        <TenantProvider tenant={tenant}>
          <main className="mt-16 lg:mt-0">
            {children}
          </main>
        </TenantProvider>
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
