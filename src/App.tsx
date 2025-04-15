import './index.css'
import { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { motion } from 'framer-motion';
import { es } from './locales/es';
import AnimatedHearts from './components/AnimatedHearts';
import AnniversaryCountdown from './components/AnniversaryCountdown';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  const [t] = useState(() => es);

  const thingsAboutYou = [
    { title: 'Tu sonrisa', image: '/images/smile.jpg', description: 'Ilumina mi mundo cada día' },
    { title: 'Tu risa', image: '/images/laugh.jpg', description: 'Es la melodía más hermosa' },
    { title: 'Tu forma de ser', image: '/images/personality.jpg', description: 'Única y maravillosa' },
    { title: 'Tu bondad', image: '/images/kindness.jpg', description: 'Tu corazón es puro oro' },
    { title: 'Tu amor', image: '/images/love.jpg', description: 'El regalo más precioso' },
  ];

  const carouselItemTemplate = (item: { title: string; image: string; description: string }) => {
    return (
      <motion.div 
        className="relative h-80 w-full rounded-xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-6">
          <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
          <p className="text-white/90 text-center">{item.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-animated">
      <AnimatedHearts />
      <BackgroundMusic />
      
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
          <AnniversaryCountdown />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.contact.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="love-card">
              <h3 className="text-2xl font-bold text-love-accent mb-4">{t.contact.pain.title}</h3>
              <p className="text-love-dark mb-4">{t.contact.pain.description}</p>
              <a 
                href={`tel:${t.contact.pain.phone}`} 
                className="love-button inline-block"
              >
                {t.contact.pain.phone}
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="love-card">
              <h3 className="text-2xl font-bold text-love-accent mb-4">{t.contact.happiness.title}</h3>
              <p className="text-love-dark">{t.contact.happiness.description}</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="love-card">
              <h3 className="text-2xl font-bold text-love-accent mb-4">{t.contact.relationship.title}</h3>
              <p className="text-love-dark">{t.contact.relationship.description}</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 100 Things Section */}
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
        <div className="max-w-4xl mx-auto">
          <Carousel
            value={thingsAboutYou}
            itemTemplate={carouselItemTemplate}
            numVisible={1}
            numScroll={1}
            autoplayInterval={5000}
            className="custom-carousel"
            circular
          />
        </div>
      </section>
    </div>
  );
}

export default App; 