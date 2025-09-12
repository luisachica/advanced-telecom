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
  nombre: "Arroyomolinos",
  slug: "arroyomolinos",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28939",
  poblacion: "28.913",
  superficie: "42,33",
  descripcion: "Antenista homologado en Arroyomolinos especializado en instalaciones de telecomunicaciones. Servicios técnicos de calidad sin cobrar desplazamiento.",
  servicios: [
    "Instalación de antenas TDT en Arroyomolinos",
    "Antenas parabólicas y por cable",
    "Porteros automáticos y videoporteros",
    "Sistemas de videovigilancia y alarmas",
    "Orientación de antenas parabólicas",
    "Mantenimiento preventivo de antenas"
  ],
   serviciosDestacados: [
    "Antenista homologado",
    "Sin cobrar desplazamiento",
    "Reparaciones en el día"
  ],

  zonasCubiertas: [
    "Casco urbano",
    "Zona residencial",
    "Área industrial",
    "Urbanizaciones",
    "Viviendas aisladas"
  ],

  cobertura: [
    { zona: "Casco urbano", disponible: true },
    { zona: "Zona residencial", disponible: true },
    { zona: "Área industrial", disponible: true },
    { zona: "Urbanizaciones", disponible: true },
    { zona: "Viviendas aisladas", disponible: true }
  ],

  testimonios: [
    {
      nombre: "María González",
      comentario: "Excelente servicio de antenista en Arroyomolinos. No cobraron desplazamiento y la instalación fue perfecta.",
      puntuacion: 5
    },
    {
      nombre: "Carlos Fernández",
      comentario: "Reparación en el mismo día. Muy profesionales y con garantía completa.",
      puntuacion: 5
    },
    {
      nombre: "Ana Rodríguez",
      comentario: "Antenista homologado muy recomendable en Arroyomolinos. Trabajo de calidad garantizado.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Antenista homologado",
      descripcion: "Empresa registrada en telecomunicaciones de España con servicios profesionales",
      icono: "Home"
    },
    {
      titulo: "Sin cobrar desplazamiento",
      descripcion: "No cobramos desplazamiento y adaptamos presupuestos a cada cliente",
      icono: "Signal"
    },
    {
      titulo: "Reparaciones en el día",
      descripcion: "Realizamos reparaciones el mismo día sin largos períodos de espera",
      icono: "Users"
    },
    {
      titulo: "Mejores marcas",
      descripcion: "Trabajamos con Fermax, Tegui, Auta, Golmar y Comelit",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "¿Qué servicios de antenista ofrecen en Arroyomolinos?",
      answer: "Somos antenista homologado en Arroyomolinos. Ofrecemos instalación y reparación de antenas TDT, parabólicas, porteros automáticos, videoporteros, cámaras de seguridad y alarmas con garantía completa."
    },
    {
      question: "¿Cobran desplazamiento en Arroyomolinos?",
      answer: "No, en Advanced Telecom no cobramos desplazamiento en Arroyomolinos. Adaptamos nuestros presupuestos a las necesidades de cada cliente porque sabemos que cada situación es única."
    },
    {
      question: "¿Qué marcas utilizan para las instalaciones?",
      answer: "Trabajamos con las mejores marcas del mercado como Fermax, Tegui, Auta, Golmar y Comelit para garantizar la máxima calidad en nuestras instalaciones."
    },
    {
      question: "¿Cuánto tardan en hacer las reparaciones?",
      answer: "Nos destacamos por realizar reparaciones en el día, sin tener que esperar largos períodos de tiempo. Todos nuestros servicios están cubiertos por garantía."
    }
  ]
}


