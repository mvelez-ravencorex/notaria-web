import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, ArrowRight, MessageCircle, Languages, SmilePlus } from 'lucide-react';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import screenshotMain from '../../assets/images/hero-screen.png';

const heroUsers = [
    {
        id: 1,
        name: "Sarah Chen",
        designation: "Product Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
        id: 2,
        name: "Marcus Johnson",
        designation: "Founder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        designation: "Legal Counsel",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
        id: 4,
        name: "David Park",
        designation: "CEO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
];

const FloatingCard = ({ children, className = '', delay = 0, rotate = 0 }: { children: React.ReactNode; className?: string; delay?: number; rotate?: number }) => (
    <motion.div
        className={`absolute bg-white/70 backdrop-blur-2xl rounded-2xl shadow-xl border border-black/5 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        style={{ transform: `rotate(${rotate}deg)` }}
    >
        {children}
    </motion.div>
);

const Hero = () => {
    return (
        <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(245, 235, 220)"
            gradientBackgroundEnd="rgb(230, 215, 195)"
            firstColor="205, 170, 125"
            secondColor="180, 145, 100"
            thirdColor="220, 190, 150"
            fourthColor="195, 160, 115"
            fifthColor="210, 180, 140"
            pointerColor="190, 155, 110"
            containerClassName="!h-auto min-h-screen"
            className="relative z-10"
        >
            <section className="min-h-screen flex items-start justify-center relative overflow-hidden pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">

                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left z-10">
                            {/* Badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-gray-800 text-sm font-medium mb-8 backdrop-blur-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Maintenant avec AI Chat pour vos réunions
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Intelligence de réunions{' '}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-yellow-600">en quelques secondes</span>
                            </motion.h1>

                            <motion.p
                                className="text-lg md:text-xl text-gray-600 max-w-xl mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Enregistrez, transcrivez et résumez vos réunions avec l'IA. Analyse de sentiment, tâches, identification des intervenants et traduction en direct — le tout sur iPhone et iPad.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all text-lg shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 flex items-center gap-2">
                                    Commencez gratuitement
                                    <ArrowRight size={20} />
                                </button>
                            </motion.div>

                            {/* Trust Line */}
                            <motion.div
                                className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="flex items-center gap-3">
                                    <AnimatedTooltip items={heroUsers} />
                                    <span className="ml-2">2 000+ utilisateurs</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                    <span className="ml-1">4.9/5</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - iPhone Mockup with Cards */}
                        <div className="flex-1 relative flex justify-center items-center">
                            {/* iPhone Mockup */}
                            <motion.div
                                className="relative z-20"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                {/* iPhone Frame - Dark style */}
                                <div className="relative w-[280px] md:w-[320px] lg:w-[340px]">
                                    {/* Phone body - dark frame */}
                                    <div className="relative rounded-[45px] bg-gradient-to-b from-[#3a3a3c] via-[#2c2c2e] to-[#1c1c1e] p-[6px] shadow-2xl shadow-black/50">
                                        {/* Inner frame */}
                                        <div className="rounded-[40px] bg-gradient-to-b from-[#48484a] to-[#3a3a3c] p-[2px]">
                                            {/* Screen */}
                                            <div className="relative rounded-[38px] bg-white overflow-hidden">
                                                {/* Cover status bar from image */}
                                                <div className="absolute top-0 left-0 right-0 h-[32px] bg-white z-20"></div>
                                                {/* Notch */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-b-2xl z-30 flex items-center justify-center">
                                                    <div className="w-[50px] h-[4px] bg-gray-800 rounded-full"></div>
                                                </div>
                                                {/* Screen content */}
                                                <img
                                                    src={screenshotMain.src}
                                                    alt="NotarIA App"
                                                    className="w-full aspect-[9/19.5] object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Side buttons - dark */}
                                    <div className="absolute -left-[1px] top-24 w-[2px] h-6 bg-[#48484a] rounded-l-sm"></div>
                                    <div className="absolute -left-[1px] top-36 w-[2px] h-12 bg-[#48484a] rounded-l-sm"></div>
                                    <div className="absolute -left-[1px] top-52 w-[2px] h-12 bg-[#48484a] rounded-l-sm"></div>
                                    <div className="absolute -right-[1px] top-40 w-[2px] h-16 bg-[#48484a] rounded-r-sm"></div>
                                </div>
                            </motion.div>

                            {/* Floating Cards around iPhone */}

                            {/* === RIGHT SIDE CARDS (visible on all screens) === */}

                            {/* AI Chat Card - Top Right */}
                            <FloatingCard className="right-0 -translate-x-0 lg:right-auto lg:left-full lg:-ml-20 top-8 p-3 w-[170px] md:w-[185px] hidden md:block" delay={0.5} rotate={5}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                        <MessageCircle size={14} className="text-blue-400" />
                                    </div>
                                    <span className="text-gray-800 text-xs font-medium">AI Chat</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-gray-100 rounded-lg px-2 py-1.5">
                                        <p className="text-gray-600 text-[10px]">Quelles étaient les tâches ?</p>
                                    </div>
                                    <div className="bg-amber-50 rounded-lg px-2 py-1.5">
                                        <p className="text-amber-700 text-[10px]">3 tâches ont été assignées...</p>
                                    </div>
                                </div>
                            </FloatingCard>

                            {/* AI Summary Card - Middle Right */}
                            <FloatingCard className="right-0 -translate-x-0 lg:right-auto lg:left-full lg:-ml-20 top-1/3 p-3 w-[175px] md:w-[190px] hidden md:block" delay={0.6} rotate={-4}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center">
                                        <span className="text-green-400 text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-800 text-xs font-medium">AI Summary</span>
                                    <span className="ml-auto text-[10px] text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full">Ready</span>
                                </div>
                                <div className="space-y-1 text-xs text-gray-500">
                                    <ul className="space-y-1 pl-1">
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-amber-500">•</span>
                                            Objectifs Q4 confirmés
                                        </li>
                                        <li className="flex items-start gap-1.5">
                                            <span className="text-amber-500">•</span>
                                            Lancement en novembre
                                        </li>
                                    </ul>
                                </div>
                            </FloatingCard>

                            {/* Sentiment Analysis Card - Bottom Right */}
                            <FloatingCard className="right-0 -translate-x-0 lg:right-auto lg:left-full lg:-ml-20 top-2/3 p-3 w-[175px] md:w-[190px] hidden md:block" delay={0.7} rotate={-3}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-rose-500/20 flex items-center justify-center">
                                        <SmilePlus size={14} className="text-rose-400" />
                                    </div>
                                    <span className="text-gray-800 text-xs font-medium">Sentiment</span>
                                </div>
                                <div className="mb-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[10px] text-gray-400">Tonalité générale</span>
                                        <span className="text-[10px] font-medium text-emerald-500">Positif</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-gray-400">Intervenant A</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-8 h-1 bg-emerald-300 rounded-full"></div>
                                            <span className="text-[9px] text-emerald-500">😊</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-gray-400">Intervenant B</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-6 h-1 bg-amber-300 rounded-full"></div>
                                            <span className="text-[9px] text-amber-500">😐</span>
                                        </div>
                                    </div>
                                </div>
                            </FloatingCard>

                            {/* === LEFT SIDE CARDS (visible only on xl screens) === */}

                            {/* Recording Card - Top Left */}
                            <FloatingCard className="hidden xl:block right-full -mr-20 top-8 p-3 w-[170px]" delay={0.8} rotate={-6}>
                                <div className="bg-gray-50 rounded-xl p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-lg bg-amber-600 flex items-center justify-center">
                                            <Play size={10} className="text-white fill-white ml-0.5" />
                                        </div>
                                        <span className="text-xs font-medium text-gray-800">Enregistrement</span>
                                    </div>
                                    <div className="flex items-center justify-between w-full h-6">
                                        {[...Array(20)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 mx-[1px] bg-amber-400 rounded-full"
                                                animate={{ height: [4, Math.random() * 14 + 4, 4] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.04 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </FloatingCard>

                            {/* Translation Card - Middle Left */}
                            <FloatingCard className="hidden xl:block right-full -mr-20 top-1/3 p-3 w-[175px]" delay={0.9} rotate={3}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                        <Languages size={14} className="text-emerald-400" />
                                    </div>
                                    <span className="text-gray-800 text-xs font-medium">Traduction</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[10px]">
                                        <span className="flex items-center gap-1">
                                            <span className="text-base">🇺🇸</span>
                                            <span className="text-gray-400">EN</span>
                                        </span>
                                        <span className="text-gray-300">→</span>
                                        <span className="flex items-center gap-1">
                                            <span className="text-base">🇫🇷</span>
                                            <span className="text-emerald-400">FR</span>
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-[11px]">"Bonjour, bienvenue..."</p>
                                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-gray-200">
                                        <span className="text-sm">🇫🇷</span>
                                        <span className="text-sm">🇺🇸</span>
                                        <span className="text-sm">🇧🇷</span>
                                        <span className="text-sm">🇪🇸</span>
                                        <span className="text-sm">🇩🇪</span>
                                    </div>
                                </div>
                            </FloatingCard>

                            {/* Testimonial Card - Bottom Left */}
                            <FloatingCard className="hidden xl:block right-full -mr-20 top-2/3 p-3 w-[195px]" delay={1.0} rotate={4}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-gray-800 text-xs font-medium">
                                        JD
                                    </div>
                                    <div>
                                        <div className="text-gray-800 text-xs font-medium">Jessica D.</div>
                                        <div className="text-gray-400 text-[10px]">Product Manager</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-[11px] mb-2">
                                    "Ça nous fait gagner <span className="bg-amber-100 px-1 rounded text-amber-700">des heures chaque semaine</span> !"
                                </p>
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                            </FloatingCard>
                        </div>
                    </div>
                </div>
            </section>
        </BackgroundGradientAnimation>
    );
};

export default Hero;
