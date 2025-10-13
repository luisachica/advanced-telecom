"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Home, 
  Briefcase, 
  FileText, 
  MessageCircle, 
  ChevronDown, 
  Phone, 
  Menu, 
  Info

} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ServiceIcon } from "@/components/ServiceIcon"

// Función para validar rutas de imágenes
const validateImageSrc = (src: string | undefined | null): string => {
  return src && src.trim() !== "" ? src : "/placeholder.svg"
}

interface MainNavigationProps {
  services: {
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
  const servicesMenuRef = useRef<HTMLDivElement>(null)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)

  // Cerrar el menú cuando se hace clic fuera de él
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
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Alternar el menú de servicios
  const toggleServicesMenu = () => {
    setServicesMenuOpen(!servicesMenuOpen)
  }

  // Servicios de ejemplo para mostrar cuando no se proporcionan servicios
  const defaultServices =
    services.length > 0
      ? services.map(service => ({
          ...service,
          link: service.link || service.slug || "#"
        }))
      : [
          {
            title: "Antenas TDT",
            iconName: "Tv",
            description: "Instalación y reparación de antenas TDT para una recepción óptima de señal.",
            link: "/servicios/antenas-tdt",
          },
          {
            title: "Antenas Parabólicas",
            iconName: "Satellite",
            description: "Instalación y orientación de antenas parabólicas para recepción de canales internacionales.",
            link: "/servicios/antenas-parabolicas",
          },
          {
            title: "Porteros Automáticos",
            iconName: "DoorOpen",
            description: "Instalación y reparación de porteros automáticos y videoporteros para mayor seguridad.",
            link: "/servicios/porteros-automaticos",
          },
          {
            title: "Cámaras de Seguridad",
            iconName: "Shield",
            description: "Sistemas de videovigilancia para proteger tu hogar o negocio.",
            link: "/servicios/camaras-seguridad",
          },
          {
            title: "Solución Interferencias 5G",
            iconName: "Wifi",
            description: "Eliminación de interferencias en la señal de televisión causadas por redes 4G/5G.",
            link: "/servicios/solucion-interferencias-5g",
          },
          {
            title: "Reparaciones Urgentes",
            iconName: "Wrench",
            description: "Servicio técnico urgente para solucionar problemas de telecomunicaciones.",
            link: "/servicios/reparaciones-urgentes",
          },
        ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-24 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={validateImageSrc("/logo-advanced-telecom-horizontal.png") || "/placeholder.svg"}
            alt="Advanced Telecom Logo"
            width={300}
            height={80}
            className="h-16 w-auto max-w-[300px] object-contain"
            priority
          />
        </Link>

        {/* Menú de navegación para escritorio */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center space-x-2 xl:space-x-4">
            <Link
              href="/"
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-brand-black font-medium hover:bg-brand-green/10 hover:text-brand-green transition-all duration-200 border-b-2 border-transparent hover:border-brand-green text-sm xl:text-base xl:px-4 xl:gap-2"
            >
              <Home className="h-4 w-4 xl:h-5 xl:w-5" />
              <span>Inicio</span>
            </Link>

            <Link
              href="/quienes-somos"
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-brand-black font-medium hover:bg-brand-green/10 hover:text-brand-green transition-all duration-200 border-b-2 border-transparent hover:border-brand-green text-sm xl:text-base xl:px-4 xl:gap-2"
            >
              <Info className="h-4 w-4 xl:h-5 xl:w-5" />
              <span>Quiénes somos</span>
            </Link>

            <div className="relative">
              <button
                ref={servicesButtonRef}
                onClick={toggleServicesMenu}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-brand-black font-medium hover:bg-brand-green/10 hover:text-brand-green transition-all duration-200 border-b-2 border-transparent hover:border-brand-green text-sm xl:text-base xl:px-4 xl:gap-2"
              >
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
                  {defaultServices.map((service, index) => (
                    <Link
                      key={index}
                      href={
                        service.link
                          ? (service.link.startsWith("/") ? service.link : `/servicios/${service.link}`)
                          : (service.slug ? `/servicios/${service.slug}` : "#")
                      }
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-green/10 transition-all duration-200"
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
                </div>
              )}
            </div>

            <Link
              href="/contacto"
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-brand-black font-medium hover:bg-brand-green/10 hover:text-brand-green transition-all duration-200 border-b-2 border-transparent hover:border-brand-green text-sm xl:text-base xl:px-4 xl:gap-2"
            >
              <Phone className="h-4 w-4 xl:h-5 xl:w-5" />
              <span>Contacto</span>
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/34668838415?text=Hola%2C%20quiero%20más%20información%20sobre%20servicios%20de%20telecomunicaciones" className="hidden lg:block">
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
      <MobileMenu services={defaultServices} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
