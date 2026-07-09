// components/paginas/bloques.tsx
// Bloques compartidos por las plantillas de página (servicio, localidad, servicio+localidad).
// Mantienen el lenguaje visual existente del sitio: pill + h2 centrados, tarjetas
// rounded-2xl con sombra, FAQ con <details> y CTA oscuro con formulario.

import Link from "next/link"
import { Phone, MessageCircle, CheckCircle, Star, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact/contact-form"
import { NEGOCIO, waLink } from "@/lib/negocio"
import type { FaqItem, TestimonioLocal } from "@/types/localidad"

export function SectionHeader({ pill, titulo, descripcion }: { pill: string; titulo: React.ReactNode; descripcion?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <div className="inline-flex items-center justify-center p-2 bg-brand-green/10 rounded-full mb-2">
        <span className="text-brand-green font-medium px-3 py-1">{pill}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black leading-tight mt-4">{titulo}</h2>
      {descripcion && <p className="text-brand-black-light text-lg max-w-2xl mx-auto mt-4">{descripcion}</p>}
    </div>
  )
}

export function FaqBloque({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between py-2 list-none">
              <h3 className="text-lg font-medium text-brand-black pr-4">{faq.question}</h3>
              <span className="transition group-open:rotate-180 text-brand-green flex-shrink-0">▾</span>
            </summary>
            <div className="pb-4 pt-2 text-brand-black-light">
              <p>{faq.answer}</p>
            </div>
          </details>
        </div>
      ))}
    </div>
  )
}

export function PasoNumerado({ numero, titulo, descripcion }: { numero: number; titulo: string; descripcion: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white font-bold text-xl">
          {numero}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-brand-black mb-2">{titulo}</h3>
        <p className="text-brand-black-light">{descripcion}</p>
      </div>
    </div>
  )
}

export function TarjetaCheck({ titulo, descripcion }: { titulo: string; descripcion: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-start gap-3">
        <div className="bg-brand-green/10 rounded-full p-2 flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-brand-green" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-black mb-2">{titulo}</h3>
          <p className="text-brand-black-light">{descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonios({ testimonios, localidad }: { testimonios: TestimonioLocal[]; localidad: string }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonios.map((testimonio, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex text-yellow-400 mb-4">
            {[...Array(testimonio.puntuacion)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-brand-black-light mb-4 italic">&ldquo;{testimonio.comentario}&rdquo;</p>
          <div className="font-semibold text-brand-black">{testimonio.nombre}</div>
          <div className="text-sm text-brand-black-light">
            {testimonio.zona}, {localidad}
          </div>
        </div>
      ))}
    </div>
  )
}

export function TiemposRespuesta({ desplazamiento, respuesta }: { desplazamiento: string; respuesta: string }) {
  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start gap-4">
        <div className="p-3 bg-brand-green/10 rounded-lg flex-shrink-0">
          <MapPin className="h-6 w-6 text-brand-green" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-black mb-1">Desplazamiento</h3>
          <p className="text-brand-black-light">{desplazamiento}</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start gap-4">
        <div className="p-3 bg-brand-green/10 rounded-lg flex-shrink-0">
          <Clock className="h-6 w-6 text-brand-green" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-black mb-1">Respuesta a urgencias</h3>
          <p className="text-brand-black-light">{respuesta}</p>
        </div>
      </div>
    </div>
  )
}

export function CtaFinal({ titulo, texto, waTexto }: { titulo: string; texto: string; waTexto: string }) {
  return (
    <section className="w-full py-16 bg-[#334155] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{titulo}</h2>
            <p className="text-white/90 text-lg">{texto}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-white hover:bg-gray-100 text-brand-black rounded-full px-8 py-6">
                <a href={waLink(waTexto)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                <a href={`tel:${NEGOCIO.telefonoTel}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> Llame ahora: {NEGOCIO.telefonoDisplay}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
        <div className="bg-white/5 rounded-full w-96 h-96 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4">
        <div className="bg-white/5 rounded-full w-96 h-96 blur-3xl"></div>
      </div>
    </section>
  )
}

export function BreadcrumbPill({ items }: { items: { nombre: string; href?: string }[] }) {
  return (
    <nav aria-label="breadcrumb" className="inline-flex flex-wrap items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          {i > 0 && <span className="text-brand-black-light">/</span>}
          {item.href ? (
            <Link href={item.href} className="text-brand-black-light hover:text-brand-green">
              {item.nombre}
            </Link>
          ) : (
            <span className="text-brand-green font-medium">{item.nombre}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
