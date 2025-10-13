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
  nombre: "Santa Cruz del Retamar",
  slug: "santa-cruz-del-retamar",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45513",
  poblacion: "2.847",
  superficie: "47,8",
  descripcion: "Servicio de antenista profesional en Santa Cruz del Retamar. Especialistas en TDT, parabólicas y soluciones para viviendas.",
  servicios: [
    "Instalación de antenas TDT en Aldea del Fresno",
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
    "El casco urbano y todas las calles del municipio",
    "Chalets individuales y viviendas unifamiliares",
    "Urbanizaciones y fincas en el entorno cercano",
    "Atención dedicada en todo el término municipal",
    "Servicio de urgencia con asistencia garantizada en menos de 2 horas."
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
      nombre: "Vecino de Santa Cruz del Retamar",
      comentario: "Un servicio muy profesional y resolutivo. Teníamos problemas con la señal de TDT en casa y lo solucionaron de forma definitiva. Se nota la experiencia en la zona.",
      puntuacion: 5
    },
    {
      nombre: "Residente en el casco urbano",
      comentario: "La instalación del videoportero fue impecable. Un trabajo muy limpio, rápido y el técnico nos explicó el funcionamiento a la perfección. Muy recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Propietario en una urbanización cercana",
      comentario: "Después de una tormenta, la antena parabólica dejó de funcionar. Les llamamos y acudieron el mismo día. Un servicio de urgencia eficaz y muy profesional.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocimiento profundo de la zona",
      descripcion: "Nuestra experiencia trabajando en Santa Cruz del Retamar nos permite conocer las particularidades de sus instalaciones y ofrecer soluciones más rápidas y eficaces, adaptadas a la estructura de su vivienda.",
      icono: "Home"
    },
    {
      titulo: "Máxima calidad en materiales y acabados",
      descripcion: "Empleamos únicamente componentes y antenas de las mejores marcas del mercado para garantizar instalaciones duraderas y estéticamente cuidadas, respetando siempre la arquitectura de su vivienda.",
      icono: "Signal"
    },
    {
      titulo: "Presupuestos transparentes y sin compromiso",
      descripcion: "Le proporcionamos un presupuesto detallado y por escrito, sin letra pequeña ni sorpresas de última hora. La honestidad es un pilar fundamental de nuestro servicio.",
      icono: "Users"
    },
    {
      titulo: "Garantía profesional por escrito",
      descripcion: "Todos nuestros trabajos, desde reparaciones hasta instalaciones completas, están cubiertos por una garantía formal para su total tranquilidad y confianza.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Mi casa tiene un tejado delicado, ¿tienen cuidado durante la instalación?",
      answer: "Por supuesto. Somos extremadamente cuidadosos con todo tipo de cubiertas. Realizamos las instalaciones con los anclajes y sellados adecuados para garantizar una fijación segura y totalmente estanca, sin dañar su tejado."
    },
    {
      question: "¿Es posible llevar la señal de TV a una zona exterior como un patio o un porche?",
      answer: "Sí. Es una solicitud habitual en la zona. Realizamos la instalación del cableado de exterior y las tomas necesarias de forma segura y estética para que pueda disfrutar de la televisión al aire libre."
    },
    {
      question: "¿El presupuesto que ofrecen es gratuito?",
      answer: "Sí. El desplazamiento a su domicilio en Santa Cruz del Retamar para valorar el trabajo y ofrecerle un presupuesto detallado y sin compromiso es totalmente gratuito."
    },
    {
      question: "¿Qué garantía ofrecen en las reparaciones?",
      answer: "Todas nuestras reparaciones cuentan con la garantía legal que cubre tanto la mano de obra como los componentes que hayan sido sustituidos, quedando todo reflejado en su factura."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Santa Cruz del Retamar | Advanced Telecom`,
  description: `Servicio de antenista profesional en Santa Cruz del Retamar. Especialistas en TDT, parabólicas y soluciones para viviendas. Presupuesto sin compromiso.`,
  keywords: `antenista Santa Cruz del Retamar, antenas TDT Santa Cruz del Retamar, instalación antenas, reparación antenas, telecomunicaciones Santa Cruz del Retamar`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-santa-cruz-del-retamar'
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
                    <span className="text-brand-green font-medium">Santa Cruz del Retamar</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      <span className="text-brand-green">Antenista</span> en Santa Cruz del Retamar
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Le ofrecemos un servicio técnico de antenista especializado para los vecinos y propietarios de viviendas en Santa Cruz del Retamar. Con más de 25 años de experiencia, garantizamos soluciones a medida y de alta calidad para cualquier necesidad de telecomunicaciones en su hogar.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Contactar asistencia técnica
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
                      alt="Servicios de antenista en Santa Cruz del Retamar"
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

           {/* Cobertura específica de Santa Cruz del Retamar */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en todo Santa Cruz del Retamar</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo técnico se dedica a dar un servicio de proximidad y alta eficiencia, cubriendo la totalidad del municipio y sus alrededores.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de servicio en Santa Cruz del Retamar incluye:</h3>
                      <p className="text-brand-black-light">Antenista profesional en todo el término municipal</p>
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
                      <span>Servicio de urgencia con asistencia garantizada en menos de 2 horas.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios especializados en Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones a medida para su vivienda en Santa Cruz del Retamar</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Entendemos las particularidades de las viviendas de la zona y ofrecemos un catálogo de servicios diseñado para ellas.</p>
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

          {/* Por qué elegir nuestros servicios en Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir un especialista en Santa Cruz del Retamar?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra especialización en el municipio es su mayor garantía de un trabajo eficiente y de máxima calidad.</p>
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

         {/* La confianza de sus vecinos en Santa Cruz del Retamar */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de sus vecinos en Santa Cruz del Retamar</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de los propietarios del municipio es nuestra mejor referencia.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Santa Cruz del Retamar</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Aldea del Fresno */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre nuestros servicios</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos aquí las dudas más habituales de los residentes de Santa Cruz del Retamar.</p>
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

          {/* Contacte con su antenista en Santa Cruz del Retamar */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista en Santa Cruz del Retamar</h2>
                  <p className="text-xl mb-8 text-white/90">Si reside en Santa Cruz del Retamar y desea solicitar un presupuesto o una intervención técnica, no dude en contactar con nosotros. Será un placer ofrecerle la mejor solución para su chalet.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20antenas%20en%20Santa%20Cruz%20del%20Retamar" className="flex items-center gap-2">
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