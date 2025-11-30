import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchGames } from '../data/games';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      const searchResults = searchGames(query).slice(0, 5);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (gameId: number) => {
    navigate(`/juego/${gameId}`);
    setQuery('');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      handleSelect(results[0].id);
    } else if (query.length > 0) {
      navigate(`/juegos?search=${encodeURIComponent(query)}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar juegos..."
          className="w-64 px-4 py-2 pl-10 bg-bg-secondary border border-white/10 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all font-pixel text-xs"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-64 bg-bg-secondary border border-white/10 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.map((game) => (
            <button
              key={game.id}
              onClick={() => handleSelect(game.id)}
              className="w-full px-4 py-3 text-left hover:bg-bg-tertiary transition-colors border-b border-white/5 last:border-b-0 flex items-center gap-3"
            >
              <img
                src={game.imagen}
                alt={game.nombre}
                className="w-12 h-16 object-cover rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-game.jpg';
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm truncate">{game.nombre}</p>
                <p className="text-text-secondary text-xs truncate">{game.categoria}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

