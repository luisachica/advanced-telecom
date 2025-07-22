"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Star, Phone, ArrowRight, Clock, Shield, Sparkles, Users, ChevronDown, Wrench } from "lucide-react";
import WhatsappFloating from "../WhatsappFloating";
import { Button } from "@/components/ui/button";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { ServiciosRelacionados } from "@/components/ServiciosRelacionados";

// --- Mapeador de Íconos ---
const iconMap = { Sparkles, Users, Wrench, Shield, Check, Star, Phone, ArrowRight, Clock, ChevronDown };
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
          <h3 className="text-lg font-medium text-[#0a3b5c]">{question}</h3>
          <span className="transition group-open:rotate-180">
            <Icon name="ChevronDown" className="h-5 w-5 text-[#00b3d7]" />
          </span>
        </summary>
        <div className="pb-4 pt-2 text-[#5a7184]"><p>{answer}</p></div>
      </details>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00b3d7] text-white font-bold text-xl">{number}</div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">{title}</h3>
        <p className="text-[#5a7184]">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, iconName }: { title: string; description: string; iconName: keyof typeof iconMap }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-[#e8f7fa] p-3 rounded-full w-fit mb-4">
        <div className="text-[#00b3d7]"><Icon name={iconName} className="h-6 w-6" /></div>
      </div>
      <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">{title}</h3>
      <p className="text-[#5a7184]">{description}</p>
    </div>
  );
}

const validateImagePath = (path: string | undefined | null): string => {
  return (!path || path.trim() === "") ? "/placeholder.svg" : path;
};

