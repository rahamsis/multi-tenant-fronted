// // import { NextResponse } from "next/server";
// // import type { NextRequest } from "next/server";

// // export function middleware(req: NextRequest) {
// //     const url = req.nextUrl.clone();
// //     const host = req.headers.get("host");

// //     if (host === "importonyperu.local") {
// //         url.pathname = `/importonyperu${url.pathname}`;
// //     } else if (host === "depsac.local") {
// //         url.pathname = `/depsac${url.pathname}`;
// //     } else if (host === "anita.com") {
// //         url.pathname = `/anita${url.pathname}`;
// //     }

// //     console.log(url.pathname)
// //     return NextResponse.rewrite(url);
// // }

// // export const config = {
// //     matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// // };

// // import { NextResponse } from "next/server";
// // import type { NextRequest } from "next/server";

// // export function middleware(req: NextRequest) {
// //     const url = req.nextUrl.clone();
// //     const host = req.headers.get("host");

// //     if (
// //         url.pathname.startsWith("/_next") ||
// //         url.pathname === "/favicon.ico" ||
// //         url.pathname.startsWith("/api")
// //     ) {
// //         return NextResponse.next();
// //     }

// //     if (host === "importonyperu.local") {
// //         url.pathname = url.pathname === "/" ? "/importonyperu/home" : `/importonyperu${url.pathname}`;
// //     } else if (host === "depsac.local") {
// //         url.pathname = url.pathname === "/" ? "/depsac/home" : `/depsac${url.pathname}`;
// //     } else if (host === "anita.com") {
// //         url.pathname = url.pathname === "/" ? "/anita/home" : `/anita${url.pathname}`;
// //     }

// //     return NextResponse.rewrite(url);
// // }

// // export const config = {
// //     matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// // };

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//     const url = req.nextUrl.clone();
//     const host = req.headers.get("host") || "";

//     // Ignorar rutas internas y API
//     if (
//         url.pathname.startsWith("/_next") ||
//         url.pathname.startsWith("/api") ||
//         url.pathname === "/favicon.ico"
//     ) {
//         return NextResponse.next();
//     }

//     // Redirigir según dominio
//     if (host === "importonyperu.local") {
//         url.pathname = url.pathname === "/" ? "/importonyperu/home" : `/importonyperu${url.pathname}`;
//     } else if (host === "depsac.local") {
//         url.pathname = url.pathname === "/" ? "/depsac/home" : `/depsac${url.pathname}`;
//     } else if (host === "anita.com") {
//         url.pathname = url.pathname === "/" ? "/anita/home" : `/anita${url.pathname}`;
//     }

//     return NextResponse.rewrite(url);
// }

// export const config = {
//     matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//     const url = req.nextUrl.clone();
//     const hostHeader = req.headers.get("host") || "";

//     // Extraemos solo el hostname, sin el puerto
//     const host = hostHeader.split(":")[0];

//     console.log("Host detectado:", host);
//     console.log("Ruta inicial:", url.pathname);

//     if (
//         url.pathname.startsWith("/_next") ||
//         url.pathname.startsWith("/api") ||
//         url.pathname === "/favicon.ico"
//     ) {
//         return NextResponse.next();
//     }

//     if (host === "importonyperu.local") {
//         url.pathname = url.pathname === "/" ? "/importonyperu/home" : `/importonyperu${url.pathname}`;
//     } else if (host === "depsac.local") {
//         url.pathname = url.pathname === "/" ? "/depsac/home" : `/depsac${url.pathname}`;
//     } else if (host === "anita.com") {
//         url.pathname = url.pathname === "/" ? "/anita/home" : `/anita${url.pathname}`;
//     } else {
//         console.log("Dominio no reconocido, redirigiendo a 404");
//         url.pathname = "/404";
//     }

//     console.log("Reescribiendo a:", url.pathname);
//     return NextResponse.rewrite(url);
// }

// export const config = {
//     matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };

// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''

  if (host.includes('importonyperu')) {
    return NextResponse.rewrite(new URL('/importonyperu' + req.nextUrl.pathname, req.url))
  }
  if (host.includes('depsac')) {
    return NextResponse.rewrite(new URL('/depsac' + req.nextUrl.pathname, req.url))
  }
  if (host.includes('lezcor')) {
    return NextResponse.rewrite(new URL('/lezcor' + req.nextUrl.pathname, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|importonyperu/images|importonyperu/assets|depsac/images|depsac/assets).*)'],
}