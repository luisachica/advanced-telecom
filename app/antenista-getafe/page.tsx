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
  nombre: "Getafe",
  slug: "getafe",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28901",
  poblacion: "180.747",
  superficie: "78,7",
  descripcion: "Tu antenista de confianza en Getafe. Servicio rápido y profesional en todos los barrios con más de 25 años de experiencia en telecomunicaciones.",
  servicios: [
    "Antenas TDT: señal perfecta en tu piso",
    "Instalación de antenas parabólicas",
    "Videoporteros para comunidades",
    "Cámaras de seguridad (CCTV)",
    "Filtros 5G para edificios",
    "Reparaciones urgentes en la ciudad"
  ],
   serviciosDestacados: [
    "Servicio urgente en menos de 2 horas",
    "Especialistas en grandes comunidades",
    "Conocimiento total de Getafe"
  ],

  zonasCubiertas: [
    "Centro, San Isidro y Getafe Norte",
    "El Bercial y Los Molinos",
    "Sector III y Buenavista",
    "Juan de la Cierva y La Alhóndiga",
    "Polígonos industriales (Los Ángeles, San Marcos...)"
  ],

  cobertura: [
    { zona: "Centro, San Isidro y Getafe Norte", disponible: true },
    { zona: "El Bercial y Los Molinos", disponible: true },
    { zona: "Sector III y Buenavista", disponible: true },
    { zona: "Juan de la Cierva y La Alhóndiga", disponible: true },
    { zona: "Polígonos industriales (Los Ángeles, San Marcos...)", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Laura R.",
      comentario: "Vivimos en El Bercial y la señal de la TDT se nos iba constantemente. Les llamamos y el técnico fue súper profesional. Detectó el problema en la toma del salón y lo arregló al momento.",
      puntuacion: 5
    },
    {
      nombre: "Presidente de comunidad",
      comentario: "Gestionaron el cambio de todos los videoporteros de la comunidad en Juan de la Cierva y ha sido un acierto. Un trabajo muy coordinado y profesional.",
      puntuacion: 5
    },
    {
      nombre: "Javier F.",
      comentario: "Necesitaba instalar unas cámaras de seguridad en mi negocio en el Polígono Los Ángeles. Me asesoraron genial y la instalación fue rápida y muy limpia. Muy recomendables.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocemos Getafe a la perfección",
      descripcion: "Nuestros técnicos se mueven por la ciudad con agilidad, conocen cada barrio y saben cómo planificar las rutas para llegar antes a tu domicilio.",
      icono: "MapPin"
    },
    {
      titulo: "Experiencia en grandes comunidades",
      descripcion: "Estamos acostumbrados a trabajar en edificios de gran altura, con cientos de vecinos y con instalaciones comunitarias complejas. Ningún reto es demasiado grande.",
      icono: "Building"
    },
    {
      titulo: "Presupuestos ajustados y sin compromiso",
      descripcion: "Te ofrecemos precios muy competitivos para Getafe, con un presupuesto claro, detallado y sin sorpresas de última hora.",
      icono: "CheckCircle"
    },
    {
      titulo: "Garantía total en cada trabajo",
      descripcion: "Tanto si es una pequeña reparación en tu piso en Los Molinos como una gran instalación en el Sector III, te garantizamos todo nuestro trabajo por escrito.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Vivo en un piso de alquiler en Getafe, ¿puedo llamaros si falla la antena?",
      answer: "¡Claro! Si el problema es solo en tu piso (por ejemplo, una toma de antena rota), podemos repararlo directamente. Si sospechamos que es un problema de la antena comunitaria, te lo diremos para que puedas comunicárselo a tu casero o al administrador."
    },
    {
      question: "¿Instaláis antenas en edificios del centro de Getafe con normativas especiales?",
      answer: "Sí. Conocemos la normativa de protección del casco urbano y realizamos las instalaciones de la forma más discreta y respetuosa posible, cumpliendo siempre con la regulación vigente."
    },
    {
      question: "El administrador de mi finca nos pide varios presupuestos, ¿nos dais uno?",
      answer: "Por supuesto. Nos desplazamos, evaluamos el trabajo que necesita vuestra comunidad en Getafe y os preparamos un presupuesto detallado, competitivo y sin ningún compromiso para que podáis compararlo."
    },
    {
      question: "¿Cuánto tardáis en dar una cita para una reparación normal en Getafe?",
      answer: "Para averías no urgentes, solemos dar cita en un plazo máximo de 24 a 48 horas, siempre intentando adaptarnos a tu horario para que te venga lo mejor posible."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Getafe | Servicio Rápido en todos los Barrios`,
  description: `✅ Tu antenista en Getafe. Damos servicio urgente en El Bercial, Los Molinos, Sector 3... Soluciones TDT, parabólicas y comunidades. ¡Llama ahora!`,
  keywords: `antenista Getafe, antenas TDT Getafe, El Bercial, Los Molinos, Sector III, videoporteros Getafe, reparaciones urgentes Getafe, comunidades Getafe`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-getafe'
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

export default function GetafePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Getafe */}
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
                    <span className="text-brand-green font-medium">Getafe</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu servicio de <span className="text-brand-green">antenista profesional</span> en {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si vives en {municipioData.nombre} y buscas un antenista rápido, fiable y que conozca la ciudad como la palma de su mano, estás en el lugar correcto. Damos solución a cualquier problema con tu antena de TDT, parabólica o videoportero, tanto si vives en un piso como en un chalet, con la garantía de más de 25 años de experiencia.
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

           {/* Cobertura específica de Getafe */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Llegamos a todos los barrios de {municipioData.nombre}, sin excepción</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestros técnicos se mueven con agilidad por toda la ciudad para garantizarte una asistencia rápida y eficaz, vivas donde vivas.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra cobertura en {municipioData.nombre} incluye:</h3>
                      <p className="text-brand-black-light">Servicio urgente en {municipioData.nombre}: llegamos a tu casa en menos de 2 horas.</p>
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

          {/* Servicios especializados en Getafe */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicios de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones profesionales de telecomunicaciones adaptadas a las necesidades de la ciudad madrileña.</p>
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

          {/* Por qué elegir nuestros servicios en Getafe */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir nuestro antenista en {municipioData.nombre}?</h2>
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

         {/* Testimonios de clientes en Getafe */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes satisfechos con nuestro antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de vecinos de {municipioData.nombre} que confían en nuestros servicios</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en {municipioData.nombre}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Getafe */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos las dudas más comunes sobre nuestros servicios de antenista en la ciudad</p>
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

          {/* CTA Section específica para Getafe */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en {municipioData.nombre}?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Nos desplazamos a tu domicilio en {municipioData.nombre}.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Getafe" className="flex items-center gap-2">
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