import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, FileText, FolderOpen, MessageSquare, Cloud, Zap } from 'lucide-react';

const integrations = [
    { name: 'Notion', description: 'Export summaries directly', icon: FileText, color: 'bg-gray-900' },
    { name: 'Google Calendar', description: 'Sync meetings automatically', icon: Calendar, color: 'bg-blue-500' },
    { name: 'Slack', description: 'Share to channels', icon: MessageSquare, color: 'bg-purple-600' },
    { name: 'Dropbox', description: 'Backup recordings', icon: Cloud, color: 'bg-blue-600' },
    { name: 'Zapier', description: 'Connect 5000+ apps', icon: Zap, color: 'bg-orange-500' },
    { name: 'Google Drive', description: 'Export transcripts', icon: FolderOpen, color: 'bg-yellow-500' }
];

const Integrations = () => {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Works with your{' '}
                        <span className="text-[#7C3AED]">favorite tools</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Connect NotarIA with the apps you already use. Export, sync, and automate your workflow.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all cursor-pointer group border border-transparent hover:border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl ${integration.color} flex items-center justify-center`}>
                                    <integration.icon size={24} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-900 font-semibold">{integration.name}</h3>
                                    <p className="text-gray-500 text-sm">{integration.description}</p>
                                </div>
                                <ArrowRight size={18} className="text-gray-300 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <a href="#" className="inline-flex items-center gap-2 text-[#7C3AED] font-medium hover:underline">
                        View all integrations
                        <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Integrations;
