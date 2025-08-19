import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

// 1. Importa la función para obtener todos los posts
import { getAllPosts } from "@/lib/posts"

// 2. Define los metadatos para la página principal del blog
export const metadata: Metadata = {
  title: "Blog de Telecomunicaciones | Consejos y Noticias | Advanced Telecom",
  description:
    "Descubre consejos profesionales de telecomunicaciones, noticias del sector y guías prácticas para mantener tus sistemas de comunicación optimizados.",
  keywords: "blog telecomunicaciones, consejos antenas, trucos telecomunicaciones, telecomunicaciones profesional, telecomunicaciones madrid",
  alternates: {
    canonical: "https://advancedtelecom.es/blog",
  },
}

export default function BlogPage() {
  // 3. Obtiene todos los posts desde los archivos .mdx
  const allPosts = getAllPosts()

  return (
    <div className="flex flex-col min-h-screen">
      <PhoneBanner />
      <MainNavigation services={[]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
                <Link href="/" className="text-brand-black-light hover:text-brand-green">
          Inicio
        </Link>
        <span className="text-brand-black-light">/</span>
        <span className="text-brand-green font-medium">Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">
                Blog de Telecomunicaciones
              </h1>
              <p className="text-brand-black-light text-lg max-w-2xl mx-auto mb-8">
                Descubre consejos profesionales, noticias del sector y guías prácticas para mantener tus sistemas de comunicación optimizados.
              </p>
              <div className="max-w-md mx-auto relative">
                <Input
                  type="search"
                  placeholder="Buscar artículos..."
                  className="pl-10 pr-4 py-3 rounded-full border-brand-green focus:ring-brand-green"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brand-green" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 4. Mapea los posts obtenidos de los archivos */}
                  {allPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>

                {/* Pagination (la lógica de la paginación se puede añadir aquí más adelante) */}
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-brand-green text-brand-green">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Página anterior</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 rounded-full bg-brand-green text-white border-brand-green">1</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 rounded-full border-brand-green text-brand-green">2</Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 rounded-full border-brand-green text-brand-green">3</Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-brand-green text-brand-green">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Página siguiente</span>
                    </Button>
                  </nav>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* 5. Pasa los posts a la sidebar */}
                <BlogSidebar posts={allPosts} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-brand-black relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                ¿Necesitas servicios profesionales de telecomunicaciones?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte con tus sistemas de comunicación.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white hover:bg-gray-100 text-brand-green font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px] normal-case">
                   <Link href="/contacto">
                     Solicitar presupuesto <ArrowRight className="ml-2 h-5 w-5" />
                   </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}