import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

type FormType = 'error' | 'question' | 'business' | 'casual';

interface FormData {
    type: FormType;
    // Common fields
    name: string;
    email: string;
    // Error report fields
    gameName?: string;
    errorType?: string;
    screenshot?: File | null;
    // Question fields
    topic?: string;
    urgency?: string;
    // Business fields
    company?: string;
    proposalType?: string;
    budget?: string;
    // Common
    message: string;
}

const Contacto: React.FC = () => {
    const [selectedType, setSelectedType] = useState<FormType | null>(null);
    const [formData, setFormData] = useState<FormData>({
        type: 'error',
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const formTypes = [
        {
            id: 'error' as FormType,
            icon: '',
            title: 'Reportar Error',
            description: 'Encontraste un problema con un juego o el sitio',
            color: 'neon-pink',
        },
        {
            id: 'question' as FormType,
            icon: '',
            title: 'Pregunta General',
            description: 'Tienes dudas sobre descargas o el sitio',
            color: 'neon-blue',
        },
        {
            id: 'business' as FormType,
            icon: '',
            title: 'Negocios',
            description: 'Propuestas de colaboración o patrocinio',
            color: 'neon-purple',
        },
        {
            id: 'casual' as FormType,
            icon: '',
            title: 'Conversación',
            description: 'Solo quieres charlar o dar feedback',
            color: 'neon-green',
        },
    ];

    const handleTypeSelect = (type: FormType) => {
        setSelectedType(type);
        setFormData({ ...formData, type });
        setErrors({});
    };

    const handleInputChange = (field: string, value: string | File | null) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' });
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (selectedType === 'error') {
            if (!formData.gameName?.trim()) newErrors.gameName = 'El nombre del juego es requerido';
            if (!formData.errorType) newErrors.errorType = 'Selecciona el tipo de error';
        }

        if (selectedType === 'question') {
            if (!formData.topic) newErrors.topic = 'Selecciona un tema';
        }

        if (selectedType === 'business') {
            if (!formData.company?.trim()) newErrors.company = 'El nombre de la empresa es requerido';
            if (!formData.proposalType) newErrors.proposalType = 'Selecciona el tipo de propuesta';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        } else if (formData.message.length < 20) {
            newErrors.message = 'El mensaje debe tener al menos 20 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Configuración de EmailJS - Reemplaza estos valores con los tuyos
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_gamesfullz';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_gamesfullz';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            // Preparar el mensaje según el tipo
            let emailMessage = `Tipo de contacto: ${formTypes.find(t => t.id === selectedType)?.title}\n\n`;
            emailMessage += `Nombre: ${formData.name}\n`;
            emailMessage += `Email: ${formData.email}\n\n`;

            if (selectedType === 'error') {
                emailMessage += `Juego: ${formData.gameName}\n`;
                emailMessage += `Tipo de error: ${formData.errorType}\n\n`;
            } else if (selectedType === 'question') {
                emailMessage += `Tema: ${formData.topic}\n`;
                emailMessage += `Urgencia: ${formData.urgency}\n\n`;
            } else if (selectedType === 'business') {
                emailMessage += `Empresa: ${formData.company}\n`;
                emailMessage += `Tipo de propuesta: ${formData.proposalType}\n`;
                emailMessage += `Presupuesto: ${formData.budget || 'No especificado'}\n\n`;
            }

            emailMessage += `Mensaje:\n${formData.message}`;

            // Enviar email usando EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                to_email: 'gsrtitk@gmail.com', // Tu email de Gmail
                subject: `${formTypes.find(t => t.id === selectedType)?.title} - GamesFullZ`,
                message: emailMessage,
                reply_to: formData.email,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setIsSubmitting(false);
            setSubmitted(true);

            // Reset after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
                setSelectedType(null);
                setFormData({
                    type: 'error',
                    name: '',
                    email: '',
                    message: '',
                });
            }, 5000);
        } catch (error) {
            console.error('Error enviando email:', error);
            setIsSubmitting(false);
            setErrors({ 
                submit: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contacta directamente a gsrtitk@gmail.com' 
            });
        }
    };

    return (
        <div className="min-h-screen py-24 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-pixel mb-6">
                        CONTÁCTANOS
                    </h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        ¿Necesitas ayuda, tienes una pregunta o quieres colaborar? Estamos aquí para ti.
                    </p>
                </motion.div>

                {/* Form Type Selection */}
                {!selectedType && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
                    >
                        {formTypes.map((type, index) => (
                            <motion.button
                                key={type.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleTypeSelect(type.id)}
                                className={`group relative bg-bg-secondary border-2 border-white/10 rounded-2xl p-8 text-left hover:border-${type.color}/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:-translate-y-2`}
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {type.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white font-pixel mb-2 group-hover:text-neon-blue transition-colors">
                                    {type.title}
                                </h3>
                                <p className="text-text-secondary text-sm">
                                    {type.description}
                                </p>
                                <div className="absolute bottom-4 right-4 text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                )}

                {/* Form */}
                <AnimatePresence mode="wait">
                    {selectedType && !submitted && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-bg-secondary border border-white/10 rounded-2xl p-8"
                        >
                            {/* Back Button */}
                            <button
                                onClick={() => setSelectedType(null)}
                                className="mb-6 flex items-center gap-2 text-text-secondary hover:text-neon-blue transition-colors text-sm"
                            >
                                ← Cambiar tipo de contacto
                            </button>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Common Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-white mb-2">
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.name ? 'border-neon-pink' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all`}
                                            placeholder="Tu nombre"
                                        />
                                        {errors.name && <p className="text-neon-pink text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-white mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.email ? 'border-neon-pink' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all`}
                                            placeholder="tu@email.com"
                                        />
                                        {errors.email && <p className="text-neon-pink text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Dynamic Fields Based on Type */}
                                {selectedType === 'error' && (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-white mb-2">
                                                    Nombre del Juego *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.gameName || ''}
                                                    onChange={(e) => handleInputChange('gameName', e.target.value)}
                                                    className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.gameName ? 'border-neon-pink' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all`}
                                                    placeholder="Ej: GTA V"
                                                />
                                                {errors.gameName && <p className="text-neon-pink text-xs mt-1">{errors.gameName}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-bold text-white mb-2">
                                                    Tipo de Error *
                                                </label>
                                                <select
                                                    value={formData.errorType || ''}
                                                    onChange={(e) => handleInputChange('errorType', e.target.value)}
                                                    className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.errorType ? 'border-neon-pink' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all`}
                                                >
                                                    <option value="">Selecciona...</option>
                                                    <option value="download">Error de descarga</option>
                                                    <option value="install">Error de instalación</option>
                                                    <option value="launch">No inicia el juego</option>
                                                    <option value="crash">Crash/Cierre inesperado</option>
                                                    <option value="other">Otro</option>
                                                </select>
                                                {errors.errorType && <p className="text-neon-pink text-xs mt-1">{errors.errorType}</p>}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectedType === 'question' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-white mb-2">
                                                Tema *
                                            </label>
                                            <select
                                                value={formData.topic || ''}
                                                onChange={(e) => handleInputChange('topic', e.target.value)}
                                                className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.topic ? 'border-neon-pink' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all`}
                                            >
                                                <option value="">Selecciona...</option>
                                                <option value="download">Cómo descargar</option>
                                                <option value="requirements">Requisitos del sistema</option>
                                                <option value="installation">Instalación</option>
                                                <option value="account">Cuenta y perfil</option>
                                                <option value="other">Otro</option>
                                            </select>
                                            {errors.topic && <p className="text-neon-pink text-xs mt-1">{errors.topic}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-white mb-2">
                                                Urgencia
                                            </label>
                                            <select
                                                value={formData.urgency || 'normal'}
                                                onChange={(e) => handleInputChange('urgency', e.target.value)}
                                                className="w-full px-4 py-3 bg-bg-tertiary border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all"
                                            >
                                                <option value="low">Baja</option>
                                                <option value="normal">Normal</option>
                                                <option value="high">Alta</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {selectedType === 'business' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-white mb-2">
                                                Empresa *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.company || ''}
                                                onChange={(e) => handleInputChange('company', e.target.value)}
                                                className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.company ? 'border-neon-pink' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all`}
                                                placeholder="Nombre de tu empresa"
                                            />
                                            {errors.company && <p className="text-neon-pink text-xs mt-1">{errors.company}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-white mb-2">
                                                Tipo de Propuesta *
                                            </label>
                                            <select
                                                value={formData.proposalType || ''}
                                                onChange={(e) => handleInputChange('proposalType', e.target.value)}
                                                className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.proposalType ? 'border-neon-pink' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all`}
                                            >
                                                <option value="">Selecciona...</option>
                                                <option value="sponsorship">Patrocinio</option>
                                                <option value="partnership">Colaboración</option>
                                                <option value="advertising">Publicidad</option>
                                                <option value="other">Otro</option>
                                            </select>
                                            {errors.proposalType && <p className="text-neon-pink text-xs mt-1">{errors.proposalType}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-white mb-2">
                                                Presupuesto Estimado
                                            </label>
                                            <select
                                                value={formData.budget || ''}
                                                onChange={(e) => handleInputChange('budget', e.target.value)}
                                                className="w-full px-4 py-3 bg-bg-tertiary border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all"
                                            >
                                                <option value="">Prefiero no decir</option>
                                                <option value="<500">Menos de $500</option>
                                                <option value="500-1000">$500 - $1,000</option>
                                                <option value="1000-5000">$1,000 - $5,000</option>
                                                <option value=">5000">Más de $5,000</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {/* Message Field */}
                                <div>
                                    <label className="block text-sm font-bold text-white mb-2">
                                        Mensaje * <span className="text-text-muted font-normal">({formData.message.length}/500)</span>
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        maxLength={500}
                                        rows={6}
                                        className={`w-full px-4 py-3 bg-bg-tertiary border ${errors.message ? 'border-neon-pink' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-neon-blue transition-all resize-none custom-scrollbar`}
                                        placeholder="Cuéntanos más detalles..."
                                    />
                                    {errors.message && <p className="text-neon-pink text-xs mt-1">{errors.message}</p>}
                                </div>

                                {/* Error Message */}
                                {errors.submit && (
                                    <div className="bg-neon-pink/20 border border-neon-pink rounded-lg p-4 mb-4">
                                        <p className="text-neon-pink text-sm">{errors.submit}</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-neon-blue text-black font-bold font-pixel text-sm rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="animate-spin">⟳</span> ENVIANDO...
                                        </span>
                                    ) : (
                                        'ENVIAR MENSAJE'
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {/* Success Message */}
                    {submitted && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-bg-secondary border-2 border-neon-green rounded-2xl p-12 text-center"
                        >
                            <div className="text-6xl mb-6 animate-bounce">✓</div>
                            <h3 className="text-2xl font-bold text-white font-pixel mb-4">
                                ¡MENSAJE ENVIADO!
                            </h3>
                            <p className="text-text-secondary">
                                Gracias por contactarnos. Te responderemos lo antes posible.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Contacto;
