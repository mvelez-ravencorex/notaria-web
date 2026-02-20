import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Clock, Download, Mic, Sparkles, Database } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface Plan {
    name: string;
    monthlyPrice: string;
    annualPrice: string | null;
    annualMonthly: string | null;
    description: string;
    minutes: string;
    minutesNote: string;
    maxDuration: string;
    retention: string;
    aiUses: string;
    aiUsesNote: string;
    features: {
        name: string;
        value: string | boolean;
    }[];
    highlighted?: boolean;
}

const plans: Plan[] = [
    {
        name: 'Starter',
        monthlyPrice: '$0',
        annualPrice: null,
        annualMonthly: null,
        description: 'Perfecto para probar NotarIA y ver cómo funciona.',
        minutes: '90',
        minutesNote: 'de por vida (único)',
        maxDuration: '10 min',
        retention: '7 días',
        aiUses: '6',
        aiUsesNote: 'de por vida',
        features: [
            { name: 'Traducción en Vivo', value: 'Gratis' },
            { name: 'Análisis de Sentimiento', value: false },
            { name: 'Exportar / Compartir', value: 'Usa pool IA' },
            { name: 'Carpetas', value: false },
            { name: 'Descargas de Audio', value: false },
        ],
    },
    {
        name: 'Pro',
        monthlyPrice: '$9.99',
        annualPrice: '$99.99',
        annualMonthly: '$8.33',
        description: 'Para profesionales que necesitan más grabación e IA.',
        minutes: '500',
        minutesNote: 'por mes',
        maxDuration: '30 min',
        retention: '14 días',
        aiUses: '6',
        aiUsesNote: 'por mes',
        features: [
            { name: 'Traducción en Vivo', value: 'Gratis' },
            { name: 'Análisis de Sentimiento', value: false },
            { name: 'Exportar / Compartir', value: 'Usa pool IA' },
            { name: 'Carpetas', value: true },
            { name: 'Descargas de Audio', value: '3/mes' },
        ],
    },
    {
        name: 'Plus',
        monthlyPrice: '$14.99',
        annualPrice: '$149.99',
        annualMonthly: '$12.50',
        description: 'Para usuarios avanzados con IA superior y exportaciones ilimitadas.',
        minutes: '1,200',
        minutesNote: 'por mes',
        maxDuration: '60 min',
        retention: '30 días',
        aiUses: '48',
        aiUsesNote: 'por mes',
        features: [
            { name: 'Traducción en Vivo', value: 'Gratis' },
            { name: 'Análisis de Sentimiento', value: 'Básico' },
            { name: 'Exportar / Compartir', value: 'Ilimitado' },
            { name: 'Carpetas', value: true },
            { name: 'Descargas de Audio', value: 'Ilimitado' },
        ],
        highlighted: true,
    },
    {
        name: 'Business',
        monthlyPrice: '$19.99',
        annualPrice: '$199.99',
        annualMonthly: '$16.67',
        description: 'Para equipos con alto volumen e insights de sentimiento completos.',
        minutes: '1,800',
        minutesNote: 'por mes',
        maxDuration: 'Ilimitado',
        retention: '60 días',
        aiUses: '50',
        aiUsesNote: 'por mes',
        features: [
            { name: 'Traducción en Vivo', value: 'Gratis' },
            { name: 'Análisis de Sentimiento', value: 'Completo' },
            { name: 'Exportar / Compartir', value: 'Ilimitado' },
            { name: 'Carpetas', value: true },
            { name: 'Descargas de Audio', value: 'Ilimitado' },
        ],
    },
    {
        name: 'Enterprise',
        monthlyPrice: '$29.99',
        annualPrice: '$299.99',
        annualMonthly: '$25.00',
        description: 'Capacidad máxima para organizaciones y equipos grandes.',
        minutes: '2,800',
        minutesNote: 'por mes',
        maxDuration: 'Ilimitado',
        retention: '90 días',
        aiUses: '80',
        aiUsesNote: 'por mes',
        features: [
            { name: 'Traducción en Vivo', value: 'Gratis' },
            { name: 'Análisis de Sentimiento', value: 'Completo' },
            { name: 'Exportar / Compartir', value: 'Ilimitado' },
            { name: 'Carpetas', value: true },
            { name: 'Descargas de Audio', value: 'Ilimitado' },
        ],
    },
];

