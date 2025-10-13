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
  nombre: "Villaluenga de la Sagra",
  slug: "villaluenga-de-la-sagra",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  descripcion:
    "Servicio de antenista profesional en Villaluenga de la Sagra para viviendas, comunidades y empresas. Instalación y reparación de TDT, parabólicas, videoporteros y CCTV.",
  zonasCubiertas: [
    "Todo el casco urbano de Villaluenga de la Sagra",
    "Zonas residenciales de nueva construcción y urbanizaciones",
    "Polígonos industriales y naves del municipio",
    "Municipios cercanos de la comarca de La Sagra"
  ],
  cobertura: [
    { zona: "Casco urbano de Villaluenga de la Sagra", disponible: true },
    { zona: "Nuevas zonas residenciales y urbanizaciones", disponible: true },
    { zona: "Polígonos y naves industriales", disponible: true },
    { zona: "Municipios cercanos en La Sagra", disponible: true }
  ],
  caracteristicas: [
    {
      titulo: "Experiencia Local Demostrada",
      descripcion:
        "Conocemos Villaluenga de la Sagra a la perfección, lo que nos permite trabajar más rápido y con precisión en cada tipo de edificio.",
      icono: "Users"
    },
    {
      titulo: "Calidad en Cada Componente",
      descripcion:
        "Solo utilizamos materiales de primeras marcas para instalaciones robustas y fiables que resisten la meteorología local.",
      icono: "Shield"
    },
    {
      titulo: "Presupuesto sin Sorpresas",
      descripcion:
        "Presupuesto claro y por escrito antes de empezar. El precio acordado es el final, sin extras inesperados.",
      icono: "CheckCircle"
    },
    {
      titulo: "Garantía Integral del Servicio",
      descripcion:
        "Todas nuestras instalaciones y reparaciones incluyen garantía completa de mano de obra y materiales.",
      icono: "Zap"
    }
  ],
  testimonios: [
    {
      nombre: "Familia Sánchez",
      comentario:
        "Nos construimos una casa nueva y se encargaron de la instalación de TV y el videoportero. Trabajo muy profesional, limpio y bien coordinado.",
      puntuacion: 5
    },
    {
      nombre: "Presidente de Comunidad (centro)",
      comentario:
        "Teníamos problemas con la antena del bloque desde hacía años. Por fin nos dieron una solución definitiva a buen precio. Muy recomendables para comunidades.",
      puntuacion: 5
    },
    {
      nombre: "Raquel G.",
      comentario:
        "Se fue la señal un sábado por la tarde. Vinieron en un par de horas y lo arreglaron. Un servicio de urgencia que de verdad funciona.",
      puntuacion: 5
    }
  ],
  faqs: [
    {
      question: "¿Cuánto tiempo se tarda en instalar una antena nueva?",
      answer:
        "Una instalación estándar de TDT o parabólica en una vivienda unifamiliar suele completarse en 2–3 horas, incluyendo montaje, cableado y sintonización de canales."
    },
    {
      question:
        "Mi señal de TV se pixela cuando hace viento, ¿tiene arreglo?",
      answer:
        "Sí. Suele deberse a sujeción deficiente, mástil inestable o cableado exterior deteriorado. Revisamos y aseguramos la instalación para que no vuelva a ocurrir."
    },
    {
      question: "¿Pueden darme un presupuesto por teléfono?",
      answer:
        "Podemos dar una estimación aproximada por teléfono. Para un presupuesto cerrado y preciso preferimos visitar su domicilio en Villaluenga sin coste ni compromiso."
    },
    {
      question: "¿Trabajan los fines de semana?",
      answer:
        "Atendemos avisos de urgencias durante el fin de semana. Para instalaciones nuevas o trabajos no urgentes programamos en días laborables."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Villaluenga de la Sagra | Advanced Telecom`,
  description:
    `Servicio de antenista en Villaluenga de la Sagra para particulares, comunidades y empresas. Instalación y reparación de TDT, parabólicas y videoporteros.`,
  keywords:
    `antenista Villaluenga de la Sagra, instalación TDT, antenas parabólicas, videoporteros, reparación antenas Toledo`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-villaluenga-de-la-sagra'
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

export default function VillaluengaDeLaSagraPage() {
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
                    <span className="text-brand-green font-medium">Villaluenga de la Sagra</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Servicio de antenista profesional en <span className="text-brand-green">Villaluenga de la Sagra</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Damos un servicio de antenista completo y profesional a toda la localidad de Villaluenga de la Sagra. Soluciones de telecomunicaciones para viviendas del casco urbano, chalets y pisos en zonas de nueva construcción, combinando experiencia y tecnología actual para trabajar en cualquier tipo de edificio.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar para una avería
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
                      alt="Servicios de telecomunicaciones en Villaluenga de la Sagra"
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

           {/* Cobertura específica de Villaluenga de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura total en Villaluenga y Comarca de La Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo local garantiza atención rápida y eficiente en todo Villaluenga y localidades cercanas.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de cobertura en Villaluenga de la Sagra</h3>
                      <p className="text-brand-black-light">Servicio de proximidad en todo el término municipal</p>
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
                      <span>Tiempo de respuesta: Menos de 2 horas. Servicio rápido para averías y pérdidas de señal.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios en Villaluenga de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestros servicios de telecomunicaciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Equipo técnico cualificado para TDT, parabólicas, videoporteros, CCTV, solución a interferencias 4G/5G y telecomunicaciones para empresas en Villaluenga.</p>
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

          {/* Por qué elegirnos en Villaluenga de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué somos su antenista de confianza en Villaluenga?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra profesionalidad, conocimiento local y compromiso con la calidad nos distinguen.</p>
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

         {/* Testimonios de clientes en Villaluenga de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La satisfacción de nuestros clientes en Villaluenga de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La confianza que nuestros vecinos depositan en nosotros es nuestro mayor orgullo.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Villaluenga de la Sagra</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Villaluenga de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes y sus respuestas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos algunas de las dudas más habituales de nuestros clientes.</p>
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

          {/* CTA Section específica para Villaluenga de la Sagra */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en Villaluenga de la Sagra?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Nos desplazamos a tu domicilio en Villaluenga de la Sagra.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Villaluenga%20de%20la%20Sagra" className="flex items-center gap-2">
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