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

const municipioData = {
  nombre: "Los Cigarrales",
  slug: "los-cigarrales",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45001",
  descripcion: "Antenista profesional en Los Cigarrales, Toledo. Especialistas en instalación de antenas TDT, parabólicas y sistemas de seguridad para chalets, fincas y villas con vistas a la ciudad histórica.",
  servicios: [
    "Instalación y reparación de antenas TDT",
    "Instalación y orientación de antenas parabólicas",
    "Sistemas de videoportero y portero automático",
    "Instalación de videovigilancia (CCTV)",
    "Solución a interferencias 5G",
    "Servicio de reparaciones urgentes"
  ],
  serviciosDestacados: [
    "Especialistas en chalets y villas",
    "Materiales de primera calidad",
    "Garantía profesional"
  ],
  zonasCubiertas: [
    "Los Cigarrales (zona de chalets y fincas)",
    "Villas y residencias con vistas a Toledo",
    "Hoteles y establecimientos turísticos de la zona",
    "Propiedades privadas en las laderas del Tajo"
  ],
  cobertura: [
    { zona: "Los Cigarrales (zona de chalets y fincas)", disponible: true },
    { zona: "Villas y residencias con vistas a Toledo", disponible: true },
    { zona: "Hoteles y establecimientos turísticos de la zona", disponible: true },
    { zona: "Propiedades privadas en las laderas del Tajo", disponible: true }
  ],
  testimonios: [
    {
      nombre: "Propietario de villa en Los Cigarrales",
      comentario: "Instalaron una parabólica de gran diámetro orientada a Astra para recibir canales alemanes. El resultado fue perfecto desde el primer día y el trabajo muy cuidado en nuestra propiedad.",
      puntuacion: 5
    },
    {
      nombre: "Gerente de hotel en Los Cigarrales",
      comentario: "Renovaron todo el sistema de antenas colectivas del hotel y ampliaron las cámaras de seguridad. Trabajo muy profesional, discreto y sin interferir en la actividad del establecimiento.",
      puntuacion: 5
    },
    {
      nombre: "Propietaria de chalet",
      comentario: "Instalaron videoportero con cámara HD y sistema de cámaras perimetrales en nuestro chalet. Muy satisfecha con la calidad y con la explicación detallada del funcionamiento.",
      puntuacion: 5
    }
  ],
  caracteristicas: [
    {
      titulo: "Experiencia en Propiedades Exclusivas",
      descripcion: "Amplia experiencia en instalaciones para chalets, villas y propiedades de alto standing.",
      icono: "Briefcase"
    },
    {
      titulo: "Materiales Premium",
      descripcion: "Equipos y componentes de gama alta, homologados y estéticamente integrados en la propiedad.",
      icono: "Shield"
    },
    {
      titulo: "Presupuesto Detallado",
      descripcion: "Visita previa sin coste y presupuesto cerrado por escrito antes de comenzar.",
      icono: "Eye"
    },
    {
      titulo: "Garantía Completa",
      descripcion: "Garantía profesional por escrito en todas las instalaciones realizadas.",
      icono: "CheckCircle"
    }
  ],
  faqs: [
    {
      question: "¿Cómo es la cobertura TDT en Los Cigarrales?",
      answer: "Los Cigarrales, al estar en las colinas frente a Toledo, suele tener buena línea de visión hacia los repetidores. No obstante, algunas propiedades en posiciones más bajas o rodeadas de vegetación pueden necesitar amplificadores o antenas de mayor ganancia."
    },
    {
      question: "¿Instalan sistemas de sonido e imagen para hoteles en Los Cigarrales?",
      answer: "Nos especializamos en telecomunicaciones (TDT, parabólica, videoportero y videovigilancia). Para distribución de señal de televisión en habitaciones de hotel realizamos instalaciones de antena colectiva con distribución a múltiples tomas."
    },
    {
      question: "¿Pueden integrar las cámaras con el sistema de alarma existente?",
      answer: "Nuestros sistemas de videovigilancia son compatibles con la mayoría de centrales de alarma del mercado. Consultamos la instalación existente antes de proponer la solución más adecuada."
    },
    {
      question: "¿Realizan mantenimiento periódico de instalaciones en Los Cigarrales?",
      answer: "Sí. Ofrecemos contratos de mantenimiento preventivo anuales para sistemas de antenas y videovigilancia, especialmente indicados para propiedades de uso vacacional o establecimientos turísticos."
    }
  ]
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Electrician",
      "@id": "https://antenastoledo.com/#localbusiness",
      "name": "Antenistas Toledo",
      "image": "https://antenastoledo.com/images/telecom/antenistas-en-toledo-sur.jpg",
      "telephone": "+34668679500",
      "url": `https://antenastoledo.com/antenista-${municipioData.slug}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toledo",
        "addressRegion": "Toledo",
        "postalCode": municipioData.codigoPostal,
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.8628",
        "longitude": "-4.0233"
      },
      "areaServed": municipioData.zonasCubiertas.map((zona: string) => ({
        "@type": "AdministrativeArea",
        "name": zona
      })),
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": String(municipioData.testimonios.length)
      },
      "review": municipioData.testimonios.slice(0, 1).map((t: any) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": t.nombre },
        "reviewRating": { "@type": "Rating", "ratingValue": String(t.puntuacion) },
        "reviewBody": t.comentario
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://antenastoledo.com/antenista-${municipioData.slug}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://antenastoledo.com" },
        { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://antenastoledo.com/servicios" },
        { "@type": "ListItem", "position": 3, "name": municipioData.nombre, "item": `https://antenastoledo.com/antenista-${municipioData.slug}` }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `https://antenastoledo.com/antenista-${municipioData.slug}/#faq`,
      "mainEntity": municipioData.faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    }
  ]
};

