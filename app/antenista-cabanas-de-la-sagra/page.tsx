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
  nombre: "Cabañas de la Sagra",
  slug: "cabanas-de-la-sagra",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45592",
  poblacion: "1.847",
  superficie: "23,4",
  descripcion: "Antenista especializado en Cabañas de la Sagra con más de 25 años de experiencia. Servicios técnicos profesionales para este municipio toledano en constante crecimiento.",
  servicios: [
    "Instalación de antenas TDT en Cabañas de la Sagra",
    "Antenas parabólicas para nuevas construcciones",
    "Porteros automáticos digitales",
    "Sistemas de videovigilancia avanzados",
    "Amplificadores para zonas de baja señal",
    "Mantenimiento preventivo especializado"
  ],
   serviciosDestacados: [
    "Especialistas en nuevas urbanizaciones",
    "Instalaciones para chalets",
    "Servicio técnico 25+ años"
  ],

  zonasCubiertas: [
    "Centro urbano",
    "Nuevas urbanizaciones",
    "Zona de chalets",
    "Polígono industrial",
    "Viviendas unifamiliares"
  ],

  cobertura: [
    { zona: "Centro urbano", disponible: true },
    { zona: "Nuevas urbanizaciones", disponible: true },
    { zona: "Zona de chalets", disponible: true },
    { zona: "Polígono industrial", disponible: true },
    { zona: "Viviendas unifamiliares", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Francisco Jiménez",
      comentario: "Excelente antenista en Cabañas de la Sagra. Instalación rápida en nuestra nueva casa.",
      puntuacion: 5
    },
    {
      nombre: "Ana Belén Castro",
      comentario: "Más de 25 años de experiencia se notan. Trabajo profesional y garantizado.",
      puntuacion: 5
    },
    {
      nombre: "Roberto Sánchez",
      comentario: "El mejor servicio técnico de Cabañas. Solucionaron problemas que otros no pudieron.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Especialistas en nuevas construcciones",
      descripcion: "Experiencia específica en las nuevas urbanizaciones de Cabañas de la Sagra",
      icono: "Home"
    },
    {
      titulo: "Tecnología de vanguardia",
      descripcion: "Equipos de última generación para máxima calidad de señal",
      icono: "Signal"
    },
    {
      titulo: "Más de 25 años de experiencia",
      descripcion: "Trayectoria consolidada en telecomunicaciones y satisfacción garantizada",
      icono: "Users"
    },
    {
      titulo: "Garantía extendida",
      descripcion: "Garantía completa respaldada por nuestra experiencia de más de 25 años",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué servicios de antenista ofrecen en Cabañas de la Sagra?",
      answer: "Somos especialistas en Cabañas de la Sagra con más de 25 años de experiencia. Ofrecemos instalación de antenas TDT, parabólicas, porteros digitales y videovigilancia para nuevas construcciones y chalets."
    },
    {
      question: "¿Trabajan en las nuevas urbanizaciones de Cabañas de la Sagra?",
      answer: "Sí, somos especialistas en nuevas urbanizaciones y chalets. Con más de 25 años de experiencia, adaptamos nuestras instalaciones a las características específicas de cada construcción."
    },
    {
      question: "¿Qué experiencia tienen como antenistas en Cabañas?",
      answer: "Contamos con más de 25 años de experiencia en telecomunicaciones, especializándonos en las particularidades técnicas de Cabañas de la Sagra y su crecimiento urbanístico."
    },
    {
      question: "¿Ofrecen garantía en sus instalaciones en Cabañas de la Sagra?",
      answer: "Sí, proporcionamos garantía extendida respaldada por nuestros más de 25 años de experiencia. Garantizamos la calidad y durabilidad de todas nuestras instalaciones."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Cabañas de la Sagra | Advanced Telecom`,
  description: `Antenistas especializados en Cabañas de la Sagra. Más de 25 años de experiencia en TDT, satélite, porteros digitales y videovigilancia.`,
  keywords: `antenista Cabañas de la Sagra, antenas TDT Cabañas, instalación antenas Toledo, reparación antenas Cabañas, telecomunicaciones Cabañas de la Sagra`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-cabanas-de-la-sagra'
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
                      {municipioData.descripcion}
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

           {/* Cobertura específica de {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Antenista con cobertura completa en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Servicio técnico profesional disponible en todo el municipio madrileño</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en {municipioData.nombre}</h3>
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
                      <span>Tiempo de respuesta: Menos de 2 horas</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicios de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones profesionales de telecomunicaciones adaptadas a las necesidades del municipio madrileño.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir nuestro antenista en {municipioData.nombre}?</h2>
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

         {/* Testimonios de clientes en {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes satisfechos con nuestro antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de vecinos de {municipioData.nombre} que confían en nuestros servicios</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos las dudas más comunes sobre nuestros servicios de antenista en el municipio</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en {municipioData.nombre}?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Nos desplazamos a tu domicilio en {municipioData.nombre}.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href={`https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20${municipioData.nombre.replace(/ /g, '%20')}`} className="flex items-center gap-2">
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