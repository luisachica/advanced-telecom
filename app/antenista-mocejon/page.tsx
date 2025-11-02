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
import { withPhone } from "@/lib/seo";

// Datos específicos del municipio
const municipioData = {
  nombre: "Mocejón",
  slug: "mocejon",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45518",
  poblacion: "5.200",
  superficie: "54,2",
  descripcion: "Tu antenista de confianza en Mocejón. Solucionamos tus problemas de TDT, parabólicas y videoporteros en el día. Presupuesto gratis y sin compromiso.",
  servicios: [
    "Reparación y ajuste de TDT en Mocejón",
    "Instalación de antenas parabólicas",
    "Instalación y arreglo de videoporteros",
    "Sistemas de cámaras de seguridad (CCTV)",
    "Solución de interferencias 5G",
    "Servicio de reparaciones urgentes"
  ],
   serviciosDestacados: [
    "Señal TDT nítida y estable en Mocejón",
    "Antenista local de confianza",
    "Servicio técnico especializado"
  ],

  zonasCubiertas: [
    "El casco urbano de Mocejón",
    "Nuevas zonas residenciales y chalets",
    "Comunidades de vecinos y bloques de pisos",
    "El polígono industrial y fincas cercanas"
  ],

  cobertura: [
    { zona: "El casco urbano de Mocejón", disponible: true },
    { zona: "Nuevas zonas residenciales y chalets", disponible: true },
    { zona: "Comunidades de vecinos y bloques de pisos", disponible: true },
    { zona: "El polígono industrial y fincas cercanas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Presidente de comunidad",
      comentario: "Les llamé por un problema con la antena de la comunidad y lo gestionaron todo muy rápido y muy bien. Un servicio muy profesional y recomendable.",
      puntuacion: 5
    },
    {
      nombre: "David R.",
      comentario: "Un servicio excelente. El técnico fue muy puntual, amable y me arregló el problema de la TDT en menos de una hora. Se nota la experiencia.",
      puntuacion: 5
    },
    {
      nombre: "María L.",
      comentario: "Son honestos y profesionales. Les pedí presupuesto y me dieron la solución más sencilla y económica, sin intentar venderme nada que no necesitara. Así da gusto.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Somos de la zona",
      descripcion: "No somos una empresa de fuera. Somos tus técnicos de confianza en Mocejón, y eso se nota en la rapidez de la respuesta y en el trato directo y familiar.",
      icono: "Home"
    },
    {
      titulo: "Trabajos bien hechos, no parches",
      descripcion: "Nos gusta hacer las cosas con profesionalidad, usando buenos materiales para que la solución sea definitiva y no un arreglo temporal que vuelva a fallar.",
      icono: "Shield"
    },
    {
      titulo: "Precios claros y sin sorpresas",
      descripcion: "Te damos un presupuesto cerrado antes de empezar cualquier trabajo. Un precio justo y transparente por un servicio de la máxima calidad.",
      icono: "Users"
    },
    {
      titulo: "Compromiso contigo",
      descripcion: "Nuestro objetivo es que quedes totalmente satisfecho con el resultado. No terminamos el trabajo hasta que todo funciona a la perfección.",
      icono: "CheckCircle"
    }
  ],

  faqs: [
    {
      question: "¿Tengo que pagar por el desplazamiento si venís a darme presupuesto a Mocejón?",
      answer: "No, en absoluto. El desplazamiento para valorar el trabajo y darte un presupuesto cerrado y sin compromiso es totalmente gratuito."
    },
    {
      question: "¿Cuánto tiempo tardáis en instalar una antena nueva?",
      answer: "Una instalación estándar de una antena de TDT en una vivienda unifamiliar o en un tejado comunitario la dejamos lista en la misma mañana o tarde, para causarte las mínimas molestias."
    },
    {
      question: "Mi casa es antigua, ¿se puede mejorar la instalación de la antena?",
      answer: "Sí, por supuesto. Estamos especializados en modernizar instalaciones antiguas, cambiando el cableado deteriorado y los componentes obsoletos para que disfrutes de la TDT con la calidad actual."
    },
    {
      question: "¿Tenéis garantía en las reparaciones?",
      answer: "Sí. Todas nuestras reparaciones están garantizadas por escrito. Si el problema que hemos arreglado vuelve a producirse, volveremos a solucionarlo sin ningún coste para ti."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Mocejón | Advanced Telecom`,
  description: withPhone(`✅ Tu antenista de confianza en Mocejón. Solucionamos tus problemas de TDT, parabólicas y videoporteros en el día. Presupuesto gratis y sin compromiso.`),
  keywords: `antenista Mocejón, antenas TDT Mocejón, instalación antenas Toledo, reparación antenas Mocejón, telecomunicaciones Mocejón, videoporteros Mocejón`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-mocejon'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Antenista en Mocejón | Advanced Telecom',
    description: withPhone('✅ Tu antenista de confianza en Mocejón. Solucionamos tus problemas de TDT, parabólicas y videoporteros en el día. Presupuesto gratis y sin compromiso.'),
    url: 'https://advanced-telecom.es/antenista-mocejon',
    siteName: 'Advanced Telecom',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antenista en Mocejón | Advanced Telecom',
    description: withPhone('✅ Tu antenista de confianza en Mocejón. Solucionamos tus problemas de TDT, parabólicas y videoporteros en el día. Presupuesto gratis y sin compromiso.'),
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
                    <span className="text-brand-green font-medium">Mocejón</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu servicio de <span className="text-brand-green">antenista local</span> en Mocejón
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si eres de Mocejón y buscas un antenista profesional, que te dé un trato cercano y soluciones duraderas, has llegado al sitio correcto. Arreglamos cualquier avería en tu antena de TDT, parabólica o portero automático con la rapidez y la eficacia que necesitas, con la garantía de más de 25 años de experiencia.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llámanos
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

           {/* Cobertura específica de Mocejón */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Llegamos a cada rincón de Mocejón y sus alrededores</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo se desplaza por todo el municipio para ofrecerte una asistencia técnica ágil y de calidad, estés donde estés.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de cobertura en Mocejón incluye:</h3>
                      <p className="text-brand-black-light">Servicio técnico profesional en todo el municipio</p>
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
                      <span>Para averías urgentes, llegamos en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Mocejón */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones para tu hogar y negocio en Mocejón</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Tenemos un servicio a medida para cada necesidad, tanto para tu vivienda particular como para tu empresa o comunidad.</p>
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

          {/* Por qué elegir nuestros servicios en Mocejón */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La tranquilidad de contratar a tu antenista en Mocejón</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te damos motivos de peso para que confíes en un servicio profesional y cercano.</p>
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

         {/* Testimonios de clientes en Mocejón */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que dicen de nosotros en Mocejón</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La mejor referencia es la que te pueden dar tus propios vecinos.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Aldea del Fresno</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Mocejón */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus dudas más comunes, respondidas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos algunas de las preguntas que más nos hacen los vecinos de Mocejón.</p>
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

          {/* CTA Section específica para Mocejón */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Tienes una avería en tu antena en Mocejón?</h2>
                  <p className="text-xl mb-8 text-white/90">Llámanos y te damos un presupuesto sin compromiso. Nos desplazamos a tu domicilio en Mocejón para solucionar cualquier problema.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Mocejón" className="flex items-center gap-2">
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