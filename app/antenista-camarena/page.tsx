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
  nombre: "Camarena",
  slug: "aldea-del-fresno",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28691",
  poblacion: "2.847",
  superficie: "47,8",
  descripcion: "Con más de dos décadas de servicio en Camarena, nuestro equipo técnico le ofrece una experiencia inigualable. Somos los especialistas de referencia para instalar o reparar tu antena TDT, parabólica, videoportero o circuito de cámaras de seguridad (CCTV) en cualquier punto de esta localidad toledana.",
  servicios: [
    "Instalación de antenas TDT en Camarena",
    "Antenas parabólicas para zonas residenciales",
    "Porteros automáticos y videoporteros",
    "Sistemas de videovigilancia CCTV",
    "Amplificadores de señal digital",
    "Mantenimiento técnico especializado"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones residenciales",
    "Servicio técnico local"
  ],

  zonasCubiertas: [
    "Centro histórico y casco antiguo",
    "Nuevas zonas residenciales",
    "Polígono industrial",
    "Todas las urbanizaciones",
    "Fincas y viviendas rurales"
  ],

  cobertura: [
    { zona: "Casco urbano", disponible: true },
    { zona: "Zona residencial", disponible: true },
    { zona: "Área industrial", disponible: true },
    { zona: "Urbanizaciones", disponible: true },
    { zona: "Viviendas aisladas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Carlos G.",
      comentario: "Unos profesionales de los pies a la cabeza. Me solucionaron el problema con la antena de TDT en mi chalet de Camarena el mismo día que les llamé. Impecable.",
      puntuacion: 5
    },
    {
      nombre: "Lucía M.",
      comentario: "Contraté la instalación de un videoportero para la comunidad y todo perfecto. El antenista fue muy amable y el resultado final, de diez. Muy recomendables en Camarena.",
      puntuacion: 5
    },
    {
      nombre: "Antonio R.",
      comentario: "Servicio rápido y a un precio justo. Se nota que conocen bien la zona de Camarena. Por fin vemos todos los canales sin cortes.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Antenista local especializado",
      descripcion: "Conocimiento específico de Camarena y tus necesidades técnicas",
      icono: "Home"
    },
    {
      titulo: "Instalaciones de calidad",
      descripcion: "Equipos profesionales y técnicas avanzadas para óptima recepción",
      icono: "Signal"
    },
    {
      titulo: "Atención personalizada",
      descripcion: "Servicio directo y soluciones adaptadas a cada hogar en Camarena",
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
      pregunta: "¿Qué trabajos de antenista realizan en Camarena?",
      respuesta: "Nuestro equipo en Camarena se especializa en todo lo relacionado con TDT, satélite, porteros automáticos y videovigilancia, tanto para clientes particulares como para comunidades y empresas."
    },
    {
      pregunta: "¿Qué distingue a un buen antenista en Camarena?",
      respuesta: "La experiencia local es clave. Con más de 25 años en Camarena, conocemos los desafíos de la señal en la zona y garantizamos resultados donde otros no llegan."
    },
    {
      pregunta: "¿Pueden mejorar la señal de TDT en una vivienda de Camarena?",
      respuesta: "Por supuesto. Es una de nuestras especialidades. Analizamos tu instalación actual y aplicamos las mejoras necesarias (amplificadores, reorientación, nuevo cableado) para lograr una señal potente y estable."
    },
    {
      pregunta: "¿Qué presupuesto tiene un servicio de antenista en Camarena?",
      respuesta: "Cada caso es diferente. Por eso, como tus antenistas de confianza en Camarena, le ofrecemos un presupuesto detallado y sin ningún tipo de compromiso antes de realizar cualquier trabajo."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Camarena | Advanced Telecom`,
  description: `Antenistas en Camarena. Servicio técnico en TDT, satélite, porteros automáticos, video porteros y cámaras de seguridad. ¡Solución profesional!`,
  keywords: `antenista Camarena, antenas TDT Camarena, instalación antenas Toledo, reparación antenas Camarena, telecomunicaciones Camarena`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-en-aldea-del-fresno'
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

export default function AldeaDelFresnoPage() {
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
                    <span className="text-brand-green font-medium">{municipioData.nombre}</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      {municipioData.descripcion}
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

           {/* Cobertura específica de {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura integral de antenista en todo {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra capacidad logística nos permite garantizar asistencia técnica profesional en cada rincón del municipio.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Áreas de servicio en {municipioData.nombre}</h3>
                      <p className="text-brand-black-light">Llegamos a todo el término municipal con la máxima rapidez.</p>
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
                      <span>Disponibilidad urgente: asistencia en menos de 2 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Catálogo de servicios de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Ofrecemos un abanico completo de soluciones en telecomunicaciones, pensadas para las particularidades de {municipioData.nombre}.</p>
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

          {/* Por qué elegir nuestros servicios en {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué somos tu antenista de referencia en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra reputación se basa en la confianza, la eficacia y el profundo conocimiento local.</p>
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

         {/* Testimonios de clientes en {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La opinión de nuestros clientes en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de nuestros vecinos es nuestro mejor aval.</p>
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
                    <div className="text-sm text-brand-black-light">Vecino de {municipioData.nombre}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Dudas frecuentes sobre antenistas en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí respondemos a las consultas más habituales de nuestros clientes en la localidad.</p>
              </div>
              <div className="max-w-3xl mx-auto space-y-6">
                {municipioData.faqs?.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-brand-black mb-3">{faq.pregunta}</h3>
                    <p className="text-brand-black-light">{faq.respuesta}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section específica para {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos? Contacta con tu antenista en {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">Si busca una solución eficaz y garantizada, llámenos. Le daremos un presupuesto gratuito y nos desplazaremos a tu domicilio en {municipioData.nombre} para resolver tu necesidad.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href={`https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20${municipioData.nombre}`} className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Enviar un whatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                      <a href="tel:+34668838415" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" /> Llamar directamente
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