const FeatureValue = ({ value }: { value: string | boolean }) => {
    if (value === true) {
        return <Check className="w-5 h-5 text-emerald-500" />;
    }
    if (value === false) {
        return <X className="w-5 h-5 text-gray-300" />;
    }
    return <span className="text-sm text-gray-600">{value}</span>;
};

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section className="w-full py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex text-center justify-center items-center gap-4 flex-col mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge>Precios</Badge>
                    </motion.div>
                    <motion.div
                        className="flex gap-2 flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl tracking-tight font-bold text-gray-900">
                            Precios simples y transparentes
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600 max-w-2xl text-center">
                            Un pool de IA para todas las funciones. Tú eliges cómo gastar tus usos.
                        </p>
                    </motion.div>

                    {/* Billing Toggle */}
                    <motion.div
                        className="flex items-center gap-3 mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
                            Mensual
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                                isAnnual ? 'bg-amber-600' : 'bg-gray-300'
                            }`}
                            aria-label="Alternar facturación anual"
                        >
                            <div
                                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${
                                    isAnnual ? 'translate-x-7' : 'translate-x-0'
                                }`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
                            Anual
                        </span>
                        {isAnnual && (
                            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-full">
                                2 meses gratis
                            </span>
                        )}
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {plans.map((plan, index) => {
                        const showAnnual = isAnnual && plan.annualPrice;
                        const displayPrice = showAnnual ? plan.annualMonthly : plan.monthlyPrice;
                        const displayPeriod = plan.annualPrice ? (showAnnual ? '/ mes' : '/ mes') : '';

                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card
                                    className={`h-full flex flex-col ${
                                        plan.highlighted
                                            ? 'border-amber-600 border-2 shadow-xl shadow-amber-500/10 relative'
                                            : 'border-gray-200'
                                    }`}
                                >
                                    {plan.highlighted && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <Badge className="bg-amber-600 text-white">Más Popular</Badge>
                                        </div>
                                    )}
                                    <CardHeader className="pb-4">
                                        <CardTitle>
                                            <span className="text-xl font-semibold text-gray-900">{plan.name}</span>
                                        </CardTitle>
                                        <CardDescription className="text-sm min-h-[40px]">
                                            {plan.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-1">
                                        {/* Price */}
                                        <div className="mb-6">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-bold text-gray-900">{displayPrice}</span>
                                                {displayPeriod && <span className="text-gray-500 text-sm">{displayPeriod}</span>}
                                            </div>
                                            {showAnnual && (
                                                <p className="text-xs text-amber-600 mt-1">
                                                    {plan.annualPrice}/año — facturado anualmente
                                                </p>
                                            )}
                                        </div>

                                        {/* Key Stats */}
                                        <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                                                    <Mic className="w-4 h-4 text-amber-700" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{plan.minutes} min</p>
                                                    <p className="text-xs text-gray-500">{plan.minutesNote}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                                                    <Sparkles className="w-4 h-4 text-amber-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{plan.aiUses} AI uses</p>
                                                    <p className="text-xs text-gray-500">{plan.aiUsesNote}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                                                    <Clock className="w-4 h-4 text-emerald-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{plan.maxDuration}</p>
                                                    <p className="text-xs text-gray-500">máx por grabación</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                                    <Database className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{plan.retention}</p>
                                                    <p className="text-xs text-gray-500">retención de audio</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="flex-1 space-y-3 mb-6">
                                            {plan.features.map((feature) => (
                                                <div key={feature.name} className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-600">{feature.name}</span>
                                                    <FeatureValue value={feature.value} />
                                                </div>
                                            ))}
                                        </div>

                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>

                {/* AI Uses Note */}
                <motion.p
                    className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Los usos de IA se comparten entre Resumen, Tareas, Momentos Clave, AI Chat, Diarización de Hablantes y exportaciones (Starter/Pro). La Traducción en Vivo es siempre gratis.
                </motion.p>

                {/* General CTA */}
                <motion.div
                    className="flex justify-center mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-gray-900/20"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        Descarga y elige tu plan
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
