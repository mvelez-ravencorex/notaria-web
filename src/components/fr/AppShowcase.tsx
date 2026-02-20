import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MessageSquare, FileText, Calendar, Sparkles, Languages, Search, Clock, FolderOpen, Trash2, Edit3, FolderInput, RefreshCw, Mic, StopCircle, Pause, Users, BarChart3, BookOpen, Zap, Brain, Globe, CheckCircle, ListChecks, Tags, Share2, SmilePlus, TrendingUp, UserCheck, PieChart, AlertTriangle, Lightbulb, Activity, Layers, ChevronDown } from 'lucide-react';
import { WavyBackground } from '../ui/wavy-background';

import meetingsScreen from '../../assets/images/meetings-screen.png';
import recordingScreen from '../../assets/images/recording-screen.png';
import summaryScreen from '../../assets/images/summary-screen.png';
import translationScreen from '../../assets/images/translation-screen.png';
import sentimentScreen from '../../assets/images/sentiment-screen.png';
import aichatScreen from '../../assets/images/aichat-screen.png';

const tabs = [
    { id: 'meetings', label: 'Réunions', icon: Calendar, screen: meetingsScreen },
    { id: 'record', label: 'Enregistrer et Transcrire', icon: Mic, screen: recordingScreen },
    { id: 'summary', label: 'Résumé', icon: Sparkles, screen: summaryScreen },
    { id: 'translation', label: 'Traduction en direct', icon: Languages, screen: translationScreen },
    { id: 'sentiment', label: 'Sentiment', icon: SmilePlus, screen: sentimentScreen },
    { id: 'chat', label: 'AI Chat', icon: MessageSquare, screen: aichatScreen }
];

// Feature cards for each tab
const featureCards: Record<string, Array<{ icon: any; title: string; description: string; position: string }>> = {
    meetings: [
        { icon: Search, title: 'Rechercher', description: 'Rechercher des réunions par titre', position: 'left' },
        { icon: Clock, title: 'Récents', description: 'Regroupés par date', position: 'left' },
        { icon: FolderOpen, title: 'Dossiers', description: 'Organisez vos réunions', position: 'left' },
        { icon: Trash2, title: 'Supprimer', description: 'Glissez pour supprimer', position: 'right' },
        { icon: Edit3, title: 'Renommer', description: 'Glissez pour renommer', position: 'right' },
        { icon: FolderInput, title: 'Déplacer', description: 'Déplacer vers un dossier', position: 'right' },
    ],
    record: [
        { icon: Mic, title: 'Enregistrer l\'audio', description: 'Bouton microphone en un toucher', position: 'left' },
        { icon: FileText, title: 'Transcription en direct', description: 'Texte en temps réel pendant l\'enregistrement', position: 'left' },
        { icon: Globe, title: '6 Langues', description: '🇪🇸 🇺🇸 🇧🇷 🇫🇷 🇩🇪 🇮🇹', position: 'left' },
        { icon: Users, title: 'Détection des intervenants', description: 'Identifie qui parle', position: 'right' },
        { icon: Search, title: 'Rechercher et surligner', description: 'Rechercher des mots-clés', position: 'right' },
        { icon: Pause, title: 'Pause et reprise', description: 'Sans perdre l\'audio', position: 'right' },
    ],
    summary: [
        { icon: Brain, title: 'Résumé IA', description: 'Points clés par Claude AI', position: 'left' },
        { icon: Tags, title: 'Mots-clés', description: 'Étiquettes extraites automatiquement', position: 'left' },
        { icon: ListChecks, title: 'Tâches', description: 'Tâches avec cases à cocher', position: 'left' },
        { icon: Zap, title: 'Moments clés', description: 'Horodatages importants', position: 'right' },
        { icon: Languages, title: 'Traduire', description: 'Traduction de tout le contenu', position: 'right' },
        { icon: Share2, title: 'Exporter', description: 'Partager ou exporter en PDF', position: 'right' },
    ],
    translation: [
        { icon: Globe, title: '5 Langues', description: '🇪🇸 🇺🇸 🇧🇷 🇫🇷 🇩🇪', position: 'left' },
        { icon: Zap, title: 'Temps réel', description: 'Traduisez pendant l\'enregistrement', position: 'left' },
        { icon: BookOpen, title: 'Vue partagée', description: 'Original + traduit', position: 'left' },
        { icon: FileText, title: 'Tout traduire', description: 'Résumé transcription étiquettes', position: 'right' },
        { icon: ListChecks, title: 'Tâches', description: 'Tâches dans n\'importe quelle langue', position: 'right' },
        { icon: RefreshCw, title: 'Revenir à l\'original', description: 'Supprimer la traduction', position: 'right' },
    ],
    sentiment: [
        { icon: SmilePlus, title: 'État général', description: 'Score 0-100% avec emoji et résumé', position: 'left' },
        { icon: UserCheck, title: 'Par intervenant', description: 'Barres de couleur : positif neutre négatif', position: 'left' },
        { icon: Activity, title: 'État dominant', description: 'Enthousiaste préoccupé frustré...', position: 'left' },
        { icon: TrendingUp, title: 'Chronologie', description: 'Évolution du sentiment', position: 'right' },
        { icon: AlertTriangle, title: 'Moments de tension', description: 'Conflits avec sévérité et résolution', position: 'right' },
        { icon: Lightbulb, title: 'Insights IA', description: 'Observations exploitables par Claude AI', position: 'right' },
    ],
    chat: [
        { icon: MessageSquare, title: 'Poser des questions', description: 'Sur votre réunion', position: 'left' },
        { icon: Sparkles, title: 'Questions suggérées', description: 'Prompts générés par l\'IA', position: 'left' },
        { icon: FileText, title: 'Contexte complet', description: 'Transcription + intervenants', position: 'left' },
        { icon: BookOpen, title: 'Historique du chat', description: 'Bulles utilisateur/IA', position: 'right' },
        { icon: CheckCircle, title: 'Copier les réponses', description: 'Sélectionner et copier le texte', position: 'right' },
        { icon: Brain, title: 'Claude AI', description: 'Réponses intelligentes et contextuelles', position: 'right' },
    ],
};

