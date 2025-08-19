import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from 'next/navigation';

import { getAllPosts } from '@/lib/posts';
import { Button } from "@/components/ui/button";
import { PhoneBanner } from "@/components/phone-banner";
import { MainNavigation } from "@/components/main-navigation";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogSidebar } from "@/components/blog/blog-sidebar";

// Genera Metadata dinámica para SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tagName = params.slug.replace(/-/g, ' ');
  const siteUrl = "https://advancedtelecom.es";
  
  return {
    title: `#${tagName} | Blog de Telecomunicaciones`,
    description: `Artículos etiquetados con ${tagName} - Advanced Telecom`,
    alternates: {
      canonical: `${siteUrl}/blog/tag/${params.slug}`,
    },
  };
}

// Componente principal de la página
export default function TagPage({ params }: { params: { slug: string } }) {
  const allPosts = getAllPosts();
  const tagPosts = allPosts.filter(post => 
    post.tags.some(tag => tag.toLowerCase().replace(/ /g, "-") === params.slug)
  );
  
  if (tagPosts.length === 0) {
    notFound();
  }
  
  const tagName = params.slug.replace(/-/g, ' ');

  return (
    <div className="flex flex-col min-h-screen">
      <PhoneBanner />
      <MainNavigation services={[]} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-brand-green/10 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-6 text-brand-green hover:text-brand-green-dark hover:bg-brand-green/10 -ml-2">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al blog
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight mb-6">
                #{tagName}
              </h1>
              <p className="text-xl text-brand-black-light leading-relaxed">
                {tagPosts.length} artículo{tagPosts.length !== 1 ? 's' : ''} con este tag
              </p>
            </div>
          </div>
        </section>

        {/* Contenido */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {tagPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogSidebar posts={allPosts} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Genera las rutas estáticas para cada tag
export async function generateStaticParams() {
  const posts = getAllPosts();
  const allTags = posts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(allTags.map(tag => 
    tag.toLowerCase().replace(/ /g, "-")
  )));
  
  return uniqueTags.map(tag => ({
    slug: tag,
  }));
}