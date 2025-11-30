# GamesFullZ V2.0

Plataforma web moderna para descubrir y descargar los mejores juegos para PC gratis. Diseñada con un estilo futurista neon, animaciones épicas y optimizada para rendimiento.

## Características Principales

- **Animación de Introducción**: 25 segundos de animación cinematográfica con efectos RGB y partículas
- **128+ Juegos**: Catálogo completo con información detallada de cada juego
- **Búsqueda y Filtros**: Sistema avanzado de búsqueda y filtrado por categoría
- **100% Responsive**: Diseño adaptativo para todos los dispositivos
- **Optimizado para Rendimiento**: Code splitting, lazy loading, 60 FPS
- **Diseño Neon Futurista**: Efectos RGB, animaciones suaves, tema oscuro premium
- **Formulario de Contacto Funcional**: Integrado con EmailJS para envío de emails
- **SEO Avanzado**: Meta tags dinámicos, Open Graph, Schema.org, Sitemap.xml
- **Manejo de Errores**: Página 404 personalizada, fallbacks para imágenes

## Tecnologías

- **React 18** - Framework de UI moderno
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Estilos utility-first con tema personalizado
- **Framer Motion** - Animaciones avanzadas y fluidas
- **React Router** - Navegación SPA con code splitting
- **Vite** - Build tool ultra rápida
- **EmailJS** - Envío de emails desde el cliente

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/GamesFullZ-V2.git
cd GamesFullZ-V2

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de EmailJS

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Configurar EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email (Gmail recomendado)
3. Crea un template de email con estos campos:
   - `from_name`
   - `from_email`
   - `to_email` (tu email)
   - `subject`
   - `message`
   - `reply_to`
4. Obtén tus credenciales y agrégalas al `.env`

Para más detalles, consulta `GUIA_EMAILJS.md`.

## Estructura del Proyecto

```
GamesFullZ-V2/
├── IMAGES/                  # Imágenes de juegos (raíz)
├── public/
│   ├── images/
│   │   └── placeholder-game.jpg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── IntroAnimation.tsx
│   │   ├── GameCard.tsx
│   │   ├── ImageWithFallback.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/              # Páginas principales
│   │   ├── Home.tsx
│   │   ├── Juegos.tsx
│   │   ├── DetalleJuego.tsx
│   │   ├── Contacto.tsx
│   │   ├── Tutoriales.tsx
│   │   ├── Packs.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   └── games.ts        # Datos de 128 juegos
│   ├── hooks/
│   │   └── useSEO.ts       # Hook para SEO dinámico
│   ├── types/
│   │   └── game.ts         # Tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── scripts/
│   └── generate-sitemap.js # Generador de sitemap
├── CHANGELOG.md
├── DEPLOYMENT.md
├── GUIA_EMAILJS.md
├── env.example
└── README.md
```

## Características Técnicas

### Performance

- Code splitting automático con React.lazy
- Lazy loading de imágenes
- Optimización de animaciones a 60 FPS
- Reducción de re-renders innecesarios

### SEO

- Meta tags dinámicos por página
- Open Graph tags para redes sociales
- Schema.org JSON-LD para juegos
- Sitemap.xml generado automáticamente
- URLs amigables y semánticas

### UX/UI

- Animaciones fluidas con Framer Motion
- Efectos hover interactivos
- Loading states y error boundaries
- Placeholders para imágenes faltantes
- Página 404 personalizada

## Deployment

Consulta la guía completa en [DEPLOYMENT.md](./DEPLOYMENT.md)

### Opciones Recomendadas:

- **Vercel** (Más fácil) - `vercel`
- **Netlify** (Drag & drop) - Arrastra carpeta `dist/`
- **GitHub Pages** (Gratis) - `npm run deploy`
- **Cloudflare Pages** (CDN global)

## Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linter
```

## Imágenes

Las imágenes de los juegos deben estar en `IMAGES/` (raíz del proyecto). Las rutas en `games.ts` deben apuntar a `/IMAGES/nombre-imagen.jpg`.

Si una imagen no existe, se mostrará automáticamente un placeholder desde `public/images/placeholder-game.jpg`.

## Personalización

### Colores Neon

Edita `tailwind.config.js` para cambiar los colores:
- `neon-blue`: #00F0FF
- `neon-purple`: #BD00FF
- `neon-green`: #00FF94
- `neon-pink`: #FF0055

### Agregar Juegos

1. Agrega el juego a `src/data/games.ts`
2. Coloca la imagen en `public/IMAGES/`
3. Regenera el sitemap: `node scripts/generate-sitemap.js`

## Troubleshooting

### Ver la animación de introducción de nuevo

La animación solo se muestra la primera vez. Para verla de nuevo:

1. Abre la consola del navegador (F12)
2. Ejecuta: `localStorage.removeItem('intro_seen')`
3. Recarga la página (F5)

O abre una ventana de incógnito (Ctrl+Shift+N).

### Las imágenes no cargan

- Verifica que las imágenes estén en `public/IMAGES/`
- Verifica las rutas en `games.ts` (deben empezar con `/IMAGES/`)

### El formulario no envía emails

- Verifica las variables de entorno en `.env`
- Verifica que el template de EmailJS tenga los campos correctos
- Revisa la consola del navegador para errores
- Consulta `GUIA_EMAILJS.md` para configuración detallada

### Las rutas no funcionan en producción

- Configura redirects según tu hosting (ver DEPLOYMENT.md)

## Licencia

Este proyecto es de código abierto. Ver archivo LICENSE para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Contacto

- Email: gsrtitk@gmail.com
- Web: [GamesFullZ](https://gamesfullz.com)

## Roadmap

- [ ] Sistema de favoritos
- [ ] Comentarios en tiempo real
- [ ] Sistema de ratings mejorado
- [ ] Modo oscuro/claro
- [ ] PWA (Progressive Web App)
- [ ] Integración con API
