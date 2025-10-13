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
  nombre: "Navalcarnero",
  slug: "navalcarnero",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28600",
  poblacion: "—",
  superficie: "—",
  descripcion:
    "Ofrecemos soluciones técnicas avanzadas de antenista para particulares, comunidades de propietarios y empresas en Navalcarnero. Con más de 25 años de trayectoria en el sector, garantizamos intervenciones rápidas y eficaces para cualquier necesidad de telecomunicaciones, combinando la máxima profesionalidad con un profundo conocimiento local.",
  servicios: [
    "Instalación y reparación de antenas TDT",
    "Instalación y orientación de antenas parabólicas",
    "Sistemas de videoportero y control de accesos",
    "Instalación de videovigilancia (CCTV)",
    "Solución a interferencias 5G",
    "Servicio de reparaciones urgentes"
  ],
  serviciosDestacados: [
    "Antenista TDT especializado",
    "Tecnología de diagnóstico avanzada",
    "Servicio técnico local"
  ],

  zonasCubiertas: [
    "El casco histórico y centro de Navalcarnero",
    "Barrios de El Pinar y San Andrés",
    "Nuevas urbanizaciones y zonas de chalets",
    "Fincas, bodegas y naves del término municipal"
  ],

  cobertura: [
    { zona: "El casco histórico y centro de Navalcarnero", disponible: true },
    { zona: "Barrios de El Pinar y San Andrés", disponible: true },
    { zona: "Nuevas urbanizaciones y zonas de chalets", disponible: true },
    { zona: "Fincas, bodegas y naves del término municipal", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Administrador de Fincas",
      comentario:
        "Contratamos sus servicios para renovar el sistema de videoportero de la comunidad y el resultado ha sido excelente. Muy profesionales, organizados y limpios en la ejecución.",
      puntuacion: 5
    },
    {
      nombre: "Propietario en el centro de Navalcarnero",
      comentario:
        "Vivo en una casa en el casco antiguo y la instalación era complicada. El técnico demostró una gran experiencia y solucionó el problema con mucho cuidado. Un servicio impecable.",
      puntuacion: 5
    },
    {
      nombre: "Residente en una urbanización",
      comentario:
        "Servicio rápido y eficaz. Tenía problemas de señal en mi chalet y lo solucionaron el mismo día. Se nota la profesionalidad y el conocimiento de la zona.",
      puntuacion: 5
    }
  ],

  caracteristicas: [
    {
      titulo: "1. Experiencia en Todo Tipo de Edificios",
      descripcion:
        "Nuestra larga trayectoria nos permite trabajar con la misma eficacia en edificios protegidos del casco histórico como en las modernas construcciones de las nuevas urbanizaciones de Navalcarnero.",
      icono: "Building"
    },
    {
      titulo: "2. Tecnología de Vanguardia",
      descripcion:
        "Invertimos constantemente en los equipos de diagnóstico y herramientas más avanzados del mercado para ofrecer un servicio preciso, eficiente y adaptado a las últimas tecnologías.",
      icono: "Eye"
    },
    {
      titulo: "3. Presupuestos Claros y Sin Compromiso",
      descripcion:
        "Le proporcionamos un presupuesto detallado y por escrito antes de iniciar cualquier trabajo. Máxima transparencia, garantizando que no habrá costes imprevistos.",
      icono: "Users"
    },
    {
      titulo: "4. Garantía Profesional en Todos los Servicios",
      descripcion:
        "Todos nuestros trabajos, desde una pequeña reparación hasta una instalación completa, están cubiertos por una garantía por escrito para su total seguridad y confianza.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question:
        "¿Tienen experiencia en la instalación de antenas en edificios protegidos del casco histórico?",
      answer:
        "Sí. Contamos con una amplia experiencia trabajando en edificios históricos. Realizamos las instalaciones de forma respetuosa con la normativa y la estética del inmueble, buscando siempre el mínimo impacto visual."
    },
    {
      question: "¿Qué incluye el presupuesto de una instalación de antena TDT?",
      answer:
        "Un presupuesto estándar incluye la antena, el mástil, los anclajes, el cableado exterior, la mano de obra y la puesta en marcha, asegurando una señal óptima en la toma principal de la vivienda. Cualquier elemento adicional se detalla aparte."
    },
    {
      question: "¿Ofrecen contratos de mantenimiento para comunidades de vecinos?",
      answer:
        "Por supuesto. Ofrecemos planes de mantenimiento preventivo para comunidades en Navalcarnero, diseñados para garantizar el correcto funcionamiento de la instalación durante todo el año y prevenir averías."
    },
    {
      question: "¿Cuánto tiempo de garantía tienen sus reparaciones?",
      answer:
        "Todas nuestras reparaciones cuentan con la garantía que estipula la ley"
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Navalcarnero | Advanced Telecom`,
  description:
    `Servicio de antenista profesional en Navalcarnero. Especialistas en TDT, parabólicas y videoporteros para chalets y comunidades. Garantía y presupuesto sin compromiso.`,
  keywords:
    `antenista Navalcarnero, antenas TDT Navalcarnero, instalación antenas Madrid, reparación antenas Navalcarnero, videoporteros Navalcarnero, telecomunicaciones Navalcarnero`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-navalcarnero'
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

export default function NavalcarneroPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Navalcarnero */}
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
                    <span className="text-brand-green font-medium">Navalcarnero</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en Navalcarnero
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Servicio de antenista profesional en Navalcarnero. Ofrecemos soluciones técnicas avanzadas para particulares, comunidades y empresas. Intervenciones rápidas y eficaces con máxima profesionalidad y profundo conocimiento local.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      Solicitar presupuesto
                    </Link>
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      <Phone className="h-5 w-5 mr-2" />
                      Contactar asistencia técnica
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  {/* Imagen principal */}
                  <div className=" mt-20 flex justify-center relative overflow-hidden rounded-xl ">
                    <Image
                      src="/images/telecom/antenistas-en-toledo-sur.jpg"
                      alt="Servicios de telecomunicaciones en Navalcarnero"
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

           {/* Cobertura integral en Navalcarnero: Centro y urbanizaciones */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura integral en Navalcarnero: Centro y urbanizaciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo técnico ofrece una cobertura completa en todo el término municipal, desde el centro histórico hasta los nuevos desarrollos residenciales.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en Navalcarnero incluye</h3>
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
                      <span>Servicio de urgencia con asistencia garantizada en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nuestro portafolio de servicios de telecomunicaciones */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestro portafolio de servicios de telecomunicaciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Disponemos de una gama completa de soluciones para asegurar el óptimo funcionamiento de sus sistemas de televisión, comunicación y seguridad.</p>
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

          {/* ¿Por qué somos su antenista de confianza en Navalcarnero? */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué somos su antenista de confianza en Navalcarnero?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra profesionalidad se fundamenta en la experiencia, la tecnología y un compromiso total con la satisfacción del cliente.</p>
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

         {/* La confianza de nuestros clientes en Navalcarnero */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de nuestros clientes en Navalcarnero</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de los vecinos y empresas del municipio es nuestra mejor carta de presentación.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Navalcarnero</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Preguntas frecuentes sobre nuestros servicios técnicos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre nuestros servicios técnicos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos aquí las dudas más habituales de nuestros clientes en Navalcarnero.</p>
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

          {/* CTA Section específica para Navalcarnero */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista en Navalcarnero</h2>
                  <p className="text-xl mb-8 text-white/90">Si desea solicitar un presupuesto, realizar una consulta o programar una visita técnica, no dude en ponerse en contacto con nosotros. Estaremos encantados de atenderle.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Navalcarnero" className="flex items-center gap-2">
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