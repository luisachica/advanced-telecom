import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

// 1. Importa el tipo de dato centralizado
import type { PostFrontmatter } from "@/lib/posts"

// Función para validar rutas de imágenes
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return "/placeholder.svg"
  }
  return path
}

// 2. Define las props usando el tipo importado
interface BlogCardProps {
  post: PostFrontmatter
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={validateImagePath(post.featuredImage)}
            alt={post.title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#00b3d7]">
            {post.category}
          </div>
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-bold text-[#0a3b5c] mb-2 group-hover:text-[#00b3d7] transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-[#5a7184] mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap items-center justify-between text-sm text-[#5a7184]">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#00b3d7]" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-[#00b3d7]" />
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </div>
  )
}