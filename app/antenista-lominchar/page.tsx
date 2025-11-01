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
  nombre: "Lominchar",
  slug: "lominchar",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45910",
  poblacion: "1.500",
  superficie: "52,3",
  descripcion: "Tu antenista de confianza aquí, en Lominchar. Si eres de Lominchar y necesitas un técnico que conozca el pueblo y te dé un servicio honesto y eficaz, no busques más. Solucionamos cualquier problema con tu televisión, portero automático o antena, con la cercanía, la rapidez y la garantía que te mereces como vecino.",
  servicios: [
    "Arreglo de antenas TDT en Lominchar",
    "Instalación de antenas parabólicas",
    "Videoporteros para tu seguridad",
    "Cámaras de vigilancia",
    "Filtros para interferencias 5G",
    "Reparaciones urgentes de antenas"
  ],
   serviciosDestacados: [
    "Servicio local en Lominchar",
    "Reparaciones urgentes",
    "Presupuesto gratuito"
  ],

  zonasCubiertas: [
    "El casco urbano del pueblo",
    "Las zonas de chalets y nuevas viviendas",
    "Fincas, naves y casas de campo del término",
    "Cualquier calle o barrio de Lominchar"
  ],

  cobertura: [
    { zona: "El casco urbano del pueblo", disponible: true },
    { zona: "Las zonas de chalets y nuevas viviendas", disponible: true },
    { zona: "Fincas, naves y casas de campo del término", disponible: true },
    { zona: "Cualquier calle o barrio de Lominchar", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Javier G.",
      comentario: "Les llamé a mediodía porque no veía la tele y por la tarde ya lo tenía arreglado. Un servicio rapidísimo y muy eficaz aquí en el pueblo. Totalmente recomendables.",
      puntuacion: 5
    },
    {
      nombre: "María José S.",
      comentario: "Muy profesionales y majos. Me explicaron cuál era el problema de la antena y qué iban a hacer. Se agradece un trato tan claro y cercano.",
      puntuacion: 5
    },
    {
      nombre: "Francisco T.",
      comentario: "Les pedí presupuesto para instalar un videoportero en el chalet y me dieron el mejor precio de la zona. El trabajo quedó perfecto, muy limpios y cuidadosos.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Somos del pueblo",
      descripcion: "Te atendemos nosotros directamente, sin intermediarios ni centralitas. Conocemos Lominchar y a su gente, y eso se nota en el trato.",
      icono: "Users"
    },
    {
      titulo: "Trabajos bien hechos",
      descripcion: "Nos gusta hacer las cosas bien a la primera, utilizando buenos materiales para que la reparación o la instalación te dure muchos años.",
      icono: "CheckCircle"
    },
    {
      titulo: "Precios justos y honestos",
      descripcion: "Te damos un presupuesto claro y sin compromiso. Un precio de aquí, sin abusos ni sorpresas de última hora en la factura.",
      icono: "Shield"
    },
    {
      titulo: "Tu satisfacción es lo primero",
      descripcion: "Nuestro objetivo es que quedes contento con el trabajo y que nos recomiendes a tus vecinos. Esa es nuestra mejor publicidad.",
      icono: "Star"
    }
  ],

  faqs: [
    {
      question: "¿Merece la pena arreglar mi antena vieja o pongo una nueva?",
      answer: "Depende del estado en que se encuentre. Siempre te daremos una opinión honesta. Si la antena está en buen estado y solo necesita un ajuste o una pieza nueva, te lo diremos. Si está muy deteriorada y va a seguir dando problemas, te recomendaremos cambiarla."
    },
    {
      question: "¿Cuánto tiempo tardáis en hacer una instalación normal?",
      answer: "Una instalación estándar, como poner una antena nueva en una casa o un videoportero, solemos dejarla lista en una sola mañana o tarde, para que te quedes con todo funcionando el mismo día."
    },
    {
      question: "Si el problema es de la comunidad, ¿qué hago?",
      answer: "Nosotros podemos hacer una medición en tu casa para confirmarlo. Si vemos que el fallo viene de la instalación comunitaria, te lo decimos para que puedas hablar con el presidente o administrador y que ellos nos contacten."
    },
    {
      question: "¿Tenéis garantía en las reparaciones?",
      answer: "Sí, por supuesto. Todos nuestros trabajos, tanto las instalaciones nuevas como las reparaciones, cuentan con su correspondiente garantía por escrito, para que tengas total tranquilidad."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Lominchar | Advanced Telecom`,
  description: `✅ Tu antenista de confianza en Lominchar. Arreglamos tu TDT, instalamos parabólicas y videoporteros. Presupuesto gratis y servicio local garantizado.`,
  keywords: `antenista Lominchar, antenas TDT Lominchar, instalación antenas Madrid, reparación antenas Lominchar, telecomunicaciones Lominchar`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-en-lominchar'
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
          {/* Hero Section específico de Lominchar */}
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
                    <span className="text-brand-green font-medium">Lominchar</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu <span className="text-brand-green">antenista de confianza</span> aquí, en Lominchar
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      {municipioData.descripcion}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="https://wa.me/34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Obtén información
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Te damos presupuesto
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

           {/* Cobertura específica de Lominchar */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos servicio en todo Lominchar, de punta a punta</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nos desplazamos a cualquier punto del término municipal para darte una solución, sin que tengas que esperar días.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en Lominchar incluye:</h3>
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

          {/* Servicios especializados en Lominchar */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones para tu hogar en Lominchar</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te ofrecemos un servicio claro y directo para cada una de tus necesidades.</p>
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

          {/* Por qué elegir nuestros servicios en Lominchar */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué llamar a tu antenista de Lominchar?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te damos razones claras para que confíes en un servicio cercano y profesional.</p>
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

         {/* Testimonios de clientes en Lominchar */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que dicen de nosotros tus vecinos de Lominchar</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La confianza de la gente del pueblo es nuestro mayor orgullo.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Lominchar</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Lominchar */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus dudas de siempre, respondidas con claridad</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí resolvemos algunas de las preguntas que más nos hacéis los vecinos.</p>
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

          {/* CTA Section específica para Lominchar */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos? Tu antenista en Lominchar te atiende</h2>
                  <p className="text-xl mb-8 text-white/90">Si tienes cualquier problema con tu antena o quieres pedir un presupuesto, no dudes en llamar o mandar un WhatsApp. Te atenderemos encantados y te daremos la mejor solución para tu casa.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Lominchar" className="flex items-center gap-2">
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