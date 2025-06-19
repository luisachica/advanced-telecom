import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Phone, ArrowRight, Clock, Shield, Sparkles, Users, ChevronDown, Building, Wrench } from "lucide-react" // Se mantuvo Building, se agregó Wrench si se usa en algún lado

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema-markup"
import { ContactForm } from "@/components/contact/contact-form"

// Importa tu componente de servicios relacionados
import { ServiciosRelacionados } from "@/components/ServiciosRelacionados"
// Importa tus datos de servicios (asegúrate de que esta ruta sea correcta)
import { SERVICIOS } from "@/data/servicios" // Asegúrate de que SERVICIOS contenga los datos para todos los servicios

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

// Datos específicos del servicio - Adaptados para "Limpieza de Empresas"
const serviceData = {
  title: "Limpieza de empresas",
  description: "Servicios profesionales de limpieza integral para todo tipo de empresas en Madrid",
  heroImage: "/images/limpieza-empresas-madrid.webp", // Nueva imagen de héroe para empresas
  icon: <Building className="h-6 w-6" />, // Icono de empresa
  shortDescription: "Creamos un ambiente de trabajo impecable y saludable que impulsa la productividad y la imagen de tu negocio.",
  longDescription:
    "Nuestro servicio de limpieza de empresas está diseñado para ofrecer soluciones integrales de higiene y mantenimiento a todo tipo de negocios, desde pequeñas oficinas hasta grandes corporaciones o naves industriales. Entendemos la importancia de un entorno de trabajo limpio y profesional, por lo que utilizamos técnicas avanzadas, equipos de última generación y productos de alta calidad para garantizar resultados excepcionales y una imagen impecable para tu empresa.",
  features: [
    {
      title: "Servicio integral",
      description: "Cubrimos todas las áreas y necesidades de limpieza de tu negocio, adaptándonos a su actividad.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Personal cualificado",
      description: "Nuestro equipo está formado por profesionales experimentados y de confianza, especializados en limpieza corporativa.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Horarios flexibles",
      description: "Nos adaptamos a sus operaciones para minimizar interrupciones, ofreciendo limpieza diurna, nocturna o en fines de semana.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Seguridad y sostenibilidad",
      description: "Utilizamos productos seguros para el personal y el medio ambiente, cumpliendo con todas las normativas.",
      icon: <Shield className="h-6 w-6" />,
    },
  ],
  process: [
    {
      title: "Análisis y diagnóstico",
      description: "Realizamos una visita para entender las características de su empresa y sus requisitos de limpieza.",
    },
    {
      title: "Propuesta personalizada",
      description: "Elaboramos un plan de limpieza detallado y un presupuesto competitivo, sin compromiso.",
    },
    {
      title: "Implementación del servicio",
      description: "Asignamos el equipo y los recursos necesarios para comenzar el servicio de forma eficiente.",
    },
    {
      title: "Ejecución profesional",
      description:
        "Nuestro equipo lleva a cabo la limpieza siguiendo los protocolos establecidos y con la máxima discreción.",
    },
    {
      title: "Supervisión continua",
      description: "Garantizamos la calidad del servicio mediante controles regulares y comunicación constante con usted.",
    },
  ],
  faqs: [
    {
      question: "¿Qué tipo de empresas limpian?",
      answer:
        "Ofrecemos servicios de limpieza para una amplia gama de empresas, incluyendo oficinas, locales comerciales, clínicas, despachos profesionales, naves industriales, gimnasios, centros educativos y más. Adaptamos el servicio a las particularidades de cada sector.",
    },
    {
      question: "¿Pueden adaptarse a los horarios de mi empresa?",
      answer:
        "Absolutamente. La flexibilidad horaria es una de nuestras prioridades. Podemos realizar la limpieza durante el horario laboral, fuera de él, por las noches o los fines de semana, según lo que mejor se ajuste a la operativa de su empresa.",
    },
    {
      question: "¿Proporcionan los materiales y productos de limpieza?",
      answer:
        "Sí, todos los productos, materiales y maquinaria necesarios para llevar a cabo el servicio de limpieza están incluidos en nuestro presupuesto. Utilizamos productos de calidad profesional, ecológicos y seguros.",
    },
    {
      question: "¿Ofrecen servicios adicionales como limpieza de cristales o moquetas?",
      answer:
        "Sí, además de la limpieza general, ofrecemos servicios complementarios como limpieza de cristales en altura, limpieza de moquetas y tapicerías, tratamientos de suelos, desinfección avanzada y limpieza fin de obra. Puede consultar todas nuestras opciones al solicitar su presupuesto.",
    },
  ],
  testimonials: [
    {
      stars: 5,
      text: "El servicio de limpieza de nuestra empresa es impecable. Los empleados notan la diferencia y el ambiente de trabajo es mucho más agradable.",
      name: "Javier R.",
      company: "Directora de RRHH, Tech Solutions",
      date: "18 Mayo 2024",
      initial: "J",
    },
    {
      stars: 5,
      text: "Profesionalismo y eficiencia son la clave de esta empresa. Han sabido adaptarse a nuestras necesidades específicas y siempre responden rápidamente.",
      name: "María L.",
      company: "Gerente de Operaciones, Retail Express",
      date: "02 Junio 2024",
      initial: "M",
    },
    {
      stars: 5,
      text: "La limpieza de nuestra nave industrial es un desafío, pero ellos lo manejan a la perfección. Equipo serio y comprometido.",
      name: "Fernando P.",
      company: "Jefe de Producción, Logística Avanzada",
      date: "29 Abril 2024",
      initial: "F",
    },
  ],
  galleryImages: [
    {
      src: "/limpieza-empresas-madrid.webp",
      alt: "Equipo de limpieza profesional en una oficina moderna",
      width: 800,
      height: 600,
    },
    {
      src: "/images/limpieza-oficinas-general.webp",
      alt: "Limpieza profunda de áreas de trabajo en empresa",
      width: 400,
      height: 400,
    },
    {
      src: "/images/limpieza-corporativa.webp",
      alt: "Limpieza de áreas comunes en un edificio corporativo",
      width: 400,
      height: 400,
    },
    {
      src: "/images/limpieza-recepcion-empresa.webp",
      alt: "Limpieza de la zona de recepción de una empresa",
      width: 400,
      height: 400,
    },
  ],
}

