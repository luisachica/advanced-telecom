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
  nombre: "Seseña Nuevo",
  slug: "sesena-nuevo",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45223",
  poblacion: "26.000+",
  superficie: "71,0",
  descripcion: "Antenista profesional en Seseña Nuevo especializado en instalaciones y reparaciones de telecomunicaciones. Servicio rápido en Seseña Nuevo, Seseña Viejo, El Quiñón y Vallegrande.",
  servicios: [
    "Instalación y reparación de antenas TDT en Seseña Nuevo",
    "Instalación y orientación de antenas parabólicas y satélite",
    "Actualización de porteros automáticos y videoporteros",
    "Instalación de cámaras de seguridad CCTV",
    "Solución de interferencias 5G/4G y filtros LTE",
    "Reparaciones y mantenimiento de sistemas de telecomunicaciones"
  ],
  serviciosDestacados: [
    "Diagnóstico experto TDT",
    "Parabólicas y satélite",
    "Servicio técnico local en Seseña"
  ],

  zonasCubiertas: [
    "Cobertura total en todo el núcleo de Seseña Nuevo.",
    "Atención a comunidades de propietarios y viviendas unifamiliares.",
    "Servicio en urbanizaciones y zonas residenciales cercanas.",
    "También damos servicio en Seseña Viejo, El Quiñón y Vallegrande."
  ],

  cobertura: [
    { zona: "Cobertura total en todo el núcleo de Seseña Nuevo.", disponible: true }, 
    { zona: "Atención a comunidades de propietarios y viviendas unifamiliares", disponible: true },
    { zona: "Servicio en urbanizaciones y zonas residenciales cercanas", disponible: true },
    { zona: "También damos servicio en Seseña Viejo, El Quiñón y Vallegrande", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Presidente de comunidad en Seseña Nuevo",
      comentario: "Teníamos un problema general de señal en todo el bloque. Vinieron, revisaron la instalación central y lo dejaron perfecto para todos los vecinos. Muy profesionales y organizados.",
      puntuacion: 5
    },
    {
      nombre: "Marta G., Residente en Seseña Nuevo",
      comentario: "De repente, empecé a perder canales de la TDT. Les llamé, me explicaron que era por el 5G y me instalaron un filtro. Problema resuelto en menos de media hora. ¡Un alivio!",
      puntuacion: 5
    },
    {
      nombre: "Carlos P., Seseña Nuevo",
      comentario: "Quería instalar una parabólica para ver canales de mi país y ellos se encargaron de todo. Una instalación muy rápida, limpia y el técnico fue muy amable. Funcionamiento perfecto.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Especialización en la zona",
      descripcion: "Conocemos las infraestructuras de telecomunicaciones de Seseña Nuevo y sus alrededores como El Quiñón, lo que nos permite identificar y solucionar problemas con una eficacia y rapidez inigualables.",
      icono: "Home"
    },
    {
      titulo: "Equipos de alto rendimiento",
      descripcion: "Utilizamos solo materiales de marcas reconocidas que garantizan una recepción óptima, una mayor resistencia a las condiciones meteorológicas y una larga vida útil para toda su instalación.",
      icono: "Signal"
    },
    {
      titulo: "Precios claros y competitivos",
      descripcion: "Le ofrecemos un presupuesto cerrado y detallado antes de realizar cualquier intervención. Sin sorpresas, sin costes inesperados. Nuestra política es la máxima honestidad.",
      icono: "Users"
    },
    {
      titulo: "Trabajo totalmente garantizado ",
      descripcion: "Todas nuestras instalaciones y reparaciones están cubiertas por una garantía completa, que afecta tanto a las piezas y componentes como a la mano de obra realizada.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Se adaptan a mi horario para realizar la visita?",
      answer: "Sí. Somos flexibles y siempre intentamos coordinar la cita en el horario que mejor le convenga, incluyendo las primeras horas de la tarde para facilitar la conciliación laboral y familiar."
    },
    {
      question: "¿Cómo puedo tener buena señal de TV en todas las habitaciones de casa?",
      answer: "Mediante la instalación de un pequeño amplificador de vivienda y un distribuidor de señal, nos aseguramos de que la calidad de imagen sea perfecta y estable en cada una de las tomas de antena de su hogar."
    },
    {
      question: "¿Tiene algún coste que vengan a mi domicilio a darme un presupuesto?",
      answer: "Ninguno. El desplazamiento a su domicilio en Seseña Nuevo para evaluar el trabajo y proporcionarle un presupuesto detallado y sin ningún compromiso es completamente gratuito."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: " Para su mayor comodidad, aceptamos pago en efectivo, con tarjeta de crédito/débito a través de TPV móvil y también mediante Bizum."  
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Seseña Nuevo | Advanced Telecom`,
  description: `Antenistas en Seseña Nuevo. Instalación y reparación de antenas TDT y parabólicas, videoporteros y CCTV. Seseña Viejo, El Quiñón y Vallegrande.`,
  keywords: `antenista Seseña Nuevo, antenas TDT Seseña, instalación parabólicas Seseña, videoporteros Seseña, cámaras seguridad Seseña, reparación antenas Seseña`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-sesena'
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
                    <span className="text-brand-green font-medium">Seseña Nuevo</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Su especialista antenista </span> en Seseña Nuevo
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Ofrecemos un servicio de antenista rápido, eficiente y enfocado en las necesidades de los vecinos de Seseña Nuevo. Entendemos la importancia de una señal de televisión perfecta en su hogar y proporcionamos soluciones duraderas para cualquier tipo de vivienda, desde pisos en comunidades hasta chalets individuales.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Solicitar presupuesto gratuito
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Llamar para una urgencia
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  {/* Imagen principal */}
                  <div className=" mt-20 flex justify-center relative overflow-hidden rounded-xl ">
                    <Image
                      src="/images/telecom/antenistas-en-toledo-sur.jpg"
                      alt="Servicios de telecomunicaciones en Seseña Nuevo"
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

           {/* Cobertura específica de Seseña Nuevo */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Atención completa en Seseña Nuevo y alrededores</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo garantiza una cobertura total y un servicio de proximidad, no solo en Seseña Nuevo, sino también en las zonas colindantes para ofrecer una solución integral.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio principal incluye</h3>
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
                      <span>Nos comprometemos a dar una primera respuesta y diagnóstico en el mismo día.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Todos los servicios de telecomunicaciones que necesita</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Contamos con un abanico completo de servicios para asegurar que su instalación de antena esté siempre en perfecto estado.</p>
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

          {/* Por qué elegir nuestros servicios en Seseña Nuevo */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La elección de confianza para su antena en Seseña Nuevo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Elegir nuestro servicio es garantía de profesionalidad, eficiencia y un profundo conocimiento de la zona.</p>
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

         {/* Testimonios de clientes en Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La valoración de nuestros clientes en Seseña Nuevo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de los vecinos de Seseña Nuevo es nuestro principal objetivo y nuestra mejor carta de presentación.</p>
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

          {/* FAQs específicas de Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos sus dudas frecuentes</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Contestamos a las preguntas más habituales de nuestros clientes en la zona.</p>
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

          {/* CTA Section específica para Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista de proximidad en Seseña Nuevo</h2>
                  <p className="text-xl mb-8 text-white/90">Para cualquier consulta, avería o proyecto de instalación en Seseña Nuevo, no dude en llamarnos. Le ofreceremos una atención personalizada y la solución más adecuada y profesional a sus necesidades.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Aldea%20del%20Fresno" className="flex items-center gap-2">
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