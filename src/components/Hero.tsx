import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-bg/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
                    alt="Gaming Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                {/* Glitch Text Effect */}
                <h1 className="text-4xl md:text-7xl font-bold mb-6 relative inline-block group">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-text-secondary">
                        NEXT LEVEL
                    </span>
                    <span className="block text-neon-blue text-5xl md:text-8xl mt-2 animate-pulse-neon drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                        GAMING
                    </span>

                    {/* Decorative Glitch Elements */}
                    <span className="absolute top-0 left-0 -ml-1 text-neon-purple opacity-0 group-hover:opacity-50 animate-glitch">NEXT LEVEL</span>
                    <span className="absolute top-0 left-0 ml-1 text-neon-green opacity-0 group-hover:opacity-50 animate-glitch" style={{ animationDirection: 'reverse' }}>NEXT LEVEL</span>
                </h1>

                <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Descubre la colección más premium de juegos optimizados.
                    <span className="text-neon-purple"> Sin virus.</span>
                    <span className="text-neon-green"> Sin esperas.</span>
                    <span className="text-neon-blue"> Solo gaming.</span>
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Link
                        to="/juegos"
                        className="group relative px-8 py-4 bg-neon-blue text-black font-pixel text-sm font-bold tracking-wider hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                    >
                        <span className="relative z-10">EXPLORAR JUEGOS</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>

                    <Link
                        to="/tutoriales"
                        className="px-8 py-4 border border-white/20 text-white font-pixel text-sm font-bold tracking-wider hover:bg-white/5 hover:border-neon-purple hover:text-neon-purple transition-all duration-300 backdrop-blur-sm"
                    >
                        VER TUTORIALES
                    </Link>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/2 -left-20 w-40 h-40 bg-neon-purple/20 rounded-full blur-[50px] animate-float" />
                <div className="absolute bottom-0 -right-20 w-60 h-60 bg-neon-blue/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
