import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { PreHeader } from "@/components/oishipop/preHeader/pre-header";
import { Header } from "@/components/oishipop/header/header"
import { Navbar } from "@/components/oishipop/navbar/navbar"
import { Footer } from "@/components/oishipop/footer/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Oishipop",
    description: "Descripción de Oishipop xd",
    keywords: ["Oishipop", "Kawai", "oishi", "pop"],
    icons: {
        icon: "/oishipop/images/oishipop.ico"
    },
    openGraph: {
        title: 'Oishipop',
        description: 'Descripción de Oishipop xd',
        url: 'https://oishipop.com.pe',
        siteName: "Oishipop",
        images: [
            {
                url: 'https://oishipop.com.pe/oishipop/images/oishipop_miniatura.png',
                width: 1200,
                height: 630,
                alt: 'Imagen de vista previa',
            },
        ],
        locale: "es_ES",
        type: "website",
    },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
                <PreHeader />
                <Header />
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
