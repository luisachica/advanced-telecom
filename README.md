# Advanced Telecom Madrid

Sitio web profesional para servicios de telecomunicaciones en Madrid.

## Configuración para Despliegue

### Formulario de Contacto

El formulario de contacto está configurado para redirigir automáticamente a WhatsApp con los datos del formulario. No requiere configuración de API externa.

#### Configuración de WhatsApp
- El número de WhatsApp se configura en `app/actions/send-contact.ts`
- Actualiza la variable `whatsappNumber` con tu número real (formato: 34XXXXXXXXX)

#### Google Reviews (Opcional)
- `GOOGLE_PLACES_API_KEY`: Para mostrar reseñas de Google
- `GOOGLE_PLACE_ID`: ID del lugar en Google Places

### Configuración en Cloudflare Pages

1. Ve a tu proyecto en Cloudflare Pages Dashboard
2. Navega a Settings > Environment Variables
3. Agrega las variables opcionales si las necesitas:
   - `GOOGLE_PLACES_API_KEY`: tu_clave_google_aqui
   - `GOOGLE_PLACE_ID`: tu_place_id_aqui

### Desarrollo Local

1. Clona el repositorio
2. Ejecuta `npm install`
3. Ejecuta `npm run dev`
4. El formulario funcionará localmente redirigiendo a WhatsApp

### Características

- ✅ Formulario de contacto con redirección a WhatsApp
- ✅ Optimizado para Cloudflare Pages
- ✅ SEO completo con metadatos y sitemap
- ✅ Responsive design
- ✅ 80+ páginas de municipios
- ✅ Sin dependencias de API externa para formularios
