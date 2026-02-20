import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Globe, Check } from 'lucide-react';
import { GradientDots } from '../ui/gradient-dots';

const BigFeature = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [parallaxValues, setParallaxValues] = useState({
        backgroundY: 0,
        leftCardY: 0,
        rightCardY: 0
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const relativeScroll = window.scrollY - sectionTop + window.innerHeight;

                setParallaxValues({
                    backgroundY: relativeScroll * 0.03,
                    leftCardY: relativeScroll * 0.02,
                    rightCardY: relativeScroll * 0.025
                });
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { backgroundY, leftCardY, rightCardY } = parallaxValues;

    return (
        <section ref={sectionRef} className="relative py-24 px-6 lg:px-20 bg-[#0a0a0f] overflow-hidden">
            {/* Animated Background with Parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ transform: `translateY(${backgroundY * 0.3}px)` }}
            >
                <GradientDots
                    duration={25}
                    colorCycleDuration={8}
                    backgroundColor="#0a0a0f"
                    className="opacity-60"
                />
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Visual with Parallax */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        style={{ transform: `translateY(${-leftCardY}px)` }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-3xl p-8 border border-white/10 shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)' }}>
                            {/* AI Processing Visual */}
                            <div className="space-y-6">
                                {/* Input */}
                                <div className="p-4 rounded-2xl border border-white/10" style={{ background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                                    <div className="text-xs text-white/60 mb-3 uppercase tracking-wider font-medium">Entrada de Audio</div>
                                    <div className="flex items-center justify-between h-10 w-full">
                                        {[...Array(50)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 mx-[1px] bg-amber-400 rounded-full"
                                                animate={{ height: [4, Math.random() * 24 + 4, 4] }}
                                                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.02 }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Processing */}
                                <div className="flex items-center justify-center py-4">
                                    <motion.div
                                        className="flex items-center gap-3 px-4 py-2 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30"
                                        animate={{ opacity: [1, 0.6, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <Brain size={18} className="text-amber-400" />
                                        <span className="text-sm font-medium text-amber-300">Procesando con IA...</span>
                                    </motion.div>
                                </div>

                                {/* Output */}
                                <div className="p-4 bg-emerald-500/10 backdrop-blur-md rounded-2xl border border-emerald-500/20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Check size={16} className="text-emerald-400" />
                                        <span className="text-xs text-emerald-400 uppercase tracking-wider font-medium">Resumen Listo</span>
                                    </div>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        El equipo acordó priorizar el lanzamiento móvil para Q4. Las tareas clave incluyen finalizar la documentación de API y programar pruebas de usuario.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex gap-4">
                                    {[
                                        { label: 'Tareas', value: '3' },
                                        { label: 'Hablantes', value: '4' },
                                        { label: 'Duración', value: '45m' }
                                    ].map((stat) => (
                                        <div key={stat.label} className="flex-1 p-3 rounded-xl border border-white/10 text-center" style={{ background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                                            <div className="text-lg font-bold text-white">{stat.value}</div>
                                            <div className="text-xs text-white/50">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content with Parallax */}
                    <motion.div className="order-1 lg:order-2" style={{ transform: `translateY(${-rightCardY}px)` }}>
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-xl border border-amber-500/40 text-amber-300 text-sm font-medium mb-6 shadow-lg shadow-amber-500/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Brain size={16} />
                            Impulsado por IA Avanzada
                        </motion.div>

                        <motion.h2
                            className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            No solo transcripción
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Verdadera comprensión</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-white/60 mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Nuestra IA no solo convierte voz a texto. Entiende el contexto, identifica hablantes, extrae tareas y genera resúmenes que capturan lo que realmente importa.
                        </motion.p>

                        {/* Features List */}
                        <div className="space-y-5">
                            {[
                                { icon: Zap, title: 'Procesamiento en tiempo real', description: 'Ve la transcripción mientras sucede' },
                                { icon: Globe, title: '6 idiomas soportados', description: 'Inglés, Español, Portugués, Francés, Alemán, Italiano' },
                                { icon: Shield, title: 'Traducción en dispositivo', description: 'La traducción es 100% local via Apple Framework — gratis en todos los planes' }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    style={{ background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)' }}
                                    className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/30 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                                        <feature.icon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                                        <p className="text-white/50 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BigFeature;
