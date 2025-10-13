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
  nombre: "Magán",
  slug: "magan",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45230",
  poblacion: "1.850",
  superficie: "48,2",
  descripcion: "Magán es un municipio de la provincia de Toledo, en la comunidad autónoma de Castilla-La Mancha. Con una población de aproximadamente 1.850 habitantes, se caracteriza por su tranquilidad y su crecimiento residencial con nuevas urbanizaciones.",
  servicios: [
    "Instalación de antenas TDT en Magán",
    "Reparación de antenas comunitarias en Magán",
    "Instalación de antenas parabólicas en Magán",
    "Sistemas de videoporteros en Magán",
    "Instalación de cámaras de seguridad en Magán",
    "Mantenimiento de sistemas de telecomunicaciones en Magán",
    "Filtros 5G contra interferencias en Magán",
    "Servicio de reparaciones urgentes en Magán"
  ],
  serviciosDestacados: [
    "Especialistas en TDT para hogares en Magán",
    "Instalación de parabólicas en chalets y urbanizaciones",
    "Videoporteros modernos para mayor seguridad",
    "Sistemas de cámaras de vigilancia en Magán"
  ],

  zonasCubiertas: [
    "El casco urbano de Magán",
    "Las nuevas urbanizaciones y zonas de chalets",
    "Comunidades de vecinos y pisos",
    "Fincas y naves en los alrededores",
    "Todas las calles del centro del pueblo"
  ],

  cobertura: [
    "Todo el término municipal de Magán",
    "Desde el centro del pueblo hasta las urbanizaciones más nuevas",
    "Chalets y viviendas unifamiliares",
    "Comunidades de vecinos",
    "Fincas y propiedades en los alrededores"
  ],

  testimonios: [
    {
      nombre: "Javier G.",
      comentario: "Les llamé por la mañana y por la tarde ya tenía la antena arreglada. Un servicio rapidísimo y muy eficaz aquí en Magán. Totalmente recomendables.",
      puntuacion: 5,
      servicio: "Reparación antena",
      ubicacion: "Cliente en Magán"
    },
    {
      nombre: "Isabel M.",
      comentario: "Muy profesionales y amables. Me explicaron todo muy bien y el precio fue exactamente el que me dijeron en el presupuesto. Da gusto encontrar gente tan honesta.",
      puntuacion: 5,
      servicio: "Instalación TDT",
      ubicacion: "Cliente en Magán"
    },
    {
      nombre: "Francisco R.",
      comentario: "Les pedí presupuesto para un videoportero en el chalet y todo perfecto. Fueron muy limpios y cuidadosos durante la instalación. Un trabajo de diez.",
      puntuacion: 5,
      servicio: "Videoportero",
      ubicacion: "Cliente en Magán"
    }
  ],

   caracteristicas: [
    {
      titulo: "Somos de aquí, como tú",
      descripcion: "Te atendemos directamente, sin intermediarios. Conocemos el pueblo, sus calles y sus necesidades, y te ofrecemos un trato cercano y familiar.",
      icono: "Home"
    },
    {
      titulo: "Trabajos bien hechos, para que duren",
      descripcion: "No nos gustan las chapuzas. Usamos buenos materiales y hacemos las cosas con cuidado para que no tengas que volver a llamarnos por el mismo problema en mucho tiempo.",
      icono: "Signal"
    },
    {
      titulo: "Precios honestos y transparentes",
      descripcion: "Te damos un presupuesto claro y sin compromiso antes de empezar. Un precio justo y competitivo por un trabajo profesional.",
      icono: "Users"
    },
    {
      titulo: "Tu satisfacción es nuestra meta",
      descripcion: "No nos vamos de tu casa hasta que todo funcione a la perfección y tú estés completamente satisfecho con el trabajo realizado.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Merece la pena arreglar la antena comunitaria o es mejor que ponga una individual?",
      answer: "Depende de cada caso. Siempre te daremos nuestra opinión más honesta. Si la avería comunitaria es sencilla, suele ser más económico repararla. Si la instalación es muy vieja, a veces una antena individual puede darte mejor resultado. Lo valoramos contigo."
    },
    {
      question: "¿Cuánto tiempo tardáis en hacer una instalación nueva?",
      answer: "Una instalación estándar, como poner una antena de TDT o un videoportero en una vivienda unifamiliar, solemos dejarla lista en una sola mañana o tarde, para que no te causemos molestias."
    },
    {
      question: "¿El presupuesto que me dais es gratuito?",
      answer: "Sí, por supuesto. Nos acercamos a tu casa en Magán, vemos lo que necesitas y te damos un presupuesto detallado sin ningún tipo de coste ni compromiso por tu parte."
    },
    {
      question: "¿Qué garantía tienen los trabajos que hacéis?",
      answer: "Todos nuestros trabajos están cubiertos por la garantía legal. Te la entregamos por escrito en la factura para que tengas total tranquilidad y confianza en nuestro servicio."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Magán | Advanced Telecom`,
  description: `✅ Tu antenista de confianza en Magán. Solucionamos problemas de señal TDT, instalamos parabólicas y videoporteros en tu casa. Presupuesto rápido y gratis.`,
  keywords: `antenista Magán, antenas TDT Magán, instalación antenas Toledo, reparación antenas Magán, telecomunicaciones Magán, videoporteros Magán`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-magan'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Antenista en Magán | Advanced Telecom',
    description: '✅ Tu antenista de confianza en Magán. Solucionamos problemas de señal TDT, instalamos parabólicas y videoporteros en tu casa. Presupuesto rápido y gratis.',
    url: 'https://advanced-telecom.es/antenista-magan',
    siteName: 'Advanced Telecom',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Antenista en Magán | Advanced Telecom',
    description: '✅ Tu antenista de confianza en Magán. Solucionamos problemas de señal TDT, instalamos parabólicas y videoporteros en tu casa. Presupuesto rápido y gratis.',
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
                    <span className="text-brand-green font-medium">Magán</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu antenista de confianza en <span className="text-brand-green">Magán</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si eres de Magán y necesitas un técnico de antenas rápido, honesto y que conozca el pueblo, no busques más. Te ofrecemos un servicio profesional para solucionar cualquier avería con tu televisión o portero automático, con la cercanía que solo un servicio local te puede dar y la garantía de más de 25 años de experiencia.
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

           {/* Cobertura específica de Magán */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos servicio en todo el término municipal de Magán</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Desde el centro del pueblo hasta las urbanizaciones más nuevas, nuestro equipo se desplaza para darte una solución eficaz y sin largas esperas.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en Magán incluye:</h3>
                      <p className="text-brand-black-light">Cobertura completa en todo el municipio</p>
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
                      <span>Para urgencias, estamos en tu casa en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados para hogares en Magán */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones para tu hogar en Magán</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te ofrecemos un servicio claro y directo para cada una de tus necesidades, con la máxima calidad.</p>
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

          {/* Por qué elegir nuestros servicios en Magán */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué tus vecinos de Magán confían en nosotros?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra mejor carta de presentación es el trabajo bien hecho y la confianza de la gente del pueblo.</p>
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

         {/* Testimonios de clientes en Magán */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que dicen de nosotros en el pueblo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La opinión de tus vecinos es la mejor prueba de nuestro compromiso.</p>
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
                    <div className="text-sm text-brand-black-light">{testimonio.ubicacion}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Magán */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus dudas de siempre, respondidas de forma clara</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí resolvemos algunas de las preguntas que más nos hacen tus vecinos.</p>
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

          {/* CTA Section específica para Magán */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Problemas con la antena en Magán?</h2>
                  <p className="text-xl mb-8 text-white/90">Llámanos y te damos presupuesto sin compromiso. Nos acercamos a tu casa en Magán cuando mejor te venga.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Magán" className="flex items-center gap-2">
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