import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
}

const AnimatedHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hearts.length < 20) {
        const newHeart: Heart = {
          id: count,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 50,
          size: Math.random() * 20 + 10,
        };
        setHearts((prev) => [...prev, newHeart]);
        setCount((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hearts.length, count]);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setHearts((prev) => prev.filter((heart) => heart.y > -50));
    }, 1000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-love-accent"
          initial={{ y: heart.y, x: heart.x, opacity: 1 }}
          animate={{
            y: -50,
            x: heart.x + (Math.random() * 100 - 50),
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            ease: 'linear',
          }}
          style={{ fontSize: `${heart.size}px` }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedHearts; 