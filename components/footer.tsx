import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Función para validar rutas de imágenes
const validateImageSrc = (src: string | undefined | null): string => {
  return src && src.trim() !== "" ? src : "/placeholder.svg"
}

export function Footer() {
  return (
    <footer className="w-full border-t bg-[#0a3b5c] text-white">
      <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-6">
            {/* Aumentar el tamaño del logo */}
            <div className="inline-block">
              <Image
                src={validateImageSrc("/Logo-limpiezas-en-madrid-.png") || "/placeholder.svg"}
                alt="Limpiezas en Madrid Logo"
                width={300}
                height={120}
                className="h-24 w-auto" // Aumentado de h-16 a h-24
                priority
              />
            </div>
            <p className="text-gray-300">
              Servicios profesionales de limpieza para empresas en toda la Comunidad de Madrid.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="/servicios/limpieza-oficinas" className="text-gray-300 hover:text-white transition-colors">
                  Limpieza de oficinas
                </a>
              </li>
              <li>
                <a href="/servicios/limpieza-comunidades" className="text-gray-300 hover:text-white transition-colors">
                  Limpieza de comunidades
                </a>
              </li>
              <li>
                <a href="/servicios/limpieza-cristales" className="text-gray-300 hover:text-white transition-colors">
                  Limpieza de cristales
                </a>
              </li>
              <li>
                <a href="/servicios/limpieza-garajes" className="text-gray-300 hover:text-white transition-colors">
                  Limpieza de garajes
                </a>
              </li>
              <li>
                <a href="/servicios/limpieza-fin-obra" className="text-gray-300 hover:text-white transition-colors">
                  Limpieza fin de obra
                </a>
              </li>
              <li>
                <a href="/servicios/limpieza-empresas" className="text-gray-300 hover:text-white transition-colors">
                  Limpieza de empresas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="quienes-somos" className="text-gray-300 hover:text-white transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#00b3d7] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Calle Velázquez 59 – 28001 Madrid, España</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#00b3d7] flex-shrink-0" />
                <a href="tel:611174552" className="text-gray-300 hover:text-white transition-colors">
                  611 174 552
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#00b3d7] flex-shrink-0" />
                <a
                  href="mailto:contacto@limpiezasenmadrid.es"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contacto@limpiezasenmadrid.es
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n">
                <Button className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-6 py-2 normal-case">
                  Solicitar presupuesto
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Limpiezas en Madrid. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
