import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-bg">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Text with Glitch Effect */}
          <motion.h1
            className="text-9xl md:text-[12rem] font-black text-white font-pixel mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(0,240,255,0.5)',
                '0 0 40px rgba(189,0,255,0.8)',
                '0 0 20px rgba(0,240,255,0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: 'linear-gradient(45deg, #00F0FF, #BD00FF, #00FF94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white font-pixel mb-6"
          >
            PÁGINA NO ENCONTRADA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-lg mb-8"
          >
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="px-8 py-4 bg-neon-blue text-black font-bold font-pixel rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
            >
              IR AL INICIO
            </Link>
            <Link
              to="/juegos"
              className="px-8 py-4 bg-bg-secondary border-2 border-neon-purple text-neon-purple font-bold font-pixel rounded-lg hover:bg-neon-purple hover:text-black hover:shadow-[0_0_30px_rgba(189,0,255,0.4)] transition-all"
            >
              VER JUEGOS
            </Link>
          </motion.div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-neon-blue"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

