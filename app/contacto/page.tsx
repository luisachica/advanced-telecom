import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFaq } from "@/components/contact/contact-faq"
import { ContactForm } from "@/components/contact/contact-form"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Contacto | Solicita Presupuesto | Limpiezas en Madrid",
  description:
    "Contacta con nuestro equipo de limpieza profesional en Madrid. Solicita un presupuesto sin compromiso para servicios de limpieza para hogares, oficinas y comunidades.",
  keywords:
    "contacto limpieza madrid, presupuesto limpieza, teléfono empresa limpieza, email limpieza, dirección empresa limpieza",
}

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
                <span className="text-[#00b3d7] font-medium">Contacto</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b5c] leading-tight mb-6">
                Contacta con nosotros
              </h1>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mb-8">
                Estamos aquí para ayudarte. Contacta con nuestro equipo para solicitar información o un presupuesto
                personalizado sin compromiso.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="w-full py-12 md:py-16 bg-white relative z-10 -mt-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ContactInfo
                icon={<Phone className="h-6 w-6" />}
                title="Llámanos"
                description="Nuestro equipo está disponible para atenderte"
                contact="611 174 552"
                link="tel:611174552"
                bgColor="bg-[#e8f7fa]"
                iconColor="text-[#00b3d7]"
              />
              <ContactInfo
                icon={<Mail className="h-6 w-6" />}
                title="Escríbenos"
                description="Te responderemos a la mayor brevedad"
                contact="contacto@limpiezasenmadrid.es"
                link="mailto:contacto@limpiezasenmadrid.es"
                bgColor="bg-[#0a3b5c]"
                iconColor="text-white"
                textColor="text-white"
              />
              <ContactInfo
                icon={<MapPin className="h-6 w-6" />}
                title="Visítanos"
                description="Nuestras oficinas en Madrid"
                contact="Calle Velázquez 59 – 28001 Madrid"
                link="https://maps.google.com/?q=Calle+Velázquez+59,Madrid,España"
                bgColor="bg-[#e8f7fa]"
                iconColor="text-[#00b3d7]"
              />
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0a3b5c] mb-4">Envíanos un mensaje</h2>
                </div>

                <ContactForm />
              </div>

              {/* Map & Business Hours */}
              <div className="space-y-8">
                <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0608233767313!2d-3.6868870846337377!3d40.42736997936409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a1aaa7a8bf%3A0x9809a1b867e7dd4c!2sC.%20de%20Vel%C3%A1zquez%2C%2059%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1652345678901!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Limpiezas en Madrid"
                  ></iframe>
                </div>

                <div className="bg-[#e8f7fa] rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#0a3b5c] mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-[#00b3d7]" /> Horario de atención
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-[#5a7184]">Lunes - Viernes</span>
                      <span className="font-medium text-[#0a3b5c]">08:00 - 20:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#5a7184]">Sábado</span>
                      <span className="font-medium text-[#0a3b5c]">08:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#5a7184]">Domingo</span>
                      <span className="font-medium text-[#0a3b5c]">Cerrado</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#c5e8f0]">
                    <p className="text-[#5a7184] text-sm">
                      <span className="font-medium text-[#0a3b5c]">Nota:</span> Los servicios de limpieza se realizan
                      según las necesidades del cliente, incluyendo fines de semana y festivos.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] rounded-xl p-6 text-white shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" /> ¿Por qué elegirnos?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Personal cualificado y en plantilla</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Productos ecológicos de alta calidad</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Flexibilidad horaria y sin permanencia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-0.5">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Presupuesto sin compromiso en 24h</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Preguntas Frecuentes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Resolvemos tus dudas
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios de limpieza.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <ContactFaq
                  question="¿Cómo puedo solicitar un presupuesto?"
                  answer="Puedes solicitar un presupuesto sin compromiso a través de nuestro formulario de contacto, llamando al 611 174 552 o enviando un email a contacto@limpiezasenmadrid.es. Te responderemos en menos de 24 horas con un presupuesto personalizado."
                />
                <ContactFaq
                  question="¿Cuál es el área geográfica que cubren vuestros servicios?"
                  answer="Ofrecemos nuestros servicios de limpieza en toda la Comunidad de Madrid, incluyendo la capital y municipios cercanos. Si tienes dudas sobre si tu ubicación está dentro de nuestra área de servicio, no dudes en contactarnos."
                />
                <ContactFaq
                  question="¿Proporcionáis los productos y equipos de limpieza?"
                  answer="Sí, nosotros proporcionamos todos los productos y equipos necesarios para realizar el servicio de limpieza. Utilizamos productos profesionales de alta calidad y respetuosos con el medio ambiente. Si prefieres que utilicemos productos específicos, podemos adaptarnos a tus necesidades."
                />
                <ContactFaq
                  question="¿Cuál es el tiempo mínimo de contratación de vuestros servicios?"
                  answer="No exigimos un tiempo mínimo de contratación. Puedes contratar nuestros servicios de forma puntual o periódica según tus necesidades. No obstante, para servicios regulares ofrecemos descuentos especiales."
                />
                <ContactFaq
                  question="¿Trabajáis los fines de semana y festivos?"
                  answer="Sí, ofrecemos servicios de limpieza los fines de semana y festivos con un pequeño suplemento. Nos adaptamos completamente a tus necesidades horarias para causar las mínimas molestias posibles."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                ¿Listo para disfrutar de espacios impecables?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contacta con nosotros hoy mismo y descubre cómo nuestros servicios profesionales de limpieza pueden
                transformar tus espacios.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="tel:611174552">
                  <Button className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px] normal-case">
                    Llamar ahora: 611 174 552 <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  )
}
