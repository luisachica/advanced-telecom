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
  nombre: "Cubas de la Sagra",
  slug: "cubas-de-la-sagra",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45593",
  poblacion: "6.234",
  superficie: "49,2",
  descripcion: "Antenista profesional en Cubas de la Sagra especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio toledano de la comarca de La Sagra.",
  servicios: [
    "Instalación de antenas TDT en Cubas de la Sagra",
    "Antenas parabólicas para zonas residenciales",
    "Porteros automáticos y videoporteros",
    "Sistemas de videovigilancia CCTV",
    "Filtros para interferencias 5G",
    "Servicio de reparaciones urgentes"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones en urbanizaciones",
    "Servicio técnico en La Sagra"
  ],

  zonasCubiertas: [
    "El casco urbano",
    "Todas las urbanizaciones y residenciales",
    "Nuevos desarrollos de chalets",
    "Fincas y naves en los alrededores"
  ],

  cobertura: [
    { zona: "El casco urbano", disponible: true },
    { zona: "Todas las urbanizaciones y residenciales", disponible: true },
    { zona: "Nuevos desarrollos de chalets", disponible: true },
    { zona: "Fincas y naves en los alrededores", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Marta G.",
      comentario: "Un servicio de 10. Les llamé porque el viento me movió la antena en el chalet y vinieron el mismo día. Súper profesionales y amables. Ya los he recomendado.",
      puntuacion: 5
    },
    {
      nombre: "Javier L.",
      comentario: "Nos instalaron el nuevo sistema de videoportero en toda la comunidad y ha sido un acierto. Trabajaron de forma muy organizada y limpia. Estamos muy contentos.",
      puntuacion: 5
    },
    {
      nombre: "David R.",
      comentario: "Se nota que saben lo que hacen. El técnico me explicó cuál era el problema de la señal de forma muy clara y me dio varias opciones. Un trato muy honesto.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Compromiso con la calidad",
      descripcion: "Solo usamos materiales de primeras marcas y componentes homologados para asegurar que cada reparación e instalación sea duradera",
      icono: "CheckCircle"
    },
    {
      titulo: "Técnicos con gran experiencia",
      descripcion: "Nuestro equipo lleva más de 25 años trabajando en la comarca de La Sagra. Conocemos los problemas habituales y cómo solucionarlos eficazmente",
      icono: "Users"
    },
    {
      titulo: "Presupuestos claros y honestos",
      descripcion: "Te damos un precio cerrado por adelantado, detallando cada concepto. Sin costes ocultos ni sorpresas desagradables en la factura final",
      icono: "Shield"
    },
    {
      titulo: "Rapidez y puntualidad",
      descripcion: "Valoramos tu tiempo. Por eso, somos puntuales en nuestras citas y trabajamos de forma eficiente para causar las mínimas molestias",
      icono: "Clock"
    }
  ],

  faqs: [
    {
      question: "¿Dais servicio a naves en los polígonos de Cubas de la Sagra?",
      answer: "Sí. Además de viviendas y comunidades, ofrecemos servicios de instalación y mantenimiento de antenas y sistemas de videovigilancia para empresas y naves industriales en la zona."
    },
    {
      question: "¿Qué pasa si después de la reparación vuelve a fallar?",
      answer: "No te preocupes. Todos nuestros trabajos están garantizados. Si el problema por el que te hemos atendido vuelve a surgir, acudiremos a solucionarlo sin ningún coste para ti."
    },
    {
      question: "¿Puedo pagar con tarjeta?",
      answer: "Sí, para tu comodidad aceptamos diferentes métodos de pago, incluyendo efectivo, Bizum y pago con tarjeta a través de TPV móvil."
    },
    {
      question: "Tengo una instalación muy antigua, ¿se puede mejorar?",
      answer: "¡Claro! De hecho, es una de nuestras especialidades. Auditamos tu instalación, por muy antigua que sea, y te proponemos las mejoras necesarias (cambio de cableado, nuevo amplificador, etc.) para adaptarla a la tecnología actual."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Cubas de la Sagra | Advanced Telecom`,
  description: `📡 Tu antenista en Cubas de la Sagra para TDT, parabólicas y videoporteros. Servicio rápido y con garantía. ✅ Pide tu presupuesto sin compromiso.`,
  keywords: `antenista Cubas de la Sagra, antenas TDT Cubas de la Sagra, instalación antenas Toledo, reparación antenas Cubas de la Sagra, telecomunicaciones La Sagra`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-cubas-de-la-sagra'
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

export default function CubasDelaSagraPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Cubas de la Sagra */}
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
                      Tu antenista de confianza en <span className="text-brand-green">{municipioData.nombre}</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si buscas una solución cercana y eficaz para tu antena o videoportero en {municipioData.nombre}, has llegado al lugar correcto. Somos el servicio técnico local que necesitas para resolver cualquier problema con la señal de tu televisión, instalar una nueva antena o mejorar la seguridad de tu hogar con la profesionalidad y la garantía que te mereces.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama y te informamos
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide tu presupuesto gratis
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

           {/* Cobertura específica de Cubas de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos cobertura total en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos cada rincón del municipio, por lo que te garantizamos una asistencia rápida y eficiente, tanto si vives en el centro como en las afueras.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Llegamos a todas las zonas de {municipioData.nombre}:</h3>
                      <p className="text-brand-black-light">Para averías urgentes, llegamos en menos de 2 horas.</p>
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

          {/* Servicios especializados en Cubas de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones de antenista para cada necesidad en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te ofrecemos un servicio integral para que no tengas que preocuparte por nada.</p>
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

          {/* Por qué elegir nuestros servicios en Cubas de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que nos diferencia como tu antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Elegirnos es apostar por un trabajo bien hecho, con la confianza y la rapidez que solo un servicio local puede ofrecerte.</p>
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

         {/* Testimonios de clientes en Cubas de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La opinión de tus vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de quienes ya han confiado en nosotros es nuestra mejor carta de presentación.</p>
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

          {/* FAQs específicas de Cubas de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus preguntas más comunes sobre nuestro servicio de antenista</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos aquí algunas de las dudas que más nos plantean tus vecinos.</p>
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

          {/* CTA Section específica para Cubas de la Sagra */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas ayuda con tu antena? Contacta con nosotros</h2>
                  <p className="text-xl mb-8 text-white/90">Si vives en {municipioData.nombre}, no dudes en ponerte en contacto. Llámanos o envíanos un WhatsApp, explícanos tu caso y te daremos un presupuesto gratuito para resolver tu problema.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20{municipioData.nombre}" className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Contactar por WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                      <a href="tel:+34668838415" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" /> Llama y te informamos
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