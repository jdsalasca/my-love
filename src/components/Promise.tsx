import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from 'primereact/dialog';

interface PromiseProps {
  t: any;
}

const Promise: React.FC<PromiseProps> = ({ t }) => {
  const [showModal, setShowModal] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState<boolean | null>(null);

  const handleYes = () => {
    setAnswer(true);
    setAnswered(true);
    setShowModal(true);
  };

  const handleNo = () => {
    setAnswer(false);
    setAnswered(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {t.promise.title}
      </motion.h2>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          className="text-xl text-love-dark/80 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t.promise.text}
        </motion.p>
        
        {!answered ? (
          <div className="flex justify-center gap-4  text-black">
            <motion.button
              className="bg-love-accent px-6 py-3 rounded-full shadow-lg text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
            >
              {t.promise.yesButton}
            </motion.button>
            
            <motion.button
              className="bg-white text-love-dark px-6 py-3 rounded-full shadow-lg border border-love-dark/20 text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNo}
            >
              {t.promise.noButton}
            </motion.button>
          </div>
        ) : (
          <div className="flex justify-center text-7xl">
            {answer ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                ❤️
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                😢
              </motion.div>
            )}
          </div>
        )}
      </div>
      
      <Dialog
        visible={showModal}
        onHide={closeModal}
        draggable={false}
        resizable={false}
        className="love-modal"
        header={
          <div className="flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-3xl mr-2"
            >
              ❤️
            </motion.div>
            <h2 className="text-love-accent font-bold text-xl">{t.promise.modalTitle}</h2>
          </div>
        }
        footer={
          <div className="flex justify-center">
            <motion.button
              className="bg-love-accent px-4 py-2 rounded-full shadow-lg text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeModal}
            >
              {t.promise.modalClose}
            </motion.button>
          </div>
        }
      >
        <div className="p-4 text-center text-black">
          <p className="text-love-dark leading-relaxed">{t.promise.modalText}</p>
          <div className="flex justify-center mt-4">
            <motion.div
              className="text-4xl text-black"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              ❤️
            </motion.div>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default Promise; 