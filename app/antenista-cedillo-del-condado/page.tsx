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
  nombre: "Cedillo del Condado",
  slug: "cedillo-del-condado",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45191",
  poblacion: "3.245",
  superficie: "52,3",
  descripcion: "Antenista profesional en Cedillo del Condado especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio de La Sagra en Toledo.",
  servicios: [
    "Instalación de antenas TDT en Cedillo del Condado",
    "Antenas parabólicas para zonas residenciales",
    "Porteros automáticos y videoporteros",
    "Sistemas de videovigilancia CCTV",
    "Filtros para interferencias 4G/5G",
    "Reparaciones urgentes de antenas"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones residenciales",
    "Servicio técnico local en La Sagra"
  ],

  zonasCubiertas: [
    "Núcleo urbano",
    "Nuevas zonas residenciales",
    "Polígono industrial",
    "Fincas y chalets en los alrededores",
    "Áreas rurales"
  ],

  cobertura: [
    { zona: "Núcleo urbano", disponible: true },
    { zona: "Nuevas zonas residenciales", disponible: true },
    { zona: "Polígono industrial", disponible: true },
    { zona: "Fincas y chalets en los alrededores", disponible: true },
    { zona: "Áreas rurales", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Jesús M.",
      comentario: "Se me fue la señal de la tele un domingo. Les llamé pensando que no vendrían y en poco más de una hora ya tenía al técnico en casa. Un servicio de urgencia real. Muy agradecido.",
      puntuacion: 5
    },
    {
      nombre: "Isabel G.",
      comentario: "Les encargamos la instalación de un videoportero en el chalet y todo ha ido sobre ruedas. Un trabajo limpio, profesional y a un precio muy competitivo. Los recomiendo.",
      puntuacion: 5
    },
    {
      nombre: "Francisco R.",
      comentario: "Grandes profesionales. Se nota que conocen bien la zona de Cedillo. Me asesoraron sobre la mejor antena para mi casa y ahora la tele se ve de lujo.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Antenista local especializado",
      descripcion: "Conocimiento específico de Cedillo del Condado y sus necesidades técnicas",
      icono: "Home"
    },
    {
      titulo: "Instalaciones de calidad",
      descripcion: "Equipos profesionales y técnicas avanzadas para óptima recepción",
      icono: "Signal"
    },
    {
      titulo: "Atención personalizada",
      descripcion: "Servicio directo y soluciones adaptadas a cada hogar en Cedillo del Condado",
      icono: "Users"
    },
    {
      titulo: "Garantía profesional",
      descripcion: "Garantía completa en todas nuestras instalaciones y reparaciones",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué hago si mi antena se ha dañado por una tormenta en Cedillo del Condado?",
      answer: "Llámenos de inmediato. Además, si tiene seguro de hogar, le preparamos el informe técnico necesario para que pueda tramitar la reparación con tu compañía aseguradora."
    },
    {
      question: "¿Cuánto se tarda en instalar una antena de TDT nueva?",
      answer: "Una instalación estándar en una vivienda unifamiliar en Cedillo del Condado suele completarse en unas pocas horas, dejándola totalmente operativa el mismo día."
    },
    {
      question: "¿Pueden mejorar la señal de TDT en una comunidad de vecinos?",
      answer: "Por supuesto. Somos especialistas en instalaciones colectivas. Auditamos la instalación de tu edificio en Cedillo del Condado y proponemos las mejoras necesarias para garantizar una señal perfecta para todos los vecinos."
    },
    {
      question: "¿Dan presupuesto por teléfono para un servicio de antenista?",
      answer: "Podemos darle una orientación inicial por teléfono, pero para ofrecer un presupuesto cerrado y preciso, preferimos realizar una visita gratuita a tu domicilio en Cedillo del Condado para valorar el trabajo sobre el terreno."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Cedillo del Condado | TDT y Parabólicas`,
  description: `📡 Antenista profesional en Cedillo del Condado. Instalación y reparación de antenas TDT, parabólicas y videoporteros. Garantía y presupuesto sin compromiso.`,
  keywords: `antenista Cedillo del Condado, antenas TDT Cedillo del Condado, instalación antenas Toledo, reparación antenas La Sagra, telecomunicaciones Cedillo del Condado`,
  alternates: {
    canonical: 'https://antenastoledo.com/antenista-cedillo-del-condado'
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
                    <span className="text-brand-green font-medium">{municipioData.nombre}</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Ofrecemos soluciones integrales de telecomunicaciones para todos los vecinos y empresas de Cedillo del Condado. Como tu antenista local con más de 25 años de trayectoria, nos especializamos en garantizar una calidad de señal perfecta, instalar y reparar antenas de todo tipo, y modernizar los sistemas de comunicación y seguridad de tu hogar o comunidad en esta localidad de La Sagra.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668679500" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Contactar para una revisión
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pedir presupuesto detallado
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

           {/* Cobertura específica de Cedillo del Condado */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Asistencia técnica en todo Cedillo del Condado y alrededores</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra base local nos permite ofrecer una respuesta rápida y eficiente, cubriendo la totalidad del término municipal y sus áreas colindantes.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Llegamos a todas las zonas de {municipioData.nombre}:</h3>
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
                      <span>Compromiso de urgencia: en tu domicilio en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Cedillo del Condado */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Descubra nuestras soluciones de telecomunicaciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Ponemos a tu disposición un completo abanico de servicios para resolver cualquier incidencia o llevar a cabo tu nuevo proyecto de instalación.</p>
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

          {/* Por qué elegir nuestros servicios en Cedillo del Condado */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué somos tu antenista de confianza en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra dedicación se refleja en la calidad de nuestro trabajo y en la confianza que los vecinos depositan en nosotros.</p>
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

         {/* Testimonios de clientes en Cedillo del Condado */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La opinión de los vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La mejor prueba de nuestro buen hacer es la valoración de nuestros clientes.</p>
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

          {/* FAQs específicas de Cedillo del Condado */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas y respuestas sobre nuestro servicio de antenista</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aclaramos algunas de las dudas más frecuentes sobre nuestro trabajo en la localidad.</p>
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

          {/* CTA Section específica para Cedillo del Condado */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hablemos de tu proyecto en {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">Si necesita un antenista profesional, eficiente y de confianza, póngase en contacto con nosotros. Estudiaremos tu caso y le ofreceremos la mejor solución.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href={`https://wa.me/34668679500?text=Hola%2C%20necesito%20un%20antenista%20en%20${municipioData.nombre.replace(/ /g, '%20')}`} className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Contactar para una revisión
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                      <a href="tel:+34668679500" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" /> Pedir presupuesto detallado
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
