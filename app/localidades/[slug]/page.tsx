// app/localidades/[slug]/page.tsx
// Hubs de Localidad T1 y T2 generados desde el registro de datos (export estático).
import { notFound } from "next/navigation"
import ContenidoLocalidad from "@/components/paginas/contenido-localidad"
import { LOCALIDADES, getLocalidad } from "@/data/localidades"
import { metadataPagina } from "@/lib/paginas"

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALIDADES.map((localidad) => ({ slug: localidad.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const localidad = getLocalidad(slug)
  if (!localidad) return {}
  return metadataPagina({
    title: localidad.metaTitle,
    description: localidad.metaDescription,
    ruta: `/localidades/${localidad.slug}/`,
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const localidad = getLocalidad(slug)
  if (!localidad) notFound()
  return <ContenidoLocalidad localidad={localidad} />
}
