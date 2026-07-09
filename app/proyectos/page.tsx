// app/proyectos/page.tsx — Portfolio de proyectos (Estructura P2 §6.3)
import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import StructuredData from "@/components/StructuredData"
import { SectionHeader, CtaFinal, BreadcrumbPill } from "@/components/paginas/bloques"
import { PROYECTOS } from "@/data/proyectos"
import { schemaGraph, schemaLocalBusiness, schemaBreadcrumb, schemaImageObject } from "@/lib/schema"
import { NEGOCIO } from "@/lib/negocio"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: "Proyectos de Instalación | Antenas Toledo - Nuestros Trabajos",
  description:
    "Vea nuestros proyectos de instalación de antenas, cámaras, alarmas y videoporteros en Toledo, Getafe, Valdemoro y toda la zona.",
  ruta: "/proyectos/",
})

export default function ProyectosPage() {
  const url = `${NEGOCIO.url}/proyectos/`
  const schema = schemaGraph(
    schemaLocalBusiness({}),
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Proyectos", url },
    ]),
    ...PROYECTOS.map((p) => schemaImageObject(`${url}${p.slug}/`, p.imagen, p.imagenAlt))
  )

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={schema} />
      <PhoneBanner />
      <MainNavigation services={[]} />
      <main className="flex-1">
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <BreadcrumbPill items={[{ nombre: "Inicio", href: "/" }, { nombre: "Proyectos" }]} />
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">
                Proyectos de Instalación Realizados
              </h1>
              <p className="text-brand-black-light text-lg">
                Trabajo real, con contexto y resultado: instalaciones de antenas, cámaras, alarmas y videoporteros
                en Toledo, La Sagra y el sur de Madrid.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PROYECTOS.map((proyecto) => (
                <div key={proyecto.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={proyecto.imagen} alt={proyecto.imagenAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-brand-black-light mb-2">
                      <MapPin className="h-4 w-4 text-brand-green" />
                      {proyecto.zona}, {proyecto.localidadNombre}
                    </div>
                    <h2 className="text-lg font-semibold text-brand-black mb-2">{proyecto.titulo}</h2>
                    <p className="text-brand-black-light text-sm mb-4 line-clamp-3">{proyecto.problema}</p>
                    <Link
                      href={`/proyectos/${proyecto.slug}/`}
                      className="mt-auto inline-flex items-center gap-2 text-brand-green hover:text-brand-green/80 font-medium"
                    >
                      Ver el proyecto <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaFinal
          titulo="¿Necesita algo similar?"
          texto="Cuéntenos su caso y le preparamos un presupuesto cerrado sin compromiso, con visita de estudio incluida."
          waTexto="Hola, he visto vuestros proyectos y quiero un presupuesto"
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
