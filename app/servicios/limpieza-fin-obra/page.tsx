import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Star, Phone, ArrowRight, Clock, Shield, Sparkles, Users, Wrench, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import { SchemaMarkup } from "@/components/schema-markup";
import { ContactForm } from "@/components/contact/contact-form";
import { ServiciosRelacionados } from "@/components/ServiciosRelacionados"; // Asumo que este componente existe y se encargaría de buscar y mostrar los servicios relacionados.

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    console.warn("Ruta de imagen inválida o vacía. Usando placeholder.");
    return "/placeholder.svg";
  }
  return path;
};

// Datos específicos del servicio - Adaptados para Limpieza Fin de Obra
const serviceData = {
  title: "Limpieza fin de obra",
  description: "Servicios profesionales de limpieza post-construcción para hogares y negocios",
  heroImage: "/images/fin-obra.jpg", // Nueva imagen para fin de obra
  icon: <Wrench className="h-6 w-6" />, // Icono adaptado
  shortDescription: "Eliminamos a fondo polvo, escombros y residuos después de cualquier construcción o reforma, dejando tu espacio listo para usar.",
  longDescription:
    "Nuestro servicio de limpieza fin de obra está diseñado para eliminar de manera exhaustiva toda la suciedad, polvo y residuos generados tras trabajos de construcción, renovación o reforma. Garantizamos una limpieza profunda para entregar espacios impecables, listos para ser habitados o utilizados.",
  features: [
    {
      title: "Limpieza profunda",
      description:
        "Eliminación de polvo fino, restos de cemento, pintura, yeso y cualquier residuo post-construcción en todas las superficies.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: "Profesionales especializados",
      description: "Equipo capacitado y con experiencia específica en limpieza de obras, utilizando técnicas y maquinaria adecuadas.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Rapidez y eficiencia",
      description: "Realizamos el trabajo en el menor tiempo posible sin comprometer la calidad, para que puedas disfrutar de tu espacio.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Seguridad y productos",
      description: "Empleamos productos específicos y seguros para cada superficie, protegiendo los materiales y el medio ambiente.",
      icon: <Shield className="h-6 w-6" />,
    },
  ],
  process: [
    {
      title: "Inspección y presupuesto",
      description: "Evaluamos el estado de la obra para ofrecer un presupuesto detallado y ajustado a tus necesidades.",
    },
    {
      title: "Planificación del trabajo",
      description: "Diseñamos un plan de limpieza personalizado, coordinando horarios y fases para una ejecución eficiente.",
    },
    {
      title: "Preparación del área",
      description: "Protegemos áreas sensibles y elementos específicos antes de iniciar la limpieza intensiva.",
    },
    {
      title: "Limpieza intensiva",
      description:
        "Procedemos con la eliminación de residuos gruesos, aspirado, fregado, desincrustación y limpieza de todas las superficies.",
    },
    {
      title: "Revisión final",
      description: "Realizamos una inspección detallada para asegurar que el espacio cumple con los más altos estándares de limpieza.",
    },
  ],
  faqs: [
    {
      question: "¿Qué incluye un servicio de limpieza fin de obra?",
      answer:
        "Nuestro servicio incluye la eliminación de restos de obra (yeso, pintura, cemento), limpieza profunda de suelos, ventanas, marcos, puertas, paredes, baños y cocinas, aspirado, fregado y desinfección general, dejando el espacio impecable.",
    },
    {
      question: "¿Necesito preparar algo antes de la limpieza?",
      answer:
        "Idealmente, el espacio debe estar libre de escombros grandes y herramientas de construcción para que nuestro equipo pueda trabajar de manera más eficiente y segura. Si hay objetos personales, te recomendamos retirarlos.",
    },
    {
      question: "¿Cuánto tiempo tarda la limpieza fin de obra?",
      answer:
        "La duración depende del tamaño del inmueble, el nivel de suciedad y los detalles específicos de la obra. Tras nuestra evaluación inicial, te daremos un estimado de tiempo preciso.",
    },
    {
      question: "¿Utilizan productos ecológicos o seguros?",
      answer:
        "Sí, priorizamos el uso de productos profesionales de alta calidad, seguros para las superficies, para las personas y respetuosos con el medio ambiente, garantizando resultados óptimos sin dañar los materiales.",
    },
  ],
  testimonials: [
    {
      stars: 5,
      text: "El equipo hizo un trabajo increíble. Nuestra casa quedó impecable después de la reforma, no quedó ni rastro de polvo.",
      name: "Ana S.",
      company: "Propietaria de vivienda",
      date: "10 Mayo 2024",
      initial: "A",
    },
    {
      stars: 5,
      text: "Contratamos para la limpieza de un local comercial tras una obra y superaron nuestras expectativas. Muy profesionales y rápidos.",
      name: "Roberto G.",
      company: "Dueño de Negocio",
      date: "28 Abril 2024",
      initial: "R",
    },
    {
      stars: 5,
      text: "La mejor decisión para la limpieza post-construcción. El personal fue muy detallista, dejando todo brillante.",
      name: "Elena V.",
      company: "Administradora de Fincas",
      date: "15 Marzo 2024",
      initial: "E",
    },
  ],
  galleryImages: [
    {
      src: "/limpieza-fin-obra-1.webp", // Imágenes adaptadas
      alt: "Limpieza profunda de suelos tras obra",
      width: 800,
      height: 600,
    },
    {
      src: "/limpieza-fin-obra-2.webp",
      alt: "Limpieza de cristales y ventanas en fin de obra",
      width: 400,
      height: 400,
    },
    {
      src: "/limpieza-fin-obra-3.webp",
      alt: "Eliminación de polvo y residuos de construcción",
      width: 400,
      height: 400,
    },
    {
      src: "/limpieza-fin-obra-4.webp",
      alt: "Equipo de limpieza fin de obra trabajando",
      width: 400,
      height: 400,
    },
  ],
  // ¡Añadido! Datos para los servicios relacionados
  relatedServices: [
    {
      title: "Limpieza de Hogares",
      image: "/images/limpieza-hogares.webp",
      link: "/servicios/limpieza-hogares",
    },
    {
      title: "Limpieza de Oficinas",
      image: "/images/limpieza-oficinas.webp",
      link: "/servicios/limpieza-oficinas",
    },
    {
      title: "Limpieza de Comunidades",
      image: "/images/limpieza-comunidades.webp",
      link: "/servicios/limpieza-comunidades",
    },
  ],
};

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
  );
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
  );
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
  );
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
                      href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20limpieza%20fin%20de%20obra" // Adaptado el mensaje de WhatsApp
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
                  &quot;Transformamos cualquier espacio post-obra en un lugar limpio, seguro y listo para su uso inmediato.&quot;
                </div>
                <p className="text-[#5a7184]">{serviceData.longDescription}</p>
                <ul className="space-y-3">
                  {[
                    "Eliminación de escombros pequeños y residuos de construcción",
                    "Limpieza y desincrustación de suelos y superficies",
                    "Limpieza a fondo de ventanas, cristales y marcos",
                    "Limpieza de baños y cocinas, incluyendo sanitarios y electrodomésticos",
                    "Retirada de manchas de pintura, yeso y cemento",
                    "Aspirado y fregado de todas las áreas",
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
                      src={validateImagePath("/limpieza-fin-obra-cristales.webp") || "/placeholder.svg"} // Adaptada imagen
                      alt="Limpieza fin de obra de cristales"
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/limpieza-fin-de-obra-equipo.webp") || "/placeholder.svg"} // Adaptada imagen
                      alt="Equipo de limpieza trabajando"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={validateImagePath("/limpieza-fin-obra-suelo.webp") || "/placeholder.svg"} // Adaptada imagen
                      alt="Suelo limpio tras obra"
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
                Nos especializamos en convertir espacios recién construidos o renovados en ambientes impecables y seguros.
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
                Así garantizamos un acabado perfecto
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Nuestro método de trabajo asegura una limpieza minuciosa y eficiente después de cualquier obra.
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
                Resolvemos tus dudas sobre limpieza fin de obra
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios post-construcción.
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
                La satisfacción de nuestros clientes lo dice todo
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Descubre por qué somos la elección número uno para la limpieza fin de obra.
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

        {
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Otros Servicios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Complementa tu limpieza
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Descubre otros servicios de limpieza profesional que podrían interesarte para mantener tus espacios impecables.
              </p>
            </div>
            <ServiciosRelacionados actualSlug="fin-de-obra" />
          </div>
        </section>
        }

        {/* CTA */}
        <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  ¿Listo para estrenar tu espacio sin rastro de obra?
                </h2>
                <p className="text-white/90 text-lg">
                  Solicita un presupuesto sin compromiso y deja en manos expertas la limpieza post-construcción.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20limpieza%20fin%20de%20obra" target="_blank" rel="noopener noreferrer">
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
  );
}