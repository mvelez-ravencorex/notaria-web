import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const PromoBannerPt = () => {
    return (
        <motion.div
            className="bg-[#7C3AED] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-4 flex-wrap text-sm">
                <div className="flex items-center gap-2">
                    <Sparkles size={16} />
                    <span className="font-medium">Novo!</span>
                </div>
                <span className="text-white/90">
                    NotarIA 2.0 está aqui — AI Chat para fazer perguntas sobre suas reuniões
                </span>
                <a
                    href="#features"
                    className="flex items-center gap-1 text-white font-medium hover:underline"
                >
                    Saiba mais
                    <ArrowRight size={14} />
                </a>
            </div>
        </motion.div>
    );
};

export default PromoBannerPt;
