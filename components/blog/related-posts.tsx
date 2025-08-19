import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { PostFrontmatter } from "@/lib/posts"
import { Card, CardContent } from "@/components/ui/card"

interface RelatedPostsProps {
  currentPost: PostFrontmatter
  allPosts: PostFrontmatter[]
  maxPosts?: number
}

export function RelatedPosts({ currentPost, allPosts, maxPosts = 3 }: RelatedPostsProps) {
  // Filtrar posts relacionados basados en categoría y tags
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug) // Excluir el post actual
    .map(post => {
      let score = 0
      
      // Puntuación por categoría coincidente
      if (post.category === currentPost.category) {
        score += 3
      }
      
      // Puntuación por tags coincidentes
      const commonTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      )
      score += commonTags.length
      
      return { ...post, score }
    })
    .filter(post => post.score > 0) // Solo posts con alguna relación
    .sort((a, b) => b.score - a.score) // Ordenar por puntuación
    .slice(0, maxPosts) // Limitar cantidad

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
          Artículos Relacionados
        </h2>
        <p className="text-brand-black-light">
          Descubre más contenido sobre telecomunicaciones que te puede interesar
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-brand-green">
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2 py-1 bg-brand-green/10 text-brand-green text-xs font-medium rounded-full">
                    {post.category.replace(/-/g, ' ')}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <h3 className="font-semibold text-brand-black mb-2 line-clamp-2 group-hover:text-brand-green transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-brand-black-light mb-4 line-clamp-2">
                  {post.description}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Leer más
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}