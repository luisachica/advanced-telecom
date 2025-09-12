const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Función para obtener todas las páginas con imports incorrectos
function getFilesWithIncorrectImports() {
  try {
    const result = execSync('npx rg "import Hero from \'@/components/Hero\'" app --type tsx', { encoding: 'utf8' });
    const lines = result.trim().split('\n');
    const files = [];
    
    for (const line of lines) {
      if (line.includes('.tsx')) {
        const filePath = line.split(':')[0];
        files.push(filePath);
      }
    }
    
    return [...new Set(files)];
  } catch (error) {
    console.log('No se encontraron archivos con imports incorrectos');
    return [];
  }
}

// Función para obtener el nombre del municipio desde el path
function getMunicipioFromPath(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const municipioSlug = fileName.replace('antenista-', '');
  
  // Convertir slug a nombre legible
  const municipioName = municipioSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  return {
    nombre: municipioName,
    slug: municipioSlug
  };
}

// Función para determinar la provincia basada en el slug
function getProvinciaFromSlug(slug) {
  // Municipios de Madrid
  const madridMunicipios = [
    'getafe', 'moraleja-de-enmedio', 'casarrubuelos', 'el-alamo', 
    'villa-del-prado', 'serranillos-del-valle', 'torrejon-de-la-calzada',
    'grinon', 'villamanta', 'aldea-del-fresno', 'batres', 'torrejon-de-velasco'
  ];
  
  if (madridMunicipios.includes(slug)) {
    return 'Madrid';
  }
  
  return 'Toledo';
}

