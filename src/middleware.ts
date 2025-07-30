// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const role = request.cookies.get('user_role')?.value

  const pathname = url.pathname

  // Si el usuario no tiene rol, redirigir al login
  if (!role) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Protección por rol
  if (pathname.startsWith('/paciente') && role !== 'paciente') {
    return NextResponse.redirect(new URL(`/${role}`, request.url)) // Redirige al dashboard correcto
  }

  if (pathname.startsWith('/medico') && role !== 'medico') {
    return NextResponse.redirect(new URL(`/${role}`, request.url))
  }

  if (pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL(`/${role}`, request.url))
  }

  return NextResponse.next()
}

// Solo proteger estas rutas
export const config = {
  matcher: ['/paciente/:path*', '/medico/:path*', '/admin/:path*'],
}
