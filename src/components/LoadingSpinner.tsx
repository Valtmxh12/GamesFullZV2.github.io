import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-neon-blue/30 border-t-neon-blue rounded-full mx-auto mb-4"
        />
        <p className="text-text-secondary font-pixel">Cargando...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

