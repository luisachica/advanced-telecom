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
  nombre: "Illescas",
  slug: "illescas",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45200",
  poblacion: "30.229",
  superficie: "56,2",
  descripcion: "Tu servicio de antenista de confianza en Illescas. Más de 25 años de experiencia ofreciendo soluciones rápidas para TDT, parabólicas y videoporteros en toda la ciudad.",
  servicios: [
    "Instalación de antenas TDT en Illescas",
    "Antenas parabólicas profesionales",
    "Videoporteros para comunidades y chalets",
    "Sistemas de videovigilancia CCTV",
    "Filtros 5G para evitar interferencias",
    "Servicio de reparaciones urgentes"
  ],
   serviciosDestacados: [
    "Servicio rápido y profesional",
    "Cobertura total en Illescas",
    "Más de 25 años de experiencia"
  ],

  zonasCubiertas: [
    "El Señorío de Illescas",
    "Centro y barrios históricos",
    "Nuevos desarrollos residenciales y PAUs",
    "Zonas industriales y Plataforma Central Iberum",
    "Casco histórico"
  ],

  cobertura: [
    { zona: "El Señorío de Illescas", disponible: true },
    { zona: "Centro y barrios históricos", disponible: true },
    { zona: "Nuevos desarrollos residenciales y PAUs", disponible: true },
    { zona: "Zonas industriales y Plataforma Central Iberum", disponible: true },
    { zona: "Casco histórico", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Elena G.",
      comentario: "Vivo en El Señorío y tenía problemas con la señal en varias habitaciones. Vinieron, encontraron el fallo en la distribución y lo dejaron perfecto. Un servicio muy profesional.",
      puntuacion: 5
    },
    {
      nombre: "Gerente de logística",
      comentario: "Necesitaba un antenista urgente para mi negocio en la Plataforma Central Iberum y fueron los más rápidos. Eficaces y con un trato excelente. Totalmente recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Presidente de comunidad",
      comentario: "Un trato muy cercano y honesto. Me asesoraron sobre el videoportero para la comunidad en el centro de Illescas y nos dieron un presupuesto genial. Estamos muy contentos.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocimiento experto de Illescas",
      descripcion: "Desde el casco antiguo hasta la última fase de El Señorío, conocemos las particularidades de la señal y las infraestructuras de cada zona para darte la solución más eficaz.",
      icono: "Home"
    },
    {
      titulo: "Soluciones para particulares y empresas",
      descripcion: "Damos servicio tanto a tu hogar como a tu negocio en los polígonos industriales, adaptándonos a las necesidades específicas de cada cliente.",
      icono: "Signal"
    },
    {
      titulo: "Presupuestos claros y competitivos",
      descripcion: "Te ofrecemos un precio justo, detallado y sin compromiso. Creemos en la transparencia y en darte la mejor relación calidad-precio de la zona.",
      icono: "Users"
    },
    {
      titulo: "Garantía y fiabilidad en cada trabajo",
      descripcion: "Todos nuestros trabajos están garantizados por escrito. Utilizamos materiales de primera calidad para asegurar instalaciones y reparaciones duraderas.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Acabo de mudarme a un piso nuevo en El Señorío y la TDT no funciona, ¿es un problema de la comunidad o mío?",
      answer: "Es una consulta muy habitual. Puede ser cualquiera de las dos cosas. Nosotros podemos ir a tu piso, hacer una medición en tu toma de antena y decirte al momento si el problema es de tu instalación interior o si la señal que llega de la comunidad es deficiente."
    },
    {
      question: "¿Instaláis antenas en naves del polígono?",
      answer: "Sí, por supuesto. Ofrecemos servicios completos de instalación de antenas, videoporteros y cámaras de seguridad para empresas y naves en todos los polígonos industriales de Illescas."
    },
    {
      question: "¿Cuánto tardáis en dar un presupuesto para una comunidad grande?",
      answer: "Entendemos que las decisiones en las comunidades llevan tiempo. Nos comprometemos a visitar vuestro edificio y a presentar un presupuesto detallado y sin compromiso en un plazo de 24-48 horas."
    },
    {
      question: "Si os llamo ahora, ¿cuándo podéis venir?",
      answer: "Para averías no urgentes, intentamos darte cita el mismo día o al día siguiente. Si se trata de una urgencia, activamos nuestro servicio prioritario para estar en tu domicilio en menos de dos horas."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Illescas | Servicio Rápido y Profesional`,
  description: `✅ Tu antenista en Illescas y El Señorío. Soluciones para TDT, parabólicas y comunidades. Más de 25 años de experiencia. Presupuesto gratis.`,
  keywords: `antenista Illescas, antenas TDT Illescas, El Señorío Illescas, instalación antenas Toledo, reparación antenas Illescas, telecomunicaciones Illescas`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-illescas'
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

export default function IllescasPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Illescas */}
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

           {/* Cobertura específica de Illescas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos cobertura total en {municipioData.nombre} y todas sus urbanizaciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos {municipioData.nombre} a la perfección, desde el casco histórico hasta los nuevos desarrollos</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en {municipioData.nombre}</h3>
                      <p className="text-brand-black-light">Nuestra área de servicio en {municipioData.nombre} incluye</p>
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

          {/* Servicios especializados en Illescas */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Una solución para cada necesidad en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tanto si vives en un piso, en un chalet o tienes un negocio, tenemos un servicio a tu medida.</p>
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

          {/* Por qué elegir nuestros servicios en Illescas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué somos el antenista de referencia en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra experiencia, profesionalidad y conocimiento de la ciudad nos convierten en tu mejor opción.</p>
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

         {/* Testimonios de clientes en Illescas */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que opinan tus vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La confianza de la gente de tu ciudad es nuestro mayor orgullo.</p>
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

          {/* FAQs específicas de Illescas */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas más habituales sobre nuestro servicio</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí tienes las respuestas a las preguntas que más nos hacen tus vecinos.</p>
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

          {/* CTA Section específica para Illescas */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en {municipioData.nombre}? Contacta ahora</h2>
                  <p className="text-xl mb-8 text-white/90">No esperes más para solucionar tu problema de señal. Llámanos o escríbenos un WhatsApp y te daremos un presupuesto gratuito y una solución rápida y eficaz.</p>
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