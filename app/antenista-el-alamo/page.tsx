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
  nombre: "El Álamo",
  slug: "el-alamo",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28607",
  poblacion: "9.657",
  superficie: "22,2",
  descripcion: "Tu antenista de confianza en El Álamo. Más de 25 años de experiencia resolviendo problemas de TDT, parabólicas y videoporteros. Servicio cercano y profesional.",
  servicios: [
    "Instalación de antenas TDT en El Álamo",
    "Antenas parabólicas para zonas residenciales",
    "Videoporteros para seguridad y comodidad",
    "Cámaras de vigilancia CCTV",
    "Solución de interferencias por 5G",
    "Servicio de reparaciones urgentes"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones de videoporteros",
    "Servicio técnico local",
    "Atención urgente en menos de 2 horas"
  ],

  zonasCubiertas: [
    "El casco urbano",
    "Todas las urbanizaciones y residenciales",
    "Nuevos chalets y zonas en desarrollo",
    "Fincas y naves del término municipal"
  ],

  cobertura: [
    { zona: "El casco urbano", disponible: true },
    { zona: "Todas las urbanizaciones y residenciales", disponible: true },
    { zona: "Nuevos chalets y zonas en desarrollo", disponible: true },
    { zona: "Fincas y naves del término municipal", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Beatriz G.",
      comentario: "Después de la última tormenta de viento, la antena quedó fatal. Les llamé y vinieron súper rápido. Me lo solucionaron en un momento. Un servicio de 10.",
      puntuacion: 5
    },
    {
      nombre: "Carlos V.",
      comentario: "Quería instalar un videoportero en el chalet y me asesoraron genial sobre el modelo que mejor se adaptaba. La instalación fue muy limpia y el técnico muy amable.",
      puntuacion: 5
    },
    {
      nombre: "Javier P.",
      comentario: "Se nota que son profesionales honestos. Les llamé por un problema de señal pensando que tendría que cambiar la antena y al final era solo un cable. Me cobraron lo justo. Así da gusto.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Somos de la zona",
      descripcion: "No somos una gran empresa impersonal. Somos tus técnicos locales, conocemos El Álamo y entendemos tus necesidades mejor que nadie.",
      icono: "Home"
    },
    {
      titulo: "Trabajos bien hechos, sin chapuzas",
      descripcion: "Nos enorgullecemos de hacer un trabajo limpio, profesional y duradero. Tu instalación quedará perfecta tanto por dentro como por fuera.",
      icono: "Shield"
    },
    {
      titulo: "Precios competitivos y honestos",
      descripcion: "Te ofrecemos un presupuesto justo y ajustado, sin sacrificar la calidad de los materiales ni del servicio. Lo que presupuestamos es lo que pagas.",
      icono: "Users"
    },
    {
      titulo: "Tu satisfacción es nuestra meta",
      descripcion: "No consideramos un trabajo terminado hasta que tú estás 100% conforme con el resultado. Tu confianza es lo más importante para nosotros.",
      icono: "Star"
    }
  ],

  faqs: [
    {
      question: "¿Tengo que comprar yo la antena o los materiales?",
      answer: "No, para nada. Nosotros nos encargamos de todo. Te proporcionamos todos los materiales necesarios (antenas, cableado, amplificadores, etc.) de las mejores marcas para garantizar la calidad del servicio."
    },
    {
      question: "Mi casa es nueva, ¿hacéis instalaciones desde cero?",
      answer: "¡Claro! Es una de nuestras especialidades. Realizamos la instalación completa de telecomunicaciones en tu vivienda nueva en El Álamo, desde el tejado hasta cada una de las tomas de televisión."
    },
    {
      question: "¿Qué pasa si el problema está en la antena de la comunidad?",
      answer: "También trabajamos para comunidades de propietarios. Si detectamos que la avería es comunitaria, podemos hablar con el presidente o administrador para ofrecer un presupuesto para la reparación general."
    },
    {
      question: "¿Vais a cualquier urbanización de El Álamo?",
      answer: "Sí, sin excepción. Damos servicio tanto en el casco urbano como en todas las urbanizaciones y zonas residenciales del término municipal de El Álamo."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en El Álamo | Advanced Telecom`,
  description: `✅ Tu antenista en El Álamo. Solucionamos al instante problemas de TDT, parabólicas y videoporteros. Más de 25 años de experiencia. ¡Pide presupuesto!`,
  keywords: `antenista El Álamo, antenas TDT El Álamo, instalación antenas Madrid, reparación antenas El Álamo, telecomunicaciones El Álamo, videoporteros El Álamo`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-el-alamo'
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

export default function ElAlamoPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de El Álamo */}
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
                      Tu antenista de confianza para {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si vives en {municipioData.nombre} y la señal de tu tele te está dando dolores de cabeza, o si quieres mejorar la seguridad de tu casa con un nuevo videoportero, estás en el lugar indicado. Te ofrecemos un servicio cercano, profesional y con la garantía de más de 25 años de experiencia resolviendo todo tipo de averías e instalaciones en la zona.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama y cuéntanos tu caso
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide tu presupuesto sin compromiso
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

           {/* Cobertura específica de El Álamo */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos servicio en todo el municipio de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nos movemos por cada rincón de nuestro pueblo para darte una solución rápida y eficaz, sin importar dónde vivas.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestras zonas de actuación en {municipioData.nombre} incluyen:</h3>
                      <p className="text-brand-black-light">Cobertura completa en todo el término municipal</p>
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
                      <span>Si es una urgencia, te atendemos en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en El Álamo */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Todas las soluciones de antenista que necesitas en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tenemos un servicio para cada necesidad, siempre utilizando materiales de primera calidad y la tecnología más actual.</p>
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

          {/* Por qué elegir nuestros servicios en El Álamo */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué tus vecinos de {municipioData.nombre} nos eligen?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra mejor publicidad es la confianza que depositas en nosotros cada día.</p>
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

         {/* Testimonios de clientes en El Álamo */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que se dice de nosotros en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La opinión de la gente de tu pueblo es la que de verdad cuenta.</p>
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

          {/* FAQs específicas de El Álamo */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas más frecuentes como antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí tienes respuesta a algunas de las preguntas que más nos hacen.</p>
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

          {/* CTA Section específica para El Álamo */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos? Tu antenista en {municipioData.nombre} te escucha</h2>
                  <p className="text-xl mb-8 text-white/90">Si vives en {municipioData.nombre}, no dudes en llamar o escribir. Cuéntanos tu problema o proyecto y te daremos un presupuesto gratuito y sin ningún tipo de compromiso para solucionarlo.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href={`https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20${municipioData.nombre}`} className="flex items-center gap-2">
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