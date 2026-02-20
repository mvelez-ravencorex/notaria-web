import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, Scale, GraduationCap } from 'lucide-react';

const solutions = [
    {
        title: 'Enterprise',
        description: 'Team workspaces, admin controls, and custom integrations for organizations.',
        icon: Building2,
        color: 'bg-purple-100 text-[#7C3AED]'
    },
    {
        title: 'Legal',
        description: 'Deposition summaries, conflict checks, and privileged client handling.',
        icon: Scale,
        color: 'bg-green-100 text-green-600'
    },
    {
        title: 'Medical',
        description: 'HIPAA-compliant patient notes and clinical documentation.',
        icon: Stethoscope,
        color: 'bg-red-100 text-red-600'
    },
    {
        title: 'Education',
        description: 'Lecture recording, study notes, and student collaboration tools.',
        icon: GraduationCap,
        color: 'bg-blue-100 text-blue-600'
    }
];

const Solutions = () => {
    return (
        <section className="py-24 px-6 lg:px-20 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Built for{' '}
                        <span className="text-[#7C3AED]">every industry</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Specialized features for different professional needs
                    </motion.p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <solution.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
