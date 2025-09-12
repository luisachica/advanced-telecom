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

// Datos específicos de la urbanización
const municipioData = {
  nombre: "Coto del Zagal",
  slug: "coto-del-zagal",
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  codigoPostal: "28670",
  poblacion: "Urbanización privada",
  superficie: "Zona residencial",
  descripcion: "Tu antenista de confianza en la urbanización Coto del Zagal. Especialistas en soluciones para TDT, parabólicas y videoporteros en chalets. Servicio rápido y profesional.",
  servicios: [
    "Instalación de antenas TDT en chalets de Coto del Zagal",
    "Antenas parabólicas discretas para viviendas unifamiliares",
    "Videoporteros para chalets y parcelas",
    "Cámaras de vigilancia para jardines y parcelas",
    "Solución a interferencias 5G",
    "Reparaciones urgentes en la urbanización"
  ],
   serviciosDestacados: [
    "Especialistas en chalets",
    "Servicio de vecino a vecino",
    "Respuesta en menos de 2 horas"
  ],

  zonasCubiertas: [
    "Todas las calles y parcelas",
    "Chalets individuales, pareados y adosados",
    "Zonas y accesos comunes",
    "Viviendas en cualquiera de las fases"
  ],

  cobertura: [
    { zona: "Todas las calles y parcelas", disponible: true },
    { zona: "Chalets individuales, pareados y adosados", disponible: true },
    { zona: "Zonas y accesos comunes", disponible: true },
    { zona: "Viviendas en cualquiera de las fases", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Laura V.",
      comentario: "Compramos un chalet en Coto del Zagal y la instalación de la antena era un desastre. Les llamé y en una mañana me lo dejaron todo nuevo y funcionando perfectamente. Unos cracks.",
      puntuacion: 5
    },
    {
      nombre: "Javier S.",
      comentario: "El técnico fue super puntual, algo que se agradece viviendo aquí. Me solucionó un problema con la parabólica de forma rápida y a un precio muy razonable. Muy profesionales.",
      puntuacion: 5
    },
    {
      nombre: "Cristina P.",
      comentario: "Necesitaba un videoportero para la entrada de la parcela y me asesoraron genial sobre el mejor modelo para mi casa. La instalación fue perfecta. Los recomiendo al 100%.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Conocemos la zona al detalle",
      descripcion: "Sabemos cómo se distribuyen las casas, las orientaciones ideales para la señal y los pequeños desafíos técnicos que presenta la urbanización",
      icono: "Home"
    },
    {
      titulo: "Servicio de vecino a vecino",
      descripcion: "Te ofrecemos un trato cercano y de confianza. Entendemos tus preocupaciones porque trabajamos aquí todos los días",
      icono: "Users"
    },
    {
      titulo: "Máximo respeto por tu propiedad",
      descripcion: "Tratamos tu chalet, tu tejado y tu jardín con el máximo cuidado. Dejamos todo limpio y perfectamente instalado",
      icono: "Shield"
    },
    {
      titulo: "Soluciones claras y sin rodeos",
      descripcion: "Te explicamos cuál es el problema y cuál es la mejor solución de forma sencilla. Nuestro objetivo es resolver, no complicar",
      icono: "Signal"
    }
  ],

  faqs: [
    {
      question: "¿Conocéis los tipos de tejado de Coto del Zagal para hacer una instalación limpia?",
      answer: "Sí, perfectamente. Estamos acostumbrados a trabajar con los diferentes tipos de teja y cubiertas de los chalets de la urbanización, asegurando siempre una instalación segura, estanca y estética."
    },
    {
      question: "Tengo mala señal en unas habitaciones y en otras no, ¿podéis arreglarlo?",
      answer: "Claro, ese es un problema muy común en chalets. Se debe a la distribución interior de la señal. Revisamos tu instalación, encontramos el fallo y lo solucionamos para que tengas señal perfecta en toda la casa."
    },
    {
      question: "¿Dais servicio a cualquier hora si tengo una urgencia?",
      answer: "Tenemos un servicio de guardia para urgencias graves. Si te quedas completamente sin servicio por una avería, haremos todo lo posible por atenderte el mismo día, incluso en fin de semana."
    },
    {
      question: "¿El presupuesto que me dais es definitivo?",
      answer: "Sí. El presupuesto que te damos después de valorar el trabajo en tu chalet es cerrado y sin sorpresas. Incluye todos los materiales y la mano de obra necesaria."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en Coto del Zagal | Advanced Telecom`,
  description: `✅ Tu antenista especialista en la urbanización Coto del Zagal. Soluciones para TDT, parabólicas y videoporteros en tu chalet. Presupuesto gratis y rápido.`,
  keywords: `antenista Coto del Zagal, antenas TDT chalets, videoporteros urbanización, parabólicas discretas, antenista Madrid, telecomunicaciones chalets`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-coto-del-zagal'
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
          {/* Hero Section específico de Coto del Zagal */}
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
                    <span className="text-brand-green font-medium">Coto del Zagal</span>
                  </nav>

                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Tu antenista de confianza en <span className="text-brand-green">Coto del Zagal</span>
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Si vives en la urbanización Coto del Zagal y necesitas un antenista rápido, profesional y que conozca la zona a la perfección, estás en el lugar indicado. Somos especialistas en dar un servicio a medida para los chalets y viviendas de la urbanización.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668838415" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Llamar ahora
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Pide tu presupuesto para {municipioData.nombre}
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

           {/* Cobertura específica de Coto del Zagal */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicio completo en toda la urbanización {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos cada calle y cada fase de la urbanización, lo que nos permite ser extremadamente ágiles y precisos en nuestro servicio.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Cubrimos cada rincón de {municipioData.nombre}:</h3>
                      <p className="text-brand-black-light">Respuesta prioritaria para vecinos de {municipioData.nombre}: te atendemos en menos de 2 horas.</p>
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

          {/* Servicios especializados en Coto del Zagal */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Soluciones a medida para tu chalet en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Entendemos las necesidades específicas de las viviendas de la urbanización y te ofrecemos los servicios que realmente necesitas.</p>
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

          {/* Por qué elegir nuestros servicios en Coto del Zagal */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La ventaja de un antenista que conoce {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">No somos un servicio genérico, somos especialistas en tu urbanización.</p>
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

         {/* Testimonios de clientes en Coto del Zagal */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que opinan tus vecinos de {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">La satisfacción de la gente que vive en tu misma urbanización es la mejor garantía.</p>
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
                    <div className="text-sm text-brand-black-light">Residente en {municipioData.nombre}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs específicas de Coto del Zagal */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Tus dudas sobre el servicio de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Aquí respondemos a las preguntas que más nos hacen tus vecinos.</p>
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

          {/* CTA Section específica para Coto del Zagal */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en {municipioData.nombre}? ¡Llámanos!</h2>
                  <p className="text-xl mb-8 text-white/90">Si vives en la urbanización y quieres un servicio rápido, garantizado y de confianza, no busques más. Llámanos o escríbenos, cuéntanos qué necesitas y te daremos la mejor solución.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20Coto%20del%20Zagal" className="flex items-center gap-2">
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