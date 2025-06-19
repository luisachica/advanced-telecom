import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

// Removed the explicit BlogPageProps interface here,
// as the error suggested conflict with Next.js's internal PageProps.

// Datos de ejemplo para los artículos del blog
// Estos datos serán reemplazados por la conexión a WordPress Headless
const blogPosts = [
  {
    id: 1,
    title: "10 consejos para mantener tu oficina limpia y organizada",
    slug: "consejos-mantener-oficina-limpia-organizada",
    excerpt:
      "Descubre cómo mantener tu espacio de trabajo limpio y ordenado con estos consejos prácticos que aumentarán la productividad y el bienestar de tus empleados.",
    content: `
      <p>Mantener una oficina limpia y organizada no solo mejora la imagen profesional de tu empresa, sino que también contribuye significativamente a la productividad y bienestar de tus empleados. Un entorno de trabajo ordenado reduce el estrés, minimiza las distracciones y crea un ambiente más saludable para todos.</p>
      
      <h2>1. Implementa una política de escritorio limpio</h2>
      <p>Anima a tus empleados a mantener sus escritorios ordenados al final de cada jornada. Esto no solo mejora la apariencia general de la oficina, sino que también facilita la limpieza profesional y reduce la acumulación de polvo y gérmenes.</p>
      
      <h2>2. Organiza los cables</h2>
      <p>Los cables desordenados no solo son antiestéticos, sino que también pueden acumular polvo y dificultar la limpieza. Utiliza organizadores de cables, canaletas o clips para mantenerlos ordenados y fuera de la vista.</p>
      
      <h2>3. Establece zonas designadas para diferentes actividades</h2>
      <p>Define claramente las áreas para diferentes actividades: trabajo individual, reuniones, descanso, almacenamiento, etc. Esto helps to maintain the order and facilitates the cleaning of each space according to its specific needs.</p>
      
      <h2>4. Programa limpiezas regulares</h2>
      <p>Establece un calendario de limpieza regular que incluya tareas diarias, semanales y mensuales. Considera contratar servicios profesionales de limpieza de oficinas para garantizar resultados óptimos.</p>
      
      <h2>5. Mantén los suministros de limpieza accesibles</h2>
      <p>Dispón de productos básicos de limpieza en áreas estratégicas para que los empleados puedan limpiar pequeños derrames o manchas inmediatamente, evitando que se conviertan en problemas mayores.</p>
      
      <h2>6. Presta especial atención a las áreas comunes</h2>
      <p>Las salas de reuniones, cocinas y áreas de descanso suelen ser las zonas más utilizadas y, por tanto, las que requieren mayor atención. Establece normas claras para su uso y limpieza.</p>
      
      <h2>7. Digitaliza documentos</h2>
      <p>Reduce la acumulación de papel implementando un sistema de gestión documental digital. Menos papel significa menos desorden y más facilidad para mantener los espacios limpios.</p>
      
      <h2>8. Cuida la calidad del aire</h2>
      <p>Incorpora plantas de interior que ayuden a purificar el aire, utiliza purificadores si es necesario y asegúrate de que el sistema de ventilación se mantiene limpio y funciona correctamente.</p>
      
      <h2>9. Fomenta la responsabilidad compartida</h2>
      <p>Crea una cultura de limpieza y orden donde todos los empleados se sientan responsables de mantener los espacios comunes en buen estado. Pequeñas acciones individuales suman grandes resultados colectivos.</p>
      
      <h2>10. Realiza auditorías periódicas</h2>
      <p>Evalúa regularmente el estado de limpieza y organización de la oficina para identificar áreas de mejora y ajustar los protocolos según sea necesario.</p>
      
      <p>Implementar estos consejos te ayudará a mantener tu oficina en condiciones óptimas, creando un ambiente de trabajo más agradable, saludable y productivo para todos. Recuerda que la consistencia es clave: pequeñas acciones diarias tienen un gran impacto a largo plazo.</p>
    `,
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
  // Otros posts...
]

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

// Función para generar metadatos dinámicos basados en el slug
// Se mantiene el tipado inline que funcionó previamente
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | Blog de Limpieza | Limpiezas en Madrid",
      description: "El artículo que buscas no se ha encontrado en nuestro blog de limpieza profesional.",
    }
  }

  return {
    title: `${post.title} | Blog de Limpieza | Limpiezas en Madrid`,
    description: post.excerpt,
    keywords: post.tags.join(", ") + ", limpieza madrid, blog limpieza",
  }
}

// El componente de página principal, ahora asíncrono y sin tipado explícito de los props
// para permitir que Next.js 15 infiera los tipos de PageProps correctamente.
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />
        <main className="flex-1 container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-[#0a3b5c] mb-6">Artículo no encontrado</h1>
            <p className="text-[#5a7184] mb-8">
              Lo sentimos, el artículo que estás buscando no existe o ha sido movido.
            </p>
            <Button asChild className="bg-[#00b3d7] hover:bg-[#0095b3] text-white">
              <Link href="/blog">Volver al blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex flex-col min-h-screen">
      <PhoneBanner />
      <MainNavigation services={[]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-[#e8f7fa] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
                <Link href="/" className="text-[#5a7184] hover:text-[#00b3d7]">
                  Inicio
                </Link>
                <span className="text-[#5a7184]">/</span>
                <Link href="/blog" className="text-[#5a7184] hover:text-[#00b3d7]">
                  Blog
                </Link>
                <span className="text-[#5a7184]">/</span>
                <span className="text-[#00b3d7] font-medium truncate max-w-[200px]">{post.title}</span>
              </div>

              <Button
                asChild
                variant="ghost"
                className="mb-6 text-[#00b3d7] hover:text-[#0095b3] hover:bg-[#e8f7fa]/50 -ml-2"
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al blog
                </Link>
              </Button>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a3b5c] leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-[#5a7184] mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#00b3d7]" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#00b3d7]" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-[#00b3d7]" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8 rounded-2xl overflow-hidden">
                    <Image
                      src={validateImagePath(post.featuredImage) || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Contenido del artículo */}
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="bg-[#e8f7fa] text-[#00b3d7] px-3 py-1 rounded-full text-sm hover:bg-[#00b3d7] hover:text-white transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>

                  {/* Social Share */}
                  <div className="border-t border-gray-200 mt-8 pt-8">
                    <h3 className="text-lg font-bold text-[#0a3b5c] mb-4 flex items-center">
                      <Share2 className="h-5 w-5 mr-2" /> Compartir artículo
                    </h3>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-[#1877f2] text-[#1877f2] hover:bg-[#1877f2] hover:text-white"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Compartir en Facebook</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-[#1da1f2] text-[#1da1f2] hover:bg-[#1da1f2] hover:text-white"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Compartir en Twitter</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">Compartir en LinkedIn</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-[#ea4335] text-[#ea4335] hover:bg-[#ea4335] hover:text-white"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Compartir por email</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogSidebar posts={blogPosts} currentPostId={post.id} />
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="w-full py-16 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a3b5c] mb-8 text-center">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={validateImagePath(relatedPost.featuredImage) || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0a3b5c] mb-2 group-hover:text-[#00b3d7] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[#5a7184] text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
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
                  <Button className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px]">
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