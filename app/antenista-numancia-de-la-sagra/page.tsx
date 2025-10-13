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
  nombre: "Numancia de la Sagra",
  slug: "numancia-de-la-sagra",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45222",
  poblacion: "3.124",
  superficie: "52,3",
  descripcion: "Servicio de antenista profesional en Numancia de la Sagra. Soluciones para TDT, parabólicas y videoporteros en hogar, comunidad y empresa.",
  servicios: [
    "Instalación y reparación de antenas TDT",
    "Instalación de antenas parabólicas",
    "Sistemas de videoportero y portero automático",
    "Instalación de videovigilancia (CCTV)",
    "Solución a interferencias por la red 5G",
    "Servicio de reparaciones urgentes"
  ],
  serviciosDestacados: [
    "Experiencia local contrastada",
    "Tecnología avanzada y materiales de primera",
    "Presupuestos transparentes",
    "Garantía profesional por escrito"
  ],

  zonasCubiertas: [
    "El casco urbano de Numancia",
    "Nuevas zonas residenciales y chalets",
    "Comunidades de vecinos y bloques de pisos",
    "El polígono industrial y fincas del término"
  ],

  cobertura: [
    { zona: "El casco urbano de Numancia", disponible: true },
    { zona: "Nuevas zonas residenciales y chalets", disponible: true },
    { zona: "Comunidades de vecinos y bloques de pisos", disponible: true },
    { zona: "El polígono industrial y fincas del término", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Administrador de fincas",
      comentario: "Un servicio muy profesional y eficiente. Contactamos con ellos para un problema en la antena de la comunidad y lo solucionaron en el mismo día. Muy recomendables.",
      puntuacion: 5
    },
    {
      nombre: "Propietario en Numancia de la Sagra",
      comentario: "El técnico que vino a mi chalet fue muy profesional y atento. Me explicó cuál era el problema de la señal y lo resolvió de forma definitiva. Excelente trabajo.",
      puntuacion: 5
    },
    {
      nombre: "Gerente de empresa local",
      comentario: "Solicitamos un presupuesto para instalar cámaras de seguridad en nuestro negocio y nos ofrecieron la mejor solución. La instalación fue rápida y muy limpia.",
      puntuacion: 5
    }
  ],

  caracteristicas: [
    {
      titulo: "Experiencia local contrastada",
      descripcion: "Conocemos a fondo la señal en La Sagra, ofreciendo soluciones rápidas y eficaces.",
      icono: "MapPin"
    },
    {
      titulo: "Compromiso con la máxima calidad",
      descripcion: "Materiales de primeras marcas y componentes homologados para máxima fiabilidad.",
      icono: "Shield"
    },
    {
      titulo: "Transparencia y presupuestos cerrados",
      descripcion: "Presupuesto detallado y sin compromiso, sin costes ocultos.",
      icono: "Eye"
    },
    {
      titulo: "Garantía profesional por escrito",
      descripcion: "Garantía completa por escrito en materiales y mano de obra.",
      icono: "CheckCircle"
    }
  ],

  faqs: [
    {
      question: "¿Qué se incluye en un servicio de mantenimiento para una comunidad?",
      answer: "Incluye la revisión y ajuste de la instalación colectiva: antena, amplificador, fuente de alimentación y distribución, asegurando su correcto funcionamiento y previniendo averías."
    },
    {
      question: "¿El presupuesto que ofrecen tiene algún coste?",
      answer: "No. El desplazamiento a su domicilio en Numancia de la Sagra para valorar el trabajo y ofrecerle un presupuesto detallado es gratuito y sin compromiso."
    },
    {
      question: "¿Cuánto tiempo de garantía tienen las instalaciones?",
      answer: "Todas las instalaciones nuevas cuentan con la garantía legal, que cubre componentes y mano de obra. La garantía queda reflejada en la factura."
    },
    {
      question: "¿Trabajan con seguros del hogar para reparaciones?",
      answer: "Sí. Si su póliza cubre la avería (por ejemplo, por tormenta), emitimos la factura e informe técnico necesarios para su compañía aseguradora."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Numancia de la Sagra | Advanced Telecom`,
  description: `Servicio de antenista en Numancia de la Sagra. Soluciones profesionales para TDT, parabólicas y videoporteros en su hogar o comunidad. Presupuesto sin compromiso.`,
  keywords: `antenista Numancia de la Sagra, antenas TDT Numancia, instalación antenas Toledo, reparación antenas Numancia de la Sagra, videoporteros Numancia de la Sagra, telecomunicaciones Numancia`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-numancia-de-la-sagra'
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

export default function NumanciaPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de Numancia de la Sagra */}
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
                    <span className="text-brand-green font-medium">Numancia de la Sagra</span>
                  </nav>

              

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Antenista en <span className="text-brand-green">Numancia de la Sagra</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Le ofrecemos un servicio técnico de antenista para dar solución a cualquier incidencia de telecomunicaciones en Numancia de la Sagra. Con más de 25 años de experiencia, garantizamos intervenciones rápidas y eficaces para particulares, comunidades de propietarios y empresas, utilizando siempre la tecnología más avanzada.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <ArrowRight className="h-5 w-5 mr-2" />
                      Solicitar un presupuesto
                    </Link>
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Contactar asistencia técnica
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

           {/* Cobertura completa en Numancia de la Sagra */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en Numancia de la Sagra y alrededores</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestro equipo técnico se desplaza a cualquier punto del término municipal para ofrecerle una asistencia profesional y de proximidad.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Área de servicio completo</h3>
                      <p className="text-brand-black-light">Nuestra área de servicio en Numancia de la Sagra incluye:</p>
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

          {/* Nuestro catálogo de servicios especializados */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestro catálogo de servicios especializados</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Disponemos de una gama completa de soluciones para asegurar el óptimo funcionamiento de sus sistemas de televisión y comunicación.</p>
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

          {/* ¿Por qué confiar en nuestro servicio técnico? */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué confiar en nuestro servicio técnico?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Nuestra profesionalidad y compromiso son la mejor garantía para todos nuestros clientes en Numancia de la Sagra.</p>
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

         {/* La confianza de nuestros clientes en Numancia de la Sagra */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de nuestros clientes en Numancia de la Sagra</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de los vecinos y empresas de la localidad es nuestro principal objetivo.</p>
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
                    <div className="text-sm text-brand-black-light">Cliente en Numancia de la Sagra</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Preguntas frecuentes sobre nuestros servicios */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre nuestros servicios</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos aquí las dudas más habituales de nuestros clientes.</p>
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

          {/* CTA Section específica para Numancia de la Sagra */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista en Numancia de la Sagra</h2>
                  <p className="text-xl mb-8 text-white/90">Si desea solicitar un presupuesto o programar una visita técnica, no dude en contactar con nosotros. Estaremos encantados de ofrecerle la mejor solución para su hogar o negocio.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Numancia%20de%20la%20Sagra" className="flex items-center gap-2">
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