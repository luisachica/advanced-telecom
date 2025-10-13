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
  nombre: "Méntrida",
  slug: "mentrida",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45930",
  poblacion: "4.200",
  superficie: "67,2",
  descripcion: "Tu antenista de confianza en Méntrida. Soluciones profesionales para TDT, parabólicas y videoporteros en chalets y pisos. Servicio local especializado.",
  servicios: [
    "Señal TDT nítida y estable en Méntrida",
    "Instalación de antenas parabólicas",
    "Instalación y reparación de videoporteros",
    "Sistemas de cámaras de seguridad (CCTV)",
    "Solución a interferencias 5G",
    "Servicio de reparaciones urgentes en Méntrida"
  ],
   serviciosDestacados: [
    "Antenista local de confianza",
    "Especialistas en urbanizaciones",
    "Servicio rápido y profesional"
  ],

  zonasCubiertas: [
    "El casco urbano de Méntrida",
    "Urbanización Valcarillo",
    "Urbanización San Nicolás",
    "Chalets y viviendas unifamiliares",
    "Bodegas, fincas y naves del término municipal"
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
      nombre: "Laura G.",
      comentario: "Vivo en una de las urbanizaciones de Méntrida y la señal de la TDT era un desastre. Les llamé y me lo solucionaron en la misma mañana. Un servicio de 10.",
      puntuacion: 5
    },
    {
      nombre: "Javier S.",
      comentario: "Muy profesionales y cercanos. Se nota que conocen el pueblo. Me instalaron un videoportero y el trabajo fue impecable. Totalmente recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Gerente de bodega local",
      comentario: "Necesitaba una instalación de antena para la bodega y me dieron un presupuesto muy competitivo. El trabajo fue rápido y el resultado perfecto.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocimiento experto de la zona",
      descripcion: "Conocemos la orografía de Méntrida y sus urbanizaciones, sabemos dónde la señal es más débil y tenemos las soluciones técnicas para que veas la tele perfectamente.",
      icono: "Home"
    },
    {
      titulo: "Trato cercano y profesional",
      descripcion: "Te atendemos directamente, sin intermediarios. Te escuchamos, entendemos tu problema y te damos la solución que de verdad necesitas, sin rodeos.",
      icono: "Users"
    },
    {
      titulo: "Presupuestos claros y sin sorpresas",
      descripcion: "Te damos un precio cerrado, detallado y honesto antes de empezar. Sin costes inesperados ni letra pequeña.",
      icono: "Signal"
    },
    {
      titulo: "Garantía de un trabajo bien hecho",
      descripcion: "Utilizamos materiales de primeras marcas y garantizamos todas nuestras instalaciones y reparaciones por escrito para tu total tranquilidad.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Vivo en una urbanización, ¿el problema de la TDT es mío o de todos?",
      answer: "Es una duda muy común. Podemos ir a tu casa y hacer una medición de señal en tu toma de antena. Así sabremos al instante si el fallo está en tu instalación individual o si es un problema de la antena colectiva que debéis gestionar con la comunidad."
    },
    {
      question: "¿Cuánto tiempo tardáis en instalar una antena parabólica?",
      answer: "Una instalación normal en el tejado de un chalet o en una terraza, incluyendo el cableado hasta una toma principal, suele llevar entre 2 y 3 horas, dejándolo todo funcionando y sintonizado."
    },
    {
      question: "¿El presupuesto que me dais es gratuito y sin compromiso?",
      answer: "Sí, siempre. Nos desplazamos a tu domicilio en Méntrida para valorar el trabajo y darte un presupuesto cerrado y detallado sin ningún tipo de coste ni compromiso por tu parte."
    },
    {
      question: "¿Qué garantía tienen vuestros trabajos?",
      answer: "Todos nuestros trabajos están cubiertos por la garantía legal. Te la entregamos por escrito en la factura para que tengas la máxima confianza y seguridad en el servicio que te hemos prestado."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Méntrida | Advanced Telecom`,
  description: `✅ Tu antenista de confianza en Méntrida. Soluciones para TDT, parabólicas y videoporteros en chalets y pisos. Pide tu presupuesto gratis ahora.`,
  keywords: `antenista Méntrida, antenas TDT Méntrida, instalación antenas Toledo, reparación antenas Méntrida, telecomunicaciones Méntrida, videoporteros Méntrida, parabólicas Méntrida`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-mentrida'
  },
  openGraph: {
    title: 'Antenista en Méntrida | Advanced Telecom',
    description: '✅ Tu antenista de confianza en Méntrida. Soluciones para TDT, parabólicas y videoporteros en chalets y pisos. Pide tu presupuesto gratis ahora.',
    url: 'https://advanced-telecom.es/antenista-mentrida',
    siteName: 'Advanced Telecom',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Antenista en Méntrida | Advanced Telecom',
    description: '✅ Tu antenista de confianza en Méntrida. Soluciones para TDT, parabólicas y videoporteros en chalets y pisos. Pide tu presupuesto gratis ahora.',
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
                    <span className="text-brand-green font-medium">Méntrida</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu servicio de <span className="text-brand-green">antenista de confianza</span> en Méntrida
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Tanto si vives en el centro de Méntrida como en una de sus urbanizaciones, te ofrecemos un servicio de antenista local, rápido y profesional. Solucionamos cualquier avería para que solo te preocupes de disfrutar de tu hogar, con la garantía y la cercanía de un técnico que conoce la zona a la perfección.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llámanos
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide tu presupuesto
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

           {/* Cobertura específica de Méntrida */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos servicio en todo Méntrida y sus alrededores</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo se desplaza a cualquier punto del término municipal para ofrecerte una asistencia técnica ágil y de la máxima calidad.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de cobertura en Méntrida incluye:</h3>
                      <p className="text-brand-black-light">Servicio técnico especializado en todo el término municipal</p>
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
                      <span>Para urgencias, te garantizamos una respuesta en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Méntrida */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Una solución para cada hogar y negocio en Méntrida</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tenemos un servicio a medida para cada necesidad, ya sea en tu vivienda particular o en tu empresa.</p>
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

          {/* Por qué elegir nuestros servicios en Méntrida */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La tranquilidad de contar con un antenista de Méntrida</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Elegir un servicio local y profesional marca la diferencia. Te contamos por qué.</p>
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

         {/* Testimonios de clientes en Méntrida */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que opinan tus vecinos de Méntrida</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de la gente de tu pueblo es nuestro mayor orgullo.</p>
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

          {/* FAQs específicas de Méntrida */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas más frecuentes en Méntrida</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Estas son las preguntas que más nos hacen nuestros clientes de Méntrida.</p>
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

          {/* CTA Section específica para Méntrida */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Problemas con tu antena en Méntrida?</h2>
                  <p className="text-xl mb-8 text-white/90">Llámanos y te damos presupuesto sin compromiso. Nos desplazamos a cualquier punto de Méntrida.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Méntrida" className="flex items-center gap-2">
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