// ==================================================================
// COMPONENTE PRINCIPAL DE CONTENIDO
// ==================================================================
export default function ContenidoLimpiezaCristales({ data: serviceData }: { data: any }) {
  const actualSlug = "limpieza-cristales";

  return (
    <div className="flex flex-col min-h-screen">
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
                  <Link href="/" className="text-[#5a7184] hover:text-[#00b3d7]">Inicio</Link>
                  <span className="text-[#5a7184]">/</span>
                  <Link href="/servicios" className="text-[#5a7184] hover:text-[#00b3d7]">Servicios</Link>
                  <span className="text-[#5a7184]">/</span>
                  <span className="text-[#00b3d7] font-medium">{serviceData.title}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b5c] leading-tight">{serviceData.title}</h1>
                <p className="text-[#5a7184] text-lg max-w-lg">{serviceData.shortDescription}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-6 relative z-30">
                    <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20limpieza%20de%20cristales" target="_blank" rel="noopener noreferrer">Solicitar presupuesto</a>
                  </Button>
                  <Button asChild variant="outline" className="bg-white hover:bg-gray-50 text-[#0a3b5c] border-[#0a3b5c] rounded-full px-8 py-6 relative z-30">
                    <a href="tel:611174552"><Phone className="mr-2 h-5 w-5" /> Llamar ahora</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <Image src={validateImagePath(serviceData.heroImage)} alt={serviceData.title} width={600} height={400} className="w-full h-auto object-cover" priority />
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a3b5c] leading-tight">Servicio profesional de {serviceData.title.toLowerCase()}</h2>
                <div className="border-l-4 border-[#00b3d7] pl-4 italic text-[#5a7184]">"Brindamos claridad y brillo a tus espacios con un servicio de limpieza de cristales sin igual, adaptado a tus necesidades específicas."</div>
                <p className="text-[#5a7184]">{serviceData.longDescription}</p>
                <ul className="space-y-3">
                  {["Limpieza de ventanas y ventanales", "Limpieza de escaparates y puertas de cristal", "Limpieza de mamparas de baño y divisiones de cristal", "Limpieza de espejos y superficies acristaladas", "Eliminación de manchas de cal, suciedad y residuos", "Limpieza de cristales en altura (con equipo especializado)"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#5a7184]">
                      <div className="bg-[#e8f7fa] rounded-full p-1"><Check className="h-4 w-4 text-[#00b3d7]" /></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-md"><Image src={validateImagePath("/images/limpieza-cristales-interior.webp")} alt="Limpieza de cristales en interiores" width={300} height={400} className="w-full h-auto object-cover" /></div>
                  <div className="rounded-2xl overflow-hidden shadow-md"><Image src={validateImagePath("/images/limpieza-cristales-altura.webp")} alt="Limpiador profesional de cristales" width={300} height={200} className="w-full h-auto object-cover" /></div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-md"><Image src={validateImagePath("/images/limpieza-cristales-en-madrid.webp")} alt="Servicio de limpieza de cristales" width={300} height={500} className="w-full h-auto object-cover" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características del servicio */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2"><span className="text-[#00b3d7] font-medium px-3 py-1">Características</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">¿Por qué elegir nuestro servicio de <span className="text-[#00b3d7]">{serviceData.title.toLowerCase()}</span>?</h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">Nuestro servicio se distingue por su calidad, profesionalidad y atención al detalle, garantizando cristales relucientes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceData.features.map((feature: any, index: number) => (<FeatureCard key={index} title={feature.title} description={feature.description} iconName={feature.iconName} />))}
            </div>
          </div>
        </section>

        {/* Proceso de trabajo */}
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
           <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2"><span className="text-[#00b3d7] font-medium px-3 py-1">Nuestro proceso</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">¿Cómo trabajamos?</h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">Seguimos un proceso estructurado para garantizar un servicio de calidad y cristales impecables.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {serviceData.process.map((step: any, index: number) => (<ProcessStep key={index} number={index + 1} title={step.title} description={step.description} />))}
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2"><span className="text-[#00b3d7] font-medium px-3 py-1">Preguntas frecuentes</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">Resolvemos tus dudas</h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">Aquí encontrarás respuestas a las preguntas más comunes sobre nuestro servicio de {serviceData.title.toLowerCase()}.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                {serviceData.faqs.map((faq: any, index: number) => (<FAQ key={index} question={faq.question} answer={faq.answer} />))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2"><span className="text-[#00b3d7] font-medium px-3 py-1">Testimonios</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">Lo que dicen nuestros clientes</h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">Descubre por qué nuestros clientes confían en nuestro servicio de {serviceData.title.toLowerCase()}.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {serviceData.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-[#00b3d7] h-full flex flex-col transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-xl">
                    <div className="flex mb-4">{Array.from({ length: testimonial.stars }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-[#8ed1b7] text-[#8ed1b7]" />))}</div>
                    <p className="text-[#5a7184] mb-6 flex-grow">{`"${testimonial.text}"`}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-[#e8f7fa] text-[#00b3d7] flex items-center justify-center font-bold text-lg">{testimonial.initial}</div>
                      <div>
                        <div className="font-medium text-[#0a3b5c]">{testimonial.name}</div>
                        <div className="text-xs text-[#5a7184]">{testimonial.company} • {testimonial.date}</div>
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
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2"><span className="text-[#00b3d7] font-medium px-3 py-1">Otros servicios</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">Servicios relacionados</h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">Descubre otros servicios de limpieza profesional que podrían interesarte.</p>
            </div>
            <ServiciosRelacionados actualSlug={actualSlug} />
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">¿Listo para disfrutar de cristales impecables?</h2>
                <p className="text-white/90 text-lg">Solicita un presupuesto sin compromiso y descubre cómo nuestro servicio de {serviceData.title.toLowerCase()} puede transformar la claridad de tu espacio.</p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <Button asChild className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px]">
                    <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20limpieza%20de%20cristales"><ArrowRight className="mr-2 h-5 w-5" /> Solicitar presupuesto ahora</a>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                    <a href="tel:611174552"><Phone className="mr-2 h-5 w-5" /> Llamar: 611 174 552</a>
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
        <WhatsappFloating />
      </main>
      <Footer />
    </div>
  );
}