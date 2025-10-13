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
  nombre: "Pinar de Villeriche",
  slug: "pinar-de-villeriche",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28691",
  poblacion: "2.847",
  superficie: "47,8",
  descripcion: "Antenista profesional en Pinar de Villeriche especializado en instalaciones de telecomunicaciones para chalets y urbanización. Servicio técnico rápido y garantizado.",
  servicios: [
    "Instalación de antenas TDT en Pinar de Villeriche",
    "Antenas parabólicas HD para chalets",
    "Porteros automáticos y videoporteros",
    "Sistemas de videovigilancia CCTV en la urbanización",
    "Mejora de señal de TV y amplificadores",
    "Mantenimiento técnico especializado"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones en chalets y urbanización",
    "Servicio técnico local"
  ],

  zonasCubiertas: [
    "Zonas de chalets",
    "Viviendas unifamiliares",
    "Áreas comunes",
    "Accesos y viales",
    "Perímetro de la urbanización"
  ],

  cobertura: [
    { zona: "Zonas de chalets", disponible: true },
    { zona: "Viviendas unifamiliares", disponible: true },
    { zona: "Áreas comunes", disponible: true },
    { zona: "Accesos y viales", disponible: true },
    { zona: "Perímetro de la urbanización", disponible: true }
  ],

  testimonios: [
    {
      nombre: "María G.",
      comentario: "Instalaron la TDT y ajustaron la parabólica en nuestro chalet de Pinar de Villeriche. Señal perfecta y trato excelente.",
      puntuacion: 5
    },
    {
      nombre: "Álvaro R.",
      comentario: "Muy rápidos. Teníamos cortes de TV y lo solucionaron con un amplificador y nueva distribución. 100% recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Celia M.",
      comentario: "Nos instalaron videoportero y cámaras en la vivienda. Trabajo limpio y profesional.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Antenista local especializado",
      descripcion: "Conocimiento específico de Pinar de Villeriche y necesidades de la urbanización",
      icono: "Home"
    },
    {
      titulo: "Instalaciones de calidad",
      descripcion: "Equipos profesionales y técnicas avanzadas para óptima recepción",
      icono: "Signal"
    },
    {
      titulo: "Atención personalizada",
      descripcion: "Soluciones adaptadas a cada chalet y vivienda unifamiliar",
      icono: "Users"
    },
    {
      titulo: "Garantía profesional",
      descripcion: "Garantía completa en todas nuestras instalaciones y reparaciones",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué servicios de antenista ofrecen en Pinar de Villeriche?",
      answer: "Instalación y reparación de antenas TDT y satélite, videoporteros, cámaras y mejora de señal en chalets de Pinar de Villeriche, con garantía completa."
    },
    {
      question: "¿Tenéis servicio urgente en Pinar de Villeriche?",
      answer: "Sí. Ofrecemos tiempos de respuesta rápidos en la urbanización, normalmente en menos de 2 horas."
    },
    {
      question: "¿Instaláis videoporteros y cámaras en la urbanización?",
      answer: "Sí, somos especialistas en videoporteros y CCTV para viviendas unifamiliares, con instalación limpia y configuración completa."
    },
    {
      question: "¿Cuánto cuesta un antenista en Pinar de Villeriche?",
      answer: "Depende del servicio y complejidad. Realizamos presupuestos gratuitos y precios competitivos, siempre con materiales de calidad."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Pinar de Villeriche | Advance Telecom`,
  description: `Antenista en Pinar de Villeriche para chalets y urbanización. Instalación y reparación de antenas TDT y satélite, videoporteros, cámaras y mejora de señal.`,
  keywords: `antenista Pinar de Villeriche, antenas TDT Pinar de Villeriche, instalación antenas Madrid, reparación antenas Pinar de Villeriche, telecomunicaciones Pinar de Villeriche`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-pinar-de-villeriche'
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

export default function PinarDeVillerichePage() {
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
                    <span className="text-brand-green font-medium">Pinar de Villeriche</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en Pinar de Villeriche
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Antenista profesional en Aldea del Fresno con más de 25 años de experiencia. Especialistas en instalación y reparación de antenas TDT, parabólicas, porteros automáticos y sistemas de videovigilancia. Servicio técnico garantizado en todo el municipio madrileño.
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
                      alt="Servicios de telecomunicaciones en Pinar de Villeriche"
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

           {/* Cobertura específica de Pinar de Villeriche */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Antenista con cobertura completa en Pinar de Villeriche</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Servicio técnico profesional disponible en todo el municipio madrileño</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en Pinar de Villeriche</h3>
                      <p className="text-brand-black-light">Antenista profesional en toda la urbanización</p>
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

          {/* Servicios especializados en Pinar de Villeriche */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicios de antenista en Pinar de Villeriche</h2>
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

          {/* Por qué elegir nuestros servicios en Pinar de Villeriche */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir nuestro antenista en Pinar de Villeriche?</h2>
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

         {/* Testimonios de clientes en Pinar de Villeriche */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes satisfechos con nuestro antenista en Pinar de Villeriche</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de vecinos de Aldea del Fresno que confían en nuestros servicios</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Pinar de Villeriche</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Pinar de Villeriche */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en Pinar de Villeriche</h2>
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

          {/* CTA Section específica para Pinar de Villeriche */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en Pinar de Villeriche?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Nos desplazamos a tu domicilio en Pinar de Villeriche.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Pinar%20de%20Villeriche" className="flex items-center gap-2">
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