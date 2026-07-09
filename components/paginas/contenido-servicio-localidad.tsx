// components/paginas/contenido-servicio-localidad.tsx
// Plantilla de página Servicio+Localidad (Estructura P2 §5.3): contenido diferenciado
// que NO está ni en el Hub de Servicio ni en el Hub de Localidad.
import Link from "next/link"
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import { SectionHeader, FaqBloque, CtaFinal, BreadcrumbPill } from "@/components/paginas/bloques"
import { NEGOCIO, waLink } from "@/lib/negocio"
import StructuredData from "@/components/StructuredData"
import { schemaGraph, schemaLocalBusiness, schemaService, schemaFaqPage, schemaBreadcrumb } from "@/lib/schema"
import { getLocalidad } from "@/data/localidades"
import { getServicioHub } from "@/data/servicios-hub"
import type { ComboServicioLocalidad } from "@/types/combo"
import type { Localidad } from "@/types/localidad"

export default function ContenidoServicioLocalidad({ combo }: { combo: ComboServicioLocalidad }) {
  const servicio = getServicioHub(combo.servicioSlug)
  const localidad = getLocalidad(combo.localidadSlug)
  if (!servicio || !localidad) return null

  const cercanas = localidad.cercanas
    .slice(0, 3)
    .map((slug) => getLocalidad(slug))
    .filter((l): l is Localidad => Boolean(l))

  const url = `${NEGOCIO.url}/${combo.slug}/`
  const schema = schemaGraph(
    schemaLocalBusiness({ areaServed: [localidad.nombre] }),
    schemaService({
      nombre: combo.nombre,
      descripcion: combo.metaDescription || combo.nombre,
      url,
      areaServed: [localidad.nombre],
    }),
    ...(combo.faqs ? [schemaFaqPage(url, combo.faqs)] : []),
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Servicios", url: `${NEGOCIO.url}/servicios/` },
      { nombre: servicio.titulo, url: `${NEGOCIO.url}/servicios/${servicio.slug}/` },
      { nombre: `${servicio.titulo} en ${localidad.nombre}`, url },
    ])
  )

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={schema} />
      <PhoneBanner />
      <MainNavigation services={[]} />
      <main className="flex-1">
        {/* Intro específica */}
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-green-100/20"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
            <div className="max-w-4xl space-y-6">
              <BreadcrumbPill
                items={[
                  { nombre: "Inicio", href: "/" },
                  { nombre: "Servicios", href: "/servicios/" },
                  { nombre: servicio.titulo, href: `/servicios/${servicio.slug}/` },
                  { nombre: `en ${localidad.nombre}` },
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">{combo.h1}</h1>
              {combo.intro?.map((parrafo, i) => (
                <p key={i} className="text-xl text-brand-black-light leading-relaxed">
                  {parrafo}
                </p>
              ))}
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-8 py-6">
                  <a href={`tel:${NEGOCIO.telefonoTel}`} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" /> Llame ahora: {NEGOCIO.telefonoDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline" className="bg-white hover:bg-gray-50 text-brand-black border-brand-black rounded-full px-8 py-6">
                  <a href={waLink(`Hola, quiero un presupuesto de ${servicio.titulo.toLowerCase()} en ${localidad.nombre}`)} target="_blank" rel="noopener noreferrer">
                    Escríbanos por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué este servicio en esta localidad */}
        {combo.porQue && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <SectionHeader
                  pill="Contexto local"
                  titulo={<>Por qué {localidad.nombre} es <span className="text-brand-green">diferente</span></>}
                />
                <div className="space-y-4">
                  {combo.porQue.map((parrafo, i) => (
                    <p key={i} className="text-brand-black-light text-lg leading-relaxed">
                      {parrafo}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tipos de instalación según zona */}
        {combo.tiposPorZona && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeader pill="Por zonas" titulo={`Qué instalación conviene en cada zona de ${localidad.nombre}`} />
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {combo.tiposPorZona.map((tipo, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-brand-green flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-brand-black">{tipo.zona}</h3>
                    </div>
                    <p className="text-brand-black-light">{tipo.recomendacion}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Normativa municipal + conectividad */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {combo.normativa && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-xl font-bold text-brand-black mb-3">Normativa en {localidad.nombre}</h2>
                  <p className="text-brand-black-light leading-relaxed">{combo.normativa}</p>
                </div>
              )}
              {combo.conectividad && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-xl font-bold text-brand-black mb-3">Conectividad en la zona</h2>
                  <p className="text-brand-black-light leading-relaxed">{combo.conectividad}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Proyecto real en la zona */}
        {combo.proyecto && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <SectionHeader pill="Trabajo real" titulo="Un proyecto de este servicio en la zona" />
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-green/10 rounded-full p-2 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-black mb-2">{combo.proyecto.titulo}</h3>
                      <p className="text-brand-black-light">{combo.proyecto.descripcion}</p>
                      <Link href="/proyectos/" className="inline-flex items-center gap-2 mt-4 text-brand-green hover:text-brand-green/80 font-medium">
                        Ver más proyectos <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ específica */}
        {combo.faqs && (
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <SectionHeader
                pill="Preguntas frecuentes"
                titulo={`Dudas habituales sobre ${servicio.tituloCorto.toLowerCase()} en ${localidad.nombre}`}
              />
              <FaqBloque faqs={combo.faqs} />
            </div>
          </section>
        )}

        {/* Enlazado triángulo servicio-localidad + clúster */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Link
                href={`/servicios/${servicio.slug}/`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:border-brand-green/40 transition-all text-brand-black font-medium"
              >
                Todo sobre {servicio.titulo.toLowerCase()}
              </Link>
              <Link
                href={`/localidades/${localidad.slug}/`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:border-brand-green/40 transition-all text-brand-black font-medium"
              >
                Nuestros servicios en {localidad.nombre}
              </Link>
              {cercanas.map((cercana) => (
                <Link
                  key={cercana.slug}
                  href={`/localidades/${cercana.slug}/`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:border-brand-green/40 transition-all text-brand-black font-medium"
                >
                  <MapPin className="h-4 w-4 text-brand-green" />
                  {cercana.nombre}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <CtaFinal
          titulo={`Presupuesto gratuito para ${servicio.titulo.toLowerCase()} en ${localidad.nombre}`}
          texto="Cuéntenos su caso y le damos presupuesto cerrado sin compromiso, con visita de estudio incluida."
          waTexto={`Hola, quiero un presupuesto de ${servicio.titulo.toLowerCase()} en ${localidad.nombre}`}
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
