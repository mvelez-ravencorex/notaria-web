import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    text: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "Sarah Chen",
        role: "Product Managerin bei Stripe",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        text: "NotarIA hat die Art und Weise, wie unser Team Meetings handhabt, komplett verändert. Wir sparen mindestens 5 Stunden pro Woche bei der Dokumentation.",
        rating: 5,
    },
    {
        name: "Marcus Johnson",
        role: "Gründer von TechStart",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        text: "Die KI-Zusammenfassungen sind unglaublich präzise. Es ist, als hätte man einen persönlichen Assistenten in jedem Meeting.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Rechtsberaterin bei Lawfirm LLP",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        text: "Für die juristische Arbeit ist Genauigkeit alles. NotarIA liefert durchgehend präzise Transkriptionen.",
        rating: 5,
    },
    {
        name: "David Park",
        role: "CEO von CloudScale",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        text: "Wir haben dies im gesamten Unternehmen eingeführt. Der Return on Investment war innerhalb des ersten Monats offensichtlich.",
        rating: 5,
    }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
    <motion.div
        className="flex flex-col h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
    >
        {/* Stars */}
        <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0 flex-1">
            <p className="text-gray-600 leading-relaxed">"{testimonial.text}"</p>
        </div>

        {/* Footer */}
        <div className="flex items-center p-6 pt-0 mt-auto">
            <div className="flex items-center gap-4">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-xl w-10 h-10 object-cover"
                />
                <div>
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    return (
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        <motion.div
                            className="inline-block rounded-lg bg-amber-700 px-3 py-1 text-sm text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Referenzen
                        </motion.div>

                        <motion.h2
                            className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Das Vertrauen von <span className="bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Tausenden</span> Teams
                        </motion.h2>

                        <motion.p
                            className="max-w-[900px] text-gray-600 md:text-xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Sehen Sie, was unsere Kunden über uns sagen.
                        </motion.p>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
