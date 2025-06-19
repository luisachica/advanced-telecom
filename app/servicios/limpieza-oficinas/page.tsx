import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Phone, ArrowRight, Clock, Shield, Sparkles, Users, ChevronDown, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema-markup"
import { ContactForm } from "@/components/contact/contact-form"

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

// Datos específicos del servicio - Estos cambiarían para cada servicio
const serviceData = {
  title: "Limpieza de oficinas",
  description: "Servicios profesionales de limpieza para oficinas y espacios de trabajo en Madrid",
  heroImage: "/limpieza-oficinas-en-madrid.webp",
  icon: <Briefcase className="h-6 w-6" />,
  shortDescription: "Mantenemos tu espacio de trabajo limpio, organizado y saludable para aumentar la productividad.",
  longDescription:
    "Nuestro servicio de limpieza de oficinas está diseñado para mantener su espacio de trabajo en condiciones óptimas, creando un ambiente limpio, saludable y profesional para sus empleados y clientes. Utilizamos productos de alta calidad y técnicas especializadas para garantizar resultados excepcionales.",
  features: [
    {
      title: "Limpieza integral",
      description:
        "Limpieza completa de todas las áreas de trabajo, incluyendo escritorios, salas de reuniones, áreas comunes y baños.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Personal cualificado",
      description: "Equipo de profesionales formados específicamente en limpieza de entornos de oficina.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Horarios flexibles",
      description: "Nos adaptamos a sus horarios para realizar la limpieza sin interrumpir su actividad empresarial.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Productos ecológicos",
      description: "Utilizamos productos respetuosos con el medio ambiente y seguros para la salud de sus empleados.",
      icon: <Shield className="h-6 w-6" />,
    },
  ],
  process: [
    {
      title: "Evaluación inicial",
      description: "Visitamos su oficina para evaluar sus necesidades específicas y elaborar un plan personalizado.",
    },
    {
      title: "Presupuesto detallado",
      description: "Le proporcionamos un presupuesto claro y sin compromiso, detallando todos los servicios incluidos.",
    },
    {
      title: "Programación",
      description: "Acordamos un horario que se adapte a su actividad empresarial, minimizando las interrupciones.",
    },
    {
      title: "Ejecución del servicio",
      description:
        "Nuestro equipo realiza la limpieza siguiendo protocolos estrictos y utilizando equipos profesionales.",
    },
    {
      title: "Control de calidad",
      description: "Realizamos inspecciones regulares para garantizar que se mantienen nuestros altos estándares.",
    },
  ],
  faqs: [
    {
      question: "¿Con qué frecuencia recomiendan la limpieza de oficinas?",
      answer:
        "Recomendamos una limpieza diaria para áreas de alto tránsito como recepciones, baños y cocinas, y una limpieza más profunda semanal o quincenal para otras áreas. No obstante, adaptamos la frecuencia según las necesidades específicas de cada cliente.",
    },
    {
      question: "¿Proporcionan los productos de limpieza o debo suministrarlos yo?",
      answer:
        "Nosotros proporcionamos todos los productos y equipos de limpieza necesarios, incluidos en el precio del servicio. Utilizamos productos profesionales de alta calidad y respetuosos con el medio ambiente.",
    },
    {
      question: "¿Pueden realizar la limpieza fuera del horario laboral?",
      answer:
        "Sí, de hecho, la mayoría de nuestros servicios de limpieza de oficinas se realizan fuera del horario laboral para no interrumpir la actividad de su empresa. Nos adaptamos completamente a sus necesidades horarias.",
    },
    {
      question: "¿Ofrecen contratos a largo plazo o puedo contratar servicios puntuales?",
      answer:
        "Ofrecemos ambas opciones. Puede contratar servicios puntuales para necesidades específicas, como una limpieza profunda ocasional, o establecer un contrato regular sin permanencia. Nuestros contratos regulares incluyen descuentos especiales.",
    },
  ],
  testimonials: [
    {
      stars: 5,
      text: "Desde que contratamos sus servicios, nuestra oficina luce impecable. El personal es muy profesional y cuidadoso con nuestros equipos y documentos.",
      name: "Carlos M.",
      company: "Agencia de Marketing",
      date: "15 Marzo 2023",
      initial: "C",
    },
    {
      stars: 5,
      text: "Excelente servicio y muy flexible con los horarios. Han sabido adaptarse perfectamente a nuestras necesidades cambiantes.",
      name: "Laura P.",
      company: "Despacho de Abogados",
      date: "22 Abril 2023",
      initial: "L",
    },
    {
      stars: 5,
      text: "La diferencia es notable. Nuestros clientes comentan lo limpia y ordenada que está siempre nuestra oficina. Totalmente recomendable.",
      name: "Miguel A.",
      company: "Consultoría Financiera",
      date: "8 Mayo 2023",
      initial: "M",
    },
  ],
  galleryImages: [
    {
      src: "/limpieza-oficinas-en-madrid.webp",
      alt: "Limpieza de escritorios en oficina",
      width: 800,
      height: 600,
    },
    {
      src: "/cheerful-office-cleaner.png",
      alt: "Limpieza de áreas comunes",
      width: 400,
      height: 400,
    },
    {
      src: "/images/limpieza-cristales.png",
      alt: "Limpieza de ventanas y cristales",
      width: 400,
      height: 400,
    },
    {
      src: "/bathroom-clean.png",
      alt: "Limpieza de baños de oficina",
      width: 400,
      height: 400,
    },
  ],
  relatedServices: [
    {
      title: "Limpieza de Comunidades",
      link: "/servicios/limpieza-comunidades",
      image: "/images/limpieza-comunidades.jpg",
    },
    {
      title: "Limpieza de Cristales",
      link: "/servicios/limpieza-cristales",
      image: "/images/limpieza-cristales.png",
    },
    {
      title: "Limpieza Fin de Obra",
      link: "/servicios/fin-de-obra",
      image: "/images/fin-obra.jpg",
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

// Componente para los servicios relacionados
function RelatedServiceCard({ title, image, link }: { title: string; image: string; link: string }) {
  return (
    <Link href={link} className="group block">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={validateImagePath(image) || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white font-bold">{title}</h3>
          <p className="text-white/80 text-sm flex items-center mt-1">
            Ver servicio <ArrowRight className="ml-1 h-3 w-3" />
          </p>
        </div>
      </div>
    </Link>
  )
}

export default function ServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SchemaMarkup />
      <PhoneBanner />
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
                      href="https://wa.me/34608305354?text=Hola%2C%20quiero%20más%20informaci%C3%B3n"
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
                  "Ofrecemos soluciones de limpieza personalizadas para cada tipo de oficina, adaptándonos a sus
                  necesidades específicas y horarios."
                </div>
                <p className="text-[#5a7184]">{serviceData.longDescription}</p>
                <ul className="space-y-3">
                  {[
                    "Limpieza de áreas de trabajo y escritorios",
                    "Limpieza de salas de reuniones y áreas comunes",
                    "Limpieza de baños y cocinas",
                    "Limpieza de suelos y alfombras",
                    "Vaciado de papeleras y gestión de residuos",
                    "Limpieza de cristales interiores",
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
                      src={validateImagePath("/cheerful-office-cleaner.png") || "/placeholder.svg"}
                      alt="Limpieza de oficinas"
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/bathroom-clean.png") || "/placeholder.svg"}
                      alt="Limpieza de baños"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/limpieza-oficinas-en-madrid.webp") || "/placeholder.svg"}
                      alt="Limpieza de escritorios"
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
                resultados excepcionales.
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
                Seguimos un proceso estructurado para garantizar un servicio de calidad y adaptado a sus necesidades
                específicas.
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

        {/* Servicios relacionados */}
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.relatedServices.map((service, index) => (
                <RelatedServiceCard key={index} title={service.title} image={service.image} link={service.link} />
              ))}
            </div>
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
                  ¿Listo para mejorar la limpieza de tu oficina?
                </h2>
                <p className="text-white/90 text-lg">
                  Solicita un presupuesto sin compromiso y descubre cómo nuestro servicio de{" "}
                  {serviceData.title.toLowerCase()} puede transformar tu espacio de trabajo.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n">
                  <Button className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px]">
                    Solicitar presupuesto ahora <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </a>
                  <a href="tel:611174552">
                  <Button
                    variant="outline"
                    className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Llamar: 611 174 552
                  </Button>
                  </a>
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
