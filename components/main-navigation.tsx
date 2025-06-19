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
  Info,
  Building2,
  Building,
  Heart,
  Glasses,
  Car
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
      ? services
      : [
        {
            title: "Fin de obra",
            iconName: "Building2",
            description: "Limpieza profesional para dejar tu obra impecable y libre de residuos.",
            link: "/servicios/limpieza-fin-obra",
          },

          {
            title: "Limpieza de comunidades",
            iconName: "Building",
            description: "Limpieza profesional para mantener tu comunidad impecable y bien cuidada.",
            link: "/servicios/limpieza-comunidades",
          },

          {
            title: "Limpieza de oficinas",
            iconName: "Briefcase",
            description: "Servicios especializados para mantener tu espacio de trabajo limpio y organizado.",
            link: "/servicios/limpieza-oficinas",
          },
           {
            title: "Limpieza de empresas",
            iconName: "Heart",
            description: "Limpieza profesional de empresas.",
            link: "/servicios/limpieza-empresas",
          },
          {
            title: "Limpieza de cristales",
            iconName: "Glasses",
            description: "Limpieza profesional de cristales para una imagen clara, luminosa y cuidada.",
            link: "/servicios/limpieza-cristales",
          },
          {
            title: "Limpieza de garajes",
            iconName: "Car",
            description: "Limpieza profesional de garajes para un entorno limpio, seguro y bien mantenido.",
            link: "/servicios/limpieza-garajes",
          },
        ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-24 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={validateImageSrc("/Logo-limpiezas-en-madrid-.png") || "/placeholder.svg"}
            alt="Limpiezas en Madrid Logo"
            width={300}
            height={120}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Menú de navegación para escritorio */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#0a3b5c] font-medium hover:bg-[#e8f7fa] hover:text-[#00b3d7] transition-all duration-200 border-b-2 border-transparent hover:border-[#00b3d7]"
            >
              <Home className="h-5 w-5" />
              <span>Inicio</span>
            </Link>

            <Link
              href="/quienes-somos"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#0a3b5c] font-medium hover:bg-[#e8f7fa] hover:text-[#00b3d7] transition-all duration-200 border-b-2 border-transparent hover:border-[#00b3d7]"
            >
              <Info className="h-5 w-5" />
              <span>Quiénes Somos</span>
            </Link>

            <div className="relative">
              <button
                ref={servicesButtonRef}
                onClick={toggleServicesMenu}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#0a3b5c] font-medium hover:bg-[#e8f7fa] hover:text-[#00b3d7] transition-all duration-200 border-b-2 border-transparent hover:border-[#00b3d7]"
              >
                <Briefcase className="h-5 w-5" />
                <span>Servicios de limpieza</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${servicesMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesMenuOpen && (
                <div
                  ref={servicesMenuRef}
                  className="absolute left-0 mt-1 grid grid-cols-2 gap-2 bg-white shadow-xl rounded-xl p-6 min-w-[500px] border-t-2 border-[#00b3d7] transition-all duration-200 z-50"
                >
                  {defaultServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link || "#"}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e8f7fa] transition-all duration-200"
                    >
                      <div className="bg-[#e8f7fa] p-2 rounded-lg text-[#00b3d7]">
  <ServiceIcon name={service.iconName as any} />
</div>
                      <div>
                        <p className="font-medium text-[#0a3b5c]">{service.title}</p>
                        <p className="text-xs text-[#5a7184] line-clamp-1">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#0a3b5c] font-medium hover:bg-[#e8f7fa] hover:text-[#00b3d7] transition-all duration-200 border-b-2 border-transparent hover:border-[#00b3d7]"
            >
              <FileText className="h-5 w-5" />
              <span>Blog</span>
            </Link>

            <Link
              href="/contacto"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#0a3b5c] font-medium hover:bg-[#e8f7fa] hover:text-[#00b3d7] transition-all duration-200 border-b-2 border-transparent hover:border-[#00b3d7]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contacto</span>
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20más%20información" className="hidden md:block">
            <Button className="flex bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-6 py-2 shadow-md shadow-[#00b3d7]/20 transition-all duration-200 hover:translate-y-[-2px] normal-case">
              <Phone className="h-4 w-4 mr-2" />
              Solicitar un presupuesto
            </Button>
          </a>

          {/* Botón de menú móvil */}
          <button
            className="lg:hidden text-[#0a3b5c] bg-[#e8f7fa] p-2 rounded-lg hover:bg-[#d0f0f7] transition-colors"
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
