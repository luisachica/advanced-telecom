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
  nombre: "Layos",
  slug: "layos",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45123",
  poblacion: "398",
  superficie: "54,2",
  descripcion: "Tu experto en antenas y telecomunicaciones en Layos. Servicio técnico especializado para chalets y viviendas con soluciones a medida utilizando tecnología avanzada.",
  servicios: [
    "Diagnóstico y optimización de TDT en Layos",
    "Instalación de TV por satélite (parabólicas)",
    "Sistemas avanzados de videoportero",
    "Circuitos cerrados de TV (CCTV)",
    "Filtros de rechazo de banda (5G)",
    "Reparación de averías con diagnóstico preciso"
  ],
   serviciosDestacados: [
    "Especialistas en chalets",
    "Tecnología avanzada",
    "Soporte post-instalación"
  ],

  zonasCubiertas: [
    "El pueblo de Layos",
    "Urbanizaciones del entorno del Golf",
    "Residenciales y chalets de nueva construcción",
    "Fincas y casas de campo"
  ],

  cobertura: [
    { zona: "El pueblo de Layos", disponible: true },
    { zona: "Urbanizaciones del entorno del Golf", disponible: true },
    { zona: "Residenciales y chalets de nueva construcción", disponible: true },
    { zona: "Fincas y casas de campo", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Javier M.",
      comentario: "Tenía un problema de señal muy complejo que otros no supieron solucionar. Vinieron con sus equipos de medición, encontraron el fallo exacto y lo arreglaron. Unos verdaderos profesionales.",
      puntuacion: 5
    },
    {
      nombre: "Beatriz S.",
      comentario: "Quería instalar unas cámaras de seguridad en el chalet y el asesoramiento fue de diez. Me explicaron todo con detalle y la instalación fue muy limpia y discreta. Totalmente recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Luis G.",
      comentario: "Después de instalarme la parabólica, tuve una duda sobre cómo sintonizar unos canales. Les llamé y me guiaron por teléfono con mucha paciencia. Un servicio postventa excelente.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Equipos de última generación",
      descripcion: "Usamos medidores de campo y herramientas profesionales para garantizar máxima precisión técnica",
      icono: "Zap"
    },
    {
      titulo: "Materiales de alta durabilidad",
      descripcion: "Componentes de las mejores marcas que resisten el tiempo y las inclemencias meteorológicas",
      icono: "Shield"
    },
    {
      titulo: "Soluciones 100% personalizadas",
      descripcion: "Estudiamos tus necesidades y la arquitectura de tu vivienda para una solución a medida",
      icono: "Users"
    },
    {
      titulo: "Soporte post-instalación",
      descripcion: "Te ofrecemos soporte y resolvemos tus dudas para que saques el máximo partido a tu sistema",
      icono: "Phone"
    }
  ],

  faqs: [
    {
      question: "¿Qué es un amplificador de mástil y por qué lo recomendáis en chalets?",
      answer: "Es un dispositivo que se instala junto a la antena para potenciar la señal antes de que se distribuya por la casa. En chalets con varias tomas de TV o cableado largo, es fundamental para asegurar que la señal llegue con fuerza a todas partes."
    },
    {
      question: "¿Puedo integrar el videoportero con mi móvil?",
      answer: "Sí. Trabajamos con modelos de última generación que te permiten responder a la llamada del videoportero y abrir la puerta desde tu smartphone, estés donde estés, como si estuvieras en casa."
    },
    {
      question: "¿El cableado que usáis es para exterior? ¿Aguanta el sol y la lluvia?",
      answer: "Por supuesto. Todo el cableado que instalamos en exteriores cuenta con protección contra los rayos ultravioleta (UV) y es totalmente estanco para resistir la lluvia y la humedad, garantizando una larga vida útil."
    },
    {
      question: "¿Qué diferencia hay entre una cámara de seguridad normal y una IP?",
      answer: "Las cámaras IP se conectan a tu red de internet, lo que te permite ver las imágenes en tiempo real desde cualquier dispositivo (móvil, tablet, ordenador) y desde cualquier lugar del mundo."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Layos | Advanced Telecom`,
  description: `📡 Tu antenista experto en Layos. Mejoramos la señal de tu TDT, instalamos parabólicas, videoporteros y CCTV en chalets. Garantía total. ¡Contacta ahora!`,
  keywords: `antenista Layos, antenas TDT Layos, instalación antenas Toledo, reparación antenas Layos, telecomunicaciones Layos, videoporteros Layos, CCTV chalets Layos`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-layos'
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

export default function LayosPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Layos */}
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
                      Tu experto en <span className="text-brand-green">antenas y telecomunicaciones</span> en {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Para que disfrutes de tu chalet en {municipioData.nombre} con la mejor calidad de imagen y la máxima tranquilidad, te ofrecemos un servicio técnico especializado. Modernizamos tus sistemas de antena, comunicación y seguridad con soluciones a medida, utilizando la tecnología más avanzada para garantizar un resultado impecable y duradero.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama para un asesoramiento
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

           {/* Cobertura específica de Layos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Asistencia técnica en todo el término de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tanto si tu vivienda está en el pueblo como en las urbanizaciones cercanas al campo de golf, te garantizamos una cobertura total y un servicio de proximidad.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en {municipioData.nombre} incluye:</h3>
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
                      <span>Atención de urgencias garantizada en menos de 2 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Layos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Un catálogo de servicios para tu confort y seguridad</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te ofrecemos una gama completa de soluciones diseñadas para mejorar tu calidad de vida y proteger tu hogar en {municipioData.nombre}.</p>
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

          {/* Por qué elegir nuestros servicios en Layos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestros pilares: tecnología, calidad y servicio</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra filosofía de trabajo se basa en ofrecerte lo mejor, desde el primer contacto hasta el soporte post-instalación.</p>
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

         {/* Testimonios de clientes en Layos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La experiencia de tus vecinos de {municipioData.nombre} con nuestro servicio</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La mejor prueba de nuestro compromiso es la valoración de quienes ya disfrutan de nuestras soluciones.</p>
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

          {/* FAQs específicas de Layos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos respuesta a tus preguntas más técnicas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos algunas de las dudas que podrías tener sobre nuestros servicios en {municipioData.nombre}.</p>
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

          {/* CTA Section específica para Layos */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para modernizar tu hogar en {municipioData.nombre}?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para recibir un asesoramiento técnico y un presupuesto detallado sin compromiso. Mejora tu calidad de vida.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Layos" className="flex items-center gap-2">
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