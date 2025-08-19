# Integración con Google My Business Reviews

Este documento explica cómo conectar los testimonios reales de Google My Business con la sección de testimonios de la página web.

## Estado Actual

Actualmente, la sección de testimonios utiliza datos mock definidos en `data/testimonials.ts` pero con enlace real a Google My Business. La sección está completamente funcional y muestra:

- ✅ Testimonios con rating de estrellas (datos mock)
- ✅ Información del autor (datos mock)
- ✅ Fecha de la reseña (datos mock)
- ✅ Rating promedio calculado (datos mock)
- ✅ Enlace REAL a Google My Business de Advanced Telecom
- ✅ Diseño responsivo y atractivo

**Decisión:** Se mantienen los datos mock para evitar complejidad de sincronización automática, pero el enlace sí dirige a la ficha real de Google My Business.

## Opciones para Conectar con Google My Business

### Opción 1: Google My Business API (Recomendada para empresas)

**Pros:**
- Acceso completo a todas las reseñas
- Datos en tiempo real
- Posibilidad de responder a reseñas

**Contras:**
- Requiere verificación de negocio
- Proceso de configuración complejo
- Requiere OAuth 2.0

**Pasos para implementar:**

1. **Crear proyecto en Google Cloud Console**
   ```bash
   # Ir a https://console.cloud.google.com/
   # Crear nuevo proyecto
   # Habilitar Google My Business API
   ```

2. **Configurar OAuth 2.0**
   ```bash
   # Crear credenciales OAuth 2.0
   # Configurar dominios autorizados
   # Obtener Client ID y Client Secret
   ```

3. **Implementar en Next.js**
   ```typescript
   // app/api/reviews/route.ts
   export async function GET() {
     const reviews = await fetchGoogleMyBusinessReviews()
     return Response.json(reviews)
   }
   ```

### Opción 2: Google Places API (Limitada pero más simple)

**Pros:**
- Más fácil de configurar
- No requiere verificación de negocio
- Ideal para mostrar reseñas públicas

**Contras:**
- Solo devuelve 5 reseñas máximo
- Datos limitados
- Requiere Place ID

**Implementación:**

```typescript
// lib/google-places.ts
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY
const PLACE_ID = process.env.GOOGLE_PLACE_ID

export async function fetchGooglePlacesReviews() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
  
  const response = await fetch(url)
  const data = await response.json()
  
  return data.result.reviews.map(review => ({
    id: review.time.toString(),
    author: review.author_name,
    rating: review.rating,
    comment: review.text,
    date: new Date(review.time * 1000).toLocaleDateString('es-ES')
  }))
}
```

### Opción 3: Servicios de Terceros

**Servicios recomendados:**
- EmbedSocial
- Elfsight
- Trustpilot
- ReviewsOnMyWebsite

**Pros:**
- Configuración muy simple
- Soporte técnico incluido
- Funcionalidades adicionales

**Contras:**
- Costo mensual
- Dependencia de terceros

## Configuración Recomendada

### Variables de Entorno

Crear archivo `.env.local`:

```env
# Google Places API (Opción más simple)
GOOGLE_PLACES_API_KEY=tu_api_key_aqui
GOOGLE_PLACE_ID=tu_place_id_aqui

# Google My Business API (Opción completa)
GOOGLE_CLIENT_ID=tu_client_id_aqui
GOOGLE_CLIENT_SECRET=tu_client_secret_aqui
GOOGLE_ACCOUNT_ID=tu_account_id_aqui
GOOGLE_LOCATION_ID=tu_location_id_aqui
```

### Encontrar tu Place ID

1. Ir a [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Buscar "Advanced Telecom Madrid"
3. Copiar el Place ID generado

### Implementación Final

```typescript
// data/testimonials.ts - Actualizar función
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    // Intentar obtener reseñas reales
    if (process.env.GOOGLE_PLACES_API_KEY) {
      return await fetchGooglePlacesReviews()
    }
    
    // Fallback a datos mock
    return mockTestimonials
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return mockTestimonials
  }
}
```

## Consideraciones de Rendimiento

- **Cache:** Implementar cache de 1 hora para las reseñas
- **SSG:** Generar testimonios en build time cuando sea posible
- **Fallback:** Siempre tener datos mock como respaldo

## Próximos Pasos

1. ✅ Sección de testimonios creada con datos mock
2. ⏳ Decidir entre Google Places API o Google My Business API
3. ⏳ Configurar API keys y credenciales
4. ⏳ Implementar fetch de datos reales
5. ⏳ Añadir cache y manejo de errores
6. ⏳ Testing y optimización

## Recursos Útiles

- [Google My Business API Documentation](https://developers.google.com/my-business/content/review-data)
- [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service/details)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [OAuth 2.0 for Web Applications](https://developers.google.com/identity/protocols/oauth2/web-server)