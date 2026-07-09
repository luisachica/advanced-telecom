import ContenidoServicioHub from "@/components/paginas/contenido-servicio-hub"
import { alarmasHub } from "@/data/servicios-hub/alarmas"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: alarmasHub.metaTitle,
  description: alarmasHub.metaDescription,
  ruta: `/servicios/${alarmasHub.slug}/`,
  imagen: alarmasHub.image,
})

export default function Page() {
  return <ContenidoServicioHub servicio={alarmasHub} />
}
