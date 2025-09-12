import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface MunicipiosServicioProps {
  titulo?: string;
  descripcion?: string;
}

const municipios = [
  'Alameda de la Sagra', 'Casarrubios del Monte', 'Illescas', 'Nambroca', 'Torrecastillo',
  'Aldea del Fresno', 'Cedillo del Condado', 'La Torre de Esteban Hambrán', 'Navalcarnero', 'Torrejón de la Calzada',
  'Añover del Tajo', 'Chozas de Canales', 'Montesión', 'Nuevo Borox', 'Torrejón de Velasco',
  'Arcicollar', 'Ciempozuelos', 'Layos', 'Numancia de la Sagra', 'Ugena',
  'Arroyomolinos', 'Cigarales', 'Lominchar', 'Olías del Rey', 'Valdemoro',
  'Bargas', 'Cobeja', 'Las Ventas de Retamosa', 'Palomeque', 'Vallegrande',
  'Batres', 'Cobisa', 'Los Cisneros', 'Pantoja', 'Valmojado',
  'Borox', 'Coto del Zagal', 'Los Palominos', 'Pinar de Villeriche', 'Valparaíso',
  'Burguillos de Toledo', 'Cubas de la Sagra', 'Los Pozuelos', 'Recas', 'Villa del Prado',
  'Cabañas de la Sagra', 'El Álamo', 'Los Pradillos', 'Renta de la Casa', 'Villamanta',
  'Calalberche', 'El Quiñón', 'Magán', 'Santa Cruz del Retamar', 'Villamiel de Toledo',
  'Calypo Fado', 'El Viso de San Juan', 'Méntrida', 'Señorío de Illescas', 'Villanueva de la Sagra',
  'Camarena', 'Esquivias', 'Mocejón', 'Serranillos del Valle', 'Yeles',
  'Carranque', 'Fuensalida', 'Moraleja de Enmedio', 'Seseña Nuevo', 'Yuncler',
  'Casarrubuelos', 'Getafe', 'Griñón', 'Seseña Viejo', 'Yunclillos',
  'Toledo', 'Yuncos'
];

export function MunicipiosServicio({ 
  titulo = "Servicio técnico de parabólicas y video porteros en los siguientes municipios y urbanizaciones",
  descripcion
}: MunicipiosServicioProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black leading-tight mb-4">
            {titulo}
          </h2>
          {descripcion && (
            <p className="text-brand-black-light text-lg max-w-2xl mx-auto">
              {descripcion}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {municipios.map((municipio, index) => {
            // Convertir nombre del municipio a slug para la URL
            const municipioSlug = municipio
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/ñ/g, 'n')
              .replace(/á/g, 'a')
              .replace(/é/g, 'e')
              .replace(/í/g, 'i')
              .replace(/ó/g, 'o')
              .replace(/ú/g, 'u')
              .replace(/ü/g, 'u')
              .replace(/[^a-z0-9-]/g, '');
            
            return (
              <Link 
                key={index}
                href={`/antenista-${municipioSlug}`}
                className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-brand-green group cursor-pointer"
              >
                <MapPin className="h-4 w-4 text-brand-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-brand-black text-sm font-medium group-hover:text-brand-green transition-colors">
                  {municipio}
                </span>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-brand-black-light text-base">
            ¿No encuentras tu municipio? <span className="text-brand-green font-medium"><Link href="/contacto">Contáctanos</Link></span> y te informaremos sobre la disponibilidad del servicio en tu zona.
          </p>
        </div>
      </div>
    </section>
  );
}