// Screen transition variants - crossfade with overlap
const screenVariants = {
    initial: {
        opacity: 0,
        scale: 1.02,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        }
    },
    exit: {
        opacity: 0,
        scale: 0.98,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

// Animation variants for left cards
const leftCardVariants = {
    initial: (i: number) => ({
        opacity: 0,
        x: -100,
        y: 20,
        scale: 0.8,
    }),
    animate: (i: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.2 + i * 0.1,
            ease: [0.34, 1.56, 0.64, 1],
        }
    }),
    exit: (i: number) => ({
        opacity: 0,
        x: -80,
        scale: 0.9,
        transition: {
            duration: 0.3,
            delay: i * 0.05,
            ease: "easeInOut"
        }
    })
};

// Animation variants for right cards
const rightCardVariants = {
    initial: (i: number) => ({
        opacity: 0,
        x: 100,
        y: 20,
        scale: 0.8,
    }),
    animate: (i: number) => ({
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.2 + i * 0.1,
            ease: [0.34, 1.56, 0.64, 1],
        }
    }),
    exit: (i: number) => ({
        opacity: 0,
        x: 80,
        scale: 0.9,
        transition: {
            duration: 0.3,
            delay: i * 0.05,
            ease: "easeInOut"
        }
    })
};

// Static Phone Frame with animated screen content
const PhoneFrame = ({ children, placeholderSrc }: { children: React.ReactNode; placeholderSrc: string }) => (
    <div className="relative mx-auto w-full max-w-[280px]">
        {/* iPhone Frame - Static */}
        <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
            {/* Screen Container */}
            <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                {/* Dynamic Island - Always on top */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20"></div>

                {/* Invisible placeholder to maintain aspect ratio */}
                <img
                    src={placeholderSrc}
                    alt=""
                    className="w-full h-auto invisible"
                    aria-hidden="true"
                />

                {/* Animated Screen Content - Absolute positioned for crossfade */}
                <div className="absolute inset-0">
                    {children}
                </div>
            </div>
        </div>

        {/* Side Buttons - Static */}
        <div className="absolute right-[-2px] top-28 w-1 h-12 bg-gray-800 rounded-r-sm"></div>
        <div className="absolute left-[-2px] top-24 w-1 h-8 bg-gray-800 rounded-l-sm"></div>
        <div className="absolute left-[-2px] top-36 w-1 h-12 bg-gray-800 rounded-l-sm"></div>
    </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
    <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-4 border border-white/40 shadow-xl shadow-amber-500/10 w-48 hover:bg-white/30 hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-amber-700" />
            </div>
            <div>
                <div className="text-amber-700 text-sm">{title}</div>
                <div className="text-xs text-gray-500">{description}</div>
            </div>
        </div>
    </div>
);

const AppShowcase = () => {
    const [activeTab, setActiveTab] = useState('meetings');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const activeScreen = tabs.find(t => t.id === activeTab);
    const cards = featureCards[activeTab] || [];
    const leftCards = cards.filter(c => c.position === 'left');
    const rightCards = cards.filter(c => c.position === 'right');

    return (
        <section className="relative py-24 px-6 lg:px-20 overflow-hidden bg-white">
            {/* Wavy Background - Extended and Blurred */}
            <div className="absolute inset-0 -left-[20%] -right-[20%] w-[140%]">
                <WavyBackground
                    backgroundFill="white"
                    colors={["#E8D5A8", "#F0E2BC", "#DCC898", "#F5ECD0", "#E0CDA0"]}
                    waveOpacity={0.5}
                    blur={5}
                    speed="fast"
                    waveWidth={80}
                    containerClassName="absolute inset-0 h-full"
                    className="hidden"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Voyez-le <span className="bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-600 bg-clip-text text-transparent">en action</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        De l'enregistrement aux insights IA, tout se passe de manière fluide
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap justify-center gap-2">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all text-sm whitespace-nowrap border ${
                                    activeTab === tab.id
                                        ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 border-gray-900'
                                        : 'bg-white/30 backdrop-blur-2xl text-gray-600 hover:text-gray-900 border-white/40 shadow-sm'
                                }`}
                                whileHover={{ scale: activeTab === tab.id ? 1 : 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Content with Feature Cards */}
                <div className="relative min-h-[600px]">
                    {/* Left Cards */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeTab}-left-cards`}
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {leftCards.map((card, i) => (
                                    <motion.div
                                        key={card.title}
                                        custom={i}
                                        variants={leftCardVariants}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <FeatureCard
                                            icon={card.icon}
                                            title={card.title}
                                            description={card.description}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Phone Container - Frame is static, only screen content animates */}
                    <div className="flex justify-center items-center">
                        <PhoneFrame placeholderSrc={meetingsScreen.src}>
                            <AnimatePresence initial={false}>
                                {activeScreen && (
                                    <motion.img
                                        key={activeTab}
                                        src={activeScreen.screen.src}
                                        alt={`${activeScreen.label} screen`}
                                        className="absolute inset-0 w-full h-auto object-cover"
                                        variants={screenVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    />
                                )}
                            </AnimatePresence>
                        </PhoneFrame>
                    </div>

                    {/* Right Cards */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeTab}-right-cards`}
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {rightCards.map((card, i) => (
                                    <motion.div
                                        key={card.title}
                                        custom={i}
                                        variants={rightCardVariants}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <FeatureCard
                                            icon={card.icon}
                                            title={card.title}
                                            description={card.description}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Cards - shown below phone on smaller screens */}
                <div className="lg:hidden mt-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeTab}-mobile-cards`}
                            className="grid grid-cols-2 gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {cards.map((card, i) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                >
                                    <div className="bg-white/20 backdrop-blur-2xl rounded-xl p-3 border border-white/40 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                                                <card.icon size={16} className="text-amber-700" />
                                            </div>
                                            <div>
                                                <div className="text-amber-700 text-xs">{card.title}</div>
                                                <div className="text-[10px] text-gray-500">{card.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
