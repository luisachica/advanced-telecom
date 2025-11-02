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
import { withPhone } from "@/lib/seo";

// Datos específicos del municipio
const municipioData = {
  nombre: "Batres",
  slug: "batres",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28694",
  poblacion: "1.821",
  superficie: "42,4",
  descripcion: "Antenista profesional en Batres especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio madrileño.",
  servicios: [
    "Instalación de antenas TDT en Batres",
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
    "Casco urbano",
    "Zona residencial",
    "Área industrial",
    "Urbanizaciones",
    "Viviendas aisladas"
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
      nombre: "Carmen López",
      comentario: "El mejor antenista de Batres. Instalación perfecta y muy profesional.",
      puntuacion: 5
    },
    {
      nombre: "Miguel Ángel Ruiz",
      comentario: "Servicio técnico excelente. Resolvieron todos nuestros problemas de señal.",
      puntuacion: 5
    },
    {
      nombre: "Isabel Martínez",
      comentario: "Antenista muy recomendable en Batres. Trabajo impecable y garantizado.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Antenista local especializado",
      descripcion: "Conocimiento específico de Batres y sus necesidades técnicas",
      icono: "Home"
    },
    {
      titulo: "Instalaciones de calidad",
      descripcion: "Equipos profesionales y técnicas avanzadas para óptima recepción",
      icono: "Signal"
    },
    {
      titulo: "Atención personalizada",
      descripcion: "Servicio directo y soluciones adaptadas a cada hogar en Batres",
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
      question: "¿Qué servicios de antenista ofrecen en Batres?",
      answer: "Como antenista especializado en Batres, ofrecemos instalación y reparación de antenas TDT, parabólicas, porteros automáticos y sistemas de videovigilancia con garantía completa."
    },
    {
      question: "¿Cuál es el mejor antenista en Batres?",
      answer: "Somos antenistas profesionales con más de 25 años de experiencia en Batres. Ofrecemos servicio técnico especializado, garantía y atención personalizada."
    },
    {
      question: "¿Realizan instalaciones de antenas TDT en Batres?",
      answer: "Sí, somos especialistas en instalaciones de antenas TDT en Batres. Utilizamos equipos de alta calidad y ofrecemos garantía en todas nuestras instalaciones."
    },
    {
      question: "¿Cuánto cuesta un antenista en Batres?",
      answer: "Los precios varían según el tipo de instalación. Como antenista local en Batres, ofrecemos presupuestos gratuitos y precios competitivos sin comprometer la calidad."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Batres | Advanced Telecom`,
  description: withPhone(`Antenistas en Batres. Servicio técnico en TDT, satélite, porteros automáticos, video porteros y cámaras de seguridad. ¡Solución profesional!`),
  keywords: `antenista Batres, antenas TDT Batres, instalación antenas Madrid, reparación antenas Batres, telecomunicaciones Batres`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-batres'
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

export default function BatresPage() {
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
                    <span className="text-brand-green font-medium">Batres</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en Batres
                    </h1>
                    <div className="bg-brand-green/10 border border-brand-green/20 rounded-lg p-4 mb-4">
                      <p className="text-lg font-semibold text-brand-green text-center">
                        ¡NO COBRAMOS DESPLAZAMIENTO!
                      </p>
                    </div>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si tiene dudas de nuestro servicio de antenista Batres póngase en contacto con nosotros. Nuestro departamento especializado se pondrá en contacto con usted con la mayor brevedad posible, ofreciéndole en todo caso el mejor precio del mercado, con la garantía y el buen hacer que nos caracteriza.
                    </p>
                    <p className="text-lg text-brand-black-light leading-relaxed">
                      Nuestro antenista en Batres realizará los servicios de instalación o reparación de su antena parabólica o TDT, porteros automáticos y CCTV de forma rápida y directa con usted con el fin de satisfacer sus necesidades.
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

           {/* Cobertura específica de Batres */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio de antenista económico y de alta calidad en Batres</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nos avalan más de 25 años realizando trabajos en Batres con agilidad y compromiso, velando siempre por satisfacer las necesidades de los clientes que confían en Advanced Telecom.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en Batres</h3>
                      <p className="text-brand-black-light">Antenistas y porteros automáticos homologados en Batres en todas las urbanizaciones cercanas</p>
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

          {/* Servicios especializados en Batres */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¡Reparación de antenas parabólicas en Batres!</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Instalamos, reparamos y hacemos mantenimiento de todo tipo de antenas parabólicas y vídeo porteros en viviendas, negocios y empresas. Atendemos todo tipo de industrias que requieran contratar un antenista calificado y homologado.</p>
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

          {/* Por qué elegir nuestros servicios en Batres */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Mantenimiento y reparación de antenas en Batres</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Somos una empresa especializada en la instalación, reparación y mantenimiento de antenas de TV, TDT, parabólicas en viviendas unifamiliares o colectivas. Nos destacamos porque garantizamos una excelente recepción de la señal después de la instalación y orientación de la antena.</p>
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

         {/* Testimonios de clientes en Batres */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes con los que trabajamos el servicio de antenista en Batres</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tenemos un equipo altamente calificado para atender clientes residenciales y empresariales en Batres que nos llamen para instalación, reparación o mantenimiento de antenas y vídeo porteros. Nuestro trabajo y servicio son 100% garantizados ya que somos antenistas homologados.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Batres</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Batres */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en Batres</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Contamos con más de 25 años de experiencia en reparación y servicio técnico de antenas, en el sector residencial y empresarial. El personal de Advanced Telecom es experto en todo tipo de antenas y estamos siempre listos para servirle.</p>
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

          {/* CTA Section específica para Batres */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">PIDE TU PRESUPUESTO SIN COMPROMISO</h2>
                  <p className="text-xl mb-8 text-white/90">Atendemos su solicitud rápido y en el día. Cada uno de nuestros trabajos lo entregamos con la respectiva garantía. Nuestros presupuestos los adaptamos a la medida de sus necesidades y siempre estamos atentos a ofrecer el mejor servicio a precios razonables y competitivos.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Batres" className="flex items-center gap-2">
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