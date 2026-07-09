// app/blog/page.tsx — Índice del blog (Estructura P2 §6.2)
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import StructuredData from "@/components/StructuredData"
import { CtaFinal, BreadcrumbPill } from "@/components/paginas/bloques"
import { POSTS } from "@/data/blog"
import { schemaGraph, schemaLocalBusiness, schemaBreadcrumb } from "@/lib/schema"
import { NEGOCIO } from "@/lib/negocio"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: "Blog de Telecomunicaciones y Seguridad | Antenas Toledo",
  description:
    "Artículos sobre antenas, interferencias 5G, cámaras de seguridad, alarmas y videoporteros. Guías y consejos para su hogar o negocio en Toledo y zona.",
  ruta: "/blog/",
})

export default function BlogPage() {
  const url = `${NEGOCIO.url}/blog/`
  const schema = schemaGraph(
    schemaLocalBusiness({}),
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Blog", url },
    ])
  )
  const posts = [...POSTS].sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={schema} />
      <PhoneBanner />
      <MainNavigation services={[]} />
      <main className="flex-1">
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <BreadcrumbPill items={[{ nombre: "Inicio", href: "/" }, { nombre: "Blog" }]} />
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">
                Blog de Telecomunicaciones y Seguridad
              </h1>
              <p className="text-brand-black-light text-lg">
                Guías y consejos de nuestros técnicos sobre antenas, interferencias 5G, cámaras, alarmas y
                videoporteros.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.imagen} alt={post.imagenAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-brand-black-light mb-2">
                      <Calendar className="h-4 w-4 text-brand-green" />
                      {post.fechaDisplay}
                    </div>
                    <h2 className="text-lg font-semibold text-brand-black mb-2">{post.titulo}</h2>
                    <p className="text-brand-black-light text-sm mb-4 line-clamp-3">{post.resumen}</p>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="mt-auto inline-flex items-center gap-2 text-brand-green hover:text-brand-green/80 font-medium"
                    >
                      Leer el artículo <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaFinal
          titulo="¿Prefiere que lo veamos en persona?"
          texto="Si tiene un problema concreto de señal, seguridad o portero, le damos diagnóstico y presupuesto sin compromiso."
          waTexto="Hola, tengo una consulta técnica"
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
