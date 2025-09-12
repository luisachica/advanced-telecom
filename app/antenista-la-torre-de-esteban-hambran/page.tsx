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
  nombre: "La Torre de Esteban Hambrán",
  slug: "la-torre-de-esteban-hambran",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45165",
  poblacion: "8.234",
  superficie: "54,2",
  descripcion: "Tu antenista de confianza en La Torre de Esteban Hambrán. Servicio local profesional para solucionar problemas de TDT y parabólicas en tu casa o chalet.",
  servicios: [
    "Instalación y reparación de TDT en La Torre de Esteban Hambrán",
    "Montaje y orientación de antenas parabólicas",
    "Instalación de videoporteros modernos",
    "Sistemas de cámaras de seguridad",
    "Filtros para interferencias 5G",
    "Reparación de averías urgentes"
  ],
   serviciosDestacados: [
    "Antenista del pueblo",
    "Servicio local de confianza",
    "Reparaciones urgentes en menos de 2 horas"
  ],

  zonasCubiertas: [
    "El casco urbano del pueblo",
    "Chalets y nuevas zonas residenciales",
    "Fincas, viñedos y casas de campo",
    "Naves y explotaciones agrarias"
  ],

  cobertura: [
    { zona: "El casco urbano del pueblo", disponible: true },
    { zona: "Chalets y nuevas zonas residenciales", disponible: true },
    { zona: "Fincas, viñedos y casas de campo", disponible: true },
    { zona: "Naves y explotaciones agrarias", disponible: true }
  ],

  testimonios: [
    {
      nombre: "Javier G.",
      comentario: "Un servicio excelente y muy cercano. Tenía problemas con la TDT en el chalet y me lo solucionaron rapidísimo. Se nota que conocen bien la zona.",
      puntuacion: 5
    },
    {
      nombre: "María del Carmen S.",
      comentario: "El mejor antenista del pueblo, sin duda. Honesto, profesional y a un precio razonable. Me instaló una parabólica y va de maravilla. Totalmente recomendable.",
      puntuacion: 5
    },
    {
      nombre: "Julián R.",
      comentario: "Les llamé por una urgencia después de una tormenta y vinieron el mismo día. Un trato muy amable y un trabajo impecable. Da gusto contar con profesionales así aquí.",
      puntuacion: 5
    }
  ],

   caracteristicas: [
    {
      titulo: "Somos de aquí, como tú",
      descripcion: "Conocemos el pueblo, a nuestra gente y los problemas de señal más comunes de la zona. Te damos un trato cercano y familiar, no el de una gran empresa.",
      icono: "Home"
    },
    {
      titulo: "Trabajos bien hechos, para toda la vida",
      descripcion: "No hacemos chapuzas. Usamos buenos materiales y ponemos todo nuestro empeño para que la reparación o instalación te dure muchísimos años.",
      icono: "Signal"
    },
    {
      titulo: "Precios justos y sin engaños",
      descripcion: "Te damos un presupuesto honesto y claro desde el principio. Sin sorpresas en la factura ni costes que no esperas.",
      icono: "Users"
    },
    {
      titulo: "Garantía de palabra y por escrito",
      descripcion: "Nuestro trabajo está totalmente garantizado. Tu tranquilidad y confianza son lo más importante para nosotros.",
      icono: "Shield"
    }
  ],

  faqs: [
    {
      question: "Vivo en una casa de campo algo alejada, ¿llegáis hasta allí?",
      answer: "Sí, por supuesto. Damos servicio en todo el término municipal, incluyendo fincas y casas de campo más apartadas. Conocemos la zona y sabemos cómo conseguir la mejor señal posible en entornos rurales."
    },
    {
      question: "¿Cuánto tiempo tardáis en hacer una instalación normal?",
      answer: "Una instalación estándar de una antena de TDT o parabólica en una vivienda unifamiliar la dejamos lista en una sola mañana o tarde, para que puedas disfrutar de la tele el mismo día."
    },
    {
      question: "¿El presupuesto que me dais tiene algún coste?",
      answer: "No, para nada. El presupuesto es totalmente gratuito y sin ningún tipo de compromiso. Nos acercamos, vemos lo que necesitas y te damos nuestro mejor precio."
    },
    {
      question: "Mi tejado es antiguo, ¿tenéis cuidado al subir?",
      answer: "Claro que sí. Tenemos muchísima experiencia trabajando en todo tipo de tejados y siempre tomamos las máximas precauciones para no dañar ninguna teja y garantizar un trabajo seguro y limpio."
    }
  ]
}


export const metadata: Metadata = {
  title: `Antenista en La Torre de Esteban Hambrán | Servicio Local`,
  description: `✅ Tu antenista de confianza en La Torre de Esteban Hambrán. Solucionamos problemas de TDT y parabólicas en tu casa o chalet. Pide presupuesto gratis.`,
  keywords: `antenista La Torre de Esteban Hambrán, antenas TDT La Torre, instalación antenas Toledo, reparación antenas La Torre de Esteban Hambrán, telecomunicaciones La Torre`,
  alternates: {
    canonical: 'https://advanced-telecom.es/antenista-la-torre-de-esteban-hambran'
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

export default function LaTorreDeEstebanHambranPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          {/* Hero Section específico de La Torre de Esteban Hambrán */}
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
                      Si vives en {municipioData.nombre} y buscas un antenista del pueblo, que sea profesional y de confianza, ya no tienes que buscar más. Te ofrecemos soluciones para cualquier problema con tu antena de TDT o parabólica, con la cercanía, la rapidez y la garantía que te mereces.
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

           {/* Cobertura específica de La Torre de Esteban Hambrán */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Damos servicio en todo el pueblo y sus alrededores</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Conocemos perfectamente nuestro término municipal, por lo que llegamos a cualquier punto para darte el servicio que necesitas.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Nuestra área de cobertura incluye:</h3>
                      <p className="text-brand-black-light">Si es una urgencia, vamos a tu casa en menos de 2 horas.</p>
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

          {/* Servicios especializados en {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Servicios de antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones profesionales de telecomunicaciones adaptadas a las necesidades del municipio toledano.</p>
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

          {/* Por qué elegir nuestros servicios en {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir nuestro antenista en {municipioData.nombre}?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Experiencia local, calidad profesional y compromiso con cada instalación</p>
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

         {/* Testimonios de clientes en {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Clientes satisfechos con nuestro antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de vecinos de {municipioData.nombre} que confían en nuestros servicios</p>
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

          {/* FAQs específicas de {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes sobre antenista en {municipioData.nombre}</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos las dudas más comunes sobre nuestros servicios de antenista en el municipio</p>
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

          {/* CTA Section específica para {municipioData.nombre} */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas un antenista en {municipioData.nombre}?</h2>
                  <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso. Nos desplazamos a tu domicilio en {municipioData.nombre}.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href={`https://wa.me/34668838415?text=Hola%2C%20necesito%20un%20antenista%20en%20${encodeURIComponent(municipioData.nombre)}`} className="flex items-center gap-2">
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