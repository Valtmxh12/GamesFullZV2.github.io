export interface Game {
  id: number
  nombre: string
  imagen: string
  tamaño: string
  categoria: string
  descripcion?: string
  rating?: number
  ratingCount?: number
  gameplay?: number
  graficos?: number
  historia?: number
  tags?: string[]
  lanzamiento?: string
  actualizacion?: string
  version?: string
  release?: string
  crack?: string
  audios?: string
  textos?: string
  dlcs?: boolean
  requisitosMinimos?: Requisitos
  requisitosRecomendados?: Requisitos
  views?: number
  downloads?: number
  reseñas?: Reseña[]
}

export interface Requisitos {
  so: string
  procesador: string
  memoria: string
  graficos: string
  directx: string
  disco: string
}

export interface Reseña {
  usuario: string
  fecha: string
  gameplay: number | null
  graficos: number | null
  historia: number | null
  comentario: string
}

