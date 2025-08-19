import { NextRequest, NextResponse } from 'next/server'
import { mockTestimonials } from '@/data/testimonials'

// Interfaz para las reseñas de Google My Business
interface GoogleReview {
  reviewId: string
  reviewer: {
    profilePhotoUrl?: string
    displayName: string
  }
  starRating: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE'
  comment?: string
  createTime: string
  updateTime: string
}

interface GoogleMyBusinessResponse {
  reviews: GoogleReview[]
  totalReviewCount: number
  averageRating: number
}

// Función para convertir rating de Google a número
function convertStarRating(rating: string): number {
  const ratingMap = {
    'ONE': 1,
    'TWO': 2,
    'THREE': 3,
    'FOUR': 4,
    'FIVE': 5
  }
  return ratingMap[rating as keyof typeof ratingMap] || 5
}

// Función para obtener token de acceso OAuth 2.0
async function getAccessToken(): Promise<string | null> {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN

    if (!clientId || !clientSecret || !refreshToken) {
      console.error('Missing Google OAuth credentials')
      return null
    }

    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    })

    if (!response.ok) {
      console.error('Failed to refresh access token:', response.statusText)
      return null
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error('Error getting access token:', error)
    return null
  }
}

// Función para obtener reseñas de Google My Business
async function fetchGoogleMyBusinessReviews(): Promise<any[]> {
  try {
    const accessToken = await getAccessToken()
    if (!accessToken) {
      throw new Error('No access token available')
    }

    const accountId = process.env.GOOGLE_ACCOUNT_ID
    const locationId = process.env.GOOGLE_LOCATION_ID

    if (!accountId || !locationId) {
      throw new Error('Missing Google My Business account or location ID')
    }

    const url = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Google My Business API error: ${response.statusText}`)
    }

    const data: GoogleMyBusinessResponse = await response.json()
    
    // Convertir formato de Google a nuestro formato
    return data.reviews.map((review) => ({
      id: review.reviewId,
      author: review.reviewer.displayName,
      rating: convertStarRating(review.starRating),
      comment: review.comment || '',
      date: new Date(review.createTime).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      avatar: review.reviewer.profilePhotoUrl || undefined
    }))
  } catch (error) {
    console.error('Error fetching Google My Business reviews:', error)
    throw error
  }
}

// Función alternativa usando Google Places API (más simple pero limitada)
async function fetchGooglePlacesReviews(): Promise<any[]> {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const placeId = process.env.GOOGLE_PLACE_ID

    if (!apiKey || !placeId) {
      throw new Error('Missing Google Places API credentials')
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    if (data.status !== 'OK') {
      throw new Error(`Google Places API status: ${data.status}`)
    }

    // Convertir formato de Google Places a nuestro formato
    return data.result.reviews?.map((review: any) => ({
      id: review.time.toString(),
      author: review.author_name,
      rating: review.rating,
      comment: review.text || '',
      date: new Date(review.time * 1000).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      avatar: review.profile_photo_url || undefined
    })) || []
  } catch (error) {
    console.error('Error fetching Google Places reviews:', error)
    throw error
  }
}

// Cache simple en memoria (en producción usar Redis o similar)
let cachedReviews: any[] | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hora en milisegundos

export async function GET(request: NextRequest) {
  try {
    // Verificar si tenemos datos en cache válidos
    const now = Date.now()
    if (cachedReviews && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        data: cachedReviews,
        source: 'cache',
        cached_at: new Date(cacheTimestamp).toISOString()
      })
    }

    let reviews: any[] = []
    let source = 'mock'

    // Intentar obtener reseñas reales
    try {
      // Priorizar Google My Business API si está configurado
      if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_ACCOUNT_ID) {
        reviews = await fetchGoogleMyBusinessReviews()
        source = 'google_my_business'
      }
      // Fallback a Google Places API
      else if (process.env.GOOGLE_PLACES_API_KEY && process.env.GOOGLE_PLACE_ID) {
        reviews = await fetchGooglePlacesReviews()
        source = 'google_places'
      }
      // Si no hay configuración, usar datos mock
      else {
        reviews = mockTestimonials
        source = 'mock'
      }

      // Actualizar cache solo si obtuvimos datos reales
      if (source !== 'mock') {
        cachedReviews = reviews
        cacheTimestamp = now
      }
    } catch (error) {
      console.error('Error fetching real reviews, falling back to mock data:', error)
      reviews = mockTestimonials
      source = 'mock_fallback'
    }

    return NextResponse.json({
      success: true,
      data: reviews,
      source,
      total: reviews.length,
      fetched_at: new Date().toISOString()
    })
  } catch (error) {
    console.error('API route error:', error)
    
    // En caso de error, devolver datos mock
    return NextResponse.json({
      success: false,
      data: mockTestimonials,
      source: 'mock_error',
      error: 'Failed to fetch reviews',
      fetched_at: new Date().toISOString()
    }, { status: 500 })
  }
}

// Endpoint para limpiar cache manualmente
export async function DELETE() {
  cachedReviews = null
  cacheTimestamp = 0
  
  return NextResponse.json({
    success: true,
    message: 'Cache cleared successfully'
  })
}