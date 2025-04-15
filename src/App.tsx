import './index.css'
import { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { motion } from 'framer-motion';
import { es } from './locales/es';
import AnimatedHearts from './components/AnimatedHearts';
import AnniversaryCountdown from './components/AnniversaryCountdown';
import BackgroundMusic from './components/BackgroundMusic';
import LoveLetter from './components/LoveLetter';
import Contact from './components/Contact';

function App() {
  const [t] = useState(() => es);

  // Sample items for the carousel
  const lovePhases = t.carousel.phases;

  const carouselItemTemplate = (item: { title: string; description: string; image: string }) => {
    return (
      <motion.div 
        className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center z-20">
          <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
          <p className="text-white/90 mb-4">{item.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-animated">
      <AnimatedHearts />
      <BackgroundMusic t={t} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <motion.div 
          className="text-center z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-love-accent mb-6 animate-float">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-love-dark/80">
            {t.hero.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <AnniversaryCountdown t={t} />
        </div>
      </section>
      
      {/* Love Letter (moved to appear after countdown) */}
      <LoveLetter t={t} />

      {/* Contact Section */}
      <Contact t={t} />

      {/* Love Phases Section */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.things.title}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t.things.subtitle}
        </motion.p>
        <div className="max-w-5xl mx-auto mt-10">
          <Carousel
            value={lovePhases}
            itemTemplate={carouselItemTemplate}
            numVisible={1}
            numScroll={1}
            autoplayInterval={5000}
            className="custom-carousel"
            circular
            showIndicators
            showNavigators
          />
        </div>
      </section>
    </div>
  );
}

export default App; 