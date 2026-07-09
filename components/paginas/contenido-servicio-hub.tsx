// components/paginas/contenido-servicio-hub.tsx
// Plantilla única de Hub de Servicio (Estructura P1 §2): hero, problemas, proceso,
// equipos, normativa, precios, casos de éxito, FAQ, zonas de cobertura y CTA.
import Image from "next/image"
import Link from "next/link"
import { Phone, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import { ZonasCobertura } from "@/components/ZonasCobertura"
import {
  SectionHeader,
  FaqBloque,
  PasoNumerado,
  CtaFinal,
  BreadcrumbPill,
} from "@/components/paginas/bloques"
import { NEGOCIO, waLink } from "@/lib/negocio"
import StructuredData from "@/components/StructuredData"
import { schemaGraph, schemaLocalBusiness, schemaService, schemaFaqPage, schemaBreadcrumb } from "@/lib/schema"
import { LOCALIDADES_T1 } from "@/data/localidades"
import type { ServicioHub } from "@/types/servicio-hub"

export default function ContenidoServicioHub({ servicio }: { servicio: ServicioHub }) {
  const url = `${NEGOCIO.url}/servicios/${servicio.slug}/`
  const areaServed = LOCALIDADES_T1.map((l) => l.nombre)
  const schema = schemaGraph(
    schemaLocalBusiness({ areaServed }),
    schemaService({
      nombre: servicio.titulo,
      descripcion: servicio.metaDescription,
      url,
      areaServed,
      precioDesde: servicio.precios[0]?.precio.match(/\d+/)?.[0],
    }),
    schemaFaqPage(url, servicio.faqs),
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Servicios", url: `${NEGOCIO.url}/servicios/` },
      { nombre: servicio.titulo, url },
    ])
  )

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={schema} />
      <PhoneBanner />
      <MainNavigation services={[]} />
      <main className="flex-1">
        {/* Hero / Intro */}
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-green-100/20"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <BreadcrumbPill
                  items={[
                    { nombre: "Inicio", href: "/" },
                    { nombre: "Servicios", href: "/servicios/" },
                    { nombre: servicio.titulo },
                  ]}
                />
                <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">{servicio.h1}</h1>
                {servicio.intro.map((parrafo, i) => (
                  <p key={i} className="text-brand-black-light text-lg">
                    {parrafo}
                  </p>
                ))}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-8 py-6">
                    <a href={`tel:${NEGOCIO.telefonoTel}`} className="flex items-center gap-2">
                      <Phone className="h-5 w-5" /> Llame ahora: {NEGOCIO.telefonoDisplay}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-white hover:bg-gray-50 text-brand-black border-brand-black rounded-full px-8 py-6">
                    <a href={waLink(`Hola, quiero un presupuesto de ${servicio.titulo.toLowerCase()}`)} target="_blank" rel="noopener noreferrer">
                      Escríbanos por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <Image src={servicio.image} alt={servicio.h1} width={600} height={400} className="w-full h-auto object-cover" priority />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10">
                  <div className="bg-brand-green/10 rounded-full w-64 h-64 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Datos clave (variables semánticas del servicio) */}
        <section className="w-full py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicio.datosClave.map((dato, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-brand-green/10 rounded-full p-2 flex-shrink-0">
                    <Info className="h-4 w-4 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black text-sm mb-1">{dato.titulo}</h3>
                    <p className="text-brand-black-light text-sm">{dato.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problemas que resuelve */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Problemas que resolvemos"
              titulo={<>¿Le suena alguno de estos <span className="text-brand-green">problemas</span>?</>}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {servicio.problemas.map((problema, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="bg-brand-green/10 rounded-full p-2 w-fit mb-4">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{problema.titulo}</h3>
                  <p className="text-brand-black-light">{problema.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de instalación */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Nuestro proceso"
              titulo={<>Cómo trabajamos en <span className="text-brand-green">{NEGOCIO.nombre}</span></>}
              descripcion="Un método claro y transparente, del diagnóstico a la entrega con garantía por escrito."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {servicio.proceso.map((paso, i) => (
                <PasoNumerado key={i} numero={i + 1} titulo={paso.titulo} descripcion={paso.descripcion} />
              ))}
            </div>
          </div>
        </section>

        {/* Tipos de equipos */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader pill="Equipos y marcas" titulo="Con qué equipos trabajamos" descripcion={servicio.equiposIntro} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {servicio.equipos.map((equipo, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-brand-black mb-2">{equipo.categoria}</h3>
                  <p className="text-brand-black-light">{equipo.detalle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Normativa vigente */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader pill="Normativa" titulo="Lo que dice la normativa" />
            <div className="max-w-3xl mx-auto space-y-4">
              {servicio.normativa.map((punto, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <div className="bg-brand-green/10 rounded-full p-1.5 flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-brand-green" />
                  </div>
                  <p className="text-brand-black-light">{punto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precios orientativos */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader pill="Precios orientativos" titulo="¿Cuánto cuesta?" descripcion={servicio.preciosNota} />
            <div className="max-w-3xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <thead>
                  <tr className="bg-brand-green/10">
                    <th className="text-left px-6 py-4 text-brand-black font-semibold">Tipo de instalación</th>
                    <th className="text-right px-6 py-4 text-brand-black font-semibold">Precio orientativo</th>
                  </tr>
                </thead>
                <tbody>
                  {servicio.precios.map((rango, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="px-6 py-4 text-brand-black-light">{rango.concepto}</td>
                      <td className="px-6 py-4 text-right font-semibold text-brand-black whitespace-nowrap">{rango.precio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Casos de éxito */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Casos reales"
              titulo="Trabajos recientes de este servicio"
              descripcion="Proyectos reales en nuestra zona de cobertura, con el problema y la solución aplicada."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {servicio.casos.map((caso, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col">
                  <h3 className="text-lg font-semibold text-brand-black mb-3">{caso.titulo}</h3>
                  <p className="text-brand-black-light text-sm mb-2">
                    <strong className="text-brand-black">Problema:</strong> {caso.problema}
                  </p>
                  <p className="text-brand-black-light text-sm mb-2">
                    <strong className="text-brand-black">Solución:</strong> {caso.solucion}
                  </p>
                  <p className="text-brand-black-light text-sm mb-4">
                    <strong className="text-brand-black">Resultado:</strong> {caso.resultado}
                  </p>
                  <Link
                    href={`/localidades/${caso.localidadSlug}/`}
                    className="mt-auto text-brand-green hover:text-brand-green/80 font-medium text-sm"
                  >
                    Ver servicios en {caso.localidadNombre} →
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/proyectos/" className="text-brand-green hover:text-brand-green/80 font-semibold">
                Ver todos nuestros proyectos →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
              pill="Preguntas frecuentes"
              titulo={<>Resolvemos sus dudas sobre <span className="text-brand-green">{servicio.titulo.toLowerCase()}</span></>}
            />
            <FaqBloque faqs={servicio.faqs} />
          </div>
        </section>

        {/* Zonas de cobertura */}
        <ZonasCobertura
          titulo={`${servicio.titulo} en toda la zona`}
          descripcion="Disponible en Toledo, Getafe, Valdemoro… y más de 100 localidades de la provincia de Toledo, La Sagra y el sur de Madrid."
        />

        {/* CTA final */}
        <CtaFinal
          titulo={`Solicite su presupuesto gratuito de ${servicio.titulo.toLowerCase()}`}
          texto="Cuéntenos su caso y le damos presupuesto cerrado sin compromiso. Atención en 24h en toda la zona de cobertura."
          waTexto={`Hola, quiero un presupuesto de ${servicio.titulo.toLowerCase()}`}
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
