import React from 'react';
import { Link } from 'react-router-dom';

const Packs: React.FC = () => {
    return (
        <div className="min-h-screen py-24 px-4 flex items-center justify-center">
            <div className="text-center max-w-2xl">
                <div className="text-6xl mb-6 font-bold text-neon-green">PACKS</div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-pixel text-white">
                    PACKS DE <span className="text-neon-green">OPTIMIZACIÓN</span>
                </h1>
                <p className="text-text-secondary text-xl mb-12 leading-relaxed">
                    Estamos preparando una colección de herramientas y configuraciones para llevar tu PC al límite.
                    Pronto podrás descargar packs pre-configurados para FPS, Latencia y Calidad Visual.
                </p>
                <Link
                    to="/"
                    className="inline-block px-8 py-4 bg-bg-secondary border border-white/10 text-white font-pixel text-sm hover:border-neon-green hover:text-neon-green transition-all rounded-lg"
                >
                    VOLVER AL INICIO
                </Link>
            </div>
        </div>
    );
};

export default Packs;
