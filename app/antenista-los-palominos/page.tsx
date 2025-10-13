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

// Datos específicos de la urbanización
const municipioData = {
  nombre: "Los Palominos",
  slug: "los-palominos",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45210",
  poblacion: "1.200",
  superficie: "2,5",
  descripcion: "Antenista especialista en la urbanización Los Palominos. Servicios técnicos profesionales para chalets, con conocimiento específico de la zona y atención personalizada.",
  servicios: [
    "Optimización de señal TDT para chalets",
    "Instalación discreta de antenas parabólicas",
    "Videoporteros modernos para parcelas",
    "Sistemas CCTV de seguridad",
    "Filtros 5G anti-interferencias",
    "Reparaciones urgentes especializadas"
  ],
   serviciosDestacados: [
    "Especialista en chalets",
    "Servicio rápido en la zona",
    "Instalaciones discretas"
  ],

  zonasCubiertas: [
    "Todas las calles y parcelas de la urbanización",
    "Chalets de todas las fases y tipos de construcción",
    "Viviendas con cualquier tipo de tejado o fachada",
    "Atención en la zona del club social y alrededores"
  ],

  cobertura: [
    { zona: "Todas las calles y parcelas", disponible: true },
    { zona: "Chalets de todas las fases", disponible: true },
    { zona: "Diferentes tipos de tejado", disponible: true },
    { zona: "Zona del club social", disponible: true },
    { zona: "Alrededores de la urbanización", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Miguel R.",
      comentario: "La señal de la TDT en mi chalet nunca se había visto bien del todo. Vinieron, me cambiaron la orientación de la antena y me pusieron un amplificador. El cambio ha sido espectacular.",
      puntuacion: 5
    },
    {
      nombre: "Sonia L.",
      comentario: "Quería poner un videoportero y me asesoraron genial. El técnico fue muy cuidadoso con el jardín y la fachada. Un trabajo muy fino y profesional. Los recomiendo.",
      puntuacion: 5
    },
    {
      nombre: "Isabel G.",
      comentario: "Después de la última tormenta de granizo, la parabólica se movió. Les llamé y vinieron el mismo día. Un servicio urgente de verdad. Muy agradecida.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocimiento experto de la zona",
      descripcion: "Sabemos cómo se construyeron los chalets de Los Palominos y conocemos los puntos débiles de las instalaciones originales, lo que nos permite ir directos al problema y solucionarlo antes.",
      icono: "Home"
    },
    {
      titulo: "Servicio cercano y de confianza",
      descripcion: "Te atendemos personalmente, sin centralitas ni intermediarios. Somos tus técnicos de confianza en la urbanización, con un trato directo y honesto.",
      icono: "Users"
    },
    {
      titulo: "Presupuestos claros y sin compromiso",
      descripcion: "Te damos un precio detallado y cerrado antes de empezar a trabajar. Con nosotros, la transparencia es total desde el primer minuto.",
      icono: "CheckCircle"
    },
    {
      titulo: "Garantía en cada intervención",
      descripcion: "Respaldamos nuestro trabajo con una garantía por escrito, tanto en las reparaciones como en las instalaciones nuevas que realizamos.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Mi chalet tiene varias plantas, ¿podéis asegurar que la señal de TV llegue bien a todas?",
      answer: "Sí, por supuesto. Es un problema muy común y tiene fácil solución. Estudiamos la distribución de tu casa e instalamos los derivadores y amplificadores necesarios para que la señal llegue con la misma fuerza y calidad a cada una de las tomas de antena."
    },
    {
      question: "¿Cuánto se tarda en instalar un sistema de cámaras de seguridad?",
      answer: "Una instalación típica de 3 o 4 cámaras en el perímetro de un chalet en Los Palominos suele llevar una jornada de trabajo, dejándolo todo instalado, configurado en tu móvil y funcionando."
    },
    {
      question: "¿El presupuesto que me dais es gratuito aunque al final no haga el trabajo?",
      answer: "Sí, totalmente. Nos desplazamos a tu casa en Los Palominos, valoramos lo que necesitas y te damos un presupuesto detallado sin ningún tipo de coste ni compromiso por tu parte."
    },
    {
      question: "¿Qué tipo de garantía ofrecéis?",
      answer: "Te ofrecemos la máxima garantía legal en todos nuestros trabajos, que queda reflejada por escrito en la factura. Cubre tanto la mano de obra como los materiales que hemos instalado."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Los Palominos | Advanced Telecom`,
  description: `✅ Tu antenista en la urbanización Los Palominos. Damos solución a problemas de TDT y parabólicas en tu chalet. Presupuesto gratuito y servicio rápido.`,
  keywords: `antenista Los Palominos, antenas TDT Los Palominos, instalación antenas chalets, reparación antenas urbanización, telecomunicaciones Los Palominos`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-los-palominos'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Antenista en Los Palominos | Advanced Telecom',
    description: '✅ Tu antenista en la urbanización Los Palominos. Damos solución a problemas de TDT y parabólicas en tu chalet. Presupuesto gratuito y servicio rápido.',
    url: 'https://advanced-telecom.es/antenista-los-palominos',
    siteName: 'Advanced Telecom',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Antenista en Los Palominos | Advanced Telecom',
    description: '✅ Tu antenista en la urbanización Los Palominos. Damos solución a problemas de TDT y parabólicas en tu chalet. Presupuesto gratuito y servicio rápido.',
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

export default function AldeaDelFresnoPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Los Palominos */}
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
                    <span className="text-brand-green font-medium">Los Palominos</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu antenista especialista en la <span className="text-brand-green">urbanización Los Palominos</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si tienes tu chalet en la urbanización Los Palominos y necesitas un antenista de confianza que conozca la zona, estás en el lugar indicado. Te ofrecemos un servicio técnico especializado para resolver cualquier avería, mejorar la señal de tu hogar o aumentar tu seguridad, con la profesionalidad y la rapidez que buscas.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llámanos
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide presupuesto
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

           {/* Cobertura específica de Los Palominos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio dedicado para toda la urbanización Los Palominos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra especialización en la zona nos permite ofrecerte un servicio más rápido y eficiente, cubriendo cada calle y parcela de la urbanización.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en Los Palominos incluye:</h3>
                      <p className="text-brand-black-light">Cobertura completa en toda la urbanización</p>
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
                      <span>Como estamos en la zona, te atendemos en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Los Palominos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones a medida para tu chalet en Los Palominos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Entendemos las necesidades de tu vivienda y te ofrecemos los servicios que realmente marcan la diferencia.</p>
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

          {/* Por qué elegir nuestros servicios en Los Palominos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué confiar en un especialista de Los Palominos?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra experiencia en tu urbanización es tu mejor garantía.</p>
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

         {/* Testimonios de clientes en Los Palominos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La opinión de tus vecinos de Los Palominos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La gente que vive en tu misma urbanización ya ha probado nuestro servicio y esta es su experiencia.</p>
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

          {/* FAQs específicas de Los Palominos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas sobre el servicio en la urbanización</h2>
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

          {/* CTA Section específica para Los Palominos */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en Los Palominos? Llámanos</h2>
                  <p className="text-xl mb-8 text-white/90">Si vives en la urbanización, no dudes en contactar con nosotros. Te daremos una solución rápida y a medida para tu chalet, con la garantía de un servicio especialista en la zona.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Los%20Palominos" className="flex items-center gap-2">
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