export const metadata: Metadata = {
  title: "Antenista en Arroyomolinos - Antenas TDT y Porteros Automáticos",
  description: "Antenistas homologados en Arroyomolinos. Instalamos antenas TDT y parabólicas. ¡NO COBRAMOS DESPLAZAMIENTO! Fermax, Tegui, Auta, Golmar y Comelit.",
  keywords: "antenista Arroyomolinos, antenas TDT, parabólicas, porteros automáticos, reparación antenas, instalación antenas, Fermax, Tegui, Auta, Golmar, Comelit",
  openGraph: {
    title: "Antenista en Arroyomolinos - Servicio Homologado",
    description: "Advanced Telecom - Antenistas homologados en Arroyomolinos. Sin desplazamiento. Reparaciones en el día. Mejores marcas del mercado.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antenista en Arroyomolinos - Advanced Telecom",
    description: "Servicio de antenista homologado en Arroyomolinos. Antenas TDT, parabólicas, porteros automáticos y cámaras de seguridad.",
  },
  alternates: {
    canonical: "https://advanced-telecom.es/antenista-en-arroyomolinos"
  }
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

export default function ArroyomolinosPage() {
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
                    <span className="text-brand-green font-medium">Arroyomolinos</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en Arroyomolinos
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      ¡Bienvenidos a Advanced Telecom! Somos una empresa de servicios de antenista homologado en Arroyomolinos, registrados en telecomunicaciones de España, y estamos aquí para ofrecerle soluciones en instalación y reparación de antenas de TV, TDT y parabólicas, porteros automáticos y vídeo porteros, cámaras de seguridad y alarmas.
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

           {/* Cobertura específica de Arroyomolinos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Instalamos su Antena TDT y Parabólica en Arroyomolinos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">¡NO COBRAMOS DESPLAZAMIENTO! En Advanced Telecom nos enorgullecemos de ofrecer a nuestros clientes un servicio de calidad, trabajando con las mejores marcas del mercado: Fermax, Tegui, Auta, Golmar y Comelit.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura en Arroyomolinos</h3>
                      <p className="text-brand-black-light">Servicio de antenista homologado en todo el municipio</p>
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

          {/* Servicios especializados en Arroyomolinos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Mantenimiento de antenas parabólicas, TDT y porteros automáticos en Arroyomolinos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Si necesitas instalar una antena de TV, TDT o parabólica, puedes confiar en nosotros para una instalación rápida y eficiente, con una excelente calidad de imagen garantizada. También somos expertos en porteros automáticos y vídeo porteros, instalando sistemas modernos y de alta calidad en tu hogar o negocio.</p>
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

          {/* Por qué elegir nuestros servicios en Arroyomolinos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tipos de clientes a los que podemos ofrecer nuestros servicios de antenista en Arroyomolinos</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">En Advanced Telecom estamos en la capacidad de atender diferentes tipos de clientes en Arroyomolinos y las urbanizaciones cercanas, tanto particulares, como empresas y cualquier tipo de negocio que requiera instalación, reparación o mantenimiento de antenas de TV, parabólicas, TDT y/o porteros automáticos.</p>
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

         {/* Testimonios de clientes en Arroyomolinos */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">10 ventajas y beneficios de hacer mantenimiento a tus antenas parabólicas, de TV y TDT</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra empresa, no sólo ofrece servicios de instalación y reparación de antenas de TV, TDT y parabólicas, sino que también entendemos la importancia del mantenimiento preventivo para asegurar una señal estable y una experiencia de visualización de alta calidad.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Mejora la calidad de la señal</h3>
                  </div>
                  <p className="text-brand-black-light">El mantenimiento regular de las antenas de televisión, parabólicas y TDT ayuda a mantener una buena calidad de señal y evitar problemas de pérdida de señal o interferencias.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Aumenta la vida útil</h3>
                  </div>
                  <p className="text-brand-black-light">El mantenimiento adecuado de las antenas prolonga su vida útil y evita la necesidad de reemplazarlas con frecuencia.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Ahorra dinero</h3>
                  </div>
                  <p className="text-brand-black-light">Al prolongar la vida útil de las antenas, te evitas el gasto de tener que reemplazarlas con frecuencia.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Previene averías</h3>
                  </div>
                  <p className="text-brand-black-light">El mantenimiento regular de las antenas ayuda a detectar y prevenir problemas antes de que se conviertan en averías más costosas.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Incrementa la seguridad</h3>
                  </div>
                  <p className="text-brand-black-light">El mantenimiento adecuado de las antenas, así como las cámaras de vigilancia y alarmas, asegura su correcto funcionamiento y por ende la seguridad en los lugares donde están instaladas.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Evita problemas climáticos</h3>
                  </div>
                  <p className="text-brand-black-light">Un mantenimiento regular de las antenas ayuda a evitar que factores climáticos como la lluvia, el viento y la nieve afecten su rendimiento.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Ahorra tiempo</h3>
                  </div>
                  <p className="text-brand-black-light">Un mantenimiento adecuado de las antenas evita la necesidad de reparaciones costosas y prolongadas, lo que te ahorra tiempo y molestias.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Garantiza un correcto funcionamiento</h3>
                  </div>
                  <p className="text-brand-black-light">Un mantenimiento regular de las antenas asegura que funcionen correctamente, lo que significa una mejor experiencia de visualización y una mayor satisfacción del usuario.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Cumple con las normas de seguridad</h3>
                  </div>
                  <p className="text-brand-black-light">El mantenimiento de las antenas, parabólicas y TDT garantiza que cumplan con las normas de seguridad y estén instaladas adecuadamente.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-brand-green mr-3" />
                    <h3 className="font-semibold text-brand-black">Mejora la imagen de la empresa</h3>
                  </div>
                  <p className="text-brand-black-light">Para las empresas que utilizan antenas de televisión para su negocio, el mantenimiento adecuado mejora la imagen de la empresa y demuestra su compromiso con la calidad y el servicio al cliente.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs específicas de Arroyomolinos */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Los servicios más solicitados en Arroyomolinos y urbanizaciones cercanas son</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Instalación, reparación y mantenimiento de todo tipo de antenas de TV, parabólicas, por cable y TDT. Orientación de antenas parabólicas, Televisión Digital Terrestre, Video Porteros y vía satélite.</p>
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

          {/* CTA Section específica para Arroyomolinos */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">PIDE TU PRESUPUESTO SIN COMPROMISO</h2>
                  <p className="text-xl mb-8 text-white/90">Si necesitas un servicio de antenista homologado en Arroyomolinos, no dudes en contactarnos. En Advanced Telecom estamos listos para ofrecerte un servicio personalizado, con garantía y reparaciones en el momento que lo necesites. ¡Esperamos poder ayudarte pronto!</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Arroyomolinos" className="flex items-center gap-2">
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