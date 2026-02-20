import React, { useState } from 'react';
import recordingCard from '../../assets/images/recording-card.png';
import summaryCard from '../../assets/images/summary-card.png';
import translationCard from '../../assets/images/translation-card.png';
import sentimentCard from '../../assets/images/sentiment-card.png';
import aichatCard from '../../assets/images/aichat-card.png';

const accordionItems = [
  {
    id: 1,
    title: 'Grabación',
    imageUrl: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2070&auto=format&fit=crop',
    cardImage: recordingCard.src,
  },
  {
    id: 2,
    title: 'Resumen IA',
    imageUrl: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop',
    cardImage: summaryCard.src,
  },
  {
    id: 3,
    title: 'Traducción',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    cardImage: translationCard.src,
  },
  {
    id: 4,
    title: 'Sentimiento',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop',
    cardImage: sentimentCard.src,
  },
  {
    id: 5,
    title: 'AI Chat',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    cardImage: aichatCard.src,
  },
];

interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    imageUrl: string;
    cardImage?: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay for title readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-transparent"></div>

      {/* Card Overlay - 3D */}
      {item.cardImage && (
        <div
          className={`
            absolute inset-0 flex items-center justify-center p-6
            transition-all duration-500 ease-in-out
            ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          `}
          style={{ perspective: '800px' }}
        >
          <div
            className="relative w-[90%] rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
            style={{
              transform: 'rotateY(-8deg) rotateX(4deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={item.cardImage}
              alt={`${item.title} card`}
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/10 pointer-events-none"></div>
          </div>
        </div>
      )}

      {/* Title with background */}
      <div
        className={`
          absolute z-20 transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-0 left-0 right-0 py-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent'
              : 'bottom-0 left-0 right-0 h-full'
          }
        `}
      >
        <span
          className={`
            absolute text-white text-lg font-semibold whitespace-nowrap drop-shadow-lg
            transition-all duration-300 ease-in-out
            ${
              isActive
                ? 'bottom-4 left-1/2 -translate-x-1/2 rotate-0'
                : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 -rotate-90 origin-center'
            }
          `}
        >
          {item.title}
        </span>
      </div>
    </div>
  );
};

export function FeaturesAccordionEs() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wide mb-6">
              Funcionalidades Poderosas
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Todo lo que necesitas para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-600">
                reuniones más inteligentes
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Desde la grabación hasta insights impulsados por IA, NotarIA maneja cada aspecto de tus reuniones para que puedas enfocarte en lo que más importa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="cta-glow inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Ir al App Store
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
