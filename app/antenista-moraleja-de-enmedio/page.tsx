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
  nombre: "Moraleja de Enmedio",
  slug: "moraleja-de-enmedio",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28950",
  poblacion: "5.234",
  superficie: "4,9",
  descripcion: "Le ofrecemos un servicio técnico de antenas especializado en Moraleja de Enmedio. Con más de 25 años de experiencia, nuestro compromiso es proporcionar soluciones eficaces y duraderas para cualquier necesidad de telecomunicaciones en su hogar, comunidad de vecinos o empresa, combinando la última tecnología con un trato directo y profesional.",
  servicios: [
    "Instalación y Reparación de Antenas TDT en Moraleja de Enmedio",
    "Instalación y Orientación de Parabólicas",
    "Instalación y Mantenimiento de Videoporteros",
    "Sistemas de Videovigilancia (CCTV)",
    "Amplificadores de señal digital",
    "Mantenimiento técnico especializado"
  ],
   serviciosDestacados: [
    "Experiencia Local Comprobada",
    "Diagnóstico Preciso y Soluciones Eficaces",
    "Transparencia y Presupuestos Cerrados",
    "Garantía Total por Escrito"
  ],

  zonasCubiertas: [
    "El casco urbano",
    "Todas las urbanizaciones y zonas residenciales",
    "Chalets y viviendas unifamiliares",
    "Comunidades de propietarios",
    "Polígonos industriales y locales comerciales"
  ],

  cobertura: [
    { zona: "El casco urbano", disponible: true },
    { zona: "Todas las urbanizaciones y zonas residenciales", disponible: true },
    { zona: "Chalets y viviendas unifamiliares", disponible: true },
    { zona: "Comunidades de propietarios", disponible: true },
    { zona: "Polígonos industriales y locales comerciales", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Administrador de Fincas",
      comentario: "Contratamos sus servicios para solucionar un problema en la antena comunitaria y el resultado fue excelente. Un trabajo muy profesional, coordinado y eficaz. Totalmente recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Javier R.",
      comentario: "Un servicio impecable. El técnico fue puntual, muy correcto y solucionó la avería de la TDT en mi chalet rápidamente. Se nota la profesionalidad y la experiencia.",
      puntuacion: 5
    },
    {
      nombre: "Beatriz M.",
      comentario: "Solicité presupuesto para la instalación de un videoportero. El asesoramiento fue muy claro y el trabajo se ejecutó de forma limpia y en el plazo acordado. Muy satisfechos.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Experiencia Local Comprobada",
      descripcion: "Llevamos más de dos décadas dando servicio en Moraleja de Enmedio. Este conocimiento nos permite ofrecer las soluciones más adecuadas para las características específicas de la señal en la zona.",
      icono: "MapPin"
    },
    {
      titulo: "Diagnóstico Preciso y Soluciones Eficaces",
      descripcion: "No creemos en soluciones temporales. Utilizamos tecnología de diagnóstico avanzada para encontrar la raíz del problema y aplicar una reparación definitiva y garantizada.",
      icono: "Wrench"
    },
    {
      titulo: "Transparencia y Presupuestos Cerrados",
      descripcion: "Le ofrecemos un presupuesto detallado y sin compromiso antes de realizar cualquier intervención. El precio acordado es el precio final, sin costes imprevistos.",
      icono: "CheckCircle"
    },
    {
      titulo: "Garantía Total por Escrito",
      descripcion: "Todos nuestros trabajos, tanto las reparaciones como las instalaciones nuevas, están respaldados por una garantía completa por escrito para su total seguridad y confianza.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Cuál es el coste de un servicio de antenista?",
      answer: "El precio varía según la naturaleza de la avería o la instalación. Para ofrecerle un coste exacto, realizamos una valoración previa y le entregamos un presupuesto cerrado y sin ningún compromiso."
    },
    {
      question: "¿Con qué plazos de tiempo trabajan?",
      answer: "Para servicios no urgentes, asignamos una cita en un plazo de 24-48 horas, adaptándonos a su disponibilidad. Para averías graves, nuestro servicio de urgencia garantiza la asistencia en menos de dos horas."
    },
    {
      question: "¿Ofrecen mantenimiento para comunidades de propietarios?",
      answer: "Sí. Disponemos de planes de mantenimiento preventivo para comunidades de vecinos en Moraleja de Enmedio, diseñados para asegurar el buen estado de la instalación y evitar averías costosas."
    },
    {
      question: "¿Los materiales que utilizan están homologados?",
      answer: "Por supuesto. Trabajamos exclusivamente con materiales y componentes de primeras marcas que cumplen con toda la normativa vigente, asegurando así la máxima calidad y durabilidad en cada instalación."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Moraleja de Enmedio | Advanced Telecom`,
  description: `Servicio técnico de antenista en Moraleja de Enmedio. Especialistas en TDT, parabólicas y videoporteros. Soluciones rápidas y garantizadas. Presupuesto sin compromiso.`,
  keywords: `antenista Moraleja de Enmedio, antenas TDT Moraleja de Enmedio, instalación antenas Madrid, reparación antenas Moraleja de Enmedio, telecomunicaciones Moraleja de Enmedio, videoporteros Moraleja de Enmedio`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-moraleja-de-enmedio'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Antenista en Moraleja de Enmedio | Advanced Telecom',
    description: 'Servicio técnico de antenista en Moraleja de Enmedio. Especialistas en TDT, parabólicas y videoporteros. Soluciones rápidas y garantizadas.',
    url: 'https://advanced-telecom.es/antenista-moraleja-de-enmedio',
    siteName: 'Advanced Telecom',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antenista en Moraleja de Enmedio | Advanced Telecom',
    description: 'Servicio técnico de antenista en Moraleja de Enmedio. Especialistas en TDT, parabólicas y videoporteros.',
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
          {/* Hero Section específico de Moraleja de Enmedio */}
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
                    <span className="text-brand-green font-medium">Moraleja de Enmedio</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista Profesional</span> en Moraleja de Enmedio
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Le ofrecemos un servicio técnico de antenas especializado en Moraleja de Enmedio. Con más de 25 años de experiencia, nuestro compromiso es proporcionar soluciones eficaces y duraderas para cualquier necesidad de telecomunicaciones en su hogar, comunidad de vecinos o empresa, combinando la última tecnología con un trato directo y profesional.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Contactar por teléfono
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

           {/* Cobertura de Servicio en Todo Moraleja de Enmedio */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura de Servicio en Todo Moraleja de Enmedio</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro profundo conocimiento del municipio nos permite ofrecer una asistencia rápida y eficiente en todas sus áreas.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio incluye:</h3>
                      <p className="text-brand-black-light">Cobertura completa en todo Moraleja de Enmedio</p>
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
                      <span>Garantizamos un servicio de urgencia en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Catálogo de Servicios Profesionales */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Catálogo de Servicios Profesionales</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Disponemos de una gama completa de soluciones para asegurar el óptimo funcionamiento de sus sistemas de televisión y comunicación.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <Zap className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Instalación y Reparación de Antenas TDT</h3>
                    </div>
                  </div>
                  <p className="text-brand-black-light mb-4">
                    Realizamos un diagnóstico preciso con medidores de campo para identificar el origen de problemas como pixelación o pérdida de canales. Optimizamos, reparamos o instalamos su antena para garantizar una recepción de señal estable y de máxima calidad.
                  </p>
                  <Link href="/servicios/antenas-tdt" className="inline-flex items-center text-brand-green font-medium hover:text-green-700 transition-colors">
                    Más información <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <Eye className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Instalación y Orientación de Parabólicas</h3>
                    </div>
                  </div>
                  <p className="text-brand-black-light mb-4">
                    Instalamos antenas parabólicas para la recepción de canales internacionales y plataformas de satélite. Aseguramos una orientación milimétrica y una instalación robusta para una señal perfecta y resistente a las inclemencias del tiempo.
                  </p>
                  <Link href="/servicios/antenas-parabolicas" className="inline-flex items-center text-brand-green font-medium hover:text-green-700 transition-colors">
                    Más información <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <Phone className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Instalación y Mantenimiento de Videoporteros</h3>
                    </div>
                  </div>
                  <p className="text-brand-black-light mb-4">
                    Modernice la seguridad y el control de acceso a su propiedad. Somos especialistas en la instalación y reparación de sistemas de videoportero para viviendas unifamiliares y grandes comunidades de vecinos.
                  </p>
                  <Link href="/servicios/videoporteros" className="inline-flex items-center text-brand-green font-medium hover:text-green-700 transition-colors">
                    Más información <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <Shield className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Sistemas de Videovigilancia (CCTV)</h3>
                    </div>
                  </div>
                  <p className="text-brand-black-light mb-4">
                    Diseñamos e implementamos sistemas de cámaras de seguridad a medida para proteger su hogar o negocio. Ofrecemos soluciones de alta definición con acceso remoto desde su teléfono móvil para su total tranquilidad.
                  </p>
                  <Link href="/servicios/videovigilancia" className="inline-flex items-center text-brand-green font-medium hover:text-green-700 transition-colors">
                    Más información <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Nuestro Compromiso de Calidad y Confianza */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestro Compromiso de Calidad y Confianza</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra reputación se basa en cuatro pilares fundamentales que aplicamos en cada trabajo.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {municipioData.caracteristicas?.map((caracteristica, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="p-4 bg-brand-green/10 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                      {IconComponent(caracteristica.icono)}
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-brand-green">{index + 1}.</span>
                      <h3 className="text-xl font-semibold text-brand-black mt-2">{caracteristica.titulo}</h3>
                    </div>
                    <p className="text-brand-black-light">{caracteristica.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

         {/* La Opinión de Nuestros Clientes en Moraleja de Enmedio */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La Opinión de Nuestros Clientes en Moraleja de Enmedio</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de nuestros clientes es nuestro mejor aval.</p>
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
                    <div className="text-sm text-brand-black-light">
                      {testimonio.nombre === "Administrador de Fincas" ? "Administrador de Fincas" : 
                       testimonio.nombre === "Javier R." ? "Propietario en Moraleja de Enmedio" : 
                       "Cliente en Moraleja de Enmedio"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Preguntas Frecuentes */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos aquí las dudas más habituales sobre nuestros servicios de antenista.</p>
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

          {/* Contacte con su Antenista en Moraleja de Enmedio */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su Antenista en Moraleja de Enmedio</h2>
                  <p className="text-xl mb-8 text-white/90">Si desea solicitar un presupuesto, realizar una consulta o programar una visita técnica, no dude en ponerse en contacto con nosotros. Estaremos encantados de atenderle.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Moraleja%20de%20Enmedio" className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Enviar un WhatsApp
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