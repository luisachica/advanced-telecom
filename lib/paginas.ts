// lib/paginas.ts
// Constructores de metadata comunes para las páginas de la arquitectura SEO.
import type { Metadata } from "next"
import { withPhone } from "./seo"
import { NEGOCIO } from "./negocio"

/** Metadata estándar de página indexable con canonical propio */
export function metadataPagina(opciones: {
  title: string
  description: string
  /** Ruta con barra inicial y final, ej. "/servicios/alarmas/" */
  ruta: string
  imagen?: string
}): Metadata {
  const url = `${NEGOCIO.url}${opciones.ruta}`
  const description = withPhone(opciones.description)
  return {
    title: opciones.title,
    description,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      title: opciones.title,
      description,
      siteName: NEGOCIO.nombre,
      images: [{ url: opciones.imagen || "/logo-antenas-toledo.png", width: 800, height: 600, alt: opciones.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opciones.title,
      description,
    },
  }
}
