import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Juegos', path: '/juegos' },
    { name: 'Tutoriales', path: '/tutoriales' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="relative z-50">
          <Logo size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${isActive ? 'text-neon-blue' : 'text-text-secondary hover:text-white'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse-neon" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Search & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <SearchBar />
          <button className="bg-neon-purple/10 border border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-white px-4 py-2 rounded-md font-pixel text-[10px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(189,0,255,0.4)]">
            LOGIN
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`} />
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1.5'}`} />
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-pixel text-xl text-white hover:text-neon-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-8">
            <button className="bg-neon-purple/10 border border-neon-purple/50 text-neon-purple px-8 py-3 rounded-md font-pixel text-xs">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
