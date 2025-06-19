import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Phone, ArrowRight, Clock, Shield, Sparkles, Users, ChevronDown, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema-markup"
import { ContactForm } from "@/components/contact/contact-form"

// Importa tu componente de servicios relacionados
import { ServiciosRelacionados } from "@/components/ServiciosRelacionados"
// Importa tus datos de servicios (asegúrate de que esta ruta sea correcta)
import { SERVICIOS } from "@/data/servicios"


// Función para validar rutas de imágenes y asegurar un fallback
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg" // Imagen de placeholder por defecto
  }
  return path
}

// Datos específicos del servicio actual (hardcodeado para este ejemplo de página)
// En una aplicación real con rutas dinámicas (ej. /servicios/[slug].tsx),
// estos datos se cargarían dinámicamente usando useRouter().query y buscando
// en el array SERVICIOS o una base de datos.
const serviceData = {
  title: "Limpieza de comunidades",
  description: "Servicios profesionales de limpieza para comunidades de vecinos y edificios residenciales en Madrid",
  heroImage: "/images/limpieza-comunidades-madrid.webp",
  icon: <Building2 className="h-6 w-6" />,
  shortDescription: "Mantenemos las zonas comunes de tu comunidad impecables y acogedoras para todos los vecinos.",
  longDescription:
    "Nuestro servicio de limpieza de comunidades de vecinos está diseñado para garantizar la higiene y el mantenimiento óptimo de todas las áreas comunes. Contamos con personal cualificado y utilizamos productos y técnicas específicas para cada superficie, asegurando un ambiente limpio, saludable y agradable para todos los residentes.",
  features: [
    {
      title: "Higiene garantizada",
      description: "Limpieza profunda y desinfección de todas las áreas para un ambiente saludable.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Personal de confianza",
      description: "Equipo profesional, discreto y con experiencia en entornos residenciales.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Flexibilidad de horarios",
      description: "Nos adaptamos a las necesidades de tu comunidad para realizar la limpieza en el mejor momento.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Productos ecológicos",
      description: "Utilizamos productos respetuosos con el medio ambiente y seguros para la salud de los vecinos y mascotas.",
      icon: <Shield className="h-6 w-6" />,
    },
  ],
  process: [
    {
      title: "Inspección y evaluación",
      description: "Visitamos tu comunidad para evaluar las necesidades específicas y diseñar un plan de limpieza personalizado.",
    },
    {
      title: "Presupuesto a medida",
      description: "Te proporcionamos un presupuesto detallado y transparente, sin compromiso, con todos los servicios incluidos.",
    },
    {
      title: "Asignación de equipo",
      description: "Un equipo de profesionales habitual se encargará de la limpieza para asegurar consistencia y familiaridad con la comunidad.",
    },
    {
      title: "Ejecución del servicio",
      description:
        "Nuestro equipo realiza la limpieza siguiendo el plan acordado, con la máxima eficiencia y atención al detalle.",
    },
    {
      title: "Seguimiento y calidad",
      description: "Mantenemos una comunicación constante con la comunidad y realizamos controles de calidad periódicos.",
    },
  ],
  faqs: [
    {
      question: "¿Qué áreas comunes incluyen en la limpieza?",
      answer:
        "Nuestro servicio de limpieza de comunidades incluye portales, escaleras, pasillos, ascensores, buzones, puertas de acceso, barandillas, zonas de recreo infantil, garajes, cuartos de contadores, y cualquier otra zona común que la comunidad solicite.",
    },
    {
      question: "¿Proporcionan los productos y la maquinaria necesaria?",
      answer:
        "Sí, nosotros nos encargamos de suministrar todos los productos de limpieza de alta calidad, desinfectantes y la maquinaria profesional necesaria para realizar el servicio de manera eficiente, todo incluido en el presupuesto.",
    },
    {
      question: "¿Con qué frecuencia recomiendan la limpieza?",
      answer:
        "La frecuencia ideal varía según el tamaño de la comunidad y el tránsito. Ofrecemos desde limpiezas diarias hasta semanales o quincenales. Realizamos un estudio previo para recomendar la frecuencia más adecuada para su edificio.",
    },
    {
      question: "¿Tienen seguro de responsabilidad civil?",
      answer:
        "Sí, contamos con un seguro de responsabilidad civil que cubre cualquier eventualidad o daño que pudiera ocurrir durante la prestación de nuestros servicios, brindando total tranquilidad a la comunidad.",
    },
  ],
  testimonials: [
    {
      stars: 5,
      text: "La limpieza en nuestra comunidad ha mejorado muchísimo desde que contratamos sus servicios. El portal siempre está impecable.",
      name: "Vecinos de C/Sol, 15",
      company: "Comunidad de Propietarios",
      date: "12 Abril 2024",
      initial: "V",
    },
    {
      stars: 5,
      text: "Muy profesionales y se adaptan perfectamente a nuestros horarios. La comunicación con ellos es excelente.",
      name: "Administrador de Fincas García",
      company: "Administración de Fincas",
      date: "20 Marzo 2024",
      initial: "A",
    },
    {
      stars: 5,
      text: "Estamos muy contentos con el servicio. El equipo de limpieza es muy atento y cuidadoso con los detalles.",
      name: "Presidente de C/Luna, 22",
      company: "Comunidad de Propietarios",
      date: "03 Mayo 2024",
      initial: "P",
    },
  ],
  galleryImages: [
    {
      src: "/limpieza-comunidades-madrid.webp",
      alt: "Limpieza de portal en comunidad",
      width: 800,
      height: 600,
    },
    {
      src: "/images/limpieza-escaleras-comunidad.webp",
      alt: "Limpieza de escaleras en edificio",
      width: 400,
      height: 400,
    },
    {
      src: "/images/limpieza-ascensor.webp",
      alt: "Limpieza de ascensor en comunidad",
      width: 400,
      height: 400,
    },
    {
      src: "/images/limpieza-garaje-comunidad.webp",
      alt: "Limpieza de garaje en comunidad",
      width: 400,
      height: 400,
    },
  ],
}

