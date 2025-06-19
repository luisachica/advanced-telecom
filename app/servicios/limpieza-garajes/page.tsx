import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Star, Phone, ArrowRight, Clock, Shield, Sparkles, Car, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema-markup"
import { ContactForm } from "@/components/contact/contact-form"

// Importa el componente ServiciosRelacionados que ya tienes
import { ServiciosRelacionados } from "@/components/ServiciosRelacionados" // ¡Esta línea es clave!

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

// Datos específicos del servicio - Adaptados para "Limpieza de Garajes"
const serviceData = {
  title: "Limpieza de garajes",
  slug: "limpieza-garajes", // ¡Asegúrate de que este slug coincida con el de data/servicios.ts!
  description: "Servicios especializados de limpieza y mantenimiento para garajes comunitarios y comerciales en Madrid",
  heroImage: "/images/limpieza-garajes-madrid.webp",
  icon: <Car className="h-6 w-6" />,
  shortDescription: "Mantenemos tu garaje impecable, seguro y libre de polvo, grasa y suciedad acumulada para todos los usuarios.",
  longDescription:
    "Nuestro servicio de limpieza de garajes está diseñado para abordar la suciedad y los desafíos específicos de estos espacios. Utilizamos maquinaria especializada de alta presión, aspiradoras industriales y productos desengrasantes potentes para eliminar la acumulación de polvo, hollín, manchas de aceite, rodadas de neumáticos y otros residuos. Un garaje limpio no solo mejora la estética y la seguridad, sino que también prolonga la vida útil de las instalaciones y previene accidentes.",
  features: [
    {
      title: "Maquinaria especializada",
      description: "Equipos de alta presión, fregadoras industriales y aspiradoras potentes para una limpieza profunda.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Desengrasado profesional",
      description: "Productos específicos para eliminar manchas de aceite, grasa y residuos de combustible del suelo.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Mejora de la seguridad",
      description: "Eliminación de suciedad que causa resbalones y mejora la visibilidad de señalización.",
      icon: <Check className="h-6 w-6" />,
    },
    {
      title: "Eliminación de olores",
      description: "Tratamiento de superficies para neutralizar olores desagradables y mantener un ambiente fresco.",
      icon: <Clock className="h-6 w-6" />,
    },
  ],
  process: [
    {
      title: "Inspección y presupuesto",
      description: "Evaluamos el tamaño, tipo de suelo y nivel de suciedad para ofrecerte un presupuesto a medida y sin compromiso.",
    },
    {
      title: "Preparación del área",
      description: "Señalización de zonas de trabajo, retirada de objetos voluminosos y protección de sumideros.",
    },
    {
      title: "Limpieza profunda",
      description: "Aplicación de desengrasantes, fregado industrial con maquinaria y aspirado de residuos.",
    },
    {
      title: "Limpieza de elementos adicionales",
      description:
        "Limpieza de paredes, columnas, extintores, señalización, puntos de luz y rejillas de ventilación.",
    },
    {
      title: "Acabado y revisión",
      description: "Secado, repaso final y retirada de toda la maquinaria y residuos para dejar el garaje impecable.",
    },
  ],
  faqs: [
    {
      question: "¿Cada cuánto tiempo se recomienda limpiar un garaje?",
      answer:
        "La frecuencia ideal depende del uso y el tránsito del garaje. Para garajes comunitarios o de alto tránsito, se recomienda una limpieza profunda al menos una o dos veces al año. Para garajes con menos uso, una vez al año podría ser suficiente. Ofrecemos planes personalizados.",
    },
    {
      question: "¿Pueden limpiar garajes de cualquier tamaño?",
      answer:
        "Sí, tenemos la capacidad y la maquinaria para limpiar garajes de todos los tamaños, desde pequeños garajes privados o de comunidades reducidas hasta grandes aparcamientos subterráneos de centros comerciales o edificios de oficinas.",
    },
    {
      question: "¿Se encargan de las manchas de aceite y grasa?",
      answer:
        "Sí, es uno de nuestros puntos fuertes. Utilizamos desengrasantes industriales y técnicas de fregado específicas para tratar y eliminar eficazmente las manchas de aceite, grasa y combustible que son comunes en los garajes.",
    },
    {
      question: "¿Necesitamos vaciar el garaje para la limpieza?",
      answer:
        "No es estrictamente necesario vaciar el garaje por completo. Podemos trabajar por zonas, moviendo los vehículos si es posible, o coordinar con la comunidad para que un sector quede libre en ciertos días. Lo ideal es discutir esto en la visita inicial para planificarlo de la mejor manera.",
    },
  ],
  testimonials: [
    {
      stars: 5,
      text: "El garaje de nuestra comunidad nunca había estado tan limpio. Eliminaron todas las manchas de aceite y el olor a humedad. ¡Excelente trabajo!",
      name: "Presidente Comunidad 'Los Olivos'",
      company: "Comunidad de Vecinos",
      date: "05 Junio 2024",
      initial: "P",
    },
    {
      stars: 5,
      text: "Contratamos su servicio para nuestro parking comercial y los resultados superaron las expectativas. Rapidez y profesionalidad.",
      name: "Gerente, Parking Central",
      company: "Gestión de Aparcamientos",
      date: "20 Mayo 2024",
      initial: "G",
    },
    {
      stars: 5,
      text: "Un equipo muy eficiente y con maquinaria potente. El garaje de nuestro edificio ahora luce como nuevo. Recomendados al 100%.",
      name: "Administrador de Fincas Bravo",
      company: "Administración de Fincas",
      date: "12 Abril 2024",
      initial: "A",
    },
  ],
  galleryImages: [
    {
      src: "/limpieza-garajes-madrid.webp",
      alt: "Limpieza profunda de suelo de garaje con fregadora industrial",
      width: 800,
      height: 600,
    },
    {
      src: "/images/limpieza-parking-subterraneo.webp",
      alt: "Operario limpiando columnas y paredes de garaje",
      width: 400,
      height: 400,
    },
    {
      src: "/images/maquinaria-limpieza-garajes.webp",
      alt: "Maquinaria especializada para limpieza de garajes",
      width: 400,
      height: 400,
    },
    {
      src: "/images/suelo-garaje-limpio.webp",
      alt: "Suelo de garaje impecable después de la limpieza",
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

// El componente RelatedServiceCard ya no se necesita aquí si usamos ServiciosRelacionados
// function RelatedServiceCard({ title, image, link }: { title: string; image: string; link: string }) {
//   return (
//     <Link href={link} className="group block">
//       <div className="relative overflow-hidden rounded-xl">
//         <Image
//           src={validateImagePath(image) || "/placeholder.svg"}
//           alt={title}
//           width={400}
//           height={300}
//           className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/80 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 p-4">
//           <h3 className="text-white font-bold">{title}</h3>
//           <p className="text-white/80 text-sm flex items-center mt-1">
//             Ver servicio <ArrowRight className="ml-1 h-3 w-3" />
//           </p>
//         </div>
//       </div>
//     </Link>
//   )
// }

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
                      href="https://wa.me/34608305354?text=Hola%2C%20quiero%20más%20informaci%C3%B3n%20sobre%20limpieza%20de%20garajes"
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
                  "Especialistas en la limpieza profunda de garajes, eliminando suciedad, grasa y olores para un espacio impecable y seguro."
                </div>
                <p className="text-[#5a7184]">{serviceData.longDescription}</p>
                <ul className="space-y-3">
                  {[
                    "Fregado industrial de suelos con maquinaria especializada",
                    "Eliminación de manchas de aceite, grasa y rodaduras de neumáticos",
                    "Limpieza de paredes, columnas, techos y tuberías",
                    "Barrido y aspirado de polvo y residuos",
                    "Limpieza de extintores, señalización y puntos de luz",
                    "Vaciado y limpieza de sumideros y desagües",
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
                      src={validateImagePath("/images/limpieza-parking-subterraneo.webp") || "/placeholder.svg"}
                      alt="Limpieza de parking subterráneo"
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/images/maquinaria-limpieza-garajes.webp") || "/placeholder.svg"}
                      alt="Maquinaria para limpieza de garajes"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/images/limpieza-garajes-madrid.webp") || "/placeholder.svg"}
                      alt="Limpieza de garajes en Madrid"
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
                Nos especializamos en la limpieza de garajes, ofreciendo soluciones efectivas para mantener estos
                espacios en óptimas condiciones.
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
                Nuestra metodología garantiza una limpieza exhaustiva y eficiente de tu garaje, paso a paso.
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

        {/* Servicios relacionados - ¡Aquí usamos tu componente! */}
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

            {/* Renderiza el componente ServiciosRelacionados y le pasas el slug actual */}
            <ServiciosRelacionados actualSlug={serviceData.slug} />

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
                  ¿Listo para transformar tu garaje?
                </h2>
                <p className="text-white/90 text-lg">
                  Solicita un presupuesto sin compromiso y descubre cómo nuestro servicio de{" "}
                  **{serviceData.title.toLowerCase()}** puede dejar tu espacio impecable y seguro.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20limpieza%20de%20garajes">
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