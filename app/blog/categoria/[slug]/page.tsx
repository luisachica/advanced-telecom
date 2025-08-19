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
import { CATEGORY_MAP } from '@/lib/categories';

// Genera Metadata dinámica para SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categoryName = CATEGORY_MAP[params.slug] || params.slug;
  const siteUrl = "https://advancedtelecom.es";
  
  return {
    title: `${categoryName} | Blog de Telecomunicaciones`,
    description: `Artículos sobre ${categoryName.toLowerCase()} - Advanced Telecom`,
    alternates: {
      canonical: `${siteUrl}/blog/categoria/${params.slug}`,
    },
  };
}

// Componente principal de la página
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const allPosts = getAllPosts();
  const categoryPosts = allPosts.filter(post => 
    post.category.toLowerCase().replace(/ /g, "-") === params.slug
  );
  
  if (categoryPosts.length === 0) {
    notFound();
  }
  
  const categoryName = CATEGORY_MAP[params.slug] || params.slug;

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
                {categoryName}
              </h1>
              <p className="text-xl text-brand-black-light leading-relaxed">
                {categoryPosts.length} artículo{categoryPosts.length !== 1 ? 's' : ''} en esta categoría
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
                  {categoryPosts.map((post) => (
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

// Genera las rutas estáticas para cada categoría
export async function generateStaticParams() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map(post => 
    post.category.toLowerCase().replace(/ /g, "-")
  )));
  
  return categories.map(category => ({
    slug: category,
  }));
}