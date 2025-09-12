import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building, Eye, Users, Shield, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, Star, MessageCircle, Wrench, Zap } from "lucide-react";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import WhatsappFloating from "@/components/WhatsappFloating";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/StructuredData";
import { SERVICIOS } from "@/data/servicios";

const municipioData = {
  nombre: "Alameda de la Sagra",
  provincia: "Toledo",
  poblacion: "3.542",
  superficie: "20,4",
  codigoPostal: "45240",
  descripcion: "Servicios de telecomunicaciones profesionales en Alameda de la Sagra. Instalación, reparación y mantenimiento de antenas, porteros automáticos y sistemas de seguridad.",
  servicios: [
    "Instalación de antenas parabólicas",
    "Reparación de antenas TDT",
    "Instalación de porteros automáticos",
    "Sistemas de cámaras de seguridad",
    "Reparaciones urgentes",
    "Solución de interferencias 5G"
  ],
  serviciosDestacados: [
    "Antenas parabólicas",
    "Porteros automáticos",
    "Cámaras de seguridad"
  ],
  zonasCubiertas: [
    "Centro urbano",
    "Polígono industrial",
    "Urbanizaciones",
    "Zona rural"
  ],
  cobertura: [
    { zona: "Centro", disponible: true },
    { zona: "Polígono Industrial", disponible: true },
    { zona: "Urbanizaciones", disponible: true },
    { zona: "Zona Rural", disponible: true }
  ],
  testimonios: [
    {
      nombre: "María González",
      comentario: "Excelente servicio de instalación de antena parabólica. Muy profesionales y rápidos.",
      puntuacion: 5
    },
    {
      nombre: "Carlos Ruiz",
      comentario: "Solucionaron el problema de interferencias en mi portero automático. Muy recomendable.",
      puntuacion: 5
    },
    {
      nombre: "Ana Martín",
      comentario: "Instalación de cámaras de seguridad perfecta. Atención al cliente excepcional.",
      puntuacion: 5
    }
  ],
  caracteristicas: [
    {
      titulo: "Técnicos especializados",
      descripcion: "Equipo de profesionales con amplia experiencia en telecomunicaciones",
      icono: "Users"
    },
    {
      titulo: "Servicio 24/7",
      descripcion: "Disponibilidad completa para emergencias y reparaciones urgentes",
      icono: "Clock"
    },
    {
      titulo: "Garantía total",
      descripcion: "Garantía completa en todas nuestras instalaciones y reparaciones",
      icono: "Shield"
    },
    {
      titulo: "Presupuesto gratuito",
      descripcion: "Evaluación y presupuesto sin compromiso para todos nuestros servicios",
      icono: "CheckCircle"
    }
  ],
  faqs: [
    {
      question: "¿Qué servicios de telecomunicaciones ofrecen en Alameda de la Sagra?",
      answer: "Ofrecemos instalación y reparación de antenas parabólicas y TDT, porteros automáticos, cámaras de seguridad, y solución de interferencias 5G."
    },
    {
      question: "¿Tienen servicio de urgencias?",
      answer: "Sí, disponemos de servicio de reparaciones urgentes 24/7 para resolver cualquier incidencia en el menor tiempo posible."
    },
    {
      question: "¿Dan garantía en las instalaciones?",
      answer: "Todas nuestras instalaciones y reparaciones incluyen garantía completa. El tiempo de garantía varía según el tipo de servicio."
    },
    {
      question: "¿El presupuesto es gratuito?",
      answer: "Sí, realizamos evaluaciones y presupuestos completamente gratuitos y sin compromiso para todos nuestros servicios."
    }
  ]
};

export const metadata: Metadata = {
  title: `Antenistas ${municipioData.nombre} | Advanced Telecom`,
  description: `Servicios de telecomunicaciones en ${municipioData.nombre}. Antenas, porteros automáticos, cámaras de seguridad. Técnicos especializados.`,
  keywords: `telecomunicaciones ${municipioData.nombre}, antenas ${municipioData.nombre}, porteros automáticos ${municipioData.nombre}, cámaras seguridad ${municipioData.nombre}`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-alameda-de-la-sagra'
  },
  robots: {
    index: false,
    follow: false,
  },
};

const iconMap = {
  Building: Building,
  Eye: Eye,
  Users: Users,
  Shield: Shield,
  MapPin: MapPin,
  Phone: Phone,
  Mail: Mail,
  Clock: Clock,
  ArrowRight: ArrowRight,
  CheckCircle: CheckCircle,
  Star: Star,
  MessageCircle: MessageCircle,
  Wrench: Wrench,
  Zap: Zap,
  Satellite: MapPin,
  Tv: MapPin,
  Camera: MapPin,
  DoorOpen: MapPin,
  Wifi: MapPin,
  Briefcase: MapPin
};

