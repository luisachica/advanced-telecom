"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Briefcase, MapPin, ChevronDown, Phone, Menu, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ServiceIcon } from "@/components/ServiceIcon"
import { NAV_SERVICIOS, NAV_ZONAS } from "@/data/nav"

// Función para validar rutas de imágenes
const validateImageSrc = (src: string | undefined | null): string => {
  return src && src.trim() !== "" ? src : "/placeholder.svg"
}

interface MainNavigationProps {
  services?: {
    title: string
    iconName: string
    description: string
    link?: string
    slug?: string
  }[]
}

export function MainNavigation({ services = [] }: MainNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [zonasMenuOpen, setZonasMenuOpen] = useState(false)
  const servicesMenuRef = useRef<HTMLDivElement>(null)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const zonasMenuRef = useRef<HTMLDivElement>(null)
  const zonasButtonRef = useRef<HTMLButtonElement>(null)

  // Cerrar los menús cuando se hace clic fuera de ellos
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesMenuRef.current &&
        servicesButtonRef.current &&
        !servicesMenuRef.current.contains(event.target as Node) &&
        !servicesButtonRef.current.contains(event.target as Node)
      ) {
        setServicesMenuOpen(false)
      }
      if (
        zonasMenuRef.current &&
        zonasButtonRef.current &&
        !zonasMenuRef.current.contains(event.target as Node) &&
        !zonasButtonRef.current.contains(event.target as Node)
      ) {
        setZonasMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navServices =
    services.length > 0
      ? services.map((service) => ({
          ...service,
          link: service.link || (service.slug ? `/servicios/${service.slug}` : "#"),
        }))
      : NAV_SERVICIOS

  const itemClass =
    "flex items-center gap-1 px-3 py-2 rounded-lg text-brand-black font-medium hover:bg-brand-green/10 hover:text-brand-green transition-all duration-200 border-b-2 border-transparent hover:border-brand-green text-sm xl:text-base xl:px-4 xl:gap-2"

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-24 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={validateImageSrc("/logo-antenas-toledo.png") || "/placeholder.svg"}
            alt="Antenas Toledo Logo"
            width={400}
            height={107}
            className="h-20 w-auto max-w-[500px] object-contain"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Menú de navegación para escritorio */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center space-x-2 xl:space-x-4">
            <Link href="/" className={itemClass}>
              <Home className="h-4 w-4 xl:h-5 xl:w-5" />
              <span>Inicio</span>
            </Link>

            <Link href="/quienes-somos" className={itemClass}>
              <Info className="h-4 w-4 xl:h-5 xl:w-5" />
              <span>Quiénes somos</span>
            </Link>

            <div className="relative">
              <button ref={servicesButtonRef} onClick={() => setServicesMenuOpen(!servicesMenuOpen)} className={itemClass}>
                <Briefcase className="h-4 w-4 xl:h-5 xl:w-5" />
                <span>Servicios</span>
                <ChevronDown
                  className={`h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-200 ${servicesMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesMenuOpen && (
                <div
                  ref={servicesMenuRef}
                  className="absolute left-0 mt-1 grid grid-cols-2 gap-2 bg-white shadow-xl rounded-xl p-6 min-w-[500px] border-t-2 border-brand-green transition-all duration-200 z-50"
                >
                  {navServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link || "#"}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-green/10 transition-all duration-200"
                      onClick={() => setServicesMenuOpen(false)}
                    >
                      <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green">
                        <ServiceIcon name={service.iconName} />
                      </div>
                      <div>
                        <p className="font-medium text-brand-black">{service.title}</p>
                        <p className="text-xs text-brand-black-light line-clamp-1">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/servicios"
                    className="col-span-2 text-center text-brand-green font-medium p-2 rounded-lg hover:bg-brand-green/10"
                    onClick={() => setServicesMenuOpen(false)}
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button ref={zonasButtonRef} onClick={() => setZonasMenuOpen(!zonasMenuOpen)} className={itemClass}>
                <MapPin className="h-4 w-4 xl:h-5 xl:w-5" />
                <span>Zonas</span>
                <ChevronDown
                  className={`h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-200 ${zonasMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {zonasMenuOpen && (
                <div
                  ref={zonasMenuRef}
                  className="absolute left-0 mt-1 grid grid-cols-3 gap-1 bg-white shadow-xl rounded-xl p-5 min-w-[420px] border-t-2 border-brand-green transition-all duration-200 z-50"
                >
                  {NAV_ZONAS.map((zona) => (
                    <Link
                      key={zona.slug}
                      href={`/localidades/${zona.slug}`}
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-brand-green/10 transition-all duration-200 text-brand-black font-medium text-sm"
                      onClick={() => setZonasMenuOpen(false)}
                    >
                      <MapPin className="h-4 w-4 text-brand-green flex-shrink-0" />
                      {zona.nombre}
                    </Link>
                  ))}
                  <Link
                    href="/cobertura"
                    className="col-span-3 text-center text-brand-green font-medium p-2 rounded-lg hover:bg-brand-green/10"
                    onClick={() => setZonasMenuOpen(false)}
                  >
                    Ver toda la cobertura
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contacto" className={itemClass}>
              <Phone className="h-4 w-4 xl:h-5 xl:w-5" />
              <span>Contacto</span>
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/34668679500?text=Hola%2C%20quiero%20más%20información%20sobre%20servicios%20de%20telecomunicaciones"
            className="hidden lg:block"
          >
            <Button className="flex items-center gap-1 bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xl:text-base xl:px-6 xl:gap-2 border-2 border-gray-600 hover:border-gray-700">
              <Phone className="h-4 w-4 xl:h-5 xl:w-5" />
              Presupuesto gratis
            </Button>
          </a>

          {/* Botón de menú móvil */}
          <button
            className="lg:hidden text-brand-black bg-brand-green/10 p-2 rounded-lg hover:bg-brand-green/20 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <MobileMenu services={navServices} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
