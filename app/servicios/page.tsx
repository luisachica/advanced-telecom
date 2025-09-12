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
import { MunicipiosServicio } from "@/components/MunicipiosServicio"
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
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-green-100/20"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
                <Link href="/" className="text-brand-black-light hover:text-brand-green">
                  Inicio
                </Link>
                <span className="text-brand-black-light">/</span>
                <span className="text-brand-green font-medium">Servicios</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">
                Servicios de Telecomunicaciones 
              </h1>
              <p className="text-brand-black-light text-lg max-w-2xl mx-auto mb-8">
                Especialistas en instalación y reparación de antenas, sistemas de seguridad y telecomunicaciones
                en toda la Comunidad de Madrid. Servicio técnico profesional con más de 25 años de experiencia.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contacto" className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-6 py-3 border-2 border-brand-green hover:border-brand-green-dark font-medium transition-all duration-200 no-underline inline-flex items-center gap-2">
                  Solicita tu presupuesto gratuito
                </Link>
                <a href="tel:+34668838415" className="bg-transparent hover:bg-gray-600 text-brand-green hover:text-white border-2 border-brand-green hover:border-gray-600 rounded-full px-6 py-3 font-medium transition-all duration-200 no-underline inline-flex items-center gap-2">
                  Llama ahora: 668 83 84 15
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Listado de servicios */}
        <section id="servicios" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-brand-gray rounded-full mb-2">
                <span className="text-brand-green font-medium px-3 py-1">Nuestros servicios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black leading-tight mt-4">
                Servicios de telecomunicaciones <span className="text-brand-green">especializados</span> para cada necesidad
              </h2>
              <p className="text-brand-black-light text-lg max-w-2xl mx-auto mt-4">
                Descubre nuestra amplia gama de servicios técnicos especializados en antenas, sistemas de seguridad
                y telecomunicaciones, diseñados para satisfacer las necesidades específicas de cada cliente.
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
      icon={servicio.iconName}
    />
  ))}
</div>

          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-brand-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-green-100/20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                ¿No encuentras el servicio que necesitas?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contáctanos y te ayudaremos a encontrar la solución técnica perfecta para tus necesidades específicas de
                telecomunicaciones y sistemas de seguridad.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contacto" className="bg-white hover:bg-gray-100 text-brand-green font-bold rounded-full px-6 py-3 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px] cursor-pointer flex items-center gap-2 text-decoration-none">
                  Contactar ahora <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Municipios donde ofrecemos servicio */}
        <MunicipiosServicio />
      </main>

      <Footer />
    </div>
  )
}
