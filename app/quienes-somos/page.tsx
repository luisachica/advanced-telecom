import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Shield, Users, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema-markup"

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SchemaMarkup />
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
                <span className="text-[#00b3d7] font-medium">Quiénes Somos</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b5c] leading-tight mb-6">
                Conozca Nuestra Empresa
              </h1>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mb-8">
                Descubra por qué somos la empresa de limpieza preferida en Madrid, con más de 10 años de experiencia
                brindando servicios de calidad.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Principal */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="text-[#00b3d7] font-medium">Servicios de Limpieza en Madrid</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a3b5c] leading-tight">
                  Los Mejores en Servicios de Limpieza
                </h2>
                <div className="border-l-4 border-[#00b3d7] pl-4 italic text-[#5a7184]">
                  "Nuestro servicio de limpieza no teme a la competencia de Madrid, ya que somos simplemente los
                  mejores!"
                </div>
                <p className="text-[#5a7184]">
                  Estamos listos para limpiar su casa, oficina, casa o almacén con una precisión asombrosa y aguda.
                  Dejaremos sus instalaciones relucientes y con un aroma agradable y fresco.
                </p>
                <p className="text-[#5a7184]">
                  De hecho, nuestra relación calidad / precio es tan constante, que nos permitió obtener fácilmente el
                  estado del servicio de limpieza de casas favorito de la ciudad de Madrid. Durante años, nuestro equipo
                  ha brindado un nivel incomparable de servicios de limpieza del hogar.
                </p>
                <p className="text-[#5a7184]">
                  También es importante agregar, según su solicitud, y si la escala de una limpieza es lo
                  suficientemente grande, incluso podemos organizar un viaje a Madrid.
                </p>
                <p className="text-[#5a7184] font-medium">
                  Tenemos más de 10 años trabajando en este rubro, tenemos clientes tanto particulares como empresas,
                  por eso tratamos de satisfacer al cliente en todo lo que nos pide y mantener la confianza.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Link href="/contacto">
                    <Button className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-3 normal-case">
                      Contactar ahora
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2 text-[#0a3b5c] font-medium">
                    <span>o llame al</span>
                    <Link href="tel:611174552" className="text-[#00b3d7] hover:underline">
                      611 174 552
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/equipo-limpieza-optimizada.webp") || "/placeholder.svg"}
                      alt="Equipo de limpieza profesional"
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/images/limpieza-hogar.jpg") || "/placeholder.svg"}
                      alt="Limpieza de hogar"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/limpieza-oficinas-en-madrid.webp") || "/placeholder.svg"}
                      alt="Limpieza de oficinas"
                      width={300}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Diferenciadores */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b3d7]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8ed1b7]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Nuestras Ventajas</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Cosas que nos diferencian de otras Empresas de Limpieza en Madrid
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Descubra por qué somos la opción preferida para servicios de limpieza en toda la Comunidad de Madrid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#e8f7fa] p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-[#00b3d7]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">01. Gran experiencia</h3>
                <p className="text-[#5a7184]">
                  ¡Con más de 10 años de experiencia, todos nuestros profesionales de limpieza están listos para
                  mantener la suciedad fuera de su propiedad!
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#e8f7fa] p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-[#00b3d7]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">02. Respetuoso del medio ambiente</h3>
                <p className="text-[#5a7184]">
                  Todas nuestras herramientas y soluciones de limpieza que utilizamos están certificadas, son ecológicas
                  y seguras de usar.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#e8f7fa] p-3 rounded-full w-fit mb-4">
                  <Sparkles className="h-6 w-6 text-[#00b3d7]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">03. Gama de servicios</h3>
                <p className="text-[#5a7184]">
                  Cualquier cosa que necesites limpiar, desde un apartamento o una casa hasta una oficina o incluso una
                  nave industrial, ¡¡estamos a la altura!!
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#e8f7fa] p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-[#00b3d7]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">04. Precios competitivos</h3>
                <p className="text-[#5a7184]">
                  Simplemente compare nuestros precios sorprendentemente bajos y las tasas alucinantes que tienen otras
                  empresas de limpieza con sede en Madrid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Nuestro Trabajo</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Servicios de Limpieza en Madrid
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Algunos ejemplos de nuestros servicios de limpieza profesional en diferentes espacios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={validateImagePath("/limpieza-oficinas-en-madrid.webp") || "/placeholder.svg"}
                  alt="Limpieza de oficinas en Madrid"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-bold">Limpieza de oficinas</h3>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={validateImagePath("/images/limpieza-hogar.jpg") || "/placeholder.svg"}
                  alt="Limpieza de hogar"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-bold">Limpieza de hogar</h3>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={validateImagePath("/images/limpieza-comunidades.jpg") || "/placeholder.svg"}
                  alt="Limpieza de comunidades"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-bold">Limpieza de comunidades</h3>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={validateImagePath("/images/fin-obra.jpg") || "/placeholder.svg"}
                  alt="Limpieza fin de obra"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-bold">Limpieza fin de obra</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                ¿Listo para experimentar la mejor limpieza en Madrid?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contáctanos hoy mismo y descubre por qué somos la empresa de limpieza preferida en Madrid. Solicita un
                presupuesto sin compromiso.
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
