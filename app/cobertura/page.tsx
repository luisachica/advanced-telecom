// app/cobertura/page.tsx — Índice maestro de cobertura (Estructura P2 §6.1).
// Facilita el crawleo de todas las páginas de localidad y captura búsquedas Tier 3.
import Link from "next/link"
import { MapPin, ArrowRight, CheckCircle } from "lucide-react"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import StructuredData from "@/components/StructuredData"
import { SectionHeader, CtaFinal, BreadcrumbPill } from "@/components/paginas/bloques"
import { LOCALIDADES_T1, CLUSTERS, getLocalidad, ZONAS_T3 } from "@/data/localidades"
import { schemaGraph, schemaLocalBusiness, schemaBreadcrumb } from "@/lib/schema"
import { NEGOCIO } from "@/lib/negocio"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: "Zonas de Cobertura | Antenas Toledo - Instalador en Toledo, Getafe y Comarca",
  description:
    "Cubrimos más de 100 localidades en Toledo, La Sagra, sur de Madrid y zona. Consulte si llegamos a su zona. Presupuesto gratuito.",
  ruta: "/cobertura/",
})

export default function CoberturaPage() {
  const url = `${NEGOCIO.url}/cobertura/`
  const schema = schemaGraph(
    schemaLocalBusiness({
      areaServed: [
        ...LOCALIDADES_T1.map((l) => l.nombre),
        "Provincia de Toledo",
        "Comarca de La Sagra",
        "Sur de la Comunidad de Madrid",
      ],
    }),
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Cobertura", url },
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
              <BreadcrumbPill items={[{ nombre: "Inicio", href: "/" }, { nombre: "Cobertura" }]} />
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">
                Zonas de Cobertura de Antenas Toledo
              </h1>
              <p className="text-brand-black-light text-lg">
                Cubrimos más de 100 localidades en la provincia de Toledo, La Sagra y el sur de la Comunidad de
                Madrid: municipios, urbanizaciones y polígonos industriales.
              </p>
            </div>
          </div>
        </section>

        {/* Localidades T1 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader pill="Zonas principales" titulo="Localidades con servicio prioritario" />
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {LOCALIDADES_T1.map((localidad) => (
                <Link
                  key={localidad.slug}
                  href={`/localidades/${localidad.slug}/`}
                  className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-brand-green/40 transition-all"
                >
                  <div className="bg-brand-green/10 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="font-semibold text-brand-black block">{localidad.nombre}</span>
                    <span className="text-sm text-brand-black-light">{localidad.tiempoRespuesta}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Localidades T2 por clúster */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader pill="Por comarcas" titulo="Resto de localidades por clúster geográfico" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {CLUSTERS.map((cluster) => {
                const localidades = cluster.localidades
                  .map((slug) => getLocalidad(slug))
                  .filter((l) => l !== undefined && l.tier === 2)
                if (localidades.length === 0) return null
                return (
                  <div key={cluster.nombre} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-brand-black mb-3">{cluster.nombre}</h3>
                    <ul className="space-y-1.5">
                      {localidades.map((localidad) => (
                        <li key={localidad!.slug}>
                          <Link
                            href={`/localidades/${localidad!.slug}/`}
                            className="text-brand-black-light hover:text-brand-green transition-colors text-sm"
                          >
                            {localidad!.nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tier 3: urbanizaciones y barrios */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Urbanizaciones y barrios"
              titulo="También cubrimos estas zonas"
              descripcion="Urbanizaciones, barrios y núcleos pequeños atendidos desde su localidad de referencia."
            />
            <div className="space-y-8 max-w-5xl mx-auto">
              {ZONAS_T3.map((grupo) => (
                <div key={grupo.referencia}>
                  <h3 className="text-lg font-semibold text-brand-black mb-3">
                    {grupo.referencia}
                    {grupo.referenciaSlug && (
                      <>
                        {" "}
                        <Link href={`/localidades/${grupo.referenciaSlug}/`} className="text-brand-green text-sm font-medium hover:underline">
                          (ver página de la zona)
                        </Link>
                      </>
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {grupo.zonas.map((zona) => (
                      <span key={zona} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-sm text-brand-black-light border border-gray-100">
                        <CheckCircle className="h-3.5 w-3.5 text-brand-green" />
                        {zona}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto mt-12 p-6 bg-brand-green/10 rounded-2xl text-center">
              <p className="text-brand-black font-medium">
                ¿No encuentra su zona? Llámenos al{" "}
                <a href={`tel:${NEGOCIO.telefonoTel}`} className="text-brand-green font-bold hover:underline">
                  {NEGOCIO.telefonoDisplay}
                </a>{" "}
                y le confirmamos la cobertura al momento.
              </p>
            </div>
          </div>
        </section>

        <CtaFinal
          titulo="Presupuesto gratuito en toda la zona de cobertura"
          texto="Cuéntenos qué necesita y dónde: le confirmamos disponibilidad, tiempo de respuesta y presupuesto cerrado."
          waTexto="Hola, quiero saber si cubrís mi zona"
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
