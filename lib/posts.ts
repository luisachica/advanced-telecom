import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// NUEVA FUNCIÓN AÑADIDA
// Convierte cualquier cadena de texto en un slug URL-amigable
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Reemplaza espacios con -
    .replace(/[^\w\-]+/g, '')   // Quita caracteres que no sean palabras o guiones
    .replace(/\-\-+/g, '-');    // Reemplaza múltiples - con uno solo
}

// Define el tipo de dato para un post, para usarlo en todo el proyecto
export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  slug: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

// Función para obtener los datos de todos los posts
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName): PostFrontmatter => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<PostFrontmatter, 'slug'>),
    };
  });

  // Ordena los posts por fecha, del más reciente al más antiguo
  return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

// Función para obtener el contenido de un post específico
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}