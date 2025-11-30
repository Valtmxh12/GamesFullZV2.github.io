import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  gameData?: {
    nombre: string
    rating?: number
    categoria?: string
    tamaño?: string
    lanzamiento?: string
  }
}

export const useSEO = ({ 
  title, 
  description, 
  image = '/images/og-default.jpg',
  url = window.location.href,
  type = 'website',
  gameData
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = `${title} - GamesForPC V2`
    
    // Título
    document.title = fullTitle
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', `juegos pc, juegos gratis, ${title.toLowerCase()}, descargar juegos`)

    // Open Graph - Title
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', fullTitle)
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle)
    }

    // Open Graph - Description
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', description)
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription)
    }

    // Open Graph - Image
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta')
    ogImage.setAttribute('property', 'og:image')
    ogImage.setAttribute('content', image.startsWith('http') ? image : `${window.location.origin}${image}`)
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImage)
    }

    // Open Graph - URL
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.setAttribute('content', url)
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl)
    }

    // Open Graph - Type
    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta')
    ogType.setAttribute('property', 'og:type')
    ogType.setAttribute('content', type)
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType)
    }

    // Twitter Card
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta')
    twitterCard.setAttribute('name', 'twitter:card')
    twitterCard.setAttribute('content', 'summary_large_image')
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard)
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta')
    twitterTitle.setAttribute('name', 'twitter:title')
    twitterTitle.setAttribute('content', fullTitle)
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta')
    twitterDescription.setAttribute('name', 'twitter:description')
    twitterDescription.setAttribute('content', description)
    if (!document.querySelector('meta[name="twitter:description"]')) {
      document.head.appendChild(twitterDescription)
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]') || document.createElement('meta')
    twitterImage.setAttribute('name', 'twitter:image')
    twitterImage.setAttribute('content', image.startsWith('http') ? image : `${window.location.origin}${image}`)
    if (!document.querySelector('meta[name="twitter:image"]')) {
      document.head.appendChild(twitterImage)
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.href = url

    // Schema.org JSON-LD for games
    if (gameData && type === 'article') {
      let schemaScript = document.querySelector('script[type="application/ld+json"][data-game-schema]')
      if (!schemaScript) {
        schemaScript = document.createElement('script')
        schemaScript.setAttribute('type', 'application/ld+json')
        schemaScript.setAttribute('data-game-schema', 'true')
        document.head.appendChild(schemaScript)
      }
      
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'VideoGame',
        name: gameData.nombre,
        description: description,
        image: image.startsWith('http') ? image : `${window.location.origin}${image}`,
        url: url,
        ...(gameData.rating && {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: gameData.rating,
            ratingCount: 1,
            bestRating: 5,
            worstRating: 1
          }
        }),
        ...(gameData.categoria && { genre: gameData.categoria }),
        ...(gameData.lanzamiento && { datePublished: gameData.lanzamiento }),
        applicationCategory: 'Game',
        operatingSystem: 'Windows',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      }
      
      schemaScript.textContent = JSON.stringify(schema)
    } else {
      // Remove game schema if not a game page
      const existingSchema = document.querySelector('script[type="application/ld+json"][data-game-schema]')
      if (existingSchema) {
        existingSchema.remove()
      }
    }

  }, [title, description, image, url, type, gameData])
}

