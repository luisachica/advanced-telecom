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
  nombre: "Los Cisneros",
  slug: "los-cisneros",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45220",
  poblacion: "1.200",
  superficie: "8,5",
  descripcion: "Antenista especialista en la urbanización Los Cisneros (Yeles). Soluciones TDT, parabólicas y videoporteros para tu chalet. Servicio de confianza para viviendas unifamiliares.",
  servicios: [
    "Optimización de señal TDT para chalets en Los Cisneros",
    "Instalación de antenas parabólicas discretas",
    "Instalación de videoporteros modernos",
    "Sistemas de cámaras de seguridad (CCTV)",
    "Solución de interferencias 5G",
    "Reparaciones urgentes en la urbanización"
  ],
   serviciosDestacados: [
    "Especialistas en chalets",
    "Instalaciones discretas",
    "Servicio urgente en urbanización"
  ],

  zonasCubiertas: [
    "Todas las calles y parcelas de la urbanización",
    "Chalets individuales, pareados y adosados",
    "Viviendas en cualquier fase de Los Cisneros",
    "Zonas comunes de la urbanización"
  ],

  cobertura: [
    { zona: "Todas las calles y parcelas", disponible: true },
    { zona: "Chalets individuales", disponible: true },
    { zona: "Chalets pareados y adosados", disponible: true },
    { zona: "Zonas comunes", disponible: true }
  ],

  testimonios: [
    {
      nombre: "David G.",
      ubicacion: "Los Cisneros",
      comentario: "El servicio ha sido inmejorable. Vinieron a mi chalet en Los Cisneros, encontraron por qué se pixelaba la tele y lo arreglaron. Muy profesionales y eficientes.",
      puntuacion: 5
    },
    {
      nombre: "Laura M.",
      ubicacion: "Los Cisneros",
      comentario: "Quería instalar un videoportero y me asesoraron genial. La instalación fue muy limpia y el técnico muy amable. Los recomiendo sin ninguna duda.",
      puntuacion: 5
    },
    {
      nombre: "Javier S.",
      ubicacion: "Los Cisneros",
      comentario: "Tuve una urgencia con la antena después de una tormenta y fueron los únicos que me atendieron rápido. Se agradece tener un servicio así de fiable en la urbanización.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Especialistas en la zona",
      descripcion: "No somos un servicio genérico. Conocemos la distribución de Los Cisneros, los tipos de construcción de los chalets y los pequeños desafíos de la señal en el área.",
      icono: "🎯"
    },
    {
      titulo: "Trato cercano y de confianza",
      descripcion: "Te atendemos como a un vecino, con un trato directo, honesto y transparente. Sin intermediarios ni complicaciones innecesarias.",
      icono: "🤝"
    },
    {
      titulo: "Presupuestos claros y sin sorpresas",
      descripcion: "Te damos un precio cerrado y justo por nuestro trabajo. Sabrás el coste total antes de que empecemos, con total claridad.",
      icono: "💰"
    },
    {
      titulo: "Garantía de un trabajo bien hecho",
      descripcion: "Nuestro objetivo es tu total satisfacción. Por eso, te garantizamos por escrito todas nuestras instalaciones y reparaciones.",
      icono: "✅"
    }
  ],

  faqs: [
    {
      question: "En mi calle de Los Cisneros la señal a veces es débil, ¿se puede mejorar?",
      answer: "Sí, por supuesto. Aunque la señal general de una zona sea mejorable, podemos potenciarla en tu chalet instalando un buen amplificador de mástil junto a la antena. Esto asegura que la señal llegue con fuerza a toda la casa."
    },
    {
      question: "¿Instaláis tomas de antena nuevas si quiero poner una tele en el porche?",
      answer: "Claro. Es un trabajo muy habitual. Te llevamos una nueva toma de antena a cualquier punto de tu casa o jardín, utilizando cable de exterior de alta calidad para que la instalación sea segura y duradera."
    },
    {
      question: "¿El presupuesto que me dais es totalmente gratuito?",
      answer: "Sí. Nos desplazamos a tu casa en Los Cisneros, valoramos el trabajo que necesitas y te damos un presupuesto detallado sin ningún tipo de coste ni compromiso para ti."
    },
    {
      question: "¿Cuánto tiempo de garantía tiene una instalación nueva?",
      answer: "Todas nuestras instalaciones nuevas cuentan con la máxima garantía, tanto en los materiales que utilizamos como en la mano de obra, que queda reflejada por escrito en tu factura."
    }
  ]
}


