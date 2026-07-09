// app/blog/[slug]/page.tsx — Post del blog con enlaces a Hubs de Servicio y Localidad
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import WhatsappFloating from "@/components/WhatsappFloating"
import StructuredData from "@/components/StructuredData"
import { CtaFinal, BreadcrumbPill } from "@/components/paginas/bloques"
import { POSTS, getPost } from "@/data/blog"
import { schemaGraph, schemaLocalBusiness, schemaBreadcrumb } from "@/lib/schema"
import { NEGOCIO } from "@/lib/negocio"
import { metadataPagina } from "@/lib/paginas"

export const dynamicParams = false

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return metadataPagina({
    title: post.metaTitle,
    description: post.metaDescription,
    ruta: `/blog/${post.slug}/`,
    imagen: post.imagen,
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const url = `${NEGOCIO.url}/blog/${post.slug}/`
  const schema = schemaGraph(
    schemaLocalBusiness({}),
    {
      "@type": "BlogPosting",
      "@id": `${url}#post`,
      headline: post.titulo,
      description: post.metaDescription,
      datePublished: post.fecha,
      image: `${NEGOCIO.url}${post.imagen}`,
      author: { "@type": "Organization", name: NEGOCIO.nombre },
      publisher: { "@id": `${NEGOCIO.url}/#localbusiness` },
      mainEntityOfPage: url,
    },
    schemaBreadcrumb(url, [
      { nombre: "Inicio", url: `${NEGOCIO.url}/` },
      { nombre: "Blog", url: `${NEGOCIO.url}/blog/` },
      { nombre: post.titulo, url },
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
            <div className="max-w-3xl mx-auto space-y-6">
              <BreadcrumbPill items={[{ nombre: "Inicio", href: "/" }, { nombre: "Blog", href: "/blog/" }, { nombre: post.titulo }]} />
              <h1 className="text-3xl md:text-5xl font-bold text-brand-black leading-tight">{post.titulo}</h1>
              <div className="flex items-center gap-2 text-brand-black-light">
                <Calendar className="h-5 w-5 text-brand-green" />
                {post.fechaDisplay}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <article className="max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10">
                <Image src={post.imagen} alt={post.imagenAlt} width={800} height={450} className="w-full h-auto object-cover" priority />
              </div>
              <p className="text-xl text-brand-black-light leading-relaxed mb-10">{post.resumen}</p>
              {post.secciones.map((seccion, i) => (
                <div key={i} className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">{seccion.h2}</h2>
                  {seccion.parrafos.map((parrafo, j) => (
                    <p key={j} className="text-brand-black-light leading-relaxed mb-4">
                      {parrafo}
                    </p>
                  ))}
                  {seccion.lista && (
                    <ul className="space-y-3 mt-2">
                      {seccion.lista.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-brand-black-light">
                          <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-100 pt-8 flex flex-wrap gap-4">
                {post.enlaces.map((enlace, i) => (
                  <Link
                    key={i}
                    href={enlace.href}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-full shadow-sm border border-gray-100 hover:border-brand-green/40 transition-all text-brand-black font-medium"
                  >
                    {enlace.texto} <ArrowRight className="h-4 w-4 text-brand-green" />
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </section>

        <CtaFinal
          titulo="¿Le ayudamos con su caso?"
          texto="Diagnóstico profesional y presupuesto cerrado sin compromiso, en Toledo y toda la zona de cobertura."
          waTexto={`Hola, he leído el artículo "${post.titulo}" y tengo una consulta`}
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