export const metadata: Metadata = {
  title: `Antenista en Los Cigarrales Toledo | ☎️ 668 67 95 00`,
  description: `Antenista en Los Cigarrales, Toledo. TDT, parabólicas, videoporteros y cámaras para chalets, villas y hoteles. Presupuesto sin compromiso.`,
  keywords: `antenista Los Cigarrales Toledo, antenas parabólicas chalets Toledo, instalación TDT Los Cigarrales, cámaras seguridad chalets Toledo, antenista villas Toledo`,
  alternates: {
    canonical: 'https://antenastoledo.com/antenista-los-cigarrales'
  },
  robots: {
    index: true,
    follow: true,
  },
};

const iconMap = {
  Building, Eye, Users, Shield, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle, Star, MessageCircle, Wrench, Zap,
  Satellite: MapPin, Tv: MapPin, Camera: MapPin, DoorOpen: MapPin, Wifi: MapPin, Briefcase: MapPin
};

const IconComponent = (iconName: string) => {
  const Icon = iconMap[iconName as keyof typeof iconMap];
  return Icon ? <Icon className="h-6 w-6" /> : <MapPin className="h-6 w-6" />;
};

export default function LosCigarralesPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />

        <main className="flex-1">
          <section className="w-full bg-gradient-to-br from-brand-green/5 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <nav className="flex items-center space-x-2 text-sm text-brand-black-light">
                    <Link href="/" className="hover:text-brand-green transition-colors">Inicio</Link>
                    <span>/</span>
                    <Link href="/servicios" className="hover:text-brand-green transition-colors">Servicios</Link>
                    <span>/</span>
                    <span className="text-brand-green font-medium">Los Cigarrales</span>
                  </nav>
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Antenista profesional en Los Cigarrales, Toledo
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Ofrecemos servicio de antenista especializado en Los Cigarrales, la icónica zona de chalets y fincas con vistas a la Toledo histórica, en las colinas al otro lado del río Tajo. Atendemos instalaciones para propiedades privadas, hoteles y establecimientos turísticos, con especial experiencia en parabólicas de gran formato, sistemas de videovigilancia avanzados y videoporteros de altas prestaciones.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="tel:+34668679500" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                      <Phone className="h-5 w-5 mr-2" />
                      Contactar para una intervención
                    </Link>
                    <Link href="/contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-full border-2 border-brand-green hover:bg-brand-green hover:text-white transition-colors">
                      Solicitar presupuesto
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="mt-20 flex justify-center relative overflow-hidden rounded-xl">
                    <Image src="/images/telecom/antenistas-en-toledo-sur.jpg" alt="Antenista profesional en Los Cigarrales Toledo" width={400} height={200} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en Los Cigarrales y sus fincas</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Cubrimos toda la zona de Los Cigarrales, incluyendo las propiedades más alejadas del núcleo urbano.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de cobertura en Los Cigarrales</h3>
                      <p className="text-brand-black-light">Antenista profesional en toda la zona</p>
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
                      <span>Servicio de urgencia disponible con respuesta en el mismo día.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestro catálogo de servicios especializados</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones de alto nivel para propiedades exclusivas en Los Cigarrales.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICIOS.map((servicio, index) => (
                  <ServiceCard key={index} title={servicio.title} description={servicio.description} icon={servicio.iconName} image={servicio.image} slug={servicio.slug} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué confiar en nuestro servicio técnico?</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Experiencia y discreción en cada instalación en propiedades de Los Cigarrales.</p>
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

          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de nuestros clientes en Los Cigarrales</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Clientes satisfechos en chalets, villas y hoteles de la zona.</p>
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

          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre nuestros servicios en Los Cigarrales</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Información útil para propietarios e inquilinos de Los Cigarrales.</p>
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

          <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista en Los Cigarrales</h2>
                  <p className="text-xl mb-8 text-white/90">Solicite su presupuesto personalizado para su propiedad en Los Cigarrales, Toledo.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668679500?text=Hola%2C%20necesito%20un%20antenista%20en%20Los%20Cigarrales%20Toledo" className="flex items-center gap-2">
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
