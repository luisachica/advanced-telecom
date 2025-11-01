/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimización para Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Requerido para export estático
  },
  // Headers de seguridad se configurarán en Cloudflare Pages
  // Los headers no funcionan con output: 'export'
};

export default nextConfig;
