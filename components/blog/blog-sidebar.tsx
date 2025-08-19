import Image from "next/image"
import Link from "next/link"
import { Search, Tag, Folder, ChevronRight } from "lucide-react"

import { Input } from "@/components/ui/input"
// 1. Importa el tipo de dato centralizado
import type { PostFrontmatter } from "@/lib/posts"

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

// 2. Define las props que el componente espera, usando el tipo importado
interface BlogSidebarProps {
  posts: PostFrontmatter[]
  currentPostSlug?: string // Se usa el slug en lugar del id
}

export function BlogSidebar({ posts, currentPostSlug }: BlogSidebarProps) {
  // Obtener categorías únicas
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  // Obtener tags únicos
  const allTags = posts.flatMap((post) => post.tags)
  const uniqueTags = Array.from(new Set(allTags))

  // 3. Filtra los posts populares usando el slug
  const popularPosts = posts
    .filter((post) => !currentPostSlug || post.slug !== currentPostSlug)
    .slice(0, 4)

  return (
    <div className="space-y-8">
      {/* Búsqueda */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-brand-black mb-4">Buscar</h3>
        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar artículos..."
            className="pl-10 pr-4 py-2 rounded-lg border-brand-green focus:ring-brand-green"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brand-green" />
        </div>
      </div>

      {/* Categorías */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold text-brand-black mb-6 flex items-center">
          <Folder className="h-5 w-5 mr-2 text-brand-green" /> 
          Categorías
        </h3>
        <ul className="space-y-3">
          {categories.map((category) => {
            const postCount = posts.filter((post) => post.category === category).length;
            const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            return (
              <li key={category}>
                <Link
                  href={`/blog/categoria/${category.toLowerCase().replace(/ /g, "-")}`}
                  className="group flex items-center justify-between p-3 rounded-lg hover:bg-brand-green/5 transition-all duration-200 border border-transparent hover:border-brand-green/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-green rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-brand-black-light group-hover:text-brand-green font-medium transition-colors">
                      {categoryName}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-full text-xs font-semibold group-hover:bg-brand-green group-hover:text-white transition-all">
                      {postCount}
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-green transition-colors" />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Posts populares */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-brand-black mb-4">Artículos populares</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="flex gap-3 group">
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src={validateImagePath(post.image)}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-brand-black group-hover:text-brand-green transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-brand-black-light">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
          <Tag className="h-5 w-5 mr-2" /> Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {uniqueTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/ /g, "-")}`}
              className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm hover:bg-brand-green hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Banner CTA */}
      <div className="bg-brand-black rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">¿Necesitas servicios de telecomunicaciones?</h3>
        <p className="mb-4 text-white/90">
          Contáctanos hoy mismo para obtener un presupuesto personalizado sin compromiso.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-white text-brand-green font-medium px-4 py-2 rounded-lg hover:bg-brand-green/10 transition-colors normal-case"
        >
          Contactar ahora
        </Link>
      </div>
    </div>
  )
}