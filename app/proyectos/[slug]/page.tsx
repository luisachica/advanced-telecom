// app/proyectos/[slug]/page.tsx — Ficha de proyecto con enlaces al Hub de Servicio y de Localidad
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, ArrowRight, CheckCircle, Star } from "lucide-react"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import StructuredData from "@/components/StructuredData"
import { CtaFinal, BreadcrumbPill } from "@/components/paginas/bloques"
import { PROYECTOS, getProyecto } from "@/data/proyectos"
import { schemaGraph, schemaLocalBusiness, schemaBreadcrumb, schemaImageObject, schemaService } from "@/lib/schema"
import { NEGOCIO } from "@/lib/negocio"
import { metadataPagina } from "@/lib/paginas"

export const dynamicParams = false

export function generateStaticParams() {
  return PROYECTOS.map((proyecto) => ({ slug: proyecto.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const proyecto = getProyecto(slug)
  if (!proyecto) return {}
  return metadataPagina({
    title: `${proyecto.titulo} | Antenas Toledo`,
    description: `${proyecto.problema} Vea cómo lo resolvimos.`,
    ruta: `/proyectos/${proyecto.slug}/`,
    imagen: proyecto.imagen,
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const proyecto = getProyecto(slug)
  if (!proyecto) notFound()

  const url = `${NEGOCIO.url}/proyectos/${proyecto.slug}/`
  const schema = schemaGraph(
    schemaLocalBusiness({ areaServed: [proyecto.localidadNombre] }),
    schemaService({
      nombre: `${proyecto.servicioNombre} en ${proyecto.localidadNombre}`,
      descripcion: proyecto.solucion,
      url,
      areaServed: [proyecto.localidadNombre],
    }),
    schemaImageObject(url, proyecto.imagen, proyecto.imagenAlt),
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Proyectos", url: `${NEGOCIO.url}/proyectos/` },
      { nombre: proyecto.titulo, url },
    ])
  )

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={schema} />
      <PhoneBanner />
      <MainNavigation services={[]} />
      <main className="flex-1">
        <section className="w-full bg-gradient-to-br from-brand-green/5 to-white">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-4xl mx-auto space-y-6">
              <BreadcrumbPill
                items={[{ nombre: "Inicio", href: "/" }, { nombre: "Proyectos", href: "/proyectos/" }, { nombre: proyecto.localidadNombre }]}
              />
              <h1 className="text-3xl md:text-5xl font-bold text-brand-black leading-tight">{proyecto.titulo}</h1>
              <div className="flex items-center gap-2 text-brand-black-light">
                <MapPin className="h-5 w-5 text-brand-green" />
                {proyecto.zona}, {proyecto.localidadNombre}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={proyecto.imagen} alt={proyecto.imagenAlt} width={640} height={420} className="w-full h-auto object-cover" priority />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-lg font-bold text-brand-black mb-2">El problema</h2>
                  <p className="text-brand-black-light">{proyecto.problema}</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-lg font-bold text-brand-black mb-2">La solución</h2>
                  <p className="text-brand-black-light">{proyecto.solucion}</p>
                </div>
                <div className="bg-brand-green/10 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-brand-black mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green" /> El resultado
                  </h2>
                  <p className="text-brand-black">{proyecto.resultado}</p>
                </div>
                {proyecto.testimonio && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-brand-black-light italic mb-2">&ldquo;{proyecto.testimonio.comentario}&rdquo;</p>
                    <p className="font-semibold text-brand-black text-sm">
                      {proyecto.testimonio.nombre} — {proyecto.localidadNombre}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="max-w-4xl mx-auto mt-12 flex flex-wrap gap-4">
              <Link
                href={`/servicios/${proyecto.servicioSlug}/`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:border-brand-green/40 transition-all text-brand-black font-medium"
              >
                Ver el servicio: {proyecto.servicioNombre} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/localidades/${proyecto.localidadSlug}/`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:border-brand-green/40 transition-all text-brand-black font-medium"
              >
                Nuestros servicios en {proyecto.localidadNombre} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <CtaFinal
          titulo="¿Necesita algo similar?"
          texto="Solicite presupuesto sin compromiso: estudiamos su caso y le proponemos la misma calidad de solución."
          waTexto={`Hola, quiero algo similar al proyecto de ${proyecto.localidadNombre}`}
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
