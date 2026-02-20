import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Fingerprint, Timer, Globe, Server } from 'lucide-react';

const features = [
    {
        icon: Globe,
        title: 'On-Device Translation',
        description: 'Translation powered by Apple Translation Framework runs 100% locally. Works offline after downloading language models — free on all plans.'
    },
    {
        icon: Lock,
        title: 'Secure API Keys',
        description: 'All API keys are stored in Firebase Secret Manager and never exposed to the client. Cloud Functions act as a secure proxy.'
    },
    {
        icon: Fingerprint,
        title: 'App Attest Verification',
        description: 'Device integrity is verified using Apple App Attest, ensuring only genuine devices can access the service.'
    },
    {
        icon: Timer,
        title: 'Rate Limiting',
        description: '10 requests per minute per user per action, enforced server-side via Firestore-based rate limiting.'
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
                            Privacy & Security
                        </motion.div>

                        <motion.h2
                            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Your meetings,
                            <br />
                            <span className="bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-600 bg-clip-text text-transparent">your data</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-600 mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            NotarIA is built with security at every layer. Audio stays on your device until you choose to process it, translation never leaves your phone, and all cloud communication is encrypted and authenticated.
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
                                            <div className="font-semibold text-gray-900">Security Status</div>
                                            <div className="text-green-600 text-sm">All systems secure</div>
                                        </div>
                                    </div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { label: 'App Attest', status: 'Verified', color: 'text-green-600' },
                                        { label: 'Translation', status: 'On-Device', color: 'text-green-600' },
                                        { label: 'API Keys', status: 'Secret Manager', color: 'text-amber-600' },
                                        { label: 'Rate Limiting', status: '10 req/min', color: 'text-blue-600' },
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
