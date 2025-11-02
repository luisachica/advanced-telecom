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
  // Redirecciones de desarrollo (no aplican en export estático)
  async redirects() {
    return [
      { source: '/politica-de-cookies-2/', destination: '/politica-de-cookies/', permanent: true },
      { source: '/solicitar-servicio/', destination: '/servicios', permanent: true },
      { source: '/antenas-y-parabolicas/', destination: '/servicios/antenas-parabolicas', permanent: true },
      { source: '/porteros-automaticos-y-video-porteros/', destination: '/servicios/porteros-automaticos', permanent: true },
    ]
  },
  // Headers de seguridad se configurarán en Cloudflare Pages
  // Los headers no funcionan con output: 'export'
};

export default nextConfig;
