"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Shield, Users, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import { MunicipiosServicio } from "@/components/MunicipiosServicio";

const iconMap = { Clock, Shield, Users, Sparkles };
const Icon = ({ name, ...props }: { name: keyof typeof iconMap; [key: string]: any }) => {
  const LucideIcon = iconMap[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

const validateImagePath = (path: string | undefined | null): string => {
  return (!path || path.trim() === "") ? "/placeholder.svg" : path;
};

export default function ContenidoQuienesSomos({ data: pageData }: { data: any }) {
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
                <Link href="/" className="text-gray-600 hover:text-green-600">Inicio</Link>
                <span className="text-gray-600">/</span>
                <span className="text-green-600 font-medium">Quiénes somos</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{pageData.hero.title}</h1>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">{pageData.hero.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Sección Principal */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="text-green-600 font-medium">Servicios de telecomunicaciones en Toledo y Madrid Sur</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{pageData.mainContent.title}</h2>
                <div className="border-l-4 border-green-600 pl-4 italic text-gray-700">">{pageData.mainContent.quote}"</div>
                {pageData.mainContent.paragraphs.map((p: string, i: number) => <p key={i} className={`text-gray-700 ${i === 3 ? 'font-medium' : ''}`}>{p}</p>)}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Link href="/contacto" className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm normal-case">
                    Contactar ahora
                  </Link>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                     <span>o llame al</span>
                     <Link href="tel:+34668838415" className="text-green-600 hover:text-green-700 font-bold hover:underline transition-colors duration-200">668 83 84 15</Link>
                   </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-md"><Image src={validateImagePath(pageData.mainContent.images[0].src)} alt={pageData.mainContent.images[0].alt} width={300} height={400} className="w-full h-auto object-cover" /></div>
                  <div className="rounded-2xl overflow-hidden shadow-md"><Image src={validateImagePath(pageData.mainContent.images[1].src)} alt={pageData.mainContent.images[1].alt} width={300} height={200} className="w-full h-auto object-cover" /></div>
                </div>
                <div className="mt-12">
                  <div className="rounded-2xl overflow-hidden shadow-md"><Image src={validateImagePath(pageData.mainContent.images[2].src)} alt={pageData.mainContent.images[2].alt} width={300} height={500} className="w-full h-auto object-cover" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Diferenciadores */}
        <section className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-green-50 rounded-full mb-2"><span className="text-green-600 font-medium px-3 py-1">Nuestras ventajas</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 leading-tight mt-4">{pageData.differentiators.title}</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-4">{pageData.differentiators.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pageData.differentiators.items.map((item: any) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-green-50 p-3 rounded-full w-fit mb-4"><Icon name={item.iconName} className="h-6 w-6 text-green-600" /></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-green-50 rounded-full mb-2"><span className="text-green-600 font-medium px-3 py-1">Nuestro trabajo</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 leading-tight mt-4">{pageData.gallery.title}</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-4">{pageData.gallery.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.gallery.images.map((image: any) => (
                <div key={image.src} className="relative overflow-hidden rounded-xl group">
                  <Image src={validateImagePath(image.src)} alt={image.alt} width={400} height={300} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity"><h3 className="font-bold">{image.alt}</h3></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección CTA */}
        <section className="w-full py-16 md:py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Necesita servicios técnicos de telecomunicaciones en Toledo y Madrid Sur?</h2>
              <p className="text-white/90 text-lg mb-8">Contáctanos hoy mismo y descubre por qué somos la empresa de telecomunicaciones preferida en Toledo y Madrid Sur. Solicita un presupuesto sin compromiso.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto" className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-3 font-medium transition-colors duration-200 text-lg">
                  Solicitar presupuesto
                </Link>
                <Link href="tel:668838415" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 py-3 font-medium transition-colors duration-200 text-lg">
                  Llamar ahora
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Municipios Servicio Section */}
      <MunicipiosServicio />
      
      <Footer />
    </div>
  );
}