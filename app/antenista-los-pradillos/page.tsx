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
  nombre: "Los Pradillos",
  slug: "los-pradillos",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45200",
  poblacion: "Urbanización",
  superficie: "Zona residencial",
  descripcion: "Tu antenista especialista en la urbanización Los Pradillos de Illescas. Servicios profesionales de telecomunicaciones para chalets y viviendas unifamiliares.",
  servicios: [
    "Señal TDT nítida y estable en chalets de Los Pradillos",
    "Instalación de antenas parabólicas en la urbanización",
    "Videoporteros para seguridad en parcelas",
    "Sistemas de cámaras de vigilancia para chalets",
    "Filtros 5G contra interferencias",
    "Servicio de reparaciones urgentes en Los Pradillos"
  ],
   serviciosDestacados: [
    "Especialistas en la urbanización Los Pradillos",
    "Instalaciones para chalets y viviendas unifamiliares",
    "Servicio rápido y personalizado"
  ],

  zonasCubiertas: [
    "Todas las calles y parcelas de la urbanización",
    "Chalets de cualquier fase de Los Pradillos",
    "Viviendas unifamiliares y pareadas",
    "Servicio en toda la zona, sin excepciones"
  ],

  cobertura: [
    { zona: "Todas las calles y parcelas de la urbanización", disponible: true },
    { zona: "Chalets de cualquier fase de Los Pradillos", disponible: true },
    { zona: "Viviendas unifamiliares y pareadas", disponible: true },
    { zona: "Servicio en toda la zona, sin excepciones", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Carlos G.",
      comentario: "El servicio ha sido excelente. Se nota que conocen la urbanización. Me solucionaron un problema de señal en el chalet que otros no habían conseguido arreglar. Muy recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Sonia M.",
      comentario: "Les llamé para instalar un videoportero nuevo y estoy encantada. El técnico fue muy profesional y cuidadoso con todo. Un trabajo impecable de principio a fin.",
      puntuacion: 5
    },
    {
      nombre: "Javier P.",
      comentario: "Tuve una urgencia con la antena por el viento y vinieron el mismo día. Se agradece tener un servicio tan rápido y eficaz aquí en la urbanización.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocimiento experto de la zona",
      descripcion: "Conocemos la orientación de las calles, los tipos de tejado y los desafíos de la señal específicos de Los Pradillos. Eso nos permite ser más rápidos y eficaces en cada trabajo.",
      icono: "Home"
    },
    {
      titulo: "Trato directo y personal",
      descripcion: "Hablarás directamente con el técnico, sin intermediarios. Te ofrecemos un servicio cercano para resolver tus dudas al momento y darte la mejor solución.",
      icono: "Users"
    },
    {
      titulo: "Presupuestos honestos y sin compromiso",
      descripcion: "Te damos un precio cerrado y justo, sin costes ocultos ni sorpresas. Nuestra prioridad es tu confianza y satisfacción.",
      icono: "CheckCircle"
    },
    {
      titulo: "Garantía en todos los trabajos",
      descripcion: "Respaldamos cada instalación y reparación con una garantía por escrito. Un trabajo bien hecho es un cliente que confía en nosotros para el futuro.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Mi chalet es de obra nueva, ¿hacéis la instalación de la antena desde cero?",
      answer: "Sí, por supuesto. Es una de nuestras especialidades. Realizamos la instalación completa de la antena de TDT en tu chalet nuevo, incluyendo el cableado a todas las tomas de la casa para que te quede perfecto."
    },
    {
      question: "¿Cuánto se tarda en orientar una antena parabólica que se ha movido?",
      answer: "Normalmente, es un trabajo rápido. Si la antena y el soporte están en buen estado, la reorientación con nuestros medidores de campo de precisión suele llevar menos de una hora."
    },
    {
      question: "¿El presupuesto que me dais es gratuito?",
      answer: "Sí, siempre. Nos desplazamos a tu domicilio en Los Pradillos para ver qué necesitas y te damos un presupuesto detallado sin ningún tipo de coste ni compromiso por tu parte."
    },
    {
      question: "¿Qué garantía tiene vuestro trabajo?",
      answer: "Todos nuestros trabajos, tanto las reparaciones como las instalaciones nuevas, están cubiertos por la garantía legal. Te la entregamos por escrito en la factura para tu total tranquilidad."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Los Pradillos | Advanced Telecom`,
  description: withPhone(`✅ Tu antenista de confianza en la urbanización Los Pradillos (Illescas). Soluciones para TDT y parabólicas en tu chalet. Presupuesto rápido y gratis.`),
  keywords: `antenista Los Pradillos, antenas TDT Los Pradillos, instalación antenas Illescas, reparación antenas Los Pradillos, telecomunicaciones Los Pradillos, antenista urbanización`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-los-pradillos'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Antenista en Los Pradillos | Advanced Telecom',
    description: withPhone('✅ Tu antenista de confianza en la urbanización Los Pradillos (Illescas). Soluciones para TDT y parabólicas en tu chalet. Presupuesto rápido y gratis.'),
    url: 'https://advanced-telecom.es/antenista-los-pradillos',
    siteName: 'Advanced Telecom',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Antenista en Los Pradillos | Advanced Telecom',
    description: withPhone('✅ Tu antenista de confianza en la urbanización Los Pradillos (Illescas). Soluciones para TDT y parabólicas en tu chalet. Presupuesto rápido y gratis.'),
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
                    <span className="text-brand-green font-medium">Los Pradillos</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu antenista especialista en la urbanización <span className="text-brand-green">Los Pradillos</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si vives en la urbanización Los Pradillos y buscas un técnico de antenas profesional, rápido y que conozca la zona a la perfección, estás en el lugar correcto. Somos tu servicio de confianza para cualquier problema de señal o nueva instalación en tu chalet, con la garantía de un trabajo bien hecho.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama y cuéntanos qué necesitas
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

           {/* Cobertura específica de Los Pradillos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio dedicado para cada calle de Los Pradillos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra especialización en la zona nos permite ofrecerte una atención más rápida y personalizada, cubriendo toda la urbanización.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Damos servicio en toda la urbanización Los Pradillos:</h3>
                      <p className="text-brand-black-light">Servicio en toda la zona, sin excepciones</p>
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
                      <span>Respuesta prioritaria en Los Pradillos: llegamos en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Los Pradillos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones a medida para tu chalet en Los Pradillos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Entendemos las necesidades específicas de tu vivienda y te ofrecemos los servicios más demandados por tus vecinos.</p>
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

          {/* Por qué elegir nuestros servicios en Los Pradillos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La ventaja de un antenista que conoce Los Pradillos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Elegir un especialista en tu urbanización marca la diferencia.</p>
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

         {/* Testimonios de clientes en Los Pradillos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La opinión de tus vecinos de la urbanización Los Pradillos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de la gente que vive cerca de ti es nuestra mejor carta de presentación.</p>
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
                    <div className="text-sm text-brand-black-light">Vecino de Los Pradillos</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Los Pradillos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas sobre el servicio de antenista aquí, en Los Pradillos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí tienes las respuestas a algunas de las preguntas que más nos hacen tus vecinos.</p>
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

          {/* CTA Section específica para Los Pradillos */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en Los Pradillos? Contáctanos</h2>
                  <p className="text-xl mb-8 text-white/90">Si vives en la urbanización, llámanos o escríbenos. Te daremos una solución a medida para tu chalet, de forma rápida, profesional y con la garantía de un especialista en la zona.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Los%20Pradillos" className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Contactar por WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                      <a href="tel:+34668838415" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" /> Llama ahora
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