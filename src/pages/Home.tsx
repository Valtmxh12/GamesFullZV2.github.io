import React, { useState } from 'react';
import Hero from '../components/Hero';
import Modal from '../components/Modal';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const infoCards = [
    {
      id: 'sobre-mi',
      title: 'Sobre Mí',
      icon: '👤',
      color: 'neon-blue',
      description: 'Conoce al creador',
      content: (
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            ¡Hola! Soy un apasionado gamer y desarrollador web que decidió crear este espacio para compartir
            mi amor por los videojuegos con la comunidad.
          </p>
          <p>
            Después de años buscando juegos optimizados y confiables, decidí crear <span className="text-neon-blue font-bold">GamesFullZ</span>
            - un lugar donde los gamers pueden encontrar títulos de calidad sin complicaciones.
          </p>
          <p>
            Mi misión es simple: proporcionar acceso a los mejores juegos de PC con descargas seguras,
            rápidas y sin publicidad invasiva. Cada juego es verificado personalmente para garantizar
            la mejor experiencia posible.
          </p>
          <p className="text-white font-bold">
            ¿Tienes sugerencias o quieres reportar un problema? No dudes en contactarme.
          </p>
        </div>
      )
    },
    {
      id: 'sobre-web',
      title: 'Sobre la Web',
      icon: '🌐',
      color: 'neon-purple',
      description: 'Nuestra misión',
      content: (
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <h3 className="text-xl font-bold text-white mb-3">¿Qué es GamesFullZ?</h3>
          <p>
            GamesFullZ es tu destino definitivo para descargar juegos de PC optimizados y verificados.
            Nos enfocamos en proporcionar una experiencia premium sin las molestias típicas de otros sitios.
          </p>

          <h3 className="text-xl font-bold text-white mb-3 mt-6">Características Principales</h3>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-3">
              <span className="text-neon-green text-xl">✓</span>
              <span><strong className="text-white">Descargas Verificadas:</strong> Todos los juegos son probados antes de publicarse</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-green text-xl">✓</span>
              <span><strong className="text-white">Sin Virus:</strong> Escaneamos cada archivo para tu seguridad</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-green text-xl">✓</span>
              <span><strong className="text-white">Velocidad Máxima:</strong> Servidores premium para descargas rápidas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-neon-green text-xl">✓</span>
              <span><strong className="text-white">Actualizaciones Constantes:</strong> Nuevos juegos cada semana</span>
            </li>
          </ul>

          <p className="mt-6 text-white">
            Nuestro objetivo es crear la mejor comunidad de gaming en español.
          </p>
        </div>
      )
    },
    {
      id: 'legal',
      title: 'Legal',
      icon: '',
      color: 'neon-green',
      description: 'Términos y privacidad',
      content: (
        <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
          <h3 className="text-xl font-bold text-white mb-3">Aviso Legal</h3>
          <p>
            <strong className="text-white">GamesFullZ</strong> es un sitio web informativo que proporciona enlaces
            a contenido disponible públicamente en Internet. No alojamos ningún archivo en nuestros servidores.
          </p>

          <h3 className="text-lg font-bold text-white mb-2 mt-6">Descargo de Responsabilidad</h3>
          <p>
            Todo el contenido compartido en este sitio es propiedad de sus respectivos dueños.
            No nos hacemos responsables del uso que los usuarios den a los archivos descargados.
          </p>

          <h3 className="text-lg font-bold text-white mb-2 mt-6">DMCA</h3>
          <p>
            Si eres propietario de derechos de autor y consideras que tu contenido está siendo utilizado
            sin autorización, por favor contáctanos a <a href="mailto:gsrtitk@gmail.com" className="text-neon-blue hover:underline">gsrtitk@gmail.com</a>
            {' '}y removeremos el contenido de inmediato.
          </p>

          <h3 className="text-lg font-bold text-white mb-2 mt-6">Privacidad</h3>
          <p>
            No recopilamos información personal de nuestros usuarios. Utilizamos cookies básicas
            para mejorar la experiencia de navegación. No compartimos datos con terceros.
          </p>

          <h3 className="text-lg font-bold text-white mb-2 mt-6">Uso del Sitio</h3>
          <p>
            Al utilizar GamesFullZ, aceptas que:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Eres mayor de edad en tu país</li>
            <li>Usarás el contenido de manera responsable</li>
            <li>No redistribuirás el contenido con fines comerciales</li>
            <li>Respetarás los derechos de autor de los creadores</li>
          </ul>

          <p className="mt-6 text-xs text-text-muted italic">
            Última actualización: Noviembre 2025
          </p>
        </div>
      )
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Carlos M.',
      avatar: 'CM',
      date: 'Hace 2 días',
      rating: 5,
      text: 'Increíble sitio! Llevo meses descargando juegos y nunca he tenido problemas. Las descargas son súper rápidas y todo funciona perfecto. 100% recomendado.'
    },
    {
      id: 2,
      name: 'Ana Rodríguez',
      avatar: 'AR',
      date: 'Hace 5 días',
      rating: 5,
      text: 'Finalmente un sitio sin publicidad invasiva y con juegos que realmente funcionan. La interfaz es hermosa y muy fácil de usar.'
    },
    {
      id: 3,
      name: 'Miguel Torres',
      avatar: 'MT',
      date: 'Hace 1 semana',
      rating: 5,
      text: 'Descargué GTA V y funcionó a la primera. Sin virus, sin problemas. Este es mi nuevo sitio favorito para juegos de PC.'
    },
    {
      id: 4,
      name: 'Laura Sánchez',
      avatar: 'LS',
      date: 'Hace 1 semana',
      rating: 4,
      text: 'Muy buen sitio, descargas rápidas y juegos actualizados. Solo le faltaría más variedad de juegos indie, pero por lo demás perfecto.'
    },
    {
      id: 5,
      name: 'David Gómez',
      avatar: 'DG',
      date: 'Hace 2 semanas',
      rating: 5,
      text: 'La mejor página de juegos que he encontrado. Todo está bien organizado y los requisitos del sistema son precisos. Gracias!'
    },
    {
      id: 6,
      name: 'Sofia Martínez',
      avatar: 'SM',
      date: 'Hace 2 semanas',
      rating: 5,
      text: 'Excelente! He probado varios juegos y todos funcionan perfecto. El diseño del sitio es moderno y la navegación es muy intuitiva.'
    }
  ];

  return (
    <div className="animate-fade-in">
      <Hero />

      {/* Info Cards Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-pixel mb-4">
              INFORMACIÓN <span className="text-neon-purple">IMPORTANTE</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Conoce más sobre nosotros, nuestra misión y nuestras políticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveModal(card.id)}
                className={`group relative bg-bg-secondary border-2 border-white/10 rounded-2xl p-8 cursor-pointer hover:border-${card.color}/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white font-pixel mb-3 group-hover:text-neon-blue transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6">
                  {card.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-neon-blue font-pixel text-xs group-hover:gap-4 transition-all">
                  LEER MÁS <span>→</span>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${card.color}/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {infoCards.map((card) => (
        <Modal
          key={card.id}
          isOpen={activeModal === card.id}
          onClose={() => setActiveModal(null)}
          title={card.title}
        >
          {card.content}
        </Modal>
      ))}

      {/* Features Banner */}
      <section className="py-20 bg-bg-secondary border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-blue/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-6 bg-bg-tertiary rounded-2xl flex items-center justify-center text-3xl border border-white/10 group-hover:border-neon-green group-hover:shadow-[0_0_20px_rgba(0,255,148,0.3)] transition-all duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-pixel">DESCARGAS RÁPIDAS</h3>
              <p className="text-text-secondary">
                Servidores premium para velocidades de descarga máximas sin límites.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-6 bg-bg-tertiary rounded-2xl flex items-center justify-center text-3xl border border-white/10 group-hover:border-neon-purple group-hover:shadow-[0_0_20px_rgba(189,0,255,0.3)] transition-all duration-300">
                SEGURO
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-pixel">100% SEGURO</h3>
              <p className="text-text-secondary">
                Todos los archivos son verificados y escaneados antes de publicarse.
              </p>
            </div>
            <div className="group">
              <div className="w-16 h-16 mx-auto mb-6 bg-bg-tertiary rounded-2xl flex items-center justify-center text-3xl border border-white/10 group-hover:border-neon-blue group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
                JUEGOS
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-pixel">CATÁLOGO PREMIUM</h3>
              <p className="text-text-secondary">
                Miles de juegos actualizados constantemente con los últimos lanzamientos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-pixel mb-12 text-center">
            OPINIONES <span className="text-neon-green">REALES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="bg-bg-secondary border border-white/10 rounded-xl p-6 hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-blue/20 border-2 border-neon-blue/50 flex items-center justify-center font-bold text-neon-blue">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-text-muted">{testimonial.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'text-retro-yellow' : 'text-text-muted'}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
