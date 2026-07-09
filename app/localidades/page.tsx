// app/localidades/page.tsx — Índice de localidades (Estrategia §2.3)
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import StructuredData from "@/components/StructuredData"
import { SectionHeader, CtaFinal, BreadcrumbPill } from "@/components/paginas/bloques"
import { LOCALIDADES_T1, LOCALIDADES_T2, CLUSTERS, getLocalidad } from "@/data/localidades"
import { schemaGraph, schemaLocalBusiness, schemaBreadcrumb } from "@/lib/schema"
import { NEGOCIO } from "@/lib/negocio"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: "Localidades donde Trabajamos | Antenas Toledo",
  description:
    "Instalador de antenas, cámaras, alarmas y videoporteros en Toledo, Getafe, Valdemoro, Illescas y toda la zona. Encuentre su localidad.",
  ruta: "/localidades/",
})

export default function LocalidadesPage() {
  const url = `${NEGOCIO.url}/localidades/`
  const schema = schemaGraph(
    schemaLocalBusiness({ areaServed: LOCALIDADES_T1.map((l) => l.nombre) }),
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Localidades", url },
    ])
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
              <BreadcrumbPill items={[{ nombre: "Inicio", href: "/" }, { nombre: "Localidades" }]} />
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">
                Localidades donde trabajamos
              </h1>
              <p className="text-brand-black-light text-lg">
                Damos servicio en la provincia de Toledo, La Sagra y el sur de la Comunidad de Madrid. Elija su
                localidad para ver los servicios, proyectos y tiempos de respuesta en su zona.
              </p>
            </div>
          </div>
        </section>

        {/* Localidades principales (T1) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader pill="Zonas principales" titulo="Localidades con servicio prioritario" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {LOCALIDADES_T1.map((localidad) => (
                <Link
                  key={localidad.slug}
                  href={`/localidades/${localidad.slug}/`}
                  className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-brand-green/40 transition-all"
                >
                  <div className="bg-brand-green/10 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-brand-green" />
                  </div>
                  <span className="font-semibold text-brand-black">{localidad.nombre}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resto de localidades por clúster */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader pill="Por comarcas" titulo="Todas las localidades por zona" />
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {CLUSTERS.map((cluster) => {
                const localidades = cluster.localidades
                  .map((slug) => getLocalidad(slug))
                  .filter((l) => l !== undefined)
                if (localidades.length === 0) return null
                return (
                  <div key={cluster.nombre} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-brand-black mb-4">{cluster.nombre}</h3>
                    <ul className="space-y-2">
                      {localidades.map((localidad) => (
                        <li key={localidad!.slug}>
                          <Link
                            href={`/localidades/${localidad!.slug}/`}
                            className="text-brand-black-light hover:text-brand-green transition-colors inline-flex items-center gap-2"
                          >
                            <ArrowRight className="h-3.5 w-3.5 text-brand-green" />
                            Instalador en {localidad!.nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/cobertura/" className="text-brand-green hover:text-brand-green/80 font-semibold">
                ¿No encuentra su zona? Vea la cobertura completa <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CtaFinal
          titulo="Presupuesto gratuito en su localidad"
          texto="Llámenos o escríbanos por WhatsApp y le confirmamos la disponibilidad y el tiempo de respuesta en su zona."
          waTexto="Hola, quiero un presupuesto para mi localidad"
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
