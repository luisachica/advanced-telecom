import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';

import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { Button } from "@/components/ui/button";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import { BlogSidebar } from "@/components/blog/blog-sidebar";

// Genera Metadata dinámica para SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const { frontmatter } = await getPostBySlug(params.slug);
    const siteUrl = "https://www.tuweb.com"; // Reemplaza con tu dominio

    return {
      title: `${frontmatter.title} | Blog de Limpieza`,
      description: frontmatter.excerpt,
      keywords: frontmatter.tags.join(", "),
      alternates: {
        canonical: `${siteUrl}/blog/${params.slug}`,
      },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        url: `${siteUrl}/blog/${params.slug}`,
        images: [
          {
            url: `${siteUrl}${frontmatter.featuredImage}`,
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  } catch (error) {
    return { title: "Artículo no encontrado" };
  }
}

// Componente principal de la página
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter, content } = await getPostBySlug(params.slug);
    const allPosts = getAllPosts();

    const { content: compiledContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: false },
    });
    
    const formattedDate = new Date(frontmatter.date).toLocaleDateString("es-ES", {
      year: "numeric", month: "long", day: "numeric"
    });

    return (
      <div className="flex flex-col min-h-screen">
        <PhoneBanner />
        <MainNavigation services={[]} />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full bg-[#e8f7fa] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-5"></div>
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-6 text-[#00b3d7] hover:text-[#0095b3] hover:bg-[#e8f7fa]/50 -ml-2">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al blog
                  </Link>
                </Button>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a3b5c] leading-tight mb-6">
                  {frontmatter.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-[#5a7184] mb-8">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[#00b3d7]" /><span>{formattedDate}</span></div>
                  <div className="flex items-center gap-2"><User className="h-4 w-4 text-[#00b3d7]" /><span>{frontmatter.author}</span></div>
                  <div className="flex items-center gap-2"><Tag className="h-4 w-4 text-[#00b3d7]" /><span>{frontmatter.category}</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* Contenido del artículo */}
          <section className="w-full py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  {/* ✅ El contenedor del contenido ahora tiene la clase "prose" para darle estilo */}
                  <article className="prose prose-lg max-w-none">
                    <div className="mb-8 rounded-2xl overflow-hidden">
                      <Image
                        src={frontmatter.featuredImage}
                        alt={frontmatter.title}
                        width={800} height={500}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>
                    {compiledContent}
                    
                    {/* Tags del artículo */}
                    <div className="flex flex-wrap gap-2 mt-8">
                      {frontmatter.tags.map((tag) => (
                        <Link key={tag} href={`/blog/tag/${tag}`} className="bg-[#e8f7fa] text-[#00b3d7] no-underline px-3 py-1 rounded-full text-sm hover:bg-[#00b3d7] hover:text-white transition-colors">
                          #{tag}
                        </Link>
                      ))}
                    </div>

                    {/* Botones para compartir en redes */}
                    <div className="border-t border-gray-200 mt-8 pt-8">
                      <h3 className="text-lg font-bold text-[#0a3b5c] mb-4 flex items-center"><Share2 className="h-5 w-5 mr-2" /> Compartir artículo</h3>
                      <div className="flex gap-3">
                        <Button variant="outline" size="icon" className="rounded-full border-[#1877f2] text-[#1877f2] hover:bg-[#1877f2] hover:text-white"><Facebook className="h-5 w-5" /><span className="sr-only">Facebook</span></Button>
                        <Button variant="outline" size="icon" className="rounded-full border-[#1da1f2] text-[#1da1f2] hover:bg-[#1da1f2] hover:text-white"><Twitter className="h-5 w-5" /><span className="sr-only">Twitter</span></Button>
                        <Button variant="outline" size="icon" className="rounded-full border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white"><Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span></Button>
                        <Button variant="outline" size="icon" className="rounded-full border-[#ea4335] text-[#ea4335] hover:bg-[#ea4335] hover:text-white"><Mail className="h-5 w-5" /><span className="sr-only">Email</span></Button>
                      </div>
                    </div>
                  </article>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <BlogSidebar posts={allPosts} currentPostSlug={params.slug} />
                </div>
              </div>
            </div>
          </section>
          
          {/* Artículos Relacionados */}
          <section className="w-full py-16 bg-[#f8f9fa]">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a3b5c] mb-8 text-center">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {allPosts
                  .filter((p) => p.slug !== params.slug && p.category === frontmatter.category)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <Image src={relatedPost.featuredImage} alt={relatedPost.title} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#0a3b5c] mb-2 group-hover:text-[#00b3d7] transition-colors">{relatedPost.title}</h3>
                        <p className="text-[#5a7184] text-sm line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">¿Necesitas servicios profesionales de limpieza?</h2>
                <p className="text-white/90 text-lg mb-8">Contáctanos hoy mismo y descubre cómo podemos ayudarte a mantener tus espacios impecables.</p>
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
  } catch (error) {
    notFound();
  }
}

// Genera las rutas estáticas para cada post en el momento del build
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}