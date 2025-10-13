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
  nombre: "Serranillos del Valle",
  slug: "serranillos-del-valle",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28691",
  poblacion: "2.847",
  superficie: "47,8",
  descripcion: "Antenista profesional en Seranillos del Valle especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio madrileño.",
  servicios: [
    "Instalación de antenas TDT en Serranillos del Valle",
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
    "El casco urbano y centro del pueblo",
    "Todas las urbanizaciones residenciales",
    "Viviendas unifamiliares y chalets",
    "Fincas y propiedades en las afueras del municipio",
  ],
  testimonios: [
    {
      nombre: "Familia García",
      comentario:
        "Vivimos en un chalet y la señal no llegaba bien al salón de abajo. Vinieron, hicieron una nueva distribución del cableado y ahora se ve perfecto en todas partes. Muy recomendables.",
      puntuacion: 5,
    },
    {
      nombre: "Julián M.",
      comentario:
        "Se nos estropeó la antena comunitaria del edificio. Gestionaron todo con la comunidad de vecinos y lo arreglaron rapidísimo. Un servicio muy completo y profesional.",
      puntuacion: 5,
    },
    {
      nombre: "Laura S.",
      comentario:
        "Con la última ventolera, la antena se movió y perdimos todos los canales. Les llamé por la mañana y por la tarde ya estaba solucionado. Eficacia total.",
      puntuacion: 5,
    },
  ],
  caracteristicas: [
    {
      titulo: "Técnicos Locales",
      descripcion:
        "Nuestro equipo vive y trabaja en la zona. Este conocimiento del terreno nos permite ser más eficientes en nuestros desplazamientos y mucho más precisos en nuestros diagnósticos.",
      icono: "Users",
    },
    {
      titulo: "Materiales que Perduran",
      descripcion:
        "Solo trabajamos con antenas, cableado y componentes de alta durabilidad, preparados para resistir las condiciones climáticas de la zona y el inevitable paso del tiempo.",
      icono: "Shield",
    },
    {
      titulo: "Presupuestos Honestos",
      descripcion:
        "Le entregamos un presupuesto claro, detallado y sin compromiso. Sabrá el coste final antes de que empecemos a trabajar, sin letra pequeña ni sorpresas de última hora.",
      icono: "Eye",
    },
    {
      titulo: "Satisfacción por Escrito",
      descripcion:
        "Cada instalación y cada reparación que realizamos viene acompañada de una garantía formal por escrito. Estamos completamente seguros de la calidad de nuestro trabajo.",
      icono: "CheckCircle",
    },
  ],
  faqs: [
    {
      question: "¿Trabajan con comunidades de propietarios?",
      answer:
        "Sí, por supuesto. Tenemos amplia experiencia en el mantenimiento, reparación e instalación de antenas colectivas para edificios y comunidades de vecinos en todo Serranillos del Valle.",
    },
    {
      question: "¿Pueden instalar nuevas tomas de antena en otras habitaciones?",
      answer:
        "Claro. Realizamos la ampliación de su instalación de TV para llevar la señal a cualquier habitación que necesite, con un acabado limpio, discreto y totalmente profesional.",
    },
    {
      question: "¿Cobran por el desplazamiento para dar un presupuesto?",
      answer:
        "No. Nos desplazamos a su domicilio en cualquier punto de Serranillos del Valle para evaluar el trabajo y ofrecerle un presupuesto gratuito y sin ningún tipo de compromiso para usted.",
    },
    {
      question: "¿Qué cubre exactamente la garantía del servicio?",
      answer:
        "Nuestra garantía cubre tanto los materiales que hemos instalado como la mano de obra de la reparación o instalación. Es nuestro compromiso con un servicio de calidad y duradero.",
    },
  ],
}


export const metadata: Metadata = {
  title: `Antenista en Serranillos del Valle | Advanced Telecom`,
  description: `Servicio de antenista para todo Serranillos del Valle. Atendemos averías y realizamos instalaciones en el casco urbano y urbanizaciones. Calidad garantizada.`,
  keywords: `antenista Serranillos del Valle, antenas TDT Serranillos del Valle, instalación antenas Madrid, reparación antenas Serranillos del Valle, telecomunicaciones Serranillos del Valle`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-serranillos-del-valle'
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

export default function SerranillosDelVallePage() {
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
                      Servicio integral de antenista en <span className="text-brand-green">{municipioData.nombre}</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Ofrecemos un servicio de antenista profesional y de confianza para todos los vecinos de {municipioData.nombre}. Ya sea que resida en el centro del pueblo o en una de las urbanizaciones, nuestro equipo local le garantiza una solución rápida y eficaz para cualquier problema con su TDT o antena parabólica.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Solicitar Presupuesto
                    </Link>
                    <Link href={`https://wa.me/34668838415?text=Hola%2C%20tengo%20una%20aver%C3%ADa%20de%20antena%20en%20${encodeURIComponent(municipioData.nombre)}`} className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Contactar para Avería
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  {/* Imagen principal */}
                  <div className=" mt-20 flex justify-center relative overflow-hidden rounded-xl ">
                    <Image
                      src="/images/telecom/antenistas-en-toledo-sur.jpg"
                      alt={`Servicios de telecomunicaciones en ${municipioData.nombre}`}
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

           {/* Cobertura específica de Serranillos del Valle */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos cobertura a todo el municipio</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro compromiso es local. Conocemos cada rincón de {municipioData.nombre}, lo que nos permite ofrecer un servicio más ágil y personalizado en toda el área.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra zona de actuación en {municipioData.nombre} incluye:</h3>
                      <p className="text-brand-black-light">Atención ágil y personalizada en todo el municipio</p>
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
                      <span>Garantizamos una atención de urgencia para averías en menos de 3 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Soluciones de Telecomunicaciones para su Hogar o Negocio */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones de telecomunicaciones para su hogar o negocio</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Disponemos de un servicio completo para cubrir todas las necesidades de recepción de señal y conectividad.</p>
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



          {/* ¿Por qué confiar en nuestro servicio en Serranillos del Valle? */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué confiar en nuestro servicio en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Elegirnos es optar por la tranquilidad de un trabajo bien hecho, con la cercanía de un servicio local.</p>
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

         {/* La Opinión de Nuestros Vecinos de Serranillos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La opinión de nuestros vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La mejor publicidad es la que nos hacen nuestros clientes satisfechos en el municipio.</p>
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

          {/* Preguntas Habituales de Nuestros Clientes */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas habituales de nuestros clientes</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí resolvemos algunas de las dudas más frecuentes en {municipioData.nombre}.</p>
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

          {/* CTA Section específica para Serranillos del Valle */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hable con su antenista en {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">Si necesita una reparación, una nueva instalación o simplemente asesoramiento profesional en {municipioData.nombre}, estamos aquí para ayudarle. Contáctenos hoy mismo y reciba la mejor atención y el servicio más eficaz.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href={`https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20${encodeURIComponent(municipioData.nombre)}`} className="flex items-center gap-2">
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