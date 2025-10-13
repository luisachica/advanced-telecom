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

// Datos especificos del municipio
const municipioData = {
  nombre: "Recas",
  slug: "recas",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45211",
  poblacion: "2.847",
  superficie: "47,8",
  descripcion: "Antenista profesional en Recas especializado en instalaciones de telecomunicaciones. Servicios t\u00E9cnicos de calidad para este municipio toledano.",
  servicios: [
    "Instalaci\u00F3n de antenas TDT en Recas",
    "Antenas parab\u00F3licas para zonas residenciales",
    "Porteros autom\u00E1ticos y videoporteros",
    "Sistemas de videovigilancia CCTV",
    "Amplificadores de se\u00F1al digital",
    "Mantenimiento t\u00E9cnico especializado"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones residenciales",
    "Servicio t\u00E9cnico local"
  ],

  zonasCubiertas: [
    "Casco urbano",
    "Zona residencial",
    "Área industrial",
    "Urbanizaciones",
    "Viviendas aisladas"
  ],

  cobertura: [
    { zona: "Casco urbano", disponible: true },
    { zona: "Zona residencial", disponible: true },
    { zona: "\u00C1rea industrial", disponible: true },
    { zona: "Urbanizaciones", disponible: true },
    { zona: "Viviendas aisladas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Carmen L\u00F3pez",
      comentario: "El mejor antenista de Recas. Instalaci\u00F3n perfecta y muy profesional.",
      puntuacion: 5
    },
    {
      nombre: "Miguel \u00C1ngel Ruiz",
      comentario: "Servicio t\u00E9cnico excelente. Resolvieron todos nuestros problemas de se\u00F1al.",
      puntuacion: 5
    },
    {
      nombre: "Isabel Mart\u00EDnez",
      comentario: "Antenista muy recomendable en Recas. Trabajo impecable y garantizado.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Antenista local especializado",
      descripcion: "Conocimiento espec\u00EDfico de Recas y sus necesidades t\u00E9cnicas",
      icono: "Home"
    },
    {
      titulo: "Instalaciones de calidad",
      descripcion: "Equipos profesionales y t\u00E9cnicas avanzadas para recepci\u00F3n \u00F3ptima",
      icono: "Signal"
    },
    {
      titulo: "Atenci\u00F3n personalizada",
      descripcion: "Servicio directo y soluciones adaptadas a cada hogar en Recas",
      icono: "Users"
    },
    {
      titulo: "Garant\u00EDa profesional",
      descripcion: "Garant\u00EDa completa en todas nuestras instalaciones y reparaciones",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué servicios de antenista ofrecen en Recas?",
      answer: "Como antenista especializado en Recas, ofrecemos instalaci\u00F3n y reparaci\u00F3n de antenas TDT, parab\u00F3licas, porteros autom\u00E1ticos y sistemas de videovigilancia con garant\u00EDa completa."
    },
    {
      question: "¿Cuál es el mejor antenista en Recas?",
      answer: "Somos antenistas profesionales con más de 25 años de experiencia en Recas. Ofrecemos servicio técnico especializado, garantía y atención personalizada."
    },
    {
      question: "¿Realizan instalaciones de antenas TDT en Recas?",
      answer: "S\\u00ED, somos especialistas en instalaciones de antenas TDT en Recas. Utilizamos equipos de alta calidad y ofrecemos garant\\u00EDa en todas nuestras instalaciones."
    },
    {
      question: "¿Cuánto cuesta un antenista en Recas?",
      answer: "Los precios var\\u00EDan seg\\u00FAn el tipo de instalaci\\u00F3n. Como antenista local en Recas, ofrecemos presupuestos gratuitos y precios competitivos sin comprometer la calidad."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Recas | Advanced Telecom`,
  description: `Servicio de antenista profesional en Recas. Damos soluciones de TDT, parabólicas y videoporteros en su casa o comunidad. Presupuesto sin compromiso.`,
  keywords: `antenista Recas, antenas TDT Recas, instalación antenas Recas, reparación antenas Recas, telecomunicaciones Recas`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-recas'
  },
  robots: { index: true, follow: true, },
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

// Catálogo específico de servicios para Recas
const serviciosRecasSlugs = [
  "antenas-tdt",
  "antenas-parabolicas",
  "porteros-automaticos",
  "camaras-seguridad",
  "solucion-interferencias-5g",
  "reparaciones-urgentes",
];
const serviciosRecas = SERVICIOS.filter((s) => serviciosRecasSlugs.includes(s.slug));

export default function RecasPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section especifico de Torrecastillo */}
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
                    <span className="text-brand-green font-medium">Recas</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en Recas
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Antenista profesional en Recas con más de 25 anos de experiencia. Especialistas en instalación y reparación de antenas TDT, parabólicas, porteros automáticos y sistemas de videovigilancia. Servicio tecnico garantizado en todo el municipio madrileno.
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
                      alt="Servicios de telecomunicaciones en Alameda de la Sagra - Municipio de Toledo"
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

           {/* Cobertura especifica de Recas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Antenista con cobertura completa en Recas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">{"Servicio técnico profesional disponible en todo el municipio toledano"}</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en Recas</h3>
                      <p className="text-brand-black-light">Antenista profesional en toda la localidad</p>
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
                      <span>Servicio de urgencia con asistencia garantizada en menos de 2 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Recas */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicios de antenista en Recas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones profesionales de telecomunicaciones {"Soluciones profesionales de telecomunicaciones adaptadas a las necesidades del municipio toledano."}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviciosRecas.map((servicio, index) => (
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

          {/* Por que elegir nuestros servicios en Recas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">{"¿Por qué elegir nuestro antenista en Recas?"}</h2>
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

         {/* Testimonios de clientes en Recas */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes satisfechos con nuestro antenista en Recas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de vecinos de Recas que confian en nuestros servicios</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Recas</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs especificas de Recas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en Recas</h2>
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

          {/* CTA Section especifica para Recas */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{"¿Necesitas un antenista en Recas?"}</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Nos desplazamos a tu domicilio en Recas.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Recas" className="flex items-center gap-2">
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