export const metadata: Metadata = {
  title: "Antenista en Los Cisneros | Antenas Toledo",
  description: withPhone("✅ Tu antenista especialista en la urbanización Los Cisneros (Yeles). Soluciones TDT, parabólicas y videoporteros para tu chalet. ¡Pide presupuesto!"),
  keywords: "antenista Los Cisneros, antenas TDT Los Cisneros, videoporteros Los Cisneros, antenista Yeles, chalets Los Cisneros",
  openGraph: {
    title: "Antenista en Los Cisneros | Antenas Toledo",
    description: withPhone("Tu antenista especialista en la urbanización Los Cisneros (Yeles). Soluciones TDT, parabólicas y videoporteros para tu chalet."),
    url: "https://antenastoledo.com/antenista-los-cisneros",
    siteName: "Antenas Toledo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Antenista en Los Cisneros | Antenas Toledo",
    description: withPhone("Tu antenista especialista en la urbanización Los Cisneros (Yeles). Soluciones TDT, parabólicas y videoporteros para tu chalet."),
  },
  alternates: {
    canonical: "https://antenastoledo.com/antenista-los-cisneros",
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
          {/* Hero Section específico de Los Cisneros */}
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
                    <span className="text-brand-green font-medium">Los Cisneros</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu <span className="text-brand-green">antenista de confianza</span> en la urbanización Los Cisneros
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si vives en la urbanización Los Cisneros, en Yeles, y necesitas un antenista que conozca la zona y te ofrezca un servicio de confianza para tu chalet, has llegado al sitio ideal. Nos especializamos en dar soluciones a medida para las viviendas de la urbanización, garantizando un trabajo profesional, rápido y con la máxima calidad.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668679500" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama y cuéntanos tu problema
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

           {/* Cobertura específica de Los Cisneros */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio completo en cada calle de Los Cisneros</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos perfectamente la urbanización, lo que nos permite ofrecerte un servicio ágil y eficaz en cualquier punto.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en Los Cisneros incluye:</h3>
                      <p className="text-brand-black-light">Cobertura completa en toda la urbanización</p>
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
                      <span>Respuesta prioritaria para vecinos de Los Cisneros: te atendemos en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Los Cisneros */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Todas las soluciones que tu chalet en Los Cisneros necesita</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Te ofrecemos una gama completa de servicios pensados para las necesidades de una vivienda unifamiliar como la tuya.</p>
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

          {/* Por qué elegir nuestros servicios en Los Cisneros */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué somos el servicio de confianza en Los Cisneros?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra especialización en tu urbanización es la mejor garantía que te podemos ofrecer.</p>
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

         {/* Testimonios de clientes en Los Cisneros */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que dicen de nosotros tus vecinos de Los Cisneros</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La opinión de la gente que vive en tu misma urbanización es la mejor referencia.</p>
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
                    <div className="text-sm text-brand-black-light">Vecino de Los Cisneros</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Los Cisneros */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus dudas sobre el servicio de antenista en la urbanización</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos algunas de las preguntas que más nos hacen tus vecinos.</p>
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

          {/* CTA Section específica para Los Cisneros */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en Los Cisneros? Llámanos</h2>
                  <p className="text-xl mb-8 text-white/90">Si vives en la urbanización, no busques más. Contacta con nosotros y te daremos una solución rápida, profesional y a medida para tu chalet.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668679500?text=Hola%2C%20necesito%20un%20antenista%20en%20Los%20Cisneros" className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Contactar por WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6">
                      <a href="tel:+34668679500" className="flex items-center gap-2">
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
