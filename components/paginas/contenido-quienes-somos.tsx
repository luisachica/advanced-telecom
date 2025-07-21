"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Shield, Users, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";

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
        <section className="w-full bg-[#e8f7fa] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
                <Link href="/" className="text-[#5a7184] hover:text-[#00b3d7]">Inicio</Link>
                <span className="text-[#5a7184]">/</span>
                <span className="text-[#00b3d7] font-medium">Quiénes somos</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a3b5c] leading-tight mb-6">{pageData.hero.title}</h1>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mb-8">{pageData.hero.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Sección Principal */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="text-[#00b3d7] font-medium">Servicios de limpieza en Madrid</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a3b5c] leading-tight">{pageData.mainContent.title}</h2>
                <div className="border-l-4 border-[#00b3d7] pl-4 italic text-[#5a7184]">"{pageData.mainContent.quote}"</div>
                {pageData.mainContent.paragraphs.map((p: string, i: number) => <p key={i} className={`text-[#5a7184] ${i === 3 ? 'font-medium' : ''}`}>{p}</p>)}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Button asChild className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-3 normal-case">
                    <Link href="/contacto">Contactar ahora</Link>
                  </Button>
                  <div className="flex items-center gap-2 text-[#0a3b5c] font-medium">
                    <span>o llame al</span>
                    <Link href="tel:611174552" className="text-[#00b3d7] hover:underline">611 174 552</Link>
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
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2"><span className="text-[#00b3d7] font-medium px-3 py-1">Nuestras ventajas</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">{pageData.differentiators.title}</h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">{pageData.differentiators.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pageData.differentiators.items.map((item: any) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-[#e8f7fa] p-3 rounded-full w-fit mb-4"><Icon name={item.iconName} className="h-6 w-6 text-[#00b3d7]" /></div>
                  <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">{item.title}</h3>
                  <p className="text-[#5a7184]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería de Imágenes */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2"><span className="text-[#00b3d7] font-medium px-3 py-1">Nuestro trabajo</span></div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">{pageData.gallery.title}</h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">{pageData.gallery.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.gallery.images.map((image: any) => (
                <div key={image.src} className="relative overflow-hidden rounded-xl group">
                  <Image src={validateImagePath(image.src)} alt={image.alt} width={400} height={300} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity"><h3 className="font-bold">{image.alt}</h3></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">¿Listo para experimentar la mejor limpieza en Madrid?</h2>
              <p className="text-white/90 text-lg mb-8">Contáctanos hoy mismo y descubre por qué somos la empresa de limpieza preferida en Madrid. Solicita un presupuesto sin compromiso.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px] normal-case">
                  <Link href="/contacto">Solicitar presupuesto <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}