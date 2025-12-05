import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Aplica cabecera de noindex en todas las rutas (útil en dev)
export function middleware(_req: NextRequest) {
  const res = NextResponse.next()
  res.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return res
}

// Nota: En producción con `output: 'export'` la cabecera global se aplica
// vía `public/_headers`. El middleware asegura el comportamiento en desarrollo.
