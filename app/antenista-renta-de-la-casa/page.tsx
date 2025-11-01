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
  nombre: "Renta de la Casa",
  slug: "renta-de-la-casa",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28691",
  poblacion: "2.847",
  superficie: "47,8",
  descripcion: "Servicio de antenista profesional en la zona de Renta de la Casa. Especialistas en TDT y parabólicas para chalets. Presupuesto sin compromiso.",
  servicios: [
    "Instalación de antenas TDT en Renta de la Casa", 
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
    "Todas las calles y parcelas de Renta de la Casa",
    "Chalets individuales y viviendas unifamiliares",
    "Fincas y propiedades en el entorno cercano",
    "Atención dedicada en toda la urbanización"
    
  ],

  cobertura: [
    { zona: "Todas las calles y parcelas de Renta de la Casa", disponible: true },
    { zona: "Chalets individuales y viviendas unifamiliares", disponible: true },
    { zona: "Fincas y propiedades en el entorno cercano", disponible: true },
    { zona: "Atención dedicada en toda la urbanización", disponible: true }
  ],

  testimonios: [
  {
    "nombre": "Javier Torres",
    "comentario": "Servicio técnico impecable en Renta de la Casa. Vinieron el mismo día que los llamé y solucionaron el problema de señal en menos de una hora. Muy profesionales.",
    "puntuacion": 5
  },
  {
    "nombre": "Lucía Fernández",
    "comentario": "Tenía una instalación complicada y el técnico de Antenista Renta de la Casa lo resolvió de maravilla. Un trabajo limpio, rápido y a un precio justo. ¡Totalmente recomendados!",
    "puntuacion": 5
  },
  {
    "nombre": "Carlos Mendoza",
    "comentario": "El mejor servicio de antenista de la zona. Se nota la experiencia que tienen. La señal de TV ahora es perfecta en todas las habitaciones. Muy agradecido.",
    "puntuacion": 5
  }
],

   caracteristicas: [
  {
    titulo: "Antenista local especializado",
    descripcion: "Conocimiento específico de Renta de la Casa y sus necesidades técnicas.",
    icono: "Home"
  },
  {
    titulo: "Instalaciones de calidad",
    descripcion: "Equipos profesionales y técnicas avanzadas para una óptima recepción de señal.",
    icono: "Signal"
  },
  {
    titulo: "Atención personalizada",
    descripcion: "Servicio directo y soluciones adaptadas a cada hogar en Renta de la Casa.",
    icono: "Users"
  },
  {
    titulo: "Garantía profesional",
    descripcion: "Garantía completa en todas nuestras instalaciones y reparaciones.",
    icono: "Shield"
  }
],

  faqs: [
    {
      question: "Mi chalet tiene un tejado delicado, ¿tienen cuidado durante la instalación?",
      answer: "Por supuesto. Somos extremadamente cuidadosos con todo tipo de cubiertas. Realizamos las instalaciones con los anclajes y sellados adecuados para garantizar una fijación segura y totalmente estanca, sin dañar su tejado."
    },
    {
      question: "¿Es posible llevar la señal de TV a una zona exterior como un porche o un cenador?",
      answer: "Sí. Es una solicitud habitual en chalets. Realizamos la instalación del cableado de exterior y las tomas necesarias de forma segura y estética para que pueda disfrutar de la televisión al aire libre."
    },
    {
      question: "¿El presupuesto que ofrecen es gratuito?",
      answer: "Sí. El desplazamiento a su domicilio en Renta de la Casa para valorar el trabajo y ofrecerle un presupuesto detallado y sin compromiso es totalmente gratuito."
    },
    {
      question: "¿Qué garantía ofrecen en las reparaciones?",
      answer: "Todas nuestras reparaciones cuentan con la garantía legal que cubre tanto la mano de obra como los componentes que hayan sido sustituidos, quedando todo reflejado en su factura."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Renta de la Casa | Advanced Telecom`,
  description: `Servicio de antenista profesional en la zona de Renta de la Casa. Especialistas en TDT y parabólicas para chalets. Presupuesto sin compromiso.`,
  keywords: `antenista en Renta de la Casa, antenas TDT Renta de la Casa, instalación antenas Toledo, reparación antenas Renta de la Casa, telecomunicaciones Renta de la Casa`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-renta-de-la-casa'
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

export default function RentaDeLaCasaPage() {
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
                    <span className="text-brand-green font-medium"> Renta de la Casa</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Servicio de antenista</span> especialista en Renta de la Casa
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Le ofrecemos un servicio técnico de antenista especializado para los propietarios de viviendas en la zona residencial de Renta de la Casa. Con más de 25 años de experiencia, garantizamos soluciones a medida y de alta calidad para cualquier necesidad de telecomunicaciones en su chalet.
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

           {/* Cobertura específica de Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en toda la zona de Renta de la Casa</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo técnico se dedica a dar un servicio de proximidad y alta eficiencia, cubriendo la totalidad de esta área residencial.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en Renta de la Casa</h3>
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

          {/* Servicios especializados en Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones a medida para su chalet en Renta de la Casa</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Entendemos las particularidades de las viviendas de la zona y ofrecemos un catálogo de servicios diseñado para ellas.</p>
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

          {/* Por qué elegir nuestros servicios en Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir un especialista en Renta de la Casa?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra especialización en la zona es su mayor garantía de un trabajo eficiente y de máxima calidad.</p>
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

         {/* Testimonios de clientes en Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes satisfechos con nuestros servicios en Renta de la Casa</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de vecinos de Renta de la Casa que confían en nuestros servicios</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Aldea del Fresno</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre nuestros servicios</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos aquí las dudas más habituales de los residentes de la zona.</p>
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

          {/* CTA Section específica para Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista en Renta de la Casa</h2>
                  <p className="text-xl mb-8 text-white/90">Si reside en la zona de Renta de la Casa y desea solicitar un presupuesto o una intervención técnica, no dude en contactar con nosotros. Será un placer ofrecerle la mejor solución para su chalet.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Aldea%20del%20Fresno" className="flex items-center gap-2">
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