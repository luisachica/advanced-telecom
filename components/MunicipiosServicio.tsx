import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface MunicipiosServicioProps {
  titulo?: string;
  descripcion?: string;
}

const municipios = [
  { nombre: 'Alameda de la Sagra', slug: 'antenista-alameda-de-la-sagra' },
  { nombre: 'Aldea del Fresno', slug: 'antenista-en-aldea-del-fresno' },
  { nombre: 'Añover del Tajo', slug: 'antenista-anover-del-tajo' },
  { nombre: 'Arcicollar', slug: 'antenista-arcicollar' },
  { nombre: 'Arroyomolinos', slug: 'antenista-en-arroyomolinos' },
  { nombre: 'Bargas', slug: 'antenista-bargas' },
  { nombre: 'Batres', slug: 'antenista-batres' },
  { nombre: 'Borox', slug: 'antenista-borox' },
  { nombre: 'Burguillos de Toledo', slug: 'antenista-burguillos-de-toledo' },
  { nombre: 'Cabañas de la Sagra', slug: 'antenista-cabanas-de-la-sagra' },
  { nombre: 'Calalberche', slug: 'antenista-en-calalberche' },
  { nombre: 'Calypo Fado', slug: 'antenista-calypo-fado' },
  { nombre: 'Camarena', slug: 'antenista-camarena' },
  { nombre: 'Carranque', slug: 'antenista-carranque' },
  { nombre: 'Casarrubuelos', slug: 'antenista-casarrubuelos' },
  { nombre: 'Casarrubios del Monte', slug: 'antenista-casarrubios-del-monte' },
  { nombre: 'Cedillo del Condado', slug: 'antenista-cedillo-del-condado' },
  { nombre: 'Chozas de Canales', slug: 'antenista-chozas-de-canales' },
  { nombre: 'Ciempozuelos', slug: 'antenista-ciempozuelos' },
  { nombre: 'Cobeja', slug: 'antenista-cobeja' },
  { nombre: 'Cobisa', slug: 'antenista-cobisa' },
  { nombre: 'Coto del Zagal', slug: 'antenista-coto-del-zagal' },
  { nombre: 'Cubas de la Sagra', slug: 'antenista-cubas-de-la-sagra' },
  { nombre: 'El Álamo', slug: 'antenista-el-alamo' },
  { nombre: 'El Quiñón', slug: 'antenista-el-quinon' },
  { nombre: 'El Viso de San Juan', slug: 'antenista-el-viso-de-san-juan' },
  { nombre: 'Esquivias', slug: 'antenista-esquivias' },
  { nombre: 'Fuensalida', slug: 'antenista-fuensalida' },
  { nombre: 'Getafe', slug: 'antenista-getafe' },
  { nombre: 'Griñón', slug: 'antenista-grinon' },
  { nombre: 'Illescas', slug: 'antenista-illescas' },
  { nombre: 'La Torre de Esteban Hambrán', slug: 'antenista-la-torre-de-esteban-hambran' },
  { nombre: 'Las Ventas de Retamosa', slug: 'antenista-las-ventas-de-retamosa' },
  { nombre: 'Layos', slug: 'antenista-layos' },
  { nombre: 'Lominchar', slug: 'antenista-lominchar' },
  { nombre: 'Los Cisneros', slug: 'antenista-los-cisneros' },
  { nombre: 'Los Palominos', slug: 'antenista-los-palominos' },
  { nombre: 'Los Pozuelos', slug: 'antenista-los-pozuelos' },
  { nombre: 'Los Pradillos', slug: 'antenista-los-pradillos' },
  { nombre: 'Magán', slug: 'antenista-magan' },
  { nombre: 'Méntrida', slug: 'antenista-mentrida' },
  { nombre: 'Mocejón', slug: 'antenista-mocejon' },
  { nombre: 'Montesión', slug: 'antenista-montesion' },
  { nombre: 'Moraleja de Enmedio', slug: 'antenista-moraleja-de-enmedio' },
  { nombre: 'Nambroca', slug: 'antenista-nambroca' },
  { nombre: 'Navalcarnero', slug: 'antenista-navalcarnero' },
  { nombre: 'Nuevo Borox', slug: 'antenista-borox' },
  { nombre: 'Numancia de la Sagra', slug: 'antenista-numancia-de-la-sagra' },
  { nombre: 'Olías del Rey', slug: 'antenista-olias-del-rey' },
  { nombre: 'Palomeque', slug: 'antenista-en-palomeque' },
  { nombre: 'Pantoja', slug: 'antenista-en-pantoja' },
  { nombre: 'Pinar de Villeriche', slug: 'antenista-pinar-de-villeriche' },
  { nombre: 'Recas', slug: 'antenista-recas' },
  { nombre: 'Renta de la Casa', slug: 'antenista-renta-de-la-casa' },
  { nombre: 'Santa Cruz del Retamar', slug: 'antenista-santa-cruz-del-retamar' },
  { nombre: 'Serranillos del Valle', slug: 'antenista-serranillos-del-valle' },
  { nombre: 'Seseña Nuevo', slug: 'antenista-sesena' },
  { nombre: 'Seseña Viejo', slug: 'antenista-sesena-viejo' },
  { nombre: 'Toledo', slug: 'antenista-toledo' },
  { nombre: 'Torrecastillo', slug: 'antenista-torrecastillo' },
  { nombre: 'Torrejón de la Calzada', slug: 'antenista-torrejon-de-la-calzada' },
  { nombre: 'Torrejón de Velasco', slug: 'antenista-torrejon-de-velasco' },
  { nombre: 'Ugena', slug: 'tecnico-antenista-ugena' },
  { nombre: 'Valdemoro', slug: 'antenista-valdemoro' },
  { nombre: 'Vallegrande', slug: 'antenista-vallegrande' },
  { nombre: 'Valmojado', slug: 'antenista-valmojado' },
  { nombre: 'Valparaíso', slug: 'antenista-valparaiso' },
  { nombre: 'Villa del Prado', slug: 'antenista-en-villa-del-prado' },
  { nombre: 'Villaluenga de la Sagra', slug: 'antenista-villaluenga-de-la-sagra' },
  { nombre: 'Villamanta', slug: 'antenista-villamanta' },
  { nombre: 'Villamiel de Toledo', slug: 'antenista-villamiel-de-toledo' },
  { nombre: 'Yeles', slug: 'tecnico-antenista-yeles' },
  { nombre: 'Yuncler', slug: 'antenista-yuncler' },
  { nombre: 'Yunclillos', slug: 'antenista-yunclillos' },
  { nombre: 'Yuncos', slug: 'antenista-yuncos' }
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