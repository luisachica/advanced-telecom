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
  nombre: "Montesión",
  slug: "montesion",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45004",
  poblacion: "1.200",
  superficie: "8,5",
  descripcion: "Antenista especializado en la urbanización Montesión, Toledo. Servicios premium de telecomunicaciones para chalets y viviendas de alta gama.",
  servicios: [
    "Señal TDT y 4K de alta fidelidad para Montesión",
    "Antenas parabólicas de alto rendimiento",
    "Videoporteros avanzados y domótica",
    "CCTV y seguridad perimetral",
    "Optimización de redes Wifi",
    "Reparaciones discretas y eficaces"
  ],
   serviciosDestacados: [
    "Especialización en viviendas de alta gama",
    "Servicio premium y discreto",
    "Tecnología de última generación"
  ],

  zonasCubiertas: [
    "Todas las calles y parcelas de Montesión",
    "Chalets individuales y viviendas de alto standing",
    "Zonas comunes y accesos de la urbanización",
    "Servicio garantizado en cualquier punto de Montesión"
  ],

  cobertura: [
    { zona: "Todas las calles y parcelas de Montesión", disponible: true },
    { zona: "Chalets individuales y viviendas de alto standing", disponible: true },
    { zona: "Zonas comunes y accesos de la urbanización", disponible: true },
    { zona: "Servicio garantizado en cualquier punto de Montesión", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Javier V.",
      comentario: "Necesitaba un sistema de cámaras para la parcela que fuera eficaz pero discreto. Me ofrecieron una solución muy avanzada y la instalación fue impecable. Muy profesionales.",
      puntuacion: 5
    },
    {
      nombre: "Marta R.",
      comentario: "El técnico fue extremadamente profesional y cuidadoso al trabajar en casa. Resolvieron un problema complejo con la señal que afectaba a nuestro sistema de home cinema. Servicio de primera.",
      puntuacion: 5
    },
    {
      nombre: "Carlos D.",
      comentario: "La mejor atención que he recibido. Me optimizaron la red wifi y ahora tengo cobertura perfecta en toda la casa y el jardín. Un trabajo excelente.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Especialización en viviendas de alta gama",
      descripcion: "Entendemos las exigencias técnicas y estéticas de los chalets de Montesión. Nuestras instalaciones son impecables, funcionales y respetuosas con el diseño de tu casa.",
      icono: "Home"
    },
    {
      titulo: "Máxima confidencialidad y respeto",
      descripcion: "Tu privacidad es nuestra prioridad. Trabajamos con la más absoluta discreción y profesionalidad, garantizando una total confidencialidad.",
      icono: "Shield"
    },
    {
      titulo: "Componentes de las mejores marcas",
      descripcion: "Solo utilizamos materiales y tecnología de punta de los fabricantes líderes para garantizar un rendimiento superior y una durabilidad excepcional en cada instalación.",
      icono: "Signal"
    },
    {
      titulo: "Asesoramiento técnico personalizado",
      descripcion: "Te escuchamos y te ofrecemos la solución tecnológica que mejor se adapta a tu estilo de vida y a las características de tu hogar, no una solución genérica.",
      icono: "Users"
    }
  ],

  faqs: [
    {
      question: "¿Podéis integrar el videoportero con el sistema de domótica de mi casa?",
      answer: "Sí, por supuesto. Trabajamos con sistemas de videoportero compatibles con los principales estándares de domótica (KNX, etc.). Podemos integrar el control de acceso en la misma aplicación que usas para el resto de tu hogar."
    },
    {
      question: "Tengo una instalación de antena muy compleja, ¿tenéis experiencia?",
      answer: "Sí. Estamos especializados en instalaciones complejas con múltiples puntos de televisión, sistemas de amplificación avanzados y distribución de señal de satélite y TDT a toda la casa."
    },
    {
      question: "¿Cómo garantizáis la discreción durante el trabajo?",
      answer: "Nuestros técnicos son profesionales con gran experiencia, se presentan en vehículos sin rotulación excesiva y realizan su trabajo de forma eficiente y silenciosa, respetando siempre tu privacidad y la de tu familia."
    },
    {
      question: "¿Ofrecéis contratos de mantenimiento para mi instalación?",
      answer: "Sí. Para una total tranquilidad, te ofrecemos contratos de mantenimiento preventivo para asegurar que todos tus sistemas de telecomunicaciones y seguridad estén siempre en perfecto estado de funcionamiento."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Montesión, Toledo | Advanced Telecom`,
  description: withPhone(`Tu antenista de confianza en la urbanización Montesión. Servicio premium para TDT, parabólicas y videoporteros en tu chalet. Presupuesto sin compromiso.`),
  keywords: `antenista Montesión, antenas TDT Montesión, instalación antenas Toledo, videoporteros Montesión, telecomunicaciones Montesión, chalets alta gama`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-montesion'
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

export default function MontesionPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Montesión */}
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
                      <span className="text-brand-green">Tu servicio de antenista</span> para la urbanización {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si vives en la urbanización {municipioData.nombre} y buscas un servicio de antenista a la altura de tu hogar, has encontrado al especialista que necesitas. Te ofrecemos soluciones de alta gama para garantizar una señal de TV perfecta, una conexión a internet impecable y la máxima seguridad en tu chalet, todo ello con un servicio profesional y discreto.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar ahora
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

           {/* Cobertura específica de Montesión */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio exclusivo para todas las calles de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos cada rincón de la urbanización, lo que nos permite ofrecerte un servicio ágil y con un profundo conocimiento de las particularidades de la zona.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en {municipioData.nombre} incluye:</h3>
                      <p className="text-brand-black-light">Atención prioritaria para residentes en {municipioData.nombre}: llegamos en menos de 2 horas.</p>
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
                      <span>Tiempo de respuesta: Menos de 2 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Montesión */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones de telecomunicaciones para tu chalet en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Entendemos las necesidades de una vivienda de altas prestaciones y te ofrecemos servicios de la máxima calidad.</p>
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

          {/* Por qué elegir nuestros servicios en Montesión */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué somos el antenista de confianza en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra especialización, profesionalidad y discreción nos convierten en la elección ideal para tu hogar.</p>
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

         {/* Testimonios de clientes en Montesión */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La recomendación de tus vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La confianza de quienes ya nos conocen es nuestra mejor garantía.</p>
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
                    <div className="text-sm text-brand-black-light">Residente en {municipioData.nombre}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Montesión */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas sobre nuestro servicio en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí tienes las respuestas a algunas de las preguntas más específicas de la urbanización.</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en Montesión?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Nos desplazamos a tu domicilio en Montesión.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Montesión" className="flex items-center gap-2">
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