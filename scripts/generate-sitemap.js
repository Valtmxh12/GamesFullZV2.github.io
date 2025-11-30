// Script to generate sitemap.xml from games data
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gamesPath = join(__dirname, '../src/data/games.ts');
const gamesContent = readFileSync(gamesPath, 'utf-8');

// Extract game IDs from games array (simple regex match)
const gameIdMatches = gamesContent.match(/id:\s*(\d+)/g) || [];
const gameIds = gameIdMatches.map(match => parseInt(match.match(/\d+/)[0]));

const baseUrl = 'https://gamesfullz.com'; // Update with your actual domain
const currentDate = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/juegos</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/contacto</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/tutoriales</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Game Pages -->
`;

gameIds.forEach(id => {
  sitemap += `  <url>
    <loc>${baseUrl}/juego/${id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemap += `</urlset>`;

const sitemapPath = join(__dirname, '../public/sitemap.xml');
writeFileSync(sitemapPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generado con ${gameIds.length} juegos en ${sitemapPath}`);

