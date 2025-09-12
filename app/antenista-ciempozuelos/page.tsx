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
  nombre: "Ciempozuelos",
  slug: "ciempozuelos",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28350",
  poblacion: "25.615",
  superficie: "49,1",
  descripcion: "Con más de 25 años al servicio de los vecinos de Ciempozuelos, somos su instalador de telecomunicaciones de confianza. Expertos en la recepción de señal de TDT, instalación de antenas parabólicas, modernización de porteros automáticos y despliegue de sistemas de videovigilancia en todo el término municipal.",
  servicios: [
    "Instalación de antenas TDT en Ciempozuelos",
    "Antenas parabólicas para zonas residenciales",
    "Porteros automáticos y videoporteros",
    "Sistemas de videovigilancia CCTV",
    "Amplificadores de señal digital",
    "Mantenimiento técnico especializado"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones residenciales",
    "Servicio técnico local"
  ],

  zonasCubiertas: [
    "Casco Urbano y centro",
    "Urbanización Cuevas de la Barrera",
    "Barrio de la Estación",
    "Zonas industriales y empresariales",
    "Viviendas y fincas en las afueras"
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
      nombre: "María José L.",
      comentario: "El técnico que vino a mi casa en Ciempozuelos fue un gran profesional. Detectó la avería en minutos y la dejó solucionada. Un servicio de 10.",
      puntuacion: 5
    },
    {
      nombre: "Julián P.",
      comentario: "Les encargamos la renovación de todos los porteros automáticos de nuestra comunidad en Ciempozuelos y el resultado ha sido fantástico. Serios, limpios y muy eficientes.",
      puntuacion: 5
    },
    {
      nombre: "Beatriz G.",
      comentario: "Muy contenta con la instalación de la parabólica. Un trabajo fino y a buen precio. Sin duda, mi antenista de referencia en Ciempozuelos.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Especialistas en la Zona",
      descripcion: "Conocemos a la perfección Ciempozuelos y los retos específicos de la señal en cada barrio.",
      icono: "Home"
    },
    {
      titulo: "Ejecución Impecable",
      descripcion: "Trabajamos con herramientas de precisión y materiales de primeras marcas para instalaciones que perduran en el tiempo.",
      icono: "Signal"
    },
    {
      titulo: "Asesoramiento Honesto",
      descripcion: "Le explicamos las opciones de forma clara y le recomendamos siempre la solución más eficiente y económica para su caso.",
      icono: "Users"
    },
    {
      titulo: "Garantía total del servicio",
      descripcion: "Respaldamos cada uno de nuestros trabajos con una garantía por escrito, dándole total tranquilidad sobre su inversión.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué tipo de instalaciones realiza su antenista en Ciempozuelos?",
      answer: "En Ciempozuelos, cubrimos todo el espectro: desde una simple orientación de antena TDT para un particular hasta la instalación completa de telecomunicaciones (ICT) en un edificio nuevo."
    },
    {
      question: "¿Por qué es importante contratar un antenista local en Ciempozuelos?",
      answer: "Un antenista local conoce los repetidores que dan servicio a Ciempozuelos y las posibles 'zonas sombra', lo que le permite encontrar la solución más rápida y efectiva para garantizar una señal óptima."
    },
    {
      question: "¿Pueden arreglar una antena de TDT que se ve mal en Ciempozuelos?",
      answer: "Sí, es nuestro día a día. Diagnosticamos el origen del problema (cableado, amplificador, orientación) y lo reparamos con garantía para que vuelva a ver la televisión perfectamente."
    },
    {
      question: "¿Ofrecen presupuesto cerrado como antenistas en Ciempozuelos?",
      answer: "Por supuesto. Antes de realizar cualquier trabajo, le proporcionamos un presupuesto cerrado y sin compromiso. Con nosotros sabrá el coste final desde el principio, sin sorpresas."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Ciempozuelos | Advanced Telecom`,
  description: `Antenista en Ciempozuelos con más de 25 años de experiencia. Especialistas en TDT, antenas parabólicas, porteros automáticos y videovigilancia.`,
  keywords: `antenista Ciempozuelos, antenas TDT Ciempozuelos, instalación antenas Madrid, reparación antenas Ciempozuelos, telecomunicaciones Ciempozuelos, porteros automáticos Ciempozuelos`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-ciempozuelos'
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

export default function CiempozuelosPage() {
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
                      Antenista en <span className="text-brand-green">{municipioData.nombre}</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      {municipioData.descripcion}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar para asistencia
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Solicitar presupuesto detallado
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura garantizada de antenista en todo {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo técnico se desplaza a cualquier punto de la localidad, asegurando una respuesta rápida y eficaz.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de servicio habituales en {municipioData.nombre}</h3>
                      <p className="text-brand-black-light">Ofrecemos asistencia completa en todas las áreas del municipio.</p>
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
                      <span>Compromiso de rapidez: llegamos en menos de 2 horas</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestros servicios de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Disponemos de un amplio abanico de soluciones técnicas para particulares, comunidades de vecinos y empresas en {municipioData.nombre}.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Ventajas de elegir nuestro Antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Combinamos la solvencia de una empresa consolidada con el trato cercano de un técnico local.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Vecinos de {municipioData.nombre} que confían en nosotros</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La mejor publicidad es la que nos hacen nuestros clientes satisfechos.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas habituales sobre antenistas en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aclaramos las dudas más frecuentes para que tome la mejor decisión.</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesita una solución? hable con un Antenista en {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">Póngase en contacto con nuestro equipo técnico para recibir asesoramiento y un presupuesto gratuito. Acudiremos a tu domicilio en {municipioData.nombre} para valorar sus necesidades y ofrecerle la mejor solución.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Ciempozuelos" className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Contactar vía whatsApp
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