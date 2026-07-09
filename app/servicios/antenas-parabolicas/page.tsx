import ContenidoServicioHub from "@/components/paginas/contenido-servicio-hub"
import { antenasHub } from "@/data/servicios-hub/antenas-parabolicas"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: antenasHub.metaTitle,
  description: antenasHub.metaDescription,
  ruta: `/servicios/${antenasHub.slug}/`,
  imagen: antenasHub.image,
})

export default function Page() {
  return <ContenidoServicioHub servicio={antenasHub} />
}
