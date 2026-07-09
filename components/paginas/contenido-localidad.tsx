// components/paginas/contenido-localidad.tsx
// Plantilla de Hub de Localidad. Renderiza el modelo completo T1 (Estructura P1 §3)
// y la versión concisa T2 (Estructura P2 §4) según el tier de la localidad.
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import {
  SectionHeader,
  CtaFinal,
  BreadcrumbPill,
  Testimonios,
  TiemposRespuesta,
} from "@/components/paginas/bloques"
import { NEGOCIO, waLink } from "@/lib/negocio"
import StructuredData from "@/components/StructuredData"
import { schemaGraph, schemaLocalBusiness, schemaService, schemaBreadcrumb } from "@/lib/schema"
import { getLocalidad } from "@/data/localidades"
import type { Localidad } from "@/types/localidad"

export default function ContenidoLocalidad({ localidad }: { localidad: Localidad }) {
  const esT1 = localidad.tier === 1
  const cercanas = localidad.cercanas
    .map((slug) => getLocalidad(slug))
    .filter((l): l is Localidad => Boolean(l))

  const url = `${NEGOCIO.url}/localidades/${localidad.slug}/`
  const schema = schemaGraph(
    schemaLocalBusiness({
      areaServed: [localidad.nombre, ...localidad.barrios.map((b) => `${b.nombre} (${localidad.nombre})`)],
      aggregateRating: localidad.testimonios?.length
        ? { ratingValue: "5.0", reviewCount: String(localidad.testimonios.length) }
        : undefined,
      reviews: localidad.testimonios,
    }),
    ...localidad.servicios.map((s) =>
      schemaService({
        nombre: s.titulo,
        descripcion: s.descripcion,
        url: `${url}#${s.slugServicio}`,
        areaServed: [localidad.nombre],
      })
    ),
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Localidades", url: `${NEGOCIO.url}/localidades/` },
      { nombre: localidad.nombre, url },
    ])
  )

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={schema} />
      <PhoneBanner />
      <MainNavigation services={[]} />
      <main className="flex-1">
        {/* Hero / Intro local */}
        <section className="w-full bg-gradient-to-br from-brand-green/5 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <BreadcrumbPill
                  items={[
                    { nombre: "Inicio", href: "/" },
                    { nombre: "Localidades", href: "/localidades/" },
                    { nombre: localidad.nombre },
                  ]}
                />
                <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">{localidad.h1}</h1>
                {localidad.intro.map((parrafo, i) => (
                  <p key={i} className="text-xl text-brand-black-light leading-relaxed">
                    {parrafo}
                  </p>
                ))}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${NEGOCIO.telefonoTel}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Llame ahora: {NEGOCIO.telefonoDisplay}
                  </a>
                  <a
                    href={waLink(`Hola, necesito un instalador en ${localidad.nombre}`)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors"
                  >
                    Escríbanos por WhatsApp
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="mt-4 lg:mt-20 flex justify-center relative overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/telecom/antenistas-en-toledo.jpg"
                    alt={`Instalador de antenas, cámaras y alarmas en ${localidad.nombre}`}
                    width={560}
                    height={340}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios disponibles en la localidad */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Servicios"
              titulo={<>Nuestros servicios en <span className="text-brand-green">{localidad.nombre}</span></>}
              descripcion={`Soluciones adaptadas al tipo de vivienda de ${localidad.nombre}, con presupuesto cerrado y garantía por escrito.`}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {localidad.servicios.map((servicio, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col">
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{servicio.titulo}</h3>
                  <p className="text-brand-black-light mb-4">{servicio.descripcion}</p>
                  <Link
                    href={`/servicios/${servicio.slugServicio}/`}
                    className="mt-auto inline-flex items-center gap-2 text-brand-green hover:text-brand-green/80 font-medium"
                  >
                    Más sobre este servicio <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contexto urbanístico */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <SectionHeader pill="Conocemos la zona" titulo={`Cómo se instala en ${localidad.nombre}`} />
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-4">
                <p className="text-brand-black-light leading-relaxed">{localidad.contextoUrbanistico}</p>
                {localidad.normativa && (
                  <p className="text-brand-black-light leading-relaxed">
                    <strong className="text-brand-black">Normativa local: </strong>
                    {localidad.normativa}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos en la zona */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Trabajos en la zona"
              titulo={`Proyectos realizados en ${localidad.nombre}`}
              descripcion={esT1 ? "Instalaciones reales en distintos barrios del municipio." : undefined}
            />
            <div className={`grid gap-6 max-w-6xl mx-auto ${localidad.proyectos.length > 1 ? "md:grid-cols-3" : "md:grid-cols-1 max-w-3xl"}`}>
              {localidad.proyectos.map((proyecto, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{proyecto.titulo}</h3>
                  <p className="text-brand-black-light">{proyecto.descripcion}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/proyectos/" className="text-brand-green hover:text-brand-green/80 font-semibold">
                Ver todos nuestros proyectos <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Tiempos de respuesta */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Instalador cerca de usted"
              titulo={`Tiempos de respuesta en ${localidad.nombre}`}
              descripcion={`Acceso por ${localidad.viaAcceso} (${localidad.distanciaKm}).`}
            />
            <TiemposRespuesta desplazamiento={localidad.desplazamiento} respuesta={localidad.tiempoRespuesta} />
          </div>
        </section>

        {/* Testimonios locales (solo T1 con testimonios) */}
        {localidad.testimonios && localidad.testimonios.length > 0 && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeader
                pill="Clientes de la zona"
                titulo={`La confianza de nuestros clientes en ${localidad.nombre}`}
              />
              <Testimonios testimonios={localidad.testimonios} localidad={localidad.nombre} />
            </div>
          </section>
        )}

        {/* Barrios y urbanizaciones cubiertos */}
        <section className={`py-16 md:py-24 ${localidad.testimonios?.length ? "bg-gray-50" : "bg-white"}`}>
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Cobertura local"
              titulo={`Barrios y urbanizaciones de ${localidad.nombre} que cubrimos`}
            />
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {localidad.barrios.map((barrio, i) => (
                <div key={i} className="flex items-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-3 flex-shrink-0" />
                  <span className="text-brand-black">
                    <strong>{barrio.nombre}</strong>
                    <span className="text-brand-black-light"> — {barrio.detalle}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localidades cercanas (clúster geográfico) */}
        {cercanas.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeader pill="También cerca de usted" titulo="Otras localidades que cubrimos en la zona" />
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {cercanas.map((cercana) => (
                  <Link
                    key={cercana.slug}
                    href={`/localidades/${cercana.slug}/`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:border-brand-green/40 hover:shadow-lg transition-all text-brand-black font-medium"
                  >
                    <MapPin className="h-4 w-4 text-brand-green" />
                    Instalador en {cercana.nombre}
                  </Link>
                ))}
                <Link
                  href="/cobertura/"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-brand-green/10 rounded-full text-brand-green font-medium hover:bg-brand-green/20 transition-all"
                >
                  Ver toda la cobertura <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA final */}
        <CtaFinal
          titulo={`Presupuesto gratuito en ${localidad.nombre}`}
          texto="Cuéntenos qué necesita y le damos presupuesto cerrado sin compromiso, con desplazamiento incluido en su zona."
          waTexto={`Hola, necesito un instalador en ${localidad.nombre}`}
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
