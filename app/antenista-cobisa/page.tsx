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
  nombre: "Cobisa",
  slug: "cobisa",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45111",
  poblacion: "3.200",
  superficie: "32,4",
  descripcion: "Tu antenista especialista en Cobisa para solucionar problemas de señal. Expertos en TDT, parabólicas y CCTV con más de 25 años de experiencia.",
  servicios: [
    "Instalación de antenas TDT en Cobisa",
    "Antenas parabólicas para todas las zonas",
    "Porteros automáticos y videoporteros modernos",
    "Sistemas de videovigilancia CCTV",
    "Solución a interferencias 5G",
    "Reparaciones urgentes de antenas"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Videoporteros modernos",
    "Servicio técnico local en Cobisa"
  ],

  zonasCubiertas: [
    "El casco antiguo",
    "Todas las urbanizaciones y residenciales",
    "Nuevos chalets y viviendas unifamiliares",
    "Fincas y casas de campo del entorno"
  ],

  cobertura: [
    { zona: "El casco antiguo", disponible: true },
    { zona: "Urbanizaciones y residenciales", disponible: true },
    { zona: "Nuevos chalets y viviendas unifamiliares", disponible: true },
    { zona: "Fincas y casas de campo del entorno", disponible: true },

  ],

  testimonios: [
    {
      nombre: "Elena S.",
      comentario: "Vino el técnico a mi chalet en una de las urbanizaciones nuevas de Cobisa para instalar toda la TDT desde cero. Un trabajo impecable, rápido y muy profesional. Totalmente recomendable.",
      puntuacion: 5
    },
    {
      nombre: "David G.",
      comentario: "Tenía un problema con el portero automático de la comunidad y nos lo solucionaron el mismo día. Un servicio muy eficaz y un trato excelente. Ya son nuestros antenistas de referencia.",
      puntuacion: 5
    },
    {
      nombre: "Carlos M.",
      comentario: "Se nota la experiencia. Les llamé porque la parabólica se había movido con el viento y en un momento la dejaron perfectamente orientada. Muy buen servicio.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocemos Cobisa como la palma de nuestra mano",
      descripcion: "Sabemos dónde están los repetidores y cuáles son los desafíos de la señal en cada urbanización. Eso nos permite ser más rápidos y eficientes.",
      icono: "Home"
    },
    {
      titulo: "Trabajos limpios y ordenados",
      descripcion: "Respetamos tu casa como si fuera la nuestra. Realizamos un trabajo cuidadoso, limpio y nos aseguramos de que todo quede perfecto al terminar.",
      icono: "Signal"
    },
    {
      titulo: "Presupuestos a tu medida",
      descripcion: "Escuchamos lo que necesitas y te ofrecemos la mejor solución adaptada a tu presupuesto. Somos flexibles y honestos en nuestros precios.",
      icono: "Users"
    },
    {
      titulo: "Garantía de un trabajo bien hecho",
      descripcion: "Te garantizamos por escrito todas nuestras instalaciones y reparaciones. Nuestro objetivo es que quedes totalmente satisfecho y no vuelvas a preocuparte.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Tenéis experiencia en las nuevas urbanizaciones de Cobisa?",
      answer: "Sí, por supuesto. Gran parte de nuestro trabajo se desarrolla en las zonas residenciales y nuevas urbanizaciones de Cobisa. Conocemos perfectamente sus características y cómo obtener la mejor señal."
    },
    {
      question: "¿Cuánto tiempo se tarda en instalar un videoportero?",
      answer: "En una vivienda unifamiliar, la instalación suele completarse en una mañana. En una comunidad, el tiempo dependerá del número de vecinos, pero siempre te damos un plazo cerrado antes de empezar."
    },
    {
      question: "¿Qué incluye el presupuesto que me dais?",
      answer: "Nuestro presupuesto es cerrado y lo incluye todo: el desplazamiento, la mano de obra y los materiales necesarios. No te llevarás ninguna sorpresa en la factura final."
    },
    {
      question: "Si tengo una avería, ¿venís rápido?",
      answer: "La rapidez es una de nuestras prioridades. Para averías normales, solemos dar cita en 24 horas. Si es una urgencia que no puede esperar, nos comprometemos a estar en tu casa en Cobisa en menos de dos horas."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Cobisa | Advanced Telecom`,
  description: `⭐ Tu antenista en Cobisa para solucionar problemas de señal. Expertos en TDT, parabólicas y CCTV. Más de 25 años. Pide tu presupuesto gratis.`,
  keywords: `antenista Cobisa, antenas TDT Cobisa, instalación antenas Toledo, reparación antenas Cobisa, telecomunicaciones Cobisa, videoporteros Cobisa`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-cobisa'
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
          {/* Hero Section específico de Cobisa */}
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
                      Tu antenista especialista en <span className="text-brand-green">{municipioData.nombre}</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si vives en {municipioData.nombre} y buscas un servicio técnico de confianza, rápido y profesional, has llegado al sitio correcto. Nuestra misión es asegurarnos de que la tecnología de tu hogar funcione a la perfección. Desde ajustar tu antena de TDT para que no te pierdas ni un detalle, hasta instalar un videoportero moderno para tu chalet, estamos aquí para ayudarte.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama y te asesoramos
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide tu presupuesto a medida
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

           {/* Cobertura específica de Cobisa */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos servicio en todo {municipioData.nombre}, sin excepciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos perfectamente el municipio y nos desplazamos a cualquier punto para darte la solución que necesitas.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Cubrimos todas las zonas de {municipioData.nombre}:</h3>
                      <p className="text-brand-black-light">Servicio técnico especializado en todas las áreas</p>
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
                      <span>Para urgencias, te atendemos en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Cobisa */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Descubre todo lo que podemos hacer por ti en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tenemos una solución específica para cada una de tus necesidades de telecomunicaciones y seguridad.</p>
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

          {/* Por qué elegir nuestros servicios en Cobisa */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La diferencia de elegir un antenista local en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Elegirnos a nosotros significa apostar por un servicio cercano, profesional y comprometido contigo.</p>
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

         {/* Testimonios de clientes en Cobisa */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que cuentan tus vecinos de {municipioData.nombre} sobre nosotros</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La confianza de la gente de tu pueblo es nuestro mejor testimonio.</p>
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

          {/* FAQs específicas de Cobisa */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos las dudas más habituales sobre antenistas en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí tienes las respuestas a lo que seguro te estás preguntando.</p>
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

          {/* CTA Section específica para Cobisa */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para mejorar tu señal? Contacta con tu antenista en {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">No dejes pasar más tiempo con esa avería o ese proyecto que tienes en mente. Llámanos o escríbenos, cuéntanos qué necesitas y te daremos una solución rápida y sin compromiso.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Cobisa" className="flex items-center gap-2">
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