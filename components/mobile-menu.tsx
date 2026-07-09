"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Briefcase, MessageCircle, ChevronDown, X, Phone, Info, MapPin } from "lucide-react"
import { ServiceIcon } from "@/components/ServiceIcon"
import { NAV_ZONAS } from "@/data/nav"

// Función para validar rutas de imágenes
const validateImageSrc = (src: string | undefined | null): string => {
  return src && src.trim() !== "" ? src : "/placeholder.svg"
}

interface MobileMenuProps {
  services: {
    title: string
    iconName: string
    description: string
    link?: string // Añadir propiedad opcional para el enlace
    slug?: string // Añadir propiedad opcional para el slug
  }[]
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ services = [], isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [zonasOpen, setZonasOpen] = useState(false)

  if (!isOpen) return null

  // Mostrar el menú de servicios solo si hay servicios
  const showServicesMenu = services.length > 0

  return (
    <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center">
            <Image
              src={validateImageSrc("/logo-antenas-toledo.png") || "/placeholder.svg"}
              alt="Antenas Toledo Logo"
              width={200}
              height={53}
              className="h-12 w-auto"
              style={{ width: 'auto' }}
            />
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <X className="h-6 w-6 text-brand-black" />
          </button>
        </div>

        <div className="p-4 flex flex-col space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-green/10 text-brand-black hover:text-brand-green"
            onClick={onClose}
          >
            <Home className="h-5 w-5" />
            <span className="font-medium">Inicio</span>
          </Link>

          <Link
            href="/quienes-somos"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-green/10 text-brand-black hover:text-brand-green"
            onClick={onClose}
          >
            <Info className="h-5 w-5" />
            <span className="font-medium">Quiénes Somos</span>
          </Link>

          <div className="border-b border-gray-100 my-2"></div>

          {showServicesMenu && (
            <>
              <button
                className="flex items-center gap-3 p-3 rounded-lg text-brand-black hover:bg-brand-green/10 hover:text-brand-green"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <Briefcase className="h-5 w-5" />
                <span className="font-medium">Servicios</span>
                <ChevronDown
                  className={`ml-auto h-5 w-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="space-y-2 py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={
                        service.link
                          ? (service.link.startsWith("/") ? service.link : `/servicios/${service.link}`)
                          : (service.slug ? `/servicios/${service.slug}` : "#")
                      }
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-green/10 text-brand-black hover:text-brand-green transition-all duration-200"
                      onClick={onClose}
                    >
                      <div className="bg-brand-green/10 p-1.5 rounded-lg text-brand-green">
                          <ServiceIcon name={service.iconName} className="h-4 w-4" />
                        </div>
                      <span className="font-medium">{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {!showServicesMenu && (
            <Link
              href="/servicios"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-green/10 text-brand-black hover:text-brand-green"
              onClick={onClose}
            >
              <Briefcase className="h-5 w-5" />
              <span className="font-medium">Servicios</span>
            </Link>
          )}

          <button
            className="flex items-center gap-3 p-3 rounded-lg text-brand-black hover:bg-brand-green/10 hover:text-brand-green"
            onClick={() => setZonasOpen(!zonasOpen)}
          >
            <MapPin className="h-5 w-5" />
            <span className="font-medium">Zonas</span>
            <ChevronDown className={`ml-auto h-5 w-5 transition-transform duration-200 ${zonasOpen ? "rotate-180" : ""}`} />
          </button>

          {zonasOpen && (
            <div className="space-y-1 py-1">
              {NAV_ZONAS.map((zona) => (
                <Link
                  key={zona.slug}
                  href={`/localidades/${zona.slug}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-brand-green/10 text-brand-black hover:text-brand-green transition-all duration-200"
                  onClick={onClose}
                >
                  <MapPin className="h-4 w-4 text-brand-green" />
                  <span className="font-medium">{zona.nombre}</span>
                </Link>
              ))}
              <Link
                href="/cobertura"
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-brand-green/10 text-brand-green font-medium"
                onClick={onClose}
              >
                Ver toda la cobertura
              </Link>
            </div>
          )}

          <div className="border-b border-gray-100 my-2"></div>

          <Link
            href="/contacto"
            className="flex items-center gap-3 p-3 rounded-lg text-brand-black hover:bg-brand-green/10 hover:text-brand-green"
            onClick={onClose}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">Contacto</span>
          </Link>
        </div>

        <div className="p-4 mt-4 bg-brand-green/10">
        <p className="text-brand-black font-medium mb-2">¿Necesitas ayuda?</p>
        <Link href="tel:+34668679500" className="flex items-center gap-2 text-brand-green font-bold">
            <Phone className="h-4 w-4" />
            668 67 95 00
          </Link>
        </div>
      </div>
    </div>
  )
}
