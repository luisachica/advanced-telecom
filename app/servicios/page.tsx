import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Building, Building2, Briefcase, Heart, Glasses, Car } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema-markup"
import { ServiceCard } from "@/components/ServiceCard"
import { SERVICIOS } from "@/data/servicios"

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

export default function ServicesPage() {
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
                <span className="text-[#00b3d7] font-medium">Servicios</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b5c] leading-tight mb-6">
                Nuestros Servicios de Limpieza Profesional
              </h1>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mb-8">
                Ofrecemos una amplia gama de servicios de limpieza profesional para hogares, oficinas, comunidades y más
                en toda la Comunidad de Madrid.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-6">
                  Solicitar presupuesto
                </Button>
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-[#0a3b5c] border-[#0a3b5c] rounded-full px-8 py-6"
                >
                  Ver todos los servicios
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Listado de servicios */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Nuestros servicios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Servicios de limpieza <span className="text-[#00b3d7]">profesionales</span> para cada necesidad
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Descubre nuestra amplia gama de servicios de limpieza profesional, diseñados para satisfacer las
                necesidades específicas de cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {SERVICIOS.map((servicio) => (
    <ServiceCard
      key={servicio.slug}
      title={servicio.title}
      description={servicio.description}
      image={servicio.image}
      slug={servicio.slug}
      iconName={servicio.iconName}
    />
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
                ¿No encuentras el servicio que necesitas?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contáctanos y te ayudaremos a encontrar la solución perfecta para tus necesidades específicas de
                limpieza.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px]">
                  Contactar ahora <ArrowRight className="ml-2 h-5 w-5" />
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
