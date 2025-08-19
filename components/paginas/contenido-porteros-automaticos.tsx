"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Star, Phone, ArrowRight, Clock, Shield, Sparkles, Users, Wrench, ChevronDown, Lock } from "lucide-react";
import WhatsappFloating from "../WhatsappFloating";
// --- Importación de Componentes ---
import { Button } from "@/components/ui/button";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { ServiciosRelacionados } from "@/components/ServiciosRelacionados";
import { MunicipiosServicio } from "@/components/MunicipiosServicio";

// --- Mapeador de Íconos ---
const iconMap = { Sparkles, Users, Clock, Shield, Wrench, Check, Star, Phone, ArrowRight, ChevronDown, Lock };
const Icon = ({ name, ...props }: { name: keyof typeof iconMap; [key: string]: any }) => {
  const LucideIcon = iconMap[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

// --- Componentes Internos de la Página ---
function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between py-2">
          <h3 className="text-lg font-medium text-brand-black">{question}</h3>
          <span className="transition group-open:rotate-180">
            <Icon name="ChevronDown" className="h-5 w-5 text-brand-green" />
          </span>
        </summary>
        <div className="pb-4 pt-2 text-brand-black-light"><p>{answer}</p></div>
      </details>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white font-bold text-xl">{number}</div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-brand-black mb-2">{title}</h3>
        <p className="text-brand-black-light">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, iconName }: { title: string; description: string; iconName: keyof typeof iconMap }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-brand-green/10 p-3 rounded-full w-fit mb-4">
        <div className="text-brand-green"><Icon name={iconName} className="h-6 w-6" /></div>
      </div>
      <h3 className="text-xl font-bold text-brand-black mb-2">{title}</h3>
      <p className="text-brand-black-light">{description}</p>
    </div>
  );
}

const validateImagePath = (path: string | undefined | null): string => {
  return (!path || path.trim() === "") ? "/placeholder.svg" : path;
};

