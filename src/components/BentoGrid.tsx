import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Brain, Users, Search, FileText, MessageSquare } from 'lucide-react';

const features = [
    {
        title: "Smart Recording",
        description: "Crystal clear audio capture with noise cancellation. Works offline, on any device.",
        icon: Mic,
        color: "bg-purple-100 text-[#7C3AED]",
        span: "md:col-span-2"
    },
    {
        title: "AI Transcription",
        description: "Real-time transcription in 5 languages with 99% accuracy. Speaker identification included.",
        icon: Brain,
        color: "bg-green-100 text-green-600",
        span: "md:col-span-1"
    },
    {
        title: "Speaker Diarization",
        description: "Automatically identify and label different speakers in your meetings.",
        icon: Users,
        color: "bg-blue-100 text-blue-600",
        span: "md:col-span-1"
    },
    {
        title: "AI Chat",
        description: "Ask questions about your meetings. Get instant answers from your transcripts.",
        icon: MessageSquare,
        color: "bg-orange-100 text-orange-600",
        span: "md:col-span-1"
    },
    {
        title: "Smart Search",
        description: "Find any moment in any meeting. Search by keywords, speakers, or topics.",
        icon: Search,
        color: "bg-pink-100 text-pink-600",
        span: "md:col-span-1"
    },
    {
        title: "Export Anywhere",
        description: "PDF reports, Markdown, Notion, Google Docs. Your data, your way.",
        icon: FileText,
        color: "bg-cyan-100 text-cyan-600",
        span: "md:col-span-2"
    }
];

const FeatureCard = ({ feature, index }) => (
    <motion.div
        className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 ${feature.span}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
    >
        <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
            <feature.icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </motion.div>
);

const BentoGrid = () => {
    return (
        <section className="py-24 px-6 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                        Everything you need to{' '}
                        <span className="text-[#7C3AED]">capture meetings</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A complete toolkit designed to transform how you record, understand, and share meeting insights.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
