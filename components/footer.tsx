'use client'

import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCookies } from "@/hooks/use-cookies"

// Función para validar rutas de imágenes
const validateImageSrc = (src: string | undefined | null): string => {
  return src && src.trim() !== "" ? src : "/placeholder.svg"
}

export function Footer() {
  const { openPreferences } = useCookies()
  
  return (
    <footer className="w-full border-t bg-gray-800 text-white">
      <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-6">
            {/* Aumentar el tamaño del logo */}
            <div className="inline-block">
              <Image
                src={validateImageSrc("/logo-advanced-telecom-horizontal.png") || "/placeholder.svg"}
                alt="Advanced Telecom Logo"
                width={300}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </div>
            <p className="text-gray-300">
              Servicios profesionales de telecomunicaciones para hogares y empresas en toda la Comunidad de Madrid.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/antenistatoledo" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="https://twitter.com/antenistatoledo" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="https://www.instagram.com/antenistatoledo/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="https://es.linkedin.com/in/antenistatoledo" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="/servicios/antenas-tdt" className="text-gray-300 hover:text-white transition-colors">
                  Antenas TDT
                </a>
              </li>
              <li>
                <a href="/servicios/antenas-parabolicas" className="text-gray-300 hover:text-white transition-colors">
                  Antenas parabólicas
                </a>
              </li>
              <li>
                <a href="/servicios/porteros-automaticos" className="text-gray-300 hover:text-white transition-colors">
                  Porteros automáticos
                </a>
              </li>
              <li>
                <a href="/servicios/camaras-seguridad" className="text-gray-300 hover:text-white transition-colors">
                  Cámaras de seguridad
                </a>
              </li>
              <li>
                <a href="/servicios/solucion-interferencias-5g" className="text-gray-300 hover:text-white transition-colors">
                  Solución interferencias 5G
                </a>
              </li>
              <li>
                <a href="/servicios/reparaciones-urgentes" className="text-gray-300 hover:text-white transition-colors">
                  Reparaciones urgentes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/quienes-somos" className="text-gray-300 hover:text-white transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Avenida de la Tecnología 25 – 28021 Madrid, España</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-green flex-shrink-0" />
                <a href="tel:+34668838415" className="text-gray-300 hover:text-white transition-colors">
                  668 83 84 15
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-green flex-shrink-0" />
                <a
                  href="mailto:info@advancedtelecom.es"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@advancedtelecom.es
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="https://wa.me/34668838415?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20servicios%20de%20telecomunicaciones">
                <Button className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6 py-2 normal-case">
                  Solicitar presupuesto
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Sección del Ministerio */}
        <div className="pt-6 mt-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/telecom/Antenista-Madrid-Logo-Ministerio-de-Energía-Turismo-y-Agenda-Digital.png"
                alt="Logo Ministerio de Energía, Turismo y Agenda Digital"
                width={380}
                height={100}
                className="h-auto w-auto max-w-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-sm leading-relaxed">
                Estamos Registrados en Telecomunicaciones y cumplimos con los requisitos del 
                Reglamento aprobado por el Real Decreto 24/2010 de 5 de marzo (BOE de 
                24/03/2010). Exija siempre el Número de Inscripción en el Registro de 
                Telecomunicaciones para evitarse problemas y disponer de la garantía 
                correspondiente.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Antenistas homologados en Toledo y Madrid Sur. Reparaciones en el día.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hecho con ❤️ por Snapik. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/politica-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de privacidad
              </Link>
              <Link href="/terminos-condiciones" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos y condiciones
              </Link>
              <Link href="/politica-cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de cookies
              </Link>
              <button 
                onClick={openPreferences}
                className="text-gray-400 hover:text-white text-sm transition-colors underline"
              >
                Gestionar cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
