import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

interface GameCardProps {
    game: {
        id: number;
        nombre: string;
        imagen: string;
        categoria?: string;
        tamaño?: string;
        rating?: number | string;
        tags?: string[];
    };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    const tags = game.tags && game.tags.length > 0 ? game.tags : (game.categoria ? [game.categoria] : []);

    return (
        <Link to={`/juego/${game.id}`} className="group relative block h-[400px] w-full overflow-hidden rounded-lg bg-bg-secondary border border-white/5 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            {/* Image Container */}
            <div className="absolute inset-0 z-0">
                <ImageWithFallback
                    src={game.imagen}
                    alt={game.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-neon-blue/20 text-neon-blue border border-neon-blue/30 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-pixel leading-tight group-hover:text-neon-blue transition-colors line-clamp-2">
                    {game.nombre}
                </h3>

                <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2">
                    <div className="flex flex-col">
                        <span className="text-xs text-text-secondary uppercase tracking-wider">Rating</span>
                        <div className="flex items-center gap-1 text-neon-yellow">
                            <span>★</span>
                            <span className="font-bold">
                                {typeof game.rating === 'number' ? game.rating.toFixed(1) : (game.rating || 'N/A')}
                            </span>
                        </div>
                    </div>

                    <span className="px-4 py-2 bg-white/10 hover:bg-neon-blue hover:text-black text-white text-xs font-bold rounded transition-all duration-300 backdrop-blur-sm">
                        DESCARGAR
                    </span>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
        </Link>
    );
};

export default GameCard;
