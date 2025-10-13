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
  nombre: "Nambroca",
  slug: "nambroca",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45190",
  poblacion: "",
  superficie: "",
  descripcion: "Servicio de antenista profesional en Nambroca. Especialistas en TDT, parabólicas y videoporteros para chalets y comunidades. Presupuesto sin compromiso.",
  servicios: [
    "Instalación y reparación de antenas TDT",
    "Instalación y orientación de antenas parabólicas",
    "Sistemas de videoportero y portero automático",
    "Instalación de videovigilancia (CCTV)",
    "Solución a interferencias 5G",
    "Servicio de reparaciones urgentes"
  ],
  serviciosDestacados: [
    "Alta cualificación técnica",
    "Materiales homologados",
    "Garantía profesional"
  ],

  zonasCubiertas: [
    "El casco urbano de Nambroca",
    "La urbanización Las Nieves",
    "Nuevos desarrollos residenciales y chalets",
    "Fincas y naves del término municipal"
  ],

  cobertura: [
    { zona: "El casco urbano de Nambroca", disponible: true },
    { zona: "La urbanización Las Nieves", disponible: true },
    { zona: "Nuevos desarrollos residenciales y chalets", disponible: true },
    { zona: "Fincas y naves del término municipal", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Gerente de empresa en Nambroca",
      comentario: "Contactamos con ellos para la instalación del sistema de videovigilancia en nuestra empresa y el servicio fue impecable. Muy profesionales, serios y eficientes.",
      puntuacion: 5
    },
    {
      nombre: "Propietario de chalet",
      comentario: "Vivo en la urbanización Las Nieves y tenía problemas constantes con la señal de la TDT. Vinieron, detectaron el problema en el amplificador y lo solucionaron definitivamente. Muy recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Presidente de comunidad",
      comentario: "Gestionaron la reparación de la antena colectiva de nuestra comunidad con gran profesionalidad. Se coordinaron con la administración y ejecutaron el trabajo en el plazo previsto.",
      puntuacion: 5
    }
  ],

  caracteristicas: [
    {
      titulo: "Alta Cualificación Técnica",
      descripcion: "Nuestro equipo está en constante formación para dominar las últimas tecnologías del sector.",
      icono: "Briefcase"
    },
    {
      titulo: "Compromiso con la Calidad",
      descripcion: "Materiales de primeras marcas y componentes homologados por la UE.",
      icono: "Shield"
    },
    {
      titulo: "Presupuestos Transparentes y Detallados",
      descripcion: "Presupuesto cerrado y por escrito antes de cualquier intervención.",
      icono: "Eye"
    },
    {
      titulo: "Garantía Profesional por Escrito",
      descripcion: "Garantía completa en todas las instalaciones y reparaciones efectuadas.",
      icono: "CheckCircle"
    }
  ],

  faqs: [
    {
      question: "¿Realizan el mantenimiento de la antena colectiva de una comunidad?",
      answer: "Sí. Ofrecemos planes de mantenimiento preventivo para comunidades de propietarios en Nambroca. Están diseñados para asegurar el buen estado de la instalación y evitar averías imprevistas."
    },
    {
      question: "¿Qué incluye un presupuesto estándar de instalación de antena?",
      answer: "Incluye la antena, el mástil y los anclajes, el cableado exterior necesario, la mano de obra y la puesta en marcha del servicio, garantizando señal correcta en una toma principal."
    },
    {
      question: "¿Es necesario cambiar toda la instalación para solucionar interferencias 5G?",
      answer: "No. Lo más habitual y eficaz es instalar un filtro específico en la cabecera de la instalación, justo después de la antena, que bloquea las frecuencias de la telefonía móvil."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencia bancaria, pago con tarjeta a través de TPV móvil y Bizum."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Nambroca | Advanced Telecom`,
  description: `Servicio de antenista profesional en Nambroca. Especialistas en TDT, parabólicas y videoporteros para chalets y comunidades. Presupuesto sin compromiso.`,
  keywords: `antenista Nambroca, antenas TDT Nambroca, instalación antenas Toledo, reparación antenas Nambroca, telecomunicaciones Nambroca, videoporteros Nambroca`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-nambroca'
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
          {/* Servicio de Antenista Profesional en Nambroca */}
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
                    <span className="text-brand-green font-medium">Nambroca</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Servicio de antenista profesional en Nambroca
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Ofrecemos un servicio técnico de antenistas altamente cualificado para particulares, comunidades de propietarios y empresas en Nambroca. Con más de 25 años de experiencia en el sector, garantizamos soluciones eficaces y duraderas para cualquier incidencia relacionada con la señal de televisión o sus sistemas de comunicación y seguridad.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Contactar para una intervención
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

           {/* Cobertura Completa en Nambroca y Urbanizaciones */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en Nambroca y urbanizaciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo técnico ofrece una cobertura total en todo el término municipal, asegurando una respuesta ágil y profesional en cada rincón de la localidad.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de cobertura en Nambroca</h3>
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
                      <span>Servicio de urgencia con asistencia garantizada en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nuestro Catálogo de Servicios Especializados */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestro catálogo de servicios especializados</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Disponemos de una gama completa de soluciones técnicas para satisfacer cualquier necesidad, utilizando siempre la tecnología más avanzada.</p>
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

          {/* ¿Por Qué Confiar en Nuestro Servicio Técnico? */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué confiar en nuestro servicio técnico?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra profesionalidad, experiencia y compromiso con la calidad son la mejor garantía para nuestros clientes.</p>
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

         {/* La Confianza de Nuestros Clientes en Nambroca */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de nuestros clientes en Nambroca</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de los vecinos y empresas de la localidad es nuestro principal objetivo y nuestra mejor referencia.</p>
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

          {/* Preguntas Frecuentes sobre Nuestros Servicios */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre nuestros servicios</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos aquí las dudas más habituales de nuestros clientes en Nambroca.</p>
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

          {/* Contacte con su Antenista en Nambroca */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista en Nambroca</h2>
                  <p className="text-xl mb-8 text-white/90">Si desea solicitar un presupuesto, resolver cualquier duda o programar una visita técnica, no dude en ponerse en contacto con nosotros. Estaremos encantados de atenderle.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Nambroca" className="flex items-center gap-2">
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