import Image from "next/image"
import Link from "next/link"
import {
  Check,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ServiceCard"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { SchemaMarkup } from "@/components/schema-markup"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import WhatsappFloating from "@/components/WhatsappFloating"
import { TestimonialsSection } from "@/components/testimonials-section"
import { mockTestimonials } from "@/data/testimonials"

export default function Home() {
  // Servicios principales
  const servicios = [
    {
      title: "Antenas TDT",
      image: "/images/telecom/antena-tdt-instalacion-01.jpg",
      iconName: "Radio",
      description: "Instalación, reparación y mantenimiento de antenas de televisión digital terrestre (TDT) para recepción de canales HD y 4K. Servicio técnico especializado con reparaciones el mismo día.",
      slug: "/servicios/antenas-tdt"
    },
    {
      title: "Antenas Parabólicas",
      image: "/images/telecom/antena-parabolica.jpg",
      iconName: "Satellite",
      description: "Instalación y configuración de antenas parabólicas para televisión satelital. Reorientación a diferentes satélites (Astra, Hispasat) y ajuste de señal para máxima calidad de recepción.",
      slug: "/servicios/antenas-parabolicas"
    },
    {
      title: "Porteros Automáticos",
      image: "/images/telecom/portero-automatico-instalacion-01.jpg",
      iconName: "Phone",
      description: "Instalación y reparación de sistemas de porteros automáticos, citófonos, telefonillos y videoporteros. Modernización de sistemas antiguos con tecnología digital.",
      slug: "/servicios/porteros-automaticos"
    },
    {
      title: "Cámaras de Seguridad",
      image: "/images/telecom/camaras-seguridad.jpg",
      iconName: "Camera",
      description: "Instalación de sistemas de videovigilancia profesional para hogares y empresas. Cámaras IP de alta definición con acceso remoto y grabación en la nube.",
      slug: "/servicios/camaras-seguridad"
    },
    {
      title: "Solución Interferencias 5G",
      image: "/images/telecom/antena-profesional.jpg",
      iconName: "Wifi",
      description: "Diagnóstico y solución de interferencias causadas por señales 5G en la recepción de televisión. Instalación de filtros especializados y reajuste de equipos.",
      slug: "/servicios/solucion-interferencias-5g"
    },
    {
      title: "Reparaciones Urgentes",
      image: "/images/telecom/reparaciones-urgentes.jpg",
      iconName: "Zap",
      description: "Servicio de reparaciones urgentes 24/7 para antenas caídas, amplificadores averiados, pérdida de señal y otros problemas técnicos. Respuesta rápida en toda Madrid.",
      slug: "/servicios/reparaciones-urgentes"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SchemaMarkup />
      <PhoneBanner />
      <MainNavigation services={servicios} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-green-100/20"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-brand-green font-medium">Antenista Homologado</p>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">
                  Expertos en
                  <br />
                  telecomunicaciones
                  <br />
                  desde 1995
                </h1>
                <p className="text-brand-black text-lg max-w-lg">
                  Llevamos más de 25 años trabajando en el sector de las telecomunicaciones, ofreciendo instalación y reparación de antenas TDT, parabólicas, porteros automáticos y cámaras de vigilancia en Toledo y Madrid Sur.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="https://wa.me/34668838415?text=Hola%2C%20quiero%20más%20información">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 normal-case">
                      Solicitar presupuesto sin compromiso
                    </Button>
                  </a>
                  <Link href="/servicios">
                    <Button
                      variant="outline"
                      className="bg-slate-600 hover:bg-slate-700 text-white border-2 border-slate-600 hover:border-slate-700 rounded-full px-8 py-6 normal-case"
                    >
                      Ver nuestros servicios
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="relative w-[500px] h-[500px] overflow-hidden" style={{borderRadius: '6px'}}>
                  <Image
                    src="/images/telecom/empresa-advanced-telecom.jpg"
                    alt="Servicios de telecomunicaciones profesionales"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-brand-black text-lg">
                Ofrecemos soluciones de telecomunicaciones personalizadas con personal cualificado.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  iconName={service.iconName}
                  slug={service.slug} 
                />
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link href="/servicios">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6">
                  Ver todos nuestros servicios <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                ¿Por qué elegir Advanced Telecom?
              </h2>
              <p className="text-brand-black text-lg">
                Más de 25 años de experiencia nos avalan como líderes en telecomunicaciones en Madrid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Técnicos Certificados</h3>
                <p className="text-brand-black">Personal cualificado con más de 25 años de experiencia en el sector.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Equipos de Calidad</h3>
                <p className="text-brand-black">Trabajamos con las mejores marcas: Televes, Johansson, Fermax.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Atención 24/7</h3>
                <p className="text-brand-black">Servicio de urgencias disponible todos los días del año.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Garantía Total</h3>
                <p className="text-brand-black">Todos nuestros trabajos incluyen garantía y servicio postventa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Estadísticas Section */}
        <section className="w-full py-16 md:py-24 bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">+20</div>
                <p className="text-white/80">Años de experiencia</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">+5000</div>
                <p className="text-white/80">Instalaciones realizadas</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                <p className="text-white/80">Servicio de urgencias</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                <p className="text-white/80">Satisfacción garantizada</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <TestimonialsSection testimonials={mockTestimonials} />

        {/* Contacto Section */}
        <section className="w-full py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                    ¿Necesitas más información?
                  </h2>
                  <p className="text-brand-black text-lg">
                    Contacta con nosotros para un presupuesto personalizado sin compromiso.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-brand-black text-xl mb-4">Contacta directamente</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary rounded-full p-3 text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-brand-black">Llámanos</p>
                        <p className="font-bold text-brand-black">668 83 84 15</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary rounded-full p-3 text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-brand-black">Escríbenos</p>
                        <p className="font-bold text-brand-black">info@advancedtelecom.es</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 rounded-full p-3 text-white">
                    <Send className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white font-bold">Solicitar presupuesto</h3>
                    <p className="text-white/80 text-sm">Respuesta en menos de 24 horas</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappFloating />
    </div>
  )
}
