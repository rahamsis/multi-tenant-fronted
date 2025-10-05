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
  if (host.includes('cygrefrisac')) {
    return NextResponse.rewrite(new URL('/cygrefrisac' + req.nextUrl.pathname, req.url))
  }
  if (host.includes('lezcor')) {
    return NextResponse.rewrite(new URL('/lezcor' + req.nextUrl.pathname, req.url))
  }

  if (host.includes('oishipop')) {
    return NextResponse.rewrite(new URL('/oishipop' + req.nextUrl.pathname, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|pdfjs|importonyperu/|depsac/|cygrefrisac/|oishipop/).*)'],
}