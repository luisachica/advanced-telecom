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
  nombre: "Bargas",
  slug: "bargas",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45593",
  poblacion: "10.180",
  superficie: "18,3",
  descripcion: "Servicio de Antenista en Bargas. Instalación y reparación de antenas TDT, antenas colectivas, antenas parabólicas, porteros automáticos, vídeo-porteros y cámaras de vigilancia.",
  servicios: [
    "Instalación y reparación de antenas TDT en Bargas",
    "Antenas colectivas y parabólicas",
    "Porteros automáticos y vídeo-porteros homologados",
    "Cámaras de vigilancia y sistemas de seguridad",
    "Mantenimiento y reparación de antenas",
    "Orientación de antenas parabólicas"
  ],
   serviciosDestacados: [
    "No cobramos desplazamiento",
    "Antenistas homologados",
    "Más de 25 años de experiencia"
  ],

  zonasCubiertas: [
    "Las Perdices",
    "Valdelagua",
    "Santa Clara",
    "Ciudadela",
    "Vergel",
    "Los Altos De Bargas",
    "Los Nogales",
    "La Palma",
    "Entrepinos",
    "Los Olivos",
    "Italica",
    "Guindal",
    "Elviria",
    "Las Lomas",
    "Salamanca",
    "Acuario",
    "El Beato"
  ],

  cobertura: [
    { zona: "Las Perdices", disponible: true },
    { zona: "Valdelagua", disponible: true },
    { zona: "Santa Clara", disponible: true },
    { zona: "Ciudadela", disponible: true },
    { zona: "Vergel", disponible: true },
    { zona: "Los Altos De Bargas", disponible: true },
    { zona: "Los Nogales", disponible: true },
    { zona: "La Palma", disponible: true },
    { zona: "Entrepinos", disponible: true },
    { zona: "Los Olivos", disponible: true },
    { zona: "Italica", disponible: true },
    { zona: "Guindal", disponible: true },
    { zona: "Elviria", disponible: true },
    { zona: "Las Lomas", disponible: true },
    { zona: "Salamanca", disponible: true },
    { zona: "Acuario", disponible: true },
    { zona: "El Beato", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Ana García",
      comentario: "Excelente servicio de antenista en Bargas. No cobraron desplazamiento y el trabajo fue perfecto.",
      puntuacion: 5
    },
    {
      nombre: "Carlos Fernández",
      comentario: "Antenistas muy profesionales en Bargas. Repararon mi antena el mismo día que llamé.",
      puntuacion: 5
    },
    {
      nombre: "María José Ruiz",
      comentario: "Advanced Telecom tiene los mejores precios del sector. Muy recomendable en Bargas.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Sin Desplazamiento",
      descripcion: "No cobramos desplazamiento en Bargas y zonas cercanas",
      icono: "Home"
    },
    {
      titulo: "30 Años de Experiencia",
      descripcion: "Antenistas cualificados con registro en telecomunicaciones",
      icono: "Signal"
    },
    {
      titulo: "Actualizaciones Tecnológicas",
      descripcion: "Siempre atentos a las nuevas tecnologías como 5G",
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
      question: "¿Qué servicios de antenista ofrecen en Bargas?",
      answer: "Ofrecemos instalación y reparación de antenas TDT, antenas colectivas, parabólicas, porteros automáticos, vídeo-porteros y cámaras de vigilancia en Bargas."
    },
    {
      question: "¿Cobran desplazamiento en Bargas?",
      answer: "No, no cobramos desplazamiento en Bargas ni en las zonas que cubrimos como Mocejón, Yunclillos, Barcience y Rielves."
    },
    {
      question: "¿Qué experiencia tienen como antenistas?",
      answer: "Contamos con 20 años de experiencia en el sector y registro en telecomunicaciones que nos avala para ofrecer garantía total en nuestros trabajos."
    },
    {
      question: "¿En qué urbanizaciones de Bargas trabajan?",
      answer: "Trabajamos en Las Perdices, Valdelagua, Santa Clara, Ciudadela, Vergel, Los Altos De Bargas, Los Nogales, La Palma, Entrepinos, Los Olivos, Italica, Guindal, Elviria, Las Lomas, Salamanca, Acuario, El Beato."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Bargas | Advanced Telecom`,
  description: `Antenista en Bargas. Instalación y reparación de antenas TDT, antenas colectivas, parabólicas, porteros automáticos, vídeo-porteros y cámaras de vigilancia.`,
  keywords: `antenista Bargas, antenas TDT Bargas, porteros automáticos Bargas, sin desplazamiento, Advanced Telecom, Toledo`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-bargas'
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

export default function BargasPage() {
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
                    <span className="text-brand-green font-medium">Bargas</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en Bargas
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Servicio de Antenista en Bargas. Si estás buscando Instalación y reparación de antenas TDT, antenas colectivas, antenas parabólicas, porteros automáticos, vídeo-porteros y cámaras de vigilancia en Bargas, Advanced Telecom tiene todos los servicios que necesitas.
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

           {/* Cobertura específica de Bargas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Antenistas y porteros automáticos homologados en Bargas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tenemos a su disposición antenistas profesionales y cualificados en mantenimiento, reparación e instalación de todo tipo de antenas en las siguientes urbanizaciones: </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en Bargas</h3>
                      <p className="text-brand-black-light">Trabajamos también el servicio de antenista y video porteros en: Mocejón, Yunclillos, Barcience, Rielves.</p>
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

          {/* Servicios especializados en Bargas */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Los mejores precios del sector con Advanced Telecom en Bargas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">En Advanced Telecom nos caracterizamos por tener precios altamente competitivos, manteniendo la calidad en todos los servicios que ofrecemos. Puede solicitar que un técnico antenista o instalador de porteros automáticos se acerque a su vivienda para un mantenimiento, instalación o reparación.</p>
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

          {/* Por qué elegir nuestros servicios en Bargas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio de antenista en Bargas ágil y rápido</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Contamos con más de 25 años de experiencia en el sector de antenistas cualificados y el Registro en Telecomunicaciones de nuestra empresa, lo que nos avala para que disponga de una total garantía en todos los trabajos que realizamos. Desde el momento en que nos llame para solicitar un servicio de antenista en Bargas un técnico profesional se desplazará rápidamente a su vivienda.</p>
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

         {/* Estamos atentos a las actualizaciones tecnológicas */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Estamos atentos a las actualizaciones tecnológicas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">En nuestra empresa siempre estamos atentos a las actualizaciones tecnológicas, por tal motivo, nos capacitamos constantemente en las nuevas tecnologías que ingresan al mercado, como es el caso del próximo lanzamiento de la banda de telefonía móvil 5G. Nuestro servicio de antenista en Bargas es 100% garantizado y de alta calidad. Estamos equipados con las mejores herramientas para realizar un trabajo altamente profesional.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Bargas</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Bargas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en Bargas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Instalamos siempre los productos nuevos que existen en el mercado de las telecomunicaciones de tal forma, que usted como cliente, cuente con una instalación que dure a través del tiempo y garantizada.</p>
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

          {/* CTA Section específica para Bargas */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en Bargas?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Le atenderemos inmediatamente para reparar su avería o realizar la instalación que necesite en el menor tiempo posible. No cobramos desplazamiento.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Bargas" className="flex items-center gap-2">
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