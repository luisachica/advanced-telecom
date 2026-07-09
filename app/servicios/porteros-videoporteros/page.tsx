import ContenidoServicioHub from "@/components/paginas/contenido-servicio-hub"
import { porterosHub } from "@/data/servicios-hub/porteros-videoporteros"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: porterosHub.metaTitle,
  description: porterosHub.metaDescription,
  ruta: `/servicios/${porterosHub.slug}/`,
  imagen: porterosHub.image,
})

export default function Page() {
  return <ContenidoServicioHub servicio={porterosHub} />
}
