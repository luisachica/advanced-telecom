// app/page.tsx — Home según blueprint Estructura P1 §1: hero, 5 servicios, zonas T1,
// por qué elegirnos, proyectos recientes, testimonios, FAQ rápido y CTA final.
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, ArrowRight, Clock, ShieldCheck, BadgeEuro, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ServiceCard"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import StructuredData from "@/components/StructuredData"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SectionHeader, FaqBloque, CtaFinal } from "@/components/paginas/bloques"
import { mockTestimonials } from "@/data/testimonials"
import { SERVICIOS } from "@/data/servicios"
import { LOCALIDADES_T1 } from "@/data/localidades"
import { PROYECTOS } from "@/data/proyectos"
import { NEGOCIO, waLink } from "@/lib/negocio"
import { schemaGraph, schemaLocalBusiness, schemaService, schemaFaqPage } from "@/lib/schema"
import { metadataPagina } from "@/lib/paginas"
import type { FaqItem } from "@/types/localidad"

export const metadata = metadataPagina({
  title: "Antenas Toledo - Instalador Antenas, Parabólicas, Cámaras y Alarmas",
  description:
    "Instalador profesional de antenas, parabólicas, cámaras de seguridad, alarmas y videoporteros en Toledo, Getafe, Valdemoro y toda la zona. Presupuesto sin compromiso.",
  ruta: "/",
})

const FAQ_HOME: FaqItem[] = [
  {
    question: "¿En qué zonas trabajáis?",
    answer:
      "En toda la provincia de Toledo, la comarca de La Sagra y el sur de la Comunidad de Madrid: Toledo, Getafe, Valdemoro, Navalcarnero, Arroyomolinos, Illescas, Seseña, Fuensalida, Yuncos y más de 100 localidades. Consulte la página de cobertura o llámenos y se lo confirmamos al momento.",
  },
  {
    question: "¿El presupuesto tiene algún coste?",
    answer:
      "No. La visita de diagnóstico y el presupuesto son gratuitos y sin compromiso. Le entregamos el presupuesto cerrado por escrito antes de empezar cualquier trabajo.",
  },
  {
    question: "¿Cuánto tardáis en atender una urgencia?",
    answer:
      "En Toledo ciudad y localidades cercanas, entre 2 y 4 horas de media; en el resto de la zona de cobertura, normalmente el mismo día. Las antenas caídas y las pérdidas totales de señal se atienden con prioridad.",
  },
  {
    question: "¿Los trabajos tienen garantía?",
    answer:
      "Sí, todas nuestras instalaciones y reparaciones incluyen garantía por escrito, tanto de la mano de obra como de los materiales, que son siempre de marcas homologadas (Televes, Ikusi, Fermax, Ajax, Dahua…).",
  },
  {
    question: "¿Solucionáis las interferencias 5G de la televisión?",
    answer:
      "Sí, es una de nuestras especialidades: diagnosticamos con espectrómetro, instalamos el filtro LTE/5G adecuado y verificamos la señal en todas las tomas. Le informamos además de si su caso puede acogerse a la vía de adaptación sin coste para afectados por el despliegue.",
  },
]

