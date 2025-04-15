import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from 'primereact/dialog';

interface LoveLetterProps {
  t: any;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLetter = () => {
    setIsOpen(true);
  };

  const closeLetter = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center -mt-10 mb-16 relative z-20">
        <motion.button
          className="bg-love-accent text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openLetter}
        >
          <span className="text-xl mr-2">💌</span>
          <span className="text-black">{t.loveLetter.open}</span>
        </motion.button>
      </div>

      <Dialog
        visible={isOpen}
        onHide={closeLetter}
        draggable={false}
        resizable={false}
        className="love-letter-dialog"
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
            <h2 className="text-love-accent font-bold text-xl">{t.loveLetter.title}</h2>
          </div>
        }
        footer={
          <div className="flex justify-center  ">
            <motion.button
              className="bg-love-accent  px-4 py-2 rounded-full shadow-lg text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeLetter}
            >
              {t.loveLetter.close}
            </motion.button>
          </div>
        }
      >
        <div className="p-4 bg-white rounded-lg shadow-inner border border-pink-200">
          <p className="text-love-dark leading-relaxed italic text-center">
            {t.loveLetter.content}
          </p>
          <div className="flex justify-center mt-4">
            <motion.div
              className="text-4xl"
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
    </>
  );
};

export default LoveLetter; 