// Componente para las preguntas frecuentes
function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between py-2">
          <h3 className="text-lg font-medium text-[#0a3b5c]">{question}</h3>
          <span className="transition group-open:rotate-180">
            <ChevronDown className="h-5 w-5 text-[#00b3d7]" />
          </span>
        </summary>
        <div className="pb-4 pt-2 text-[#5a7184]">
          <p>{answer}</p>
        </div>
      </details>
    </div>
  )
}

// Componente para el proceso de trabajo
function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00b3d7] text-white font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">{title}</h3>
        <p className="text-[#5a7184]">{description}</p>
      </div>
    </div>
  )
}

// Componente para las características del servicio
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-[#e8f7fa] p-3 rounded-full w-fit mb-4">
        <div className="text-[#00b3d7]">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">{title}</h3>
      <p className="text-[#5a7184]">{description}</p>
    </div>
  )
}

export default function ServicePage() {
  // Define el slug del servicio actual.
  // IMPORTANTE: En una aplicación con rutas dinámicas de Next.js,
  // esto se obtendría del router (ej. const router = useRouter(); const { slug } = router.query;).
  // Aquí lo hardcodeamos para que coincida con los datos de serviceData definidos arriba.
  const actualSlug = "limpieza-empresas" // Slug para "Limpieza de Empresas"

  return (
    <div className="flex flex-col min-h-screen">
      <SchemaMarkup />
      <PhoneBanner />
      {/* Pasa los SERVICIOS a MainNavigation */}
      <MainNavigation services={[]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-[#e8f7fa] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Link href="/" className="text-[#5a7184] hover:text-[#00b3d7]">
                    Inicio
                  </Link>
                  <span className="text-[#5a7184]">/</span>
                  <Link href="/servicios" className="text-[#5a7184] hover:text-[#00b3d7]">
                    Servicios
                  </Link>
                  <span className="text-[#5a7184]">/</span>
                  <span className="text-[#00b3d7] font-medium">{serviceData.title}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b5c] leading-tight">{serviceData.title}</h1>
                <p className="text-[#5a7184] text-lg max-w-lg">{serviceData.shortDescription}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-6 relative z-30"
                  >
                    <a
                      href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20limpieza%20de%20empresas"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar presupuesto
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="bg-white hover:bg-gray-50 hover:text-gray text-[#0a3b5c] border-[#0a3b5c] rounded-full px-8 py-6 relative z-30"
                  >
                    <a href="tel:611174552">
                      <Phone className="mr-2 h-5 w-5" /> Llamar ahora
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={validateImagePath(serviceData.heroImage) || "/placeholder.svg"}
                    alt={serviceData.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 z-0">
                  <div className="bg-[#00b3d7]/10 rounded-full w-64 h-64 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descripción del servicio */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="text-[#00b3d7] font-medium">Nuestro servicio</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a3b5c] leading-tight">
                  Servicio profesional de {serviceData.title.toLowerCase()}
                </h2>
                <div className="border-l-4 border-[#00b3d7] pl-4 italic text-[#5a7184]">
                  "Transformamos cualquier espacio empresarial en un entorno impecable y acogedor, adaptándonos a las necesidades y horarios de cada negocio."
                </div>
                <p className="text-[#5a7184]">{serviceData.longDescription}</p>
                <ul className="space-y-3">
                  {[
                    "Limpieza y desinfección de oficinas y despachos",
                    "Mantenimiento de zonas comunes y áreas de recepción",
                    "Limpieza de baños y cocinas industriales/corporativas",
                    "Limpieza de suelos y superficies (todo tipo de materiales)",
                    "Vaciado de papeleras y gestión de residuos",
                    "Limpieza de cristales (interiores y exteriores)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#5a7184]">
                      <div className="bg-[#e8f7fa] rounded-full p-1">
                        <Check className="h-4 w-4 text-[#00b3d7]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/images/limpieza-oficinas-general.webp") || "/placeholder.svg"}
                      alt="Limpieza de oficinas en empresa"
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/images/limpieza-recepcion-empresa.webp") || "/placeholder.svg"}
                      alt="Limpieza de recepción de empresa"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/images/limpieza-empresas-madrid.webp") || "/placeholder.svg"}
                      alt="Servicio de limpieza para empresas"
                      width={300}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características del servicio */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b3d7]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8ed1b7]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Características</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                ¿Por qué elegir nuestro servicio de{" "}
                <span className="text-[#00b3d7]">{serviceData.title.toLowerCase()}</span>?
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Nuestro servicio se distingue por su calidad, profesionalidad y atención al detalle, garantizando
                un entorno de trabajo óptimo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceData.features.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de trabajo */}
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Nuestro proceso</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                ¿Cómo trabajamos?
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Seguimos un proceso estructurado para garantizar un servicio de calidad y adaptado a la envergadura
                de su empresa.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {serviceData.process.map((step, index) => (
                  <ProcessStep key={index} number={index + 1} title={step.title} description={step.description} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Preguntas frecuentes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Resolvemos tus dudas
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Aquí encontrarás respuestas a las preguntas más comunes sobre nuestro servicio de{" "}
                {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                {serviceData.faqs.map((faq, index) => (
                  <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Testimonios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Descubre por qué nuestros clientes confían en nuestro servicio de {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {serviceData.testimonials.map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-[#00b3d7] h-full flex flex-col transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-xl">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#8ed1b7] text-[#8ed1b7]" />
                      ))}
                    </div>
                    <p className="text-[#5a7184] mb-6 flex-grow">{`"${testimonial.text}"`}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-[#e8f7fa] text-[#00b3d7] flex items-center justify-center font-bold text-lg">
                        {testimonial.initial}
                      </div>
                      <div>
                        <div className="font-medium text-[#0a3b5c]">{testimonial.name}</div>
                        <div className="text-xs text-[#5a7184]">
                          {testimonial.company} • {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Servicios relacionados - Usa tu componente ServiciosRelacionados */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Otros servicios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Servicios relacionados
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Descubre otros servicios de limpieza profesional que podrían interesarte.
              </p>
            </div>

            {/* Aquí se inserta el componente ServiciosRelacionados, pasándole el slug del servicio actual */}
            <ServiciosRelacionados actualSlug={actualSlug} />
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  ¿Listo para potenciar la imagen de tu empresa con una limpieza profesional?
                </h2>
                <p className="text-white/90 text-lg">
                  Solicita un presupuesto sin compromiso y descubre cómo nuestro servicio de{" "}
                  **{serviceData.title.toLowerCase()}** puede transformar tu espacio de trabajo.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20limpieza%20de%20empresas">
                    <Button className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px]">
                      Solicitar presupuesto ahora <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6"
                  >
                    <a href="tel:611174552">
                      <Phone className="mr-2 h-5 w-5" /> Llamar: 611 174 552
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#0a3b5c] mb-6">Solicitar información</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}