export default function Home() {
  const areaServed = LOCALIDADES_T1.map((l) => l.nombre)
  const schema = schemaGraph(
    schemaLocalBusiness({
      areaServed,
      aggregateRating: { ratingValue: "5.0", reviewCount: String(mockTestimonials.length) },
    }),
    ...SERVICIOS.map((s) =>
      schemaService({
        nombre: s.title,
        descripcion: s.description,
        url: `${NEGOCIO.url}/servicios/${s.slug}/`,
        areaServed,
      })
    ),
    schemaFaqPage(`${NEGOCIO.url}/`, FAQ_HOME)
  )
  const proyectosRecientes = PROYECTOS.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={schema} />
      <PhoneBanner />
      <MainNavigation services={[]} />

      <main className="flex-1">
        {/* Hero Section (blueprint §1.3) */}
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-green-100/20"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-brand-green font-medium">Antenista homologado {NEGOCIO.experiencia}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">
                  Instalador de Antenas, Cámaras y Seguridad en Toledo y Comarca
                </h1>
                <p className="text-brand-black text-lg max-w-lg">
                  Solucionamos interferencias 5G, instalamos antenas y parabólicas, cámaras de seguridad, alarmas y
                  videoporteros. Atención en 24h. Presupuesto sin compromiso.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 py-6 normal-case">
                    <a href={`tel:${NEGOCIO.telefonoTel}`} className="flex items-center gap-2">
                      <Phone className="h-5 w-5" /> Llame ahora: {NEGOCIO.telefonoDisplay}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-slate-600 hover:bg-slate-700 text-white border-2 border-slate-600 hover:border-slate-700 rounded-full px-8 py-6 normal-case"
                  >
                    <a href={waLink("Hola, quiero un presupuesto sin compromiso")}>Escríbanos por WhatsApp</a>
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-md">
                  <Image
                    src="/images/telecom/trabajo-antena-2023-03-27.jpg"
                    alt="Instalador profesional de antenas trabajando en Toledo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios destacados (5 tarjetas) */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestros servicios</h2>
              <p className="text-brand-black text-lg">
                Soluciones completas de telecomunicaciones y seguridad para hogares, comunidades y negocios.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICIOS.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  icon={service.iconName}
                  slug={service.slug}
                />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/servicios/">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6">
                  Ver todos nuestros servicios <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Zonas principales (9 enlaces T1) */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Zonas principales de trabajo</h2>
              <p className="text-brand-black text-lg">
                Damos servicio en la provincia de Toledo, La Sagra y el sur de Madrid. Estas son nuestras zonas
                prioritarias, con atención en 24h.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {LOCALIDADES_T1.map((localidad) => (
                <Link
                  key={localidad.slug}
                  href={`/localidades/${localidad.slug}/`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-brand-green/40 transition-all"
                >
                  <div className="bg-brand-green/10 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-brand-green" />
                  </div>
                  <span className="font-medium text-brand-black">{localidad.nombre}</span>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/cobertura/" className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green/80 font-semibold">
                Ver las más de 100 localidades que cubrimos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir Antenas Toledo?</h2>
              <p className="text-brand-black text-lg">Más de 25 años de experiencia nos avalan en Toledo y su comarca.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Experiencia</h3>
                <p className="text-brand-black">Técnicos homologados con más de 25 años instalando en la zona.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Rapidez</h3>
                <p className="text-brand-black">Respuesta en 24h y urgencias atendidas en el día en Toledo y cercanías.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Garantía</h3>
                <p className="text-brand-black">Garantía por escrito en todas las instalaciones y reparaciones.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BadgeEuro className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Presupuesto gratis</h3>
                <p className="text-brand-black">Visita de diagnóstico y presupuesto cerrado sin compromiso.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos recientes */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Proyectos recientes</h2>
              <p className="text-brand-black text-lg">Trabajo real en nuestra zona: el problema, la solución y el resultado.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {proyectosRecientes.map((proyecto) => (
                <div key={proyecto.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={proyecto.imagen} alt={proyecto.imagenAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-brand-black-light mb-2">
                      <MapPin className="h-4 w-4 text-brand-green" />
                      {proyecto.localidadNombre}
                    </div>
                    <h3 className="text-lg font-semibold text-brand-black mb-2">{proyecto.titulo}</h3>
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
            <div className="flex justify-center mt-10">
              <Link href="/proyectos/" className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green/80 font-semibold">
                Ver todos los proyectos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <TestimonialsSection testimonials={mockTestimonials} />

        {/* FAQ rápido */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeader
              pill="Preguntas frecuentes"
              titulo="Respuestas rápidas antes de llamar"
              descripcion="Encontrará las preguntas completas de cada servicio en su página correspondiente."
            />
            <FaqBloque faqs={FAQ_HOME} />
          </div>
        </section>

        {/* CTA final con formulario */}
        <CtaFinal
          titulo="Solicite su presupuesto gratuito"
          texto="Llámenos, escríbanos por WhatsApp o deje sus datos en el formulario: respondemos en menos de 24 horas."
          waTexto="Hola, quiero un presupuesto sin compromiso"
        />
      </main>

      <Footer />
      <WhatsappFloating />
    </div>
  )
}
