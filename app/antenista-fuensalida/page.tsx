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
  nombre: "Fuensalida",
  slug: "fuensalida",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45510",
  poblacion: "11.475",
  superficie: "67,2",
  descripcion: "Antenista profesional en Fuensalida especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio toledano.",
  servicios: [
    "Instalación de antenas TDT en Fuensalida",
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
    "Centro urbano y barrios",
    "Urbanizaciones y zonas residenciales",
    "Chalets y viviendas unifamiliares",
    "Polígono industrial y locales comerciales",
    "Viviendas aisladas"
  ],

  cobertura: [
    { zona: "Centro urbano y barrios", disponible: true },
    { zona: "Urbanizaciones y zonas residenciales", disponible: true },
    { zona: "Chalets y viviendas unifamiliares", disponible: true },
    { zona: "Polígono industrial y locales comerciales", disponible: true },
    { zona: "Viviendas aisladas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "María Ángeles G.",
      comentario: "Un servicio impecable. Tenía problemas con la TDT en el piso y me lo solucionaron en menos de una hora. El técnico muy amable y profesional. Los recomiendo sin dudar.",
      puntuacion: 5
    },
    {
      nombre: "Julián S.",
      comentario: "Les pedimos presupuesto para instalar cámaras en la nave del polígono y nos dieron el mejor precio. La instalación fue rápida y el sistema funciona de maravilla.",
      puntuacion: 5
    },
    {
      nombre: "Raquel P.",
      comentario: "Se nota que son de aquí y conocen la zona. Me orientaron la parabólica perfectamente. Un trabajo bien hecho y a un precio justo. Muy contenta con el servicio.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Somos tus vecinos",
      descripcion: "No somos una franquicia ni una gran empresa lejana. Somos un servicio técnico local que conoce Fuensalida y se preocupa por dar el mejor servicio a su gente.",
      icono: "Home"
    },
    {
      titulo: "Diagnóstico honesto y claro",
      descripcion: "Siempre te diremos la verdad sobre tu avería. Si tiene una solución sencilla y económica, esa será nuestra primera opción, sin intentar venderte algo que no necesitas.",
      icono: "Signal"
    },
    {
      titulo: "Trabajos garantizados por escrito",
      descripcion: "Todos nuestros trabajos, desde el más pequeño al más grande, están garantizados por escrito en tu factura para tu total tranquilidad.",
      icono: "Users"
    },
    {
      titulo: "Puntualidad y limpieza",
      descripcion: "Respetamos tu tiempo y tu casa. Somos puntuales en nuestras citas y dejamos todo recogido y limpio al finalizar el trabajo, como si no hubiéramos pasado por allí.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿También instaláis tomas de antena adicionales en otras habitaciones?",
      answer: "Sí, por supuesto. Si quieres poner un punto de televisión en un dormitorio, la cocina o cualquier otra estancia, nosotros te llevamos el cableado y te instalamos la nueva toma de antena de forma limpia y profesional."
    },
    {
      question: "¿Cuánto tiempo tardáis en darme un presupuesto?",
      answer: "Normalmente, te damos un presupuesto cerrado en la misma visita o llamada. Nos desplazamos a tu domicilio en Fuensalida sin coste alguno para valorar el trabajo y darte un precio final."
    },
    {
      question: "Mi comunidad de vecinos necesita un antenista, ¿trabajáis para comunidades?",
      answer: "Sí, gran parte de nuestro trabajo es con comunidades de propietarios en Fuensalida. Ofrecemos servicios de mantenimiento, reparación de antenas colectivas e instalación de videoporteros."
    },
    {
      question: "¿Qué pasa si una pieza se rompe y está en garantía?",
      answer: "Si un componente que te hemos instalado falla y está dentro del periodo de garantía, nos encargamos de todo. Acudimos, lo sustituimos por uno nuevo y no te cobramos absolutamente nada."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Fuensalida | Advanced Telecom`,
  description: `⭐ Tu antenista de confianza en Fuensalida. Expertos en TDT, parabólicas y videoporteros para tu casa o comunidad. Presupuesto gratis y atención inmediata.`,
  keywords: `antenista Fuensalida, antenas TDT Fuensalida, instalación antenas Toledo, reparación antenas Fuensalida, telecomunicaciones Fuensalida`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-fuensalida'
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

export default function FuensalidaPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Fuensalida */}
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
                    <span className="text-brand-green font-medium">Fuensalida</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu antenista profesional en <span className="text-brand-green">{municipioData.nombre}</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Tanto si vives en el centro de {municipioData.nombre} como en las afueras, te ofrecemos un servicio de antenista rápido y de total confianza. Dejamos tu antena de TDT, parabólica o videoportero funcionando a la perfección, con la garantía de más de 25 años de experiencia dando soluciones a tus vecinos.
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

           {/* Cobertura específica de Fuensalida */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos servicio en todo {municipioData.nombre}, sin excusas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo se conoce el municipio como la palma de su mano, garantizando una atención rápida y eficaz en cualquier punto.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra cobertura en {municipioData.nombre} incluye:</h3>
                      <p className="text-brand-black-light">Para urgencias, te garantizamos asistencia en menos de 2 horas.</p>
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

          {/* Servicios especializados en Fuensalida */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Todas las soluciones que necesitas para tu antena en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Sea cual sea tu necesidad, tenemos un servicio profesional para solucionarla con la máxima calidad.</p>
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

          {/* Por qué elegir nuestros servicios en Fuensalida */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de elegir a tu antenista de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te damos razones claras para que sepas que estás en las mejores manos.</p>
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

         {/* Testimonios de clientes en Fuensalida */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que dicen de nosotros tus vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La mejor publicidad es la que nos hacen los clientes satisfechos de tu mismo pueblo.</p>
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

          {/* FAQs específicas de Fuensalida */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas sobre el servicio de antenista</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí tienes las respuestas a algunas de las preguntas más habituales en {municipioData.nombre}.</p>
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

          {/* CTA Section específica para Fuensalida */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos? Tu solución de antenista en {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">Si necesitas un presupuesto, tienes una avería o simplemente quieres hacer una consulta, no dudes en contactar. Estamos aquí para ayudarte con un trato cercano y profesional.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Fuensalida" className="flex items-center gap-2">
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