# Advanced Telecom Madrid

Sitio web profesional para servicios de telecomunicaciones en Madrid.

## Configuración para Despliegue

### Variables de Entorno Requeridas

Para que el sitio funcione correctamente en producción, necesitas configurar las siguientes variables de entorno:

#### Resend (Servicio de Email)
- `RESEND_API_KEY`: Clave API de Resend para el formulario de contacto
  - Obtener en: https://resend.com/api-keys
  - Requerido para que funcione el formulario de contacto

#### Google Reviews (Opcional)
- `GOOGLE_PLACES_API_KEY`: Para mostrar reseñas de Google
- `GOOGLE_PLACE_ID`: ID del lugar en Google Places

### Configuración en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Navega a Settings > Environment Variables
3. Agrega las variables necesarias:
   - `RESEND_API_KEY`: tu_clave_resend_aqui
   - Otras variables según necesites

### Desarrollo Local

1. Copia `.env.example` a `.env.local`
2. Completa las variables con tus valores reales
3. Ejecuta `npm run dev`

### Solución de Problemas

Si obtienes el error "Missing API key" durante el build:
1. Asegúrate de que `RESEND_API_KEY` esté configurada en Vercel
2. Redespliega el proyecto después de agregar las variables
