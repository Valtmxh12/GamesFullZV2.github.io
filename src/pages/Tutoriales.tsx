import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tutoriales: React.FC = () => {
    const [selectedTutorial, setSelectedTutorial] = useState<string | null>(null);

    const tutorial = {
        id: 'download-guide',
        title: 'Cómo Descargar Juegos',
        description: 'Guía completa paso a paso para descargar e instalar juegos desde GamesFullZ',
        duration: '5 min',
        difficulty: 'Fácil',
        thumbnail: '',
        videoUrl: '', // Placeholder - you'll add the video URL later
        steps: [
            {
                number: 1,
                title: 'Encuentra tu juego',
                description: 'Navega por el catálogo o usa la búsqueda para encontrar el juego que deseas.',
            },
            {
                number: 2,
                title: 'Verifica los requisitos',
                description: 'Revisa los requisitos mínimos y recomendados para asegurarte de que tu PC puede correr el juego.',
            },
            {
                number: 3,
                title: 'Haz clic en Descargar',
                description: 'Presiona el botón de descarga y espera a que se complete. Los archivos están comprimidos para mayor velocidad.',
            },
            {
                number: 4,
                title: 'Extrae los archivos',
                description: 'Usa WinRAR o 7-Zip para extraer los archivos del juego en una carpeta de tu elección.',
            },
            {
                number: 5,
                title: 'Ejecuta el instalador',
                description: 'Busca el archivo setup.exe o install.exe y sigue las instrucciones en pantalla.',
            },
            {
                number: 6,
                title: '¡A jugar!',
                description: 'Una vez instalado, busca el acceso directo en tu escritorio o menú de inicio y disfruta.',
            },
        ],
    };

    return (
        <div className="min-h-screen py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-pixel mb-6">
                        TUTORIALES <span className="text-neon-purple">📚</span>
                    </h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Aprende todo lo que necesitas saber para descargar, instalar y optimizar tus juegos.
                    </p>
                </motion.div>

                {/* Tutorial Card */}
                {!selectedTutorial && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setSelectedTutorial(tutorial.id)}
                        className="group relative bg-bg-secondary border-2 border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-neon-purple/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(189,0,255,0.3)] hover:-translate-y-2"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-80 overflow-hidden bg-bg-tertiary flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-8xl mb-4">📚</div>
                                <h3 className="text-2xl font-bold text-white font-pixel mb-2">
                                    PRÓXIMAMENTE
                                </h3>
                                <p className="text-text-secondary">
                                    Estamos preparando contenido de calidad para ti
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent" />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-neon-purple/20 border-2 border-neon-purple flex items-center justify-center group-hover:scale-110 group-hover:bg-neon-purple/30 transition-all duration-300 backdrop-blur-sm">
                                    <div className="text-neon-purple text-3xl ml-1">▶</div>
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/50 text-neon-purple rounded-full text-xs font-bold backdrop-blur-sm">
                                    {tutorial.duration}
                                </span>
                                <span className="px-3 py-1 bg-neon-green/20 border border-neon-green/50 text-neon-green rounded-full text-xs font-bold backdrop-blur-sm">
                                    {tutorial.difficulty}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white font-pixel mb-3 group-hover:text-neon-purple transition-colors">
                                {tutorial.title}
                            </h2>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                {tutorial.description}
                            </p>

                            {/* Steps Preview */}
                            <div className="flex items-center gap-2 text-sm text-text-muted">
                                <span className="font-bold text-neon-purple">{tutorial.steps.length} pasos</span>
                                <span>•</span>
                                <span>Incluye video explicativo</span>
                            </div>

                            {/* CTA */}
                            <div className="mt-6 flex items-center gap-2 text-neon-purple font-pixel text-xs group-hover:gap-4 transition-all">
                                VER TUTORIAL <span>→</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Tutorial Modal/View */}
                <AnimatePresence>
                    {selectedTutorial && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
                        >
                            <div className="min-h-screen py-12 px-4">
                                <div className="container mx-auto max-w-5xl">
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setSelectedTutorial(null)}
                                        className="mb-6 flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
                                    >
                                        ← Volver a tutoriales
                                    </button>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-bg-secondary border-2 border-neon-purple/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(189,0,255,0.3)]"
                                    >
                                        {/* Video Section */}
                                        <div className="relative bg-black aspect-video">
                                            {tutorial.videoUrl ? (
                                                <iframe
                                                    src={tutorial.videoUrl}
                                                    className="w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                                                    <div className="w-24 h-24 rounded-full bg-neon-purple/20 border-2 border-neon-purple flex items-center justify-center mb-6">
                                                        <div className="text-neon-purple text-4xl font-bold">VID</div>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white font-pixel mb-3">
                                                        VIDEO PRÓXIMAMENTE
                                                    </h3>
                                                    <p className="text-text-secondary max-w-md">
                                                        Estamos preparando el video tutorial. Por ahora, puedes seguir los pasos escritos a continuación.
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-8">
                                            <div className="flex items-start justify-between mb-6">
                                                <div>
                                                    <h2 className="text-3xl font-bold text-white font-pixel mb-2">
                                                        {tutorial.title}
                                                    </h2>
                                                    <p className="text-text-secondary">
                                                        {tutorial.description}
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/50 text-neon-purple rounded-full text-xs font-bold whitespace-nowrap">
                                                        {tutorial.duration}
                                                    </span>
                                                    <span className="px-3 py-1 bg-neon-green/20 border border-neon-green/50 text-neon-green rounded-full text-xs font-bold whitespace-nowrap">
                                                        {tutorial.difficulty}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Steps */}
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-white font-pixel mb-6 flex items-center gap-3">
                                                    <span className="text-neon-purple">#</span> PASOS A SEGUIR
                                                </h3>

                                                {tutorial.steps.map((step, index) => (
                                                    <motion.div
                                                        key={step.number}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="flex gap-6 group"
                                                    >
                                                        {/* Step Number */}
                                                        <div className="flex-shrink-0">
                                                            <div className="w-12 h-12 rounded-full bg-neon-purple/20 border-2 border-neon-purple flex items-center justify-center font-bold text-neon-purple group-hover:scale-110 transition-transform">
                                                                {step.number}
                                                            </div>
                                                        </div>

                                                        {/* Step Content */}
                                                        <div className="flex-1 pb-6 border-b border-white/5 last:border-0">
                                                            <h4 className="text-lg font-bold text-white mb-2">
                                                                {step.title}
                                                            </h4>
                                                            <p className="text-text-secondary leading-relaxed">
                                                                {step.description}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Tips Section */}
                                            <div className="mt-12 bg-bg-tertiary border border-neon-blue/30 rounded-xl p-6">
                                                <h4 className="text-lg font-bold text-neon-blue mb-3 flex items-center gap-2">
                                                    Consejos Adicionales
                                                </h4>
                                                <ul className="space-y-2 text-text-secondary text-sm">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-neon-blue mt-1">•</span>
                                                        <span>Asegúrate de tener suficiente espacio en disco antes de descargar</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-neon-blue mt-1">•</span>
                                                        <span>Desactiva temporalmente tu antivirus si marca falsos positivos</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-neon-blue mt-1">•</span>
                                                        <span>Lee el archivo README.txt incluido para instrucciones específicas</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-neon-blue mt-1">•</span>
                                                        <span>Si tienes problemas, contacta a soporte usando el formulario de contacto</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Tutoriales;
