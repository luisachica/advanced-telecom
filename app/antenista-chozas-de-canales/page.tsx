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
  nombre: "Chozas de Canales",
  slug: "chozas-de-canales",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45290",
  poblacion: "4.200",
  superficie: "52,3",
  descripcion: "Antenista profesional en Chozas de Canales especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio toledano.",
  servicios: [
    "Antenas TDT: señal estable y sin cortes",
    "Instalación y ajuste de antenas parabólicas",
    "Porteros automáticos y videoporteros",
    "Cámaras de seguridad y videovigilancia",
    "Solución de interferencias 4G y 5G",
    "Reparaciones urgentes de antenas"
  ],
   serviciosDestacados: [
    "Servicio rápido y profesional",
    "Más de 25 años de experiencia",
    "Cobertura completa en todo el término"
  ],

  zonasCubiertas: [
    "El casco urbano de Chozas",
    "Nuevas zonas residenciales y chalets",
    "El polígono industrial",
    "Fincas y explotaciones agrarias cercanas"
  ],

  cobertura: [
    { zona: "El casco urbano de Chozas", disponible: true },
    { zona: "Nuevas zonas residenciales y chalets", disponible: true },
    { zona: "El polígono industrial", disponible: true },
    { zona: "Fincas y explotaciones agrarias cercanas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Antonio P.",
      comentario: "Se nota que son de la zona y conocen bien Chozas. Me solucionaron un problema de señal que llevaba tiempo arrastrando. Un trabajo impecable y muy profesional.",
      puntuacion: 5
    },
    {
      nombre: "Beatriz L.",
      comentario: "Les llamé para que me instalaran una parabólica en un chalet nuevo. Fueron rápidos, curiosos y me lo dejaron todo funcionando a la perfección. Muy recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Javier G.",
      comentario: "Un trato excelente. El técnico fue muy amable, me explicó todo con claridad y el precio fue el que me habían dicho en el presupuesto. Da gusto encontrar gente así.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Experiencia contrastada",
      descripcion: "Más de dos décadas en el sector son nuestra mejor garantía. No hay avería o instalación que no hayamos afrontado con éxito.",
      icono: "Home"
    },
    {
      titulo: "Herramientas de precisión",
      descripcion: "Utilizamos medidores de campo de última generación para asegurar que cada ajuste y cada instalación te ofrezcan el máximo rendimiento posible.",
      icono: "Signal"
    },
    {
      titulo: "Asesoramiento honesto",
      descripcion: "Nunca te recomendaremos cambiar algo que no sea necesario. Nuestro objetivo es darte la solución más eficaz y económica a tu problema.",
      icono: "Users"
    },
    {
      titulo: "Garantía por escrito",
      descripcion: "Todos nuestros trabajos y los materiales que instalamos están cubiertos por una garantía formal, dándote total seguridad y respaldo.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Si me instaláis una antena nueva, ¿os lleváis la antigua?",
      answer: "Sí. Como parte de nuestro servicio, nos encargamos de retirar la antena y el material antiguo de forma segura y lo llevamos a un punto limpio para su correcto reciclaje, sin coste adicional para ti."
    },
    {
      question: "¿Qué garantía tienen las reparaciones de antenas en Chozas de Canales?",
      answer: "Todas nuestras reparaciones tienen una garantía sobre la mano de obra y los componentes sustituidos. La duración de la misma se especifica siempre en tu factura."
    },
    {
      question: "¿Trabajáis para comunidades de propietarios en Chozas de Canales?",
      answer: "Por supuesto. Ofrecemos servicios de instalación, mantenimiento y reparación de antenas colectivas y sistemas de videoporteros para comunidades de vecinos en todo Chozas de Canales."
    },
    {
      question: "¿Cómo puedo pagar el servicio de antenista?",
      answer: "Aceptamos varios métodos de pago para tu comodidad, incluyendo efectivo, transferencia bancaria y Bizum, una vez que el trabajo ha sido completado y estás conforme con el resultado."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Chozas de Canales | Soluciones Garantizadas`,
  description: `⭐ Antenista en Chozas de Canales. Servicio experto en antenas TDT, parabólicas y videoporteros. Más de 25 años de experiencia. Presupuesto sin compromiso.`,
  keywords: `antenista Chozas de Canales, antenas TDT Chozas de Canales, instalación antenas Toledo, reparación antenas Chozas de Canales, telecomunicaciones Chozas de Canales`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-chozas-de-canales'
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
                      Tu antenista para <span className="text-brand-green">{municipioData.nombre}</span>: servicio rápido y profesional
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Somos tu servicio técnico de confianza para resolver cualquier incidencia de telecomunicaciones en {municipioData.nombre}. Con más de 25 años de experiencia en la comarca de La Sagra, nuestro equipo está preparado para garantizarte la mejor señal de televisión, instalar tu nuevo videoportero o desplegar un sistema de seguridad para tu hogar o negocio con la máxima profesionalidad.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar para consultar
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide tu presupuesto gratis
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

           {/* Cobertura específica de Chozas de Canales */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en todo el término de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te garantizamos una asistencia ágil y profesional en todo el municipio, desde el centro del pueblo hasta las fincas más alejadas.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Damos servicio en todas las áreas de {municipioData.nombre}:</h3>
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
                      <span>Atención de urgencias: acudimos a tu casa en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Chozas de Canales */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Un servicio para cada una de tus necesidades de telecomunicaciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te ofrecemos un catálogo de soluciones completo para cubrir cualquier requerimiento de instalación, reparación o mantenimiento.</p>
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

          {/* Por qué elegir nuestros servicios en Chozas de Canales */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Los cuatro compromisos de tu antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra forma de trabajar se basa en la experiencia, la honestidad y el uso de la mejor tecnología.</p>
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

         {/* Testimonios de clientes en Chozas de Canales */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que dicen tus vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La confianza y la satisfacción de tus vecinos son el motor de nuestro trabajo.</p>
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

          {/* FAQs específicas de Chozas de Canales */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Respondemos a tus preguntas más frecuentes</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aclaramos las dudas más comunes sobre nuestro servicio de antenista en la zona.</p>
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

          {/* CTA Section específica para Chozas de Canales */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en {municipioData.nombre}?</h2>
                  <p className="text-xl mb-8 text-white/90">No le des más vueltas a ese problema de señal. Llámanos o envíanos un mensaje y te daremos un presupuesto gratuito y sin compromiso. Te atenderemos rápidamente para ofrecerte la mejor solución.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href={`https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20${municipioData.nombre}`} className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Contactar por WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                      <a href="tel:+34668838415" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" /> Llamar para consultar
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