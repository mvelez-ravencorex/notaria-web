import React from 'react';
import logoDark from '../../assets/images/notaria-dark.png';

const footerLinks = {
    Prodotto: [
        { label: 'Funzionalità', href: '#features' },
        { label: 'Come funziona', href: '#how-it-works' },
        { label: 'Prezzi', href: '#pricing' },
    ],
    Azienda: [
        { label: 'Chi siamo', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contatti', href: '#' }
    ],
    Supporto: [
        { label: 'Centro assistenza', href: '/support' },
        { label: 'Domande frequenti', href: '/support#faq' },
    ],
    Legale: [
        { label: 'Informativa sulla privacy', href: '/privacy' },
        { label: 'Termini di servizio', href: '/terms' }
    ]
};

const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/notaria_app', icon: 'X' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'GitHub', href: '#', icon: 'gh' }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100" role="contentinfo">
            <div className="max-w-6xl mx-auto px-6 lg:px-20 py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8">
                    {/* Brand */}
                    <div className="col-span-2">
                        <a href="/" className="flex items-center gap-2 mb-4" aria-label="NotarIA Home">
                            <img src={logoDark.src} alt="NotarIA Logo" className="h-10 w-10 rounded-xl" />
                            <span className="text-gray-900 font-bold text-xl">NotarIA</span>
                        </a>
                        <p className="text-gray-500 text-sm mb-6 max-w-xs">
                            Trascrizione IA delle riunioni, riassunti e attività. 100% privacy sul dispositivo.
                        </p>
                        <nav aria-label="Social media links">
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#92600a] hover:text-white transition-all text-sm font-medium"
                                        aria-label={`Follow us on ${social.name}`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <nav key={category} aria-label={`${category} links`}>
                            <h4 className="text-gray-900 font-semibold mb-4 text-sm">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-gray-500 text-sm hover:text-[#92600a] transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} NotarIA. Tutti i diritti riservati.
                    </p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                            <span>Tutti i sistemi operativi</span>
                        </div>
                        <a
                            href="https://apps.apple.com/app/notaria"
                            className="text-[#92600a] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Scarica dall'App Store
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
