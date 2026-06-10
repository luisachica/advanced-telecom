import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface MunicipiosServicioProps {
  titulo?: string;
  descripcion?: string;
}

const municipios = [
  { nombre: 'Nambroca', slug: 'antenista-nambroca' },
  { nombre: 'Bargas', slug: 'antenista-bargas' },
  { nombre: 'Olías del Rey', slug: 'antenista-olias-del-rey' },
  { nombre: 'Cobisa', slug: 'antenista-cobisa' },
  { nombre: 'Barrio del Polígono', slug: 'antenista-barrio-del-poligono' },
  { nombre: 'Arcicollar', slug: 'antenista-arcicollar' },
  { nombre: 'Camarena', slug: 'antenista-camarena' },
  { nombre: 'Magan', slug: 'antenista-magan' },
  { nombre: 'Azucaica', slug: 'antenista-azucaica' },
  { nombre: 'Barience', slug: 'antenista-barience' },
  { nombre: 'Argés', slug: 'antenista-arges' },
  { nombre: 'Layos', slug: 'antenista-layos' },
  { nombre: 'Yunclillos', slug: 'antenista-yunclillos' },
  { nombre: 'Mocejón', slug: 'antenista-mocejon' },
  { nombre: 'Rielves', slug: 'antenista-rielves' },
  { nombre: 'San Bernardo', slug: 'antenista-san-bernardo' },
  { nombre: 'Los Cigarrales', slug: 'antenista-los-cigarrales' },
  { nombre: 'Montesión', slug: 'antenista-montesion' },
  { nombre: 'San Martín', slug: 'antenista-san-martin' },
  { nombre: 'Avenida de Europa', slug: 'antenista-avenida-de-europa' },
  { nombre: 'Vega Baja', slug: 'antenista-vega-baja' },
  { nombre: 'Sta. Mª Benquerencia', slug: 'antenista-sta-m-benquerencia' },
  { nombre: 'Santa Bárbara', slug: 'antenista-santa-barbara' },
  { nombre: 'Vista Hermosa', slug: 'antenista-vista-hermosa' },
  { nombre: 'Olivar de los Pozos', slug: 'antenista-olivar-de-los-pozos' },
  { nombre: 'Santa Teresa', slug: 'antenista-santa-teresa' },
  { nombre: 'Covachuelas', slug: 'antenista-covachuelas' },
  { nombre: 'Avenida Reconquista', slug: 'antenista-avenida-reconquista' },
  { nombre: 'La Legua', slug: 'antenista-la-legua' },
  { nombre: 'Las Tres Culturas', slug: 'antenista-las-tres-culturas' },
  { nombre: 'La Bastida', slug: 'antenista-la-bastida' },
  { nombre: 'Palomarejos', slug: 'antenista-palomarejos' },
  { nombre: 'Valparaíso', slug: 'antenista-valparaiso' },
  { nombre: 'Buenavista', slug: 'antenista-buenavista' },
  { nombre: 'Antequeruela', slug: 'antenista-antequeruela' }
];

export function MunicipiosServicio({
  titulo = "Servicio técnico de parabólicas y video porteros en las siguientes localidades y barrios de Toledo",
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
          {municipios.map((municipio, index) => (
            <Link
              key={index}
              // URL corregida: se usa el slug directamente
              href={`/${municipio.slug}`}
              className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-brand-green group cursor-pointer"
            >
              <MapPin className="h-4 w-4 text-brand-green flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-brand-black text-sm font-medium group-hover:text-brand-green transition-colors">
                {municipio.nombre}
              </span>
            </Link>
          ))}
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