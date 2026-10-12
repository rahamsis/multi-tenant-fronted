// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(req: NextRequest) {
//   const host = req.headers.get('host') || ''

//   if (host.includes('importonyperu')) {
//     return NextResponse.rewrite(new URL('/importonyperu' + req.nextUrl.pathname, req.url))
//   }
//   if (host.includes('importhnostony')) {
//     return NextResponse.rewrite(new URL('/importhnostony' + req.nextUrl.pathname, req.url))
//   }
//   if (host.includes('depsac')) {
//     return NextResponse.rewrite(new URL('/depsac' + req.nextUrl.pathname, req.url))
//   }
//   if (host.includes('cygrefrisac')) {
//     return NextResponse.rewrite(new URL('/cygrefrisac' + req.nextUrl.pathname, req.url))
//   }
//   if (host.includes('lezcor')) {
//     return NextResponse.rewrite(new URL('/lezcor' + req.nextUrl.pathname, req.url))
//   }
//   if (host.includes('samarnature')) {
//     return NextResponse.rewrite(new URL('/samarnature' + req.nextUrl.pathname, req.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico|pdfjs|importonyperu/|importhnostony/|depsac/|cygrefrisac/|samarnature/).*)'],
// }
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const { pathname } = req.nextUrl;

  // No reescribir archivos estáticos ni recursos internos
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/pdfjs/") ||
    pathname === "/favicon.ico" ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const tenants = [
    "importonyperu",
    "importhnostony",
    "depsac",
    "cygrefrisac",
    "lezcor",
    "samarnature",
  ];

  const tenant = tenants.find((name) => host.includes(name));

  if (tenant) {
    // Clonar la URL original para conservar los query params
    const url = req.nextUrl.clone();

    // Modificar únicamente el pathname
    url.pathname = `/${tenant}${pathname}`;

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|pdfjs|.*\\..*).*)",
  ],
};