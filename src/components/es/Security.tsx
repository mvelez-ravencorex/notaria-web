import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Fingerprint, Timer, Globe, Server } from 'lucide-react';

const features = [
    {
        icon: Globe,
        title: 'Traducción en Dispositivo',
        description: 'La traducción impulsada por Apple Translation Framework se ejecuta 100% localmente. Funciona offline después de descargar modelos de idioma — gratis en todos los planes.'
    },
    {
        icon: Lock,
        title: 'Claves API Seguras',
        description: 'Todas las claves API se almacenan en Firebase Secret Manager y nunca se exponen al cliente. Las Cloud Functions actúan como proxy seguro.'
    },
    {
        icon: Fingerprint,
        title: 'Verificación App Attest',
        description: 'La integridad del dispositivo se verifica usando Apple App Attest, asegurando que solo dispositivos genuinos puedan acceder al servicio.'
    },
    {
        icon: Timer,
        title: 'Limitación de Velocidad',
        description: '10 solicitudes por minuto por usuario por acción, aplicadas del lado del servidor mediante limitación basada en Firestore.'
    }
];

const Security = () => {
    return (
        <section className="relative py-24 px-6 lg:px-20 bg-white overflow-hidden">
            {/* Animated Security Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating shield grid */}
                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 8 L60 20 L60 40 C60 55 50 65 40 70 C30 65 20 55 20 40 L20 20 Z' fill='none' stroke='%2392600a' stroke-width='1.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '80px 80px',
                    }}
                />
                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(146,96,10,0.15) 0%, transparent 70%)' }}
                    animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(146,96,10,0.12) 0%, transparent 70%)' }}
                    animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(146,96,10,0.08) 0%, transparent 60%)' }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Scanning line */}
                <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Shield size={16} />
                            Privacidad y Seguridad
                        </motion.div>

                        <motion.h2
                            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Tus reuniones,
                            <br />
                            <span className="bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-600 bg-clip-text text-transparent">tus datos</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            NotarIA está construida con seguridad en cada capa. El audio permanece en tu dispositivo hasta que elijas procesarlo, la traducción nunca sale de tu teléfono, y toda la comunicación en la nube está encriptada y autenticada.
                        </motion.p>

                        <div className="space-y-6">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                                        <feature.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-semibold mb-1">{feature.title}</h4>
                                        <p className="text-gray-500 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-gray-100">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                            <Shield size={24} className="text-green-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Estado de Seguridad</div>
                                            <div className="text-green-600 text-sm">Todos los sistemas seguros</div>
                                        </div>
                                    </div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { label: 'App Attest', status: 'Verificado', color: 'text-green-600' },
                                        { label: 'Traducción', status: 'En Dispositivo', color: 'text-green-600' },
                                        { label: 'Claves API', status: 'Secret Manager', color: 'text-amber-600' },
                                        { label: 'Límite de Velocidad', status: '10 req/min', color: 'text-blue-600' },
                                        { label: 'Auth', status: 'Firebase Auth', color: 'text-green-600' }
                                    ].map((item) => (
                                        <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                                            <span className="text-gray-600">{item.label}</span>
                                            <span className={`font-medium ${item.color}`}>{item.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Security;
