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
  nombre: "Anover de Tajo",
  slug: "anover-del-tajo",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45250",
  poblacion: "5.654",
  superficie: "39,2",
  descripcion: "Técnico antenista especializado en Anover de Tajo. Instalaciones profesionales de telecomunicaciones adaptadas a las características del municipio toledano.",
  servicios: [
    "Instalación antenas TDT en Anover de Tajo",
    "Sistemas parabólicos digitales",
    "Videoporteros y control de acceso",
    "Circuitos cerrados de videovigilancia",
    "Amplificación de señal terrestre",
    "Reparaciones y mantenimiento técnico"
  ],
   serviciosDestacados: [
    "Especialista en TDT digital",
    "Instalaciones domiciliarias",
    "Técnico local certificado"
  ],

  zonasCubiertas: [
    "Casco urbano",
    "Zona residencial",
    "Área industrial",
    "Urbanizaciones",
    "Viviendas aisladas"
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
      nombre: "Francisco Herrera",
      comentario: "Excelente antenista en Anover de Tajo. Solucionó problemas de recepción que otros no pudieron.",
      puntuacion: 5
    },
    {
      nombre: "Ana Belén Castro",
      comentario: "Profesional y eficiente. La instalación quedó perfecta desde el primer día.",
      puntuacion: 5
    },
    {
      nombre: "Roberto Jiménez",
      comentario: "Servicio técnico de primera en Anover de Tajo. Muy recomendable y con garantía.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Técnico especializado local",
      descripcion: "Experiencia específica en Anover de Tajo y conocimiento del terreno toledano",
      icono: "Home"
    },
    {
      titulo: "Tecnología avanzada",
      descripcion: "Equipamiento profesional y métodos actualizados para máxima eficiencia",
      icono: "Signal"
    },
    {
      titulo: "Servicio personalizado",
      descripcion: "Atención directa y soluciones técnicas adaptadas a cada vivienda",
      icono: "Users"
    },
    {
      titulo: "Garantía total",
      descripcion: "Cobertura completa en trabajos realizados con respaldo técnico",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué servicios técnicos ofrecen en Anover de Tajo?",
      answer: "Realizamos instalaciones de antenas TDT, sistemas parabólicos, videoporteros y circuitos de videovigilancia. Servicio técnico completo con garantía en Anover de Tajo."
    },
    {
      question: "¿Son especialistas en antenas TDT en Anover de Tajo?",
      answer: "Sí, contamos con más de 25 años de experiencia en instalaciones TDT. Técnicos certificados que garantizan óptima recepción en todo Anover de Tajo."
    },
    {
      question: "¿Realizan reparaciones de antenas en Anover de Tajo?",
      answer: "Por supuesto. Diagnosticamos y reparamos todo tipo de averías en antenas TDT y parabólicas. Servicio de mantenimiento técnico especializado en Anover de Tajo."
    },
    {
      question: "¿Cuál es el coste del servicio en Anover de Tajo?",
      answer: "Ofrecemos presupuestos personalizados sin compromiso. Precios competitivos y transparentes para todos nuestros servicios técnicos en Anover de Tajo."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista Anover de Tajo | Técnico TDT Toledo`,
  description: `Antenista profesional en Anover de Tajo. Instalación TDT, parabólicas, videoporteros y videovigilancia. Servicio técnico garantizado en Toledo.`,
  keywords: `antenista Anover de Tajo, antenas TDT Toledo, instalación antenas Anover, reparación antenas Toledo, telecomunicaciones Anover de Tajo`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-en-anover-del-tajo'
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

export default function AnoverDelTajoPage() {
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
                    <span className="text-brand-green font-medium">Anover de Tajo</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Técnico Antenista</span> en Anover de Tajo
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Especialista en telecomunicaciones con más de 25 años de trayectoria en Anover de Tajo. Instalaciones TDT, sistemas parabólicos, videoporteros y videovigilancia. Cobertura técnica completa en el municipio toledano.
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

           {/* Cobertura técnica en Anover de Tajo */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio técnico integral en Anover de Tajo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Servicio técnico profesional disponible en todo el municipio toledano</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Áreas de Actuación en Anover de Tajo</h3>
                      <p className="text-brand-black-light">Técnico especializado en todo el municipio</p>
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

          {/* Servicios técnicos especializados */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones técnicas en Anover de Tajo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones profesionales de telecomunicaciones adaptadas a las necesidades del municipio toledano.</p>
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

          {/* Ventajas de nuestro servicio técnico */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Ventajas de elegir nuestro servicio en Anover de Tajo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Experiencia local, calidad profesional y compromiso con cada instalación</p>
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

         {/* Opiniones de clientes satisfechos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Experiencias de clientes en Anover de Tajo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Valoraciones reales de vecinos que han confiado en nuestro servicio técnico</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Anover de Tajo</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Preguntas frecuentes del servicio */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Dudas habituales sobre nuestro servicio en Anover de Tajo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos las dudas más comunes sobre nuestros servicios técnicos en el municipio</p>
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

          {/* Contacto y presupuesto */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Buscas técnico antenista en Anover de Tajo?</h2>
                  <p className="text-xl mb-8 text-white/90">Solicita presupuesto personalizado sin coste. Nos desplazamos a tu domicilio en Anover de Tajo para evaluar tus necesidades.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Anover%20de%20Tajo" className="flex items-center gap-2">
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