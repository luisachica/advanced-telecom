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
  nombre: "Santa Teresa",
  slug: "santa-teresa",
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  codigoPostal: "45006",
  descripcion: "Antenista profesional en el barrio de Santa Teresa, Toledo. Instalación y reparación de antenas TDT, parabólicas, videoporteros y cámaras de seguridad para pisos, comunidades y negocios.",
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
    "Barrio de Santa Teresa",
    "Calles y urbanizaciones del entorno",
    "Comunidades de vecinos del barrio",
    "Establecimientos comerciales y servicios"
  ],
  cobertura: [
    { zona: "Barrio de Santa Teresa", disponible: true },
    { zona: "Calles y urbanizaciones del entorno", disponible: true },
    { zona: "Comunidades de vecinos del barrio", disponible: true },
    { zona: "Establecimientos comerciales y servicios", disponible: true }
  ],
  testimonios: [
    {
      nombre: "Vecino de Santa Teresa",
      comentario: "Instalaron la antena nueva en mi piso y desde entonces tengo imagen perfecta. El técnico fue muy puntual y explicó todo con detalle. Muy satisfecho con el servicio.",
      puntuacion: 5
    },
    {
      nombre: "Propietaria de piso en Santa Teresa",
      comentario: "Llamé para instalar un videoportero nuevo ya que el antiguo estaba roto. En menos de 24 horas vinieron, instalaron un modelo moderno con cámara y funcionó desde el primer momento.",
      puntuacion: 5
    },
    {
      nombre: "Presidente de comunidad",
      comentario: "Renovamos la antena colectiva de nuestro bloque de 18 pisos. El trabajo fue muy profesional y todos los vecinos notaron la mejora de calidad de imagen. Recomendados al 100%.",
      puntuacion: 5
    }
  ],
  caracteristicas: [
    {
      titulo: "Alta Cualificación",
      descripcion: "Técnicos con años de experiencia y formación continua en telecomunicaciones.",
      icono: "Briefcase"
    },
    {
      titulo: "Calidad Garantizada",
      descripcion: "Materiales homologados y de primera calidad en todas nuestras instalaciones.",
      icono: "Shield"
    },
    {
      titulo: "Presupuesto Transparente",
      descripcion: "Siempre presupuesto cerrado y por escrito antes de comenzar el trabajo.",
      icono: "Eye"
    },
    {
      titulo: "Garantía por Escrito",
      descripcion: "Garantía profesional incluida en cada instalación y reparación.",
      icono: "CheckCircle"
    }
  ],
  faqs: [
    {
      question: "¿Atienden con urgencia en el barrio de Santa Teresa?",
      answer: "Sí. Disponemos de servicio de urgencias para el barrio de Santa Teresa y el resto de Toledo. Para casos urgentes como pérdida total de señal, nuestro objetivo es atender el mismo día o en menos de 2 horas."
    },
    {
      question: "¿Pueden cambiar solo el cable de la antena sin cambiar la antena?",
      answer: "Sí. Si la antena está en buen estado, podemos cambiar únicamente el tramo de cable coaxial defectuoso, lo que supone un ahorro importante respecto a cambiar toda la instalación."
    },
    {
      question: "¿Ofrecen contrato de mantenimiento para comunidades en Santa Teresa?",
      answer: "Sí. Ofrecemos contratos de mantenimiento preventivo anual para comunidades de propietarios, incluyendo revisión de la instalación de antena colectiva, limpieza de conectores y comprobación de niveles de señal."
    },
    {
      question: "¿Cuánto cuesta instalar un videoportero en un piso de Santa Teresa?",
      answer: "El precio depende del tipo de videoportero elegido (básico o con cámara HD), el número de plantas y si hay que renovar el cableado. Realizamos visita previa gratuita y entregamos presupuesto detallado."
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
  title: `Antenista en Santa Teresa Toledo | ?? 668 67 95 00`,
  description: `Antenista en el barrio de Santa Teresa, Toledo. TDT, parabólicas, videoporteros y cámaras para pisos y comunidades. Servicio urgente disponible.`,
  keywords: `antenista Santa Teresa Toledo, antenas TDT barrio Santa Teresa Toledo, instalación antenas Toledo, reparación antenas Santa Teresa, videoportero Toledo`,
  alternates: {
    canonical: 'https://antenastoledo.com/antenista-santa-teresa'
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

export default function SantaTeresaPage() {
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
                    <span className="text-brand-green font-medium">Santa Teresa</span>
                  </nav>
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                      Antenista profesional en Santa Teresa, Toledo
                    </h1>
                    <p className="text-xl text-brand-black-light leading-relaxed">
                      Prestamos servicio de antenista en el barrio de Santa Teresa de Toledo. Atendemos pisos, comunidades de vecinos, locales y negocios con instalaciones de TDT, parabólicas, videoporteros y sistemas de videovigilancia. Disponemos de servicio urgente con atención en el mismo día.
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
                    <Image src="/images/telecom/antenistas-en-toledo-.jpg" alt="Antenista profesional en Santa Teresa Toledo" width={400} height={200} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura completa en Santa Teresa y alrededores</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Cubrimos todo el barrio de Santa Teresa con técnicos con experiencia local.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                      <MapPin className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-black">Zonas de cobertura en Santa Teresa</h3>
                      <p className="text-brand-black-light">Antenista profesional en todo el barrio</p>
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
                      <span>Servicio urgente disponible. Atención en el mismo día en Santa Teresa.</span>
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
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Todo lo que necesita para sus telecomunicaciones en Santa Teresa.</p>
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
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Profesionales comprometidos con la calidad en cada visita.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">La confianza de nuestros clientes en Santa Teresa</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Vecinos y comunidades de Santa Teresa que confían en nosotros.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas frecuentes sobre nuestros servicios en Santa Teresa</h2>
                <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Respuestas a las preguntas más habituales de los vecinos del barrio.</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacte con su antenista en Santa Teresa</h2>
                  <p className="text-xl mb-8 text-white/90">Pida presupuesto o llame para una intervención urgente en el barrio de Santa Teresa, Toledo.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                      <a href="https://wa.me/34668679500?text=Hola%2C%20necesito%20un%20antenista%20en%20Santa%20Teresa%20Toledo" className="flex items-center gap-2">
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