// Template base para las páginas
function generatePageContent(municipio) {
  const provincia = getProvinciaFromSlug(municipio.slug);
  const comunidad = provincia === 'Madrid' ? 'Comunidad de Madrid' : 'Castilla-La Mancha';
  
  return `import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Shield, Users, ArrowRight, CheckCircle, Star, MessageCircle, Wrench, Zap, Building, Eye } from "lucide-react";

import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import WhatsappFloating from "@/components/WhatsappFloating";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import StructuredData from "@/components/StructuredData";

// Datos específicos del municipio
const municipioData = {
  nombre: "${municipio.nombre}",
  slug: "${municipio.slug}",
  provincia: "${provincia}",
  comunidad: "${comunidad}",
  codigoPostal: "${provincia === 'Madrid' ? '28' : '45'}XXX",
  poblacion: "X.XXX",
  superficie: "XX,X",
  descripcion: "Servicios especializados de telecomunicaciones en ${municipio.nombre}. Expertos en instalaciones para este municipio de ${provincia}.",
  servicios: [
    "Antenas parabólicas HD/4K",
    "Instalación de antenas TDT",
    "Porteros automáticos con vídeo",
    "Sistemas de videovigilancia",
    "Reparaciones express",
    "Soluciones anti-interferencias 5G"
  ],
  serviciosDestacados: [
    "Servicio especializado",
    "Tecnología avanzada",
    "Atención personalizada"
  ],
  zonasCubiertas: [
    "${municipio.nombre} centro",
    "Zona residencial",
    "Área comercial",
    "Nuevas urbanizaciones",
    "Zona Norte",
    "Zona Sur",
    "Área metropolitana"
  ],
  cobertura: [
    { zona: "${municipio.nombre} centro", disponible: true },
    { zona: "Zona residencial", disponible: true },
    { zona: "Área comercial", disponible: true },
    { zona: "Nuevas urbanizaciones", disponible: true }
  ],
  testimonios: [
    {
      nombre: "María S.",
      valoracion: 5,
      comentario: "Excelente servicio de instalación de antena TDT. Muy profesionales y puntuales.",
      servicio: "Instalación TDT"
    },
    {
      nombre: "Carlos M.",
      valoracion: 5,
      comentario: "Instalaron la antena satelital perfectamente. Servicio rápido y eficiente.",
      servicio: "Antena Satelital"
    },
    {
      nombre: "Ana R.",
      valoracion: 5,
      comentario: "Muy satisfecha con el trabajo realizado. Puntuales y con buen precio.",
      servicio: "Reparación"
    }
  ],
  faq: [
    {
      question: "¿Qué servicios de antenista ofrecen en ${municipio.nombre}?",
      answer: "Ofrecemos instalación y reparación de antenas TDT, antenas parabólicas, porteros automáticos, sistemas de videovigilancia y soluciones anti-interferencias 5G."
    },
    {
      question: "¿Realizan instalaciones en todas las zonas de ${municipio.nombre}?",
      answer: "Sí, ofrecemos cobertura completa en todo ${municipio.nombre}. Trabajamos en zonas residenciales, comerciales y nuevas urbanizaciones."
    },
    {
      question: "¿Qué tipo de antenas parabólicas instalan?",
      answer: "Instalamos antenas parabólicas de última generación compatibles con HD, 4K y servicios de streaming. Todas nuestras instalaciones incluyen configuración completa."
    },
    {
      question: "¿Tienen servicio de urgencias?",
      answer: "Sí, ofrecemos servicio de reparaciones urgentes con respuesta rápida para resolver cualquier problema técnico."
    },
    {
      question: "¿Solucionan problemas de interferencias 5G?",
      answer: "Somos especialistas en solucionar interferencias 5G. Utilizamos filtros específicos y técnicas avanzadas para garantizar una recepción perfecta."
    }
  ]
};

export const metadata: Metadata = {
  title: \`Antenista en \${municipioData.nombre} - Instalación y Reparación | Advanced Telecom\`,
  description: \`Servicios profesionales de antenista en \${municipioData.nombre}. Instalación de antenas TDT, parabólicas, porteros automáticos y sistemas de seguridad. Técnicos especializados.\`,
  keywords: \`antenista \${municipioData.nombre}, antenas TDT \${municipioData.nombre}, parabólicas \${municipioData.nombre}, porteros automáticos \${municipioData.nombre}, \${municipioData.provincia}\`,
  openGraph: {
    title: \`Antenista en \${municipioData.nombre} - Advanced Telecom\`,
    description: \`Servicios profesionales de telecomunicaciones en \${municipioData.nombre}. Instalación y reparación de antenas, porteros automáticos y sistemas de seguridad.\`,
    url: \`https://advanced-telecom.es/antenista-\${municipioData.slug}\`,
    siteName: 'Advanced Telecom',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: \`https://advanced-telecom.es/antenista-\${municipioData.slug}\`,
  },
  robots: {
    index: true,
    follow: true,
  }
};

const serviciosData = [
  {
    title: "Antenas TDT",
    description: "Instalación y orientación de antenas TDT para recepción óptima de televisión digital terrestre en ${municipio.nombre}.",
    icon: "Zap",
    features: ["Instalación profesional", "Orientación óptima", "Amplificadores si necesario", "Garantía 3 años"]
  },
  {
    title: "Antenas Parabólicas",
    description: "Instalación de antenas parabólicas para televisión satelital con tecnología HD y 4K.",
    icon: "Zap",
    features: ["Múltiples satélites", "HD y 4K", "Instalación discreta", "Configuración completa"]
  },
  {
    title: "Porteros Automáticos",
    description: "Instalación y reparación de porteros automáticos y videoporteros de última generación.",
    icon: "Shield",
    features: ["Audio y vídeo HD", "Apertura remota", "Múltiples usuarios", "App móvil"]
  },
  {
    title: "Cámaras de Seguridad",
    description: "Sistemas de videovigilancia profesionales con tecnología IP y almacenamiento en la nube.",
    icon: "Eye",
    features: ["Grabación 4K", "Visión nocturna", "Acceso remoto", "Almacenamiento seguro"]
  },
  {
    title: "Reparaciones Express",
    description: "Servicio de reparación urgente con respuesta rápida para solucionar cualquier problema.",
    icon: "Wrench",
    features: ["Disponibilidad diaria", "Diagnóstico gratuito", "Reparación inmediata", "Garantía de servicio"]
  },
  {
    title: "Solución Interferencias 5G",
    description: "Especialistas en solucionar interferencias 5G con tecnología avanzada de filtrado.",
    icon: "Zap",
    features: ["Filtros específicos", "Reorientación antenas", "Análisis de señal", "Solución definitiva"]
  }
];

export default function Antenista${municipio.nombre.replace(/\s+/g, '')}() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": \`Advanced Telecom - Antenista en \${municipioData.nombre}\`,
    "description": municipioData.descripcion,
    "url": \`https://advanced-telecom.es/antenista-\${municipioData.slug}\`,
    "telephone": "+34 123 456 789",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": municipioData.nombre,
      "addressRegion": municipioData.provincia,
      "addressCountry": "ES",
      "postalCode": municipioData.codigoPostal
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.0000",
      "longitude": "-3.7000"
    },
    "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-14:00",
    "serviceArea": {
      "@type": "City",
      "name": municipioData.nombre
    },
    "priceRange": "€€",
    "image": "https://advanced-telecom.es/images/telecom/antenistas-en-madrid-sur.jpg"
  };

  return (
    <>
      <StructuredData data={jsonLd} />
      <div className="min-h-screen bg-white">
        <PhoneBanner />
        <MainNavigation />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    <MapPin className="h-4 w-4" />
                    Servicio en {municipioData.nombre}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Antenista en <span className="text-green-600">{municipioData.nombre}</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {municipioData.descripcion}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600">{municipioData.poblacion}</div>
                    <div className="text-sm text-gray-600">Habitantes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Cobertura</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar Ahora
                  </Button>
                  <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <div className=" mt-20 flex justify-center relative overflow-hidden rounded-xl ">
                    <Image
                      src="/images/telecom/antenistas-en-madrid-sur.jpg"
                      alt={\`Servicios de telecomunicaciones en \${municipioData.nombre}\`}
                      width={400}
                      height={300}
                      className="rounded-xl shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicios de Telecomunicaciones en {municipioData.nombre}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos servicios completos de instalación y reparación de sistemas de telecomunicaciones
                para hogares y empresas en {municipioData.nombre}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviciosData.map((servicio, index) => (
                <ServiceCard key={index} {...servicio} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Opiniones de Clientes en {municipioData.nombre}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre lo que nuestros clientes dicen sobre nuestros servicios de telecomunicaciones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {municipioData.testimonios.map((testimonio, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonio.valoracion)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonio.comentario}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonio.nombre}</p>
                      <p className="text-sm text-gray-500">{testimonio.servicio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestros servicios en {municipioData.nombre}.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {municipioData.faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contacta con nosotros en {municipioData.nombre}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ¿Necesitas nuestros servicios? Contáctanos y te ofreceremos un presupuesto personalizado.
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
}`;
}

// Función principal
function fixAllPages() {
  console.log('🔍 Buscando páginas con imports incorrectos...');
  const files = getFilesWithIncorrectImports();
  
  if (files.length === 0) {
    console.log('✅ No se encontraron páginas con imports incorrectos');
    return;
  }
  
  console.log(`📝 Encontradas ${files.length} páginas para corregir`);
  
  let corrected = 0;
  let errors = 0;
  
  for (const filePath of files) {
    try {
      const municipio = getMunicipioFromPath(filePath);
      const newContent = generatePageContent(municipio);
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Corregido: ${filePath}`);
      corrected++;
    } catch (error) {
      console.error(`❌ Error corrigiendo ${filePath}:`, error.message);
      errors++;
    }
  }
  
  console.log(`\n📊 Resumen:`);
  console.log(`✅ Páginas corregidas: ${corrected}`);
  console.log(`❌ Errores: ${errors}`);
  console.log(`📁 Total procesadas: ${files.length}`);
}

// Ejecutar el script
fixAllPages();