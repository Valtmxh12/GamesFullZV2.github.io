import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-bg-secondary border-2 border-neon-blue/50 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.3)] pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="bg-bg-tertiary border-b border-white/10 px-8 py-6 flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-white font-pixel">{title}</h2>
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-lg bg-bg border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-neon-blue transition-all hover:rotate-90 duration-300"
                                    aria-label="Cerrar"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Content */}
                            <div className="px-8 py-6 overflow-y-auto max-h-[calc(80vh-100px)] custom-scrollbar">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
