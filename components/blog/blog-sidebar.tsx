import Image from "next/image"
import Link from "next/link"
import { Search, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  date: string
  author: string
  category: string
  tags: string[]
}

interface BlogSidebarProps {
  posts: BlogPost[]
  currentPostId?: number
}

export function BlogSidebar({ posts, currentPostId }: BlogSidebarProps) {
  // Obtener categorías únicas
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  // Obtener tags únicos
  const allTags = posts.flatMap((post) => post.tags)
  const uniqueTags = Array.from(new Set(allTags))

  // Filtrar posts populares (excluyendo el post actual si se proporciona)
  const popularPosts = posts.filter((post) => !currentPostId || post.id !== currentPostId).slice(0, 4)

  return (
    <div className="space-y-8">
      {/* Búsqueda */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-[#0a3b5c] mb-4">Buscar</h3>
        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar artículos..."
            className="pl-10 pr-4 py-2 rounded-lg border-[#00b3d7] focus:ring-[#00b3d7]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00b3d7]" />
        </div>
      </div>

      {/* Categorías */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-[#0a3b5c] mb-4">Categorías</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog/categoria/${category.toLowerCase().replace(/ /g, "-")}`}
                className="flex items-center justify-between text-[#5a7184] hover:text-[#00b3d7] transition-colors"
              >
                <span>{category}</span>
                <span className="bg-[#e8f7fa] text-[#00b3d7] px-2 py-0.5 rounded-full text-xs">
                  {posts.filter((post) => post.category === category).length}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Posts populares */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold text-[#0a3b5c] mb-4">Artículos populares</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src={validateImagePath(post.featuredImage) || "/placeholder.svg"}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-[#0a3b5c] group-hover:text-[#00b3d7] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-[#5a7184]">
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
        <h3 className="text-xl font-bold text-[#0a3b5c] mb-4 flex items-center">
          <Tag className="h-5 w-5 mr-2" /> Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {uniqueTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="bg-[#e8f7fa] text-[#00b3d7] px-3 py-1 rounded-full text-sm hover:bg-[#00b3d7] hover:text-white transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Banner CTA */}
      <div className="bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-3">¿Necesitas ayuda con la limpieza?</h3>
        <p className="mb-4 text-white/90">
          Contáctanos hoy mismo para obtener un presupuesto personalizado sin compromiso.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-white text-[#00b3d7] font-medium px-4 py-2 rounded-lg hover:bg-[#e8f7fa] transition-colors normal-case"
        >
          Contactar ahora
        </Link>
      </div>
    </div>
  )
}
