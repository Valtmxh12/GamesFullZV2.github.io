import { useState, useMemo } from 'react';
import { juegosData } from '../data/games';
import SearchAndFilters from '../components/SearchAndFilters';
import GameCard from '../components/GameCard';
import { useSEO } from '../hooks/useSEO';

const JUEGOS_POR_PAGINA = 12;

const Juegos = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  useSEO({
    title: 'Catálogo de Juegos',
    description: 'Explora nuestro catálogo completo de juegos para PC gratis. Encuentra los mejores títulos organizados por categoría.',
  });

  const categories = useMemo(() => {
    return Array.from(new Set(juegosData.map(g => g.categoria))).sort();
  }, []);

  const filteredGames = useMemo(() => {
    let filtered = [...juegosData];

    if (searchQuery) {
      filtered = filtered.filter(game =>
        game.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.categoria.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(game => game.categoria === selectedCategory);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'rating-desc':
          return (a.rating || 0) - (b.rating || 0);
        case 'size':
          const sizeA = parseFloat(a.tamaño.replace(/[^\d.]/g, '')) || 0;
          const sizeB = parseFloat(b.tamaño.replace(/[^\d.]/g, '')) || 0;
          return sizeB - sizeA;
        case 'size-desc':
          const sizeA2 = parseFloat(a.tamaño.replace(/[^\d.]/g, '')) || 0;
          const sizeB2 = parseFloat(b.tamaño.replace(/[^\d.]/g, '')) || 0;
          return sizeA2 - sizeB2;
        case 'name-desc':
          return b.nombre.localeCompare(a.nombre);
        case 'name':
        default:
          return a.nombre.localeCompare(b.nombre);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const totalPaginas = Math.ceil(filteredGames.length / JUEGOS_POR_PAGINA);
  const inicio = (paginaActual - 1) * JUEGOS_POR_PAGINA;
  const fin = inicio + JUEGOS_POR_PAGINA;
  const juegosPagina = filteredGames.slice(inicio, fin);

  useMemo(() => {
    if (paginaActual > totalPaginas && totalPaginas > 0) {
      setPaginaActual(1);
    }
  }, [filteredGames.length, totalPaginas]);

  const cambiarPagina = (nuevaPagina: number) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pixel">
            CATÁLOGO <span className="text-neon-blue">COMPLETO</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explora nuestra colección de juegos optimizados. Utiliza los filtros para encontrar tu próxima aventura.
          </p>
        </div>

        {/* Search & Filters */}
        <SearchAndFilters
          onSearch={setSearchQuery}
          onFilter={setSelectedCategory}
          onSort={setSortBy}
          categories={categories}
          totalResults={filteredGames.length}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {juegosPagina.map((juego) => (
            <GameCard key={juego.id} game={juego} />
          ))}
        </div>

        {/* Pagination */}
        {totalPaginas > 1 && (
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual <= 1}
              className={`w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center transition-all ${paginaActual <= 1
                  ? 'opacity-30 cursor-not-allowed text-text-muted'
                  : 'hover:border-neon-blue hover:text-neon-blue text-white'
                }`}
            >
              ‹
            </button>

            {[...Array(totalPaginas)].map((_, i) => {
              const pagina = i + 1;
              if (
                pagina === 1 ||
                pagina === totalPaginas ||
                (pagina >= paginaActual - 1 && pagina <= paginaActual + 1)
              ) {
                return (
                  <button
                    key={pagina}
                    onClick={() => cambiarPagina(pagina)}
                    className={`w-10 h-10 rounded-lg font-bold transition-all font-pixel text-xs ${paginaActual === pagina
                        ? 'bg-neon-blue text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : 'bg-bg-secondary border border-white/10 text-text-secondary hover:border-white/30 hover:text-white'
                      }`}
                  >
                    {pagina}
                  </button>
                );
              } else if (pagina === paginaActual - 2 || pagina === paginaActual + 2) {
                return <span key={pagina} className="text-text-muted">...</span>;
              }
              return null;
            })}

            <button
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual >= totalPaginas}
              className={`w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center transition-all ${paginaActual >= totalPaginas
                  ? 'opacity-30 cursor-not-allowed text-text-muted'
                  : 'hover:border-neon-blue hover:text-neon-blue text-white'
                }`}
            >
              ›
            </button>
          </div>
        )}

        {filteredGames.length === 0 && (
          <div className="text-center py-20 bg-bg-secondary rounded-2xl border border-white/5">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2 font-pixel">No se encontraron juegos</h3>
            <p className="text-text-secondary">Intenta con otros términos de búsqueda o filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Juegos;
