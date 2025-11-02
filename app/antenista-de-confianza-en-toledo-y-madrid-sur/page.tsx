import React from "react";
import type { Metadata } from "next";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import WhatsappFloating from "@/components/WhatsappFloating";
import { MunicipiosServicio } from "@/components/MunicipiosServicio";
import { ContactForm } from "@/components/contact/contact-form";
import StructuredData from "@/components/StructuredData";
import { MapPin, Phone, Clock, Shield, Star, CheckCircle } from "lucide-react";

const serviciosDestacados = [
  {
    titulo: "Instalación de Antenas TDT",
    descripcion: "Instalación profesional de antenas TDT con garantía de calidad y óptima recepción de señal.",
    icono: "antenna"
  },
  {
    titulo: "Antenas Parabólicas",
    descripcion: "Instalación y orientación de antenas parabólicas para televisión satelital y servicios digitales.",
    icono: "satellite"
  },
  {
    titulo: "Porteros Automáticos",
    descripcion: "Instalación y mantenimiento de porteros automáticos y videoporteros de última generación.",
    icono: "intercom"
  },
  {
    titulo: "Videovigilancia CCTV",
    descripcion: "Sistemas de videovigilancia profesional para hogares y empresas con tecnología avanzada.",
    icono: "camera"
  }
];

const ventajasCompetitivas = [
  {
    titulo: "Más de 25 años de experiencia",
    descripcion: "Experiencia consolidada en el sector de las telecomunicaciones",
    icono: Shield
  },
  {
    titulo: "Cobertura completa",
    descripcion: "Servicio en Toledo, Madrid Sur y municipios limítrofes",
    icono: MapPin
  },
  {
    titulo: "Atención 24/7",
    descripcion: "Disponibilidad para emergencias y consultas técnicas",
    icono: Clock
  },
  {
    titulo: "Garantía profesional",
    descripcion: "Garantía completa en todas nuestras instalaciones",
    icono: CheckCircle
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Advanced Telecom - Antenista de Confianza Toledo y Madrid Sur",
  "description": "Antenista profesional de confianza en Toledo y Madrid Sur. Especialistas en antenas TDT, parabólicas, porteros automáticos y videovigilancia.",
  "url": "https://www.advancedtelecom.es/antenista-de-confianza-en-toledo-y-madrid-sur/",
  "telephone": "+34 668 83 84 15",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Toledo y Madrid Sur",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.8628",
    "longitude": "-4.0273"
  },
  "openingHours": "Mo-Su 08:00-22:00",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "39.8628",
      "longitude": "-4.0273"
    },
    "geoRadius": "50000"
  },
  "areaServed": [
    "Toledo",
    "Madrid Sur",
    "Illescas",
    "Seseña",
    "Getafe",
    "Valdemoro",
    "Navalcarnero",
    "Griñón",
    "Bargas",
    "Yuncos"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Antenista",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Instalación de Antenas TDT",
          "description": "Instalación profesional de antenas TDT"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Antenas Parabólicas",
          "description": "Instalación de antenas parabólicas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Porteros Automáticos",
          "description": "Instalación de porteros automáticos y videoporteros"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
};

export const metadata: Metadata = {
  title: "Antenista homologado en Toledo y Madrid Sur ☎️ 668 83 84 15",
  description:
    "Antenista de confianza en Toledo y Madrid Sur. Servicio técnico profesional en antenas TDT, parabólicas, porteros automáticos y videovigilancia.",
  keywords: [
    "antenista Toledo",
    "antenista Madrid Sur",
    "antenista de confianza",
    "instalación antenas Toledo",
    "técnico antenas Madrid Sur",
    "servicio antenista profesional",
    "antenas TDT Toledo Madrid",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/antenista-de-confianza-en-toledo-y-madrid-sur",
  },
};

export default function AntenistadeConfianzaToledoMadridSurPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-white">
        <PhoneBanner />
        <MainNavigation services={[]} />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-green to-brand-green-dark text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Antenista de Confianza en <span className="text-white">Toledo y Madrid Sur</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Servicio técnico profesional con más de 25 años de experiencia. Instalación y mantenimiento de antenas, porteros automáticos y videovigilancia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar presupuesto
                  </a>
                  <a 
                    href="tel:+34912345678" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-green transition-colors"
                  >
                    Llamar ahora
                  </a>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <img 
                  src="/images/telecom/antenistas-en-toledo-sur.jpg" 
                  alt="Antenista profesional trabajando en Toledo y Madrid Sur"
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas Competitivas */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                ¿Por qué elegir nuestro servicio de antenista?
              </h2>
              <p className="text-lg text-brand-black-light">
                Somos el antenista de confianza en Toledo y Madrid Sur con el respaldo de años de experiencia y miles de clientes satisfechos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ventajasCompetitivas.map((ventaja, index) => {
                const IconComponent = ventaja.icono;
                return (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-black mb-3">{ventaja.titulo}</h3>
                    <p className="text-brand-black-light">{ventaja.descripcion}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Servicios Destacados */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Nuestros servicios técnicos especializados
              </h2>
              <p className="text-lg text-brand-black-light">
                Ofrecemos una amplia gama de servicios técnicos en telecomunicaciones con la máxima calidad y profesionalidad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {serviciosDestacados.map((servicio, index) => {
                const imageMap = {
                  "antenna": "/images/telecom/antena-tdt-instalacion-01.jpg",
                  "satellite": "/images/telecom/antena-parabolica.jpg", 
                  "intercom": "/images/telecom/portero-automatico-instalacion-01.jpg",
                  "camera": "/images/telecom/camaras-seguridad.jpg"
                };
                
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="relative h-96">
                      <img 
                        src={imageMap[servicio.icono as keyof typeof imageMap]} 
                        alt={`${servicio.titulo} - Servicio profesional en Toledo y Madrid Sur`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                          <Star className="h-6 w-6 text-brand-green" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-brand-black mb-3">{servicio.titulo}</h3>
                      <p className="text-brand-black-light">{servicio.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Galería de Trabajos */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Nuestros trabajos en Toledo y Madrid Sur
              </h2>
              <p className="text-lg text-brand-black-light">
                Ejemplos reales de nuestras instalaciones y trabajos realizados en la zona.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/images/telecom/trabajo-antena-2024-05-21.jpg" 
                  alt="Instalación de antena TDT en Toledo"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Instalación TDT</h4>
                    <p className="text-sm">Toledo Centro</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/images/telecom/trabajo-instalacion-2024-04-19.jpg" 
                  alt="Instalación de antena parabólica en Madrid Sur"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Antena Parabólica</h4>
                    <p className="text-sm">Getafe</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/images/telecom/trabajo-portero-2023-12-02.jpg" 
                  alt="Instalación de videoportero en Illescas"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Videoportero</h4>
                    <p className="text-sm">Illescas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Municipios Servicio */}
        <MunicipiosServicio 
          titulo="Antenista de confianza en Toledo y Madrid Sur - conoce nuestro alcance"
          descripcion="Servicio técnico profesional disponible en todos estos municipios de Toledo y Madrid Sur. Encuentra tu localidad y solicita nuestro servicio especializado."
        />

        {/* Contacto */}
        <section id="contacto" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Contacta con tu antenista de confianza
              </h2>
              <p className="text-lg text-brand-black-light">
                ¿Necesitas un antenista profesional en Toledo o Madrid Sur? Contáctanos para un presupuesto gratuito y sin compromiso.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
        <WhatsappFloating />
      </div>
    </>
  );
}