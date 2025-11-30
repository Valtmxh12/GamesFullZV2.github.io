import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Tu destino definitivo para los mejores juegos de PC. Experiencia premium, descargas seguras y la mejor comunidad.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {['Twitter', 'Discord', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-bg-tertiary border border-white/10 flex items-center justify-center text-text-secondary hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  aria-label={social}
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-pixel text-xs text-white mb-6 uppercase tracking-widest">Explorar</h3>
            <ul className="space-y-3">
              {['Inicio', 'Juegos', 'Tutoriales', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-text-secondary hover:text-neon-green transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-neon-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-pixel text-xs text-white mb-6 uppercase tracking-widest">Soporte</h3>
            <ul className="space-y-3">
              {['FAQ', 'Contacto', 'Reportar Error', 'DMCA'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-text-secondary hover:text-neon-purple transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-pixel text-xs text-white mb-6 uppercase tracking-widest">Contacto</h3>
            <p className="text-text-secondary text-sm mb-4">
              ¿Tienes alguna pregunta o sugerencia? Escríbeme directamente.
            </p>
            <a
              href="mailto:gsrtitk@gmail.com"
              className="flex items-center gap-3 bg-bg-tertiary border border-white/10 rounded-lg px-4 py-3 text-sm text-white hover:border-neon-blue/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 group"
            >
              <span className="text-neon-blue text-xl group-hover:scale-110 transition-transform">✉</span>
              <span className="group-hover:text-neon-blue transition-colors">gsrtitk@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © {currentYear} GamesFullZ. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <Link to="/" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/" className="hover:text-white transition-colors">Términos</Link>
            <Link to="/" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
