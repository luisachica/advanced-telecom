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
  nombre: "Las Ventas de Retamosa",
  slug: "las-ventas-de-retamosa",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45518",
  poblacion: "2.500",
  superficie: "52,3",
  descripcion: "Si vives en un chalet en Las Ventas de Retamosa y necesitas un servicio de antenista rápido, profesional y que conozca la zona, estás en el lugar perfecto. Te ofrecemos soluciones a medida para tu vivienda unifamiliar, garantizando la mejor señal de televisión y la máxima seguridad para ti y tu familia.",
  servicios: [
    "TDT de alta definición en toda la casa",
    "Instalación discreta de antenas parabólicas",
    "Videoporteros para el control de tu parcela",
    "Sistemas de cámaras de seguridad (CCTV)",
    "Filtros 5G para una señal sin interferencias",
    "Reparaciones urgentes para tu vivienda"
  ],
   serviciosDestacados: [
    "Especialistas en viviendas unifamiliares",
    "Instalaciones para chalets",
    "Servicio de urgencia en menos de 2 horas"
  ],

  zonasCubiertas: [
    "El casco urbano de Las Ventas",
    "Todas las urbanizaciones y residenciales",
    "Chalets y viviendas unifamiliares",
    "Fincas y naves del término municipal"
  ],

  cobertura: [
    { zona: "El casco urbano de Las Ventas", disponible: true },
    { zona: "Todas las urbanizaciones y residenciales", disponible: true },
    { zona: "Chalets y viviendas unifamiliares", disponible: true },
    { zona: "Fincas y naves del término municipal", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Sonia P.",
      comentario: "El servicio ha sido de 10. Vinieron a mi chalet, revisaron la instalación de TDT que me daba problemas y lo solucionaron en un momento. Muy profesionales y amables.",
      puntuacion: 5
    },
    {
      nombre: "Javier M.",
      comentario: "Les pedí presupuesto para instalar un videoportero en la entrada de la parcela y me asesoraron genial. La instalación fue muy rápida y limpia. ¡Totalmente recomendables!",
      puntuacion: 5
    },
    {
      nombre: "Beatriz L.",
      comentario: "Se nota que conocen la zona. Tuvieron que cambiarme la antena entera después de una tormenta y lo hicieron en la misma mañana. Un servicio muy eficaz.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Especialistas en viviendas unifamiliares",
      descripcion: "Conocemos perfectamente las instalaciones típicas de los chalets de Las Ventas de Retamosa, lo que nos permite ser más rápidos, eficientes y encontrar la mejor solución.",
      icono: "Home"
    },
    {
      titulo: "Instalaciones limpias y respetuosas",
      descripcion: "Cuidamos la estética de tu casa. Hacemos nuestro trabajo de forma ordenada, limpia y respetando tu hogar y tu jardín en todo momento.",
      icono: "Shield"
    },
    {
      titulo: "Presupuesto claro y sin compromiso",
      descripcion: "Te damos un precio cerrado por adelantado. Sabrás cuánto te va a costar el servicio antes de que empecemos, para que no haya ninguna sorpresa.",
      icono: "Users"
    },
    {
      titulo: "Garantía de un trabajo bien hecho",
      descripcion: "Te garantizamos por escrito todas nuestras reparaciones e instalaciones. Tu tranquilidad y satisfacción son nuestro principal objetivo.",
      icono: "CheckCircle"
    }
  ],

  faqs: [
    {
      question: "En mi chalet la señal WiFi no llega bien a todas partes, ¿podéis ayudar con eso?",
      answer: "Aunque nuestra especialidad son las antenas de TV, también entendemos de conectividad. Podemos asesorarte e instalarte soluciones como repetidores de señal WiFi o sistemas PLC para que tengas una buena cobertura de internet en toda la casa."
    },
    {
      question: "¿Cuánto se tarda en instalar una antena parabólica?",
      answer: "Una instalación estándar de una antena parabólica en el tejado de un chalet, incluyendo el cableado hasta el salón, suele llevar entre 2 y 3 horas, dejándolo todo probado y funcionando."
    },
    {
      question: "¿El presupuesto que me dais por teléfono es el definitivo?",
      answer: "Por teléfono te podemos dar un precio muy aproximado. Pero para darte un presupuesto 100% cerrado, preferimos acercarnos a tu casa en Las Ventas de Retamosa para ver el trabajo in situ, sin ningún coste para ti."
    },
    {
      question: "¿Qué garantía tienen los materiales que instaláis?",
      answer: "Trabajamos siempre con primeras marcas, por lo que todos los componentes que instalamos (antenas, amplificadores, etc.) cuentan con la garantía oficial del fabricante, que suele ser de 2 a 3 años."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Las Ventas de Retamosa | Advanced Telecom`,
  description: `✅ Tu antenista local en Las Ventas de Retamosa. Especialista en TDT, parabólicas y videoporteros para chalets y urbanizaciones. ¡Presupuesto gratis!`,
  keywords: `antenista Las Ventas de Retamosa, antenas TDT Las Ventas de Retamosa, instalación antenas Toledo, reparación antenas Las Ventas de Retamosa, telecomunicaciones Las Ventas de Retamosa`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-las-ventas-de-retamosa'
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
          {/* Hero Section específico de Las Ventas de Retamosa */}
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
                    <span className="text-brand-green font-medium">Las Ventas de Retamosa</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu <span className="text-brand-green">antenista especialista</span> en Las Ventas de Retamosa
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      {municipioData.descripcion}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llama y te damos información
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

           {/* Cobertura específica de Las Ventas de Retamosa */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos servicio en todo el municipio y sus urbanizaciones</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Desde el centro del pueblo hasta el último chalet de cada urbanización, nuestro equipo se desplaza para ofrecerte una cobertura total y un servicio de proximidad.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en Las Ventas de Retamosa incluye:</h3>
                      <p className="text-brand-black-light">Cobertura completa en todo el término municipal</p>
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

          {/* Servicios especializados en Las Ventas de Retamosa */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones a medida para tu chalet en Las Ventas de Retamosa</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Entendemos las necesidades específicas de las viviendas unifamiliares y te ofrecemos un servicio pensado para ellas.</p>
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

          {/* Por qué elegir nuestros servicios en Las Ventas de Retamosa */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de elegir un antenista que conoce tu zona</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra especialización en el área es tu mejor garantía de un trabajo bien hecho.</p>
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

         {/* Testimonios de clientes en Las Ventas de Retamosa */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que dicen tus vecinos de Las Ventas de Retamosa</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La opinión de la gente que vive en tu misma zona es la mejor referencia que podemos ofrecerte.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Las Ventas de Retamosa</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Las Ventas de Retamosa */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Resolvemos tus dudas más frecuentes en Las Ventas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí respondemos a algunas de las preguntas que más nos hacen tus vecinos.</p>
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

          {/* CTA Section específica para Las Ventas de Retamosa */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas ayuda con tu antena? Contacta con nosotros</h2>
                  <p className="text-xl mb-8 text-white/90">Si vives en Las Ventas de Retamosa, llámanos o escríbenos. Te daremos una solución rápida y profesional para tu chalet, con un presupuesto a tu medida y sin compromiso.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Las%20Ventas%20de%20Retamosa" className="flex items-center gap-2">
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