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
  nombre: "Borox",
  slug: "borox",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45222",
  poblacion: "3.124",
  superficie: "52,3",
  descripcion: "Antenista profesional en Borox especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio toledano.",
  servicios: [
    "Instalación de antenas TDT en Borox",
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
    "Sesena",
    "Esquivias",
    "Yuncler",
    "Toda la comarca toledana"
  ],

  cobertura: [
    { zona: "Sesena", disponible: true },
    { zona: "Esquivias", disponible: true },
    { zona: "Yuncler", disponible: true },
    { zona: "Toda la comarca toledana", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Carmen Ruiz",
      comentario: "Increíble transformación en nuestra conectividad. Los técnicos de Advanced Telecom convirtieron nuestra casa en Borox en un hogar inteligente con señal perfecta.",
      puntuacion: 5
    },
    {
      nombre: "Roberto Jiménez",
      comentario: "Después de años con problemas de señal, finalmente encontramos la solución definitiva. Tecnología de vanguardia y servicio impecable en Borox.",
      puntuacion: 5
    },
    {
      nombre: "Elena Martín",
      comentario: "Profesionalidad absoluta. Instalaron nuestro sistema completo de telecomunicaciones en tiempo récord. Borox nunca había tenido un servicio tan avanzado.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Técnicos certificados y homologados",
      descripcion: "Antenistas homologados con más de 25 años de experiencia en Borox",
      icono: "Shield"
    },
    {
      titulo: "Sin coste de desplazamiento",
      descripcion: "No cobramos desplazamiento en Borox y todas las urbanizaciones cercanas",
      icono: "MapPin"
    },
    {
      titulo: "Servicio económico y de calidad",
      descripcion: "Precios competitivos con la mejor calidad del mercado en Borox",
      icono: "Star"
    },
    {
      titulo: "Disponibilidad inmediata",
      descripcion: "Atendemos su solicitud rápido y en el día con garantía completa",
      icono: "Clock"
    }
  ],

  faqs: [
    {
      question: "¿Qué hace especial el servicio de Advanced Telecom en Borox?",
      answer: "Somos pioneros en tecnología avanzada para Borox. Combinamos más de 25 años de experiencia con las últimas innovaciones en telecomunicaciones, ofreciendo soluciones personalizadas que transforman la conectividad de cada hogar y empresa."
    },
    {
      question: "¿Cómo optimizan la señal en las zonas rurales de Borox?",
      answer: "Utilizamos tecnología de amplificación inteligente y sistemas de orientación de precisión específicamente calibrados para las características geográficas de Borox y su entorno, garantizando señal óptima incluso en las zonas más alejadas."
    },
    {
      question: "¿Ofrecen servicios de modernización tecnológica integral?",
      answer: "Absolutamente. Transformamos hogares tradicionales en espacios conectados inteligentes, integrando sistemas de telecomunicaciones, videovigilancia avanzada y domótica, adaptados a las necesidades específicas de las familias de Borox."
    },
    {
      question: "¿Cuál es su compromiso con la innovación en Borox?",
      answer: "Nos comprometemos a mantener Borox a la vanguardia tecnológica. Actualizamos constantemente nuestros equipos y métodos, ofreciendo las últimas tendencias en telecomunicaciones con certificación profesional y garantía extendida."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Borox | Advanced Telecom`,
  description: `Antenistas en Borox. Servicio técnico en TDT, satélite, porteros automáticos, video porteros y cámaras de seguridad. ¡Sin coste de desplazamiento!`,
  keywords: `antenista Borox, antenas TDT Borox, instalación antenas Toledo, reparación antenas Borox, telecomunicaciones Borox, antenista barato Borox`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-borox'
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

export default function BoroxPage() {
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
                    <span className="text-brand-green font-medium">Borox</span>
                  </nav>

              

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Expertos en <span className="text-brand-green">Antenas Borox</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Líderes en servicios de antenista en Borox con tecnología de vanguardia. Soluciones integrales para hogares y empresas con garantía total.
                    </p>
                    <p className="text-lg text-brand-black-light leading-relaxed">
                      Respuesta inmediata las 24 horas. Diagnóstico gratuito y reparaciones express. Tu satisfacción es nuestra prioridad número uno.
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

           {/* Cobertura específica de Borox */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Especialistas en telecomunicaciones para Borox y comarca</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conectamos Borox con la mejor tecnología. Más de 25 años de experiencia garantizan instalaciones perfectas y mantenimiento profesional para toda la zona sur de Toledo.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Área de servicio completo</h3>
                      <p className="text-brand-black-light">Cobertura integral en Borox y municipios limítrofes:</p>
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

          {/* Servicios especializados en Borox */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones avanzadas de telecomunicaciones en Borox</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Transformamos la conectividad de Borox con tecnología de última generación. Desde instalaciones residenciales hasta proyectos empresariales complejos, ofrecemos servicios integrales con certificación profesional y garantía extendida.</p>
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

          {/* Por qué elegir nuestros servicios en Borox */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La elección inteligente para Borox</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Pioneros en innovación tecnológica para Borox. Combinamos experiencia consolidada con las últimas tendencias en telecomunicaciones, ofreciendo soluciones personalizadas que superan expectativas y optimizan la conectividad de cada hogar y empresa.</p>
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

         {/* Testimonios de clientes en Borox */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes con los que trabajamos el servicio de antenista en Borox</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tenemos un equipo altamente calificado para atender clientes residenciales y empresariales en Borox que nos llamen para instalación, reparación o mantenimiento de antenas y vídeo porteros. Nuestro trabajo y servicio son 100% garantizados ya que somos antenistas homologados.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Borox</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Borox */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en Borox</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Contamos con más de 25 años de experiencia en reparación y servicio técnico de antenas, en el sector residencial y empresarial. El personal de Advanced Telecom es experto en todo tipo de antenas y estamos siempre listos para servirle.</p>
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

          {/* CTA Section específica para Borox */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">PIDE TU PRESUPUESTO SIN COMPROMISO</h2>
                  <p className="text-xl mb-8 text-white/90">Atendemos su solicitud rápido y en el día. Cada uno de nuestros trabajos lo entregamos con la respectiva garantía. Nuestros presupuestos los adaptamos a la medida de sus necesidades y siempre estamos atentos a ofrecer el mejor servicio a precios razonables y competitivos.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Borox" className="flex items-center gap-2">
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