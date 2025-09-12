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
  nombre: "Casarrubios del Monte",
  slug: "casarrubios-del-monte",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45950",
  poblacion: "4.200",
  superficie: "132,4",
  descripcion: "Antenista profesional en Casarrubios del Monte especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este importante municipio de Toledo.",
  servicios: [
    "Instalación de antenas TDT en Casarrubios del Monte",
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
    "Casco urbano",
    "Urbanización Calypo-Fado",
    "Otras urbanizaciones y residenciales",
    "Polígonos industriales",
    "Fincas rústicas en los alrededores"
  ],

  cobertura: [
    { zona: "Casco urbano", disponible: true },
    { zona: "Urbanización Calypo-Fado", disponible: true },
    { zona: "Área industrial", disponible: true },
    { zona: "Urbanizaciones", disponible: true },
    { zona: "Viviendas aisladas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Laura F.",
      comentario: "Vivo en Calypo-Fado y la señal de la TDT nunca fue muy buena. Les llamé y en la misma tarde me ajustaron la antena. Ahora se ve perfecto. Un servicio de diez.",
      puntuacion: 5
    },
    {
      nombre: "David M.",
      comentario: "Necesitábamos instalar cámaras en nuestro negocio y nos asesoraron genial. Un trabajo muy profesional y limpio. Totalmente recomendables como antenistas en la zona.",
      puntuacion: 5
    },
    {
      nombre: "Carlos S.",
      comentario: "Muy formales y puntuales. Nos solucionaron un problema en la antena comunitaria que otros no supieron arreglar. Se nota la experiencia que tienen.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Respuesta ágil y local",
      descripcion: "Al estar en la zona, reducimos los tiempos de espera y conocemos las particularidades técnicas de Casarrubios del Monte y sus urbanizaciones.",
      icono: "Clock"
    },
    {
      titulo: "Soluciones a medida",
      descripcion: "No ofrecemos paquetes estándar. Estudiamos tu caso concreto para darle la solución que realmente necesita, sin sobrecostes ni componentes innecesarios.",
      icono: "Wrench"
    },
    {
      titulo: "Presupuestos honestos",
      descripcion: "Le proporcionamos un presupuesto claro y por escrito antes de cualquier intervención. Nuestra política es de total transparencia y precios justos.",
      icono: "CheckCircle"
    },
    {
      titulo: "Trabajos garantizados",
      descripcion: "Respaldamos la calidad de nuestro trabajo con una garantía completa en todas las instalaciones y reparaciones, para tu total confianza.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Atienden servicios de antenista en la urbanización Calypo-Fado?",
      answer: "Sí, por supuesto. La urbanización Calypo-Fado es una de nuestras principales zonas de servicio en Casarrubios del Monte. Conocemos perfectamente tus características y ofrecemos cobertura total."
    },
    {
      question: "¿Cuánto tiempo tardan en dar una cita para una reparación de antena?",
      answer: "Para averías no urgentes, solemos dar cita en un plazo de 24-48 horas. Si se trata de una urgencia, como una pérdida total de señal, nos comprometemos a estar en tu domicilio en menos de dos horas."
    },
    {
      question: "¿Instalan antenas parabólicas para ver canales extranjeros en Casarrubios del Monte?",
      answer: "Sí, es uno de nuestros servicios más solicitados. Instalamos y orientamos tu antena parabólica para que pueda sintonizar canales de Reino Unido, Alemania, Francia, Italia y otros países."
    },
    {
      question: "¿El presupuesto que dan por teléfono es definitivo?",
      answer: "Ofrecemos una estimación por teléfono. Para dar un presupuesto cerrado y definitivo, preferimos revisar la instalación in situ, un servicio que realizamos de forma gratuita y sin compromiso en todo Casarrubios del Monte."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Casarrubios del Monte | Servicio Rápido`,
  description: `✅ Servicio de antenista en Casarrubios del Monte. Más de 25 años de experiencia en TDT, parabólicas y videoporteros. Presupuesto gratuito. ¡Llámanos!`,
  keywords: `antenista Casarrubios del Monte, antenas TDT Casarrubios del Monte, instalación antenas Toledo, reparación antenas Casarrubios del Monte, telecomunicaciones Casarrubios del Monte`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-casarrubios-del-monte'
  },
  robots: {
    index: false,
    follow: false,
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
                      Tu <span className="text-brand-green">antenista de confianza</span> en {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Somos tu servicio técnico local para todo lo relacionado con antenas y telecomunicaciones en {municipioData.nombre}. Con más de dos décadas de experiencia, ofrecemos soluciones profesionales para asegurar la perfecta recepción de la señal de TDT, instalar tu antena parabólica o modernizar los sistemas de seguridad y comunicación de tu hogar o comunidad en este importante municipio de Toledo.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar para un diagnóstico
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Solicitar presupuesto ahora
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

           {/* Cobertura específica de Casarrubios del Monte */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Atención en todo el municipio de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra proximidad nos permite ofrecer un servicio ágil y eficaz, desplazándonos a cualquier punto que necesite asistencia, incluyendo urbanizaciones y zonas rurales.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestras zonas de actuación incluyen:</h3>
                      <p className="text-brand-black-light">Cobertura completa en {municipioData.nombre}</p>
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
                      <span>Servicio de urgencia: llegamos en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Casarrubios del Monte */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestra gama de servicios de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Ofrecemos un portfolio completo de soluciones para mantener tus sistemas de telecomunicaciones en perfecto estado de funcionamiento.</p>
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

          {/* Por qué elegir nuestros servicios en Casarrubios del Monte */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Pilares de nuestro servicio de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra reputación se fundamenta en la rapidez, la eficacia y un compromiso total con cada cliente.</p>
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

         {/* Testimonios de clientes en Casarrubios del Monte */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La experiencia de nuestros clientes en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de quienes ya han confiado en nosotros es nuestro mejor aval.</p>
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

          {/* FAQs específicas de Casarrubios del Monte */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas sobre antenistas en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí contestamos a algunas de las preguntas más habituales de nuestros vecinos.</p>
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

          {/* CTA Section específica para Casarrubios del Monte */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacta con tu antenista en {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">Si necesita una solución rápida, profesional y garantizada para tu antena o sistema de telecomunicaciones, llámenos. Estaremos encantados de asesorarle y ofrecerle un presupuesto personalizado con atención domiciliaria en {municipioData.nombre}.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Casarrubios%20del%20Monte" className="flex items-center gap-2">
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