// Componente para las preguntas frecuentes (FAQ)
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

// Componente para un paso del proceso de trabajo
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

// Componente para una característica destacada del servicio
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
  const actualSlug = "limpieza-comunidades"

  return (
    <div className="flex flex-col min-h-screen">
      <SchemaMarkup />
      <PhoneBanner />
      {/* Pasa los SERVICIOS a MainNavigation si tu navegación los necesita */}
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
                      href="https://wa.me/34608305354?text=Hola%2C%20quiero%20más%20informaci%C3%B3n%20sobre%20limpieza%20de%20comunidades"
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
                  "Ofrecemos soluciones de limpieza integrales para comunidades, garantizando un ambiente limpio y agradable para todos los residentes."
                </div>
                <p className="text-[#5a7184]">{serviceData.longDescription}</p>
                <ul className="space-y-3">
                  {[
                    "Limpieza y desinfección de portales y escaleras",
                    "Mantenimiento de ascensores y pasillos",
                    "Limpieza de barandillas y pomos",
                    "Aspirado y fregado de suelos",
                    "Vaciado y limpieza de papeleras",
                    "Limpieza de cristales y espejos en zonas comunes",
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
                      src={validateImagePath("/images/limpieza-escaleras-comunidad.webp") || "/placeholder.svg"}
                      alt="Limpieza de escaleras de comunidad"
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/images/limpieza-ascensor.webp") || "/placeholder.svg"}
                      alt="Limpieza de ascensor"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/images/limpieza-comunidades-madrid.webp") || "/placeholder.svg"}
                      alt="Limpieza de portales y zonas comunes"
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
                espacios limpios y seguros para tu comunidad.
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
                Seguimos un proceso estructurado para garantizar un servicio de calidad y adaptado a las necesidades
                de tu comunidad.
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
                  ¿Listo para una comunidad más limpia y acogedora?
                </h2>
                <p className="text-white/90 text-lg">
                  Solicita un presupuesto sin compromiso y descubre cómo nuestro servicio de{" "}
                  {serviceData.title.toLowerCase()} puede mejorar el día a día de tu edificio.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20limpieza%20de%20comunidades">
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