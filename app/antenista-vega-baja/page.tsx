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
  nombre: "Vega Baja",
  slug: "vega-baja",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45004",
  descripcion: "Antenista profesional en Vega Baja, Toledo. Instalación y reparación de antenas TDT, parabólicas, videoporteros y sistemas de seguridad para comunidades, pisos y negocios junto al Tajo.",
  servicios: [
    "Instalación y reparación de antenas TDT",
    "Instalación y orientación de antenas parabólicas",
    "Sistemas de videoportero y portero automático",
    "Instalación de videovigilancia (CCTV)",
    "Solución a interferencias 5G",
    "Servicio de reparaciones urgentes"
  ],
  serviciosDestacados: [
    "Alta cualificación técnica",
    "Materiales homologados",
    "Garantía profesional"
  ],
  zonasCubiertas: [
    "Barrio Vega Baja",
    "Zona del Paseo de la Rosa y aledaños",
    "Comunidades residenciales junto al río Tajo",
    "Instalaciones deportivas y equipamientos próximos"
  ],
  cobertura: [
    { zona: "Barrio Vega Baja", disponible: true },
    { zona: "Zona del Paseo de la Rosa y aledaños", disponible: true },
    { zona: "Comunidades residenciales junto al río Tajo", disponible: true },
    { zona: "Instalaciones deportivas y equipamientos próximos", disponible: true }
  ],
  testimonios: [
    {
      nombre: "Vecino de Vega Baja",
      comentario: "Repararon nuestra antena colectiva que llevaba meses dando problemas. El diagnóstico fue rápido, la solución definitiva y el precio muy razonable. No dudaremos en llamarles de nuevo.",
      puntuacion: 5
    },
    {
      nombre: "Presidenta de comunidad",
      comentario: "Instalaron el sistema de videoportero para toda la comunidad. El trabajo fue muy profesional, coordinado con la junta de propietarios y dentro del plazo acordado. Muy satisfechos.",
      puntuacion: 5
    },
    {
      nombre: "Inquilino en Vega Baja",
      comentario: "Vine desde fuera y la TDT no captaba bien en mi nuevo piso. Llamé y el técnico llegó en menos de dos horas. Orientó la antena correctamente y dejó señal perfecta en todas las habitaciones.",
      puntuacion: 5
    }
  ],
  caracteristicas: [
    {
      titulo: "Alta Cualificación Técnica",
      descripcion: "Técnicos con amplia formación y experiencia en instalaciones de telecomunicaciones.",
      icono: "Briefcase"
    },
    {
      titulo: "Materiales de Primera Calidad",
      descripcion: "Trabajamos solo con componentes homologados y de marcas de reconocida calidad.",
      icono: "Shield"
    },
    {
      titulo: "Presupuesto Detallado",
      descripcion: "Entregamos presupuesto cerrado y por escrito antes de cualquier intervención.",
      icono: "Eye"
    },
    {
      titulo: "Garantía por Escrito",
      descripcion: "Garantía completa en todas las instalaciones y reparaciones que realizamos.",
      icono: "CheckCircle"
    }
  ],
  faqs: [
    {
      question: "¿Tienen problemas de señal TDT los edificios junto al Tajo en Vega Baja?",
      answer: "Las zonas bajas junto al río pueden tener algo menos de señal que las partes elevadas de Toledo. En la mayoría de casos se soluciona con amplificadores de señal calibrados correctamente o reorientando la antena."
    },
    {
      question: "¿Instalan porteros automáticos en edificios existentes?",
      answer: "Sí. Instalamos porteros automáticos y videoporteros tanto en obra nueva como en edificios existentes. Analizamos el cableado actual y proponemos la solución más eficiente y económica."
    },
    {
      question: "¿Pueden ampliar el número de canales de la TDT que recibo?",
      answer: "La TDT tiene un número fijo de canales según el multiplex disponible en su zona. Si no recibe todos, lo más probable es que sea un problema de señal que podemos solucionar con la instalación adecuada."
    },
    {
      question: "¿Cuánto tarda una instalación completa de antena en un piso de Vega Baja?",
      answer: "Una instalación individual en un piso, incluyendo antena exterior y distribución interior a 2-3 tomas, suele completarse en 3-4 horas. Para comunidades, el tiempo varía según el número de viviendas."
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
      "image": "https://antenastoledo.com/images/telecom/antenistas-en-toledo-.jpg",
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
  title: `Antenista en Vega Baja Toledo | ?? 668 67 95 00`,
  description: `Antenista en Vega Baja, Toledo. TDT, parabólicas, videoporteros y cámaras para comunidades y pisos junto al Tajo. Presupuesto gratuito.`,
  keywords: `antenista Vega Baja Toledo, antenas TDT Vega Baja, instalación antenas Toledo, reparación antenas Vega Baja Toledo, videoportero comunidades Toledo`,
  alternates: {
    canonical: 'https://antenastoledo.com/antenista-vega-baja'
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

export default function VegaBajaPage() {
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
                    <span className="text-brand-green font-medium">Vega Baja</span>
                  </nav>
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Antenista profesional en Vega Baja, Toledo
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Ofrecemos servicio de antenista en el barrio de Vega Baja, en la zona baja de Toledo junto al río Tajo. Atendemos comunidades de vecinos, pisos particulares y negocios con instalaciones de TDT, antenas parabólicas, videoporteros y sistemas de videovigilancia. Servicio urgente disponible con respuesta en menos de 2 horas.
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
                    <Image src="/images/telecom/antenistas-en-toledo-.jpg" alt="Antenista profesional en Vega Baja Toledo" width={400} height={200} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en Vega Baja y zona del Tajo</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Cubrimos todo el barrio de Vega Baja y sus alrededores con atención rápida y profesional.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de cobertura en Vega Baja</h3>
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
                      <span>Servicio urgente con asistencia garantizada en menos de 2 horas en Vega Baja.</span>
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
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones completas de telecomunicaciones para Vega Baja y Toledo.</p>
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
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Calidad y profesionalidad en cada intervención en Toledo.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de nuestros clientes en Vega Baja</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Vecinos y comunidades de Vega Baja satisfechos con nuestro trabajo.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre nuestros servicios en Vega Baja</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Respondemos sus dudas sobre instalaciones de antenas en Vega Baja.</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista en Vega Baja</h2>
                  <p className="text-xl mb-8 text-white/90">Pida presupuesto gratuito o llame para una intervención urgente en Vega Baja, Toledo.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668679500?text=Hola%2C%20necesito%20un%20antenista%20en%20Vega%20Baja%20Toledo" className="flex items-center gap-2">
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
