/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint config ya no es soportada desde next.config
  // Ver: https://nextjs.org/docs/messages/invalid-next-config
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
  // Nota: con output: 'export' los headers via middleware pueden aplicarse en dev
};

export default nextConfig;
