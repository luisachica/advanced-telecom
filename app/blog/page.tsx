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

export const metadata: Metadata = {
  title: "Blog de Limpieza | Consejos y Noticias | Limpiezas en Madrid",
  description:
    "Descubre consejos profesionales de limpieza, noticias del sector y guías prácticas para mantener tus espacios impecables.",
  keywords: "blog limpieza, consejos limpieza, trucos limpieza hogar, limpieza profesional, limpieza madrid",
}

// Datos de ejemplo para los artículos del blog
// Estos datos serán reemplazados por la conexión a WordPress Headless
const blogPosts = [
  {
    id: 1,
    title: "10 consejos para mantener tu oficina limpia y organizada",
    slug: "consejos-mantener-oficina-limpia-organizada",
    excerpt:
      "Descubre cómo mantener tu espacio de trabajo limpio y ordenado con estos consejos prácticos que aumentarán la productividad y el bienestar de tus empleados.",
    content: "",
    featuredImage: "/limpieza-oficinas-en-madrid.webp",
    date: "2023-05-15",
    author: "María López",
    category: "Limpieza de Oficinas",
    tags: ["oficina", "organización", "productividad"],
  },
  {
    id: 2,
    title: "Cómo eliminar manchas difíciles en diferentes superficies",
    slug: "eliminar-manchas-dificiles-diferentes-superficies",
    excerpt:
      "Guía completa para eliminar todo tipo de manchas en diferentes superficies del hogar, desde alfombras hasta encimeras de mármol.",
    content: "",
    featuredImage: "/yellow-glove-cleaning.png",
    date: "2023-04-22",
    author: "Carlos Martínez",
    category: "Consejos de Limpieza",
    tags: ["manchas", "superficies", "trucos"],
  },
  {
    id: 3,
    title: "Limpieza ecológica: productos naturales para un hogar sostenible",
    slug: "limpieza-ecologica-productos-naturales-hogar-sostenible",
    excerpt:
      "Aprende a limpiar tu hogar de manera efectiva utilizando productos naturales que respetan el medio ambiente y son seguros para toda la familia.",
    content: "",
    featuredImage: "/cleaning-essentials.png",
    date: "2023-03-10",
    author: "Laura Sánchez",
    category: "Limpieza Ecológica",
    tags: ["ecológico", "sostenible", "productos naturales"],
  },
  {
    id: 4,
    title: "Cómo preparar tu comunidad para la limpieza de primavera",
    slug: "preparar-comunidad-limpieza-primavera",
    excerpt:
      "Consejos para organizar y optimizar la limpieza de primavera en comunidades de vecinos, garantizando espacios comunes impecables.",
    content: "",
    featuredImage: "/images/limpieza-comunidades.jpg",
    date: "2023-02-28",
    author: "Pedro Gómez",
    category: "Limpieza de Comunidades",
    tags: ["comunidades", "primavera", "planificación"],
  },
  {
    id: 5,
    title: "Los errores más comunes en la limpieza del hogar y cómo evitarlos",
    slug: "errores-comunes-limpieza-hogar-como-evitarlos",
    excerpt:
      "Descubre los errores que muchas personas cometen al limpiar sus hogares y aprende las técnicas correctas para una limpieza eficiente.",
    content: "",
    featuredImage: "/images/limpieza-hogar.jpg",
    date: "2023-01-15",
    author: "Ana Rodríguez",
    category: "Limpieza de Hogar",
    tags: ["errores", "técnicas", "eficiencia"],
  },
  {
    id: 6,
    title: "Limpieza profesional vs. limpieza casera: ¿Cuál es mejor?",
    slug: "limpieza-profesional-vs-limpieza-casera",
    excerpt:
      "Analizamos las ventajas y desventajas de contratar servicios profesionales de limpieza frente a realizar la limpieza por cuenta propia.",
    content: "",
    featuredImage: "/equipo-limpieza-optimizada.webp",
    date: "2022-12-05",
    author: "Javier Fernández",
    category: "Servicios Profesionales",
    tags: ["profesional", "casera", "comparativa"],
  },
]

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PhoneBanner />
      <MainNavigation services={[]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-[#e8f7fa] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
                <Link href="/" className="text-[#5a7184] hover:text-[#00b3d7]">
                  Inicio
                </Link>
                <span className="text-[#5a7184]">/</span>
                <span className="text-[#00b3d7] font-medium">Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b5c] leading-tight mb-6">
                Blog de Limpieza Profesional
              </h1>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mb-8">
                Descubre consejos profesionales, trucos de limpieza y las últimas noticias del sector para mantener tus
                espacios impecables.
              </p>
              <div className="max-w-md mx-auto relative">
                <Input
                  type="search"
                  placeholder="Buscar artículos..."
                  className="pl-10 pr-4 py-3 rounded-full border-[#00b3d7] focus:ring-[#00b3d7]"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00b3d7]" />
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
                  {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full border-[#00b3d7] text-[#00b3d7]"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Página anterior</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 rounded-full bg-[#00b3d7] text-white border-[#00b3d7]"
                    >
                      1
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 rounded-full border-[#00b3d7] text-[#00b3d7]"
                    >
                      2
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 rounded-full border-[#00b3d7] text-[#00b3d7]"
                    >
                      3
                    </Button>
                    <span className="text-[#5a7184]">...</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 rounded-full border-[#00b3d7] text-[#00b3d7]"
                    >
                      8
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full border-[#00b3d7] text-[#00b3d7]"
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Página siguiente</span>
                    </Button>
                  </nav>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogSidebar posts={blogPosts} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                ¿Necesitas servicios profesionales de limpieza?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a mantener tus espacios impecables con nuestros
                servicios personalizados.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contacto">
                  <Button className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px] normal-case">
                    Solicitar presupuesto <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
