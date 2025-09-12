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
  nombre: "El Viso de San Juan",
  slug: "el-viso-de-san-juan",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45213",
  poblacion: "3.245",
  superficie: "52,3",
  descripcion: "Antenista profesional en El Viso de San Juan especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad para este municipio toledano.",
  servicios: [
    "Instalación de antenas TDT en El Viso de San Juan",
    "Antenas parabólicas para chalets y urbanizaciones",
    "Videoporteros para chalets y comunidades",
    "Sistemas de cámaras de seguridad",
    "Filtros anti-interferencias 5G",
    "Reparaciones urgentes de todo tipo"
  ],
   serviciosDestacados: [
    "Antenista TDT especializado",
    "Instalaciones en chalets",
    "Servicio de urgencia"
  ],

  zonasCubiertas: [
    "El casco urbano del pueblo",
    "Todas las urbanizaciones (Coto del Zagal, Castillo del Olmo, etc.)",
    "Nuevos desarrollos de chalets",
    "Fincas y naves del término municipal"
  ],

  cobertura: [
    { zona: "El casco urbano del pueblo", disponible: true },
    { zona: "Coto del Zagal", disponible: true },
    { zona: "Castillo del Olmo", disponible: true },
    { zona: "Nuevos desarrollos de chalets", disponible: true },
    { zona: "Fincas y naves del término municipal", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Sandra M.",
      comentario: "Vivo en una de las urbanizaciones y la señal a veces fallaba. Les llamé y me ajustaron la antena del chalet. Desde entonces, la tele se ve perfecta. Unos profesionales.",
      puntuacion: 5
    },
    {
      nombre: "Javier G.",
      comentario: "El servicio más rápido y eficaz que he encontrado. Tenía una avería urgente en el pueblo y vinieron el mismo día a solucionarla. Totalmente recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Presidente de comunidad",
      comentario: "Contactamos con ellos para cambiar el videoportero de la comunidad y todo fueron facilidades. Se coordinaron perfectamente y el resultado ha sido excelente.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocimiento experto de la zona",
      descripcion: "Sabemos cuáles son los repetidores que dan mejor servicio al pueblo y a cada urbanización, lo que nos permite encontrar siempre la mejor solución de señal.",
      icono: "MapPin"
    },
    {
      titulo: "Trato directo y sin intermediarios",
      descripcion: "Hablarás siempre con un técnico que te entiende, no con una centralita. Te ofrecemos soluciones claras y un trato cercano.",
      icono: "Users"
    },
    {
      titulo: "Presupuestos honestos y sin compromiso",
      descripcion: "Te damos un precio justo por nuestro trabajo, sin costes ocultos ni sorpresas. Lo que acordamos contigo es lo que pagas.",
      icono: "CheckCircle"
    },
    {
      titulo: "Garantía de un trabajo profesional",
      descripcion: "Utilizamos los mejores materiales y las técnicas más avanzadas para que nuestras instalaciones y reparaciones sean fiables y muy duraderas.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "La señal de TDT en mi urbanización es bastante mala, ¿tiene solución?",
      answer: "Sí, casi siempre. Aunque la señal general de la zona no sea óptima, podemos mejorar mucho la recepción en tu casa instalando un buen amplificador de mástil y optimizando la orientación de tu antena individual."
    },
    {
      question: "¿Instaláis antenas en tejados de teja antigua como los del pueblo?",
      answer: "Por supuesto. Tenemos muchísima experiencia trabajando en todo tipo de tejados, incluyendo los más antiguos del casco urbano. Realizamos el trabajo con el máximo cuidado para no dañar ninguna teja."
    },
    {
      question: "¿El presupuesto que me dais por teléfono es fiable?",
      answer: "Por teléfono te podemos dar una primera orientación. Pero para darte un precio cerrado y 100% fiable, preferimos acercarnos a tu casa en El Viso de San Juan para ver el trabajo in situ, sin ningún coste para ti."
    },
    {
      question: "¿Cuánto tiempo de garantía tienen vuestros trabajos?",
      answer: "Todos nuestros trabajos están cubiertos por la garantía legal. Te la entregamos por escrito en la factura para que tengas total tranquilidad y confianza en el servicio."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en El Viso de San Juan | Advanced Telecom`,
  description: `✅ Tu antenista en El Viso de San Juan. Damos servicio a chalets y pisos. Soluciones TDT, parabólicas y videoporteros. Pide tu presupuesto gratis.`,
  keywords: `antenista El Viso de San Juan, antenas TDT El Viso de San Juan, instalación antenas Toledo, reparación antenas El Viso de San Juan, telecomunicaciones El Viso de San Juan, videoporteros chalets`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-el-viso-de-san-juan'
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

export default function ElVisoSanJuanPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de El Viso de San Juan */}
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
                      Tu antenista de confianza en {municipioData.nombre}. Tanto si vives en el centro del pueblo como en una de las urbanizaciones, te ofrecemos un servicio rápido, profesional y adaptado a tus necesidades. Solucionamos cualquier problema con tu señal de TV, portero automático o sistema de seguridad con la garantía de más de 25 años de experiencia en la zona.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama y te damos solución
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide tu presupuesto
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

           {/* Cobertura específica de El Viso de San Juan */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Llegamos a cada rincón de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos el municipio a la perfección, desde el casco urbano hasta la última calle de cada urbanización. Te garantizamos una asistencia rápida estés donde estés.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra zona de servicio incluye:</h3>
                      <p className="text-brand-black-light">Servicio de urgencia: llegamos a tu casa en menos de 2 horas.</p>
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

          {/* Servicios especializados en El Viso de San Juan */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Una solución para cada tipo de vivienda en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Entendemos que no es lo mismo un chalet que un piso. Por eso, te ofrecemos servicios especializados para cada necesidad.</p>
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

          {/* Por qué elegir nuestros servicios en El Viso de San Juan */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegirnos como tu antenista en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te damos razones de peso para que confíes en nuestro trabajo y profesionalidad.</p>
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

         {/* Testimonios de clientes en El Viso de San Juan */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que opinan tus vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de la gente del pueblo y de las urbanizaciones es nuestro mejor aval.</p>
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

          {/* FAQs específicas de El Viso de San Juan */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus dudas más comunes sobre nuestro servicio, resueltas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Respondemos a las preguntas que más nos hacen los vecinos de la zona.</p>
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

          {/* CTA Section específica para El Viso de San Juan */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Hablamos? Tu antenista en {municipioData.nombre} te espera</h2>
                  <p className="text-xl mb-8 text-white/90">Sea cual sea tu avería o proyecto, no dudes en contactarnos. Llámanos o escríbenos un WhatsApp y te daremos un presupuesto gratuito, rápido y a tu medida.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20{municipioData.nombre}" className="flex items-center gap-2">
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