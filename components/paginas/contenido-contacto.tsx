"use client";

import type React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactFaq } from "@/components/contact/contact-faq";
import { ContactForm } from "@/components/contact/contact-form";
import { MunicipiosServicio } from "@/components/MunicipiosServicio";
import { Toaster } from "@/components/ui/toaster";

// --- Mapeador de Íconos ---
const iconMap = { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle };
const Icon = ({ name, ...props }: { name: keyof typeof iconMap; [key: string]: any }) => {
  const LucideIcon = iconMap[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

// ==================================================================
// COMPONENTE PRINCIPAL DE CONTENIDO
// ==================================================================
export default function ContenidoContacto({ data }: { data: any }) {
  return (
    <div className="flex flex-col min-h-screen">
      <PhoneBanner />
      <MainNavigation services={[]} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-green-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-green-100/20"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
                <Link href="/" className="text-slate-600 hover:text-green-600">Inicio</Link>
                <span className="text-slate-600">/</span>
                <span className="text-green-600 font-medium">Contacto</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">Contacta con nosotros</h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                Estamos aquí para ayudarte. Contacta con nuestro equipo técnico especializado para solicitar información o un presupuesto personalizado sin compromiso.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="w-full py-12 md:py-16 bg-white relative z-10 -mt-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.infoCards.map((info: any, index: number) => (
                <ContactInfo
                  key={index}
                  icon={<Icon name={info.iconName} className="h-6 w-6" />}
                  title={info.title}
                  description={info.description}
                  contact={info.contact}
                  link={info.link}
                  bgColor={index === 1 ? "bg-slate-800" : "bg-green-50"}
                  iconColor={index === 1 ? "text-white" : "text-green-600"}
                  textColor={index === 1 ? "text-white" : ""}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Envíanos un mensaje</h2>
                </div>
                <ContactForm />
              </div>
              <div className="space-y-8">
                <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d-3.7!3d40.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzAwLjAiTiAzwrA0MicwMC4wIlc!5e0!3m2!1sen!2ses!4v1628509311195!5m2!1sen!2ses"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    title="Ubicación de Advanced Telecom"
                  >
                  </iframe>
                </div>
                <div className="bg-green-50 rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Clock" className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-slate-800">Horario de atención</h3>
                  </div>
                  <div className="space-y-2 text-slate-600">
                    <p><span className="font-medium">Lun-Jue:</span> 10:00 – 20:00</p>
                    <p><span className="font-medium">Vie:</span> 10:00 – 19:00</p>
                    <p><span className="font-medium">Sáb:</span> 11:00 – 13:00</p>
                    <p><span className="font-medium">Dom:</span> Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Municipios Servicio Section */}
        <MunicipiosServicio />

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-green-50 rounded-full mb-2">
                <span className="text-green-600 font-medium px-3 py-1">Preguntas Frecuentes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-800 leading-tight mt-4">
                Resolvemos tus dudas
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                {data.faqs.map((faq: any, index: number) => (
                  <ContactFaq key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* ... Resto de secciones como el CTA ... */}

      </main>

      <Footer />
      <Toaster />
    </div>
  );
}