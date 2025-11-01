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
  nombre: "Cobeja",
  slug: "cobeja",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45111",
  poblacion: "2.156",
  superficie: "48,2",
  descripcion: "Tu antenista de confianza en Cobeja. Solucionamos problemas de señal TDT, instalamos parabólicas y videoporteros con más de 25 años de experiencia.",
  servicios: [
    "Antenas TDT: se acabaron los pixelados",
    "Instalación y orientación de parabólicas",
    "Porteros y videoporteros automáticos",
    "Cámaras de seguridad (CCTV)",
    "Filtros para interferencias 5G",
    "Servicio técnico para urgencias"
  ],
   serviciosDestacados: [
    "Servicio rápido y garantizado",
    "Más de 25 años de experiencia",
    "Solución local y profesional"
  ],

  zonasCubiertas: [
    "El casco urbano",
    "Nuevos residenciales y chalets",
    "El polígono industrial de Cobeja",
    "Fincas y casas de campo cercanas"
  ],

  cobertura: [
    { zona: "El casco urbano", disponible: true },
    { zona: "Nuevos residenciales y chalets", disponible: true },
    { zona: "El polígono industrial de Cobeja", disponible: true },
    { zona: "Fincas y casas de campo cercanas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Sara L.",
      comentario: "Un servicio de 10. Les llamé por la mañana porque no se veía casi ningún canal y por la tarde ya estaba solucionado. Rápidos y muy eficientes. Los guardo en mi agenda.",
      puntuacion: 5
    },
    {
      nombre: "Javier R.",
      comentario: "Nos instalaron el videoportero en la comunidad de vecinos. Nos dieron el mejor presupuesto y el trabajo ha quedado perfecto. Unos profesionales serios y recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Miguel Ángel G.",
      comentario: "El trato del técnico fue excelente. Me asesoró sobre el problema de la parabólica y me dio la solución más sencilla y económica. Muy honestos.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Trato cercano y directo",
      descripcion: "Somos un servicio local, hablamos tu mismo idioma y te explicamos las cosas de forma clara, sin tecnicismos innecesarios.",
      icono: "Users"
    },
    {
      titulo: "Precios claros y sin sorpresas",
      descripcion: "Te damos un presupuesto cerrado antes de empezar. El precio que te decimos es el precio que pagas, sin extras de última hora.",
      icono: "CheckCircle"
    },
    {
      titulo: "Garantía en todos los trabajos",
      descripcion: "Confiamos tanto en lo que hacemos que te garantizamos por escrito cada instalación y cada reparación. Tu satisfacción es lo primero.",
      icono: "Shield"
    },
    {
      titulo: "Técnicos con experiencia real",
      descripcion: "Llevamos más de 25 años resolviendo averías y realizando instalaciones en la zona. Esa experiencia marca la diferencia.",
      icono: "Wrench"
    }
  ],

  faqs: [
    {
      question: "¿Qué pasa si la avería es más complicada de lo que pensaba?",
      answer: "Si al revisar la instalación vemos que el problema es mayor, te informamos en el momento y te damos un nuevo presupuesto detallado. Nunca hacemos nada sin tu aprobación previa."
    },
    {
      question: "¿Qué garantía tienen vuestras instalaciones en Cobeja?",
      answer: "Todas nuestras instalaciones nuevas cuentan con la máxima garantía tanto en los materiales, dictada por el fabricante, como en nuestra mano de obra, tal y como exige la ley."
    },
    {
      question: "¿Trabajáis los fines de semana si tengo una urgencia?",
      answer: "Sí, disponemos de un servicio de guardia para atender averías urgentes durante el fin de semana en Cobeja. Tu tranquilidad es nuestra prioridad."
    },
    {
      question: "¿El desplazamiento para dar un presupuesto tiene algún coste?",
      answer: "No. Nos desplazamos a tu domicilio en Cobeja para valorar el trabajo y darte un presupuesto cerrado sin ningún tipo de coste ni compromiso para ti."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Cobeja | Advanced Telecom`,
  description: `✅ Tu antenista en Cobeja de confianza. Solucionamos problemas de señal TDT, instalamos parabólicas y videoporteros. Pide tu presupuesto gratis ahora.`,
  keywords: `antenista Cobeja, antenas TDT Cobeja, instalación antenas Toledo, reparación antenas Cobeja, telecomunicaciones Cobeja, videoporteros Cobeja`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-cobeja'
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

export default function CobejaPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Cobeja */}
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
                      Tu <span className="text-brand-green">antenista de confianza</span> en {municipioData.nombre}
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Somos la solución local y profesional que buscas para tus telecomunicaciones en {municipioData.nombre}. Si tienes problemas con la señal de TV, quieres instalar una parabólica o necesitas modernizar el portero de tu casa, estás en el lugar indicado. Con más de 25 años de experiencia, te ofrecemos un servicio rápido, garantizado y adaptado a tus necesidades.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama y consúltanos
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide tu presupuesto sin compromiso
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

           {/* Cobertura específica de Cobeja */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Llegamos a cada rincón de {municipioData.nombre} y sus alrededores</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo se mueve por todo el municipio para darte una solución rápida, estés donde estés.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Damos cobertura en todas las áreas de {municipioData.nombre}:</h3>
                      <p className="text-brand-black-light">Servicio profesional en todo el municipio</p>
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
                      <span>Si es una urgencia, estamos contigo en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Cobeja */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Todos los servicios de antenista que necesitas en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tenemos una solución para cada problema o proyecto que tengas en mente.</p>
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

          {/* Por qué elegir nuestros servicios en Cobeja */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué confiar en nuestro servicio de antenista en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te damos motivos de peso para que nos elijas como tu técnico de confianza.</p>
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

         {/* Testimonios de clientes en Cobeja */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus vecinos de {municipioData.nombre} ya han confiado en nosotros</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La mejor recomendación es la de la gente que, como tú, ya ha probado nuestro servicio.</p>
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

          {/* FAQs específicas de Cobeja */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus dudas sobre nuestro servicio de antenista, resueltas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Respondemos a algunas de las preguntas que seguro te estás haciendo.</p>
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

          {/* CTA Section específica para Cobeja */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos? Ponte en contacto con tu antenista en {municipioData.nombre}</h2>
                  <p className="text-xl mb-8 text-white/90">Si quieres una solución rápida y eficaz para tu antena o portero, no esperes más. Llámanos o escríbenos un WhatsApp y te atenderemos encantados.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Cobeja" className="flex items-center gap-2">
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