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

// Datos específicos del municipio
const municipioData = {
  nombre: "Villanueva de la Sagra",
  slug: "villanueva-de-la-sagra",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45520",
  poblacion: "3.456",
  superficie: "32,1",
  descripcion: "Antenista profesional en Villanueva de la Sagra especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio toledano de La Sagra.",
  servicios: [
    "Instalación de antenas TDT en Villanueva de la Sagra",
    "Antenas parabólicas para nuevas construcciones",
    "Porteros automáticos digitales",
    "Sistemas de videovigilancia empresarial",
    "Amplificadores de señal para zonas rurales",
    "Mantenimiento técnico preventivo"
  ],
   serviciosDestacados: [
    "Especialistas en La Sagra",
    "Cobertura completa en Villanueva",
    "Servicio técnico de proximidad"
  ],

  zonasCubiertas: [
    "Centro de Villanueva de la Sagra",
    "Nuevas urbanizaciones",
    "Zona industrial",
    "Área residencial consolidada",
    "Viviendas rurales"
  ],

  cobertura: [
    { zona: "Centro de Villanueva de la Sagra", disponible: true },
    { zona: "Nuevas urbanizaciones", disponible: true },
    { zona: "Zona industrial", disponible: true },
    { zona: "Área residencial consolidada", disponible: true },
    { zona: "Viviendas rurales", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Francisco Jiménez",
      comentario: "Excelente antenista en Villanueva de la Sagra. Instalación perfecta en nuestra nueva vivienda.",
      puntuacion: 5
    },
    {
      nombre: "María Carmen Ruiz",
      comentario: "Servicio técnico de calidad. Solucionaron problemas de señal en toda la urbanización.",
      puntuacion: 5
    },
    {
      nombre: "José Luis Fernández",
      comentario: "Antenistas muy profesionales en Villanueva de la Sagra. Trabajo garantizado y precios justos.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Especialistas en La Sagra",
      descripcion: "Conocimiento profundo de Villanueva de la Sagra y sus características de recepción",
      icono: "Users"
    },
    {
      titulo: "Tecnología avanzada",
      descripcion: "Equipos de última generación para nuevas construcciones y zonas rurales",
      icono: "Zap"
    },
    {
      titulo: "Servicio de proximidad",
      descripcion: "Atención rápida y personalizada para todos los vecinos de Villanueva de la Sagra",
      icono: "Clock"
    },
    {
      titulo: "Garantía total",
      descripcion: "Garantía completa en instalaciones y mantenimiento preventivo",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué servicios de antenista ofrecen en Villanueva de la Sagra?",
      answer: "En Villanueva de la Sagra ofrecemos instalación y reparación de antenas TDT, parabólicas, porteros automáticos digitales y sistemas de videovigilancia. Especialistas en nuevas construcciones y zonas rurales."
    },
    {
      question: "¿Cuál es el mejor antenista en Villanueva de la Sagra?",
      answer: "Somos especialistas en telecomunicaciones con amplia experiencia en Villanueva de la Sagra y La Sagra. Ofrecemos servicio técnico de proximidad, tecnología avanzada y garantía total."
    },
    {
      question: "¿Realizan instalaciones en las nuevas construcciones de Villanueva de la Sagra?",
      answer: "Sí, somos especialistas en instalaciones para las nuevas construcciones de Villanueva de la Sagra. Utilizamos equipos de última generación adaptados al crecimiento del municipio."
    },
    {
      question: "¿Cuánto cuesta un antenista en Villanueva de la Sagra?",
      answer: "Los precios varían según el tipo de instalación. Ofrecemos presupuestos gratuitos y precios competitivos para todos los vecinos de Villanueva de la Sagra, sin comprometer la calidad del servicio."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenistas Villanueva de la Sagra | Advanced Telecom`,
  description: `Antenistas en Villanueva de la Sagra especializados en nuevas construcciones. Servicio técnico en TDT, satélite, porteros automáticos y cámaras de seguridad. ¡Solución profesional!`,
  keywords: `antenista Villanueva de la Sagra, antenas TDT Villanueva de la Sagra, instalación antenas Toledo, reparación antenas La Sagra, telecomunicaciones Villanueva de la Sagra, nuevas construcciones`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-villanueva-de-la-sagra'
  },
  robots: {
    index: true,
    follow: true,
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

export default function VillanuevaDeLaSagraPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Torrecastillo */}
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
                    <span className="text-brand-green font-medium">Villanueva de la Sagra</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en Villanueva de la Sagra
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Antenista profesional en Villanueva de la Sagra con más de 25 años de experiencia. Especialistas en instalación y reparación de antenas TDT, parabólicas, porteros automáticos y sistemas de videovigilancia. Servicio técnico garantizado en todo el municipio toledano.
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

           {/* Cobertura específica de Villanueva de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Antenista con cobertura completa en Villanueva de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Servicio técnico profesional disponible en todo el municipio madrileño</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en Villanueva de la Sagra</h3>
                      <p className="text-brand-black-light">Antenista profesional en todo el municipio</p>
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
                      <span>Tiempo de respuesta: Menos de 2 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Villanueva de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicios de antenista en Villanueva de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones profesionales de telecomunicaciones adaptadas a las necesidades del municipio madrileño.</p>
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

          {/* Por qué elegir nuestros servicios en Villanueva de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir nuestro antenista en Villanueva de la Sagra?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Experiencia local, calidad profesional y compromiso con cada instalación</p>
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

         {/* Testimonios de clientes en Villanueva de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes satisfechos con nuestro antenista en Villanueva de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de vecinos de Villanueva de la Sagra que confían en nuestros servicios</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Villanueva de la Sagra</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Villanueva de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en Villanueva de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos las dudas más comunes sobre nuestros servicios de antenista en el municipio</p>
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

          {/* CTA Section específica para Villanueva de la Sagra */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en Villanueva de la Sagra?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Nos desplazamos a tu domicilio en Villanueva de la Sagra.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Villanueva%20de%20la%20Sagra" className="flex items-center gap-2">
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