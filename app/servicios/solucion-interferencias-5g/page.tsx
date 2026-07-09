import ContenidoServicioHub from "@/components/paginas/contenido-servicio-hub"
import { interferenciasHub } from "@/data/servicios-hub/solucion-interferencias-5g"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: interferenciasHub.metaTitle,
  description: interferenciasHub.metaDescription,
  ruta: `/servicios/${interferenciasHub.slug}/`,
  imagen: interferenciasHub.image,
})

export default function Page() {
  return <ContenidoServicioHub servicio={interferenciasHub} />
}
