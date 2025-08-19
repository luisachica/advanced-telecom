"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Briefcase, FileText, MessageCircle, ChevronDown, X, Phone, Info } from "lucide-react"
import { ServiceIcon } from "@/components/ServiceIcon"

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
              src={validateImageSrc("/logo-advanced-telecom-horizontal.png") || "/placeholder.svg"}
              alt="Advanced Telecom Logo"
              width={200}
              height={53}
              className="h-12 w-auto"
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
                className="flex items-center justify-between p-3 rounded-lg text-brand-black hover:bg-brand-green/10 hover:text-brand-green"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5" />
                  <span className="font-medium">Servicios de telecomunicaciones</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-4 pl-4 border-l-2 border-brand-green/20 space-y-2 py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link || service.slug || "#"}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-green/10 transition-all duration-200"
                      onClick={onClose}
                    >
                      <div className="bg-brand-green/10 p-1.5 rounded-lg text-brand-green">
                          <ServiceIcon name={service.iconName} className="h-4 w-4" />
                        </div>
                      <span className="text-brand-black">{service.title}</span>
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
              <span className="font-medium">Servicios de telecomunicaciones</span>
            </Link>
          )}

          <div className="border-b border-gray-100 my-2"></div>

          <Link
            href="/blog"
            className="flex items-center gap-3 p-3 rounded-lg text-brand-black hover:bg-brand-green/10 hover:text-brand-green"
            onClick={onClose}
          >
            <FileText className="h-5 w-5" />
            <span className="font-medium">Blog</span>
          </Link>

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
        <Link href="tel:668838415" className="flex items-center gap-2 text-brand-green font-bold">
            <Phone className="h-4 w-4" />
            668 83 84 15
          </Link>
        </div>
      </div>
    </div>
  )
}
