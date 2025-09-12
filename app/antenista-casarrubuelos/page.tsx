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
  nombre: "Casarrubuelos",
  slug: "casarrubuelos",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28977",
  poblacion: "3.245",
  superficie: "38,2",
  descripcion: "Ofrecemos un servicio de antenista local y especializado para todos los vecinos de Casarrubuelos. Con más de 25 años de experiencia en el sector, nos hemos consolidado como la referencia en la instalación, mantenimiento y reparación de todo tipo de sistemas de telecomunicaciones para viviendas unifamiliares, comunidades y empresas en esta localidad de la Comunidad de Madrid.",
  servicios: [
    "Televisión digital terrestre (TDT)",
    "Instalación de antenas parabólicas",
    "Instalación y reparación de porteros automáticos",
    "Sistemas de videovigilancia (CCTV)",
    "Solución a interferencias por 5G",
    "Reparaciones urgentes de antenas"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones residenciales",
    "Servicio técnico local"
  ],

  zonasCubiertas: [
    "El casco urbano del pueblo",
    "Nuevos desarrollos residenciales",
    "El polígono industrial",
    "Urbanizaciones y chalets de la periferia",
    "Fincas y casas de campo"
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
      nombre: "Raquel V.",
      comentario: "Un servicio excelente. Tenía problemas para ver varios canales de la TDT en mi casa de Casarrubuelos y me lo solucionaron en la misma mañana que les llamé. Muy profesionales.",
      puntuacion: 5
    },
    {
      nombre: "Javier A.",
      comentario: "Les pedimos presupuesto para cambiar el portero automático de toda la comunidad y nos ofrecieron el mejor precio. El trabajo fue impecable y los vecinos están encantados.",
      puntuacion: 5
    },
    {
      nombre: "Miguel S.",
      comentario: "El antenista que me atendió fue muy claro y honesto. Me explicó cuál era el problema y me dio la solución más económica. Se agradece encontrar gente así en Casarrubuelos.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocimiento del entorno",
      descripcion: "Como técnicos locales, conocemos perfectamente las características de la señal en Casarrubuelos, lo que nos permite ofrecer soluciones más rápidas y precisas.",
      icono: "Home"
    },
    {
      titulo: "Instalaciones fiables y duraderas",
      descripcion: "Utilizamos exclusivamente materiales homologados y de marcas reconocidas para asegurar que cada instalación sea robusta y funcione sin fallos durante años.",
      icono: "Signal"
    },
    {
      titulo: "Transparencia total",
      descripcion: "Le ofrecemos un presupuesto claro y cerrado antes de empezar cualquier trabajo. Con nosotros no hay sorpresas ni costes ocultos.",
      icono: "Users"
    },
    {
      titulo: "Garantía en cada intervención",
      descripcion: "Todos nuestros servicios, desde una pequeña reparación hasta una instalación completa, están cubiertos por una garantía por escrito para su máxima tranquilidad.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué tipo de trabajos de antenista realizan en Casarrubuelos?",
      answer: "En Casarrubuelos atendemos todo tipo de necesidades: instalación de antenas TDT y parabólicas, reparación de averías, solución de problemas de señal, modernización de porteros y montaje de sistemas de videovigilancia."
    },
    {
      question: "¿Por qué mi televisión pierde la señal en Casarrubuelos?",
      answer: "Las causas pueden ser variadas: una antena mal orientada, un amplificador defectuoso, cableado en mal estado o incluso interferencias de la red 5G. Podemos diagnosticar el origen exacto y solucionarlo."
    },
    {
      question: "¿Realizan instalaciones de antenas para comunidades de vecinos en Casarrubuelos?",
      answer: "Sí, es una de nuestras especialidades. Realizamos instalaciones y mantenimientos de antenas colectivas para comunidades de propietarios en Casarrubuelos, asegurando una señal perfecta para todos los vecinos."
    },
    {
      question: "¿Qué precio tiene un servicio de antenista en Casarrubuelos?",
      answer: "El coste varía según la naturaleza del trabajo. Para darle un precio exacto, preferimos evaluar su caso particular y ofrecerle un presupuesto gratuito y sin ningún compromiso."
    }
  ]
}


export const metadata: Metadata = {
  title: "Antenista en Casarrubuelos | Advanced Telecom",
  description: "Antenista profesional en Casarrubuelos. Instalación, reparación y mantenimiento de antenas TDT, parabólicas y porteros automáticos.",
  keywords: "antenista Casarrubuelos, instalación antenas Casarrubuelos, reparación antenas, porteros automáticos, videovigilancia, TDT Casarrubuelos",
  openGraph: {
    title: "Antenista en Casarrubuelos | Advanced Telecom",
    description: "Antenista profesional en Casarrubuelos. Instalación, reparación y mantenimiento de antenas TDT, parabólicas y porteros automáticos.",
    url: "https://antenista-madrid.com/antenista-casarrubuelos",
    type: "website",
  },
  alternates: {
    canonical: "https://antenista-madrid.com/antenista-casarrubuelos"
  }
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

export default function CasarrubuuelosPage() {
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
                    <span className="text-brand-green font-medium">Casarrubuelos</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> profesional en {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Ofrecemos un servicio de antenista local y especializado para todos los vecinos de {municipioData.nombre}. 
                    Con más de 25 años de experiencia en el sector, nos hemos consolidado como la referencia en la instalación, 
                    mantenimiento y reparación de todo tipo de <Link href="/servicios/antenas-parabolicas" className="text-brand-green hover:underline"> sistemas de telecomunicaciones </Link>  para viviendas unifamiliares, 
                    comunidades y empresas en esta localidad de la Comunidad de Madrid. 
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio de antenista en todo el término de Casarrubuelos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro compromiso es dar una cobertura completa y ágil en cada rincón del municipio, garantizando que ningún vecino se quede sin asistencia.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Damos cobertura en todas las zonas de {municipioData.nombre}:</h3>
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

          {/* Servicios especializados en {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Catálogo de soluciones de antenista en Casarrubuelos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Contamos con un abanico de <Link href="/servicios" className="text-brand-green hover:underline"> servicios </Link> diseñados para resolver cualquier necesidad relacionada con la recepción de señal y la seguridad en su hogar.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cuatro razones para elegir a nuestro antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra filosofía de trabajo se centra en la eficacia, la honestidad y la satisfacción del cliente.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que opinan nuestros clientes de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La confianza que nuestros vecinos depositan en nosotros es nuestro mayor orgullo</p>
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

          {/* FAQs específicas de {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre el servicio de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Respondemos a las consultas más comunes que recibimos de los vecinos de la localidad.</p>
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

          {/* CTA Section específica para {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesita un antenista en {municipioData.nombre} ahora?</h2>
                  <p className="text-xl mb-8 text-white/90">Si busca una solución profesional y garantizada para su antena o portero automático, no dude en contactarnos. Le atenderemos de forma personalizada y nos desplazaremos hasta su domicilio en {municipioData.nombre} para ofrecerle la mejor solución.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Casarrubuelos" className="flex items-center gap-2">
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