const IconComponent = (iconName: string) => {
  const Icon = iconMap[iconName as keyof typeof iconMap];
  return Icon ? <Icon className="h-6 w-6" /> : <MapPin className="h-6 w-6" />;
};

export default function AlamedaDeLaSagraPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Alameda de la Sagra */}
          <section className="w-full bg-gradient-to-br from-brand-green/5 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  {/* Breadcrumb */}
                  <nav className="flex items-center space-x-2 text-sm text-brand-black-light">
                    <Link href="/" className="hover:text-brand-green transition-colors">Inicio</Link>
                    <span>/</span>
                    <Link href="/servicios" className="hover:text-brand-green transition-colors">Servicios</Link>
                    <span>/</span>
                    <span className="text-brand-green font-medium">Antenistas</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Servicios de <span className="text-brand-green">Antenistas</span> en Alameda de la Sagra
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Municipio histórico de La Sagra con tradición agrícola y crecimiento residencial. Especialistas en telecomunicaciones para el centro urbano, polígono industrial y zona rural. Técnicos especializados con cobertura completa en todo el término municipal.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar ahora
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Solicitar presupuesto
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  {/* Imagen principal */}
                  <div className=" mt-20 flex justify-center relative overflow-hidden rounded-xl ">
                    <Image
                      src="/images/telecom/antenistas-en-toledo-sur.jpg"
                      alt="Servicios de telecomunicaciones en Alameda de la Sagra - Municipio histórico de La Sagra"
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cobertura específica de Alameda de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en Alameda de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Servicio técnico especializado en todo el municipio, desde el centro urbano hasta la zona rural</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <Building className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en Alameda de la Sagra</h3>
                      <p className="text-brand-black-light">Especialistas en municipio histórico con tradición</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {municipioData.zonasCubiertas?.map((zona, index) => (
                      <div key={index} className="flex items-center p-4 bg-white/70 rounded-lg border border-green-100/50">
                        <CheckCircle className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" />
                        <span className="text-brand-black font-medium">{zona}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-brand-green/10 rounded-lg">
                    <div className="flex items-center text-brand-green font-medium">
                      <Clock className="h-5 w-5 mr-3" />
                      <span>Tiempo de respuesta en Alameda de la Sagra: Menos de 24 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Alameda de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicios de Telecomunicaciones en Alameda de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Ofrecemos servicios completos de instalación y reparación de sistemas de telecomunicaciones para hogares y empresas en Alameda de la Sagra.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICIOS.map((servicio, index) => (
                   <ServiceCard
                     key={index}
                     title={servicio.title}
                     description={servicio.description}
                     icon={servicio.iconName}
                     image={servicio.image}
                     slug={servicio.slug}
                   />
                 ))}
              </div>
            </div>
          </section>

          {/* Por qué elegir nuestros servicios en Alameda de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir nuestros servicios en Alameda de la Sagra?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Especialistas en el municipio histórico de La Sagra con técnicos especializados</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {municipioData.caracteristicas?.map((caracteristica, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="p-4 bg-brand-green/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      {IconComponent(caracteristica.icono)}
                    </div>
                    <h3 className="text-xl font-semibold text-brand-black mb-3">{caracteristica.titulo}</h3>
                    <p className="text-brand-black-light">{caracteristica.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonios de clientes en Alameda de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes satisfechos en Alameda de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de vecinos de Alameda de la Sagra que confían en nuestros servicios especializados</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {municipioData.testimonios?.map((testimonio, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonio.puntuacion)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-brand-black-light mb-4 italic">"{testimonio.comentario}"</p>
                    <div className="font-semibold text-brand-black">{testimonio.nombre}</div>
                    <div className="text-sm text-brand-black-light">Cliente en Alameda de la Sagra</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Alameda de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre servicios en Alameda de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos las dudas más comunes sobre telecomunicaciones en Alameda de la Sagra</p>
              </div>
              <div className="max-w-3xl mx-auto space-y-6">
                {municipioData.faqs?.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-brand-black mb-3">{faq.question}</h3>
                    <p className="text-brand-black-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section específica para Alameda de la Sagra */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas servicios de telecomunicaciones en Alameda de la Sagra?</h2>
                  <p className="text-xl mb-8 text-white/90">Municipio histórico de La Sagra. Contacta con nosotros para un presupuesto gratuito con técnicos especializados en toda la zona.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20quiero%20más%20información%20sobre%20servicios%20de%20telecomunicaciones%20en%20Alameda%20de%20la%20Sagra" className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
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
          </section>
        </main>

        <Footer />
        <WhatsappFloating />
      </div>
    </>
  );
}