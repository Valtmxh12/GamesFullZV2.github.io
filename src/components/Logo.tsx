import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
    const sizes = {
        sm: 'h-8',
        md: 'h-12',
        lg: 'h-16',
    };

    return (
        <div className={`flex items-center gap-2 font-pixel select-none ${className}`}>
            <div className={`relative ${sizes[size]} aspect-square flex items-center justify-center`}>
                {/* Pixelated G Shape */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-neon-blue drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                >
                    <path
                        d="M4 4H20V8H16V8H20V20H4V4ZM8 8V16H12V12H16V8H8Z"
                        fill="currentColor"
                        className="animate-pulse-neon"
                    />
                </svg>
                {/* Glitch effect overlay */}
                <div className="absolute inset-0 bg-neon-purple opacity-20 mix-blend-overlay animate-glitch" />
            </div>

            <div className="flex flex-col">
                <span className={`text-white font-bold tracking-tighter leading-none ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-xl' : 'text-3xl'
                    }`}>
                    GAMES
                </span>
                <span className={`text-neon-purple font-bold tracking-widest leading-none ${size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-sm' : 'text-lg'
                    }`}>
                    FULLZ
                </span>
            </div>
        </div>
    );
};

export default Logo;
