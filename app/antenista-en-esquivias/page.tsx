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
  nombre: "Esquivias",
  slug: "esquivias",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45222",
  poblacion: "5.893",
  superficie: "19,3",
  descripcion: "Antenista profesional en Esquivias especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio toledano con más de 25 años de experiencia.",
  servicios: [
    "Reparación y ajuste de TDT en Esquivias",
    "Instalación y orientación de parabólicas",
    "Modernización de videoporteros",
    "Instalación de cámaras de seguridad",
    "Filtros para interferencias 5G",
    "Reparaciones urgentes de antenas"
  ],
   serviciosDestacados: [
    "Experiencia real en la zona",
    "Soluciones claras y efectivas",
    "Presupuestos sin compromiso"
  ],

  zonasCubiertas: [
    "El casco histórico y centro del pueblo",
    "Nuevas zonas residenciales y chalets",
    "Comunidades de vecinos y bloques de pisos",
    "Naves en el polígono industrial y fincas"
  ],

  cobertura: [
    { zona: "El casco histórico y centro del pueblo", disponible: true },
    { zona: "Nuevas zonas residenciales y chalets", disponible: true },
    { zona: "Comunidades de vecinos y bloques de pisos", disponible: true },
    { zona: "Naves en el polígono industrial y fincas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "María C.",
      comentario: "Les llamé porque en mi casa del centro de Esquivias la señal se iba constantemente. Vinieron enseguida y lo solucionaron. Un trato muy amable y profesional.",
      puntuacion: 5
    },
    {
      nombre: "David S.",
      comentario: "Me instalaron un videoportero en el chalet y ha quedado genial. Trabajaron de forma muy limpia y me explicaron el funcionamiento perfectamente. Los recomiendo.",
      puntuacion: 5
    },
    {
      nombre: "Francisco L.",
      comentario: "El técnico que vino fue muy honesto. Pensaba que tendría que cambiar toda la instalación y al final solo era un problema en el amplificador. Se agradece la sinceridad.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Experiencia real en la zona",
      descripcion: "Llevamos más de 25 años trabajando en Esquivias y conocemos sus particularidades de señal como nadie, tanto en el centro como en las nuevas urbanizaciones.",
      icono: "Home"
    },
    {
      titulo: "Soluciones claras y efectivas",
      descripcion: "No nos andamos con rodeos. Diagnosticamos tu problema y te ofrecemos la solución más directa y duradera, explicándote todo de forma sencilla.",
      icono: "Signal"
    },
    {
      titulo: "Presupuestos sin compromiso",
      descripcion: "Te damos nuestro mejor precio por adelantado y de forma gratuita para que decidas con total libertad, sin presiones ni sorpresas.",
      icono: "Users"
    },
    {
      titulo: "Garantía de profesionalidad",
      descripcion: "Cada trabajo que realizamos, desde el más pequeño al más grande, está garantizado por escrito. Tu confianza es nuestra mejor herramienta.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Mi casa está en el casco antiguo y es protegida, ¿tenéis cuidado al instalar?",
      answer: "Por supuesto. Tenemos una amplia experiencia trabajando en edificios históricos. Realizamos todas las instalaciones con el máximo cuidado y respeto por la fachada y la estructura del inmueble."
    },
    {
      question: "¿Cuánto tiempo se tarda en instalar una antena TDT desde cero?",
      answer: "En una vivienda unifamiliar normal, una instalación completa suele llevar unas pocas horas. Empezamos y terminamos el trabajo en el mismo día, dejándote la televisión funcionando perfectamente."
    },
    {
      question: "Si el problema es de la comunidad, ¿habláis con el presidente?",
      answer: "Sí. Si detectamos que la avería es de la antena colectiva, te informamos y, si lo necesitas, nos ponemos en contacto con el presidente o administrador de tu comunidad para explicarle la situación y ofrecerle un presupuesto."
    },
    {
      question: "¿Qué tipo de garantía ofrecéis en vuestros trabajos en Esquivias?",
      answer: "Te ofrecemos la garantía legal vigente en todas nuestras reparaciones e instalaciones. Queda reflejada en tu factura para que tengas total tranquilidad."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Esquivias | Advanced Telecom`,
  description: `✅ Tu antenista en Esquivias. Damos solución a problemas de señal TDT, parabólicas y videoporteros en tu casa o comunidad. Presupuesto gratis y sin esperas.`,
  keywords: `antenista Esquivias, antenas TDT Esquivias, instalación antenas Toledo, reparación antenas Esquivias, telecomunicaciones Esquivias, videoporteros Esquivias`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-en-esquivias'
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

export default function EsquiviasPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Esquivias */}
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
                      <span className="text-brand-green">Tu servicio de antenista</span> en {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si vives en {municipioData.nombre} y necesitas un técnico de confianza para tu antena, has llegado al lugar adecuado. Te ofrecemos un servicio local, profesional y con la experiencia necesaria para solucionar cualquier avería o realizar una nueva instalación en tu casa, piso o chalet con la máxima garantía y eficacia.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llámanos
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide un presupuesto
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

           {/* Cobertura específica de Esquivias */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Atendemos todo el término municipal de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Desde el centro del pueblo hasta las urbanizaciones más nuevas, nuestro equipo se desplaza para darte una solución rápida y profesional.</p>
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
                      <span>Tiempo de respuesta: Menos de 2 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Esquivias */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Todos los servicios que necesitas para tu antena en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Cubrimos cualquier necesidad que tengas relacionada con la señal de televisión o la seguridad de tu hogar.</p>
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

          {/* Por qué elegir nuestros servicios en Esquivias */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La tranquilidad de contratar a tu antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te damos motivos claros para que confíes en nuestra experiencia y profesionalidad.</p>
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

         {/* Testimonios de clientes en Esquivias */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus vecinos de {municipioData.nombre} ya nos conocen</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de la gente de tu pueblo es la mejor prueba de nuestro compromiso.</p>
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

          {/* FAQs específicas de Esquivias */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus principales dudas sobre nuestro servicio</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí tienes las respuestas a algunas de las preguntas que más nos hacen tus vecinos.</p>
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

          {/* CTA Section específica para Esquivias */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos? Ponte en contacto con tu antenista de {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">Si necesitas un presupuesto o quieres resolver una duda, llámanos o escríbenos. Estamos aquí para ayudarte en lo que necesites, con un trato cercano y profesional.</p>
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