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
  nombre: "El Quiñón",
  slug: "el-quinon",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28670",
  poblacion: "3.200",
  superficie: "2,1",
  descripcion: "Tu antenista especialista en El Quiñón. Soluciones para antenas comunitarias, TDT en tu piso y videoporteros. Expertos en la urbanización.",
  servicios: [
    "Reparación de antenas comunitarias en El Quiñón",
    "Arreglo de TDT en pisos individuales",
    "Instalación de parabólicas individuales",
    "Videoporteros para comunidades",
    "Filtros 5G para edificios",
    "Mantenimiento técnico especializado"
  ],
   serviciosDestacados: [
    "Expertos en antenas comunitarias",
    "Coordinación con administradores",
    "Soluciones individuales rápidas"
  ],

  zonasCubiertas: [
    "Todos los bloques y portales de la urbanización",
    "Pisos, bajos con jardín y áticos",
    "Calle Francisco de Goya",
    "Calle El Greco",
    "Todas las calles de la urbanización"
  ],

  cobertura: [
    { zona: "Todos los bloques y portales", disponible: true },
    { zona: "Pisos, bajos con jardín y áticos", disponible: true },
    { zona: "Calle Francisco de Goya", disponible: true },
    { zona: "Calle El Greco", disponible: true },
    { zona: "Toda la urbanización", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Cristina G.",
      comentario: "El técnico vino a mi piso y me solucionó el problema de la TDT que no se veía en el dormitorio. Muy rápido y profesional. Lo recomiendo.",
      puntuacion: 5
    },
    {
      nombre: "Javier M.",
      comentario: "Gestionaron la reparación de la antena de toda la comunidad de forma impecable, hablando directamente con nuestro administrador. Nos quitaron un problema de encima.",
      puntuacion: 5
    },
    {
      nombre: "David R.",
      comentario: "Quería poner una parabólica en el ático y me asesoraron genial sobre cómo hacerlo cumpliendo las normas de la comunidad. Un servicio muy completo.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Expertos en antenas comunitarias",
      descripcion: "Entendemos la complejidad de las instalaciones en grandes edificios como los de El Quiñón",
      icono: "Building"
    },
    {
      titulo: "Coordinación con administradores",
      descripcion: "Trabajamos mano a mano con presidentes y administradores de fincas para agilizar reparaciones",
      icono: "Users"
    },
    {
      titulo: "Soluciones individuales rápidas",
      descripcion: "Cita ágil para problemas individuales sin depender de la comunidad",
      icono: "Zap"
    },
    {
      titulo: "Conocemos los edificios por dentro",
      descripcion: "Hemos trabajado en la mayoría de los bloques de la urbanización",
      icono: "MapPin"
    }
  ],

  faqs: [
    {
      question: "El problema de la TDT es en todo el edificio, ¿qué hago?",
      answer: "Lo primero es hablar con tu presidente o administrador de la comunidad. Ellos son los encargados de contactar con el servicio técnico. Puedes darles nuestro contacto para que nos llamen y nos encargaremos de todo."
    },
    {
      question: "En mi piso se ven bien unos canales y otros no, ¿es normal?",
      answer: "No, no es normal. Suele ser un síntoma de un problema en la distribución de la señal dentro de tu casa o un desajuste en la antena comunitaria. Podemos revisarlo y darte un diagnóstico preciso."
    },
    {
      question: "¿Puedo instalar una parabólica sin permiso de la comunidad?",
      answer: "No es recomendable. Siempre debes consultar las normas de tu comunidad. Nosotros te podemos asesorar sobre las opciones que tienes y cómo solicitar el permiso si fuera necesario."
    },
    {
      question: "¿Dais presupuesto para una reparación comunitaria?",
      answer: "Sí, por supuesto. Nos desplazamos al edificio, evaluamos la avería en la instalación comunitaria y presentamos un presupuesto detallado y sin compromiso al presidente o administrador de la finca."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en El Quiñón | Advanced Telecom`,
  description: `✅ Tu antenista especialista en El Quiñón. Soluciones para antenas comunitarias, TDT en tu piso y videoporteros. Pide presupuesto rápido y sin compromiso.`,
  keywords: `antenista El Quiñón, antenas comunitarias El Quiñón, TDT El Quiñón, videoporteros El Quiñón, filtros 5G El Quiñón, reparación antenas Madrid`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-el-quinon'
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

export default function ElQuinonPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de El Quiñón */}
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
                      Tu antenista especialista en {municipioData.nombre}. Si vives en {municipioData.nombre} y tienes problemas con la señal de la tele en tu piso, o si en tu comunidad necesitáis un técnico de confianza, has encontrado la solución. Somos expertos en dar servicio a los edificios y vecinos de la urbanización.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llámanos 
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide presupuesto para tu piso
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

           {/* Cobertura específica de El Quiñón */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio completo en toda la urbanización de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos cada bloque y cada calle de la urbanización, lo que nos permite ofrecerte un servicio rápido y eficaz.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Damos cobertura en todo {municipioData.nombre}:</h3>
                      <p className="text-brand-black-light">Respuesta prioritaria para vecinos de {municipioData.nombre}: te atendemos en menos de 2 horas.</p>
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

          {/* Servicios especializados en El Quiñón */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones para tu piso y tu comunidad en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tanto si el problema es individual como si afecta a todo el edificio, tenemos la solución que buscas.</p>
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

          {/* Por qué elegir nuestros servicios en El Quiñón */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué somos el servicio técnico de confianza en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra especialización en la zona es tu mayor garantía de un trabajo bien hecho.</p>
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

         {/* Testimonios de clientes en El Quiñón */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que opinan tus vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La mejor referencia es la de la gente que vive en tu mismo edificio.</p>
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
                    <div className="text-sm text-brand-black-light">Vecino de {municipioData.nombre}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de El Quiñón */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus dudas sobre el servicio de antenista en {municipioData.nombre}, resueltas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Respondemos a las preguntas más comunes de los residentes de la urbanización.</p>
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

          {/* CTA Section específica para El Quiñón */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en {municipioData.nombre}? Habla con nosotros</h2>
                  <p className="text-xl mb-8 text-white/90">Tanto si el problema es solo en tu piso como si afecta a toda tu comunidad, llámanos. Te daremos un presupuesto claro y una solución profesional y garantizada.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href={`https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20${municipioData.nombre}`} className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Contactar por WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                      <a href="tel:+34668838415" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" /> Llama y te informamos
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