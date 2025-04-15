import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'primereact/card';

interface WhatsNewProps {
  t: any;
}

interface Event {
  title: string;
  date: string;
  description: string;
}

const WhatsNew: React.FC<WhatsNewProps> = ({ t }) => {
  return (
    <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {t.whatsNew.title}
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {t.whatsNew.subtitle}
      </motion.p>
      
      <div className="max-w-4xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.whatsNew.events.map((event: Event, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="love-card h-full">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">📅</span>
                  <h3 className="text-xl font-bold text-love-accent">{event.title}</h3>
                </div>
                <p className="text-love-dark/80 font-semibold mb-2">{event.date}</p>
                <p className="text-love-dark/70">{event.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew; 