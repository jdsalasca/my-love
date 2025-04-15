import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BackgroundMusicProps {
  t: any;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ t }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const songs = [
    "/music/romantic-background.mp3",
    "/music/second-love-song.mp3"
  ];

  useEffect(() => {
    // Setup audio
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      
      // Handle song ended event to play the next one
      const handleSongEnd = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
      };
      
      audioRef.current.addEventListener('ended', handleSongEnd);
      
      // Start playing after 2 seconds
      const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(e => console.error("Error playing audio:", e));
        }
      }, 2000);
      
      // Cleanup event listener and timer
      return () => {
        clearTimeout(timer);
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleSongEnd);
        }
      };
    }
  }, []);

  // Update audio src when song changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex];
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
      }
    }
  }, [currentSongIndex, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
      }
    }
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
            <span>{t.music.pause}</span>
          </>
        ) : (
          <>
            <span className="mr-2">🔇</span>
            <span>{t.music.play}</span>
          </>
        )}
      </motion.button>
      <audio
        ref={audioRef}
        src={songs[currentSongIndex]}
        className="hidden"
      />
    </div>
  );
};

export default BackgroundMusic; 