// ==================================================================
// COMPONENTE PRINCIPAL DE CONTENIDO
// ==================================================================
export default function ContenidoPorterosAutomaticos({ data: serviceData }: { data: any }) {
  const actualSlug = "porteros-automaticos";

  return (
    <div className="flex flex-col min-h-screen">
      <PhoneBanner />
      <MainNavigation services={[]} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-green-100/20"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Link href="/" className="text-brand-black-light hover:text-brand-green">Inicio</Link>
                  <span className="text-brand-black-light">/</span>
                  <Link href="/servicios" className="text-brand-black-light hover:text-brand-green">Servicios</Link>
                  <span className="text-brand-black-light">/</span>
                  <span className="text-brand-green font-medium">{serviceData.title}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">{serviceData.title}</h1>
                <p className="text-brand-black-light text-lg max-w-lg">{serviceData.shortDescription}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-8 py-6 relative z-30">
                    <a href="https://wa.me/34668838415?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20porteros%20autom%C3%A1ticos" target="_blank" rel="noopener noreferrer">Solicitar presupuesto</a>
                  </Button>
                  <Button asChild variant="outline" className="bg-white hover:bg-gray-50 text-brand-black border-brand-black rounded-full px-8 py-6 relative z-30">
                    <a href="tel:+34668838415" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" /> Llamar ahora
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/telecom/portero-automatico-instalacion-01.jpg"
                      alt="Instalación de porteros automáticos Fermax en Madrid"
                      width={600}
                      height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10">
                  <div className="bg-brand-green/10 rounded-full w-64 h-64 blur-3xl"></div>
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
                <div className="text-brand-green font-medium">Nuestro servicio</div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black leading-tight">Servicio profesional de {serviceData.title.toLowerCase()}</h2>
                <div className="border-l-4 border-brand-green pl-4 italic text-brand-black-light">"Ofrecemos soluciones profesionales para la instalación y reparación de porteros automáticos, garantizando la seguridad y comodidad en el acceso a su vivienda o comunidad."</div>
                <p className="text-brand-black-light">{serviceData.longDescription}</p>
                <ul className="space-y-3">
                  {["Instalación de porteros automáticos y videoporteros", "Reparación de averías en telefonillos y citófonos", "Actualización de sistemas antiguos a nuevas tecnologías", "Mantenimiento preventivo de instalaciones", "Integración con sistemas de seguridad", "Instalaciones para comunidades y viviendas unifamiliares"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-brand-black-light">
                      <div className="bg-brand-green/10 rounded-full p-1">
                        <Check className="h-4 w-4 text-brand-green" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-brand-black hover:bg-brand-black-light text-white rounded-full px-8 py-6 border-2 border-brand-black hover:border-brand-black-light">
                    <a href="https://wa.me/34668838415?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20porteros%20autom%C3%A1ticos" target="_blank" rel="noopener noreferrer">Solicitar presupuesto</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceData.features.map((feature: any, index: number) => (
                  <FeatureCard key={index} title={feature.title} description={feature.description} iconName={feature.iconName as keyof typeof iconMap} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de trabajo */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-brand-green/10 rounded-full mb-2">
                <span className="text-brand-green font-medium px-3 py-1">Nuestro proceso</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black leading-tight mt-4">
                Cómo trabajamos en <span className="text-brand-green">Advanced Telecom</span>
              </h2>
              <p className="text-brand-black-light text-lg max-w-2xl mx-auto mt-4">
                Nuestro método de trabajo está diseñado para ofrecerle un servicio eficiente, transparente y de máxima calidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {serviceData.process.map((step: any, index: number) => (
                <ProcessStep key={index} number={index + 1} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-brand-green/10 rounded-full mb-2">
                <span className="text-brand-green font-medium px-3 py-1">Preguntas frecuentes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black leading-tight mt-4">
                Resolvemos tus dudas sobre {serviceData.title.toLowerCase()}
              </h2>
              <p className="text-brand-black-light text-lg max-w-2xl mx-auto mt-4">
                Aquí encontrarás respuestas a las preguntas más comunes sobre nuestro servicio de {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {serviceData.faqs.map((faq: any, index: number) => (
                <FAQ key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Servicios relacionados */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-brand-green/10 rounded-full mb-2"><span className="text-brand-green font-medium px-3 py-1">Otros servicios</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black leading-tight mt-4">Servicios relacionados</h2>
              <p className="text-brand-black-light text-lg max-w-2xl mx-auto mt-4">Descubre otros servicios de telecomunicaciones que podrían interesarte.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.relatedServices.map((service: any, index: number) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={validateImagePath(service.image)}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-black mb-2">{service.title}</h3>
                    <div className="pt-4">
                      <Link href={service.link} className="inline-flex items-center text-brand-green hover:text-brand-green-dark font-medium">
                        Ver servicio <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-[#334155] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">¿Necesita instalar o reparar su portero automático?</h2>
                <p className="text-white/90 text-lg">
                  Contáctenos hoy mismo para obtener un presupuesto personalizado y sin compromiso para su instalación o reparación de porteros automáticos y videoporteros.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild className="bg-white hover:bg-gray-100 text-brand-black rounded-full px-8 py-6">
                    <a href="https://wa.me/34668838415?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20porteros%20autom%C3%A1ticos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-green-600">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                      Contactar por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                    <a href="tel:+34668838415" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" /> Llamar ahora
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

        {/* Municipios donde ofrecemos servicio */}
        <MunicipiosServicio 
          titulo="Servicio técnico de porteros automáticos en los siguientes municipios y urbanizaciones"
          descripcion="Ofrecemos instalación, reparación y mantenimiento de porteros automáticos en toda la Comunidad de Madrid y Toledo."
        />
      </main>
      <Footer />
      <WhatsappFloating />
    </div>
  );
}