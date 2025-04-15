import React from 'react';
import { Card } from 'primereact/card';
import { motion } from 'framer-motion';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
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
              className="love-button inline-block text-black"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="love-card">
            <h3 className="text-2xl font-bold text-love-accent mb-4">{t.contact.future.title}</h3>
            <p className="text-love-dark">{t.contact.future.description}</p>
          </Card>
        </motion.div>

        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="love-card">
            <h3 className="text-2xl font-bold text-love-accent mb-4">{t.contact.adventures.title}</h3>
            <p className="text-love-dark">{t.contact.adventures.description}</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 