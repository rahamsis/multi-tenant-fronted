import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { headers } from "next/headers";
import Footer from '@/components/cygrefrisac/footer/page';
import Whatsapp from '@/components/cygrefrisac/whatsapp/whatsapp';

import { getMenus, getWebSite } from "../utils/actions";
import { WrapperHeader } from '@/components/cygrefrisac/wrapperheader/wrapperHeader';
import { TenantProvider } from '../context/TenantContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CYG Refrigeración S.A.C.',
  description: 'Diseño - equipos y proyectos',
  icons: {
    icon: '/cygrefrisac/images/faviconCygrefrisac.ico'
  },
  openGraph: {
    title: 'CYG Refrigeración S.A.C.',
    description: 'Diseño - equipos y proyectos',
    url: 'https://cygrefrisac.com.pe',
    images: [
      {
        url: 'https://cygrefrisac.com.pe/cygrefrisac/images/cygrefrisac_miniatura.png',
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

  const dataWebSite = await getWebSite(tenant);
  const result = await getMenus(tenant);

  return (
    <html lang="en">
      <body className={inter.className} >
        <WrapperHeader dataWebsite={dataWebSite[0]} menu={result.menus} otherMenus={result.categorias} />
        <TenantProvider tenant={tenant}>
          <main>{children}</main>
        </TenantProvider>
        <Footer dataWebsite={dataWebSite[0]}/>
        <Whatsapp dataWebsite={dataWebSite[0]}/>
      </body>
    </html>
  )
}
