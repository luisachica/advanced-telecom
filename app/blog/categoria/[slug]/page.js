// Archivo: app/blog/categoria/[slug]/page.js

import Link from 'next/link';
import Image from 'next/image'
import { getAllPosts, slugify  } from '@/lib/posts';
import { CATEGORY_MAP } from '@/lib/categories';
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";

// --- Funciones de Lógica ---

// Función mejorada que usa el mapa de categorías
function getCategoryName(slug) {
  return CATEGORY_MAP[slug] || "Categoría Desconocida";
}

// Función de filtro limpia
function getPostsByCategory(categorySlug) {
  const allPosts = getAllPosts();
  
  // La magia sucede aquí dentro del filtro:
  return allPosts.filter(post => {
    // Convierte el texto de la categoría del post (ej: "Limpiezas en Madrid")
    // a un slug (ej: "limpiezas-en-madrid") ANTES de comparar.
    return slugify(post.category) === categorySlug;
  });
}
// --- Funciones de Next.js ---

// Función de METADATOS para SEO
export async function generateMetadata({ params }) {
  const categoryName = getCategoryName(params.slug);
  return {
    title: `Artículos sobre ${categoryName}`,
    description: `Encuentra todos nuestros artículos y guías sobre ${categoryName}.`,
    alternates: {
      canonical: `https://www.limpiezas-madrid.es/blog/categoria/${params.slug}`, // Reemplaza con tu dominio
    },
  };
}

// Genera las páginas estáticas
export async function generateStaticParams() {
  const posts = getAllPosts();
  
  // Normaliza cada categoría para crear una lista de slugs únicos y correctos
  const categories = new Set(posts.map(post => slugify(post.category)));
  
  return Array.from(categories).map(slug => ({
    slug: slug,
  }));
}

// --- Componente de la Página ---
export default function CategoryPage({ params }) {
  const { slug } = params;
  const posts = getPostsByCategory(slug);
  const categoryName = getCategoryName(slug);

  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation services={[]} />
      <main className="flex-1">
        {/* Encabezado de la categoría */}
        <section className="w-full bg-[#e8f7fa] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#0a3b5c]">
              Categoría: {categoryName}
            </h1>
            <p className="mt-2 text-[#5a7184]">
              Explora todos nuestros artículos sobre este tema.
            </p>
          </div>
        </section>

        {/* Lista de artículos */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    
                    {/* 2. AÑADE ESTE BLOQUE DE IMAGEN */}
                    <div className="relative w-full h-48">
                      <Image
                        src={post.featuredImage}
                        alt={`Imagen destacada del artículo ${post.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0a3b5c] mb-2 group-hover:text-[#00b3d7] transition-colors">{post.title}</h3>
                      <p className="text-[#5a7184] text-sm line-clamp-3">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No hay artículos en esta categoría todavía.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}