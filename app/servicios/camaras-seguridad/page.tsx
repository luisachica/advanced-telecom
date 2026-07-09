import ContenidoServicioHub from "@/components/paginas/contenido-servicio-hub"
import { camarasHub } from "@/data/servicios-hub/camaras-seguridad"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: camarasHub.metaTitle,
  description: camarasHub.metaDescription,
  ruta: `/servicios/${camarasHub.slug}/`,
  imagen: camarasHub.image,
})

export default function Page() {
  return <ContenidoServicioHub servicio={camarasHub} />
}
