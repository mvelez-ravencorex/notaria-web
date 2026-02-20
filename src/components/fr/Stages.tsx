import React from 'react';
import { motion } from 'framer-motion';

const stages = [
    {
        number: '01',
        title: 'Enregistrez',
        description: 'Enregistrement en un seul toucher et suppression avancée du bruit pour un audio cristallin, où que vous soyez.',
        iconColor: 'purple',
        glowColor: 'rgba(168, 85, 247, 0.3)',
        borderGlow: 'rgba(168, 85, 247, 0.5)'
    },
    {
        number: '02',
        title: 'Transcrivez',
        description: 'Transcription en temps réel par IA avec 99% de précision et identification automatique des intervenants.',
        iconColor: 'blue',
        glowColor: 'rgba(59, 130, 246, 0.3)',
        borderGlow: 'rgba(59, 130, 246, 0.5)'
    },
    {
        number: '03',
        title: 'Agissez',
        description: 'Recevez des résumés IA, les décisions clés et exportez les tâches directement vers vos outils préférés.',
        iconColor: 'green',
        glowColor: 'rgba(34, 197, 94, 0.3)',
        borderGlow: 'rgba(34, 197, 94, 0.5)'
    }
];

// Custom icon components with glow effects
const MicrophoneIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <defs>
            <filter id="glow-purple" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC"/>
                <stop offset="100%" stopColor="#A855F7"/>
            </linearGradient>
        </defs>
        {/* Microphone body */}
        <rect x="14" y="6" width="12" height="18" rx="6" stroke="url(#purpleGrad)" strokeWidth="2" fill="none" filter="url(#glow-purple)"/>
        {/* Stand arc */}
        <path d="M10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20" stroke="url(#purpleGrad)" strokeWidth="2" strokeLinecap="round" fill="none" filter="url(#glow-purple)"/>
        {/* Stand */}
        <line x1="20" y1="30" x2="20" y2="35" stroke="url(#purpleGrad)" strokeWidth="2" strokeLinecap="round" filter="url(#glow-purple)"/>
        {/* Sound waves */}
        <path d="M32 12C34 14.5 34 19.5 32 22" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" opacity="0.9" filter="url(#glow-purple)"/>
        <path d="M36 8C40 13 40 21 36 26" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" opacity="0.6" filter="url(#glow-purple)"/>
    </svg>
);

const BrainChipIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <defs>
            <filter id="glow-blue" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA"/>
                <stop offset="100%" stopColor="#3B82F6"/>
            </linearGradient>
        </defs>
        {/* Chip outline */}
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="url(#blueGrad)" strokeWidth="2" fill="none" filter="url(#glow-blue)"/>
        {/* Inner circuit */}
        <circle cx="15" cy="15" r="2" fill="#60A5FA" filter="url(#glow-blue)"/>
        <circle cx="25" cy="15" r="2" fill="#60A5FA" filter="url(#glow-blue)"/>
        <circle cx="20" cy="20" r="2.5" fill="#60A5FA" filter="url(#glow-blue)"/>
        <circle cx="15" cy="25" r="2" fill="#60A5FA" filter="url(#glow-blue)"/>
        <circle cx="25" cy="25" r="2" fill="#60A5FA" filter="url(#glow-blue)"/>
        {/* Connection lines */}
        <line x1="15" y1="15" x2="20" y2="20" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" filter="url(#glow-blue)"/>
        <line x1="25" y1="15" x2="20" y2="20" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" filter="url(#glow-blue)"/>
        <line x1="15" y1="25" x2="20" y2="20" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" filter="url(#glow-blue)"/>
        <line x1="25" y1="25" x2="20" y2="20" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" filter="url(#glow-blue)"/>
        {/* Pins */}
        <line x1="20" y1="4" x2="20" y2="8" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.8" filter="url(#glow-blue)"/>
        <line x1="20" y1="32" x2="20" y2="36" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.8" filter="url(#glow-blue)"/>
        <line x1="4" y1="20" x2="8" y2="20" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.8" filter="url(#glow-blue)"/>
        <line x1="32" y1="20" x2="36" y2="20" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" opacity="0.8" filter="url(#glow-blue)"/>
    </svg>
);

const ChecklistIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <defs>
            <filter id="glow-green" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ADE80"/>
                <stop offset="100%" stopColor="#22C55E"/>
            </linearGradient>
        </defs>
        {/* Document */}
        <rect x="6" y="4" width="20" height="28" rx="3" stroke="url(#greenGrad)" strokeWidth="2" fill="none" filter="url(#glow-green)"/>
        {/* Checkmark */}
        <path d="M11 14L14 17L21 10" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-green)"/>
        {/* Lines */}
        <line x1="11" y1="22" x2="21" y2="22" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" opacity="0.7" filter="url(#glow-green)"/>
        <line x1="11" y1="27" x2="18" y2="27" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" opacity="0.5" filter="url(#glow-green)"/>
        {/* Export arrow */}
        <path d="M28 18L34 18M34 18L31 15M34 18L31 21" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-green)"/>
    </svg>
);

const icons = [MicrophoneIcon, BrainChipIcon, ChecklistIcon];

const Stages = () => {
    return (
        <section className="relative py-24 px-6 lg:px-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2a 100%)' }}>
            {/* Animated particles/bokeh background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 4 + 2,
                            height: Math.random() * 4 + 2,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `rgba(${Math.random() > 0.5 ? '184, 134, 11' : '212, 168, 67'}, ${Math.random() * 0.5 + 0.2})`,
                            filter: 'blur(1px)',
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Larger bokeh lights */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`bokeh-${i}`}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `radial-gradient(circle, rgba(${i % 2 === 0 ? '184, 134, 11' : '212, 168, 67'}, 0.15) 0%, transparent 70%)`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 8,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Votre chemin vers des réunions claires
                    </motion.h2>
                    <motion.p
                        className="text-lg text-white/60"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Trois étapes simples pour une productivité sans effort.
                    </motion.p>
                </div>

                {/* Cards with energy stream */}
                <div className="relative">
                    {/* Energy stream SVG */}
                    <svg className="absolute top-1/2 left-0 w-full h-48 -translate-y-1/2 hidden md:block pointer-events-none" viewBox="0 0 1200 180" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#B8860B" stopOpacity="1"/>
                                <stop offset="50%" stopColor="#D4A843" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#E6C56C" stopOpacity="0.8"/>
                            </linearGradient>
                            <filter id="streamGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="12" result="blur1"/>
                                <feGaussianBlur stdDeviation="6" result="blur2"/>
                                <feGaussianBlur stdDeviation="2" result="blur3"/>
                                <feMerge>
                                    <feMergeNode in="blur1"/>
                                    <feMergeNode in="blur2"/>
                                    <feMergeNode in="blur3"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
                                <feGaussianBlur stdDeviation="8" result="blur"/>
                                <feMerge>
                                    <feMergeNode in="blur"/>
                                    <feMergeNode in="blur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Outer glow layer */}
                        <motion.path
                            d="M 50 90 Q 200 50, 400 90 T 600 90 T 800 90 T 1150 90"
                            stroke="url(#streamGradient)"
                            strokeWidth="20"
                            fill="none"
                            opacity="0.3"
                            filter="url(#streamGlow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        {/* Main stream line */}
                        <motion.path
                            d="M 50 90 Q 200 50, 400 90 T 600 90 T 800 90 T 1150 90"
                            stroke="url(#streamGradient)"
                            strokeWidth="6"
                            fill="none"
                            filter="url(#streamGlow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        {/* Core bright line */}
                        <motion.path
                            d="M 50 90 Q 200 50, 400 90 T 600 90 T 800 90 T 1150 90"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                            opacity="0.6"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        {/* Animated glow particle along the path */}
                        <motion.circle
                            r="12"
                            fill="#D4A843"
                            filter="url(#particleGlow)"
                            animate={{
                                cx: [50, 400, 800, 1150],
                                cy: [90, 90, 90, 90],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.circle
                            r="4"
                            fill="white"
                            animate={{
                                cx: [50, 400, 800, 1150],
                                cy: [90, 90, 90, 90],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </svg>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {stages.map((stage, index) => {
                            const IconComponent = icons[index];
                            return (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <div
                                        className="relative rounded-2xl p-6 lg:p-8 border border-white/[0.08] overflow-hidden h-full"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
                                            backdropFilter: 'blur(16px)',
                                            WebkitBackdropFilter: 'blur(16px)',
                                            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.05)`
                                        }}
                                    >
                                        {/* Glowing corner accent */}
                                        <div
                                            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30"
                                            style={{
                                                background: `radial-gradient(circle, ${stage.borderGlow} 0%, transparent 70%)`,
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Icon in top right */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    {/* Number */}
                                                    <div className="text-xs font-medium text-white/40 mb-1 tracking-wider">
                                                        {stage.number}
                                                    </div>
                                                    {/* Title */}
                                                    <h3 className="text-xl font-bold text-white">
                                                        {stage.title}
                                                    </h3>
                                                </div>
                                                {/* Icon container */}
                                                <div
                                                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                                    style={{
                                                        background: 'rgba(255, 255, 255, 0.02)',
                                                        border: `1px solid rgba(255, 255, 255, 0.1)`,
                                                        boxShadow: `0 0 30px ${stage.glowColor}, inset 0 0 20px ${stage.glowColor}`
                                                    }}
                                                >
                                                    <IconComponent />
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-white/60 text-sm leading-relaxed mt-auto">
                                                {stage.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Decorative star/sparkle in bottom right */}
            <motion.div
                className="absolute bottom-8 right-8"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="rgba(168, 85, 247, 0.6)"/>
                </svg>
            </motion.div>
        </section>
    );
};

export default Stages;
