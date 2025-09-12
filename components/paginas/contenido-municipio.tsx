"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Shield, Users, ArrowRight, CheckCircle, Star, MessageCircle, Wrench, Zap } from "lucide-react";

import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import WhatsappFloating from "@/components/WhatsappFloating";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceIcon } from "@/components/ServiceIcon";

// Mapeador de iconos
const iconMap = { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  MessageCircle, 
  Wrench, 
  Zap 
};

interface MunicipioData {
  nombre: string;
  provincia: string;
  poblacion: string;
  superficie: string;
  codigoPostal: string;
  descripcion: string;
  servicios?: string[];
  serviciosDestacados?: string[];
  zonasCubiertas: string[];
  cobertura: {
    zona: string;
    disponible: boolean;
  }[];
  testimonios: {
    nombre: string;
    comentario: string;
    puntuacion: number;
  }[];
  caracteristicas: {
    titulo: string;
    descripcion: string;
    icono: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

interface ContenidoMunicipioProps {
  data: MunicipioData;
}

export function ContenidoMunicipio({ data }: ContenidoMunicipioProps) {
  const IconComponent = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="h-6 w-6" /> : <MapPin className="h-6 w-6" />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PhoneBanner />
      <MainNavigation services={[]} />

      <main className="flex-1">
        {/* Hero Section */}
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
                  <span className="text-brand-green font-medium">Telecomunicaciones</span>
                </nav>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                    Servicios de <span className="text-brand-green">Telecomunicaciones</span> en {data.nombre}
                  </h1>
                  <p className="text-xl text-brand-black-light leading-relaxed">
                    Expertos en soluciones integrales de telecomunicaciones con más de 25 años de experiencia. Ofrecemos servicios profesionales de instalación, reparación y mantenimiento en {data.nombre} con garantía total y atención 24/7.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+34918273609" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
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
                    alt={`Servicios de telecomunicaciones en ${data.nombre}`}
                    width={400}
                    height={200}
                    /*className="w-full h-auto object-cover"*/
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cobertura */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Cobertura en {data.nombre}</h2>
              <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Servicio técnico especializado disponible en todas las zonas</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-brand-green/5 to-white rounded-xl p-8 shadow-lg border border-brand-green/20">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-green/10 rounded-lg mr-4">
                    <MapPin className="h-8 w-8 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-black">Zonas de Cobertura</h3>
                    <p className="text-brand-black-light">Servicio técnico especializado</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {data.zonasCubiertas?.map((zona, index) => (
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

        {/* Servicios destacados */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Nuestros servicios especializados</h2>
              <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Soluciones completas de telecomunicaciones con la mejor tecnología y atención personalizada</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(data.servicios || data.serviciosDestacados)?.map((servicio, index) => {
                const servicioSlug = servicio.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n');
                
                // Mapeo de servicios a iconos
                const getIconName = (servicio: string) => {
                  const servicioLower = servicio.toLowerCase();
                  if (servicioLower.includes('parabólica') || servicioLower.includes('parabolica')) return 'Satellite';
                  if (servicioLower.includes('tdt') || servicioLower.includes('antena')) return 'Tv';
                  if (servicioLower.includes('cámara') || servicioLower.includes('camara') || servicioLower.includes('seguridad')) return 'Camera';
                  if (servicioLower.includes('portero') || servicioLower.includes('automático') || servicioLower.includes('automatico')) return 'DoorOpen';
                  if (servicioLower.includes('interferencia') || servicioLower.includes('5g') || servicioLower.includes('wifi')) return 'Wifi';
                  if (servicioLower.includes('reparación') || servicioLower.includes('reparacion') || servicioLower.includes('urgente')) return 'Wrench';
                  return 'Briefcase';
                };

                // Mapeo de servicios a imágenes específicas
                const getServiceImage = (servicio: string) => {
                  const servicioLower = servicio.toLowerCase();
                  if (servicioLower.includes('parabólica') || servicioLower.includes('parabolica')) return '/images/telecom/antena-parabolica.jpg';
                  if (servicioLower.includes('tdt') || servicioLower.includes('antena')) return '/images/telecom/antena-tdt-instalacion-01.jpg';
                  if (servicioLower.includes('cámara') || servicioLower.includes('camara') || servicioLower.includes('seguridad')) return '/images/telecom/camaras-seguridad.jpg';
                  if (servicioLower.includes('portero') || servicioLower.includes('automático') || servicioLower.includes('automatico')) return '/images/telecom/portero automatico.jpg';
                  if (servicioLower.includes('interferencia') || servicioLower.includes('5g') || servicioLower.includes('wifi')) return '/images/telecom/antena-profesional.jpg';
                  if (servicioLower.includes('reparación') || servicioLower.includes('reparacion') || servicioLower.includes('urgente')) return '/images/telecom/reparaciones-urgentes.jpg';
                  return '/images/telecom/antenistas-en-toledo-sur.jpg';
                };
                
                return (
                  <ServiceCard
                    key={index}
                    title={servicio}
                    description={`Servicio profesional de ${servicio.toLowerCase()} en ${data.nombre} con garantía y soporte técnico especializado.`}
                    image={getServiceImage(servicio)}
                    slug={servicioSlug}
                    iconName={getIconName(servicio)}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">¿Por qué elegir nuestros servicios?</h2>
              <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Experiencia, calidad y compromiso en cada proyecto de telecomunicaciones</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.caracteristicas?.map((caracteristica, index) => (
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

        {/* Testimonios */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Lo que dicen nuestros clientes</h2>
              <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Testimonios reales de clientes satisfechos con nuestros servicios</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.testimonios?.map((testimonio, index) => (
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Preguntas Frecuentes</h2>
              <p className="text-xl text-brand-black-light max-w-3xl mx-auto">Resolvemos las dudas más comunes sobre nuestros servicios</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {data.faqs?.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-brand-black mb-3">{faq.question}</h3>
                  <p className="text-brand-black-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-green to-green-700">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Necesitas nuestros servicios?</h2>
                <p className="text-xl mb-8 text-white/90">Contacta con nosotros para obtener un presupuesto gratuito y sin compromiso</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-white text-brand-green hover:bg-gray-100 rounded-full px-8 py-6">
                    <a href="https://wa.me/34668838415?text=Hola%2C%20quiero%20más%20información%20sobre%20servicios%20de%20telecomunicaciones" className="flex items-center gap-2">
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
  );
}