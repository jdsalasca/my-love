import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <motion.button
        className="bg-love-accent text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <>
            <span className="mr-2">🔊</span>
            <span>Música</span>
          </>
        ) : (
          <>
            <span className="mr-2">🔇</span>
            <span>Música</span>
          </>
        )}
      </motion.button>
      {isPlaying && (
        <audio
          src="/music/romantic-background.mp3"
          autoPlay
          loop
          className="hidden"
        />
      )}
    </div>
  );
};

export default BackgroundMusic; 