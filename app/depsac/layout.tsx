import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { headers } from "next/headers";
import Footer from '@/components/depsac/footer/footer';
import Header from '@/components/depsac/header/header';
import Whatsapp from '../../components/depsac/whatsapp/whatsapp';

import { getMenus } from "../utils/actions";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DEP S.A.C.',
  description: 'Diseño de equipos y proyectos',
  icons: {
    icon: '/depsac/images/faviconDepsac.ico'
  },
  openGraph: {
    title: 'DEPSAC ',
    description: 'Diseño de equipos y proyectos',
    url: 'https://depsac.com.pe',
    images: [
      {
        url: 'https://depsac.com.pe/depsac/images/depsac_miniatura.png',
        width: 1200,
        height: 630,
        alt: 'Imagen de vista previa',
      },
    ],
    locale: "es_ES",
    type: 'website',
  },
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const tenant = host.split(".")[0]; // "depsac", "importonyperu", "oishipop", etc.

  const result = await getMenus(tenant);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header menu={result.menus} otherMenus={result.categorias} />
        <main>
          {children}
        </main>
        <Footer />
        <Whatsapp />
      </body>
    </html>
  )
}
