import { useState } from 'react';

interface SearchAndFiltersProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
  onSort: (sortBy: string) => void;
  categories: string[];
  totalResults: number;
}

const SearchAndFilters = ({ onSearch, onFilter, onSort, categories, totalResults }: SearchAndFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    onFilter(category);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
    onSort(sort);
  };

  return (
    <div className="mb-8 space-y-4 animate-fade-in">
      {/* Search */}
      <div className="relative group">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar juegos..."
          className="w-full px-6 py-4 pl-14 bg-bg-secondary border border-white/10 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all font-pixel text-xs tracking-wider"
        />
        <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-text-secondary group-focus-within:text-neon-blue transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        {searchQuery && (
          <button
            onClick={() => handleSearch('')}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-white transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-auto flex-1 min-w-[200px]">
          <select
            value={selectedCategory}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-text-secondary focus:outline-none focus:border-neon-purple focus:text-white transition-all appearance-none cursor-pointer hover:border-white/20"
          >
            <option value="all">Todas las categorías</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-auto flex-1 min-w-[200px]">
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-text-secondary focus:outline-none focus:border-neon-green focus:text-white transition-all appearance-none cursor-pointer hover:border-white/20"
          >
            <option value="name">Nombre A-Z</option>
            <option value="name-desc">Nombre Z-A</option>
            <option value="rating">Rating (Mayor)</option>
            <option value="rating-desc">Rating (Menor)</option>
            <option value="size">Tamaño (Mayor)</option>
            <option value="size-desc">Tamaño (Menor)</option>
          </select>
        </div>

        <div className="w-full md:w-auto text-sm text-text-muted font-pixel text-xs text-right">
          <span className="text-neon-blue">{totalResults}</span> RESULTADOS
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
