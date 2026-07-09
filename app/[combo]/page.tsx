// app/[combo]/page.tsx
// Páginas Servicio+Localidad a nivel raíz (ej. /camaras-seguridad-toledo/), solo para
// las combinaciones activas de data/combos.ts (Estrategia §3.4 / Estructura P2 §5).
import { notFound } from "next/navigation"
import ContenidoServicioLocalidad from "@/components/paginas/contenido-servicio-localidad"
import { COMBOS_ACTIVOS, getCombo } from "@/data/combos"
import { metadataPagina } from "@/lib/paginas"

export const dynamicParams = false

export function generateStaticParams() {
  return COMBOS_ACTIVOS.map((combo) => ({ combo: combo.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ combo: string }> }) {
  const { combo: slug } = await params
  const combo = getCombo(slug)
  if (!combo?.metaTitle || !combo.metaDescription) return {}
  return metadataPagina({
    title: combo.metaTitle,
    description: combo.metaDescription,
    ruta: `/${combo.slug}/`,
  })
}

export default async function Page({ params }: { params: Promise<{ combo: string }> }) {
  const { combo: slug } = await params
  const combo = getCombo(slug)
  if (!combo) notFound()
  return <ContenidoServicioLocalidad combo={combo} />
}
